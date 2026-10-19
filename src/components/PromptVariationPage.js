/**
 * PromptVariationPage Component V3.8
 * 
 * Halaman utama untuk Tab "IDE VARIASI PROMPT"
 * Mendukung 3 Sumber Input, Multi-Dimensi Pendekatan Kreatif,
 * Instruction Lock Preservation, serta Aksi Cepat Antartab.
 */

import { VARIATION_APPROACHES } from '../lib/promptVariationEngine.js';

export function renderPromptVariationPage({
  state = {},
  previousAnalysis = null,
  onSourceTypeChange,
  onCustomPromptChange,
  onImageSelected,
  onImageRemoved,
  onVariationCountChange,
  onToggleApproach,
  onToggleLock,
  onCustomLockChange,
  onGenerate,
  onCopyPrompt,
  onSetMainPrompt,
  onOptimizePrompt,
  onMakeBaseForNextVariation,
  onNavigateTab
}) {
  const {
    sourceType = 'PREVIOUS_ANALYSIS',
    customPrompt = '',
    variationImage = null,
    variationCount = 5,
    selectedApproaches = ['composition_framing', 'environment_background', 'lighting_mood', 'visual_style'],
    lockedElements = { face: true, outfit: true, pose: false, color: false, custom: '' },
    generatedVariations = [],
    isGenerating = false,
    generationMeta = null
  } = state;

  const hasPreviousAnalysis = Boolean(
    previousAnalysis &&
    (previousAnalysis.optimalPrompt || previousAnalysis.generatedPrompt)
  );
  const previousPrompt = previousAnalysis?.optimalPrompt || previousAnalysis?.generatedPrompt || '';
  const previousShorthands = previousAnalysis?.installedShorthands || [];

  const html = `
    <div class="page-container page-prompt-variations" id="page-prompt-variations">
      <!-- Page Header -->
      <div class="panel analyzer-card header-banner" style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%); border-bottom: 2px solid #38bdf8;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); display: flex; align-items: center; justify-content: center;">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8; width: 26px; height: 26px;"><path fill="currentColor" d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <h1 style="font-size: 1.25rem; font-weight: 800; color: #f1f5f9; margin: 0; letter-spacing: 0.5px;">IDE VARIASI PROMPT</h1>
                <span class="badge" style="background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #38bdf8; font-size: 0.7rem;">V3.8</span>
                <span class="badge" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #6ee7b7; font-size: 0.7rem;">Multi-Dimensi &amp; Instruction Lock</span>
              </div>
              <p style="font-size: 0.825rem; color: var(--text-muted); margin: 0.2rem 0 0 0;">
                Eksplorasi ide variasi visual dari analisis sebelumnya, gambar baru, atau prompt teks dengan perlindungan elemen semantik terkunci.
              </p>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button type="button" class="btn btn-outline btn-sm" id="btn-quick-to-analyzer" title="Buka Tab Analyzer Utama">
              🔍 Buka Analyzer
            </button>
          </div>
        </div>
      </div>

      <!-- Main Input & Configuration Section -->
      <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1rem;">
        
        <!-- 1. Tiga Sumber Input Selection Panel -->
        <section class="panel analyzer-card" id="card-source-selection">
          <div class="card-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 0.6rem;">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              <h2>1. PILIH SUMBER INPUT</h2>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Tentukan basis acuan pembuatan variasi</span>
          </div>

          <div style="margin-top: 0.75rem;">
            <!-- Source Selector Tabs -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.6rem;">
              <label class="source-radio-card ${sourceType === 'PREVIOUS_ANALYSIS' ? 'active' : ''}" style="border: 1px solid ${sourceType === 'PREVIOUS_ANALYSIS' ? '#38bdf8' : 'rgba(255,255,255,0.1)'}; background: ${sourceType === 'PREVIOUS_ANALYSIS' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(15, 23, 42, 0.6)'}; border-radius: 8px; padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: flex-start; gap: 0.6rem; transition: all 0.2s;">
                <input type="radio" name="source_type" value="PREVIOUS_ANALYSIS" ${sourceType === 'PREVIOUS_ANALYSIS' ? 'checked' : ''} style="margin-top: 0.2rem;" />
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; color: ${sourceType === 'PREVIOUS_ANALYSIS' ? '#38bdf8' : '#f1f5f9'};">
                    📋 Gunakan Analisis Sebelumnya
                  </div>
                  <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Gunakan hasil analisis prompt optimal &amp; shorthand dari tab Analyzer tanpa re-analisa.
                  </div>
                </div>
              </label>

              <label class="source-radio-card ${sourceType === 'NEW_IMAGE' ? 'active' : ''}" style="border: 1px solid ${sourceType === 'NEW_IMAGE' ? '#38bdf8' : 'rgba(255,255,255,0.1)'}; background: ${sourceType === 'NEW_IMAGE' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(15, 23, 42, 0.6)'}; border-radius: 8px; padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: flex-start; gap: 0.6rem; transition: all 0.2s;">
                <input type="radio" name="source_type" value="NEW_IMAGE" ${sourceType === 'NEW_IMAGE' ? 'checked' : ''} style="margin-top: 0.2rem;" />
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; color: ${sourceType === 'NEW_IMAGE' ? '#38bdf8' : '#f1f5f9'};">
                    🖼️ Upload Gambar Baru
                  </div>
                  <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Masukkan gambar referensi baru mandiri tanpa menimpa analisis sebelumnya.
                  </div>
                </div>
              </label>

              <label class="source-radio-card ${sourceType === 'CUSTOM_PROMPT' ? 'active' : ''}" style="border: 1px solid ${sourceType === 'CUSTOM_PROMPT' ? '#38bdf8' : 'rgba(255,255,255,0.1)'}; background: ${sourceType === 'CUSTOM_PROMPT' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(15, 23, 42, 0.6)'}; border-radius: 8px; padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: flex-start; gap: 0.6rem; transition: all 0.2s;">
                <input type="radio" name="source_type" value="CUSTOM_PROMPT" ${sourceType === 'CUSTOM_PROMPT' ? 'checked' : ''} style="margin-top: 0.2rem;" />
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; color: ${sourceType === 'CUSTOM_PROMPT' ? '#38bdf8' : '#f1f5f9'};">
                    ✍️ Masukkan Prompt
                  </div>
                  <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Ketik teks bebas, prompt bershorthand murni, atau kombinasi tanpa perlu gambar.
                  </div>
                </div>
              </label>
            </div>

            <!-- Dynamic Source Details Container -->
            <div style="margin-top: 0.75rem; padding: 0.85rem; background: rgba(10, 15, 29, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px;">
              ${sourceType === 'PREVIOUS_ANALYSIS' ? `
                <div id="panel-source-previous">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">Context Analisis Terakhir:</span>
                    <span class="badge ${hasPreviousAnalysis ? 'status-connected' : 'status-unconfigured'}" style="font-size: 0.7rem;">
                      ${hasPreviousAnalysis ? '🟢 Tersedia' : '🟡 Belum Ada Analisis'}
                    </span>
                  </div>
                  ${hasPreviousAnalysis ? `
                    <div style="font-family: var(--font-mono); font-size: 0.825rem; color: #f1f5f9; background: rgba(0,0,0,0.3); padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.2); line-height: 1.45;">
                      ${previousPrompt}
                    </div>
                    ${previousShorthands.length > 0 ? `
                      <div style="margin-top: 0.45rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                        <span style="font-size: 0.725rem; color: var(--text-muted);">Shorthand Terpasang:</span>
                        ${previousShorthands.map(s => `<code style="font-size: 0.725rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 0.1rem 0.35rem; border-radius: 4px;">${s}</code>`).join(' ')}
                      </div>
                    ` : ''}
                  ` : `
                    <div style="font-size: 0.8rem; color: var(--text-muted); padding: 0.75rem; background: rgba(245, 158, 11, 0.08); border: 1px dashed rgba(245, 158, 11, 0.3); border-radius: 6px;">
                      ⚠️ Belum ada hasil analisis aktif di tab Analyzer. Anda dapat memilih sumber <strong>[Upload Gambar Baru]</strong> atau <strong>[Masukkan Prompt]</strong>, atau klik tombol <em>Buka Analyzer</em> untuk menganalisis prompt/gambar awal terlebih dahulu.
                    </div>
                  `}
                </div>
              ` : ''}

              ${sourceType === 'NEW_IMAGE' ? `
                <div id="panel-source-image">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">Upload Gambar Khusus Variasi (Terpisah):</span>
                    <span style="font-size: 0.725rem; color: var(--text-muted);">Konteks gambar Analyzer tetap aman</span>
                  </div>
                  ${variationImage ? `
                    <div style="display: flex; gap: 1rem; align-items: center; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.3);">
                      <img src="${variationImage.base64}" alt="Preview" style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);" />
                      <div style="flex: 1;">
                        <div style="font-weight: 700; font-size: 0.85rem; color: #f1f5f9;">${variationImage.name || 'Gambar Referensi'}</div>
                        <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                          Dimensi: ${variationImage.width || 0} x ${variationImage.height || 0} px • Aspek Rasio: ${variationImage.aspectRatio || '1:1'}
                        </div>
                        <div style="margin-top: 0.4rem;">
                          <button type="button" class="btn btn-outline btn-xs" id="btn-remove-variation-image" style="color: #f87171; border-color: rgba(239, 68, 68, 0.4);">
                            🗑️ Hapus Gambar
                          </button>
                        </div>
                      </div>
                    </div>
                  ` : `
                    <div class="dropzone-box" id="dropzone-variation-image" style="border: 2px dashed rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(15, 23, 42, 0.4); cursor: pointer;">
                      <input type="file" id="input-variation-file" accept="image/*" style="display: none;" />
                      <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8; width: 32px; height: 32px; margin-bottom: 0.4rem;"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #f1f5f9;">Klik atau Tarik Gambar Referensi Baru ke Sini</div>
                      <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">Mendukung format PNG, JPG, WEBP hingga 10MB</div>
                    </div>
                  `}
                </div>
              ` : ''}

              ${sourceType === 'CUSTOM_PROMPT' ? `
                <div id="panel-source-custom">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">Ketik / Tempel Prompt Acuan:</span>
                    <button type="button" class="btn btn-outline btn-xs" id="btn-clear-custom-prompt">Bersihkan</button>
                  </div>
                  <textarea 
                    id="input-custom-prompt" 
                    rows="3" 
                    class="font-mono"
                    placeholder="Contoh: A high-fashion model in futuristic neon streets /cam_portrait /lighting_dramatic /facelock"
                    style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.3); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 6px; padding: 0.6rem 0.8rem; color: #f1f5f9; font-size: 0.85rem; resize: vertical;"
                  >${customPrompt}</textarea>
                  <div style="font-size: 0.725rem; color: var(--text-muted); margin-top: 0.3rem;">
                    💡 Tips: Anda dapat mengetik teks bahasa natural, shorthand murni seperti <code>/cam_wide /golden_hour</code>, atau kombinasinya.
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </section>

        <!-- 2. Pengaturan Variasi & Pendekatan Kreatif -->
        <section class="panel analyzer-card" id="card-variation-settings">
          <div class="card-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 0.6rem;">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.59 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
              <h2>2. PENGATURAN VARIASI &amp; PENDEKATAN KREATIF</h2>
            </div>
            <div style="display: flex; gap: 0.4rem; align-items: center;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Jumlah:</span>
              <button type="button" class="btn btn-xs ${variationCount === 3 ? 'btn-primary' : 'btn-outline'} btn-count-toggle" data-count="3">3 Ide</button>
              <button type="button" class="btn btn-xs ${variationCount === 5 ? 'btn-primary' : 'btn-outline'} btn-count-toggle" data-count="5">5 Ide</button>
              <button type="button" class="btn btn-xs ${variationCount === 10 ? 'btn-primary' : 'btn-outline'} btn-count-toggle" data-count="10">10 Ide</button>
            </div>
          </div>

          <!-- Approach Checkboxes -->
          <div style="margin-top: 0.75rem;">
            <div style="font-size: 0.775rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.4rem;">
              Pilih Pendekatan Kreatif yang Diinginkan:
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.5rem;">
              ${Object.values(VARIATION_APPROACHES).map(app => {
                const isActive = selectedApproaches.includes(app.id);
                return `
                  <label class="approach-toggle-card" style="display: flex; align-items: center; gap: 0.6rem; background: ${isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${isActive ? 'rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.08)'}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                    <input type="checkbox" class="cb-approach" value="${app.id}" ${isActive ? 'checked' : ''} />
                    <div>
                      <div style="font-size: 0.8rem; font-weight: 600; color: ${isActive ? '#38bdf8' : '#f1f5f9'};">${app.label}</div>
                      <div style="font-size: 0.7rem; color: var(--text-muted); line-height: 1.2;">${app.description}</div>
                    </div>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </section>

        <!-- 3. Perlindungan Instruksi (Instruction Lock) -->
        <section class="panel analyzer-card" id="card-instruction-lock" style="border: 1px solid rgba(16, 185, 129, 0.25);">
          <div class="card-header" style="border-bottom: 1px solid rgba(16, 185, 129, 0.15); padding-bottom: 0.6rem;">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #10b981;"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
              <h2 style="color: #6ee7b7;">3. PERLINDUNGAN INSTRUKSI (INSTRUCTION LOCK)</h2>
            </div>
            <span style="font-size: 0.725rem; color: #a7f3d0;">Elemen terkunci tidak akan diubah atau dihapus di seluruh variasi</span>
          </div>

          <div style="margin-top: 0.75rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.5rem;">
              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${lockedElements.face ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${lockedElements.face ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="face" ${lockedElements.face ? 'checked' : ''} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${lockedElements.face ? '#6ee7b7' : '#f1f5f9'};">
                  👤 Identitas Wajah (<code>/facelock</code>)
                </span>
              </label>

              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${lockedElements.outfit ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${lockedElements.outfit ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="outfit" ${lockedElements.outfit ? 'checked' : ''} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${lockedElements.outfit ? '#6ee7b7' : '#f1f5f9'};">
                  👔 Pakaian &amp; Aksesori (<code>/outfitlock</code>)
                </span>
              </label>

              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${lockedElements.pose ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${lockedElements.pose ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="pose" ${lockedElements.pose ? 'checked' : ''} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${lockedElements.pose ? '#6ee7b7' : '#f1f5f9'};">
                  🧘 Pose &amp; Proporsi (<code>/poselock</code>, <code>/bodyshape</code>)
                </span>
              </label>

              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${lockedElements.color ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.4)'}; border: 1px solid ${lockedElements.color ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="color" ${lockedElements.color ? 'checked' : ''} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${lockedElements.color ? '#6ee7b7' : '#f1f5f9'};">
                  🎨 Palet Warna Dominan (<code>/colorpreserve</code>)
                </span>
              </label>
            </div>

            <!-- Custom Lock Text Input -->
            <div style="margin-top: 0.55rem;">
              <input 
                type="text" 
                id="input-custom-lock"
                value="${lockedElements.custom || ''}"
                placeholder="Elemen kustom yang ingin dikunci (opsional, contoh: red leather jacket, vintage watch, cat in arms)" 
                style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.3); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 6px; padding: 0.45rem 0.75rem; color: #f1f5f9; font-size: 0.8rem;"
              />
            </div>
          </div>
        </section>

        <!-- Generation Trigger Action Button -->
        <div style="display: flex; justify-content: flex-end; margin-top: 0.25rem;">
          <button 
            type="button" 
            class="btn btn-primary" 
            id="btn-generate-variations" 
            style="padding: 0.65rem 1.75rem; font-size: 0.95rem; font-weight: 700; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border: 1px solid #38bdf8; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);"
            ${isGenerating ? 'disabled' : ''}
          >
            ${isGenerating ? '⏳ Sedang Meracik Ide Variasi...' : `✨ Hasilkan ${variationCount} Ide Variasi Prompt`}
          </button>
        </div>
      </div>

      <!-- 4. Hasil Ide Variasi Prompt -->
      <section class="panel analyzer-card" id="card-variation-results" style="margin-top: 1.25rem;">
        <div class="card-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 0.75rem;">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
            <h2>HASIL IDE VARIASI PROMPT (${generatedVariations.length} Variasi)</h2>
          </div>
          ${generationMeta?.notice ? `
            <span style="font-size: 0.75rem; color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid rgba(56, 189, 248, 0.25);">
              ℹ️ ${generationMeta.notice}
            </span>
          ` : ''}
        </div>

        <div style="margin-top: 0.85rem;">
          ${generatedVariations.length > 0 ? `
            <div style="display: grid; grid-template-columns: 1fr; gap: 0.85rem;" id="variation-cards-list">
              ${generatedVariations.map((item, idx) => `
                <div class="variation-item-card" style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.85rem 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.45rem;">
                      <span style="font-weight: 800; font-size: 0.9rem; color: #38bdf8;">${item.title || `Variasi ${idx + 1}`}</span>
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #7dd3fc; font-size: 0.68rem;">
                        ${item.approachLabel || 'Kreatif'}
                      </span>
                    </div>
                    <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap;">
                      <button type="button" class="btn btn-outline btn-xs btn-copy-variation" data-idx="${idx}" title="Salin prompt variasi ini">
                        📋 Salin
                      </button>
                      <button type="button" class="btn btn-primary btn-xs btn-set-main-prompt" data-idx="${idx}" style="background: #0284c7; border-color: #0369a1;" title="Gunakan sebagai prompt utama dan buka tab Analyzer">
                        🎯 Jadikan Prompt Utama
                      </button>
                      <button type="button" class="btn btn-outline btn-xs btn-optimize-variation" data-idx="${idx}" title="Kirim ke Analyzer untuk langsung dianalisa mendalam">
                        ⚡ Optimalkan
                      </button>
                      <button type="button" class="btn btn-outline btn-xs btn-further-variation" data-idx="${idx}" title="Jadikan basis baru untuk variasi lanjutan">
                        🔄 Variasi Lanjutan
                      </button>
                    </div>
                  </div>

                  <!-- Prompt Text Monospace -->
                  <div style="background: rgba(10, 15, 29, 0.9); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.835rem; color: #f1f5f9; line-height: 1.45; word-break: break-word;">
                    ${item.prompt}
                  </div>

                  <!-- Metadata & Locks Info -->
                  <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem; font-size: 0.725rem;">
                    <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
                      <span style="color: var(--text-muted);">Shorthand:</span>
                      ${(item.shorthands && item.shorthands.length > 0) ? item.shorthands.map(s => `<code style="color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 0.05rem 0.3rem; border-radius: 3px;">${s}</code>`).join(' ') : '<span style="color: var(--text-muted);">-</span>'}
                    </div>
                    ${item.lockedElementsApplied && item.lockedElementsApplied.length > 0 ? `
                      <div style="display: flex; align-items: center; gap: 0.3rem; color: #6ee7b7;">
                        <span>🛡️ Terkunci:</span>
                        <span>${item.lockedElementsApplied.join(', ')}</span>
                      </div>
                    ` : ''}
                  </div>
                  ${item.explanation ? `
                    <div style="margin-top: 0.35rem; font-size: 0.735rem; color: var(--text-muted); font-style: italic;">
                      💡 ${item.explanation}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : `
            <div style="text-align: center; padding: 2.5rem 1rem; background: rgba(15, 23, 42, 0.4); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 8px;">
              <svg class="icon" viewBox="0 0 24 24" style="color: var(--text-muted); width: 40px; height: 40px; margin-bottom: 0.5rem;"><path fill="currentColor" d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
              <div style="font-size: 0.9rem; font-weight: 700; color: #f1f5f9;">Belum Ada Variasi yang Dihasilkan</div>
              <p style="font-size: 0.775rem; color: var(--text-muted); max-width: 480px; margin: 0.35rem auto 1rem auto;">
                Pilih salah satu dari 3 sumber input di atas, tentukan jumlah ide dan pendekatan visual yang diinginkan, lalu klik tombol <strong>"Hasilkan Ide Variasi Prompt"</strong>.
              </p>
            </div>
          `}
        </div>
      </section>
    </div>
  `;

  return {
    html,
    bindEvents(container) {
      const page = container.querySelector('#page-prompt-variations');
      if (!page) return;

      // 1. Source Radio Selection
      page.querySelectorAll('input[name="source_type"]').forEach(radio => {
        radio.addEventListener('change', () => {
          if (onSourceTypeChange) onSourceTypeChange(radio.value);
        });
      });

      // Quick to analyzer button
      const quickAnalyzerBtn = page.querySelector('#btn-quick-to-analyzer');
      if (quickAnalyzerBtn && onNavigateTab) {
        quickAnalyzerBtn.addEventListener('click', () => onNavigateTab('analyzer'));
      }

      // 2. Custom Prompt Input
      const customPromptInput = page.querySelector('#input-custom-prompt');
      if (customPromptInput && onCustomPromptChange) {
        customPromptInput.addEventListener('input', () => {
          onCustomPromptChange(customPromptInput.value);
        });
      }

      const clearCustomBtn = page.querySelector('#btn-clear-custom-prompt');
      if (clearCustomBtn && customPromptInput && onCustomPromptChange) {
        clearCustomBtn.addEventListener('click', () => {
          customPromptInput.value = '';
          onCustomPromptChange('');
        });
      }

      // 3. Dropzone & File Input for Variation Image
      const dropzone = page.querySelector('#dropzone-variation-image');
      const fileInput = page.querySelector('#input-variation-file');
      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (file && onImageSelected) {
            onImageSelected(file);
          }
        });

        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.style.borderColor = '#38bdf8';
          dropzone.style.background = 'rgba(56, 189, 248, 0.15)';
        });
        dropzone.addEventListener('dragleave', (e) => {
          e.preventDefault();
          dropzone.style.borderColor = 'rgba(56, 189, 248, 0.35)';
          dropzone.style.background = 'rgba(15, 23, 42, 0.4)';
        });
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.style.borderColor = 'rgba(56, 189, 248, 0.35)';
          dropzone.style.background = 'rgba(15, 23, 42, 0.4)';
          const file = e.dataTransfer.files?.[0];
          if (file && onImageSelected) {
            onImageSelected(file);
          }
        });
      }

      const removeImgBtn = page.querySelector('#btn-remove-variation-image');
      if (removeImgBtn && onImageRemoved) {
        removeImgBtn.addEventListener('click', () => onImageRemoved());
      }

      // 4. Count Buttons Toggle
      page.querySelectorAll('.btn-count-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const cnt = parseInt(btn.getAttribute('data-count'), 10);
          if (cnt && onVariationCountChange) onVariationCountChange(cnt);
        });
      });

      // 5. Approach Checkboxes
      page.querySelectorAll('.cb-approach').forEach(cb => {
        cb.addEventListener('change', () => {
          if (onToggleApproach) onToggleApproach(cb.value, cb.checked);
        });
      });

      // 6. Lock Checkboxes
      page.querySelectorAll('.cb-lock').forEach(cb => {
        cb.addEventListener('change', () => {
          const lockKey = cb.getAttribute('data-lock');
          if (lockKey && onToggleLock) onToggleLock(lockKey, cb.checked);
        });
      });

      // Custom lock input
      const customLockInput = page.querySelector('#input-custom-lock');
      if (customLockInput && onCustomLockChange) {
        customLockInput.addEventListener('input', () => {
          onCustomLockChange(customLockInput.value);
        });
      }

      // 7. Generate Action Button
      const genBtn = page.querySelector('#btn-generate-variations');
      if (genBtn && onGenerate) {
        genBtn.addEventListener('click', () => onGenerate());
      }

      // 8. Result Card Actions
      page.querySelectorAll('.btn-copy-variation').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          const item = generatedVariations[idx];
          if (item && onCopyPrompt) onCopyPrompt(item.prompt);
        });
      });

      page.querySelectorAll('.btn-set-main-prompt').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          const item = generatedVariations[idx];
          if (item && onSetMainPrompt) onSetMainPrompt(item.prompt);
        });
      });

      page.querySelectorAll('.btn-optimize-variation').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          const item = generatedVariations[idx];
          if (item && onOptimizePrompt) onOptimizePrompt(item.prompt);
        });
      });

      page.querySelectorAll('.btn-further-variation').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          const item = generatedVariations[idx];
          if (item && onMakeBaseForNextVariation) onMakeBaseForNextVariation(item.prompt);
        });
      });
    }
  };
}
