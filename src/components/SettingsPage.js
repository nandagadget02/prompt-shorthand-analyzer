/**
 * SettingsPage Component V3.9 (API & PENGATURAN MULTI-PROVIDER)
 * Konfigurasi BYOK terpusat untuk Google Gemini & CrowLLM (OpenAI-Compatible),
 * pengujian koneksi, pemilihan model, validasi vision, dan sistem fallback otomatis.
 */

import { GEMINI_STATUS } from '../services/geminiService.js';
import { CrowLlmService, CROWLLM_STATUS, DEFAULT_CROWLLM_CONFIG } from '../services/crowLlmService.js';
import { StorageService } from '../services/storageService.js';

export function renderSettingsPage({
  geminiStatusInfo = {},
  crowLlmStatusInfo = {},
  onTestConnection,
  onSaveSettings,
  onClearKey,
  onLoadCrowLlmModels
}) {
  const activeProvider = StorageService.getActiveProvider(); // 'gemini' | 'crowllm'
  const fallbackEnabled = StorageService.isFallbackEnabled();
  const fallbackProvider = StorageService.getFallbackProvider();

  // Gemini State
  const currentGeminiKey = StorageService.getApiKey();
  const currentGeminiModel = StorageService.getModel();
  const geminiStatus = geminiStatusInfo.status || GEMINI_STATUS.UNCONFIGURED;
  const geminiError = geminiStatusInfo.error || null;

  let geminiBadgeClass = 'status-unconfigured';
  let geminiBadgeText = '🟡 Gemini: Belum diuji / konfigurasi';
  if (geminiStatus === GEMINI_STATUS.CONNECTED) {
    geminiBadgeClass = 'status-connected';
    geminiBadgeText = '🟢 Gemini: Tersambung';
  } else if (geminiStatus === GEMINI_STATUS.FAILED) {
    geminiBadgeClass = 'status-failed';
    geminiBadgeText = '🔴 Gemini: Gagal';
  }

  // CrowLLM State
  const currentCrowKey = StorageService.getCrowLlmApiKey();
  const currentCrowBaseUrl = StorageService.getCrowLlmBaseUrl();
  const currentCrowModel = StorageService.getCrowLlmModel();
  const crowStatus = crowLlmStatusInfo.status || CROWLLM_STATUS.UNCONFIGURED;
  const crowError = crowLlmStatusInfo.error || null;

  let crowBadgeClass = 'status-unconfigured';
  let crowBadgeText = '🟡 CrowLLM: Belum diuji / konfigurasi';
  if (crowStatus === CROWLLM_STATUS.CONNECTED) {
    crowBadgeClass = 'status-connected';
    crowBadgeText = '🟢 CrowLLM: Tersambung';
  } else if (crowStatus === CROWLLM_STATUS.FAILED) {
    crowBadgeClass = 'status-failed';
    crowBadgeText = '🔴 CrowLLM: Gagal';
  }

  const html = `
    <div class="settings-container">
      <section class="panel">
        <div class="card-header">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: var(--accent-blue);"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <h2>API &amp; PENGATURAN (BYOK MULTI-PROVIDER)</h2>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
          Aplikasi beroperasi dengan sistem <strong>BYOK (Bring Your Own Key)</strong>. 
          API key disimpan hanya di browser lokal Anda (<code>localStorage</code>) dan tidak pernah dikirim ke server developer atau dicatat dalam log.
        </p>

        <!-- PROVIDER SELECTION TABS -->
        <div style="margin-bottom: 1.5rem; background: var(--bg-tertiary); padding: 0.35rem; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; gap: 0.5rem;">
          <button type="button" class="btn ${activeProvider === 'gemini' ? 'btn-primary' : 'btn-secondary'} btn-sm provider-tab-btn" data-provider="gemini" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.65rem 0.5rem;">
            <span>🌐</span>
            <strong>Google Gemini</strong>
          </button>
          <button type="button" class="btn ${activeProvider === 'crowllm' ? 'btn-primary' : 'btn-secondary'} btn-sm provider-tab-btn" data-provider="crowllm" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.65rem 0.5rem;">
            <span>🦅</span>
            <strong>CrowLLM (OpenAI-Compatible)</strong>
          </button>
        </div>

        <!-- FORM BYOK -->
        <form id="settings-form" onsubmit="return false;">
          <!-- SECTION 1: GEMINI SETTINGS -->
          <div id="section-gemini-settings" style="display: ${activeProvider === 'gemini' ? 'block' : 'none'};">
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.4rem;">
              <span>🌐</span>
              <span>Konfigurasi Google Gemini API</span>
            </div>

            <!-- Gemini API Key Input -->
            <div class="form-group">
              <label class="form-label" for="setting-api-key">Gemini API Key:</label>
              <div class="password-input-group">
                <input 
                  type="password" 
                  id="setting-api-key" 
                  placeholder="AIzaSy..." 
                  value="${currentGeminiKey || ''}" 
                  autocomplete="off"
                  spellcheck="false"
                />
                <button type="button" class="password-toggle-btn" id="btn-toggle-key-visibility" title="Tampilkan/Sembunyikan Key">
                  <svg class="icon-sm" id="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </button>
              </div>
              <p class="form-help">
                Dapatkan API Key gratis di <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue);">Google AI Studio</a>.
              </p>
            </div>

            <!-- Gemini Model Selector -->
            <div class="form-group">
              <label class="form-label" for="setting-model-select">Model Gemini:</label>
              <select id="setting-model-select" class="select-input" style="width: 100%; padding: 0.65rem 0.85rem;">
                <option value="gemini-2.0-flash" ${currentGeminiModel === 'gemini-2.0-flash' ? 'selected' : ''}>gemini-2.0-flash (Rekomendasi Utama &bull; Multimodal Cepat &amp; Akurat)</option>
                <option value="gemini-3.5-flash-lite" ${currentGeminiModel === 'gemini-3.5-flash-lite' ? 'selected' : ''}>gemini-3.5-flash-lite (Flash-Lite &bull; Cepat, Ringan &amp; Hemat Kuota)</option>
                <option value="gemini-1.5-flash" ${currentGeminiModel === 'gemini-1.5-flash' ? 'selected' : ''}>gemini-1.5-flash (Flash &bull; Ringan &amp; Stabil)</option>
                <option value="gemini-2.5-flash" ${currentGeminiModel === 'gemini-2.5-flash' ? 'selected' : ''}>gemini-2.5-flash (Penalaran Hibrida &bull; Flash)</option>
                <option value="gemini-1.5-flash-8b" ${currentGeminiModel === 'gemini-1.5-flash-8b' ? 'selected' : ''}>gemini-1.5-flash-8b (Ultra Cepat &amp; Hemat Kuota)</option>
              </select>
            </div>

            <!-- Gemini Status Card -->
            <div class="connection-status-card">
              <div style="flex: 1;">
                <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                  Status Koneksi Gemini:
                </div>
                <div class="status-badge ${geminiBadgeClass}" id="settings-status-badge">
                  <span class="status-dot"></span>
                  <span>${geminiBadgeText}</span>
                </div>
                ${geminiError ? `<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${geminiError}</div>` : ''}
              </div>
              <div>
                <button type="button" class="btn btn-secondary btn-sm" id="btn-test-connection">
                  <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                  Test Connection
                </button>
              </div>
            </div>
          </div>

          <!-- SECTION 2: CROWLLM SETTINGS -->
          <div id="section-crowllm-settings" style="display: ${activeProvider === 'crowllm' ? 'block' : 'none'};">
            <div style="font-size: 0.9rem; font-weight: 700; color: #10b981; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.4rem;">
              <span>🦅</span>
              <span>Konfigurasi CrowLLM API (OpenAI-Compatible)</span>
            </div>

            <!-- Base URL Input -->
            <div class="form-group">
              <label class="form-label" for="setting-crow-base-url">API Base URL:</label>
              <input 
                type="text" 
                id="setting-crow-base-url" 
                class="text-input" 
                style="width: 100%; padding: 0.65rem 0.85rem;"
                placeholder="https://crowllm.com/v1" 
                value="${currentCrowBaseUrl || DEFAULT_CROWLLM_CONFIG.BASE_URL}" 
                autocomplete="off"
                spellcheck="false"
              />
              <p class="form-help">
                Protokol endpoint chat completions: <code>/chat/completions</code> dengan autentikasi <code>Bearer API_KEY</code>.
              </p>
            </div>

            <!-- CrowLLM API Key Input -->
            <div class="form-group">
              <label class="form-label" for="setting-crow-api-key">CrowLLM API Key:</label>
              <div class="password-input-group">
                <input 
                  type="password" 
                  id="setting-crow-api-key" 
                  placeholder="crw_... atau Bearer Key" 
                  value="${currentCrowKey || ''}" 
                  autocomplete="off"
                  spellcheck="false"
                />
                <button type="button" class="password-toggle-btn" id="btn-toggle-crow-key-visibility" title="Tampilkan/Sembunyikan Key">
                  <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </button>
              </div>
              <p class="form-help">
                Dapatkan kunci akses dari dashboard akun CrowLLM Anda. Kunci disimpan 100% di browser lokal.
              </p>
            </div>

            <!-- CrowLLM Model ID Input with Load Models Button -->
            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                <label class="form-label" for="setting-crow-model-input" style="margin-bottom: 0;">Model ID CrowLLM:</label>
                <button type="button" class="btn btn-secondary btn-sm" id="btn-load-crow-models" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">
                  🔄 Load Available Models
                </button>
              </div>
              <div style="display: flex; gap: 0.5rem; flex-direction: column;">
                <input 
                  type="text" 
                  id="setting-crow-model-input" 
                  class="text-input" 
                  style="width: 100%; padding: 0.65rem 0.85rem;"
                  placeholder="Contoh: gpt-4o, claude-3-5-sonnet, llama-3-70b, dll." 
                  value="${currentCrowModel || ''}" 
                  autocomplete="off"
                  spellcheck="false"
                />
                <select id="setting-crow-model-dropdown" class="select-input" style="width: 100%; padding: 0.65rem 0.85rem; display: none;">
                  <option value="">-- Pilih Model dari Akun Anda --</option>
                </select>
              </div>
              <p class="form-help" id="crow-model-help">
                Ketik Model ID manual atau klik "Load Available Models" untuk memuat daftar model dari akun CrowLLM Anda.
              </p>
            </div>

            <!-- CrowLLM Status Card -->
            <div class="connection-status-card">
              <div style="flex: 1;">
                <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                  Status Koneksi CrowLLM:
                </div>
                <div class="status-badge ${crowBadgeClass}" id="settings-crow-status-badge">
                  <span class="status-dot"></span>
                  <span>${crowBadgeText}</span>
                </div>
                ${crowError ? `<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${crowError}</div>` : ''}
              </div>
              <div>
                <button type="button" class="btn btn-secondary btn-sm" id="btn-test-crow-connection">
                  <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                  Test Connection
                </button>
              </div>
            </div>
          </div>

          <!-- SECTION 3: FALLBACK CONFIGURATION -->
          <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 8px; background: var(--bg-tertiary); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem; display: flex; align-items: center; justify-content: space-between;">
              <span>🔄 Sistem Fallback Otomatis</span>
              <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; font-size: 0.8rem; font-weight: normal; color: var(--text-secondary);">
                <input type="checkbox" id="setting-fallback-enabled" ${fallbackEnabled ? 'checked' : ''} />
                <span>Aktifkan Fallback</span>
              </label>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.4;">
              Jika provider utama mengalami rate limit (429), server error (5xx), atau timeout, sistem akan otomatis mengalihkan permintaan ke provider cadangan sebelum beralih ke Engine Lokal.
            </p>
            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem;">
              <span style="color: var(--text-secondary);">Provider Cadangan:</span>
              <select id="setting-fallback-provider-select" class="select-input" style="padding: 0.35rem 0.6rem; font-size: 0.8rem;">
                <option value="gemini" ${fallbackProvider === 'gemini' ? 'selected' : ''}>Google Gemini</option>
                <option value="crowllm" ${fallbackProvider === 'crowllm' ? 'selected' : ''}>CrowLLM</option>
              </select>
            </div>
          </div>

          <!-- Action Buttons: Save & Clear -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-danger btn-sm" id="btn-clear-key" title="Hapus API Key provider aktif dari browser">
              Clear Key Aktif
            </button>
            <button type="button" class="btn btn-primary" id="btn-save-settings">
              Save / Apply Settings
            </button>
          </div>
        </form>

        <!-- Fallback notice -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
          <strong>🛡️ Mode Offline &amp; Heuristic Fallback (Zero Crash):</strong>
          Jika API Key tidak diisi, offline, atau kuota habis, aplikasi tidak akan pernah crash. Engine Semantik Lokal otomatis aktif memproses prompt, mendeteksi entity lock, dan merumuskan shorthand.
        </div>

        <!-- V3.9 Safe Patch Architecture Panel -->
        <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 8px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); font-size: 0.8rem; line-height: 1.6;">
          <div style="font-weight: 700; color: var(--accent-blue); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>🛡️</span>
            <span>V3.9 SAFE PATCH-ONLY ARCHITECTURE — MULTI-PROVIDER ENABLED</span>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: 0.6rem;">
            Basis / Source of Truth: <strong>Prompt Shorthand Analyzer V3.8 (Stable Official Baseline)</strong>. 
            Integrasi CrowLLM berjalan melalui adapter terisolasi tanpa mengurangi atau merusak kompatibilitas Gemini &amp; Knowledge Base.
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle); color: var(--text-secondary);">
            • Active Provider: <span id="info-active-provider">${activeProvider === 'crowllm' ? 'CrowLLM (OpenAI-Compatible)' : 'Google Gemini'}</span><br/>
            • Fallback Cascade: Primary &rarr; Secondary &rarr; Local Engine (Zero Crash)<br/>
            • Baseline V3.8 Knowledge Base: 15 Kategori A-O &bull; 1496 Unit Tests (100% Preserved)
          </div>
        </div>
      </section>
    </div>
  `;

  return {
    html,
    bindEvents(container) {
      // Gemini Elements
      const geminiKeyInput = container.querySelector('#setting-api-key');
      const geminiModelSelect = container.querySelector('#setting-model-select');
      const geminiToggleBtn = container.querySelector('#btn-toggle-key-visibility');
      const geminiTestBtn = container.querySelector('#btn-test-connection');

      // CrowLLM Elements
      const crowBaseUrlInput = container.querySelector('#setting-crow-base-url');
      const crowKeyInput = container.querySelector('#setting-crow-api-key');
      const crowModelInput = container.querySelector('#setting-crow-model-input');
      const crowModelDropdown = container.querySelector('#setting-crow-model-dropdown');
      const crowToggleBtn = container.querySelector('#btn-toggle-crow-key-visibility');
      const crowTestBtn = container.querySelector('#btn-test-crow-connection');
      const crowLoadModelsBtn = container.querySelector('#btn-load-crow-models');
      const crowModelHelp = container.querySelector('#crow-model-help');

      // Fallback Elements
      const fallbackEnabledCheckbox = container.querySelector('#setting-fallback-enabled');
      const fallbackProviderSelect = container.querySelector('#setting-fallback-provider-select');

      // Tab switcher elements
      const providerTabBtns = container.querySelectorAll('.provider-tab-btn');
      const sectionGemini = container.querySelector('#section-gemini-settings');
      const sectionCrow = container.querySelector('#section-crowllm-settings');
      const infoActiveProvider = container.querySelector('#info-active-provider');

      // Global buttons
      const saveBtn = container.querySelector('#btn-save-settings');
      const clearBtn = container.querySelector('#btn-clear-key');

      // Tab Switching Handler
      providerTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetProvider = btn.getAttribute('data-provider');
          StorageService.setActiveProvider(targetProvider);

          providerTabBtns.forEach(b => {
            if (b === btn) {
              b.classList.remove('btn-secondary');
              b.classList.add('btn-primary');
            } else {
              b.classList.remove('btn-primary');
              b.classList.add('btn-secondary');
            }
          });

          if (targetProvider === 'gemini') {
            sectionGemini.style.display = 'block';
            sectionCrow.style.display = 'none';
            if (infoActiveProvider) infoActiveProvider.textContent = 'Google Gemini';
          } else {
            sectionGemini.style.display = 'none';
            sectionCrow.style.display = 'block';
            if (infoActiveProvider) infoActiveProvider.textContent = 'CrowLLM (OpenAI-Compatible)';
          }
        });
      });

      // Toggle Gemini Key Visibility
      if (geminiToggleBtn && geminiKeyInput) {
        geminiToggleBtn.addEventListener('click', () => {
          geminiKeyInput.type = geminiKeyInput.type === 'password' ? 'text' : 'password';
        });
      }

      // Toggle CrowLLM Key Visibility
      if (crowToggleBtn && crowKeyInput) {
        crowToggleBtn.addEventListener('click', () => {
          crowKeyInput.type = crowKeyInput.type === 'password' ? 'text' : 'password';
        });
      }

      // Load Available Models for CrowLLM
      if (crowLoadModelsBtn) {
        crowLoadModelsBtn.addEventListener('click', async () => {
          const key = crowKeyInput.value.trim();
          const baseUrl = crowBaseUrlInput.value.trim() || DEFAULT_CROWLLM_CONFIG.BASE_URL;

          if (!key) {
            alert('Harap isi API Key CrowLLM terlebih dahulu untuk mengambil daftar model.');
            return;
          }

          crowLoadModelsBtn.disabled = true;
          crowLoadModelsBtn.textContent = '⏳ Loading Models...';

          try {
            let models = [];
            if (onLoadCrowLlmModels) {
              models = await onLoadCrowLlmModels(key, baseUrl);
            } else {
              const svc = new CrowLlmService();
              models = await svc.fetchAvailableModels(key, baseUrl);
            }

            if (models && models.length > 0) {
              crowModelDropdown.innerHTML = '<option value="">-- Pilih Model dari Akun Anda --</option>' +
                models.map(m => `<option value="${m}" ${m === crowModelInput.value ? 'selected' : ''}>${m}</option>`).join('');
              
              crowModelDropdown.style.display = 'block';
              crowModelHelp.innerHTML = `✅ Ditemukan <strong>${models.length} model</strong> pada akun CrowLLM Anda. Pilih dari dropdown atau ketik manual.`;

              crowModelDropdown.addEventListener('change', () => {
                if (crowModelDropdown.value) {
                  crowModelInput.value = crowModelDropdown.value;
                }
              });
            } else {
              crowModelHelp.textContent = '⚠️ Tidak ada model yang terdaftar dari endpoint /models. Silakan ketik Model ID manual.';
            }
          } catch (err) {
            crowModelHelp.innerHTML = `<span style="color: #fca5a5;">⚠️ Gagal memuat model: ${err.message}. Silakan masukkan Model ID manual.</span>`;
          } finally {
            crowLoadModelsBtn.disabled = false;
            crowLoadModelsBtn.textContent = '🔄 Load Available Models';
          }
        });
      }

      // Test Gemini Connection
      if (geminiTestBtn) {
        geminiTestBtn.addEventListener('click', () => {
          if (onTestConnection) {
            onTestConnection({
              provider: 'gemini',
              apiKey: geminiKeyInput.value,
              modelName: geminiModelSelect.value
            });
          }
        });
      }

      // Test CrowLLM Connection
      if (crowTestBtn) {
        crowTestBtn.addEventListener('click', () => {
          if (onTestConnection) {
            onTestConnection({
              provider: 'crowllm',
              apiKey: crowKeyInput.value,
              modelName: crowModelInput.value,
              baseUrl: crowBaseUrlInput.value
            });
          }
        });
      }

      // Save / Apply Settings
      if (saveBtn) {
        saveBtn.addEventListener('click', () => {
          const currentTab = StorageService.getActiveProvider();
          const fallbackEnabledVal = fallbackEnabledCheckbox.checked;
          const fallbackProviderVal = fallbackProviderSelect.value;

          StorageService.setApiKey(geminiKeyInput.value);
          StorageService.setModel(geminiModelSelect.value);

          StorageService.setCrowLlmApiKey(crowKeyInput.value);
          StorageService.setCrowLlmBaseUrl(crowBaseUrlInput.value);
          StorageService.setCrowLlmModel(crowModelInput.value);

          StorageService.setFallbackEnabled(fallbackEnabledVal);
          StorageService.setFallbackProvider(fallbackProviderVal);

          if (onSaveSettings) {
            onSaveSettings({
              activeProvider: currentTab,
              gemini: {
                apiKey: geminiKeyInput.value,
                modelName: geminiModelSelect.value
              },
              crowLlm: {
                apiKey: crowKeyInput.value,
                baseUrl: crowBaseUrlInput.value,
                modelName: crowModelInput.value
              },
              fallback: {
                enabled: fallbackEnabledVal,
                provider: fallbackProviderVal
              }
            });
          }
        });
      }

      // Clear Key
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          const currentTab = StorageService.getActiveProvider();
          if (currentTab === 'gemini') {
            geminiKeyInput.value = '';
            StorageService.clearApiKey();
          } else {
            crowKeyInput.value = '';
            StorageService.clearCrowLlmApiKey();
          }
          if (onClearKey) {
            onClearKey(currentTab);
          }
        });
      }
    }
  };
}
