/**
 * Dynamic Negative Prompt Builder Engine V3.8
 * Menghasilkan prompt negatif berkualitas tinggi secara adaptif
 * dalam dua mode operasi:
 * 1. MODE ANALISIS: context-aware berbasis prompt optimal/positif dengan conflict filtering.
 * 2. MODE MANDIRI: mandiri tanpa perlu menjalankan analisis AI terlebih dahulu.
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

  // Deteksi intensi spesifik untuk conflict filtering
  const requestsAnime = /anime|manga|illustration|drawing|concept art|vector|cartoon|comic|pixiv/i.test(text);
  const requestsCgiOr3d = /cgi|3d render|unreal engine|octane render|blender|3d model|3d animation/i.test(text);
  const requestsMotionBlur = /motion blur|action blur|speed blur|dynamic blur/i.test(text);
  const requestsLowKeyOrShadows = /low[- ]?key|dark shadows?|chiaroscuro|deep shadows?|silhouette|moody shadows?/i.test(text);
  const requestsFilmGrain = /film grain|vintage grain|analog noise|grainy texture|kodak|fujifilm/i.test(text);
  const requestsCroppedOrFraming = /close[- ]?up|tight framing|cropped (subject|portrait|face)|macro shot/i.test(text);
  const requestsLogoOrText = /(keep|preserve|show|showing|display|with|visible|featuring|contain).{0,40}(logo|watermark|text|brand|signature)|(brand|product|official) logo/i.test(text);

  return {
    hasHumanSubject,
    isPhotorealistic,
    isAnimeOrArt,
    hasLandscape: /landscape|scenery|mountain|city|nature|street|architecture|building/i.test(text),
    requestsAnime,
    requestsCgiOr3d,
    requestsMotionBlur,
    requestsLowKeyOrShadows,
    requestsFilmGrain,
    requestsCroppedOrFraming,
    requestsLogoOrText
  };
}

/**
 * Filter istilah negatif yang bertentangan dengan prompt positif (Conflict Detection)
 */
export function filterConflicts(terms = [], profile = {}) {
  const conflictsDetected = [];
  const filtered = terms.filter(term => {
    const t = term.toLowerCase().trim();

    // 1. Jika prompt meminta anime/ilustrasi, jangan larang anime/illustration/cartoon/painting/drawing
    if (profile.requestsAnime && ['illustration', 'cartoon', 'anime', 'drawing', 'painting'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta gaya anime / ilustrasi' });
      return false;
    }

    // 2. Jika prompt meminta CGI/3D, jangan larang cgi dan 3d render
    if (profile.requestsCgiOr3d && ['cgi', '3d render'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta render CGI / 3D' });
      return false;
    }

    // 3. Jika prompt meminta motion blur, jangan larang blurry
    if (profile.requestsMotionBlur && ['blurry'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta efek motion blur' });
      return false;
    }

    // 4. Jika prompt meminta pencahayaan low-key / bayangan dalam, jangan larang muddy shadows & underexposed
    if (profile.requestsLowKeyOrShadows && ['muddy shadows', 'underexposed'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta pencahayaan low-key / bayangan dramatis' });
      return false;
    }

    // 5. Jika prompt meminta film grain / analog, jangan larang grainy noise
    if (profile.requestsFilmGrain && ['grainy noise'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta tekstur film grain' });
      return false;
    }

    // 6. Jika prompt meminta framing terpotong artistik, jangan larang awkward framing & cut off subject
    if (profile.requestsCroppedOrFraming && ['awkward framing', 'cut off subject'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta framing close-up / artistik' });
      return false;
    }

    // 7. Jika prompt meminta logo/tulisan dipertahankan
    if (profile.requestsLogoOrText && ['logo', 'watermark', 'signature', 'text'].includes(t)) {
      conflictsDetected.push({ term, reason: 'Prompt positif meminta logo / watermark dipertahankan' });
      return false;
    }

    return true;
  });

  return { filtered, conflictsDetected };
}

/**
 * Menghasilkan Dynamic Negative Prompt
 * 100% tersinkronisasi dengan PROMPT OPTIMAL sebagai SATU-SATUNYA sumber data.
 * - Jika PROMPT OPTIMAL kosong atau whitespace, hasil wajib kosong sepenuhnya (0 istilah).
 * - Jika PROMPT OPTIMAL berisi teks, hasilkan negative prompt relevan sesuai isi prompt.
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
  customTerms = [],
  analysisStatus = 'IDLE'
} = {}) {
  // PROMPT OPTIMAL menjadi satu-satunya sumber data (tanpa fallback input mentah)
  const cleanOptimalPrompt = (prompt && typeof prompt === 'string') ? prompt.trim() : '';

  // KONDISI A: PROMPT OPTIMAL KOSONG / HANYA WHITESPACE
  if (!cleanOptimalPrompt) {
    return {
      negativePrompt: '',
      termCount: 0,
      profile: {
        hasHumanSubject: false,
        isPhotorealistic: false,
        isAnimeOrArt: false,
        hasLandscape: false,
        requestsAnime: false,
        requestsCgiOr3d: false,
        requestsMotionBlur: false,
        requestsLowKeyOrShadows: false,
        requestsFilmGrain: false,
        requestsCroppedOrFraming: false,
        requestsLogoOrText: false
      },
      activeCategories,
      terms: [],
      mode: 'EMPTY',
      modeLabel: 'MENUNGGU PROMPT OPTIMAL',
      conflictsDetected: [],
      conflictsResolved: [],
      emptyStateMessage: 'Prompt Optimal belum tersedia. Lakukan analisis prompt terlebih dahulu untuk menghasilkan negative prompt otomatis.',
      effectivePrompt: ''
    };
  }

  // KONDISI B: PROMPT OPTIMAL TERISI
  // Ekstrak shorthand dari prompt jika belum terdaftar
  const embeddedShorthands = (cleanOptimalPrompt.match(/\/[a-zA-Z0-9_-]+/g) || []);
  const allShorthands = Array.from(new Set([...(installedShorthands || []), ...embeddedShorthands]));

  const profile = detectPromptProfile(cleanOptimalPrompt, allShorthands);
  let terms = [];

  // 1. Kategori Kualitas (Quality): Mencegah degradasi visual render
  if (activeCategories.quality) {
    terms.push(...DEFAULT_CATEGORY_TERMS.quality);
  }

  // 2. Kategori Anatomi (Anatomy): HANYA relevan jika PROMPT OPTIMAL memuat subjek manusia/karakter
  if (activeCategories.anatomy) {
    if (profile.hasHumanSubject) {
      terms.push(...DEFAULT_CATEGORY_TERMS.anatomy);
    }
  }

  // 3. Kategori Kontaminasi Gaya (Style Contamination): Relevan terhadap gaya prompt
  if (activeCategories.styleContamination) {
    terms.push(...DEFAULT_CATEGORY_TERMS.styleContamination);
    if (profile.isAnimeOrArt) {
      // Jika prompt adalah anime/seni, cegah kontaminasi fotorealistis
      terms.push('photorealistic', 'real life photography', 'realistic texture');
    }
  }

  // 4. Kategori Watermark & Teks: Cegah artefak teks dan tanda air
  if (activeCategories.watermarkText) {
    terms.push(...DEFAULT_CATEGORY_TERMS.watermarkText);
  }

  // 5. Kategori Pencahayaan & Komposisi: Cegah pencahayaan rusak dan framing canggung
  if (activeCategories.compositionLighting) {
    terms.push(...DEFAULT_CATEGORY_TERMS.compositionLighting);
  }

  // 6. Custom Terms Pengguna (jika ada)
  if (Array.isArray(customTerms) && customTerms.length > 0) {
    customTerms.forEach(term => {
      const trimmed = (term || '').trim();
      if (trimmed && !terms.includes(trimmed)) {
        terms.push(trimmed);
      }
    });
  }

  // Conflict Detection & Filtering berbasis PROMPT OPTIMAL
  const conflictResult = filterConflicts(terms, profile);
  terms = conflictResult.filtered;
  const conflictsDetected = conflictResult.conflictsDetected;

  // Normalisasi & Deduplikasi Istilah
  const seen = new Set();
  const uniqueTerms = [];
  for (const t of terms) {
    if (!t) continue;
    const clean = t.trim().toLowerCase();
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      uniqueTerms.push(clean);
    }
  }

  const emptyStateMessage = uniqueTerms.length === 0
    ? 'Tidak ditemukan kebutuhan negative prompt relevan atau seluruh kategori proteksi dinonaktifkan.'
    : '';

  return {
    negativePrompt: uniqueTerms.join(', '),
    termCount: uniqueTerms.length,
    profile,
    activeCategories,
    terms: uniqueTerms,
    mode: 'ANALYSIS',
    modeLabel: 'TERHUBUNG KE PROMPT OPTIMAL',
    conflictsDetected,
    conflictsResolved: conflictsDetected,
    emptyStateMessage,
    effectivePrompt: cleanOptimalPrompt
  };
}
