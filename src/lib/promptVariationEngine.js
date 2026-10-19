/**
 * Prompt Variation Engine V3.8
 * 
 * Bertanggung jawab menghasilkan ide variasi prompt berbasis:
 * 1. Tiga Sumber Input:
 *    - PREVIOUS_ANALYSIS: Menggunakan context analisa aktif (optimalPrompt, shorthands, visionData).
 *    - NEW_IMAGE: Menggunakan gambar referensi baru mandiri tanpa merusak context lama.
 *    - CUSTOM_PROMPT: Menggunakan teks prompt biasa, prompt bershorthand, atau kombinasi keduanya.
 * 2. Beragam Pendekatan Kreatif:
 *    - Komposisi & Framing
 *    - Lingkungan & Latar Belakang
 *    - Suasana & Pencahayaan
 *    - Gaya Visual & Estetika
 *    - Konsep Kreatif & Storytelling
 *    - Fotografi Komersial & Stock Photography
 * 3. Instruction Lock (Perlindungan Semantik):
 *    - Wajah (/facelock), Outfit (/outfitlock), Pose/Proporsi (/poselock, /bodyshape), Palet Warna (/colorpreserve).
 *    - Custom user locked instructions.
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
 * Ekstrak seluruh token shorthand (yang diawali '/') dari sebuah teks
 */
export function extractShorthandTokens(text = '') {
  if (!text || typeof text !== 'string') return [];
  const matches = text.match(/\/[a-zA-Z0-9_-]+/g);
  return matches ? Array.from(new Set(matches.map(m => m.toLowerCase()))) : [];
}

/**
 * Deteksi elemen penguncian yang aktif pada prompt
 */
export function detectInstructionLocks(text = '', installedShorthands = [], manualLocks = {}) {
  const combinedTokens = new Set([
    ...extractShorthandTokens(text),
    ...(Array.isArray(installedShorthands) ? installedShorthands.map(s => s.toLowerCase()) : [])
  ]);

  const lockFacelock = combinedTokens.has('/facelock') || Boolean(manualLocks.face);
  const lockOutfit = combinedTokens.has('/outfitlock') || Boolean(manualLocks.outfit);
  const lockPose = combinedTokens.has('/poselock') || combinedTokens.has('/bodyshape') || Boolean(manualLocks.pose);
  const lockColor = combinedTokens.has('/colorpreserve') || Boolean(manualLocks.color);
  const customLock = (manualLocks.custom || '').trim();

  const activeLocks = [];
  if (lockFacelock) activeLocks.push({ type: 'face', label: 'Identitas Wajah (/facelock)', token: '/facelock' });
  if (lockOutfit) activeLocks.push({ type: 'outfit', label: 'Pakaian & Aksesori (/outfitlock)', token: '/outfitlock' });
  if (lockPose) activeLocks.push({ type: 'pose', label: 'Pose & Proporsi Tubuh (/poselock, /bodyshape)', token: '/poselock' });
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
 * Memastikan bahwa elemen yang dikunci tidak hilang atau terhapus dari teks variasi
 */
export function enforceInstructionLocks(variedPrompt = '', originalPrompt = '', locks = {}) {
  let result = variedPrompt.trim();
  const tokensInResult = new Set(extractShorthandTokens(result));

  // 1. Pertahankan token shorthand pengunci
  if (locks.lockFacelock && !tokensInResult.has('/facelock')) {
    result = `${result}, /facelock`;
  }
  if (locks.lockOutfit && !tokensInResult.has('/outfitlock')) {
    result = `${result}, /outfitlock`;
  }
  if (locks.lockPose) {
    if (!tokensInResult.has('/poselock') && !tokensInResult.has('/bodyshape')) {
      result = `${result}, /poselock`;
    }
  }
  if (locks.lockColor && !tokensInResult.has('/colorpreserve')) {
    result = `${result}, /colorpreserve`;
  }

  // 2. Pertahankan instruksi teks kustom jika ada
  if (locks.customLock && !result.toLowerCase().includes(locks.customLock.toLowerCase())) {
    result = `${result}, preserving ${locks.customLock}`;
  }

  return result;
}

/**
 * Menghasilkan kumpulan ide variasi secara deterministik (Heuristic Engine)
 * Sangat cepat, bebas crash, dan bekerja offline tanpa ketergantungan API eksternal.
 */
export function generateVariationsHeuristic({
  basePrompt = '',
  installedShorthands = [],
  count = 5,
  selectedApproaches = ['composition_framing', 'environment_background', 'lighting_mood', 'visual_style'],
  lockedConfig = {}
} = {}) {
  const cleanBase = (basePrompt || '').trim() || 'A beautiful subject in natural setting';
  const effectiveCount = Math.max(1, Math.min(10, parseInt(count, 10) || 5));

  // Tentukan locks
  const locks = detectInstructionLocks(cleanBase, installedShorthands, lockedConfig);

  // Kumpulkan modifier dari pendekatan yang dipilih pengguna
  const validApproaches = selectedApproaches && selectedApproaches.length > 0
    ? selectedApproaches
    : Object.keys(VARIATION_APPROACHES);

  const candidateModifiers = [];
  for (const appKey of validApproaches) {
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

  // Jika candidateModifiers kosong, ambil semua
  if (candidateModifiers.length === 0) {
    Object.values(VARIATION_APPROACHES).forEach(app => {
      app.modifiers.forEach(mod => {
        candidateModifiers.push({
          ...mod,
          approachId: app.id,
          approachLabel: app.label
        });
      });
    });
  }

  // Ekstrak shorthand dasar yang bukan variasi spesifik
  const baseShorthands = extractShorthandTokens(cleanBase);

  // Bersihkan basePrompt dari shorthand yang ada di akhir untuk peracikan kalimat yang bersih
  const baseWithoutTrailingTokens = cleanBase.replace(/(?:,\s*)?\/[a-zA-Z0-9_-]+/g, '').trim();

  const variations = [];
  for (let i = 0; i < effectiveCount; i++) {
    const modifierIndex = i % candidateModifiers.length;
    const modifier = candidateModifiers[modifierIndex];

    // Buat kalimat variasi
    let variedText = `${baseWithoutTrailingTokens}, ${modifier.directive}`;

    // Gabungkan shorthand: Shorthand modifier + Shorthand dasar + Shorthand kunci
    const allTokens = new Set([
      ...baseShorthands,
      ...(modifier.shorthands || [])
    ]);

    // Tambahkan kembali token-token yang sah
    if (allTokens.size > 0) {
      variedText = `${variedText}, ${Array.from(allTokens).join(', ')}`;
    }

    // Terapkan penegakan locks
    const finalPrompt = enforceInstructionLocks(variedText, cleanBase, locks);
    const finalShorthands = extractShorthandTokens(finalPrompt);

    variations.push({
      id: `var_${i + 1}`,
      title: `Variasi ${i + 1}: ${modifier.name}`,
      approachId: modifier.approachId,
      approachLabel: modifier.approachLabel,
      prompt: finalPrompt,
      basePrompt: cleanBase,
      shorthands: finalShorthands,
      lockedElementsApplied: locks.activeLocks.map(l => l.label),
      explanation: `Eksplorasi ${modifier.approachLabel.toLowerCase()} dengan penekanan pada ${modifier.name.toLowerCase()} sambil menjaga konsistensi elemen inti.`
    });
  }

  return {
    sourceBasePrompt: cleanBase,
    count: variations.length,
    locks,
    variations
  };
}
