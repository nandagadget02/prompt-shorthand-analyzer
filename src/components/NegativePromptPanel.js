/**
 * NegativePromptPanel Component V3.8
 * Panel interaktif untuk Dynamic Negative Prompt Builder
 * dan Ekspor Multi-Format (JSON, TXT, CSV) serta Batch Variations.
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
  installedShorthands = [],
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
  let batchCount = 3;

  function calculateResult() {
    return buildDynamicNegativePrompt({
      prompt: optimalPrompt,
      installedShorthands,
      preset: activePreset,
      activeCategories,
      customTerms
    });
  }

  const result = calculateResult();

  const html = `
    <section class="panel analyzer-card card-negative-prompt" id="card-negative-prompt" style="margin-top: 1rem; border: 1px solid rgba(239, 68, 68, 0.25); background: rgba(15, 23, 42, 0.65);">
      <div class="card-header" style="border-bottom: 1px solid rgba(239, 68, 68, 0.15); padding-bottom: 0.75rem;">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #f87171;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <h2 style="color: #fca5a5; font-size: 1rem; letter-spacing: 0.5px;">DYNAMIC NEGATIVE PROMPT BUILDER</h2>
          <span class="badge" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #f87171; color: #fca5a5; font-size: 0.7rem;">V3.8</span>
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
          <p id="negative-prompt-text" class="font-mono" style="margin: 0; line-height: 1.5; color: #fca5a5; font-size: 0.85rem; word-break: break-word;">
            ${result.negativePrompt || 'Negative prompt otomatis akan muncul di sini...'}
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
          <span style="font-size: 0.725rem; color: var(--text-muted); font-weight: normal;">Mempertahankan seluruh shorthand inti V3.8</span>
        </h4>
        <div id="batch-variations-list" style="display: flex; flex-direction: column; gap: 0.6rem;">
          <!-- Items will be dynamically populated -->
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
        if (textEl) textEl.textContent = curResult.negativePrompt || 'Negative prompt otomatis akan muncul di sini...';
        if (countEl) countEl.textContent = `${curResult.termCount} istilah negatif aktif`;
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
          if (curResult.negativePrompt) {
            navigator.clipboard.writeText(curResult.negativePrompt).then(() => {
              if (showNotification) showNotification('Negative prompt disalin ke clipboard!');
            }).catch(() => {
              if (onCopyText) onCopyText(curResult.negativePrompt);
            });
          }
        });
      }

      // Copy Combined Prompts (Positive + Negative)
      const copyCombBtn = panel.querySelector('#btn-copy-combined-prompts');
      if (copyCombBtn) {
        copyCombBtn.addEventListener('click', () => {
          const curResult = calculateResult();
          const combined = `[PROMPT]\n${optimalPrompt}\n\n[NEGATIVE PROMPT]\n${curResult.negativePrompt}`;
          navigator.clipboard.writeText(combined).then(() => {
            if (showNotification) showNotification('Prompt Positif & Negatif berhasil disalin!');
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
          isBatchVisible = !isBatchVisible;
          batchContainer.style.display = isBatchVisible ? 'block' : 'none';
          toggleBatchBtn.textContent = isBatchVisible ? '✕ Tutup Variasi Batch' : '✨ Lihat 3 Variasi Batch';

          if (isBatchVisible) {
            const curResult = calculateResult();
            const variations = generateBatchVariations(optimalPrompt, curResult.negativePrompt, 3, installedShorthands);
            batchList.innerHTML = variations.map((v, i) => `
              <div style="background: rgba(10, 15, 29, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.6rem 0.75rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                  <span style="font-weight: 700; color: #38bdf8; font-size: 0.8rem;">${v.title}</span>
                  <button type="button" class="btn btn-outline btn-xs btn-copy-var" data-idx="${i}" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">
                    Salin Variasi ${i + 1}
                  </button>
                </div>
                <p class="font-mono" style="margin: 0; font-size: 0.8rem; color: #f1f5f9; line-height: 1.4;">${v.positivePrompt}</p>
              </div>
            `).join('');

            batchList.querySelectorAll('.btn-copy-var').forEach(btn => {
              btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-idx'), 10);
                if (variations[idx]) {
                  navigator.clipboard.writeText(variations[idx].positivePrompt).then(() => {
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
        return generateBatchVariations(optimalPrompt, curResult.negativePrompt, 3, installedShorthands);
      };

      const exportJsonBtn = panel.querySelector('#btn-export-json');
      if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', () => {
          const items = getItemsToExport();
          const jsonStr = formatAsJson(items);
          triggerFileDownload('prompts-shorthand-v3.8.json', jsonStr, 'application/json');
          if (showNotification) showNotification('File JSON berhasil diunduh!');
        });
      }

      const exportTxtBtn = panel.querySelector('#btn-export-txt');
      if (exportTxtBtn) {
        exportTxtBtn.addEventListener('click', () => {
          const items = getItemsToExport();
          const txtStr = formatAsTxt(items);
          triggerFileDownload('prompts-shorthand-v3.8.txt', txtStr, 'text/plain');
          if (showNotification) showNotification('File TXT berhasil diunduh!');
        });
      }

      const exportCsvBtn = panel.querySelector('#btn-export-csv');
      if (exportCsvBtn) {
        exportCsvBtn.addEventListener('click', () => {
          const items = getItemsToExport();
          const csvStr = formatAsCsv(items);
          triggerFileDownload('prompts-shorthand-v3.8.csv', csvStr, 'text/csv');
          if (showNotification) showNotification('File CSV berhasil diunduh!');
        });
      }
    }
  };
}
