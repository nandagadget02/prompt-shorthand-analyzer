/**
 * Test Suite: Tab Ide Variasi Prompt V3.8
 * 20 Skenario Pengujian Fungsional, Multi-Pendekatan, dan Instruction Lock
 */

import { renderHeader } from '../src/components/Header.js';
import { renderPromptVariationPage } from '../src/components/PromptVariationPage.js';
import {
  VARIATION_APPROACHES,
  ASPECT_RATIO_PRESETS,
  extractShorthandTokens,
  detectInstructionLocks,
  enforceInstructionLocks,
  validateCustomAspectRatio,
  calculateApproximateRatio,
  detectSourceAspectRatio,
  applyAspectRatioToPrompt,
  generateVariationsHeuristic
} from '../src/lib/promptVariationEngine.js';
import { GEMINI_STATUS } from '../src/services/geminiService.js';

export function runPromptVariationTests() {
  console.log('\n--- VERIFIKASI FITUR V3.8: TAB IDE VARIASI PROMPT ---');
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

  // 1. UI Navigation Tests
  const headerMock = renderHeader('prompt-variations', { status: GEMINI_STATUS.UNCONFIGURED });
  assert(headerMock.html.includes('data-tab="prompt-variations"'), 'UI Header: Tombol navigasi tab prompt-variations tersedia');
  assert(headerMock.html.includes('Ide Variasi Prompt'), 'UI Header: Label teks "Ide Variasi Prompt" ditampilkan');

  // 2. UI Page Component Structure Tests
  const pageMock = renderPromptVariationPage({
    state: {
      sourceType: 'PREVIOUS_ANALYSIS',
      customPrompt: 'Cyberpunk street in rain',
      variationCount: 5,
      selectedApproaches: ['composition_framing', 'lighting_mood'],
      lockedElements: { face: true, outfit: true, pose: false, color: false, custom: '' },
      generatedVariations: []
    },
    previousAnalysis: {
      optimalPrompt: 'A photorealistic portrait of an architect /cam_portrait /facelock',
      installedShorthands: ['/cam_portrait', '/facelock']
    }
  });

  assert(pageMock.html.includes('IDE VARIASI PROMPT'), 'UI Page: Judul utama ter-render');
  assert(pageMock.html.includes('value="PREVIOUS_ANALYSIS"'), 'UI Page: Pilihan Sumber 1 (Gunakan Analisis Sebelumnya) tersedia');
  assert(pageMock.html.includes('value="NEW_IMAGE"'), 'UI Page: Pilihan Sumber 2 (Upload Gambar Baru) tersedia');
  assert(pageMock.html.includes('value="CUSTOM_PROMPT"'), 'UI Page: Pilihan Sumber 3 (Masukkan Prompt) tersedia');

  // 3. Source 1 Context Display Test
  assert(pageMock.html.includes('A photorealistic portrait of an architect'), 'Source 1: Menampilkan prompt optimal dari analisis sebelumnya');
  assert(pageMock.html.includes('/facelock'), 'Source 1: Menampilkan shorthand terpasang');

  // 4. Source 1 Empty State Test
  const pageEmptyPrev = renderPromptVariationPage({
    state: { sourceType: 'PREVIOUS_ANALYSIS' },
    previousAnalysis: null
  });
  assert(pageEmptyPrev.html.includes('Belum ada hasil analisis aktif di tab Analyzer'), 'Source 1: Menampilkan pesan informatif saat belum ada analisis');

  // 5. Source 2 Dropzone Test
  const pageImageSource = renderPromptVariationPage({
    state: { sourceType: 'NEW_IMAGE', variationImage: null }
  });
  assert(pageImageSource.html.includes('id="dropzone-variation-image"'), 'Source 2: Dropzone upload gambar mandiri tersedia');

  // 6. Source 3 Textarea Test
  const pageCustomSource = renderPromptVariationPage({
    state: { sourceType: 'CUSTOM_PROMPT', customPrompt: 'Studio commercial shot /lighting_studio' }
  });
  assert(pageCustomSource.html.includes('id="input-custom-prompt"'), 'Source 3: Textarea input prompt tersedia');
  assert(pageCustomSource.html.includes('Studio commercial shot /lighting_studio'), 'Source 3: Menampilkan teks custom prompt');

  // 7. Variations Count Selection
  assert(pageMock.html.includes('data-count="3"'), 'Settings: Tombol pilihan 3 variasi tersedia');
  assert(pageMock.html.includes('data-count="5"'), 'Settings: Tombol pilihan 5 variasi tersedia');
  assert(pageMock.html.includes('data-count="10"'), 'Settings: Tombol pilihan 10 variasi tersedia');

  // 8. Heuristic Engine: Count Precision
  const vars3 = generateVariationsHeuristic({ basePrompt: 'A beautiful meadow', count: 3 });
  assert(vars3.variations.length === 3, 'Engine: Tepat menghasilkan 3 variasi');

  const vars5 = generateVariationsHeuristic({ basePrompt: 'A beautiful meadow', count: 5 });
  assert(vars5.variations.length === 5, 'Engine: Tepat menghasilkan 5 variasi');

  const vars10 = generateVariationsHeuristic({ basePrompt: 'A beautiful meadow', count: 10 });
  assert(vars10.variations.length === 10, 'Engine: Tepat menghasilkan 10 variasi');

  // 9. Approach Filter: Composition & Framing
  const varsComp = generateVariationsHeuristic({
    basePrompt: 'A traveler looking at mountains',
    count: 3,
    selectedApproaches: ['composition_framing']
  });
  const allComp = varsComp.variations.every(v => v.approachId === 'composition_framing');
  assert(allComp, 'Approach: Seluruh variasi mengikuti pendekatan Komposisi & Framing');

  // 10. Approach Filter: Lighting & Mood
  const varsLight = generateVariationsHeuristic({
    basePrompt: 'A model sitting on chair',
    count: 3,
    selectedApproaches: ['lighting_mood']
  });
  const allLight = varsLight.variations.every(v => v.approachId === 'lighting_mood');
  assert(allLight, 'Approach: Seluruh variasi mengikuti pendekatan Suasana & Pencahayaan');

  // 11. Approach Filter: Environment & Background
  const varsEnv = generateVariationsHeuristic({
    basePrompt: 'A futuristic automobile',
    count: 3,
    selectedApproaches: ['environment_background']
  });
  const allEnv = varsEnv.variations.every(v => v.approachId === 'environment_background');
  assert(allEnv, 'Approach: Seluruh variasi mengikuti pendekatan Lingkungan & Latar');

  // 12. Approach Filter: Visual Style
  const varsStyle = generateVariationsHeuristic({
    basePrompt: 'Vintage coffee shop scene',
    count: 3,
    selectedApproaches: ['visual_style']
  });
  const allStyle = varsStyle.variations.every(v => v.approachId === 'visual_style');
  assert(allStyle, 'Approach: Seluruh variasi mengikuti pendekatan Gaya Visual');

  // 13. Approach Filter: Commercial & Stock
  const varsStock = generateVariationsHeuristic({
    basePrompt: 'Creative designer working on laptop',
    count: 3,
    selectedApproaches: ['commercial_stock']
  });
  const allStock = varsStock.variations.every(v => v.approachId === 'commercial_stock');
  assert(allStock, 'Approach: Seluruh variasi mengikuti pendekatan Fotografi Komersial/Stock');

  // 14. Instruction Lock: Face Preservation (/facelock)
  const varsLockFace = generateVariationsHeuristic({
    basePrompt: 'A smiling woman in park',
    count: 4,
    lockedConfig: { face: true }
  });
  const allFaceLocked = varsLockFace.variations.every(v => v.prompt.includes('/facelock'));
  assert(allFaceLocked, 'Lock: Token /facelock selalu dipertahankan di seluruh variasi');

  // 15. Instruction Lock: Outfit Preservation (/outfitlock)
  const varsLockOutfit = generateVariationsHeuristic({
    basePrompt: 'A business executive in dark navy suit',
    count: 4,
    lockedConfig: { outfit: true }
  });
  const allOutfitLocked = varsLockOutfit.variations.every(v => v.prompt.includes('/outfitlock'));
  assert(allOutfitLocked, 'Lock: Token /outfitlock selalu dipertahankan di seluruh variasi');

  // 16. Instruction Lock: Pose & Proportion (/poselock, /bodyshape)
  const varsLockPose = generateVariationsHeuristic({
    basePrompt: 'Athlete stretching before race /bodyshape',
    count: 4,
    lockedConfig: { pose: true }
  });
  const allPoseLocked = varsLockPose.variations.every(v => v.prompt.includes('/poselock') || v.prompt.includes('/bodyshape'));
  assert(allPoseLocked, 'Lock: Shorthand pose/bodyshape dipertahankan');

  // 17. Instruction Lock: Color Palette (/colorpreserve)
  const varsLockColor = generateVariationsHeuristic({
    basePrompt: 'Fashion photoshoot with pastel tones',
    count: 4,
    lockedConfig: { color: true }
  });
  const allColorLocked = varsLockColor.variations.every(v => v.prompt.includes('/colorpreserve'));
  assert(allColorLocked, 'Lock: Token /colorpreserve selalu dipertahankan di seluruh variasi');

  // 18. Instruction Lock: Custom Directive Preservation
  const varsLockCustom = generateVariationsHeuristic({
    basePrompt: 'A knight on horse',
    count: 4,
    lockedConfig: { custom: 'golden engraved crest shield' }
  });
  const allCustomLocked = varsLockCustom.variations.every(v => v.prompt.toLowerCase().includes('golden engraved crest shield'));
  assert(allCustomLocked, 'Lock: Teks instruksi kustom dipertahankan di seluruh variasi');

  // 19. Shorthand Token Extraction & Preservation
  const existingTokens = extractShorthandTokens('A cinematic warrior /cam_low /lighting_dramatic /facelock');
  assert(existingTokens.includes('/cam_low'), 'Token: Ekstrak /cam_low');
  assert(existingTokens.includes('/lighting_dramatic'), 'Token: Ekstrak /lighting_dramatic');
  assert(existingTokens.includes('/facelock'), 'Token: Ekstrak /facelock');

  // 20. Action Buttons Rendered on Result Cards
  const pageWithResults = renderPromptVariationPage({
    state: {
      generatedVariations: [
        {
          id: 'var_1',
          title: 'Variasi 1: Golden Hour',
          approachLabel: 'Pencahayaan',
          prompt: 'A girl in garden, warm golden hour, /facelock',
          shorthands: ['/facelock'],
          lockedElementsApplied: ['Identitas Wajah (/facelock)'],
          explanation: 'Eksplorasi pencahayaan hangat sunset.'
        }
      ]
    }
  });

  assert(pageWithResults.html.includes('btn-copy-variation'), 'Actions: Tombol Salin Prompt tersedia');
  assert(pageWithResults.html.includes('btn-set-main-prompt'), 'Actions: Tombol Jadikan Prompt Utama tersedia');
  assert(pageWithResults.html.includes('btn-optimize-variation'), 'Actions: Tombol Optimalkan Prompt tersedia');
  assert(pageWithResults.html.includes('btn-further-variation'), 'Actions: Tombol Variasi Lanjutan tersedia');

  // 21. Checkbox Single Source of Truth: Pose Lock UNCHECKED (pose: false) with /bodyshape in base
  const varsPoseUnlocked = generateVariationsHeuristic({
    basePrompt: 'A female model in urban cafe /bodyshape /poselock',
    count: 5,
    lockedConfig: { pose: false }
  });
  assert(varsPoseUnlocked.locks.lockPose === false, 'Checkbox SSOT: Pose lock is strictly false when unchecked');
  const noPoseTokens = varsPoseUnlocked.variations.every(v => !v.prompt.includes('/poselock') && !v.prompt.includes('/bodyshape'));
  assert(noPoseTokens, 'Checkbox SSOT: /poselock and /bodyshape tokens are actively stripped when pose lock is unchecked');
  const distinctPoses = new Set(varsPoseUnlocked.variations.map(v => v.poseApplied));
  assert(distinctPoses.size > 1, 'Pose Diversity: Multiple distinct physical poses generated when pose lock is unchecked');
  assert(!distinctPoses.has('Pose Terkunci'), 'Pose Diversity: No variations marked as "Pose Terkunci" when pose lock is unchecked');

  // 22. Checkbox Single Source of Truth: Pose Lock CHECKED (pose: true)
  const varsPoseLocked = generateVariationsHeuristic({
    basePrompt: 'A female model in urban cafe',
    count: 3,
    lockedConfig: { pose: true }
  });
  assert(varsPoseLocked.locks.lockPose === true, 'Checkbox SSOT: Pose lock is strictly true when checked');
  assert(varsPoseLocked.variations.every(v => v.prompt.includes('/poselock')), 'Checkbox SSOT: /poselock token is injected when pose lock is checked');
  assert(varsPoseLocked.variations.every(v => v.poseApplied === 'Pose Terkunci'), 'Checkbox SSOT: All variations marked as "Pose Terkunci" when checked');

  // 23. Checkbox Single Source of Truth: All Approaches Unchecked (selectedApproaches: [])
  const varsEmptyApproaches = generateVariationsHeuristic({
    basePrompt: 'Minimalist ceramic vase on wooden table',
    count: 3,
    selectedApproaches: []
  });
  const allNeutral = varsEmptyApproaches.variations.every(v => v.approachId === 'neutral_nuance');
  assert(allNeutral, 'Approach Filter: Empty approaches uses neutral nuance instead of forcing unselected approaches');

  // 24. Checkbox Single Source of Truth: Strip outfitlock & colorpreserve when unchecked
  const varsLocksStripped = generateVariationsHeuristic({
    basePrompt: 'Person in streetwear /outfitlock /colorpreserve',
    count: 3,
    lockedConfig: { outfit: false, color: false }
  });
  const noOutfitOrColor = varsLocksStripped.variations.every(v => !v.prompt.includes('/outfitlock') && !v.prompt.includes('/colorpreserve'));
  assert(noOutfitOrColor, 'Checkbox SSOT: /outfitlock and /colorpreserve are stripped when unchecked');

  // 25. Checkbox Single Source of Truth: Enforce outfitlock & colorpreserve when checked
  const varsLocksEnforced = generateVariationsHeuristic({
    basePrompt: 'Person in streetwear',
    count: 3,
    lockedConfig: { outfit: true, color: true }
  });
  const hasOutfitAndColor = varsLocksEnforced.variations.every(v => v.prompt.includes('/outfitlock') && v.prompt.includes('/colorpreserve'));
  assert(hasOutfitAndColor, 'Checkbox SSOT: /outfitlock and /colorpreserve are enforced when checked');

  // =========================================================================
  // SKENARIO 26 - 42: PENGUJIAN FITUR RASIO HASIL GENERATE (V3.8 PATCH)
  // =========================================================================

  // 26. UI: Section 4 "4. RASIO HASIL GENERATE" dirender
  const pageWithRatio = renderPromptVariationPage({
    state: {
      aspectRatio: '16:9',
      customAspectRatio: '',
      aspectRatioError: null
    }
  });
  assert(pageWithRatio.html.includes('id="card-aspect-ratio"'), 'UI Ratio: Panel "card-aspect-ratio" terpasang');
  assert(pageWithRatio.html.includes('4. RASIO HASIL GENERATE'), 'UI Ratio: Judul bagian "4. RASIO HASIL GENERATE" dirender');

  // 27. UI: Seluruh 10 Opsi Preset Rasio Tersedia
  assert(ASPECT_RATIO_PRESETS.length === 10, 'Presets: Tepat terdapat 10 opsi rasio');
  const allPresetsRendered = ASPECT_RATIO_PRESETS.every(p => pageWithRatio.html.includes(`data-ratio="${p.id}"`));
  assert(allPresetsRendered, 'UI Ratio: Seluruh 10 tombol preset rasio dirender di template HTML');

  // 28. UI: Input Rasio Kustom Tampil Saat Mode 'custom' Dipilih
  const pageWithCustomRatio = renderPromptVariationPage({
    state: {
      aspectRatio: 'custom',
      customAspectRatio: '2.35:1',
      aspectRatioError: null
    }
  });
  assert(pageWithCustomRatio.html.includes('id="input-custom-aspect-ratio"'), 'UI Ratio: Kolom input rasio kustom tampil saat opsi Bebas / Custom aktif');
  assert(pageWithCustomRatio.html.includes('value="2.35:1"'), 'UI Ratio: Nilai rasio kustom terisi di kolom input');

  // 29. UI: Pesan Validasi Error Tampil Saat Rasio Kustom Tidak Valid
  const pageWithCustomError = renderPromptVariationPage({
    state: {
      aspectRatio: 'custom',
      customAspectRatio: '-5:4',
      aspectRatioError: 'Nilai lebar dan tinggi rasio kustom harus berupa angka positif yang lebih besar dari nol.'
    }
  });
  assert(pageWithCustomError.html.includes('Nilai lebar dan tinggi rasio kustom harus berupa angka positif'), 'UI Ratio: Pesan error validasi rasio kustom ditampilkan');

  // 30. Validasi Rasio Kustom: Valid Format Tests
  const valid1 = validateCustomAspectRatio('5:4');
  assert(valid1.valid && valid1.normalized === '5:4', 'Validation: Format integer 5:4 dinyatakan valid');

  const valid2 = validateCustomAspectRatio('2.35:1');
  assert(valid2.valid && valid2.normalized === '2.35:1', 'Validation: Format desimal 2.35:1 dinyatakan valid');

  const valid3 = validateCustomAspectRatio(' 1.85 : 1 ');
  assert(valid3.valid && valid3.normalized === '1.85:1', 'Validation: Format dengan spasi 1.85 : 1 ternormalisasi dengan benar');

  // 31. Validasi Rasio Kustom: Invalid Format Tests
  const invalidEmpty = validateCustomAspectRatio('');
  assert(!invalidEmpty.valid && invalidEmpty.error.includes('tidak boleh kosong'), 'Validation: Input kosong ditolak');

  const invalidNegative = validateCustomAspectRatio('-1:2');
  assert(!invalidNegative.valid, 'Validation: Angka negatif ditolak');

  const invalidZero = validateCustomAspectRatio('0:0');
  assert(!invalidZero.valid, 'Validation: Rasio nol ditolak');

  const invalidText = validateCustomAspectRatio('landscape:portrait');
  assert(!invalidText.valid, 'Validation: Format non-numerik ditolak');

  // 32. Preset Rasio: 1:1, 16:9, 9:16, 21:9 Diterapkan ke Seluruh Variasi
  const vars169 = generateVariationsHeuristic({
    basePrompt: 'A futuristic city street',
    count: 5,
    aspectRatio: '16:9'
  });
  const all169 = vars169.variations.every(v => v.prompt.includes('--ar 16:9'));
  assert(all169, 'Preset Ratio: Seluruh 5 variasi memuat parameter --ar 16:9');
  assert(vars169.targetAspectRatio === '16:9', 'Preset Ratio: Metadata targetAspectRatio tercatat 16:9');

  const vars11 = generateVariationsHeuristic({
    basePrompt: 'Portrait of a traveler',
    count: 3,
    aspectRatio: '1:1'
  });
  const all11 = vars11.variations.every(v => v.prompt.includes('--ar 1:1'));
  assert(all11, 'Preset Ratio: Seluruh 3 variasi memuat parameter --ar 1:1');

  const vars916 = generateVariationsHeuristic({
    basePrompt: 'Fashion photoshoot model',
    count: 3,
    aspectRatio: '9:16'
  });
  const all916 = vars916.variations.every(v => v.prompt.includes('--ar 9:16'));
  assert(all916, 'Preset Ratio: Seluruh 3 variasi memuat parameter --ar 9:16');

  const vars219 = generateVariationsHeuristic({
    basePrompt: 'Cinematic vista horizon',
    count: 3,
    aspectRatio: '21:9'
  });
  const all219 = vars219.variations.every(v => v.prompt.includes('--ar 21:9'));
  assert(all219, 'Preset Ratio: Seluruh 3 variasi memuat parameter --ar 21:9');

  // 33. Rasio Kustom Valid Diterapkan ke Seluruh Variasi
  const varsCustom = generateVariationsHeuristic({
    basePrompt: 'Artistic landscape',
    count: 4,
    aspectRatio: 'custom',
    customAspectRatio: '5:4'
  });
  const allCustom54 = varsCustom.variations.every(v => v.prompt.includes('--ar 5:4'));
  assert(allCustom54, 'Custom Ratio: Seluruh variasi memuat parameter custom --ar 5:4');

  // 34. Pembersihan Benturan Rasio (Conflict Resolution & Override)
  // Base prompt sudah memiliki --ar 1:1, pengguna memilih 16:9
  const varsConflict = generateVariationsHeuristic({
    basePrompt: 'A warrior standing on cliff --ar 1:1',
    count: 3,
    aspectRatio: '16:9'
  });
  const noOldRatio = varsConflict.variations.every(v => !v.prompt.includes('--ar 1:1'));
  const hasNewRatio = varsConflict.variations.every(v => v.prompt.includes('--ar 16:9'));
  const noDuplicateAr = varsConflict.variations.every(v => (v.prompt.match(/--ar/g) || []).length === 1);
  assert(noOldRatio, 'Conflict Resolution: Parameter --ar 1:1 lama berhasil dihapus');
  assert(hasNewRatio, 'Conflict Resolution: Parameter --ar 16:9 baru terpasang');
  assert(noDuplicateAr, 'Conflict Resolution: Tidak ada duplikasi flag --ar dalam satu prompt');

  // 35. Mode Otomatis dengan Gambar Referensi (NEW_IMAGE)
  const varsAutoImage = generateVariationsHeuristic({
    basePrompt: 'Cyberpunk cityscape',
    count: 3,
    aspectRatio: 'auto',
    sourceType: 'NEW_IMAGE',
    variationImage: { width: 1920, height: 1080 }
  });
  assert(varsAutoImage.targetAspectRatio === '16:9', 'Auto Mode Image: Terdeteksi rasio 16:9 dari dimensi gambar 1920x1080');
  assert(varsAutoImage.variations.every(v => v.prompt.includes('--ar 16:9')), 'Auto Mode Image: Seluruh variasi menerapkan rasio terdeteksi 16:9');

  // 36. Mode Otomatis dengan Gambar Portrait 2:3
  const varsAutoImagePortrait = generateVariationsHeuristic({
    basePrompt: 'Studio portrait',
    count: 3,
    aspectRatio: 'auto',
    sourceType: 'NEW_IMAGE',
    variationImage: { width: 800, height: 1200 }
  });
  assert(varsAutoImagePortrait.targetAspectRatio === '2:3', 'Auto Mode Image: Terdeteksi rasio 2:3 dari dimensi gambar 800x1200');

  // 37. Mode Otomatis dengan Teks Memuat --ar di Konteks
  const varsAutoTextWithAr = generateVariationsHeuristic({
    basePrompt: 'An astronaut on Mars --ar 3:2',
    count: 3,
    aspectRatio: 'auto',
    sourceType: 'CUSTOM_PROMPT'
  });
  assert(varsAutoTextWithAr.targetAspectRatio === '3:2', 'Auto Mode Text: Mempertahankan rasio 3:2 yang ada dalam prompt konteks');
  assert(varsAutoTextWithAr.variations.every(v => v.prompt.includes('--ar 3:2')), 'Auto Mode Text: Seluruh variasi konsisten menggunakan --ar 3:2');

  // 38. Mode Otomatis Tanpa Gambar & Tanpa Rasio Konteks (Tidak Mengarang Rasio)
  const varsAutoNatural = generateVariationsHeuristic({
    basePrompt: 'A simple minimalist flower vase',
    count: 3,
    aspectRatio: 'auto',
    sourceType: 'CUSTOM_PROMPT'
  });
  assert(varsAutoNatural.targetAspectRatio === null, 'Auto Mode Fallback: Tidak mengarang rasio jika sumber murni teks tanpa deklarasi rasio');
  assert(varsAutoNatural.variations.every(v => !v.prompt.includes('--ar')), 'Auto Mode Fallback: Tidak menyematkan flag --ar paksaan');

  // 39. Konsistensi Rasio Antara 3, 5, dan 10 Variasi
  const varsCount10 = generateVariationsHeuristic({
    basePrompt: 'Architecture photography',
    count: 10,
    aspectRatio: '4:3'
  });
  assert(varsCount10.variations.length === 10, 'Consistency: Menghasilkan tepat 10 variasi');
  const all10HaveRatio = varsCount10.variations.every(v => v.prompt.includes('--ar 4:3'));
  assert(all10HaveRatio, 'Consistency: Seluruh 10 variasi konsisten memuat --ar 4:3');

  // 40. Kompatibilitas Rasio dengan Instruction Lock & Shorthand
  const varsLockAndRatio = generateVariationsHeuristic({
    basePrompt: 'A fashion model /facelock /outfitlock',
    count: 3,
    lockedConfig: { face: true, outfit: true },
    aspectRatio: '9:16'
  });
  const retainsLocks = varsLockAndRatio.variations.every(v => v.prompt.includes('/facelock') && v.prompt.includes('/outfitlock'));
  const retainsRatio = varsLockAndRatio.variations.every(v => v.prompt.includes('--ar 9:16'));
  assert(retainsLocks, 'Compatibility: Seluruh shorthand lock (/facelock, /outfitlock) dipertahankan utuh');
  assert(retainsRatio, 'Compatibility: Parameter rasio --ar 9:16 diterapkan harmonis bersama instruction lock');

  // 41. Helper applyAspectRatioToPrompt: Menghapus koma berlebih & deklarasi ganda
  const cleanedPrompt = applyAspectRatioToPrompt('Subject in rain, --ar 1:1,', '16:9');
  assert(cleanedPrompt.endsWith('--ar 16:9'), 'Helper: Prompt bersih berakhiran --ar 16:9');
  assert(!cleanedPrompt.includes('--ar 1:1'), 'Helper: Flag lama terhapus sempurna');

  // 42. UI Result Card Badge: Memuat tag aspectRatioApplied
  const pageWithRatioResults = renderPromptVariationPage({
    state: {
      generatedVariations: [
        {
          id: 'var_1',
          title: 'Variasi 1: Golden Hour',
          approachLabel: 'Pencahayaan',
          prompt: 'A girl in garden, warm golden hour, --ar 16:9',
          aspectRatioApplied: '--ar 16:9',
          shorthands: [],
          lockedElementsApplied: [],
          explanation: 'Eksplorasi pencahayaan hangat sunset.'
        }
      ]
    }
  });
  assert(pageWithRatioResults.html.includes('badge-aspect-ratio'), 'UI Results: Badge rasio dirender pada kartu hasil variasi');
  assert(pageWithRatioResults.html.includes('--ar 16:9'), 'UI Results: Teks rasio --ar 16:9 ditampilkan pada kartu');

  console.log(`\nHASIL TAB IDE VARIASI TESTS: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}


