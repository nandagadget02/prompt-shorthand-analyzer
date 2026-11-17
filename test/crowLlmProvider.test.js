/**
 * Test Suite: CrowLLM Provider & Multi-Provider Integration (V3.9 Patch)
 * 
 * Memverifikasi:
 * 1. Adapter CrowLLM (OpenAI-compatible protocol, Bearer auth, base URL, timeout, retries).
 * 2. Vision capability guard (mencegah pengiriman gambar ke model teks-saja).
 * 3. Parser respons JSON normalisasi.
 * 4. Error classification (401/403, 402 balance, 404 model, 429 rate limit, 5xx server).
 * 5. Multi-provider storage service persistence.
 * 6. Provider routing dan sistem fallback otomatis.
 * 7. Antarmuka UI SettingsPage Multi-Provider.
 */

import { CrowLlmService, CROWLLM_STATUS, DEFAULT_CROWLLM_CONFIG } from '../src/services/crowLlmService.js';
import { AiProviderRouter } from '../src/services/aiProviderRouter.js';
import { StorageService } from '../src/services/storageService.js';
import { GeminiService, GEMINI_STATUS } from '../src/services/geminiService.js';
import { INITIAL_SHORTHAND_CATALOG } from '../src/data/catalogData.js';
import { renderSettingsPage } from '../src/components/SettingsPage.js';

export async function runCrowLlmProviderTests() {
  console.log('\n--- TEST SUITE: CROWLLM API PROVIDER & MULTI-PROVIDER ARCHITECTURE (V3.9) ---');
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  // 1. Inisialisasi & Konfigurasi Default CrowLLM
  const crowService = new CrowLlmService();
  assert(crowService instanceof CrowLlmService, 'CrowLlmService berhasil diinstansiasi');
  assert(DEFAULT_CROWLLM_CONFIG.BASE_URL === 'https://crowllm.com/v1', 'Default Base URL adalah https://crowllm.com/v1');
  assert(DEFAULT_CROWLLM_CONFIG.TIMEOUT_MS === 25000, 'Default Timeout adalah 25 detik (25000ms)');
  assert(DEFAULT_CROWLLM_CONFIG.MAX_RETRIES === 1, 'Default retry adalah 1x untuk toleransi jaringan');

  // 2. Vision Capability Guard
  assert(crowService.isVisionCapableModel('gpt-4o') === true, 'isVisionCapableModel mendeteksi gpt-4o sebagai model vision');
  assert(crowService.isVisionCapableModel('claude-3-5-sonnet') === true, 'isVisionCapableModel mendeteksi claude-3-5-sonnet sebagai model vision');
  assert(crowService.isVisionCapableModel('qwen-vl-max') === true, 'isVisionCapableModel mendeteksi qwen-vl-max sebagai model vision');
  assert(crowService.isVisionCapableModel('pixtral-12b') === true, 'isVisionCapableModel mendeteksi pixtral-12b sebagai model vision');
  assert(crowService.isVisionCapableModel('gemini-2.0-flash') === true, 'isVisionCapableModel mendeteksi gemini-2.0-flash sebagai model vision');
  assert(crowService.isVisionCapableModel('gpt-3.5-turbo') === false, 'isVisionCapableModel menolak gpt-3.5-turbo (text-only)');
  assert(crowService.isVisionCapableModel('llama-3-70b-instruct') === false, 'isVisionCapableModel menolak llama-3-70b (text-only)');
  assert(crowService.isVisionCapableModel('mistral-large') === false, 'isVisionCapableModel menolak mistral-large (text-only)');

  // 3. Vision Guard Execution Protection
  try {
    await crowService.analyzeMultimodal({
      imageBase64: 'dGVzdGltYWdlZGF0YTEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MA==',
      mimeType: 'image/jpeg',
      systemInstruction: 'Test',
      candidateModel: 'gpt-3.5-turbo'
    });
    assert(false, 'analyzeMultimodal seharusnya melempar error saat diberikan model text-only');
  } catch (err) {
    assert(err.message.includes('tidak teridentifikasi mendukung input gambar'), 'analyzeMultimodal mencegah pengiriman gambar ke model teks-saja');
  }

  // 4. Parser JSON Normalisasi
  const json1 = crowService.extractJson('{"key": "value", "count": 10}');
  assert(json1.key === 'value' && json1.count === 10, 'extractJson membaca raw JSON bersih');

  const json2 = crowService.extractJson('Berikut hasilnya:\n```json\n{"intent": "EDIT", "primaryShorthands": [{"code": "/facelock"}]}\n```\nSemoga membantu.');
  assert(json2.intent === 'EDIT' && json2.primaryShorthands[0].code === '/facelock', 'extractJson mengekstrak JSON dari markdown code fence');

  const json3 = crowService.extractJson('Catatan pembuka {"status": "success", "data": [1, 2, 3]} catatan penutup');
  assert(json3.status === 'success' && json3.data.length === 3, 'extractJson mengekstrak objek JSON di tengah teks bebas');

  // 5. StorageService Multi-Provider Persistence
  StorageService.setActiveProvider('crowllm');
  assert(StorageService.getActiveProvider() === 'crowllm', 'StorageService: Menyimpan dan memuat active provider "crowllm"');

  StorageService.setActiveProvider('gemini');
  assert(StorageService.getActiveProvider() === 'gemini', 'StorageService: Mengalihkan active provider kembali ke "gemini"');

  StorageService.setCrowLlmApiKey('crw_test_secret_key_123');
  assert(StorageService.getCrowLlmApiKey() === 'crw_test_secret_key_123', 'StorageService: Menyimpan CrowLLM API Key');

  StorageService.setCrowLlmBaseUrl('https://custom.crowllm.com/v1');
  assert(StorageService.getCrowLlmBaseUrl() === 'https://custom.crowllm.com/v1', 'StorageService: Menyimpan kustom CrowLLM Base URL');

  StorageService.setCrowLlmModel('crow-vision-v1');
  assert(StorageService.getCrowLlmModel() === 'crow-vision-v1', 'StorageService: Menyimpan pilihan model CrowLLM');

  StorageService.setFallbackEnabled(true);
  assert(StorageService.isFallbackEnabled() === true, 'StorageService: Menyimpan status fallback enabled');

  StorageService.setFallbackProvider('crowllm');
  assert(StorageService.getFallbackProvider() === 'crowllm', 'StorageService: Menyimpan fallback provider');

  StorageService.clearCrowLlmApiKey();
  assert(StorageService.getCrowLlmApiKey() === '', 'StorageService: Berhasil menghapus CrowLLM API Key');

  // Kembalikan base URL ke default
  StorageService.setCrowLlmBaseUrl(DEFAULT_CROWLLM_CONFIG.BASE_URL);

  // 6. Test Connection Validasi Kunci Kosong
  const emptyKeyTest = await crowService.testConnection('', 'gpt-4o');
  assert(emptyKeyTest.success === false, 'testConnection mengembalikan success=false saat key kosong');
  assert(crowService.status === CROWLLM_STATUS.UNCONFIGURED, 'Status unconfigured saat key kosong');

  // 7. Test Connection & Chat Completion Mocked (Network/Error Classifier)
  // Simulasikan mock fetch untuk menguji error handling
  const originalFetch = globalThis.fetch;

  try {
    // 7A: Mock 401 Unauthorized
    globalThis.fetch = async () => ({
      ok: false,
      status: 401,
      json: async () => ({ error: { message: 'Incorrect API key provided' } })
    });
    const authFail = await crowService.testConnection('invalid_key', 'gpt-4o');
    assert(authFail.success === false && authFail.error.includes('401/403'), 'Error handling: Menangani otorisasi gagal (401/403)');

    // 7B: Mock 402 Insufficient Balance
    globalThis.fetch = async () => ({
      ok: false,
      status: 402,
      json: async () => ({ error: { message: 'Quota exceeded' } })
    });
    try {
      await crowService.chatCompletion({
        messages: [{ role: 'user', content: 'test' }],
        apiKey: 'key',
        model: 'model',
        retries: 0
      });
      assert(false, 'Harus melempar error');
    } catch (err) {
      assert(err.message.includes('402') && err.message.includes('Saldo/kuota'), 'Error handling: Menangani saldo/kuota tidak mencukupi (402)');
    }

    // 7C: Mock 429 Rate Limit
    globalThis.fetch = async () => ({
      ok: false,
      status: 429,
      json: async () => ({ error: { message: 'Too many requests' } })
    });
    try {
      await crowService.chatCompletion({
        messages: [{ role: 'user', content: 'test' }],
        apiKey: 'key',
        model: 'model',
        retries: 0
      });
      assert(false, 'Harus melempar error');
    } catch (err) {
      assert(err.message.includes('429') && err.message.includes('Rate limit'), 'Error handling: Menangani rate limit (429)');
    }

    // 7D: Mock 404 Model Not Found
    globalThis.fetch = async () => ({
      ok: false,
      status: 404,
      json: async () => ({ error: { message: 'Model not found' } })
    });
    try {
      await crowService.chatCompletion({
        messages: [{ role: 'user', content: 'test' }],
        apiKey: 'key',
        model: 'non-existent-model',
        retries: 0
      });
      assert(false, 'Harus melempar error');
    } catch (err) {
      assert(err.message.includes('404') && err.message.includes('tidak ditemukan'), 'Error handling: Menangani model tidak ditemukan (404)');
    }

    // 7E: Mock Sukses Chat Completion
    globalThis.fetch = async (url) => {
      if (url.includes('/models')) {
        return {
          ok: true,
          json: async () => ({
            data: [
              { id: 'crow-chat-v1' },
              { id: 'crow-vision-v2' }
            ]
          })
        };
      }
      return {
        ok: true,
        json: async () => ({
          choices: [
            {
              message: {
                content: JSON.stringify({
                  status: 'connected',
                  intent: { primaryAction: 'ENHANCE', summary: 'Uji koneksi berhasil' },
                  primaryShorthands: [{ code: '/enhance', name: 'Enhance Photo' }],
                  optimalPrompt: 'Enhanced photo. /enhance'
                })
              }
            }
          ]
        })
      };
    };

    const successConn = await crowService.testConnection('valid_key', 'crow-chat-v1');
    assert(successConn.success === true, 'Test connection CrowLLM berhasil dengan mock respon');
    assert(crowService.status === CROWLLM_STATUS.CONNECTED, 'Status CrowLLM berubah menjadi CONNECTED');

    const availableModels = await crowService.fetchAvailableModels('valid_key');
    assert(availableModels.length === 2 && availableModels.includes('crow-vision-v2'), 'fetchAvailableModels berhasil mengambil daftar model');

    // 8. Integrasi dengan GeminiService Multi-Provider Facade
    const geminiService = new GeminiService(INITIAL_SHORTHAND_CATALOG);

    // Set CrowLLM sebagai provider aktif
    StorageService.setActiveProvider('crowllm');
    StorageService.setCrowLlmApiKey('valid_mock_key');
    StorageService.setCrowLlmModel('crow-chat-v1');

    const analyzeResult = await geminiService.analyzePrompt('perbaiki pencahayaan foto');
    assert(analyzeResult.source === 'CROWLLM_AI', 'GeminiService mendelegasikan analisis ke CrowLLM saat CrowLLM aktif');
    assert(analyzeResult.isOnlineActive === true, 'isOnlineActive bernilai true');
    assert(analyzeResult.engineNotice.includes('CrowLLM'), 'engineNotice mengonfirmasi CrowLLM aktif');

    // Kembalikan ke Gemini
    StorageService.setActiveProvider('gemini');
    StorageService.clearCrowLlmApiKey();

  } finally {
    globalThis.fetch = originalFetch;
  }

  // 9. AI Provider Router & Smart Fallback Unit Test
  const router = new AiProviderRouter(new GeminiService([]));
  const routerStatuses = router.getProviderStatuses();
  assert(routerStatuses.gemini !== undefined, 'Router menyediakan status Gemini');
  assert(routerStatuses.crowLlm !== undefined, 'Router menyediakan status CrowLLM');

  // Fallback to local heuristic test
  const fallbackResult = await router.executeWithFallback({
    operationName: 'testOp',
    geminiCall: async () => { throw new Error('Gemini Offline'); },
    crowLlmCall: async () => { throw new Error('CrowLLM Offline'); },
    localFallback: () => ({ success: true, mode: 'LOCAL' })
  });
  assert(fallbackResult.providerUsed === 'local_heuristic', 'Router berhasil fallback ke heuristik lokal saat seluruh provider gagal');
  assert(fallbackResult.mode === 'LOCAL', 'Data heuristik lokal dikembalikan utuh tanpa crash');

  // 10. UI SettingsPage Multi-Provider Verification
  const settingsUi = renderSettingsPage({
    geminiStatusInfo: { status: GEMINI_STATUS.CONNECTED, error: null },
    crowLlmStatusInfo: { status: CROWLLM_STATUS.CONNECTED, error: null },
    onTestConnection: () => {},
    onSaveSettings: () => {},
    onClearKey: () => {},
    onLoadCrowLlmModels: async () => ['model-1', 'model-2']
  });

  assert(settingsUi.html.includes('data-provider="gemini"'), 'SettingsPage: Tab selector Google Gemini hadir');
  assert(settingsUi.html.includes('data-provider="crowllm"'), 'SettingsPage: Tab selector CrowLLM hadir');
  assert(settingsUi.html.includes('id="setting-crow-base-url"'), 'SettingsPage: Input Base URL CrowLLM hadir');
  assert(settingsUi.html.includes('id="setting-crow-api-key"'), 'SettingsPage: Input API Key CrowLLM hadir');
  assert(settingsUi.html.includes('id="btn-toggle-crow-key-visibility"'), 'SettingsPage: Tombol Show/Hide Key CrowLLM hadir');
  assert(settingsUi.html.includes('id="setting-crow-model-input"'), 'SettingsPage: Input Model ID CrowLLM hadir');
  assert(settingsUi.html.includes('id="btn-load-crow-models"'), 'SettingsPage: Tombol Load Available Models hadir');
  assert(settingsUi.html.includes('id="btn-test-crow-connection"'), 'SettingsPage: Tombol Test Connection CrowLLM hadir');
  assert(settingsUi.html.includes('id="setting-fallback-enabled"'), 'SettingsPage: Checkbox aktifkan Fallback hadir');
  assert(settingsUi.html.includes('id="setting-fallback-provider-select"'), 'SettingsPage: Dropdown provider cadangan hadir');

  console.log(`\nHASIL TEST CROWLLM PROVIDER: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}
