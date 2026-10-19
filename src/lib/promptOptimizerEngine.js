/**
 * Prompt Optimizer Engine V3.8
 * 
 * Modul terisolasi untuk optimasi prompt terarah berbasis:
 * 1. Tiga Sumber Input:
 *    - OPTIMAL_PROMPT: Mengambil PROMPT OPTIMAL hasil Analyzer eksisting.
 *    - MANUAL_PROMPT: Input teks manual (Indonesia / English / Shorthand).
 *    - VARIATION_PROMPT: Mengambil salah satu prompt dari hasil Ide Variasi Prompt.
 * 2. Tujuh Mode Optimasi Terarah:
 *    - Balanced Optimization: Peningkatan seimbang dan harmonis.
 *    - Detail Enhancement: Memperjelas detail mikro, tekstur, material, dan ketajaman.
 *    - Composition Optimization: Memperjelas framing, sudut kamera, perspektif, dan leading lines.
 *    - Photorealism Optimization: Memperkuat estetika fotografi otentik dan gradasi alami.
 *    - Creative Optimization: Meningkatkan kedalaman atmosfer, mood, dan visual storytelling.
 *    - Commercial Stock Optimization: Menyesuaikan untuk stock photography, layout iklan, dan copy space.
 *    - Minimal Change: Polesan minimal dengan preservasi struktur inti sumber secara maksimal.
 * 3. Instruction Lock (Satu Sumber Status - Checkbox Driven):
 *    - Wajah (/facelock), Pakaian (/outfitlock), Pose (/poselock, /bodyshape), Warna (/colorpreserve),
 *      Rasio Aspek (--ar), dan Elemen Kustom.
 */

import { toAiEnglishPrompt } from './promptEnglishTranslator.js';
import { applyAspectRatioToPrompt } from './promptVariationEngine.js';

export const OPTIMIZATION_MODES = {
  BALANCED: {
    id: 'balanced',
    name: 'Balanced Optimization',
    icon: '⚖️',
    description: 'Peningkatan menyeluruh secara harmonis antara subjek, pencahayaan, tekstur, dan komposisi.',
    directives: [
      {
        title: 'Harmonious Visual Balance',
        additive: 'balanced natural lighting, clear optical subject separation, refined atmospheric depth, clean professional photographic finish',
        recommendedShorthands: ['/realistic', '/softlight']
      },
      {
        title: 'Cinematic Ambient Polish',
        additive: 'subtle cinematic atmosphere, calibrated organic contrast roll-off, balanced tonal clarity, highly refined visual coherence',
        recommendedShorthands: ['/cinematic']
      },
      {
        title: 'Pristine Subject Definition',
        additive: 'crisp tactile focal definition, harmonious ambient environment integration, nuanced shadows, lifelike depth of field',
        recommendedShorthands: ['/enhance']
      },
      {
        title: 'Polished Editorial Coherence',
        additive: 'sophisticated tonal harmony, balanced natural exposure, refined midtone details, professional magazine editorial aesthetic',
        recommendedShorthands: ['/rawphoto']
      },
      {
        title: 'Dynamic Nuanced Harmony',
        additive: 'delicate light interplay, natural dimensionality, realistic environmental reflections, authentic true-to-life presence',
        recommendedShorthands: ['/goldenhour']
      }
    ]
  },
  DETAIL: {
    id: 'detail',
    name: 'Detail Enhancement',
    icon: '🔬',
    description: 'Memperjelas detail mikro, tekstur permukaan, materialitas, dan ketajaman pencahayaan.',
    directives: [
      {
        title: 'Micro-Texture Fidelity',
        additive: 'intricate micro-surface textures, pores, fine textile weaves, tactile surface fidelity, razor-sharp optical clarity',
        recommendedShorthands: ['/highdetail', '/cleandetail']
      },
      {
        title: 'Hyper-Refined Surface Polish',
        additive: 'pristine high-frequency edge definition, authentic tangible material depth, crisp specular micro-reflections',
        recommendedShorthands: ['/detailpreservation', '/sharpen']
      },
      {
        title: 'Tactile Environmental Detailing',
        additive: 'ultra-detailed atmospheric particles, subtle surface imperfections, rich granular material definition, 8k photographic resolution',
        recommendedShorthands: ['/texturepreservation']
      },
      {
        title: 'Textural Subtlety & Depth',
        additive: 'nuanced surface lighting accents, tangible organic textures, refined high-fidelity micro-contrast',
        recommendedShorthands: ['/highresolution']
      },
      {
        title: 'Sculpted Edge Precision',
        additive: 'crisp edge separation without artificial halos, authentic physical materiality, rich detailed gradation',
        recommendedShorthands: ['/highdetail']
      }
    ]
  },
  COMPOSITION: {
    id: 'composition',
    name: 'Composition Optimization',
    icon: '📐',
    description: 'Memperjelas framing kamera, sudut pandang, jarak fokal, dan keseimbangan spasial.',
    directives: [
      {
        title: 'Rule of Thirds Master Framing',
        additive: 'calibrated rule of thirds framing, balanced geometric alignment, dynamic visual flow, clean negative breathing space',
        recommendedShorthands: ['/ruleofthirds']
      },
      {
        title: 'Cinematic Depth & Leading Lines',
        additive: 'dramatic three-dimensional foreground-to-background spatial depth, subtle leading lines directing focus, layered perspective',
        recommendedShorthands: ['/shallowdof']
      },
      {
        title: 'Focused Dynamic Framing',
        additive: 'intentional focal hierarchy, cinematic 50mm natural perspective, grounded spatial placement, balanced weight distribution',
        recommendedShorthands: ['/compositionbalance']
      },
      {
        title: 'Expansive Environmental Context',
        additive: 'wide panoramic vista framing, atmospheric spatial relationship between subject and environment, golden ratio composition',
        recommendedShorthands: ['/wideangle']
      },
      {
        title: 'Dynamic Low-Perspective Angle',
        additive: 'slight low-angle heroic elevation, dynamic architectural lines, grounded spatial proportion',
        recommendedShorthands: ['/eyelevel']
      }
    ]
  },
  PHOTOREALISM: {
    id: 'photorealism',
    name: 'Photorealism Optimization',
    icon: '📸',
    description: 'Memperkuat arahan realisme fotografi otentik, sensor grain, dan gradasi warna sensor alami.',
    directives: [
      {
        title: 'Authentic 35mm Optical Realism',
        additive: 'authentic 35mm optical capture, natural chromatic aberration roll-off, organic camera sensor dynamic range, unfiltered photographic fidelity',
        recommendedShorthands: ['/rawphoto', '/naturalprocessing']
      },
      {
        title: 'Natural Photographic Exposure',
        additive: 'truthful exposure latitude, uncompressed organic shadows, subtle analog sensor grain, zero plastic waxy skin rendering',
        recommendedShorthands: ['/rawphoto', '/naturaltone']
      },
      {
        title: 'Documentary Candid Authenticity',
        additive: 'candid photojournalistic realism, unscripted ambient lighting, truthful organic textures, genuine physical presence',
        recommendedShorthands: ['/rawphoto']
      },
      {
        title: 'Medium Format Studio Fidelity',
        additive: 'Hasselblad medium format aesthetic, creamy falloff, immaculate color rendition, believable natural shadows',
        recommendedShorthands: ['/studiobg', '/rawphoto']
      },
      {
        title: 'Natural Optical Bokeh & Depth',
        additive: 'shallow f/1.8 optical depth of field, natural circular bokeh discs, soft organic highlight gradation',
        recommendedShorthands: ['/bokeh', '/shallowdof']
      }
    ]
  },
  CREATIVE: {
    id: 'creative',
    name: 'Creative Optimization',
    icon: '🎨',
    description: 'Meningkatkan kedalaman atmosfer, mood sinematik, dan visual storytelling yang kaya.',
    directives: [
      {
        title: 'Atmospheric Mood & Narrative',
        additive: 'evocative cinematic mood, atmospheric haze and volumetric rays, rich emotional storytelling tone, layered visual intrigue',
        recommendedShorthands: ['/cinematic', '/dynamicrange']
      },
      {
        title: 'Poetic Visual Metaphor',
        additive: 'subtle poetic visual symbolism, contemplative atmospheric density, lyrical color harmony, dynamic narrative tension',
        recommendedShorthands: ['/colorgrade']
      },
      {
        title: 'Neo-Cinematic Contrast Roll-off',
        additive: 'moody chiaroscuro contrasts, stylized ambient color bleed, expressive ambient lighting accents, captivating visual drama',
        recommendedShorthands: ['/cinematic']
      },
      {
        title: 'Dreamlike Ethereal Glow',
        additive: 'delicate ethereal luminescence, soft diffused highlight halation, dreamy atmospheric mist, evocative visual mystery',
        recommendedShorthands: ['/goldenhour']
      },
      {
        title: 'Stylized Conceptual Polish',
        additive: 'bold conceptual color temperature contrast, distinctive aesthetic signature, atmospheric narrative depth',
        recommendedShorthands: ['/vintage']
      }
    ]
  },
  COMMERCIAL_STOCK: {
    id: 'commercial_stock',
    name: 'Commercial Stock Optimization',
    icon: '💼',
    description: 'Menyesuaikan prompt untuk kebutuhan fotografi komersial, periklanan, dan stock photography.',
    directives: [
      {
        title: 'Clean Copy Space Advertising Layout',
        additive: 'asymmetrical composition with clean negative copy space for headline typography, professional advertising layout, welcoming atmosphere',
        recommendedShorthands: ['/cleandetail', '/studiobg']
      },
      {
        title: 'Authentic Lifestyle Hero',
        additive: 'relatable authentic lifestyle photography, bright welcoming natural daylight, premium commercial lookbook aesthetic',
        recommendedShorthands: ['/daylight', '/realistic']
      },
      {
        title: 'Corporate Brand Identity Polish',
        additive: 'sophisticated corporate brand identity, trustworthy modern atmosphere, clean polished color harmony, premium executive look',
        recommendedShorthands: ['/colorbalance']
      },
      {
        title: 'Luxury Editorial Product Showcase',
        additive: 'impeccable commercial showcase, tactile surface materials, perfectionist lighting alignment, high-end catalog quality',
        recommendedShorthands: ['/highresolution', '/studiobg']
      },
      {
        title: 'Vibrant Commercial Stock Presence',
        additive: 'optimistic commercial stock appeal, bright clean tonal grading, versatile multi-platform marketing usability',
        recommendedShorthands: ['/enhance']
      }
    ]
  },
  MINIMAL_CHANGE: {
    id: 'minimal_change',
    name: 'Minimal Change',
    icon: '✨',
    description: 'Polesan minimal dan presisi tinggi, mempertahankan struktur dan maksud sumber semaksimal mungkin.',
    directives: [
      {
        title: 'Gentle Tonal Polishing',
        additive: 'refined natural clarity, clean visual coherence, subtle optical polish without altering original intent',
        recommendedShorthands: []
      },
      {
        title: 'Precision Syntax Cleanup',
        additive: 'cohesive AI image prompt phrasing, enhanced descriptive flow, faithful original subject preservation',
        recommendedShorthands: []
      },
      {
        title: 'Natural Realism Preservation',
        additive: 'subtle organic realism touch, pristine edge cleanliness, true-to-source fidelity',
        recommendedShorthands: []
      },
      {
        title: 'Harmonious Balance Touch',
        additive: 'balanced visual polish, respectful of original subject framing and setting',
        recommendedShorthands: []
      },
      {
        title: 'Clean Structural Alignment',
        additive: 'clear descriptive precision, natural lighting balance, preserved narrative tone',
        recommendedShorthands: []
      }
    ]
  }
};

/**
 * Ekstrak seluruh token shorthand (dimulai dengan '/') dari teks prompt
 */
export function extractShorthandTokens(text = '') {
  if (!text || typeof text !== 'string') return [];
  const matches = text.match(/\/[a-zA-Z0-9_-]+/g);
  return matches ? Array.from(new Set(matches.map(m => m.toLowerCase()))) : [];
}

/**
 * Memetakan shorthand yang ada pada prompt dengan Catalog resmi
 */
export function identifyRecognizedShorthands(promptText = '', catalog = []) {
  const tokens = extractShorthandTokens(promptText);
  if (!tokens.length) return [];

  const catalogMap = new Map();
  if (Array.isArray(catalog)) {
    for (const item of catalog) {
      if (item && item.code) {
        catalogMap.set(item.code.toLowerCase(), item);
      }
    }
  }

  return tokens
    .map(token => {
      const entry = catalogMap.get(token);
      if (!entry) return null;
      return {
        code: entry.code || token,
        name: entry.name || token.replace(/^\//, '').replace(/_/g, ' '),
        category: entry.category || 'Shorthand Tag',
        isKnown: true
      };
    })
    .filter(Boolean);
}

/**
 * Mendeteksi adanya benturan atau konflik instruksi terhadap Instruction Lock yang aktif
 */
export function detectInstructionConflicts(promptText = '', lockedConfig = {}) {
  const conflicts = [];
  const lower = (promptText || '').toLowerCase();

  // 1. Face lock conflict: jika facelock aktif namun ada instruksi ubah wajah / ekspresi ekstrim baru
  if (lockedConfig.face) {
    if (lower.includes('change face') || lower.includes('different face') || lower.includes('distorted face') || lower.includes('ugly face') || lower.includes('/faceswap') || lower.includes('altering smile') || lower.includes('alter face')) {
      conflicts.push('Instruksi modifikasi wajah bertentangan dengan Wajah (/facelock) yang sedang dilindungi.');
    }
  }

  // 2. Outfit lock conflict: jika outfitlock aktif namun ada perubahan baju
  if (lockedConfig.outfit) {
    if (lower.includes('change outfit') || lower.includes('different clothes') || lower.includes('strip clothes') || lower.includes('recolor clothes') || lower.includes('/outfitswap')) {
      conflicts.push('Instruksi perubahan pakaian bertentangan dengan Pakaian (/outfitlock) yang sedang dilindungi.');
    }
  }

  // 3. Pose lock conflict: jika poselock aktif namun ada perubahan pose
  if (lockedConfig.pose) {
    if (lower.includes('running mid-stride') || lower.includes('sitting on floor') || lower.includes('jumping dynamic') || lower.includes('change pose')) {
      conflicts.push('Instruksi pose baru bertentangan dengan Pose (/poselock) yang sedang dilindungi.');
    }
  }

  // 4. Color preserve conflict
  if (lockedConfig.color) {
    if (lower.includes('monochrome black and white') || lower.includes('inverted neon palette') || lower.includes('neon recolor') || lower.includes('recolor')) {
      conflicts.push('Instruksi palet warna bertentangan dengan Palet Warna (/colorpreserve) yang sedang dilindungi.');
    }
  }

  // 5. Custom lock conflict
  if (lockedConfig.custom && lockedConfig.custom.trim()) {
    const c = lockedConfig.custom.trim().toLowerCase();
    if (lower.includes(`remove ${c}`) || lower.includes(`without ${c}`) || lower.includes(`replace ${c}`)) {
      conflicts.push(`Instruksi modifikasi bertentangan dengan elemen kustom "${lockedConfig.custom}" yang dilindungi.`);
    }
  }

  return conflicts;
}

/**
 * Menerapkan Instruction Lock ke teks prompt secara konsisten
 */
export function enforceInstructionLocks(promptText = '', lockedConfig = {}) {
  let result = (promptText || '').trim();
  const tokens = new Set(extractShorthandTokens(result));

  // 1. Wajah: /facelock
  if (lockedConfig.face) {
    if (!tokens.has('/facelock')) {
      result = `${result}, /facelock`;
      tokens.add('/facelock');
    }
  } else {
    result = result.replace(/(?:,\s*)?\/facelock\b/gi, '').trim();
  }

  // 2. Pakaian: /outfitlock
  if (lockedConfig.outfit) {
    if (!tokens.has('/outfitlock')) {
      result = `${result}, /outfitlock`;
      tokens.add('/outfitlock');
    }
  } else {
    result = result.replace(/(?:,\s*)?\/outfitlock\b/gi, '').trim();
  }

  // 3. Pose & Proporsi: /poselock
  if (lockedConfig.pose) {
    if (!tokens.has('/poselock')) {
      result = `${result}, /poselock`;
      tokens.add('/poselock');
    }
  } else {
    result = result.replace(/(?:,\s*)?\/poselock\b/gi, '').trim();
  }

  // 4. Palet Warna: /colorpreserve
  if (lockedConfig.color) {
    if (!tokens.has('/colorpreserve')) {
      result = `${result}, /colorpreserve`;
      tokens.add('/colorpreserve');
    }
  } else {
    result = result.replace(/(?:,\s*)?\/colorpreserve\b/gi, '').trim();
  }

  // 5. Elemen Kustom
  if (lockedConfig.custom && lockedConfig.custom.trim()) {
    const customText = lockedConfig.custom.trim();
    if (!result.toLowerCase().includes(customText.toLowerCase())) {
      result = `${result}, [PRESERVE: ${customText}]`;
    }
  }

  // Bersihkan koma dobel atau koma di tepi
  result = result.replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '').trim();
  return result;
}

/**
 * Menghasilkan ringkasan perubahan yang deskriptif dan mudah dipahami
 */
export function generateChangeSummary(modeInfo, directiveInfo, lockedConfig = {}, shorthandsAdded = []) {
  const parts = [];

  parts.push(`Dioptimalkan dengan fokus **${modeInfo.name}**.`);
  if (directiveInfo && directiveInfo.title) {
    parts.push(`Peningkatan: *${directiveInfo.title}*.`);
  }

  const activeLocks = [];
  if (lockedConfig.face) activeLocks.push('Wajah');
  if (lockedConfig.outfit) activeLocks.push('Pakaian');
  if (lockedConfig.pose) activeLocks.push('Pose');
  if (lockedConfig.color) activeLocks.push('Warna');
  if (lockedConfig.aspectRatio) activeLocks.push('Rasio Aspek');
  if (lockedConfig.custom) activeLocks.push(`"${lockedConfig.custom.trim()}"`);

  if (activeLocks.length > 0) {
    parts.push(`Proteksi instruksi: ${activeLocks.join(', ')} dilindungi penuh.`);
  }

  if (shorthandsAdded.length > 0) {
    parts.push(`Shorthand terkait: ${shorthandsAdded.join(' ')}.`);
  }

  return parts.join(' ');
}

/**
 * Heuristic Optimization Engine (Offline / Standalone / Fallback)
 * Menghasilkan variasi prompt optimasi secara deterministik tanpa ketergantungan API eksternal.
 */
export function optimizePromptHeuristic({
  basePrompt = '',
  mode = 'balanced',
  count = 3,
  lockedConfig = {
    face: false,
    outfit: false,
    pose: false,
    color: false,
    aspectRatio: true,
    custom: ''
  },
  catalog = [],
  detectedRatio = null
} = {}) {
  const cleanBase = (basePrompt || '').trim();
  if (!cleanBase) return [];

  // Ambil strategi mode
  const modeKey = (mode || 'balanced').toUpperCase();
  const modeInfo = OPTIMIZATION_MODES[modeKey] || OPTIMIZATION_MODES.BALANCED;
  const directives = modeInfo.directives || [];

  // Deteksi rasio yang ada pada base prompt jika pengguna ingin mempertahankan rasio
  let ratioToApply = null;
  if (lockedConfig.aspectRatio) {
    const arMatch = cleanBase.match(/--ar\s+([0-9.:]+)/i);
    if (arMatch) {
      ratioToApply = arMatch[1].trim();
    } else if (detectedRatio) {
      ratioToApply = detectedRatio;
    }
  }

  // Bersihkan base prompt dari parameter rasio lama terlebih dahulu untuk pengolahan
  const baseWithoutRatio = cleanBase.replace(/\s*--ar\s+[0-9]+(?:\.[0-9]+)?\s*:\s*[0-9]+(?:\.[0-9]+)?/gi, '').trim();

  // Pastikan bahasa Inggris terstruktur jika prompt masih bercampur bahasa Indonesia
  const englishBase = toAiEnglishPrompt(baseWithoutRatio);

  const results = [];
  const totalVersions = Math.min(Math.max(parseInt(count, 10) || 3, 1), 5);

  for (let i = 0; i < totalVersions; i++) {
    const directive = directives[i % directives.length] || directives[0];
    const versionName = `Versi ${i + 1} — ${directive.title || modeInfo.name}`;

    // Bangun prompt hasil optimasi
    let candidate = `${englishBase}, ${directive.additive}`;

    // Sisipkan shorthand rekomendasi jika belum ada
    const existingTokens = new Set(extractShorthandTokens(candidate));
    const addedShorthands = [];
    if (Array.isArray(directive.recommendedShorthands)) {
      for (const sh of directive.recommendedShorthands) {
        if (!existingTokens.has(sh.toLowerCase())) {
          candidate = `${candidate}, ${sh}`;
          existingTokens.add(sh.toLowerCase());
          addedShorthands.push(sh);
        }
      }
    }

    // Terapkan Instruction Lock
    candidate = enforceInstructionLocks(candidate, lockedConfig);

    // Terapkan Rasio Aspek jika dilindungi dan tersedia
    if (ratioToApply) {
      candidate = applyAspectRatioToPrompt(candidate, ratioToApply);
    }

    // Identifikasi shorthand yang dikenali
    const recognizedShorthands = identifyRecognizedShorthands(candidate, catalog);

    // Deteksi potensi konflik instruksi
    const conflicts = detectInstructionConflicts(candidate, lockedConfig);

    // Hasilkan ringkasan perubahan
    const summary = generateChangeSummary(modeInfo, directive, lockedConfig, addedShorthands);

    results.push({
      id: `opt_v${i + 1}_${Date.now()}`,
      versionNumber: i + 1,
      versionName,
      mode: modeInfo.id,
      modeName: modeInfo.name,
      prompt: candidate,
      originalPrompt: cleanBase,
      summary,
      recognizedShorthands,
      conflicts,
      directiveUsed: directive.title
    });
  }

  return results;
}

/**
 * Membangun Prompt Sistem untuk Gemini AI saat optimasi online aktif
 */
export function buildOptimizerSystemPrompt({ mode = 'balanced', lockedConfig = {}, catalog = [] } = {}) {
  const modeKey = (mode || 'balanced').toUpperCase();
  const modeInfo = OPTIMIZATION_MODES[modeKey] || OPTIMIZATION_MODES.BALANCED;

  const catalogSummary = (catalog || [])
    .slice(0, 50)
    .map(c => `${c.code}: ${c.name} (${c.description || ''})`)
    .join('\n');

  return `You are the Expert AI Image Prompt Optimizer for PROMPT SHORTHAND ANALYZER V3.8.
Your job is to optimize the user's image generation prompt based strictly on the chosen optimization mode: "${modeInfo.name}".
Mode Objective: ${modeInfo.description}

RULES & CONSTRAINTS:
1. Maintain the core subject, intent, and primary narrative of the source prompt.
2. Produce professional AI image generator prompts (clean, highly descriptive, optical terminology).
3. Do not add conversational filler ("Here is the prompt", "Sure!"). Output ONLY structured JSON.
4. INSTRUCTION LOCKS:
   - Face Lock: ${lockedConfig.face ? 'STRICTLY LOCKED (/facelock). Never modify face/facial features.' : 'Unlocked'}
   - Outfit Lock: ${lockedConfig.outfit ? 'STRICTLY LOCKED (/outfitlock). Never modify clothes/attire.' : 'Unlocked'}
   - Pose Lock: ${lockedConfig.pose ? 'STRICTLY LOCKED (/poselock). Never alter physical pose/body proportions.' : 'Unlocked'}
   - Color Lock: ${lockedConfig.color ? 'STRICTLY LOCKED (/colorpreserve). Preserve color palette.' : 'Unlocked'}
   - Aspect Ratio: ${lockedConfig.aspectRatio ? 'Preserve any --ar flag exactly as provided.' : 'Optional'}
   ${lockedConfig.custom ? `- Custom Constraint: Must preserve "${lockedConfig.custom}".` : ''}

KNOWN SHORTHAND CATALOG REFERENCE:
${catalogSummary}

RETURN JSON FORMAT:
{
  "versions": [
    {
      "versionName": "Versi 1 — Short descriptive title",
      "prompt": "Optimized prompt string with appropriate shorthands and locks",
      "summary": "Clear Indonesian summary of visual enhancements and protections applied"
    }
  ]
}`;
}
