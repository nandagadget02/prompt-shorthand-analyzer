/**
 * CrowLLM API Service Adapter (OpenAI-Compatible) V3.9
 * 
 * Prinsip:
 * 1. 100% BYOK (Bring Your Own Key) - tersimpan aman di client (localStorage).
 * 2. OpenAI Compatible Protocol:
 *    - Base URL: https://crowllm.com/v1
 *    - Chat Endpoint: /chat/completions
 *    - Auth: Bearer <API_KEY>
 * 3. Vision Guard: Memastikan hanya model pendukung vision yang menerima payload gambar.
 * 4. Graceful Fallback: Tidak pernah membuat aplikasi crash jika koneksi atau model gagal.
 */

import { StorageService } from './storageService.js';

export const CROWLLM_STATUS = {
  CONNECTED: 'CONNECTED',
  UNCONFIGURED: 'UNCONFIGURED',
  FAILED: 'FAILED'
};

export const DEFAULT_CROWLLM_CONFIG = {
  BASE_URL: 'https://crowllm.com/v1',
  DEFAULT_MODEL: '',
  TIMEOUT_MS: 25000,
  MAX_RETRIES: 1
};

export class CrowLlmService {
  constructor() {
    this.status = CROWLLM_STATUS.UNCONFIGURED;
    this.lastError = null;
    this.activeModel = '';
    this.initStatusFromStorage();
  }

  initStatusFromStorage() {
    const key = StorageService.getCrowLlmApiKey();
    if (!key) {
      this.status = CROWLLM_STATUS.UNCONFIGURED;
    }
  }

  getStatus() {
    return {
      status: this.status,
      error: this.lastError,
      hasKey: Boolean(StorageService.getCrowLlmApiKey()),
      model: StorageService.getCrowLlmModel() || '(Belum dipilih)',
      baseUrl: StorageService.getCrowLlmBaseUrl() || DEFAULT_CROWLLM_CONFIG.BASE_URL
    };
  }

  /**
   * Helper: Deteksi apakah nama model mendukung input gambar (vision)
   */
  isVisionCapableModel(modelName) {
    if (!modelName || typeof modelName !== 'string') return false;
    const lower = modelName.toLowerCase();
    return (
      lower.includes('vision') ||
      lower.includes('multimodal') ||
      lower.includes('omni') ||
      lower.includes('4o') ||
      lower.includes('gemini') ||
      lower.includes('claude-3') ||
      lower.includes('vl') ||
      lower.includes('pixtral') ||
      lower.includes('qwen-vl')
    );
  }

  /**
   * Helper: Parse JSON dengan pembersihan markdown fence
   */
  extractJson(rawText) {
    if (!rawText || typeof rawText !== 'string') {
      throw new Error('Respon kosong dari CrowLLM.');
    }

    try {
      return JSON.parse(rawText.trim());
    } catch (_) {}

    let cleaned = rawText
      .replace(/```(?:json)?/gi, '')
      .replace(/```/g, '')
      .trim();

    try {
      return JSON.parse(cleaned);
    } catch (_) {}

    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace > firstBrace) {
      const candidate = cleaned.substring(firstBrace, lastBrace + 1);
      try {
        return JSON.parse(candidate);
      } catch (_) {}
    }

    const firstBracket = cleaned.indexOf('[');
    const lastBracket = cleaned.lastIndexOf(']');
    if (firstBracket !== -1 && lastBracket > firstBracket) {
      const candidate = cleaned.substring(firstBracket, lastBracket + 1);
      try {
        return JSON.parse(candidate);
      } catch (_) {}
    }

    throw new Error('Gagal mengekstrak format JSON valid dari respon CrowLLM.');
  }

  /**
   * Mengambil daftar model yang tersedia dari endpoint GET /models
   */
  async fetchAvailableModels(apiKey = null, customBaseUrl = null) {
    const key = (apiKey || StorageService.getCrowLlmApiKey() || '').trim();
    const baseUrl = (customBaseUrl || StorageService.getCrowLlmBaseUrl() || DEFAULT_CROWLLM_CONFIG.BASE_URL).replace(/\/$/, '');

    if (!key) {
      throw new Error('API Key CrowLLM belum diisi.');
    }

    const url = `${baseUrl}/models`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), DEFAULT_CROWLLM_CONFIG.TIMEOUT_MS);

    try {
      const resp = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!resp.ok) {
        if (resp.status === 401 || resp.status === 403) {
          throw new Error('API Key CrowLLM tidak valid atau otorisasi ditolak.');
        }
        if (resp.status === 404) {
          throw new Error('Endpoint /models tidak didukung oleh Base URL ini.');
        }
        throw new Error(`Gagal mengambil daftar model (HTTP ${resp.status}).`);
      }

      const data = await resp.json();
      if (data && Array.isArray(data.data)) {
        return data.data.map(item => typeof item === 'string' ? item : (item.id || item.name || '')).filter(Boolean);
      } else if (Array.isArray(data)) {
        return data.map(item => typeof item === 'string' ? item : (item.id || item.name || '')).filter(Boolean);
      }
      return [];
    } catch (err) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        throw new Error('Permintaan ke CrowLLM melebihi batas waktu (timeout).');
      }
      throw err;
    }
  }

  /**
   * Menguji koneksi API CrowLLM
   */
  async testConnection(apiKey, modelName, customBaseUrl = null) {
    const key = (apiKey || StorageService.getCrowLlmApiKey() || '').trim();
    const model = (modelName || StorageService.getCrowLlmModel() || '').trim();
    const baseUrl = (customBaseUrl || StorageService.getCrowLlmBaseUrl() || DEFAULT_CROWLLM_CONFIG.BASE_URL).replace(/\/$/, '');

    if (!key) {
      this.status = CROWLLM_STATUS.UNCONFIGURED;
      this.lastError = 'API Key CrowLLM belum diisi.';
      return { success: false, error: this.lastError };
    }

    // Jika model kosong, coba ambil daftar model terlebih dahulu
    let targetModel = model;
    if (!targetModel) {
      try {
        const available = await this.fetchAvailableModels(key, baseUrl);
        if (available && available.length > 0) {
          targetModel = available[0];
          StorageService.setCrowLlmModel(targetModel);
        }
      } catch (_) {}
    }

    if (!targetModel) {
      targetModel = 'gpt-3.5-turbo'; // Standar fallback model OpenAI-compatible jika belum ditentukan
    }

    try {
      const response = await this.chatCompletion({
        messages: [
          { role: 'system', content: 'You are a test ping agent. Answer in JSON.' },
          { role: 'user', content: 'Ping. Output {"status":"connected"}.' }
        ],
        apiKey: key,
        model: targetModel,
        baseUrl,
        temperature: 0.1,
        maxTokens: 50
      });

      this.status = CROWLLM_STATUS.CONNECTED;
      this.lastError = null;
      this.activeModel = targetModel;

      return {
        success: true,
        model: targetModel,
        message: `Tersambung ke CrowLLM (Model: ${targetModel})`
      };
    } catch (err) {
      this.status = CROWLLM_STATUS.FAILED;
      this.lastError = err.message;
      return {
        success: false,
        error: err.message
      };
    }
  }

  /**
   * Inti Chat Completion via OpenAI-compatible endpoint
   */
  async chatCompletion({
    messages = [],
    apiKey = null,
    model = null,
    baseUrl = null,
    temperature = 0.2,
    maxTokens = 2048,
    responseFormat = null,
    retries = DEFAULT_CROWLLM_CONFIG.MAX_RETRIES
  }) {
    const key = (apiKey || StorageService.getCrowLlmApiKey() || '').trim();
    const activeModel = (model || StorageService.getCrowLlmModel() || '').trim();
    const activeBaseUrl = (baseUrl || StorageService.getCrowLlmBaseUrl() || DEFAULT_CROWLLM_CONFIG.BASE_URL).replace(/\/$/, '');

    if (!key) {
      throw new Error('API Key CrowLLM belum diisi.');
    }
    if (!activeModel) {
      throw new Error('Model ID CrowLLM belum ditentukan.');
    }

    const endpoint = `${activeBaseUrl}/chat/completions`;
    const payload = {
      model: activeModel,
      messages,
      temperature,
      max_tokens: maxTokens
    };

    if (responseFormat) {
      payload.response_format = responseFormat;
    }

    let lastError = null;
    for (let attempt = 0; attempt <= retries; attempt++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), DEFAULT_CROWLLM_CONFIG.TIMEOUT_MS);

      try {
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!resp.ok) {
          let errorDetail = '';
          try {
            const errData = await resp.json();
            errorDetail = errData?.error?.message || JSON.stringify(errData);
          } catch (_) {}

          if (resp.status === 401 || resp.status === 403) {
            throw new Error(`Otorisasi CrowLLM gagal (401/403): ${errorDetail || 'API Key tidak valid.'}`);
          }
          if (resp.status === 402) {
            throw new Error(`Saldo/kuota akun CrowLLM tidak mencukupi (402): ${errorDetail || 'Insufficient balance.'}`);
          }
          if (resp.status === 429) {
            throw new Error(`Rate limit CrowLLM tercapai (429): ${errorDetail || 'Terlalu banyak permintaan.'}`);
          }
          if (resp.status === 404) {
            throw new Error(`Model '${activeModel}' tidak ditemukan di CrowLLM (404).`);
          }
          if (resp.status >= 500) {
            const err = new Error(`Server CrowLLM mengalami gangguan (${resp.status}): ${errorDetail || 'Internal Server Error'}`);
            if (attempt < retries) {
              lastError = err;
              await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
              continue;
            }
            throw err;
          }

          throw new Error(`CrowLLM Error (${resp.status}): ${errorDetail || resp.statusText}`);
        }

        const data = await resp.json();
        const content = data?.choices?.[0]?.message?.content;
        if (!content || typeof content !== 'string') {
          throw new Error('Respon dari CrowLLM tidak memuat konten pesan.');
        }

        return content;
      } catch (err) {
        clearTimeout(timeoutId);
        lastError = err;
        if (err.name === 'AbortError') {
          lastError = new Error('Koneksi ke CrowLLM melebihi batas waktu (timeout).');
        }
        if (attempt < retries && (err.name === 'AbortError' || err.message.includes('network') || err.message.includes('Failed to fetch'))) {
          await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
          continue;
        }
        break;
      }
    }

    throw lastError || new Error('Gagal menghubungi CrowLLM.');
  }

  /**
   * Analisis teks prompt untuk rekomendasi shorthand visual
   */
  async analyzePrompt(rawPrompt, systemInstruction, candidateModel = null) {
    const messages = [
      { role: 'system', content: systemInstruction },
      { role: 'user', content: `Input Prompt:\n"${rawPrompt}"` }
    ];

    const rawText = await this.chatCompletion({
      messages,
      model: candidateModel,
      temperature: 0.2,
      maxTokens: 2500,
      responseFormat: { type: 'json_object' }
    });

    return this.extractJson(rawText);
  }

  /**
   * Analisis metadata shorthand baru (Auto-Fill)
   */
  async analyzeShorthandMetadata({ code, description }, systemInstruction, candidateModel = null) {
    const messages = [
      { role: 'system', content: systemInstruction },
      { role: 'user', content: `Shorthand Code: "${code}"\nDeskripsi: "${description}"` }
    ];

    const rawText = await this.chatCompletion({
      messages,
      model: candidateModel,
      temperature: 0.2,
      maxTokens: 1000,
      responseFormat: { type: 'json_object' }
    });

    return this.extractJson(rawText);
  }

  /**
   * Pencarian online kamus shorthand
   */
  async searchOnlineShorthand(query, systemInstruction, candidateModel = null) {
    const messages = [
      { role: 'system', content: systemInstruction },
      { role: 'user', content: `Kueri Pencarian:\n"${query}"` }
    ];

    const rawText = await this.chatCompletion({
      messages,
      model: candidateModel,
      temperature: 0.2,
      maxTokens: 1500,
      responseFormat: { type: 'json_object' }
    });

    return this.extractJson(rawText);
  }

  /**
   * Pengayaan prompt (Prompt Enrichment)
   */
  async enrichPrompt(promptText, systemInstruction, candidateModel = null) {
    const messages = [
      { role: 'system', content: systemInstruction },
      { role: 'user', content: `Kembangkan prompt optimal berikut menjadi representasi visual sinematik berkualitas tinggi:\n"${promptText}"` }
    ];

    const rawText = await this.chatCompletion({
      messages,
      model: candidateModel,
      temperature: 0.4,
      maxTokens: 2000
    });

    return rawText.trim();
  }

  /**
   * Multimodal Vision Analysis (Image-to-Prompt, Repair, Background)
   * Hanya dijalankan jika model vision terdeteksi.
   */
  async analyzeMultimodal({
    imageBase64,
    mimeType = 'image/jpeg',
    systemInstruction,
    userPrompt = '',
    candidateModel = null
  }) {
    const modelToUse = (candidateModel || StorageService.getCrowLlmModel() || '').trim();

    if (!this.isVisionCapableModel(modelToUse)) {
      throw new Error(`Model CrowLLM terpilih (${modelToUse || 'Unknown'}) tidak teridentifikasi mendukung input gambar (Vision). Gunakan model multimodal atau alihkan ke Google Gemini / Engine Lokal.`);
    }

    if (!imageBase64 || imageBase64.length < 50) {
      throw new Error('Data gambar Base64 tidak valid.');
    }

    // OpenAI standard format for image_url
    const dataUrl = imageBase64.startsWith('data:') 
      ? imageBase64 
      : `data:${mimeType};base64,${imageBase64}`;

    const messages = [
      { role: 'system', content: systemInstruction },
      {
        role: 'user',
        content: [
          { type: 'text', text: userPrompt || 'Analisislah gambar ini secara mendalam sesuai instruksi visual.' },
          {
            type: 'image_url',
            image_url: {
              url: dataUrl
            }
          }
        ]
      }
    ];

    const rawText = await this.chatCompletion({
      messages,
      model: modelToUse,
      temperature: 0.2,
      maxTokens: 3000,
      responseFormat: { type: 'json_object' }
    });

    return this.extractJson(rawText);
  }
}
