/**
 * AI Provider Router V3.9
 * 
 * Mengorkestrasi pemanggilan API antara Google Gemini dan CrowLLM:
 * - Routing transparan berdasarkan provider aktif pilihan pengguna.
 * - Sistem Fallback Otomatis cerdas (Primary -> Secondary -> Local Semantic Engine).
 * - Vision Capability Guard: Model text-only tidak akan dikirimi payload gambar.
 * - Zero-Crash Guarantee: Selalu siap fallback ke heuristik lokal.
 */

import { StorageService } from './storageService.js';
import { CrowLlmService, CROWLLM_STATUS } from './crowLlmService.js';
import { GEMINI_STATUS } from './geminiService.js';

export class AiProviderRouter {
  constructor(geminiService) {
    this.geminiService = geminiService;
    this.crowLlmService = new CrowLlmService();
  }

  getActiveProvider() {
    return StorageService.getActiveProvider(); // 'gemini' | 'crowllm'
  }

  setActiveProvider(provider) {
    return StorageService.setActiveProvider(provider);
  }

  getProviderStatuses() {
    return {
      activeProvider: this.getActiveProvider(),
      fallbackEnabled: StorageService.isFallbackEnabled(),
      fallbackProvider: StorageService.getFallbackProvider(),
      gemini: this.geminiService.getStatus(),
      crowLlm: this.crowLlmService.getStatus()
    };
  }

  /**
   * Helper: Mengeksekusi pemanggilan dengan mekanisme Fallback cerdas
   */
  async executeWithFallback({
    operationName,
    geminiCall,
    crowLlmCall,
    localFallback,
    isVision = false
  }) {
    const active = this.getActiveProvider();
    const fallbackEnabled = StorageService.isFallbackEnabled();
    const fallback = StorageService.getFallbackProvider();

    const providerSequence = [active];
    if (fallbackEnabled && fallback && fallback !== active) {
      providerSequence.push(fallback);
    }

    let lastError = null;

    for (const provider of providerSequence) {
      try {
        if (provider === 'crowllm') {
          const crowKey = StorageService.getCrowLlmApiKey();
          if (!crowKey) {
            continue; // Lewati jika tidak ada key
          }

          // Jika operasi memerlukan input gambar (Vision), pastikan model mendukung vision
          if (isVision) {
            const model = StorageService.getCrowLlmModel();
            if (!this.crowLlmService.isVisionCapableModel(model)) {
              // Jika model CrowLLM bukan vision, lewati ke provider berikutnya atau fallback
              console.warn(`[CrowLLM] Model '${model}' bukan model vision. Melakukan fallback untuk operasi ${operationName}.`);
              continue;
            }
          }

          if (typeof crowLlmCall === 'function') {
            const result = await crowLlmCall(this.crowLlmService);
            if (result) {
              return {
                ...result,
                providerUsed: 'crowllm'
              };
            }
          }
        } else if (provider === 'gemini') {
          const geminiKey = StorageService.getApiKey();
          if (!geminiKey) {
            continue;
          }

          if (typeof geminiCall === 'function') {
            const result = await geminiCall(this.geminiService);
            if (result) {
              return {
                ...result,
                providerUsed: 'gemini'
              };
            }
          }
        }
      } catch (err) {
        lastError = err;
        console.warn(`[AI Router] ${provider.toUpperCase()} gagal untuk ${operationName}:`, err.message);
      }
    }

    // Jika seluruh provider AI gagal atau tidak terkonfigurasi, panggil local fallback
    if (typeof localFallback === 'function') {
      const localResult = localFallback();
      return {
        ...localResult,
        providerUsed: 'local_heuristic',
        fallbackReason: lastError ? lastError.message : 'Provider AI tidak terkonfigurasi'
      };
    }

    if (lastError) throw lastError;
    return null;
  }
}
