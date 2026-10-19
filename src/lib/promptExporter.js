/**
 * Prompt Exporter & Batch Generator V3.8
 * Mendukung ekspor prompt ke format JSON, TXT, dan CSV
 * serta pembuatan variasi batch prompt secara otomatis.
 */

/**
 * Format prompt items ke JSON
 * @param {Array<Object>} items - Array of { id, positivePrompt, negativePrompt, shorthands, metadata }
 */
export function formatAsJson(items = []) {
  const exportPayload = {
    generator: 'Prompt Shorthand Analyzer V3.8',
    exportedAt: new Date().toISOString(),
    totalItems: items.length,
    items: items.map((item, idx) => ({
      id: item.id || `item_${idx + 1}`,
      positivePrompt: item.positivePrompt || '',
      negativePrompt: item.negativePrompt || '',
      shorthands: Array.isArray(item.shorthands) ? item.shorthands : [],
      wordCount: (item.positivePrompt || '').trim().split(/\s+/).filter(Boolean).length,
      timestamp: item.timestamp || new Date().toISOString()
    }))
  };

  return JSON.stringify(exportPayload, null, 2);
}

/**
 * Format prompt items ke plain text TXT
 * Menghasilkan teks bersih yang siap pakai di image generator eksternal
 */
export function formatAsTxt(items = []) {
  const sections = items.map((item, idx) => {
    const lines = [];
    if (items.length > 1) {
      lines.push(`=== PROMPT VARIATION ${idx + 1} ===`);
    }
    lines.push(`[POSITIVE PROMPT]`);
    lines.push(item.positivePrompt || '');
    if (item.negativePrompt) {
      lines.push(`\n[NEGATIVE PROMPT]`);
      lines.push(item.negativePrompt);
    }
    if (item.shorthands && item.shorthands.length > 0) {
      lines.push(`\n[SHORTHANDS]`);
      lines.push(item.shorthands.join(', '));
    }
    return lines.join('\n');
  });

  return sections.join('\n\n----------------------------------------\n\n');
}

/**
 * Escape string untuk CSV (RFC 4180)
 */
function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

/**
 * Format prompt items ke CSV
 */
export function formatAsCsv(items = []) {
  const headers = ['ID', 'Positive Prompt', 'Negative Prompt', 'Installed Shorthands', 'Word Count', 'Timestamp'];
  const rows = items.map((item, idx) => {
    const id = item.id || `PROMPT_${idx + 1}`;
    const pos = item.positivePrompt || '';
    const neg = item.negativePrompt || '';
    const shorts = Array.isArray(item.shorthands) ? item.shorthands.join(';') : '';
    const words = pos.trim().split(/\s+/).filter(Boolean).length;
    const time = item.timestamp || new Date().toISOString();

    return [
      escapeCsv(id),
      escapeCsv(pos),
      escapeCsv(neg),
      escapeCsv(shorts),
      words,
      escapeCsv(time)
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\r\n');
}

/**
 * Trigger download file di browser
 */
export function triggerFileDownload(filename, content, mimeType = 'text/plain') {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  try {
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 200);
    return true;
  } catch (err) {
    console.error('File download failed:', err);
    return false;
  }
}

/**
 * Menghasilkan variasi batch prompt berbasis prompt utama
 */
export function generateBatchVariations(basePrompt = '', negativePrompt = '', count = 3, installedShorthands = []) {
  if (!basePrompt || typeof basePrompt !== 'string') {
    return [];
  }

  const variations = [
    {
      id: 'variation_1',
      title: 'Variasi 1 (Original)',
      positivePrompt: basePrompt,
      negativePrompt: negativePrompt,
      shorthands: installedShorthands,
      nuance: 'Baseline Original'
    }
  ];

  const nuanceModifiers = [
    {
      title: 'Variasi 2 (Cinematic Golden Hour)',
      tag: 'bathed in warm cinematic golden hour light, soft atmospheric haze, volumetric rim illumination',
      nuance: 'Pencahayaan Golden Hour Hangat'
    },
    {
      title: 'Variasi 3 (Dramatic High-Contrast Studio)',
      tag: 'dramatic chiaroscuro lighting, deep natural contrast, sharp focal clarity, professional studio key light',
      nuance: 'Pencahayaan Studio Kontras Tinggi'
    },
    {
      title: 'Variasi 4 (Cool Atmospheric Twilight)',
      tag: 'cool blue twilight ambiance, subtle diffused backlight, ethereal mood, balanced soft tones',
      nuance: 'Nuansa Twilight Biru Dingin'
    },
    {
      title: 'Variasi 5 (Wide Angle Environmental)',
      tag: 'environmental wide-angle perspective, dynamic spatial depth, natural contextual surroundings',
      nuance: 'Perspektif Spasial Dinamis'
    }
  ];

  for (let i = 0; i < Math.min(count - 1, nuanceModifiers.length); i++) {
    const mod = nuanceModifiers[i];
    // Sisipkan nuansa sebelum tag shorthand di akhir atau di ujung prompt
    const cleanBase = basePrompt.trim();
    let variedPrompt;
    if (cleanBase.endsWith('.')) {
      variedPrompt = `${cleanBase.slice(0, -1)}, ${mod.tag}.`;
    } else {
      variedPrompt = `${cleanBase}, ${mod.tag}`;
    }

    variations.push({
      id: `variation_${i + 2}`,
      title: mod.title,
      positivePrompt: variedPrompt,
      negativePrompt: negativePrompt,
      shorthands: installedShorthands,
      nuance: mod.nuance
    });
  }

  return variations;
}
