/**
 * PromptOptimizerPanel Component V3.8
 * 
 * Antarmuka Tab "✨ Prompt Optimizer" di dalam INPUT & MODE ANALISIS:
 * - 3 Sumber Prompt: Prompt Optimal, Manual, atau Variasi Prompt.
 * - 7 Mode Optimasi Terarah.
 * - 1, 3, atau 5 versi hasil.
 * - Instruction Locks lengkap (wajah, pakaian, pose, warna, rasio, kustom).
 * - Kartu Hasil Optimasi dengan 4 tombol aksi fungsional:
 *   1. Salin Prompt
 *   2. Bandingkan dengan Asli
 *   3. Jadikan Prompt Utama
 *   4. Optimalkan Lagi
 */

import { OPTIMIZATION_MODES } from '../lib/promptOptimizerEngine.js';
import { countWords, estimateTokens } from '../lib/promptFormatter.js';

export function renderPromptOptimizerPanel({
  state = {},
  optimalPrompt = '',
  variationList = [],
  onStateChange,
  onRunOptimization,
  onCopyPrompt,
  onSetAsMainPrompt,
  onOptimizeAgain
}) {
  const {
    sourceType = 'OPTIMAL_PROMPT',
    manualPrompt = '',
    selectedVariationIndex = 0,
    mode = 'balanced',
    count = 3,
    lockedElements = {
      face: false,
      outfit: false,
      pose: false,
      color: false,
      aspectRatio: true,
      custom: ''
    },
    results = [],
    isOptimizing = false,
    comparingVersionIndex = null
  } = state;

  // Tentukan teks sumber aktif berdasarkan sourceType
  let activeSourceText = '';
  if (sourceType === 'OPTIMAL_PROMPT') {
    activeSourceText = (optimalPrompt || '').trim();
  } else if (sourceType === 'VARIATION_PROMPT') {
    const selectedVar = variationList[selectedVariationIndex];
    activeSourceText = selectedVar ? (selectedVar.prompt || '').trim() : '';
  } else {
    activeSourceText = (manualPrompt || '').trim();
  }

  const currentModeInfo = OPTIMIZATION_MODES[(mode || 'balanced').toUpperCase()] || OPTIMIZATION_MODES.BALANCED;
  const wordCount = countWords(activeSourceText);
  const tokenEst = estimateTokens(activeSourceText);

  const html = `
    <div class="prompt-optimizer-panel" id="card-prompt-optimizer" style="margin-top: 0.85rem;">
      <!-- Notice Header Tab -->
      <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.8rem; color: #bae6fd;">
        <div style="display: flex; align-items: center; gap: 0.4rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.2rem;">
          <span>✨</span> <span>Prompt Optimizer: Peningkatan Kualitas Prompt Cerdas &amp; Terarah</span>
        </div>
        <div style="font-size: 0.735rem; color: var(--text-muted); line-height: 1.4;">
          Pilih sumber prompt, tentukan mode strategi optimasi, aktifkan perlindungan instruksi (lock), lalu tekan <strong>Optimalkan Prompt</strong> untuk menghasilkan versi prompt terbaik.
        </div>
      </div>

      <!-- 1. Sumber Input Prompt -->
      <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>1. SUMBER PROMPT ACUAN</span>
          <span style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${activeSourceText ? `${wordCount} kata • ~${tokenEst} token` : 'Belum ada input'}
          </span>
        </div>

        <!-- 3 Pilihan Sumber -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.45rem; margin-bottom: 0.65rem;">
          <label data-source="OPTIMAL_PROMPT" style="display: flex; align-items: center; gap: 0.45rem; background: ${sourceType === 'OPTIMAL_PROMPT' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)'}; border: 1px solid ${sourceType === 'OPTIMAL_PROMPT' ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'}; border-radius: 6px; padding: 0.5rem 0.65rem; cursor: pointer;">
            <input type="radio" name="optimizer-source-type" value="OPTIMAL_PROMPT" ${sourceType === 'OPTIMAL_PROMPT' ? 'checked' : ''} />
            <div style="font-size: 0.775rem; font-weight: 600; color: ${sourceType === 'OPTIMAL_PROMPT' ? '#38bdf8' : '#f1f5f9'};">
              🎯 Gunakan Prompt Optimal
            </div>
          </label>

          <label data-source="MANUAL_PROMPT" style="display: flex; align-items: center; gap: 0.45rem; background: ${sourceType === 'MANUAL_PROMPT' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)'}; border: 1px solid ${sourceType === 'MANUAL_PROMPT' ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'}; border-radius: 6px; padding: 0.5rem 0.65rem; cursor: pointer;">
            <input type="radio" name="optimizer-source-type" value="MANUAL_PROMPT" ${sourceType === 'MANUAL_PROMPT' ? 'checked' : ''} />
            <div style="font-size: 0.775rem; font-weight: 600; color: ${sourceType === 'MANUAL_PROMPT' ? '#38bdf8' : '#f1f5f9'};">
              ✍️ Masukkan Prompt Manual
            </div>
          </label>

          <label data-source="VARIATION_PROMPT" style="display: flex; align-items: center; gap: 0.45rem; background: ${sourceType === 'VARIATION_PROMPT' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)'}; border: 1px solid ${sourceType === 'VARIATION_PROMPT' ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'}; border-radius: 6px; padding: 0.5rem 0.65rem; cursor: pointer;">
            <input type="radio" name="optimizer-source-type" value="VARIATION_PROMPT" ${sourceType === 'VARIATION_PROMPT' ? 'checked' : ''} />
            <div style="font-size: 0.775rem; font-weight: 600; color: ${sourceType === 'VARIATION_PROMPT' ? '#38bdf8' : '#f1f5f9'};">
              🎨 Gunakan Prompt Variasi
            </div>
          </label>
        </div>

        <!-- Wadah Konten Berdasarkan Sumber -->
        ${sourceType === 'OPTIMAL_PROMPT' ? `
          ${optimalPrompt ? `
            <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 6px; padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.825rem; color: #f1f5f9; line-height: 1.5; max-height: 120px; overflow-y: auto;">
              ${optimalPrompt}
            </div>
          ` : `
            <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 6px; padding: 0.65rem 0.85rem; font-size: 0.775rem; color: #fde047;">
              ℹ️ Belum ada hasil PROMPT OPTIMAL dari Analyzer. Silakan jalankan analisis di tab <strong>📝 Analisa Prompt</strong> terlebih dahulu, atau pilih opsi <strong>✍️ Masukkan Prompt Manual</strong> di atas.
            </div>
          `}
        ` : ''}

        ${sourceType === 'MANUAL_PROMPT' ? `
          <div>
            <textarea 
              id="input-optimizer-manual-prompt" 
              rows="3" 
              class="font-mono"
              placeholder="Ketik atau tempelkan prompt bahasa Indonesia, bahasa Inggris, atau bershorthand di sini..."
              style="width: 100%; box-sizing: border-box; background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.6rem 0.8rem; color: #f1f5f9; font-size: 0.825rem; resize: vertical;"
            >${manualPrompt || ''}</textarea>
          </div>
        ` : ''}

        ${sourceType === 'VARIATION_PROMPT' ? `
          ${(variationList && variationList.length > 0) ? `
            <div style="display: flex; flex-direction: column; gap: 0.45rem;">
              <select id="select-optimizer-variation" class="form-select" style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.45rem 0.65rem; color: #f1f5f9; font-size: 0.8rem; cursor: pointer;">
                ${variationList.map((v, idx) => `
                  <option value="${idx}" ${idx === selectedVariationIndex ? 'selected' : ''}>
                    ${v.versionName || `Variasi ${idx + 1}`} (${(v.prompt || '').slice(0, 50)}...)
                  </option>
                `).join('')}
              </select>
              <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.55rem 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: #f1f5f9; max-height: 90px; overflow-y: auto;">
                ${activeSourceText}
              </div>
            </div>
          ` : `
            <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 6px; padding: 0.65rem 0.85rem; font-size: 0.775rem; color: #fde047;">
              ℹ️ Belum ada hasil variasi dari tab <strong>Ide Variasi Prompt</strong>. Silakan hasilkan variasi terlebih dahulu, atau pilih opsi <strong>✍️ Masukkan Prompt Manual</strong> di atas.
            </div>
          `}
        ` : ''}
      </div>

      <!-- 2. Pengaturan Optimasi -->
      <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9;">2. PENGATURAN MODE &amp; JUMLAH OUTPUT</span>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span style="font-size: 0.725rem; color: var(--text-muted);">Jumlah:</span>
            <button type="button" class="btn btn-xs ${count === 1 ? 'btn-primary' : 'btn-outline'} btn-optimizer-count" data-count="1">1 Versi</button>
            <button type="button" class="btn btn-xs ${count === 3 ? 'btn-primary' : 'btn-outline'} btn-optimizer-count" data-count="3">3 Versi</button>
            <button type="button" class="btn btn-xs ${count === 5 ? 'btn-primary' : 'btn-outline'} btn-optimizer-count" data-count="5">5 Versi</button>
          </div>
        </div>

        <div style="margin-bottom: 0.45rem;">
          <select id="select-optimizer-mode" class="form-select" style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.5rem 0.75rem; color: #f1f5f9; font-size: 0.825rem; cursor: pointer;">
            ${Object.values(OPTIMIZATION_MODES).map(m => `
              <option value="${m.id}" ${m.id === mode ? 'selected' : ''}>
                ${m.icon} ${m.name}
              </option>
            `).join('')}
          </select>
        </div>

        <div style="font-size: 0.725rem; color: var(--text-muted); line-height: 1.35; padding: 0.35rem 0.5rem; background: rgba(0, 0, 0, 0.25); border-radius: 4px;" id="desc-optimizer-mode">
          💡 ${currentModeInfo.description}
        </div>
      </div>

      <!-- 3. Perlindungan Instruksi (Instruction Lock) -->
      <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.45rem;">
          3. PERLINDUNGAN INSTRUKSI (INSTRUCTION LOCK)
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.55rem;">
          Centang elemen yang ingin dilindungi. Checkbox dicentang berarti instruksi tersebut wajib dipertahankan.
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.45rem; margin-bottom: 0.55rem;">
          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-face" ${lockedElements.face ? 'checked' : ''} />
            <span>Kunci Wajah (<code>/facelock</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-outfit" ${lockedElements.outfit ? 'checked' : ''} />
            <span>Kunci Pakaian (<code>/outfitlock</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-pose" ${lockedElements.pose ? 'checked' : ''} />
            <span>Kunci Pose (<code>/poselock</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-color" ${lockedElements.color ? 'checked' : ''} />
            <span>Kunci Palet Warna (<code>/colorpreserve</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-aspect" ${lockedElements.aspectRatio ? 'checked' : ''} />
            <span>Pertahankan Rasio Aspek (<code>--ar</code>)</span>
          </label>
        </div>

        <input 
          type="text" 
          id="input-opt-custom-lock" 
          value="${lockedElements.custom || ''}" 
          placeholder="Elemen kustom yang ingin dilindungi (opsional, contoh: leather jacket, red guitar, glasses)"
          style="width: 100%; box-sizing: border-box; background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; padding: 0.45rem 0.75rem; color: #f1f5f9; font-size: 0.775rem;"
        />
      </div>

      <!-- Actions Bar: Optimalkan Prompt -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          💡 Optimasi mengeksekusi strategi ${currentModeInfo.name} secara presisi tanpa merusak konteks prompt.
        </small>
        <button 
          type="button" 
          class="btn btn-primary" 
          id="btn-run-prompt-optimizer" 
          ${(!activeSourceText || isOptimizing) ? 'disabled' : ''}
          style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border-color: #38bdf8;"
        >
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${isOptimizing ? '✨ Mengoptimalkan Prompt...' : '✨ Optimalkan Prompt'}
        </button>
      </div>

      <!-- 4. HASIL OPTIMASI PROMPT (Ditampilkan saat ada hasil) -->
      ${(results && results.length > 0) ? `
        <div id="optimizer-results-container" style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 0.35rem;">
              <span>🏆</span> <span>HASIL OPTIMASI PROMPT (${results.length} VERSI)</span>
            </div>
            <span class="badge" style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 0.725rem;">
              ${currentModeInfo.name}
            </span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${results.map((res, index) => {
              const isComparing = comparingVersionIndex === index;
              return `
                <div class="optimizer-result-card" style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.85rem;">
                  <!-- Header Kartu -->
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
                    <div style="font-size: 0.825rem; font-weight: 700; color: #f1f5f9;">
                      ${res.versionName || `Versi ${index + 1}`}
                    </div>
                    <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
                      ${countWords(res.prompt)} kata • ~${estimateTokens(res.prompt)} token
                    </div>
                  </div>

                  <!-- Ringkasan Perubahan -->
                  <div style="background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8; border-radius: 4px; padding: 0.45rem 0.65rem; margin-bottom: 0.55rem; font-size: 0.735rem; color: #bae6fd; line-height: 1.35;">
                    ${res.summary}
                  </div>

                  <!-- Prompt Hasil Bersih Box -->
                  <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.825rem; color: #f1f5f9; line-height: 1.5; margin-bottom: 0.55rem;">
                    ${res.prompt}
                  </div>

                  <!-- Tag Shorthand yang Dikenali -->
                  ${(res.recognizedShorthands && res.recognizedShorthands.length > 0) ? `
                    <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 0.55rem;">
                      <span style="font-size: 0.7rem; color: var(--text-muted);">Shorthand aktif:</span>
                      ${res.recognizedShorthands.map(sh => `
                        <span class="badge" style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 0.7rem; font-family: var(--font-mono);">
                          ${sh.code}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}

                  <!-- Peringatan Konflik Instruksi (Jika ada) -->
                  ${(res.conflicts && res.conflicts.length > 0) ? `
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 6px; padding: 0.45rem 0.65rem; margin-bottom: 0.55rem; font-size: 0.725rem; color: #fca5a5;">
                      <strong>⚠️ Potensi Konflik Instruksi:</strong>
                      <ul style="margin: 0.25rem 0 0 1rem; padding: 0;">
                        ${res.conflicts.map(c => `<li>${c}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}

                  <!-- Panel Perbandingan Langsung (Toggled on Demand) -->
                  ${isComparing ? `
                    <div class="optimizer-diff-panel" style="background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 0.65rem; margin-bottom: 0.65rem;">
                      <div style="font-size: 0.725rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.35rem;">
                        ⚖️ Perbandingan Teks Asli vs Hasil Optimasi:
                      </div>
                      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <div>
                          <div style="font-size: 0.685rem; color: var(--text-muted); margin-bottom: 0.2rem;">Sumber Asli:</div>
                          <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 4px; padding: 0.4rem; font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono); max-height: 80px; overflow-y: auto;">
                            ${res.originalPrompt}
                          </div>
                        </div>
                        <div>
                          <div style="font-size: 0.685rem; color: var(--text-muted); margin-bottom: 0.2rem;">Hasil Optimasi:</div>
                          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 4px; padding: 0.4rem; font-size: 0.75rem; color: #6ee7b7; font-family: var(--font-mono); max-height: 80px; overflow-y: auto;">
                            ${res.prompt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ` : ''}

                  <!-- 4 Tombol Aksi Nyata -->
                  <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center; justify-content: flex-end; border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 0.55rem;">
                    <button type="button" class="btn btn-outline btn-xs btn-compare-optimized btn-compare-opt-prompt" data-index="${index}" title="Bandingkan dengan prompt asli">
                      ⚖️ ${isComparing ? 'Tutup Perbandingan' : 'Bandingkan dengan Asli'}
                    </button>
                    <button type="button" class="btn btn-outline btn-xs btn-reoptimize btn-reoptimize-prompt" data-index="${index}" title="Jadikan sumber dan optimalkan kembali">
                      🔁 Optimalkan Lagi
                    </button>
                    <button type="button" class="btn btn-outline btn-xs btn-set-main-prompt btn-set-main-opt-prompt" data-index="${index}" title="Gunakan sebagai Prompt Utama Analyzer" style="color: #fde047; border-color: rgba(234, 179, 8, 0.4);">
                      ⭐ Jadikan Prompt Utama
                    </button>
                    <button type="button" class="btn btn-primary btn-xs btn-copy-optimized btn-copy-opt-prompt" data-index="${index}" title="Salin prompt bersih siap pakai">
                      📋 Salin Prompt
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  return {
    html,
    bindEvents(container) {
      // 1. Radio Button: Sumber Prompt
      container.querySelectorAll('input[name="optimizer-source-type"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          if (onStateChange) {
            onStateChange({ sourceType: e.target.value });
          }
        });
      });

      // 2. Textarea: Input Prompt Manual
      const manualInput = container.querySelector('#input-optimizer-manual-prompt');
      if (manualInput) {
        manualInput.addEventListener('input', (e) => {
          if (onStateChange) {
            onStateChange({ manualPrompt: e.target.value });
          }
        });
      }

      // 3. Dropdown: Pemilih Variasi
      const variationSelect = container.querySelector('#select-optimizer-variation');
      if (variationSelect) {
        variationSelect.addEventListener('change', (e) => {
          if (onStateChange) {
            onStateChange({ selectedVariationIndex: parseInt(e.target.value, 10) || 0 });
          }
        });
      }

      // 4. Dropdown: Mode Optimasi
      const modeSelect = container.querySelector('#select-optimizer-mode');
      if (modeSelect) {
        modeSelect.addEventListener('change', (e) => {
          if (onStateChange) {
            onStateChange({ mode: e.target.value });
          }
        });
      }

      // 5. Button Group: Jumlah Versi
      container.querySelectorAll('.btn-optimizer-count').forEach(btn => {
        btn.addEventListener('click', () => {
          const countVal = parseInt(btn.getAttribute('data-count'), 10) || 3;
          if (onStateChange) {
            onStateChange({ count: countVal });
          }
        });
      });

      // 6. Checkboxes: Instruction Locks
      const lockFace = container.querySelector('#cb-opt-lock-face');
      const lockOutfit = container.querySelector('#cb-opt-lock-outfit');
      const lockPose = container.querySelector('#cb-opt-lock-pose');
      const lockColor = container.querySelector('#cb-opt-lock-color');
      const lockAspect = container.querySelector('#cb-opt-lock-aspect');
      const lockCustom = container.querySelector('#input-opt-custom-lock');

      const triggerLockUpdate = () => {
        if (onStateChange) {
          onStateChange({
            lockedElements: {
              face: Boolean(lockFace?.checked),
              outfit: Boolean(lockOutfit?.checked),
              pose: Boolean(lockPose?.checked),
              color: Boolean(lockColor?.checked),
              aspectRatio: Boolean(lockAspect?.checked),
              custom: (lockCustom?.value || '').trim()
            }
          });
        }
      };

      if (lockFace) lockFace.addEventListener('change', triggerLockUpdate);
      if (lockOutfit) lockOutfit.addEventListener('change', triggerLockUpdate);
      if (lockPose) lockPose.addEventListener('change', triggerLockUpdate);
      if (lockColor) lockColor.addEventListener('change', triggerLockUpdate);
      if (lockAspect) lockAspect.addEventListener('change', triggerLockUpdate);
      if (lockCustom) lockCustom.addEventListener('input', triggerLockUpdate);

      // 7. Tombol Eksekusi: Optimalkan Prompt
      const runBtn = container.querySelector('#btn-run-prompt-optimizer');
      if (runBtn) {
        runBtn.addEventListener('click', () => {
          if (onRunOptimization && activeSourceText) {
            onRunOptimization();
          }
        });
      }

      // 8. Event Listener untuk 4 Tombol Aksi Hasil
      container.querySelectorAll('.btn-copy-optimized').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const item = results[idx];
          if (item && onCopyPrompt) {
            onCopyPrompt(item.prompt);
          }
        });
      });

      container.querySelectorAll('.btn-compare-optimized').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          if (onStateChange) {
            const nextIdx = (comparingVersionIndex === idx) ? null : idx;
            onStateChange({ comparingVersionIndex: nextIdx });
          }
        });
      });

      container.querySelectorAll('.btn-set-main-prompt').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const item = results[idx];
          if (item && onSetAsMainPrompt) {
            onSetAsMainPrompt(item.prompt);
          }
        });
      });

      container.querySelectorAll('.btn-reoptimize').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const item = results[idx];
          if (item && onOptimizeAgain) {
            onOptimizeAgain(item.prompt);
          }
        });
      });
    }
  };
}
