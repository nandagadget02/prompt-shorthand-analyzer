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
  // 6. Mode Operasi & Context-Aware Conflict Detection Tests (Master Patch V3.8)
  // QA 1: Mode Mandiri Tanpa Analisis (prompt kosong)
  const standaloneRes = buildDynamicNegativePrompt({
    prompt: '',
    userPrompt: '',
    analysisStatus: 'IDLE'
  });
  assert(standaloneRes.mode === 'STANDALONE', 'Mode Mandiri: Mode terdeteksi sebagai STANDALONE');
  assert(standaloneRes.termCount > 0, 'Mode Mandiri: Menghasilkan istilah negatif default');
  assert(standaloneRes.negativePrompt.includes('bad anatomy'), 'Mode Mandiri: Memuat proteksi anatomi default');

  // QA 2: Mode Mandiri dengan Semua Kategori Nonaktif
  const emptyCatRes = buildDynamicNegativePrompt({
    prompt: '',
    activeCategories: {
      quality: false,
      anatomy: false,
      styleContamination: false,
      watermarkText: false,
      compositionLighting: false
    }
  });
  assert(emptyCatRes.termCount === 0, 'Mode Mandiri: Istilah kosong ketika semua kategori dinonaktifkan');
  assert(emptyCatRes.negativePrompt === '', 'Mode Mandiri: Negative prompt kosong bersih');
  assert(Boolean(emptyCatRes.emptyStateMessage), 'Mode Mandiri: Menyediakan pesan panduan empty state');

  // QA 3: Mode Mandiri Hanya 1 Kategori Aktif (Hanya Kualitas)
  const onlyQualityRes = buildDynamicNegativePrompt({
    prompt: '',
    activeCategories: {
      quality: true,
      anatomy: false,
      styleContamination: false,
      watermarkText: false,
      compositionLighting: false
    }
  });
  assert(onlyQualityRes.terms.includes('lowres'), 'Mode Mandiri: Kategori Kualitas memuat lowres');
  assert(!onlyQualityRes.terms.includes('bad hands'), 'Mode Mandiri: Kategori Anatomi tidak disertakan');

  // QA 4: Mode Analisis dengan Optimal Prompt
  const analysisOptRes = buildDynamicNegativePrompt({
    prompt: 'A cinematic hyperrealistic shot of a mountain tiger',
    userPrompt: 'tiger',
    analysisStatus: 'COMPLETED'
  });
  assert(analysisOptRes.mode === 'ANALYSIS', 'Mode Analisis: Terdeteksi sebagai ANALYSIS saat optimal prompt tersedia');

  // QA 5: Mode Analisis dengan User Prompt ketika Optimal Prompt belum ada
  const analysisUserRes = buildDynamicNegativePrompt({
    prompt: '',
    userPrompt: 'A beautiful oil painting of sunflowers in the field',
    analysisStatus: 'ANALYZING'
  });
  assert(analysisUserRes.mode === 'ANALYSIS', 'Mode Analisis: Terdeteksi sebagai ANALYSIS menggunakan user prompt fallback');

  // QA 6: Mode Fallback saat Analisis Gagal
  const failedStatusRes = buildDynamicNegativePrompt({
    prompt: '',
    userPrompt: '',
    analysisStatus: 'FAILED'
  });
  assert(failedStatusRes.mode === 'ANALYSIS_FAILED', 'Mode Fallback: Terdeteksi sebagai ANALYSIS_FAILED saat analisis gagal');
  assert(failedStatusRes.termCount > 0, 'Mode Fallback: Tetap menghasilkan negative prompt mandiri untuk pengguna');

  // QA 7: Conflict Detection - Anime / Manga (Jangan melarang anime/illustration)
  const animeConflictRes = buildDynamicNegativePrompt({
    prompt: '2D anime girl, colorful manga illustration, vibrant drawing'
  });
  assert(!animeConflictRes.terms.includes('anime'), 'Conflict: Istilah anime difilter keluar saat prompt meminta anime');
  assert(!animeConflictRes.terms.includes('illustration'), 'Conflict: Istilah illustration difilter keluar saat prompt meminta illustration');
  assert(!animeConflictRes.terms.includes('drawing'), 'Conflict: Istilah drawing difilter keluar saat prompt meminta drawing');
  assert(animeConflictRes.conflictsResolved.length > 0, 'Conflict: Array conflictsResolved mencatat istilah yang disaring');

  // QA 8: Conflict Detection - 3D / CGI Render (Jangan melarang CGI/3D)
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

  // QA 14: Standalone Batch Generator (basePrompt kosong)
  const standaloneBatch = generateBatchVariations('', 'lowres, bad anatomy, blurry', 3);
  assert(standaloneBatch.length === 3, 'Standalone Batch: Menghasilkan 3 variasi kurasi saat basePrompt kosong');
  assert(standaloneBatch[0].title.includes('Universal Balanced'), 'Standalone Batch: Variasi 1 Universal Balanced');
  assert(standaloneBatch[1].title.includes('High-Protection'), 'Standalone Batch: Variasi 2 High-Protection');
  assert(standaloneBatch[2].title.includes('Ultra-Clean Studio'), 'Standalone Batch: Variasi 3 Ultra-Clean Studio');
  assert(standaloneBatch[0].positivePrompt === '', 'Standalone Batch: Positive prompt tetap kosong bersih');

  // QA 15: Standalone TXT Export (tanpa blok POSITIVE PROMPT kosong)
  const standaloneTxt = formatAsTxt(standaloneBatch);
  assert(!standaloneTxt.includes('[POSITIVE PROMPT]'), 'Standalone TXT: Tidak memunculkan blok [POSITIVE PROMPT] kosong');
  assert(standaloneTxt.includes('[NEGATIVE PROMPT]'), 'Standalone TXT: Memuat blok [NEGATIVE PROMPT]');
  assert(standaloneTxt.includes('=== PROMPT VARIATION 1 ==='), 'Standalone TXT: Memuat pemisah variasi 1');

  // QA 16: UI Component - Mode Mandiri Badge
  const uiStandalone = renderNegativePromptPanel({
    userPrompt: '',
    optimalPrompt: '',
    analysisStatus: 'IDLE'
  });
  assert(uiStandalone.html.includes('MODE MANDIRI'), 'UI Badge: Menampilkan badge MODE MANDIRI');
  assert(uiStandalone.html.includes('badge-standalone'), 'UI Badge: Memiliki style badge-standalone');

  // QA 17: UI Component - Mode Analisis Badge
  const uiAnalysis = renderNegativePromptPanel({
    userPrompt: 'portrait of a girl',
    optimalPrompt: 'A photorealistic portrait of a girl /cam_portrait',
    analysisStatus: 'COMPLETED'
  });
  assert(uiAnalysis.html.includes('MODE ANALISIS'), 'UI Badge: Menampilkan badge MODE ANALISIS');
  assert(uiAnalysis.html.includes('badge-analysis'), 'UI Badge: Memiliki style badge-analysis');

  // QA 18: UI Component - Analisis Gagal Badge
  const uiFailed = renderNegativePromptPanel({
    userPrompt: '',
    optimalPrompt: '',
    analysisStatus: 'FAILED'
  });
  assert(uiFailed.html.includes('ANALISIS GAGAL'), 'UI Badge: Menampilkan badge status ANALISIS GAGAL');

  // QA 19: UI Component - Banner Peringatan Konflik
  const uiConflict = renderNegativePromptPanel({
    userPrompt: 'anime girl character in fantasy forest illustration',
    optimalPrompt: '',
    analysisStatus: 'COMPLETED'
  });
  assert(uiConflict.html.includes('id="negative-conflicts-wrap"'), 'UI Conflict: Container banner konflik tersedia');
  assert(uiConflict.html.includes('Konflik Terdeteksi &amp; Disesuaikan') || uiConflict.html.includes('Konflik Terdeteksi & Disesuaikan'), 'UI Conflict: Banner konflik aktif saat ada intent artistik khusus');

  // QA 20: UI Component - Pratinjau Batch Memuat Kolom Positif dan Negatif
  assert(uiStandalone.html.includes('col-negative-variation'), 'UI Batch Drawer: Memuat kolom Negative Prompt');
  assert(uiStandalone.html.includes('col-positive-variation'), 'UI Batch Drawer: Memuat kolom Positive Prompt');

  console.log(`\nHASIL FITUR V3.8 TESTS: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}

