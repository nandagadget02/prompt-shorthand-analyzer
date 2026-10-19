/**
 * NegativePromptPanel Component V3.8
 * Panel interaktif untuk Dynamic Negative Prompt Builder
 * Mendukung dua mode operasi:
 * 1. MODE ANALISIS (Context-Aware berbasis Prompt Optimal/Positif)
 * 2. MODE MANDIRI (Standalone tanpa memerlukan analisis prompt)
 * Dilengkapi Conflict Detection, Ekspor Multi-Format (JSON, TXT, CSV), dan Batch Variations.
 */

import { buildDynamicNegativePrompt, NEGATIVE_PRESETS } from '../lib/negativePromptEngine.js';
import {
  formatAsJson,
  formatAsTxt,
  formatAsCsv,
  triggerFileDownload,
  generateBatchVariations
} from '../lib/promptExporter.js';

export function renderNegativePromptPanel({
  optimalPrompt = '',
  userPrompt = '',
  installedShorthands = [],
  analysisStatus = 'IDLE',
  onCopyText,
  showNotification
}) {
  // Initial state config
  let activePreset = NEGATIVE_PRESETS.UNIVERSAL;
  let activeCategories = {
    quality: true,
    anatomy: true,
    styleContamination: true,
    watermarkText: true,
    compositionLighting: true
  };
  let customTerms = [];
  let isBatchVisible = false;

  function calculateResult() {
    return buildDynamicNegativePrompt({
      prompt: optimalPrompt,
      userPrompt,
      installedShorthands,
      preset: activePreset,
      activeCategories,
      customTerms,
      analysisStatus
    });
  }

  const result = calculateResult();
  const initialVariations = result.effectivePrompt ? generateBatchVariations(result.effectivePrompt, result.negativePrompt, 3, installedShorthands) : [];

  let modeBadgeClass = 'badge badge-empty';
  let modeBadgeStyle = 'background: rgba(148, 163, 184, 0.15); border: 1px solid rgba(148, 163, 184, 0.35); color: #94a3b8; font-size: 0.68rem;';
  if (result.effectivePrompt) {
    modeBadgeClass = 'badge badge-analysis';
    modeBadgeStyle = 'background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #6ee7b7; font-size: 0.68rem;';
  }

  const getEmptyHint = (res) => {
    if (!res.effectivePrompt) {
      return 'Prompt Optimal belum tersedia. Lakukan analisis prompt terlebih dahulu untuk menghasilkan negative prompt otomatis.';
    }
    return 'Tidak ditemukan kebutuhan negative prompt relevan atau semua kategori proteksi dinonaktifkan.';
  };

  const emptyHint = getEmptyHint(result);

  const html = `
    <section class="panel analyzer-card card-negative-prompt" id="card-negative-prompt" style="margin-top: 1rem; border: 1px solid rgba(239, 68, 68, 0.25); background: rgba(15, 23, 42, 0.65);">
      <div class="card-header" style="border-bottom: 1px solid rgba(239, 68, 68, 0.15); padding-bottom: 0.75rem;">
        <div class="card-title" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
          <svg class="icon" viewBox="0 0 24 24" style="color: #f87171;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <h2 style="color: #fca5a5; font-size: 1rem; letter-spacing: 0.5px; margin: 0;">DYNAMIC NEGATIVE PROMPT BUILDER</h2>
          <span class="badge" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #f87171; color: #fca5a5; font-size: 0.7rem;">V3.8</span>
          <span class="${modeBadgeClass}" id="negative-mode-badge" style="${modeBadgeStyle}">${result.modeLabel}</span>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span id="negative-terms-count" style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${result.termCount} istilah negatif aktif
          </span>
          <button type="button" class="btn btn-outline btn-xs" id="btn-copy-negative-prompt" style="border-color: rgba(239, 68, 68, 0.4); color: #fca5a5;" title="Hanya salin negative prompt">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            Salin Negative
          </button>
          <button type="button" class="btn btn-primary btn-xs" id="btn-copy-combined-prompts" style="background: #ef4444; border-color: #dc2626;" title="Salin prompt positif dan negatif sekaligus">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            Salin Positif + Negatif
          </button>
        </div>
      </div>

      <!-- Conflicts Alert (Jika ada istilah yang bertentangan dengan prompt positif) -->
      <div id="negative-conflicts-wrap" style="${result.conflictsDetected && result.conflictsDetected.length > 0 ? 'margin-top: 0.6rem;' : 'display: none; margin-top: 0.6rem;'}">
        <div style="font-size: 0.735rem; color: #fbbf24; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 6px; padding: 0.35rem 0.65rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
          <span>🛡️ <strong>Konflik Terdeteksi & Disesuaikan:</strong></span>
          <span id="negative-conflicts-text">
            ${(result.conflictsDetected || []).map(c => `<code>${c.term}</code> (${c.reason})`).join(', ')}
          </span>
        </div>
      </div>

      <!-- Category Filter Chips -->
      <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; font-size: 0.775rem;">
          <span style="color: var(--text-muted); font-weight: 600;">Kategori Proteksi:</span>
          <button type="button" class="chip-filter ${activeCategories.quality ? 'active' : ''}" data-category="quality" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${activeCategories.quality ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 41, 59, 0.5)'}; color: #f1f5f9;">
            🛡️ Kualitas
          </button>
          <button type="button" class="chip-filter ${activeCategories.anatomy ? 'active' : ''}" data-category="anatomy" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${activeCategories.anatomy ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 41, 59, 0.5)'}; color: #f1f5f9;">
            🖐️ Anatomi &amp; Tangan
          </button>
          <button type="button" class="chip-filter ${activeCategories.styleContamination ? 'active' : ''}" data-category="styleContamination" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${activeCategories.styleContamination ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 41, 59, 0.5)'}; color: #f1f5f9;">
            🎨 Anti-CGI / Plastik
          </button>
          <button type="button" class="chip-filter ${activeCategories.watermarkText ? 'active' : ''}" data-category="watermarkText" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${activeCategories.watermarkText ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 41, 59, 0.5)'}; color: #f1f5f9;">
            🏷️ Anti-Watermark
          </button>
          <button type="button" class="chip-filter ${activeCategories.compositionLighting ? 'active' : ''}" data-category="compositionLighting" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${activeCategories.compositionLighting ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 41, 59, 0.5)'}; color: #f1f5f9;">
            💡 Pencahayaan
          </button>
        </div>

        <!-- Negative Prompt Text Area Box -->
        <div class="negative-prompt-display-box" style="background: rgba(10, 15, 29, 0.85); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-top: 0.35rem;">
          <p id="negative-prompt-text" class="font-mono" style="margin: 0; line-height: 1.5; color: ${result.negativePrompt ? '#fca5a5' : '#94a3b8'}; font-size: 0.85rem; word-break: break-word;">
            ${result.negativePrompt || emptyHint}
          </p>
        </div>
      </div>

      <!-- Batch Generation & Multi-Format Export Section -->
      <div class="export-batch-section" style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">📦 Ekspor &amp; Batch:</span>
          <button type="button" class="btn btn-outline btn-xs" id="btn-toggle-batch-preview" style="border-color: rgba(56, 189, 248, 0.4); color: #38bdf8;">
            ✨ Lihat 3 Variasi Batch
          </button>
        </div>

        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-json" title="Unduh prompt lengkap dalam format JSON">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Ekspor JSON
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-txt" title="Unduh prompt dalam file teks bersih TXT">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            Ekspor TXT
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-csv" title="Unduh spreadsheet CSV prompt">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 9h3v2h-3v-2zm-4 0h3v2H9v-2zm0 4h3v2H9v-2zm4 0h3v2h-3v-2zM13 3.5L18.5 9H13V3.5z"/></svg>
            Ekspor CSV
          </button>
        </div>
      </div>

      <!-- Batch Variations Accordion Content -->
      <div id="batch-variations-container" style="display: none; margin-top: 0.75rem; padding: 0.75rem; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-sm);">
        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.85rem; color: #38bdf8; display: flex; align-items: center; justify-content: space-between;">
          <span>🎯 Pratinjau 3 Variasi Batch Siap Pakai:</span>
          <span style="font-size: 0.725rem; color: var(--text-muted); font-weight: normal;">Bebas konflik &amp; mempertahankan shorthand inti</span>
        </h4>
        <div id="batch-variations-list" style="display: flex; flex-direction: column; gap: 0.6rem;">
          ${initialVariations.map((v, i) => `
            <div class="batch-variation-card" style="background: rgba(10, 15, 29, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.6rem 0.75rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; gap: 0.5rem; flex-wrap: wrap;">
                <div>
                  <span style="font-weight: 700; color: #38bdf8; font-size: 0.8rem;">${v.title}</span>
                  <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.4rem;">(${v.nuance || 'Default'})</span>
                </div>
                <button type="button" class="btn btn-outline btn-xs btn-copy-var" data-idx="${i}" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">
                  Salin Variasi ${i + 1}
                </button>
              </div>
              <div class="col-positive-variation">
                ${v.positivePrompt ? `<p class="font-mono" style="margin: 0 0 0.35rem 0; font-size: 0.78rem; color: #f1f5f9; line-height: 1.4;">${v.positivePrompt}</p>` : ''}
              </div>
              <div class="col-negative-variation" style="font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono); line-height: 1.35; background: rgba(0,0,0,0.25); padding: 0.3rem 0.5rem; border-radius: 4px;">
                <span style="color: #ef4444; font-weight: 700;">--no</span> ${v.negativePrompt}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      const panel = container.querySelector('#card-negative-prompt');
      if (!panel) return;

      const updateUI = () => {
        const curResult = calculateResult();
        const textEl = panel.querySelector('#negative-prompt-text');
        const countEl = panel.querySelector('#negative-terms-count');
        const badgeEl = panel.querySelector('#negative-mode-badge');
        const conflictsWrap = panel.querySelector('#negative-conflicts-wrap');
        const conflictsText = panel.querySelector('#negative-conflicts-text');

        if (textEl) {
          textEl.textContent = curResult.negativePrompt || getEmptyHint(curResult);
          textEl.style.color = curResult.negativePrompt ? '#fca5a5' : '#94a3b8';
        }
        if (countEl) countEl.textContent = `${curResult.termCount} istilah negatif aktif`;
        if (badgeEl) {
          badgeEl.textContent = curResult.modeLabel;
          if (curResult.mode === 'ANALYSIS') {
            badgeEl.className = 'badge badge-analysis';
            badgeEl.style.background = 'rgba(16, 185, 129, 0.15)';
            badgeEl.style.borderColor = '#10b981';
            badgeEl.style.color = '#6ee7b7';
          } else if (curResult.mode === 'ANALYSIS_FAILED') {
            badgeEl.className = 'badge badge-failed';
            badgeEl.style.background = 'rgba(245, 158, 11, 0.15)';
            badgeEl.style.borderColor = '#f59e0b';
            badgeEl.style.color = '#fcd34d';
          } else {
            badgeEl.className = 'badge badge-empty';
            badgeEl.style.background = 'rgba(148, 163, 184, 0.15)';
            badgeEl.style.borderColor = 'rgba(148, 163, 184, 0.35)';
            badgeEl.style.color = '#94a3b8';
          }
        }

        if (conflictsWrap && conflictsText) {
          if (curResult.conflictsDetected && curResult.conflictsDetected.length > 0) {
            conflictsWrap.style.display = 'block';
            conflictsText.innerHTML = curResult.conflictsDetected.map(c => `<code>${c.term}</code> (${c.reason})`).join(', ');
          } else {
            conflictsWrap.style.display = 'none';
          }
        }
      };

      // Category chip toggle clicks
      panel.querySelectorAll('.chip-filter').forEach(chip => {
        chip.addEventListener('click', () => {
          const cat = chip.getAttribute('data-category');
          if (cat && activeCategories.hasOwnProperty(cat)) {
            activeCategories[cat] = !activeCategories[cat];
            chip.style.background = activeCategories[cat] ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 41, 59, 0.5)';
            chip.classList.toggle('active', activeCategories[cat]);
            updateUI();
          }
        });
      });

      // Copy Negative Prompt
      const copyNegBtn = panel.querySelector('#btn-copy-negative-prompt');
      if (copyNegBtn) {
        copyNegBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          if (!curResult.effectivePrompt) {
            if (showNotification) showNotification('Prompt Optimal masih kosong. Belum ada negative prompt yang dapat disalin.', 'warning');
            return;
          }
          if (!curResult.negativePrompt) {
            if (showNotification) showNotification('Tidak ada negative prompt aktif untuk disalin.', 'warning');
            return;
          }
          navigator.clipboard.writeText(curResult.negativePrompt).then(() => {
            if (showNotification) showNotification('Negative prompt disalin ke clipboard!');
          }).catch(() => {
            if (onCopyText) onCopyText(curResult.negativePrompt);
          });
        });
      }

      // Copy Combined Prompts (Positive + Negative)
      const copyCombBtn = panel.querySelector('#btn-copy-combined-prompts');
      if (copyCombBtn) {
        copyCombBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          const effectivePos = curResult.effectivePrompt;
          if (!effectivePos) {
            if (showNotification) showNotification('Prompt Optimal masih kosong. Silakan lakukan analisis prompt terlebih dahulu.', 'warning');
            return;
          }
          let combined = '';
          if (curResult.negativePrompt) {
            combined = `[PROMPT]\n${effectivePos}\n\n[NEGATIVE PROMPT]\n${curResult.negativePrompt}`.trim();
          } else {
            combined = `[PROMPT]\n${effectivePos}`.trim();
          }

          navigator.clipboard.writeText(combined).then(() => {
            if (showNotification) {
              showNotification('Prompt Positif & Negatif berhasil disalin!');
            }
          }).catch(() => {
            if (onCopyText) onCopyText(combined);
          });
        });
      }

      // Batch Variations Toggle
      const toggleBatchBtn = panel.querySelector('#btn-toggle-batch-preview');
      const batchContainer = panel.querySelector('#batch-variations-container');
      const batchList = panel.querySelector('#batch-variations-list');

      if (toggleBatchBtn && batchContainer && batchList) {
        toggleBatchBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          if (!curResult.effectivePrompt) {
            if (showNotification) showNotification('Prompt Optimal masih kosong. Belum ada variasi batch yang dapat ditampilkan.', 'warning');
            return;
          }

          isBatchVisible = !isBatchVisible;
          batchContainer.style.display = isBatchVisible ? 'block' : 'none';
          toggleBatchBtn.textContent = isBatchVisible ? '✕ Tutup Variasi Batch' : '✨ Lihat 3 Variasi Batch';

          if (isBatchVisible) {
            const variations = generateBatchVariations(curResult.effectivePrompt, curResult.negativePrompt, 3, installedShorthands);
            batchList.innerHTML = variations.map((v, i) => `
              <div style="background: rgba(10, 15, 29, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.6rem 0.75rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; gap: 0.5rem; flex-wrap: wrap;">
                  <div>
                    <span style="font-weight: 700; color: #38bdf8; font-size: 0.8rem;">${v.title}</span>
                    <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.4rem;">(${v.nuance || 'Default'})</span>
                  </div>
                  <button type="button" class="btn btn-outline btn-xs btn-copy-var" data-idx="${i}" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">
                    Salin Variasi ${i + 1}
                  </button>
                </div>
                ${v.positivePrompt ? `<p class="font-mono" style="margin: 0 0 0.35rem 0; font-size: 0.78rem; color: #f1f5f9; line-height: 1.4;">${v.positivePrompt}</p>` : ''}
                <div style="font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono); line-height: 1.35; background: rgba(0,0,0,0.25); padding: 0.3rem 0.5rem; border-radius: 4px;">
                  <span style="color: #ef4444; font-weight: 700;">--no</span> ${v.negativePrompt}
                </div>
              </div>
            `).join('');

            batchList.querySelectorAll('.btn-copy-var').forEach(btn => {
              btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-idx'), 10);
                if (variations[idx]) {
                  const item = variations[idx];
                  const copyText = item.positivePrompt 
                    ? `${item.positivePrompt}\n\n--no ${item.negativePrompt}`
                    : item.negativePrompt;
                  navigator.clipboard.writeText(copyText).then(() => {
                    if (showNotification) showNotification(`Variasi ${idx + 1} berhasil disalin!`);
                  });
                }
              });
            });
          }
        });
      }

      // Export Handlers
      const getItemsToExport = () => {
        const curResult = calculateResult();
        if (!curResult.effectivePrompt) return [];
        return generateBatchVariations(curResult.effectivePrompt, curResult.negativePrompt, 3, installedShorthands);
      };

      const exportJsonBtn = panel.querySelector('#btn-export-json');
      if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          if (!curResult.effectivePrompt) {
            if (showNotification) showNotification('Prompt Optimal masih kosong. Tidak ada prompt untuk diekspor.', 'warning');
            return;
          }
          const items = getItemsToExport();
          const jsonStr = formatAsJson(items);
          triggerFileDownload('prompts-shorthand-v3.8.json', jsonStr, 'application/json');
          if (showNotification) showNotification('File JSON berhasil diunduh!');
        });
      }

      const exportTxtBtn = panel.querySelector('#btn-export-txt');
      if (exportTxtBtn) {
        exportTxtBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          if (!curResult.effectivePrompt) {
            if (showNotification) showNotification('Prompt Optimal masih kosong. Tidak ada prompt untuk diekspor.', 'warning');
            return;
          }
          const items = getItemsToExport();
          const txtStr = formatAsTxt(items);
          triggerFileDownload('prompts-shorthand-v3.8.txt', txtStr, 'text/plain');
          if (showNotification) showNotification('File TXT berhasil diunduh!');
        });
      }

      const exportCsvBtn = panel.querySelector('#btn-export-csv');
      if (exportCsvBtn) {
        exportCsvBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          if (!curResult.effectivePrompt) {
            if (showNotification) showNotification('Prompt Optimal masih kosong. Tidak ada prompt untuk diekspor.', 'warning');
            return;
          }
          const items = getItemsToExport();
          const csvStr = formatAsCsv(items);
          triggerFileDownload('prompts-shorthand-v3.8.csv', csvStr, 'text/csv');
          if (showNotification) showNotification('File CSV berhasil diunduh!');
        });
      }
    }
  };
}
