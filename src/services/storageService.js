/**
 * Storage Service V2
 * Manajemen penyimpanan aman client-side di localStorage.
 * Tidak pernah mengirimkan kredensial rahasia ke server luar.
 */

const STORAGE_KEYS = {
  GEMINI_API_KEY: 'psa_v2_gemini_api_key',
  GEMINI_MODEL: 'psa_v2_gemini_model',
  ACTIVE_PROVIDER: 'psa_v39_active_provider', // 'gemini' | 'crowllm'
  CROWLLM_API_KEY: 'psa_v39_crowllm_api_key',
  CROWLLM_BASE_URL: 'psa_v39_crowllm_base_url',
  CROWLLM_MODEL: 'psa_v39_crowllm_model',
  FALLBACK_ENABLED: 'psa_v39_fallback_enabled',
  FALLBACK_PROVIDER: 'psa_v39_fallback_provider',
  CUSTOM_CATALOG: 'psa_v2_custom_catalog',
  UI_PREFS: 'psa_v2_ui_preferences',
  RECENT_PROMPTS: 'psa_v2_recent_prompts'
};

export const StorageService = {
  getApiKey() {
    try {
      return localStorage.getItem(STORAGE_KEYS.GEMINI_API_KEY) || '';
    } catch {
      return '';
    }
  },

  setApiKey(key) {
    try {
      if (!key) {
        localStorage.removeItem(STORAGE_KEYS.GEMINI_API_KEY);
      } else {
        localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, key.trim());
      }
      return true;
    } catch {
      return false;
    }
  },

  clearApiKey() {
    try {
      localStorage.removeItem(STORAGE_KEYS.GEMINI_API_KEY);
      return true;
    } catch {
      return false;
    }
  },

  getModel() {
    try {
      const saved = (localStorage.getItem(STORAGE_KEYS.GEMINI_MODEL) || 'gemini-2.0-flash').trim().replace(/^models\//, '');
      // Auto-migrate away from deprecated or invalid model names
      if (saved.includes('1.5-pro') || (saved.includes('3.5') && saved !== 'gemini-3.5-flash-lite') || saved.includes('3.8') || saved.includes('2.5-pro')) {
        localStorage.setItem(STORAGE_KEYS.GEMINI_MODEL, 'gemini-2.0-flash');
        return 'gemini-2.0-flash';
      }
      return saved;
    } catch {
      return 'gemini-2.0-flash';
    }
  },

  setModel(modelName) {
    try {
      const clean = (modelName || 'gemini-2.0-flash').trim().replace(/^models\//, '');
      localStorage.setItem(STORAGE_KEYS.GEMINI_MODEL, clean);
      return true;
    } catch {
      return false;
    }
  },

  // --- MULTI-PROVIDER & CROWLLM SETTINGS (V3.9 PATCH) ---
  getActiveProvider() {
    try {
      return localStorage.getItem(STORAGE_KEYS.ACTIVE_PROVIDER) || 'gemini';
    } catch {
      return 'gemini';
    }
  },

  setActiveProvider(provider) {
    try {
      const val = provider === 'crowllm' ? 'crowllm' : 'gemini';
      localStorage.setItem(STORAGE_KEYS.ACTIVE_PROVIDER, val);
      return true;
    } catch {
      return false;
    }
  },

  getCrowLlmApiKey() {
    try {
      return localStorage.getItem(STORAGE_KEYS.CROWLLM_API_KEY) || '';
    } catch {
      return '';
    }
  },

  setCrowLlmApiKey(key) {
    try {
      if (!key) {
        localStorage.removeItem(STORAGE_KEYS.CROWLLM_API_KEY);
      } else {
        localStorage.setItem(STORAGE_KEYS.CROWLLM_API_KEY, key.trim());
      }
      return true;
    } catch {
      return false;
    }
  },

  clearCrowLlmApiKey() {
    try {
      localStorage.removeItem(STORAGE_KEYS.CROWLLM_API_KEY);
      return true;
    } catch {
      return false;
    }
  },

  getCrowLlmBaseUrl() {
    try {
      return localStorage.getItem(STORAGE_KEYS.CROWLLM_BASE_URL) || 'https://crowllm.com/v1';
    } catch {
      return 'https://crowllm.com/v1';
    }
  },

  setCrowLlmBaseUrl(url) {
    try {
      const clean = (url || 'https://crowllm.com/v1').trim();
      localStorage.setItem(STORAGE_KEYS.CROWLLM_BASE_URL, clean);
      return true;
    } catch {
      return false;
    }
  },

  getCrowLlmModel() {
    try {
      return localStorage.getItem(STORAGE_KEYS.CROWLLM_MODEL) || '';
    } catch {
      return '';
    }
  },

  setCrowLlmModel(modelName) {
    try {
      localStorage.setItem(STORAGE_KEYS.CROWLLM_MODEL, (modelName || '').trim());
      return true;
    } catch {
      return false;
    }
  },

  isFallbackEnabled() {
    try {
      const val = localStorage.getItem(STORAGE_KEYS.FALLBACK_ENABLED);
      return val !== null ? val === 'true' : true; // Default ON
    } catch {
      return true;
    }
  },

  setFallbackEnabled(enabled) {
    try {
      localStorage.setItem(STORAGE_KEYS.FALLBACK_ENABLED, enabled ? 'true' : 'false');
      return true;
    } catch {
      return false;
    }
  },

  getFallbackProvider() {
    try {
      const active = this.getActiveProvider();
      const fallback = localStorage.getItem(STORAGE_KEYS.FALLBACK_PROVIDER);
      if (fallback) return fallback;
      return active === 'gemini' ? 'crowllm' : 'gemini';
    } catch {
      return 'gemini';
    }
  },

  setFallbackProvider(provider) {
    try {
      localStorage.setItem(STORAGE_KEYS.FALLBACK_PROVIDER, provider);
      return true;
    } catch {
      return false;
    }
  },

  getCustomCatalog() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_CATALOG);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveCustomCatalog(catalog) {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_CATALOG, JSON.stringify(catalog));
      return true;
    } catch {
      return false;
    }
  },

  getUiPreferences() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.UI_PREFS);
      return data ? JSON.parse(data) : { theme: 'dark', autoAnalyze: true };
    } catch {
      return { theme: 'dark', autoAnalyze: true };
    }
  },

  saveUiPreferences(prefs) {
    try {
      localStorage.setItem(STORAGE_KEYS.UI_PREFS, JSON.stringify(prefs));
      return true;
    } catch {
      return false;
    }
  }
};
