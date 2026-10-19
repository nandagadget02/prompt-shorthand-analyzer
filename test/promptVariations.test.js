/**
 * Test Suite: Tab Ide Variasi Prompt V3.8
 * 20 Skenario Pengujian Fungsional, Multi-Pendekatan, dan Instruction Lock
 */

import { renderHeader } from '../src/components/Header.js';
import { renderPromptVariationPage } from '../src/components/PromptVariationPage.js';
import {
  VARIATION_APPROACHES,
  extractShorthandTokens,
  detectInstructionLocks,
  enforceInstructionLocks,
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

  console.log(`\nHASIL TAB IDE VARIASI TESTS: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}
