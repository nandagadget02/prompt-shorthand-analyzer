/**
 * Prompt Variation Engine V3.8
 * 
 * Bertanggung jawab menghasilkan ide variasi prompt berbasis:
 * 1. Tiga Sumber Input:
 *    - PREVIOUS_ANALYSIS: Menggunakan context analisa aktif (optimalPrompt, shorthands, visionData).
 *    - NEW_IMAGE: Menggunakan gambar referensi baru mandiri tanpa merusak context lama.
 *    - CUSTOM_PROMPT: Menggunakan teks prompt biasa, prompt bershorthand, atau kombinasi keduanya.
 * 2. Enam Pendekatan Kreatif Independen:
 *    - Komposisi & Framing (composition_framing)
 *    - Lingkungan & Latar Belakang (environment_background)
 *    - Suasana & Pencahayaan (lighting_mood)
 *    - Gaya Visual & Estetika (visual_style)
 *    - Konsep Kreatif & Storytelling (creative_concept)
 *    - Fotografi Komersial & Stock Photography (commercial_stock)
 * 3. Instruction Lock (Satu Sumber Status - Checkbox Driven):
 *    - Wajah (/facelock), Outfit (/outfitlock), Pose/Proporsi (/poselock, /bodyshape), Palet Warna (/colorpreserve).
 *    - Custom user locked instructions.
 *    - Aturan Pose: Jika lock pose NONAKTIF (false), engine secara aktif menghasilkan variasi pose fisik subjek yang berbeda.
 *    - Jika seluruh pendekatan nonaktif, engine menghasilkan variasi nuansa natural tanpa memaksakan pendekatan yang tidak dipilih.
 */

export const VARIATION_APPROACHES = {
  COMPOSITION_FRAMING: {
    id: 'composition_framing',
    label: 'Komposisi & Framing',
    description: 'Variasi sudut kamera, jarak fokal, framing, dan perspektif visual.',
    modifiers: [
      {
        name: 'Wide Cinematic Vista',
        directive: 'wide-angle 24mm panoramic shot, expansive environment framing, rule of thirds placement',
        shorthands: ['/cam_wide']
      },
      {
        name: 'Intimate Close-up Portrait',
        directive: 'tight 85mm portrait framing, shallow depth of field, focused subject emphasis',
        shorthands: ['/cam_portrait']
      },
      {
        name: 'Dynamic Low-Angle Hero Shot',
        directive: 'dramatic low-angle upward perspective, monumental presence, dynamic ground-level framing',
        shorthands: ['/cam_low']
      },
      {
        name: 'Overhead Bird-Eye View',
        directive: 'high-angle top-down geometric overhead perspective, spatial architectural arrangement',
        shorthands: ['/cam_topdown']
      },
      {
        name: 'Dutch Angle Action Framing',
        directive: 'subtle tilted Dutch angle framing, dynamic tension, diagonal leading lines',
        shorthands: ['/cam_dynamic']
      }
    ]
  },
  ENVIRONMENT_BACKGROUND: {
    id: 'environment_background',
    label: 'Lingkungan & Latar',
    description: 'Variasi setting tempat, background, dan atmosfer lokasi.',
    modifiers: [
      {
        name: 'Metropolitan Urban Street',
        directive: 'bustling modern metropolis street background, blurred architectural bokeh, reflections on glass facades',
        shorthands: ['/env_urban']
      },
      {
        name: 'Minimalist Studio Space',
        directive: 'ultra-clean minimalist architectural studio interior, raw concrete texture, spacious negative space',
        shorthands: ['/env_studio']
      },
      {
        name: 'Lush Botanical Horizon',
        directive: 'verdant organic botanical greenhouse surroundings, lush tropical foliage, diffused natural canopy',
        shorthands: ['/env_nature']
      },
      {
        name: 'Atmospheric Industrial Loft',
        directive: 'vintage industrial loft setting, exposed brickwork, steel framework, subtle ambient haze',
        shorthands: ['/env_industrial']
      },
      {
        name: 'Coastal Horizon Glow',
        directive: 'serene open coastal seashore horizon, distant calm ocean waves, soft mist atmosphere',
        shorthands: ['/env_coastal']
      }
    ]
  },
  LIGHTING_MOOD: {
    id: 'lighting_mood',
    label: 'Suasana & Pencahayaan',
    description: 'Variasi tata cahaya, temperatur warna, dan mood dramatis.',
    modifiers: [
      {
        name: 'Golden Hour Warm Radiance',
        directive: 'warm sunset golden hour illumination, soft glowing rim highlights, rich amber backlight',
        shorthands: ['/lighting_goldenhour']
      },
      {
        name: 'High-Contrast Studio Chiaroscuro',
        directive: 'dramatic low-key studio lighting, defined rim lighting, deep sculptural shadows, soft fill reflector',
        shorthands: ['/lighting_dramatic']
      },
      {
        name: 'Soft Diffused Overcast Daylight',
        directive: 'gentle north-facing diffused daylight, velvety shadow roll-off, natural even tone gradation',
        shorthands: ['/lighting_natural']
      },
      {
        name: 'Cyberpunk Neon Nocturne',
        directive: 'vibrant dual-tone cyan and magenta neon night illumination, sharp reflective accent edges',
        shorthands: ['/lighting_neon']
      },
      {
        name: 'Ethereal Foggy Dawn',
        directive: 'cool ethereal morning twilight fog, gentle atmospheric light rays filtering through haze',
        shorthands: ['/lighting_dawn']
      }
    ]
  },
  VISUAL_STYLE: {
    id: 'visual_style',
    label: 'Gaya Visual & Estetika',
    description: 'Variasi gaya fotografi, emulasi film, dan sentuhan artistik.',
    modifiers: [
      {
        name: 'Editorial High-Fashion Look',
        directive: 'high-end editorial magazine aesthetics, sharp optical micro-contrast, elegant commercial styling',
        shorthands: ['/style_editorial']
      },
      {
        name: 'Classic 35mm Analog Film',
        directive: 'authentic 35mm color film grain texture, natural halation glow, vintage Kodak Portra aesthetic',
        shorthands: ['/style_35mm']
      },
      {
        name: 'Documentary Candid Realism',
        directive: 'unposed photojournalistic realism, authentic spontaneous moment, honest natural texture',
        shorthands: ['/style_documentary']
      },
      {
        name: 'Fine-Art Minimalist Monochrome',
        directive: 'high-contrast monochrome monochrome tonal scale, deep blacks, luminous highlights, sculptural form',
        shorthands: ['/style_monochrome']
      },
      {
        name: 'Hyper-Detailed Medium Format RAW',
        directive: 'masterpiece Hasselblad 100MP medium format RAW photography, pristine optical clarity',
        shorthands: ['/style_raw']
      }
    ]
  },
  CREATIVE_CONCEPT: {
    id: 'creative_concept',
    label: 'Konsep Kreatif & Storytelling',
    description: 'Variasi narasi visual, momen aksi, dan konsep konseptual.',
    modifiers: [
      {
        name: 'Dynamic Motion Freeze',
        directive: 'high-speed freeze-action capture, suspended particles in mid-air, dynamic kinetic energy',
        shorthands: ['/concept_freeze']
      },
      {
        name: 'Cinematic Storytelling Candid',
        directive: 'cinematic narrative moment, introspective gaze, atmospheric depth, film still storytelling',
        shorthands: ['/concept_cinematic']
      },
      {
        name: 'Surreal Poetic Juxtaposition',
        directive: 'poetic subtle surrealism, dreamlike harmony, unexpected visual interplay',
        shorthands: ['/concept_surreal']
      },
      {
        name: 'Reflective Double Exposure Touch',
        directive: 'subtle layered reflection overlay, multi-dimensional narrative visual texture',
        shorthands: ['/concept_reflection']
      }
    ]
  },
  COMMERCIAL_STOCK: {
    id: 'commercial_stock',
    label: 'Fotografi Komersial & Stock',
    description: 'Variasi siap pakai untuk kebutuhan periklanan, web hero banner, dan stock imagery.',
    modifiers: [
      {
        name: 'Clean Commercial Negative Space',
        directive: 'asymmetrical composition with clean negative copy space for headline typography, professional advertising layout',
        shorthands: ['/stock_copyspace']
      },
      {
        name: 'Authentic Lifestyle Hero',
        directive: 'relatable authentic lifestyle photography, bright welcoming atmosphere, premium commercial lookbook',
        shorthands: ['/stock_lifestyle']
      },
      {
        name: 'Premium Corporate Brand Identity',
        directive: 'sophisticated corporate aesthetic, trustworthy modern atmosphere, clean polished color harmony',
        shorthands: ['/stock_corporate']
      },
      {
        name: 'Luxury Product & Editorial Hero',
        directive: 'impeccable commercial showcase, tactile surface materials, perfectionist lighting alignment',
        shorthands: ['/stock_luxury']
      }
    ]
  }
};

/**
 * Pustaka Pose Subjek Terencana (Digunakan secara aktif ketika Instruction Lock Pose TIDAK DICENTANG)
 */
export const SUBJECT_POSE_VARIATIONS = [
  {
    id: 'pose_seated_relaxed',
    name: 'Duduk Santai Alami',
    directive: 'seated in a relaxed natural posture, hands resting comfortably',
    poseType: 'SEATED'
  },
  {
    id: 'pose_standing_confident',
    name: 'Berdiri Percaya Diri',
    directive: 'standing tall with relaxed confident posture, natural weight shift',
    poseType: 'STANDING'
  },
  {
    id: 'pose_walking_candid',
    name: 'Melangkah Dinamis (Candid)',
    directive: 'captured mid-stride in natural walking motion, spontaneous candid energy',
    poseType: 'WALKING'
  },
  {
    id: 'pose_leaning_casual',
    name: 'Bersandar Santai',
    directive: 'casually leaning against a supportive architectural surface, relaxed expression',
    poseType: 'LEANING'
  },
  {
    id: 'pose_three_quarter_turn',
    name: 'Menoleh Tiga Perempat',
    directive: 'standing in a graceful three-quarter turned profile, gently glancing back toward camera',
    poseType: 'TURNED_PROFILE'
  },
  {
    id: 'pose_seated_low',
    name: 'Duduk Santai Rendah',
    directive: 'seated low with relaxed arms draped comfortably in an intimate grounding posture',
    poseType: 'LOW_SEATED'
  },
  {
    id: 'pose_expressive_gesture',
    name: 'Gestur Tangan Ekspresif',
    directive: 'dynamic posture with hands gesturing expressively and naturally in conversation',
    poseType: 'EXPRESSIVE_GESTURE'
  },
  {
    id: 'pose_arms_crossed_poised',
    name: 'Berdiri Anggun Berwibawa',
    directive: 'poised upright stance with arms loosely folded in front, calm poised presence',
    poseType: 'POISED_STANDING'
  }
];

/**
 * Modifier Nuansa Alami (Digunakan HANYA ketika SELURUH pendekatan kreatif nonaktif)
 * Memastikan variasi tetap dihasilkan tanpa memaksakan perubahan latar, gaya, lighting, atau kamera yang tidak dipilih.
 */
export const NEUTRAL_NUANCE_MODIFIERS = [
  {
    name: 'Natural Depth & Micro-Detail',
    directive: 'pristine optical micro-texture rendering, natural fine surface depth, truthful tonal fidelity',
    approachId: 'neutral_nuance',
    approachLabel: 'Nuansa Alami'
  },
  {
    name: 'Subtle Expressive Nuance',
    directive: 'intimate authentic expression clarity, lifelike organic textures, refined visual balance',
    approachId: 'neutral_nuance',
    approachLabel: 'Nuansa Alami'
  },
  {
    name: 'Clean Organic Definition',
    directive: 'sharp clean subject focus, true-to-life organic materials definition, balanced natural presence',
    approachId: 'neutral_nuance',
    approachLabel: 'Nuansa Alami'
  },
  {
    name: 'Refined Harmonic Polish',
    directive: 'harmonious natural tonality, pristine fine edge separation, balanced organic realism',
    approachId: 'neutral_nuance',
    approachLabel: 'Nuansa Alami'
  },
  {
    name: 'Authentic Photographic Texture',
    directive: 'unfiltered true-to-life photographic texture, natural highlight gradation, crisp tactile detail',
    approachId: 'neutral_nuance',
    approachLabel: 'Nuansa Alami'
  }
];

/**
 * Ekstrak seluruh token shorthand (yang diawali '/') dari sebuah teks
 */
export function extractShorthandTokens(text = '') {
  if (!text || typeof text !== 'string') return [];
  const matches = text.match(/\/[a-zA-Z0-9_-]+/g);
  return matches ? Array.from(new Set(matches.map(m => m.toLowerCase()))) : [];
}

/**
 * Deteksi elemen penguncian yang aktif pada prompt
 * PRINSIP SATU SUMBER STATUS: Status checkbox (manualLocks) adalah penentu mutlak!
 * - checked = true  -> lock AKTIF
 * - checked = false -> lock NONAKTIF (tidak boleh dipaksakan oleh template/preset/token asal)
 */
export function detectInstructionLocks(text = '', installedShorthands = [], manualLocks = {}) {
  // Checkbox status adalah SATU-SATUNYA penentu apakah lock ini aktif secara eksplisit
  const lockFacelock = Boolean(manualLocks.face);
  const lockOutfit = Boolean(manualLocks.outfit);
  const lockPose = Boolean(manualLocks.pose);
  const lockColor = Boolean(manualLocks.color);
  const customLock = (manualLocks.custom || '').trim();

  const activeLocks = [];
  if (lockFacelock) activeLocks.push({ type: 'face', label: 'Identitas Wajah (/facelock)', token: '/facelock' });
  if (lockOutfit) activeLocks.push({ type: 'outfit', label: 'Pakaian & Aksesori (/outfitlock)', token: '/outfitlock' });
  if (lockPose) activeLocks.push({ type: 'pose', label: 'Pose & Proporsi Tubuh (/poselock)', token: '/poselock' });
  if (lockColor) activeLocks.push({ type: 'color', label: 'Palet Warna Dominan (/colorpreserve)', token: '/colorpreserve' });
  if (customLock) activeLocks.push({ type: 'custom', label: `Instruksi Kustom: "${customLock}"`, token: customLock });

  return {
    lockFacelock,
    lockOutfit,
    lockPose,
    lockColor,
    customLock,
    activeLocks,
    lockedTokens: activeLocks.map(l => l.token)
  };
}

/**
 * Memastikan bahwa elemen yang dikunci ditegakkan, dan elemen yang TIDAK dikunci DIBERSIHKAN dari lock otomatis
 */
export function enforceInstructionLocks(variedPrompt = '', originalPrompt = '', locks = {}) {
  let result = variedPrompt.trim();
  const tokensInResult = new Set(extractShorthandTokens(result));

  // 1. POSE LOCK RULE:
  if (!locks.lockPose) {
    // Jika lockPose NONAKTIF, bersihkan token pengunci pose/bodyshape dari prompt hasil
    result = result.replace(/(?:,\s*)?\/(?:poselock|bodyshape)\b/gi, '').trim();
    tokensInResult.delete('/poselock');
    tokensInResult.delete('/bodyshape');
  } else {
    // Jika lockPose AKTIF, tegakkan keberadaan /poselock
    if (!tokensInResult.has('/poselock') && !tokensInResult.has('/bodyshape')) {
      result = `${result}, /poselock`;
      tokensInResult.add('/poselock');
    }
  }

  // 2. OUTFIT LOCK RULE:
  if (!locks.lockOutfit) {
    result = result.replace(/(?:,\s*)?\/outfitlock\b/gi, '').trim();
    tokensInResult.delete('/outfitlock');
  } else {
    if (!tokensInResult.has('/outfitlock')) {
      result = `${result}, /outfitlock`;
      tokensInResult.add('/outfitlock');
    }
  }

  // 3. COLOR PRESERVE RULE:
  if (!locks.lockColor) {
    result = result.replace(/(?:,\s*)?\/colorpreserve\b/gi, '').trim();
    tokensInResult.delete('/colorpreserve');
  } else {
    if (!tokensInResult.has('/colorpreserve')) {
      result = `${result}, /colorpreserve`;
      tokensInResult.add('/colorpreserve');
    }
  }

  // 4. FACE LOCK RULE:
  if (locks.lockFacelock) {
    if (!tokensInResult.has('/facelock')) {
      result = `${result}, /facelock`;
      tokensInResult.add('/facelock');
    }
  }

  // 5. CUSTOM LOCK INSTRUCTION:
  if (locks.customLock && !result.toLowerCase().includes(locks.customLock.toLowerCase())) {
    result = `${result}, preserving ${locks.customLock}`;
  }

  // Bersihkan koma dobel atau koma di ujung string
  result = result.replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '').trim();

  return result;
}

/**
 * 10 Pilihan Rasio Aspek V3.8
 */
export const ASPECT_RATIO_PRESETS = [
  { id: 'auto', label: 'Otomatis (Ikuti Sumber)', shortLabel: 'Otomatis', description: 'Gunakan rasio gambar referensi jika tersedia atau konteks prompt' },
  { id: '1:1', label: '1:1 — Persegi', shortLabel: '1:1', description: 'Square framing (1024x1024), ideal untuk avatar dan posting grid' },
  { id: '3:2', label: '3:2 — Landscape Foto', shortLabel: '3:2', description: 'Format standar fotografi kamera DSLR/mirrorless horizontal' },
  { id: '2:3', label: '2:3 — Portrait Foto', shortLabel: '2:3', description: 'Format standar fotografi potret vertikal' },
  { id: '4:3', label: '4:3 — Landscape Klasik', shortLabel: '4:3', description: 'Rasio klasik display dan cetak fotografi landscape' },
  { id: '3:4', label: '3:4 — Portrait Klasik', shortLabel: '3:4', description: 'Rasio klasik majalah dan fotografi potret' },
  { id: '16:9', label: '16:9 — Widescreen', shortLabel: '16:9', description: 'Standar layar video, desktop, dan sinematik panorama' },
  { id: '9:16', label: '9:16 — Vertikal / Mobile', shortLabel: '9:16', description: 'Format vertikal smartphone penuh (Story, Reels, TikTok)' },
  { id: '21:9', label: '21:9 — Ultrawide', shortLabel: '21:9', description: 'Sinematik anamorphic ultrawide yang sangat dramatis' },
  { id: 'custom', label: 'Bebas / Custom', shortLabel: 'Custom', description: 'Masukkan rasio numerik bebas kustom (contoh: 5:4, 2.35:1)' }
];

/**
 * Validasi string rasio kustom
 * Format yang valid: W:H dengan W dan H angka positif (> 0), dapat berupa integer maupun desimal (misal 5:4, 2.35:1).
 */
export function validateCustomAspectRatio(ratioStr) {
  if (!ratioStr || typeof ratioStr !== 'string') {
    return { valid: false, error: 'Rasio kustom tidak boleh kosong. Masukkan format angka W:H (contoh: 5:4 atau 2.35:1).' };
  }
  const trimmed = ratioStr.trim();
  if (!trimmed) {
    return { valid: false, error: 'Rasio kustom tidak boleh kosong. Masukkan format angka W:H (contoh: 5:4 atau 2.35:1).' };
  }
  const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/);
  if (!match) {
    return { valid: false, error: 'Format rasio kustom tidak valid. Harap gunakan format angka positif W:H (contoh: 5:4 atau 2.35:1).' };
  }
  const w = parseFloat(match[1]);
  const h = parseFloat(match[2]);
  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    return { valid: false, error: 'Nilai lebar dan tinggi rasio kustom harus berupa angka positif yang lebih besar dari nol.' };
  }
  return { valid: true, normalized: `${match[1]}:${match[2]}` };
}

/**
 * Hitung rasio terdekat berdasarkan dimensi piksel (width x height)
 */
export function calculateApproximateRatio(width, height) {
  const w = parseInt(width, 10);
  const h = parseInt(height, 10);
  if (!w || !h || w <= 0 || h <= 0) return null;

  const dec = w / h;
  const standards = [
    { ratio: '1:1', val: 1.0 },
    { ratio: '16:9', val: 16 / 9 },
    { ratio: '9:16', val: 9 / 16 },
    { ratio: '3:2', val: 3 / 2 },
    { ratio: '2:3', val: 2 / 3 },
    { ratio: '4:3', val: 4 / 3 },
    { ratio: '3:4', val: 3 / 4 },
    { ratio: '21:9', val: 21 / 9 }
  ];

  for (const s of standards) {
    if (Math.abs(dec - s.val) <= 0.045) {
      return s.ratio;
    }
  }

  // Jika tidak cocok dengan standar di atas, sederhanakan rasio dengan GCD atau 2 desimal
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(w, h);
  if (divisor > 1 && (w / divisor) <= 50 && (h / divisor) <= 50) {
    return `${w / divisor}:${h / divisor}`;
  }

  return `${(Math.round(dec * 100) / 100)}:1`;
}

/**
 * Deteksi rasio dari konteks sumber (gambar referensi atau prompt teks)
 */
export function detectSourceAspectRatio({ sourceType, variationImage, previousAnalysis, basePrompt = '' } = {}) {
  // 1. Jika sumber adalah gambar baru yang diunggah
  if (sourceType === 'NEW_IMAGE' && variationImage) {
    if (variationImage.width && variationImage.height) {
      const approx = calculateApproximateRatio(variationImage.width, variationImage.height);
      if (approx) return approx;
    }
    if (variationImage.aspectRatio && variationImage.aspectRatio !== 'auto') {
      return variationImage.aspectRatio;
    }
  }

  // 2. Jika sumber adalah analisis sebelumnya dengan gambar
  if (sourceType === 'PREVIOUS_ANALYSIS' && previousAnalysis) {
    if (previousAnalysis.visionData?.aspectRatio && previousAnalysis.visionData.aspectRatio !== 'auto') {
      return previousAnalysis.visionData.aspectRatio;
    }
    if (previousAnalysis.targetAspectRatio && previousAnalysis.targetAspectRatio !== 'auto') {
      return previousAnalysis.targetAspectRatio;
    }
  }

  // 3. Deteksi dari prompt konteks (mencari flag --ar)
  if (basePrompt && typeof basePrompt === 'string') {
    const match = basePrompt.match(/--ar\s+([0-9]+(?:\.[0-9]+)?\s*:\s*[0-9]+(?:\.[0-9]+)?)/i);
    if (match) {
      const cleanMatch = match[1].replace(/\s+/g, '');
      const val = validateCustomAspectRatio(cleanMatch);
      if (val.valid) return val.normalized;
    }
  }

  // Jika tidak dapat diketahui dari gambar maupun konteks prompt, jangan mengarang rasio
  return null;
}

/**
 * Tentukan rasio target akhir yang efektif
 */
export function resolveTargetAspectRatio({
  aspectRatio = 'auto',
  customAspectRatio = '',
  sourceType = 'PREVIOUS_ANALYSIS',
  variationImage = null,
  previousAnalysis = null,
  basePrompt = ''
} = {}) {
  if (aspectRatio === 'custom') {
    const customVal = validateCustomAspectRatio(customAspectRatio);
    return customVal.valid ? customVal.normalized : null;
  }

  if (aspectRatio && aspectRatio !== 'auto' && aspectRatio !== 'Otomatis') {
    return aspectRatio;
  }

  // Mode Otomatis (Ikuti Sumber)
  return detectSourceAspectRatio({ sourceType, variationImage, previousAnalysis, basePrompt });
}

/**
 * Terapkan rasio target ke prompt:
 * - Menghapus parameter --ar lama yang berbenturan
 * - Menyematkan parameter --ar baru secara rapi di akhir prompt jika targetRatio ada
 * - Menjaga shorthand dan parameter teknis lainnya tetap utuh
 */
export function applyAspectRatioToPrompt(promptText = '', targetRatio = null) {
  if (!promptText || typeof promptText !== 'string') return '';

  let cleaned = promptText.trim();

  // Hapus semua deklarasi --ar yang ada untuk mencegah benturan ganda
  cleaned = cleaned.replace(/\s*--ar\s+[0-9]+(?:\.[0-9]+)?\s*:\s*[0-9]+(?:\.[0-9]+)?/gi, '').trim();

  // Bersihkan koma di akhir jika ada
  cleaned = cleaned.replace(/,\s*$/, '').trim();

  // Jika ada targetRatio yang sah, sematkan di akhir
  if (targetRatio && typeof targetRatio === 'string' && targetRatio.trim()) {
    cleaned = `${cleaned} --ar ${targetRatio.trim()}`;
  }

  return cleaned;
}

/**
 * Menghasilkan kumpulan ide variasi secara deterministik (Heuristic Engine)
 * - Menerapkan filter pendekatan kreatif strictly berdasarkan checkbox yang dicentang.
 * - Jika tidak ada pendekatan yang dicentang, gunakan NEUTRAL_NUANCE_MODIFIERS tanpa memaksakan pendekatan tak dipilih.
 * - Jika Pose Lock NONAKTIF, secara aktif merencanakan variasi pose yang berbeda untuk setiap ide variasi.
 * - Jika Pose Lock AKTIF, pertahankan pose asal dan tegakkan /poselock.
 * - Menerapkan rasio hasil generate (10 opsi) secara konsisten di setiap variasi.
 */
export function generateVariationsHeuristic({
  basePrompt = '',
  installedShorthands = [],
  count = 5,
  selectedApproaches = ['composition_framing', 'environment_background', 'lighting_mood', 'visual_style'],
  lockedConfig = {},
  aspectRatio = 'auto',
  customAspectRatio = '',
  sourceType = 'PREVIOUS_ANALYSIS',
  variationImage = null,
  previousAnalysis = null
} = {}) {
  const cleanBase = (basePrompt || '').trim() || 'A beautiful subject in natural setting';
  const effectiveCount = Math.max(1, Math.min(10, parseInt(count, 10) || 5));

  // Tentukan locks strictly berdasarkan manual checkbox status
  const locks = detectInstructionLocks(cleanBase, installedShorthands, lockedConfig);

  // Kumpulkan modifier strictly berdasarkan pendekatan yang dipilih pengguna
  const candidateModifiers = [];
  const approachesList = Array.isArray(selectedApproaches) ? selectedApproaches : [];

  if (approachesList.length === 0) {
    // ATURAN MUTLAK: Jika semua opsi nonaktif, JANGAN paksakan pendekatan kreatif yang tidak dipilih!
    // Gunakan modifier nuansa netral:
    NEUTRAL_NUANCE_MODIFIERS.forEach(mod => {
      candidateModifiers.push({ ...mod });
    });
  } else {
    // Kumpulkan HANYA dari pendekatan yang dicentang
    for (const appKey of approachesList) {
      const approachData = VARIATION_APPROACHES[appKey.toUpperCase()] || VARIATION_APPROACHES[appKey];
      if (approachData && Array.isArray(approachData.modifiers)) {
        approachData.modifiers.forEach(mod => {
          candidateModifiers.push({
            ...mod,
            approachId: approachData.id,
            approachLabel: approachData.label
          });
        });
      }
    }
  }

  // Fallback pengaman jika array tetap kosong
  if (candidateModifiers.length === 0) {
    NEUTRAL_NUANCE_MODIFIERS.forEach(mod => {
      candidateModifiers.push({ ...mod });
    });
  }

  // Ekstrak shorthand dasar dari basePrompt
  let baseShorthands = extractShorthandTokens(cleanBase);

  // Jika suatu lock NONAKTIF, bersihkan token lock tersebut dari baseShorthands
  if (!locks.lockPose) {
    baseShorthands = baseShorthands.filter(s => s !== '/poselock' && s !== '/bodyshape');
  }
  if (!locks.lockOutfit) {
    baseShorthands = baseShorthands.filter(s => s !== '/outfitlock');
  }
  if (!locks.lockColor) {
    baseShorthands = baseShorthands.filter(s => s !== '/colorpreserve');
  }

  // Bersihkan basePrompt dari token shorthand di ujung untuk peracikan kalimat bersih
  let baseTextClean = cleanBase.replace(/(?:,\s*)?\/[a-zA-Z0-9_-]+/g, '').trim();

  // Jika pose tidak dikunci, hapus pula frasa pose lama yang kaku dari baseText agar pose baru tidak bertentangan
  if (!locks.lockPose) {
    baseTextClean = baseTextClean.replace(/\b(standing|seated|sitting|leaning|walking|posing)\s+(?:in|on|with|against)\s+[^,.]+/gi, '').trim();
    baseTextClean = baseTextClean.replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '').trim();
  }

  // Tentukan rasio target yang efektif
  const effectiveTargetRatio = resolveTargetAspectRatio({
    aspectRatio,
    customAspectRatio,
    sourceType,
    variationImage,
    previousAnalysis,
    basePrompt: cleanBase
  });

  const variations = [];
  for (let i = 0; i < effectiveCount; i++) {
    const modifierIndex = i % candidateModifiers.length;
    const modifier = candidateModifiers[modifierIndex];

    // Tentukan Variasi Pose Subjek (JIKA POSE TIDAK DIKUNCI)
    let poseDirective = '';
    let poseName = '';
    if (!locks.lockPose) {
      const poseItem = SUBJECT_POSE_VARIATIONS[i % SUBJECT_POSE_VARIATIONS.length];
      poseDirective = poseItem.directive;
      poseName = poseItem.name;
    }

    // Bangun teks variasi: Base + Pose (jika ada) + Directive Pendekatan
    const segments = [baseTextClean];
    if (poseDirective) {
      segments.push(poseDirective);
    }
    if (modifier.directive) {
      segments.push(modifier.directive);
    }

    let variedText = segments.filter(Boolean).join(', ');

    // Gabungkan shorthand: Shorthand dasar yang valid + Shorthand modifier
    const allTokens = new Set([
      ...baseShorthands,
      ...(modifier.shorthands || [])
    ]);

    // Tambahkan kembali token-token yang sah
    if (allTokens.size > 0) {
      variedText = `${variedText}, ${Array.from(allTokens).join(', ')}`;
    }

    // Terapkan penegakan locks (sekaligus membersihkan lock yang false)
    const lockedPrompt = enforceInstructionLocks(variedText, cleanBase, locks);

    // Terapkan penegakan aspek rasio target secara konsisten
    const finalPrompt = applyAspectRatioToPrompt(lockedPrompt, effectiveTargetRatio);
    const finalShorthands = extractShorthandTokens(finalPrompt);

    // Judul yang deskriptif dan mencerminkan perbedaan semantik nyata
    let titleParts = [`Variasi ${i + 1}`];
    if (modifier.name && modifier.approachId !== 'neutral_nuance') {
      titleParts.push(modifier.name);
    }
    if (poseName && !locks.lockPose) {
      titleParts.push(poseName);
    }
    if (titleParts.length === 1) {
      titleParts.push(modifier.name || 'Nuansa Alami');
    }

    const title = titleParts.join(' • ');

    // Keterangan penjelasan
    let explanation = `Pendekatan ${modifier.approachLabel.toLowerCase()}`;
    if (!locks.lockPose && poseName) {
      explanation += ` dengan variasi pose fisik: ${poseName.toLowerCase()}`;
    }
    if (locks.activeLocks.length > 0) {
      explanation += ` sambil melindungi: ${locks.activeLocks.map(l => l.label).join(', ')}`;
    } else {
      explanation += ` tanpa pembatasan penguncian kaku.`;
    }
    if (effectiveTargetRatio) {
      explanation += ` (Rasio: ${effectiveTargetRatio})`;
    }

    variations.push({
      id: `var_${i + 1}`,
      title,
      approachId: modifier.approachId,
      approachLabel: modifier.approachLabel,
      prompt: finalPrompt,
      basePrompt: cleanBase,
      shorthands: finalShorthands,
      poseApplied: !locks.lockPose ? poseName : 'Pose Terkunci',
      aspectRatioApplied: effectiveTargetRatio ? `--ar ${effectiveTargetRatio}` : 'Alami (Ikuti Sumber)',
      lockedElementsApplied: locks.activeLocks.map(l => l.label),
      explanation
    });
  }

  return {
    sourceBasePrompt: cleanBase,
    count: variations.length,
    locks,
    selectedApproaches: approachesList,
    targetAspectRatio: effectiveTargetRatio,
    variations
  };
}
