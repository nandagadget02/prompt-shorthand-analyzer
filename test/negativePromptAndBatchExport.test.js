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
  // 6. Sinkronisasi PROMPT OPTIMAL & Dynamic Negative Prompt Builder Tests (V3.8 Synchronized Patch)
  // QA 1: PROMPT OPTIMAL Kosong (Wajib 100% Kosong Tanpa Default)
  const emptyRes = buildDynamicNegativePrompt({
    prompt: '',
    userPrompt: 'input mentah yang tidak boleh dijadikan fallback',
    analysisStatus: 'IDLE'
  });
  assert(emptyRes.mode === 'EMPTY', 'Sync Kosong: Mode terdeteksi sebagai EMPTY saat prompt optimal kosong');
  assert(emptyRes.termCount === 0, 'Sync Kosong: Jumlah istilah negatif aktif bernilai tepat 0');
  assert(emptyRes.negativePrompt === '', 'Sync Kosong: String negative prompt kosong bersih tanpa teks default');
  assert(emptyRes.terms.length === 0, 'Sync Kosong: Array istilah negatif kosong');
  assert(emptyRes.modeLabel === 'MENUNGGU PROMPT OPTIMAL', 'Sync Kosong: Label status menunjukkan MENUNGGU PROMPT OPTIMAL');

  // QA 2: PROMPT OPTIMAL Hanya Spasi / Whitespace (Wajib Dinyatakan Kosong)
  const whitespaceRes = buildDynamicNegativePrompt({
    prompt: '   \n\t  ',
    userPrompt: 'some prompt',
    analysisStatus: 'ANALYSIS_READY'
  });
  assert(whitespaceRes.mode === 'EMPTY', 'Sync Whitespace: Whitespace diidentifikasi sebagai kosong (mode EMPTY)');
  assert(whitespaceRes.termCount === 0, 'Sync Whitespace: Istilah aktif tepat 0');
  assert(whitespaceRes.negativePrompt === '', 'Sync Whitespace: Negative prompt tetap kosong bersih');

  // QA 3: PROMPT OPTIMAL Terisi Subjek Manusia (Contextual Relevan: Anatomi Aktif)
  const humanPromptRes = buildDynamicNegativePrompt({
    prompt: 'A stunning close-up portrait of a female model wearing silk scarf /facelock /cam_portrait'
  });
  assert(humanPromptRes.mode === 'ANALYSIS', 'Sync Manusia: Mode terdeteksi sebagai ANALYSIS saat prompt optimal terisi');
  assert(humanPromptRes.termCount > 0, 'Sync Manusia: Istilah negatif berhasil dihasilkan');
  assert(humanPromptRes.terms.includes('bad anatomy'), 'Sync Manusia: Memuat istilah anatomi karena subjek manusia terdeteksi');
  assert(humanPromptRes.terms.includes('bad hands'), 'Sync Manusia: Memuat istilah tangan karena subjek manusia terdeteksi');

  // QA 4: PROMPT OPTIMAL Terisi Lanskap / Objek Non-Manusia (Kontekstual: Tanpa Anatomi Manusia)
  const landscapePromptRes = buildDynamicNegativePrompt({
    prompt: 'A sleek modern red sports car driving on a scenic alpine road at sunset, 8k resolution'
  });
  assert(landscapePromptRes.termCount > 0, 'Sync Lanskap: Menghasilkan istilah kualitas relevan');
  assert(!landscapePromptRes.terms.includes('bad anatomy'), 'Sync Lanskap: Tidak memuat istilah anatomi untuk mobil/alam');
  assert(!landscapePromptRes.terms.includes('bad hands'), 'Sync Lanskap: Tidak memuat istilah tangan untuk mobil/alam');
  assert(!landscapePromptRes.terms.includes('extra limbs'), 'Sync Lanskap: Tidak memuat istilah anggota tubuh ekstra');

  // QA 5: Kategori Proteksi Dapat Di-toggle Ketika Prompt Terisi
  const customToggleRes = buildDynamicNegativePrompt({
    prompt: 'A stunning portrait of an artist in studio',
    activeCategories: {
      quality: true,
      anatomy: false,
      styleContamination: true,
      watermarkText: false,
      compositionLighting: true
    }
  });
  assert(!customToggleRes.terms.includes('watermark'), 'Toggle Kategori: Watermark difilter saat dinonaktifkan');
  assert(!customToggleRes.terms.includes('bad hands'), 'Toggle Kategori: Anatomi difilter saat dinonaktifkan');
  assert(customToggleRes.terms.includes('blurry'), 'Toggle Kategori: Kategori Kualitas tetap disertakan');

  // QA 6: Semua Kategori Dinonaktifkan Saat Prompt Terisi
  const allDisabledRes = buildDynamicNegativePrompt({
    prompt: 'A futuristic city skyline',
    activeCategories: {
      quality: false,
      anatomy: false,
      styleContamination: false,
      watermarkText: false,
      compositionLighting: false
    }
  });
  assert(allDisabledRes.termCount === 0, 'Semua Nonaktif: Istilah aktif tepat 0');
  assert(allDisabledRes.negativePrompt === '', 'Semua Nonaktif: Negative prompt kosong bersih');

  // QA 7: Conflict Detection - Anime / Manga (Jangan melarang anime/illustration jika diminta)
  const animeConflictRes = buildDynamicNegativePrompt({
    prompt: '2D anime girl, colorful manga illustration, vibrant drawing'
  });
  assert(!animeConflictRes.terms.includes('anime'), 'Conflict: Istilah anime difilter keluar saat prompt meminta anime');
  assert(!animeConflictRes.terms.includes('illustration'), 'Conflict: Istilah illustration difilter keluar saat prompt meminta illustration');
  assert(!animeConflictRes.terms.includes('drawing'), 'Conflict: Istilah drawing difilter keluar saat prompt meminta drawing');
  assert(animeConflictRes.conflictsDetected.length > 0, 'Conflict: conflictsDetected mencatat istilah yang disaring');

  // QA 8: Conflict Detection - 3D / CGI Render (Jangan melarang CGI/3D jika diminta)
  const cgiConflictRes = buildDynamicNegativePrompt({
    prompt: 'Octane 3D render of futuristic robot in Unreal Engine CGI'
  });
  assert(!cgiConflictRes.terms.includes('cgi'), 'Conflict: Istilah cgi difilter keluar saat prompt meminta 3D CGI');
  assert(!cgiConflictRes.terms.includes('3d render'), 'Conflict: Istilah 3d render difilter keluar saat prompt meminta 3D CGI');

  // QA 9: Conflict Detection - Motion Blur (Jangan melarang blur jika diminta)
  const motionBlurRes = buildDynamicNegativePrompt({
    prompt: 'Sports racing car zooming with high speed motion blur action shot'
  });
  assert(!motionBlurRes.terms.includes('blurry'), 'Conflict: Istilah blurry difilter keluar saat prompt meminta motion blur');

  // QA 10: Conflict Detection - Film Grain & Noise (Jangan melarang grain jika diminta)
  const filmGrainRes = buildDynamicNegativePrompt({
    prompt: 'Vintage 35mm film photograph with natural analog film grain and texture'
  });
  assert(!filmGrainRes.terms.includes('grainy noise'), 'Conflict: Istilah grainy noise difilter keluar saat prompt meminta film grain');

  // QA 11: Conflict Detection - Low Key & Deep Shadows (Jangan melarang shadow jika diminta)
  const lowKeyRes = buildDynamicNegativePrompt({
    prompt: 'Dramatic low-key chiaroscuro portrait with deep dark shadows and silhouettes'
  });
  assert(!lowKeyRes.terms.includes('muddy shadows'), 'Conflict: Istilah muddy shadows difilter keluar saat prompt meminta low-key shadows');
  assert(!lowKeyRes.terms.includes('underexposed'), 'Conflict: Istilah underexposed difilter keluar saat prompt meminta low-key shadows');

  // QA 12: Conflict Detection - Extreme Framing / Close-up Crop
  const framingRes = buildDynamicNegativePrompt({
    prompt: 'Extreme close up macro shot of human eye tightly cropped in frame'
  });
  assert(!framingRes.terms.includes('awkward framing'), 'Conflict: Istilah awkward framing difilter keluar saat prompt meminta close-up cropped framing');
  assert(!framingRes.terms.includes('cut off subject'), 'Conflict: Istilah cut off subject difilter keluar saat prompt meminta close-up cropped framing');

  // QA 13: Conflict Detection - Logo / Watermark Preservation
  const logoRes = buildDynamicNegativePrompt({
    prompt: 'Product packaging bottle showing the official branded brand logo and label text'
  });
  assert(!logoRes.terms.includes('watermark'), 'Conflict: Istilah watermark difilter keluar saat prompt meminta logo/brand');
  assert(!logoRes.terms.includes('logo'), 'Conflict: Istilah logo difilter keluar saat prompt meminta logo/brand');

  // QA 14: Batch Generator Saat PROMPT OPTIMAL Kosong (Wajib Bersih Tanpa Variasi Dummy)
  const emptyBatch = generateBatchVariations('', 'blurry, bad anatomy', 3);
  assert(Array.isArray(emptyBatch) && emptyBatch.length === 0, 'Batch Sync: Mengembalikan array kosong saat prompt optimal kosong');

  // QA 15: Batch Generator Saat PROMPT OPTIMAL Terisi
  const populatedBatch = generateBatchVariations('A majestic lion in savanna', 'blurry, distorted', 3, ['/cam_telephoto']);
  assert(populatedBatch.length === 3, 'Batch Sync: Menghasilkan 3 variasi saat prompt optimal terisi');
  assert(populatedBatch[0].positivePrompt.includes('A majestic lion in savanna'), 'Batch Sync: Variasi 1 mempertahankan prompt optimal');

  // QA 16: UI Component - Tampilan Saat Prompt Optimal Kosong
  const uiEmpty = renderNegativePromptPanel({
    optimalPrompt: '',
    userPrompt: '',
    analysisStatus: 'IDLE'
  });
  assert(uiEmpty.html.includes('0 istilah negatif aktif'), 'UI Sync: Badge menghitung 0 istilah negatif aktif saat prompt kosong');
  assert(uiEmpty.html.includes('MENUNGGU PROMPT OPTIMAL'), 'UI Sync: Badge menampilkan MENUNGGU PROMPT OPTIMAL');
  assert(uiEmpty.html.includes('Prompt Optimal belum tersedia'), 'UI Sync: Menampilkan pesan panduan bahwa prompt belum dianalisis');

  // QA 17: UI Component - Tampilan Saat Prompt Optimal Terisi
  const uiActive = renderNegativePromptPanel({
    optimalPrompt: 'A photorealistic portrait of an astronaut on Mars /cam_portrait',
    userPrompt: 'astronaut on Mars',
    analysisStatus: 'ANALYSIS_READY'
  });
  assert(uiActive.html.includes('TERHUBUNG KE PROMPT OPTIMAL'), 'UI Sync: Badge menampilkan TERHUBUNG KE PROMPT OPTIMAL');
  assert(!uiActive.html.includes('0 istilah negatif aktif'), 'UI Sync: Menampilkan jumlah istilah aktif riil saat prompt terisi');

  // QA 18: UI Component - Komponen Tombol dan Aksi Siap
  assert(uiActive.html.includes('id="btn-copy-negative-prompt"'), 'UI: Tombol Salin Negative tersedia');
  assert(uiActive.html.includes('id="btn-copy-combined-prompts"'), 'UI: Tombol Salin Positif + Negatif tersedia');
  assert(uiActive.html.includes('id="btn-export-json"'), 'UI: Tombol Ekspor JSON tersedia');
  assert(uiActive.html.includes('id="btn-export-txt"'), 'UI: Tombol Ekspor TXT tersedia');
  assert(uiActive.html.includes('id="btn-export-csv"'), 'UI: Tombol Ekspor CSV tersedia');

  console.log(`\nHASIL FITUR V3.8 TESTS: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}

