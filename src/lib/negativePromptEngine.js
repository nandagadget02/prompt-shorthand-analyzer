/**
 * Dynamic Negative Prompt Builder Engine V3.8
 * Menghasilkan prompt negatif berkualitas tinggi secara adaptif
 * berdasarkan analisa prompt positif, shorthand terpasang, dan gaya visual.
 */

export const NEGATIVE_PRESETS = {
  UNIVERSAL: 'universal',
  PHOTOREALISTIC: 'photorealistic',
  PORTRAIT_ANATOMY: 'portrait_anatomy',
  ANIME_ILLUSTRATION: 'anime_illustration',
  MINIMAL: 'minimal'
};

export const DEFAULT_CATEGORY_TERMS = {
  quality: [
    'lowres',
    'worst quality',
    'low quality',
    'blurry',
    'jpeg artifacts',
    'compression artifacts',
    'pixelated',
    'oversaturated',
    'grainy noise'
  ],
  anatomy: [
    'bad anatomy',
    'bad hands',
    'missing fingers',
    'extra fingers',
    'mutated hands',
    'poorly drawn hands',
    'poorly drawn face',
    'mutation',
    'deformed',
    'extra limbs',
    'missing limbs',
    'floating limbs',
    'disconnected limbs',
    'malformed limbs',
    'disfigured',
    'bad body proportions'
  ],
  styleContamination: [
    'cgi',
    '3d render',
    'illustration',
    'cartoon',
    'anime',
    'painting',
    'plastic skin',
    'waxy face',
    'doll face',
    'airbrushed skin',
    'artificial look'
  ],
  watermarkText: [
    'text',
    'watermark',
    'signature',
    'logo',
    'username',
    'artist name',
    'copyright notice',
    'timestamp'
  ],
  compositionLighting: [
    'overexposed',
    'underexposed',
    'harsh flash',
    'blown out highlights',
    'muddy shadows',
    'awkward framing',
    'cut off subject',
    'bad perspective'
  ]
};

/**
 * Mendeteksi profil konteks dari prompt positif dan shorthands terpasang
 */
export function detectPromptProfile(prompt = '', installedShorthands = []) {
  const text = (prompt || '').toLowerCase();
  const codes = (installedShorthands || []).map(s => (typeof s === 'string' ? s : s.code || '').toLowerCase());

  const hasHumanSubject = /woman|man|girl|boy|person|portrait|face|model|female|male|selfie|pose|hand|eyes|skin/i.test(text) ||
    codes.some(c => /facelock|bodyshape|agepreserve|hairlock|expressionlock/i.test(c));

  const isPhotorealistic = /photo|raw|dslr|canon|sony|nikon|bokeh|lens|film|realistic|8k|hyperrealistic|cinematic/i.test(text) ||
    codes.some(c => /cam_|lens_|raw|photorealistic/i.test(c));

  const isAnimeOrArt = /anime|manga|illustration|drawing|concept art|vector|cartoon|comic|pixiv/i.test(text);

  return {
    hasHumanSubject,
    isPhotorealistic,
    isAnimeOrArt,
    hasLandscape: /landscape|scenery|mountain|city|nature|street|architecture|building/i.test(text)
  };
}

/**
 * Menghasilkan Dynamic Negative Prompt
 * @param {Object} options
 * @param {string} options.prompt - Prompt positif utama
 * @param {Array} options.installedShorthands - Daftar shorthand yang terpasang
 * @param {string} options.preset - Preset pilihan (universal, photorealistic, portrait_anatomy, dll)
 * @param {Object} options.activeCategories - Status aktif tiap kategori { quality: true, anatomy: true, ... }
 * @param {Array<string>} options.customTerms - Kata tambahan dari pengguna
 */
export function buildDynamicNegativePrompt({
  prompt = '',
  installedShorthands = [],
  preset = NEGATIVE_PRESETS.UNIVERSAL,
  activeCategories = {
    quality: true,
    anatomy: true,
    styleContamination: true,
    watermarkText: true,
    compositionLighting: true
  },
  customTerms = []
} = {}) {
  const profile = detectPromptProfile(prompt, installedShorthands);
  const terms = [];

  // 1. Kualitas dasar (Quality)
  if (activeCategories.quality) {
    terms.push(...DEFAULT_CATEGORY_TERMS.quality);
  }

  // 2. Anatomi Manusia (Anatomy) - jika terdeteksi manusia atau preset portrait
  if (activeCategories.anatomy && (profile.hasHumanSubject || preset === NEGATIVE_PRESETS.PORTRAIT_ANATOMY || preset === NEGATIVE_PRESETS.UNIVERSAL)) {
    terms.push(...DEFAULT_CATEGORY_TERMS.anatomy);
  }

  // 3. Kontaminasi Gaya (Style Contamination)
  if (activeCategories.styleContamination) {
    if (profile.isAnimeOrArt) {
      // Jika mode Anime, cegah efek fotorealistis yang tidak diinginkan
      terms.push('photorealistic', 'real life photography', '3d render', 'realistic texture');
    } else {
      // Default (fotografi/realistis): cegah efek CGI, kartun, dan plastik
      terms.push(...DEFAULT_CATEGORY_TERMS.styleContamination);
    }
  }

  // 4. Teks & Watermark (Watermark & Text)
  if (activeCategories.watermarkText) {
    terms.push(...DEFAULT_CATEGORY_TERMS.watermarkText);
  }

  // 5. Pencahayaan & Komposisi (Composition & Lighting)
  if (activeCategories.compositionLighting) {
    terms.push(...DEFAULT_CATEGORY_TERMS.compositionLighting);
  }

  // 6. Custom Terms pengguna
  if (Array.isArray(customTerms) && customTerms.length > 0) {
    customTerms.forEach(term => {
      const trimmed = (term || '').trim();
      if (trimmed && !terms.includes(trimmed)) {
        terms.push(trimmed);
      }
    });
  }

  // Deduplikasi istilah dengan menjaga urutan
  const uniqueTerms = Array.from(new Set(terms.map(t => t.trim().toLowerCase()))).filter(Boolean);

  return {
    negativePrompt: uniqueTerms.join(', '),
    termCount: uniqueTerms.length,
    profile,
    activeCategories,
    terms: uniqueTerms
  };
}
