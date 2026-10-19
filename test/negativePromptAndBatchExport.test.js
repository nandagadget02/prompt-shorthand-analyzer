/**
 * Test Suite: Dynamic Negative Prompt Builder & Multi-Format Exporter V3.8
 */

import {
  detectPromptProfile,
  buildDynamicNegativePrompt,
  NEGATIVE_PRESETS,
  DEFAULT_CATEGORY_TERMS
} from '../src/lib/negativePromptEngine.js';

import {
  formatAsJson,
  formatAsTxt,
  formatAsCsv,
  generateBatchVariations
} from '../src/lib/promptExporter.js';

import { renderNegativePromptPanel } from '../src/components/NegativePromptPanel.js';

export function runV38FeatureTests() {
  console.log('\n--- VERIFIKASI FITUR V3.8: DYNAMIC NEGATIVE PROMPT & BATCH EXPORTER ---');
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

  // 1. Profile Detection Tests
  const profileHuman = detectPromptProfile('A portrait of a young woman in modern cafe', []);
  assert(profileHuman.hasHumanSubject === true, 'Profile: Mendeteksi subjek manusia dari kata kunci');

  const profileLock = detectPromptProfile('cyberpunk city street', ['/facelock', '/outfitlock']);
  assert(profileLock.hasHumanSubject === true, 'Profile: Mendeteksi subjek manusia dari shorthand /facelock');

  const profilePhoto = detectPromptProfile('photorealistic 85mm lens portrait RAW photo', []);
  assert(profilePhoto.isPhotorealistic === true, 'Profile: Mendeteksi profil fotorealistis');

  const profileAnime = detectPromptProfile('vibrant anime girl illustration drawing', []);
  assert(profileAnime.isAnimeOrArt === true, 'Profile: Mendeteksi profil anime/art');

  // 2. Negative Prompt Builder Tests
  const resUniversal = buildDynamicNegativePrompt({
    prompt: 'A stunning portrait of a model',
    installedShorthands: ['/cam_portrait'],
    preset: NEGATIVE_PRESETS.UNIVERSAL
  });
  assert(resUniversal.termCount > 0, 'Negative Engine: Menghasilkan istilah negatif');
  assert(resUniversal.negativePrompt.includes('bad anatomy'), 'Negative Engine: Memuat proteksi anatomi untuk subjek manusia');
  assert(resUniversal.negativePrompt.includes('low quality'), 'Negative Engine: Memuat proteksi kualitas dasar');
  assert(resUniversal.negativePrompt.includes('watermark'), 'Negative Engine: Memuat proteksi anti-watermark');

  // Category toggle test
  const resNoWatermark = buildDynamicNegativePrompt({
    prompt: 'A car in mountain',
    activeCategories: {
      quality: true,
      anatomy: false,
      styleContamination: true,
      watermarkText: false,
      compositionLighting: true
    }
  });
  assert(!resNoWatermark.negativePrompt.includes('watermark'), 'Negative Engine: Kategori watermark dinonaktifkan dengan tepat');
  assert(!resNoWatermark.negativePrompt.includes('bad hands'), 'Negative Engine: Kategori anatomi dinonaktifkan dengan tepat');
  assert(resNoWatermark.negativePrompt.includes('blurry'), 'Negative Engine: Kategori kualitas tetap aktif');

  // Anime mode negative test
  const resAnimeNeg = buildDynamicNegativePrompt({
    prompt: 'anime character in fantasy world illustration',
    installedShorthands: []
  });
  assert(resAnimeNeg.negativePrompt.includes('photorealistic'), 'Negative Engine: Anime mode memuat anti-fotorealistis');

  // Custom terms test
  const resCustom = buildDynamicNegativePrompt({
    prompt: 'studio photo',
    customTerms: ['yellow tint', 'green glare']
  });
  assert(resCustom.negativePrompt.includes('yellow tint'), 'Negative Engine: Menyertakan custom term 1');
  assert(resCustom.negativePrompt.includes('green glare'), 'Negative Engine: Menyertakan custom term 2');

  // Deduplication test
  const resDedup = buildDynamicNegativePrompt({
    prompt: 'studio photo',
    customTerms: ['blurry', 'low quality']
  });
  const countBlurry = resDedup.terms.filter(t => t === 'blurry').length;
  assert(countBlurry === 1, 'Negative Engine: Berhasil mendeduplikasi istilah negatif');

  // 3. Prompt Exporter Tests
  const testItems = [
    {
      id: 'var_1',
      positivePrompt: 'A realistic camera shot /cam_portrait, /lighting_natural',
      negativePrompt: 'blurry, bad anatomy, low quality',
      shorthands: ['/cam_portrait', '/lighting_natural']
    },
    {
      id: 'var_2',
      positivePrompt: 'A realistic camera shot /cam_portrait, warm cinematic golden hour light',
      negativePrompt: 'blurry, bad anatomy, low quality',
      shorthands: ['/cam_portrait']
    }
  ];

  // JSON export
  const jsonStr = formatAsJson(testItems);
  const parsedJson = JSON.parse(jsonStr);
  assert(parsedJson.generator === 'Prompt Shorthand Analyzer V3.8', 'Exporter JSON: Metadata generator V3.8 valid');
  assert(parsedJson.totalItems === 2, 'Exporter JSON: Jumlah item valid');
  assert(parsedJson.items[0].shorthands.length === 2, 'Exporter JSON: Shorthands array valid');

  // TXT export
  const txtStr = formatAsTxt(testItems);
  assert(txtStr.includes('[POSITIVE PROMPT]'), 'Exporter TXT: Memuat section [POSITIVE PROMPT]');
  assert(txtStr.includes('[NEGATIVE PROMPT]'), 'Exporter TXT: Memuat section [NEGATIVE PROMPT]');
  assert(txtStr.includes('=== PROMPT VARIATION 1 ==='), 'Exporter TXT: Memuat pemisah variasi');

  // CSV export
  const csvStr = formatAsCsv(testItems);
  assert(csvStr.includes('Positive Prompt'), 'Exporter CSV: Memuat header kolom Positive Prompt');
  assert(csvStr.includes('Negative Prompt'), 'Exporter CSV: Memuat header kolom Negative Prompt');
  assert(csvStr.includes('/cam_portrait'), 'Exporter CSV: Memuat data shorthand');

  // 4. Batch Variations Generation
  const batchVars = generateBatchVariations(
    'A majestic lion in savanna /cam_telephoto',
    'blurry, distorted',
    3,
    ['/cam_telephoto']
  );
  assert(batchVars.length === 3, 'Batch: Menghasilkan 3 variasi batch');
  assert(batchVars[0].positivePrompt.includes('A majestic lion in savanna'), 'Batch: Variasi 1 mempertahankan prompt asli');
  assert(batchVars[1].positivePrompt.includes('golden hour'), 'Batch: Variasi 2 memuat nuansa golden hour');
  assert(batchVars[2].positivePrompt.includes('studio'), 'Batch: Variasi 3 memuat nuansa studio contrast');
  assert(batchVars[1].positivePrompt.includes('/cam_telephoto'), 'Batch: Mempertahankan shorthand inti pada variasi');

  // 5. UI Component Structure Tests
  const mockPanel = renderNegativePromptPanel({
    optimalPrompt: 'A beautiful landscape /cam_wide',
    installedShorthands: ['/cam_wide']
  });
  assert(mockPanel.html.includes('id="card-negative-prompt"'), 'UI: Panel Negative Prompt ter-render');
  assert(mockPanel.html.includes('id="btn-copy-negative-prompt"'), 'UI: Tombol Salin Negative tersedia');
  assert(mockPanel.html.includes('id="btn-copy-combined-prompts"'), 'UI: Tombol Salin Positif + Negatif tersedia');
  assert(mockPanel.html.includes('data-category="quality"'), 'UI: Chip filter Kualitas tersedia');
  assert(mockPanel.html.includes('data-category="anatomy"'), 'UI: Chip filter Anatomi tersedia');
  assert(mockPanel.html.includes('data-category="styleContamination"'), 'UI: Chip filter Anti-CGI tersedia');
  assert(mockPanel.html.includes('id="btn-export-json"'), 'UI: Tombol Ekspor JSON tersedia');
  assert(mockPanel.html.includes('id="btn-export-txt"'), 'UI: Tombol Ekspor TXT tersedia');
  assert(mockPanel.html.includes('id="btn-export-csv"'), 'UI: Tombol Ekspor CSV tersedia');
  assert(mockPanel.html.includes('id="btn-toggle-batch-preview"'), 'UI: Tombol Pratinjau Batch tersedia');

  console.log(`\nHASIL FITUR V3.8 TESTS: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}
