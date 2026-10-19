/**
 * Test Suite: Pilihan Rasio Hasil Generate pada Tab 📝 Analisa Prompt (V3.8 Patch)
 * 
 * Memverifikasi:
 * 1. Rendering UI Kontrol Dropdown 10 Pilihan Rasio pada Tab Analisa Prompt
 * 2. Perilaku Otomatis (Ikuti Prompt): mempertahankan --ar jika ada, tidak mengarang jika tidak ada
 * 3. Penerapan 8 Rasio Preset (1:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16, 21:9)
 * 4. Pilihan Bebas / Custom (Validasi numerik positif W:H & penanganan error)
 * 5. Resolusi Konflik: mengganti --ar lama secara bersih tanpa duplikasi parameter
 * 6. Tombol SALIN PROMPT menyalin PROMPT OPTIMAL beserta rasio aktif
 * 7. Negative Prompt bebas dari parameter rasio aspek
 * 8. AnalyzerPage integration & instant sync simulation
 */

import { renderPromptInput } from '../src/components/PromptInput.js';
import { renderAnalyzerPage } from '../src/components/AnalyzerPage.js';
import {
  ASPECT_RATIO_PRESETS,
  validateCustomAspectRatio,
  applyAspectRatioToPrompt,
  detectSourceAspectRatio
} from '../src/lib/promptVariationEngine.js';
import { cleanPromptForCopy } from '../src/lib/promptFormatter.js';
import { buildDynamicNegativePrompt } from '../src/lib/negativePromptEngine.js';

export function runPromptAnalysisRatioTests() {
  console.log('\n--- VERIFIKASI FITUR V3.8: PILIHAN RASIO PADA TAB ANALISA PROMPT ---');
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

  // =========================================================================
  // 1. UI RENDERING TESTS PADA TAB ANALISA PROMPT
  // =========================================================================
  const promptInputComp = renderPromptInput({
    activeMode: 'ANALISA_PROMPT',
    promptAnalysisAspectRatio: 'auto',
    promptAnalysisCustomAspectRatio: '',
    promptAnalysisAspectRatioError: null
  });

  assert(promptInputComp.html.includes('id="panel-prompt-aspect-ratio"'), 'UI: Panel kontrol rasio hasil generate ter-render pada mode ANALISA_PROMPT');
  assert(promptInputComp.html.includes('id="select-prompt-aspect-ratio"'), 'UI: Dropdown select rasio aspek tersedia');
  assert(promptInputComp.html.includes('📐 Rasio Hasil Generate'), 'UI: Label kontrol "📐 Rasio Hasil Generate" ditampilkan');
  assert(promptInputComp.html.includes('value="auto"'), 'UI: Pilihan 1 (Otomatis) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="1:1"'), 'UI: Pilihan 2 (1:1) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="3:2"'), 'UI: Pilihan 3 (3:2) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="2:3"'), 'UI: Pilihan 4 (2:3) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="4:3"'), 'UI: Pilihan 5 (4:3) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="3:4"'), 'UI: Pilihan 6 (3:4) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="16:9"'), 'UI: Pilihan 7 (16:9) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="9:16"'), 'UI: Pilihan 8 (9:16) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="21:9"'), 'UI: Pilihan 9 (21:9) tersedia dalam dropdown');
  assert(promptInputComp.html.includes('value="custom"'), 'UI: Pilihan 10 (Bebas / Custom) tersedia dalam dropdown');

  // UI saat mode lain (misal IMAGE_TO_PROMPT) tidak merender kontrol ini
  const otherModeComp = renderPromptInput({
    activeMode: 'IMAGE_TO_PROMPT'
  });
  assert(!otherModeComp.html.includes('id="panel-prompt-aspect-ratio"'), 'UI Isolasi: Kontrol rasio Analisa Prompt tidak muncul pada mode IMAGE_TO_PROMPT');

  // UI saat Custom terpilih: Input box kustom harus muncul
  const customUiComp = renderPromptInput({
    activeMode: 'ANALISA_PROMPT',
    promptAnalysisAspectRatio: 'custom',
    promptAnalysisCustomAspectRatio: '5:4'
  });
  assert(customUiComp.html.includes('id="input-prompt-custom-aspect-ratio"'), 'UI Custom: Input box format W:H muncul saat opsi custom aktif');
  assert(customUiComp.html.includes('value="5:4"'), 'UI Custom: Nilai custom ratio terpasang di input value');

  // UI saat Custom error: Pesan error merah harus ditampilkan
  const errorUiComp = renderPromptInput({
    activeMode: 'ANALISA_PROMPT',
    promptAnalysisAspectRatio: 'custom',
    promptAnalysisCustomAspectRatio: 'invalid',
    promptAnalysisAspectRatioError: 'Format rasio kustom tidak valid.'
  });
  assert(errorUiComp.html.includes('id="error-prompt-custom-ratio"'), 'UI Error: Elemen notifikasi error kustom muncul');
  assert(errorUiComp.html.includes('Format rasio kustom tidak valid.'), 'UI Error: Pesan error deskriptif tertulis jelas');

  // =========================================================================
  // 2. PERILAKU OTOMATIS (IKUTI PROMPT)
  // =========================================================================
  const promptWithRatio = 'A cinematic cyberpunk street at night, neon reflections --ar 16:9';
  const detectedRatio1 = detectSourceAspectRatio({ sourceType: 'CUSTOM_PROMPT', basePrompt: promptWithRatio });
  assert(detectedRatio1 === '16:9', 'Otomatis: Berhasil mendeteksi rasio 16:9 dari prompt asli');
  const resultWithRatio = applyAspectRatioToPrompt(promptWithRatio, detectedRatio1);
  assert(resultWithRatio.includes('--ar 16:9'), 'Otomatis: Mempertahankan --ar 16:9 pada prompt optimal');

  const promptWithoutRatio = 'A close up portrait of an astronaut on Mars';
  const detectedRatio2 = detectSourceAspectRatio({ sourceType: 'CUSTOM_PROMPT', basePrompt: promptWithoutRatio });
  assert(detectedRatio2 === null, 'Otomatis: Mengembalikan null jika prompt tidak menyebutkan rasio (tidak mengarang rasio)');
  const resultWithoutRatio = applyAspectRatioToPrompt(promptWithoutRatio, detectedRatio2);
  assert(!resultWithoutRatio.includes('--ar'), 'Otomatis: Prompt tetap bersih tanpa parameter --ar buatan jika tidak ada di sumber');

  // =========================================================================
  // 3. PENERAPAN 8 PRESET RASIO PADA PROMPT OPTIMAL
  // =========================================================================
  const baseOptimalPrompt = 'High-fashion editorial model in futuristic laboratory, /cam_portrait /lighting_studio';

  const presetsToTest = [
    { ratio: '1:1', expected: '--ar 1:1' },
    { ratio: '3:2', expected: '--ar 3:2' },
    { ratio: '2:3', expected: '--ar 2:3' },
    { ratio: '4:3', expected: '--ar 4:3' },
    { ratio: '3:4', expected: '--ar 3:4' },
    { ratio: '16:9', expected: '--ar 16:9' },
    { ratio: '9:16', expected: '--ar 9:16' },
    { ratio: '21:9', expected: '--ar 21:9' }
  ];

  presetsToTest.forEach(p => {
    const res = applyAspectRatioToPrompt(baseOptimalPrompt, p.ratio);
    assert(res.endsWith(p.expected), `Preset ${p.ratio}: Prompt Optimal berakhir dengan '${p.expected}'`);
    assert(res.includes('/cam_portrait'), `Preset ${p.ratio}: Shorthand /cam_portrait tetap utuh`);
  });

  // =========================================================================
  // 4. RESOLUSI KONFLIK RASIO (MENGGANTI TANPA DUPLIKASI)
  // =========================================================================
  const promptWithOldRatio = 'A majestic mountain landscape at sunrise, /lighting_golden_hour --ar 1:1';
  const overriddenTo169 = applyAspectRatioToPrompt(promptWithOldRatio, '16:9');
  assert(overriddenTo169.includes('--ar 16:9'), 'Resolusi Konflik: Nilai rasio baru --ar 16:9 berhasil disematkan');
  assert(!overriddenTo169.includes('--ar 1:1'), 'Resolusi Konflik: Nilai rasio lama --ar 1:1 bersih terhapus');
  const countArMatches = (overriddenTo169.match(/--ar/g) || []).length;
  assert(countArMatches === 1, 'Resolusi Konflik: Tidak ada duplikasi parameter --ar (tepat 1 kemunculan)');

  // =========================================================================
  // 5. VALIDASI & PENERAPAN RASIO BEBAS / CUSTOM
  // =========================================================================
  // Kasus Valid
  const valid1 = validateCustomAspectRatio('5:4');
  assert(valid1.valid === true && valid1.normalized === '5:4', 'Validasi Custom: "5:4" sah dan ter-normalisasi');
  const valid2 = validateCustomAspectRatio('2.35:1');
  assert(valid2.valid === true && valid2.normalized === '2.35:1', 'Validasi Custom: "2.35:1" angka desimal positif sah');
  const valid3 = validateCustomAspectRatio(' 1.85 : 1 ');
  assert(valid3.valid === true && valid3.normalized === '1.85:1', 'Validasi Custom: Spasi di sekitar pemisah ":" otomatis dibersihkan');

  const customApplied = applyAspectRatioToPrompt(baseOptimalPrompt, valid1.normalized);
  assert(customApplied.endsWith('--ar 5:4'), 'Penerapan Custom: Rasio kustom "5:4" berhasil disematkan sebagai --ar 5:4');

  // Kasus Tidak Valid
  const invalidEmpty = validateCustomAspectRatio('');
  assert(invalidEmpty.valid === false && invalidEmpty.error.includes('tidak boleh kosong'), 'Validasi Custom: String kosong ditolak');

  const invalidText = validateCustomAspectRatio('panoramic');
  assert(invalidText.valid === false, 'Validasi Custom: Teks non-angka ditolak');

  const invalidNegative = validateCustomAspectRatio('-16:9');
  assert(invalidNegative.valid === false, 'Validasi Custom: Angka negatif ditolak');

  const invalidZero = validateCustomAspectRatio('0:0');
  assert(invalidZero.valid === false, 'Validasi Custom: Angka nol ditolak');

  // =========================================================================
  // 6. SALIN PROMPT MENYALIN PROMPT OPTIMAL LENGKAP DENGAN RASIO
  // =========================================================================
  const promptForCopy = applyAspectRatioToPrompt('Cyberpunk detective in rainy Tokyo, /cam_low /lighting_neon', '16:9');
  const copiedClean = cleanPromptForCopy(promptForCopy);
  assert(copiedClean === promptForCopy, 'SALIN PROMPT: Menyalin teks lengkap persis seperti Prompt Optimal');
  assert(copiedClean.includes('--ar 16:9'), 'SALIN PROMPT: Parameter --ar 16:9 ikut tersalin');

  // =========================================================================
  // 7. NEGATIVE PROMPT TIDAK BOLEH MEMUAT PARAMETER RASIO
  // =========================================================================
  const negResult = buildDynamicNegativePrompt({
    prompt: promptForCopy,
    userPrompt: 'Cyberpunk detective in rainy Tokyo',
    installedShorthands: ['/cam_low', '/lighting_neon'],
    preset: 'universal'
  });
  assert(!negResult.negativePrompt.includes('--ar'), 'Negative Prompt: Parameter rasio (--ar) TIDAK PERNAH masuk ke negative prompt');

  // =========================================================================
  // 8. SIMULASI INSTANT SYNC PADA PROMPT OPTIMAL
  // =========================================================================
  let currentOptimal = 'Portrait of a warrior, /cam_portrait';
  // User ganti ke 16:9
  currentOptimal = applyAspectRatioToPrompt(currentOptimal, '16:9');
  assert(currentOptimal.endsWith('--ar 16:9'), 'Instant Sync: Berubah ke 16:9 tanpa analisis ulang');

  // User ganti lagi ke 9:16
  currentOptimal = applyAspectRatioToPrompt(currentOptimal, '9:16');
  assert(currentOptimal.endsWith('--ar 9:16'), 'Instant Sync: Berubah ke 9:16 dan menghapus 16:9');
  assert(!currentOptimal.includes('16:9'), 'Instant Sync: 16:9 lama tidak bersisa');

  // User ganti ke Otomatis tanpa rasio asal
  const detectedNone = detectSourceAspectRatio({ sourceType: 'CUSTOM_PROMPT', basePrompt: 'Portrait of a warrior' });
  currentOptimal = applyAspectRatioToPrompt(currentOptimal, detectedNone);
  assert(!currentOptimal.includes('--ar'), 'Instant Sync: Kembali ke format alami tanpa --ar saat pilih Otomatis');

  // =========================================================================
  // 9. INTEGRASI ANALYZER PAGE
  // =========================================================================
  const analyzerPageComp = renderAnalyzerPage({
    activeMode: 'ANALISA_PROMPT',
    promptAnalysisAspectRatio: '16:9',
    promptAnalysisCustomAspectRatio: '',
    promptAnalysisAspectRatioError: null,
    currentPrompt: 'Cyberpunk street',
    analysisResult: {
      optimalPrompt: 'Cyberpunk street, /cam_wide --ar 16:9',
      installedShorthands: ['/cam_wide']
    }
  });
  assert(analyzerPageComp.html.includes('id="panel-prompt-aspect-ratio"'), 'AnalyzerPage: Panel rasio aspek ter-render dalam tampilan terintegrasi');
  assert(analyzerPageComp.html.includes('🎯 Target: 16:9'), 'AnalyzerPage: Badge status target menampilkan 16:9');

  return { passed, failed };
}
