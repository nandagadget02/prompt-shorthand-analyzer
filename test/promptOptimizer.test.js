/**
 * Unit Test Suite: Prompt Optimizer V3.8
 * Menguji fungsionalitas Engine, UI Component, Mode, Instruction Locks,
 * Diff Compare, dan 4 Tombol Aksi.
 */

import {
  OPTIMIZATION_MODES,
  extractShorthandTokens,
  identifyRecognizedShorthands,
  detectInstructionConflicts,
  enforceInstructionLocks,
  generateChangeSummary,
  optimizePromptHeuristic,
  buildOptimizerSystemPrompt
} from '../src/lib/promptOptimizerEngine.js';
import { renderPromptOptimizerPanel } from '../src/components/PromptOptimizerPanel.js';
import { renderPromptInput } from '../src/components/PromptInput.js';
import { renderAnalyzerPage } from '../src/components/AnalyzerPage.js';
import { INITIAL_SHORTHAND_CATALOG } from '../src/data/catalogData.js';

export function runPromptOptimizerTests() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAILED: ${message}`);
      failed++;
    }
  }

  console.log('\n--- TEST SUITE: PROMPT OPTIMIZER V3.8 ---');

  // 1. Verifikasi 7 Mode Optimasi
  console.log('\n[1] Verifikasi 7 Mode Optimasi Terarah:');
  const expectedModes = [
    'BALANCED',
    'DETAIL',
    'COMPOSITION',
    'PHOTOREALISM',
    'CREATIVE',
    'COMMERCIAL_STOCK',
    'MINIMAL_CHANGE'
  ];

  expectedModes.forEach(modeKey => {
    const mode = OPTIMIZATION_MODES[modeKey];
    assert(Boolean(mode), `Mode ${modeKey} terdaftar di OPTIMIZATION_MODES`);
    assert(Boolean(mode.name && mode.icon && mode.description), `Mode ${modeKey} memiliki name, icon, dan description`);
    assert(Array.isArray(mode.directives) && mode.directives.length > 0, `Mode ${modeKey} memiliki directives`);
  });

  // 2. Verifikasi Token Extraction & Catalog Recognition
  console.log('\n[2] Verifikasi Shorthand Token Extraction & Catalog Recognition:');
  const samplePrompt = 'A cinematic portrait of an astronaut, /facelock, /rawphoto, high detail, /unknown_shorthand, --ar 16:9';
  const tokens = extractShorthandTokens(samplePrompt);
  assert(tokens.includes('/facelock') && tokens.includes('/rawphoto') && tokens.includes('/unknown_shorthand'), 'extractShorthandTokens mengekstrak semua shorthand');

  const recognized = identifyRecognizedShorthands(samplePrompt, INITIAL_SHORTHAND_CATALOG);
  assert(recognized.some(r => r.code === '/facelock'), 'identifyRecognizedShorthands mengenali /facelock');
  assert(recognized.some(r => r.code === '/rawphoto'), 'identifyRecognizedShorthands mengenali /rawphoto');
  assert(!recognized.some(r => r.code === '/unknown_shorthand'), 'identifyRecognizedShorthands tidak salah menandai shorthand tak dikenal');

  // 3. Verifikasi Instruction Locks & Conflict Detection
  console.log('\n[3] Verifikasi Instruction Locks Enforcement:');
  const baseForLock = 'A woman sitting in a garden, soft lighting';
  const lockedConfig = {
    face: true,
    outfit: true,
    pose: true,
    color: true,
    aspectRatio: true,
    custom: 'keep red ribbon'
  };

  const lockedOutput = enforceInstructionLocks(baseForLock, lockedConfig);
  assert(lockedOutput.includes('/facelock'), 'Enforce locks menambahkan /facelock');
  assert(lockedOutput.includes('/outfitlock'), 'Enforce locks menambahkan /outfitlock');
  assert(lockedOutput.includes('/poselock'), 'Enforce locks menambahkan /poselock');
  assert(lockedOutput.includes('/colorpreserve'), 'Enforce locks menambahkan /colorpreserve');
  assert(lockedOutput.includes('[PRESERVE: keep red ribbon]'), 'Enforce locks menambahkan custom lock constraint');

  // Conflict detection
  const conflictPrompt = 'A model, /facelock, /faceswap, altering smile dramatically, /colorpreserve, bright neon recolor';
  const conflicts = detectInstructionConflicts(conflictPrompt, lockedConfig);
  assert(conflicts.length >= 2, 'detectInstructionConflicts mendeteksi konflik antara lock dan direktif perubahan');

  // 4. Verifikasi optimizePromptHeuristic
  console.log('\n[4] Verifikasi optimizePromptHeuristic:');
  const emptyRes = optimizePromptHeuristic({ basePrompt: '' });
  assert(emptyRes.length === 0, 'Base prompt kosong menghasilkan array kosong');

  const heuristicResults = optimizePromptHeuristic({
    basePrompt: 'A realistic portrait of a barista brewing coffee, --ar 3:2',
    mode: 'detail',
    count: 3,
    lockedConfig: {
      face: true,
      outfit: true,
      pose: false,
      color: false,
      aspectRatio: true,
      custom: ''
    },
    catalog: INITIAL_SHORTHAND_CATALOG
  });

  assert(heuristicResults.length === 3, 'Menghasilkan tepat 3 versi hasil optimasi');
  assert(heuristicResults[0].prompt.includes('--ar 3:2'), 'Mempertahankan rasio asli --ar 3:2');
  assert(heuristicResults[0].prompt.includes('/facelock'), 'Mempertahankan /facelock sesuai lock');
  assert(heuristicResults[0].prompt.includes('/outfitlock'), 'Mempertahankan /outfitlock sesuai lock');
  assert(heuristicResults[0].recognizedShorthands.length > 0, 'Memiliki recognizedShorthands terdaftar');
  assert(Boolean(heuristicResults[0].summary), 'Memiliki ringkasan perubahan dalam bahasa Indonesia');

  // 5. Verifikasi buildOptimizerSystemPrompt
  console.log('\n[5] Verifikasi buildOptimizerSystemPrompt:');
  const sysPrompt = buildOptimizerSystemPrompt({
    mode: 'photorealism',
    lockedConfig: { face: true, outfit: false, pose: true, color: true, custom: 'analog lens' },
    catalog: INITIAL_SHORTHAND_CATALOG
  });
  assert(sysPrompt.includes('Photorealism Optimization'), 'System prompt menyebutkan nama mode');
  assert(sysPrompt.includes('Face Lock: STRICTLY LOCKED (/facelock)'), 'System prompt menyertakan Face Lock');
  assert(sysPrompt.includes('analog lens'), 'System prompt menyertakan custom constraint');
  assert(sysPrompt.includes('RETURN JSON FORMAT'), 'System prompt menetapkan format output JSON');

  // 6. Verifikasi UI Component: renderPromptOptimizerPanel
  console.log('\n[6] Verifikasi UI Component PromptOptimizerPanel:');
  const panelComp = renderPromptOptimizerPanel({
    state: {
      sourceType: 'OPTIMAL_PROMPT',
      manualPrompt: 'Test manual prompt',
      selectedVariationIndex: 0,
      mode: 'balanced',
      versionCount: 3,
      lockedElements: {
        face: true,
        outfit: true,
        pose: false,
        color: false,
        aspectRatio: true,
        custom: ''
      },
      results: heuristicResults,
      isOptimizing: false,
      comparingVersionIndex: 0
    },
    optimalPrompt: 'A barista brewing coffee with precision, /facelock, --ar 3:2',
    variationList: [{ id: 'var_1', title: 'Variasi 1', prompt: 'A barista at sunrise' }]
  });

  assert(Boolean(panelComp && panelComp.html), 'renderPromptOptimizerPanel menghasilkan HTML');
  assert(panelComp.html.includes('id="card-prompt-optimizer"'), 'Panel memiliki container #card-prompt-optimizer');
  assert(panelComp.html.includes('data-source="OPTIMAL_PROMPT"'), 'Panel merender tab sumber OPTIMAL_PROMPT');
  assert(panelComp.html.includes('data-source="MANUAL_PROMPT"'), 'Panel merender tab sumber MANUAL_PROMPT');
  assert(panelComp.html.includes('data-source="VARIATION_PROMPT"'), 'Panel merender tab sumber VARIATION_PROMPT');
  assert(panelComp.html.includes('id="select-optimizer-mode"'), 'Panel merender dropdown mode optimasi');
  assert(panelComp.html.includes('id="btn-run-prompt-optimizer"'), 'Panel merender tombol Optimalkan Prompt');
  assert(panelComp.html.includes('id="optimizer-results-container"'), 'Panel merender container hasil');
  assert(panelComp.html.includes('btn-copy-opt-prompt'), 'Panel merender tombol Salin Prompt');
  assert(panelComp.html.includes('btn-compare-opt-prompt'), 'Panel merender tombol Bandingkan dengan Asli');
  assert(panelComp.html.includes('btn-set-main-opt-prompt'), 'Panel merender tombol Jadikan Prompt Utama');
  assert(panelComp.html.includes('btn-reoptimize-prompt'), 'Panel merender tombol Optimalkan Lagi');
  assert(panelComp.html.includes('optimizer-diff-panel'), 'Panel merender komparasi diff ketika comparingVersionIndex aktif');

  // 7. Verifikasi Integrasi dengan PromptInput & AnalyzerPage
  console.log('\n[7] Verifikasi Integrasi PromptInput & AnalyzerPage:');
  const promptInputComp = renderPromptInput({
    activeMode: 'PROMPT_OPTIMIZER',
    promptOptimizerState: {
      sourceType: 'OPTIMAL_PROMPT',
      results: []
    }
  });

  assert(promptInputComp.html.includes('data-mode="PROMPT_OPTIMIZER"'), 'PromptInput merender tombol tab ke-7 PROMPT_OPTIMIZER');
  assert(promptInputComp.html.includes('id="card-prompt-optimizer"'), 'PromptInput merender kartu Prompt Optimizer ketika activeMode = PROMPT_OPTIMIZER');
  assert(!promptInputComp.html.includes('id="prompt-textarea"'), 'PromptInput menyembunyikan generic textarea saat mode PROMPT_OPTIMIZER');
  assert(!promptInputComp.html.includes('id="btn-run-analysis"'), 'PromptInput menyembunyikan generic btn-run-analysis saat mode PROMPT_OPTIMIZER');

  const analyzerPageComp = renderAnalyzerPage({
    activeMode: 'PROMPT_OPTIMIZER',
    promptOptimizerState: {
      sourceType: 'OPTIMAL_PROMPT',
      results: []
    }
  });

  assert(analyzerPageComp.html.includes('id="card-prompt-optimizer"'), 'AnalyzerPage merender Prompt Optimizer panel saat tab PROMPT_OPTIMIZER aktif');
  assert(!analyzerPageComp.html.includes('id="card-prompt-optimal"'), 'AnalyzerPage tidak menampilkan kartu prompt optimal generic saat mode PROMPT_OPTIMIZER');

  return { passed, failed };
}
