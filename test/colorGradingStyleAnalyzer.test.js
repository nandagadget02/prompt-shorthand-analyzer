/**
 * Unit Tests for AI Color Grading & Style Analyzer (V3.8 Patch)
 */

import {
  evaluatePhotoCharacteristics,
  evaluateAndRankStyles,
  sliceDisplayedStyles,
  buildChatGPTEditingPrompt
} from '../src/lib/colorGradingStyleAnalyzer.js';
import {
  COLOUR_GRADING_MODES,
  ALL_COLOUR_GRADING_STYLES,
  DEFAULT_COLOUR_GRADING_CONFIG
} from '../src/data/colourGradingData.js';
import { renderColourGradingPanel } from '../src/components/ColourGradingPanel.js';

export function runColorGradingStyleAnalyzerTests() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      passed++;
      console.log(`  ✓ ${message}`);
    } else {
      failed++;
      console.error(`  ✗ ${message}`);
    }
  }

  console.log('\n--- TEST SUITE: AI COLOR GRADING & STYLE ANALYZER (V3.8 PATCH) ---');

  // 1. Verifikasi Konstanta & Default Config
  assert(COLOUR_GRADING_MODES.some(m => m.id === 'AI_STYLE_ANALYZER'), 'Mode AI_STYLE_ANALYZER terdaftar dalam COLOUR_GRADING_MODES');
  assert(COLOUR_GRADING_MODES.length === 4, 'Tepat ada 4 pilihan mode colour grading');
  assert(DEFAULT_COLOUR_GRADING_CONFIG.aiStyleAnalyzer !== undefined, 'DEFAULT_COLOUR_GRADING_CONFIG memiliki initial state aiStyleAnalyzer');
  assert(DEFAULT_COLOUR_GRADING_CONFIG.aiStyleAnalyzer.displayCount === 10, 'Default displayCount adalah 10 style');

  // 2. Evaluasi Karakteristik Foto (Tanpa Foto & Dengan Foto)
  const defaultCharacteristics = evaluatePhotoCharacteristics(null);
  assert(defaultCharacteristics.hasImage === false, 'Karakteristik tanpa foto mengembalikan hasImage: false');
  assert(defaultCharacteristics.subjectType !== undefined, 'Karakteristik memiliki field subjectType');
  assert(defaultCharacteristics.exposureCondition !== undefined, 'Karakteristik memiliki field exposureCondition');

  const mockImage = {
    name: 'portrait_girl_golden_hour.jpg',
    visualTelemetry: {
      brightness: 165,
      contrast: 55,
      dynamicRange: 190,
      colorTemp: 'warm',
      dominantRgb: { r: 210, g: 170, b: 120 }
    }
  };
  const photoDiagnostics = evaluatePhotoCharacteristics(mockImage);
  assert(photoDiagnostics.hasImage === true, 'Karakteristik dengan foto mengembalikan hasImage: true');
  assert(photoDiagnostics.subjectType.includes('Portrait'), 'Deteksi subjek berhasil mengidentifikasi Portrait dari filename/metadata');
  assert(photoDiagnostics.whiteBalance.includes('Warm'), 'Deteksi white balance mengenali rona hangat (warm)');

  // 3. Evaluasi & Ranking Katalog Style
  const rankedStyles = evaluateAndRankStyles(photoDiagnostics, ALL_COLOUR_GRADING_STYLES);
  assert(Array.isArray(rankedStyles) && rankedStyles.length > 0, 'evaluateAndRankStyles menghasilkan array style yang terisi');
  // Seluruh style relevan tetap disimpan (tidak di-hardcode ke 3 atau 5)
  assert(rankedStyles.length >= 10, 'Seluruh style relevan dipertahankan (bukan cuma Top 3/Top 5)');
  assert(rankedStyles[0].matchScore >= rankedStyles[rankedStyles.length - 1].matchScore, 'Hasil terurut descending berdasarkan matchScore');
  assert(['Paling Sesuai', 'Sangat Sesuai', 'Sesuai sebagai Alternatif'].includes(rankedStyles[0].matchLabel), 'Style memiliki badge label kecocokan yang valid');
  assert(typeof rankedStyles[0].reason === 'string' && rankedStyles[0].reason.length > 10, 'Setiap style memiliki alasan berbasis kondisi foto');
  assert(typeof rankedStyles[0].outcomeSummary === 'string', 'Setiap style memiliki ringkasan hasil editing');

  // 4. Controller Jumlah Style yang Ditampilkan (sliceDisplayedStyles)
  // Default 10
  const slice10 = sliceDisplayedStyles(rankedStyles, 10);
  assert(slice10.displayedStyles.length === Math.min(10, rankedStyles.length), 'Irisan slice 10 menghasilkan tepat 10 style (atau total relevan)');
  assert(slice10.displayedCount === Math.min(10, rankedStyles.length), 'displayedCount akurat');
  assert(slice10.indicatorText.includes('relevan'), 'indicatorText memuat status jumlah style');

  // Pilihan Custom (misal 5)
  const slice5 = sliceDisplayedStyles(rankedStyles, 5);
  assert(slice5.displayedStyles.length === 5, 'Irisan slice 5 menghasilkan tepat 5 style');
  assert(slice5.indicatorText.includes('5 dari'), 'indicatorText menampilkan "5 dari X style relevan"');

  // Pilihan "Semua Style Relevan" ('all')
  const sliceAll = sliceDisplayedStyles(rankedStyles, 'all');
  assert(sliceAll.displayedStyles.length === rankedStyles.length, 'Irisan "all" menampilkan 100% style relevan');
  assert(sliceAll.indicatorText.includes('semua'), 'indicatorText menampilkan "Menampilkan semua X style relevan"');
  assert(sliceAll.isAll === true, 'isAll bernilai true saat mode all dipilih');

  // 5. Generator Prompt Editing ChatGPT Terstruktur
  const selectedStyleObj = rankedStyles[0];
  const chatGptPrompt = buildChatGPTEditingPrompt({
    photoCharacteristics: photoDiagnostics,
    selectedStyleObj,
    additionalRequest: 'buat langit lebih dramatis dan hangat',
    intensity: 75
  });

  assert(chatGptPrompt.includes('[INSTRUCTION FOR CHATGPT'), 'Prompt memuat header mandat pengeditan ChatGPT');
  assert(chatGptPrompt.includes('non-destructive COLOR GRADING'), 'Prompt menegaskan pengeditan warna non-destruktif');
  assert(chatGptPrompt.includes('DO NOT use generative fill'), 'Prompt melarang generative fill / regenerasi dari nol');
  assert(chatGptPrompt.includes('Retain 100% of the original subject facial identity'), 'Prompt mewajibkan preservasi 100% identitas wajah subjek');
  assert(chatGptPrompt.includes(selectedStyleObj.name), 'Prompt memuat nama style terpilih');
  assert(chatGptPrompt.includes('75%'), 'Prompt memuat nilai intensitas editing');
  assert(chatGptPrompt.includes('buat langit lebih dramatis dan hangat'), 'Prompt memuat request editing tambahan pengguna');
  assert(chatGptPrompt.includes('[INTELLIGENT PRESERVATION & ARTIFACT PREVENTION RULES]'), 'Prompt memuat aturan pelindung kualitas & pencegahan artefak');

  // 6. Verifikasi Render Komponen HTML & Kompatibilitas UI
  const panelComp = renderColourGradingPanel({
    config: {
      ...DEFAULT_COLOUR_GRADING_CONFIG,
      mode: 'AI_STYLE_ANALYZER',
      aiStyleAnalyzer: {
        selectedStyle: selectedStyleObj.name,
        displayCount: 5,
        additionalRequest: 'Uji request',
        generatedPrompt: chatGptPrompt,
        photoDiagnostics,
        rankedResults: rankedStyles
      }
    },
    uploadedImage: mockImage
  });

  assert(panelComp.html.includes('2. KARAKTERISTIK VISUAL FOTO ASLI'), 'Sub-panel menampilkan visual diagnostics foto asli');
  assert(panelComp.html.includes('JUMLAH STYLE YANG DITAMPILKAN'), 'Sub-panel menampilkan controller kuota tampilan style');
  assert(panelComp.html.includes('id="cg-analyzer-display-count"'), 'Elemen dropdown display count hadir');
  assert(panelComp.html.includes('Semua Style Relevan'), 'Opsi Semua Style Relevan tersedia di dropdown');
  assert(panelComp.html.includes('REQUEST EDITING TAMBAHAN'), 'Sub-panel memuat input request editing tambahan');
  assert(panelComp.html.includes('btn-build-chatgpt-prompt'), 'Tombol Buat Prompt Editing hadir');
  assert(panelComp.html.includes('cg-chatgpt-prompt-output'), 'Output box prompt ChatGPT hadir');
  assert(panelComp.html.includes('btn-copy-chatgpt-prompt'), 'Tombol Salin Prompt hadir');
  assert(typeof panelComp.bindEvents === 'function', 'Komponen memiliki fungsi bindEvents yang valid');

  console.log(`AI Style Analyzer Tests: ${passed} passed, ${failed} failed\n`);
  return { passed, failed };
}
