/**
 * AI Color Grading & Style Analyzer Engine (V3.8)
 * 
 * Modul khusus untuk mode baru: "🎨 AI Color Grading & Style Analyzer"
 * 
 * Prinsip Kerja:
 * 1. Evaluasi karakteristik foto aktual (Subjek, Exposure, Tonal, White Balance, Palet Warna, Suasana).
 * 2. Evaluasi katalog style (ALL_COLOUR_GRADING_STYLES) untuk menentukan relevansi & ranking kecocokan.
 * 3. Seluruh style relevan tetap tersedia (tanpa batas Top-N buatan di internal engine).
 * 4. Filter kuota tampilan (1..20 atau 'all') memotong tampilan tanpa memicu analisis ulang AI.
 * 5. Menghasilkan prompt editing terstruktur untuk ChatGPT bersama foto asli (Non-Generative, Non-Destructive).
 */

import { ALL_COLOUR_GRADING_STYLES } from '../data/colourGradingData.js';
import { toAiEnglishPrompt } from './promptEnglishTranslator.js';

/**
 * Mengevaluasi karakteristik visual foto berdasarkan file dan telemetri piksel
 */
export function evaluatePhotoCharacteristics(uploadedImage = null) {
  if (!uploadedImage) {
    return {
      hasImage: false,
      subjectType: 'General Scene',
      exposureCondition: 'Normal Balanced',
      dynamicRange: 'Standard',
      whiteBalance: 'Neutral',
      colorTemperature: 'Neutral (~5500K)',
      dominantColors: ['Neutral Gray', 'Ambient Tones'],
      contrastLevel: 'Moderate Contrast',
      saturationLevel: 'Natural Saturation',
      visualMood: 'Natural Daylight',
      enhancementPotential: ['Penyelarasan tonal seimbang', 'Harmonisasi kontras visual'],
      preservationConstraints: [
        'Komposisi & perspektif foto asli',
        'Identitas & integritas subjek',
        'Rasio aspek asli foto'
      ]
    };
  }

  const tel = uploadedImage.colorTelemetry || uploadedImage.visualTelemetry || {};
  const filename = (uploadedImage.name || '').toLowerCase();
  
  // 1. Identifikasi Jenis Subjek & Foto
  let subjectType = 'General Photography';
  if (filename.includes('portrait') || filename.includes('person') || filename.includes('model') || filename.includes('wajah') || filename.includes('foto')) {
    subjectType = 'Portrait & Lifestyle';
  } else if (filename.includes('land') || filename.includes('alam') || filename.includes('pemandangan') || filename.includes('mountain') || filename.includes('sea')) {
    subjectType = 'Landscape & Nature';
  } else if (filename.includes('street') || filename.includes('city') || filename.includes('urban') || filename.includes('jalan')) {
    subjectType = 'Street & Urban';
  } else if (filename.includes('arch') || filename.includes('building') || filename.includes('gedung') || filename.includes('interior')) {
    subjectType = 'Architecture & Interior';
  } else if (filename.includes('product') || filename.includes('produk') || filename.includes('still')) {
    subjectType = 'Product & Commercial';
  } else if (tel.aspectRatio === '9:16' || tel.aspectRatio === '2:3' || tel.aspectRatio === '3:4') {
    subjectType = 'Portrait / Vertical Frame';
  } else {
    subjectType = 'Landscape / Wide Scene';
  }

  // 2. Evaluasi Exposure & Dynamic Range
  const brightness = typeof tel.brightness === 'number' ? tel.brightness : 128;
  let exposureCondition = 'Normal Balanced';
  if (brightness < 85) {
    exposureCondition = 'Low-Key / Underexposed (Bayangan Pekat)';
  } else if (brightness > 180) {
    exposureCondition = 'High-Key / Overexposed (Terang Dominan)';
  } else if (brightness < 110) {
    exposureCondition = 'Slightly Muted / Moody';
  } else {
    exposureCondition = 'Balanced Daylight Exposure';
  }

  // 3. Evaluasi White Balance & Color Temperature
  const warmth = typeof tel.warmth === 'number' ? tel.warmth : 0;
  const colorTempStr = (tel.colorTemp || '').toLowerCase();
  const dominantRgb = tel.dominantRgb || {};
  let whiteBalance = 'Neutral Calibrated';
  let colorTemperature = 'Neutral Daylight (~5400K)';
  if (warmth > 20 || colorTempStr === 'warm' || (dominantRgb.r && dominantRgb.b && dominantRgb.r > dominantRgb.b * 1.25)) {
    whiteBalance = 'Warm Skewed (Cenderung Hangat/Keemasan)';
    colorTemperature = 'Warm Golden (~6500K+)';
  } else if (warmth < -20 || colorTempStr === 'cool' || (dominantRgb.b && dominantRgb.r && dominantRgb.b > dominantRgb.r * 1.25)) {
    whiteBalance = 'Cool Skewed (Cenderung Dingin/Kebiruan)';
    colorTemperature = 'Cool Ambient (~4200K-)';
  }

  // 4. Evaluasi Kontras & Saturasi
  const contrastVal = typeof tel.contrast === 'number' ? tel.contrast : 50;
  let contrastLevel = 'Moderate Clean Contrast';
  if (contrastVal > 65) contrastLevel = 'High Dynamic Contrast (Punchy)';
  else if (contrastVal < 35) contrastLevel = 'Soft / Flat Gradation';

  const satVal = typeof tel.saturation === 'number' ? tel.saturation : 50;
  let saturationLevel = 'Natural Balanced Saturation';
  if (satVal > 65) saturationLevel = 'Vivid / Saturated Colors';
  else if (satVal < 35) saturationLevel = 'Muted / Desaturated Tones';

  // 5. Visual Mood
  let visualMood = 'Authentic Natural Ambience';
  if (warmth > 20 && brightness >= 110) visualMood = 'Warm Sunset / Golden Hour Glow';
  else if (brightness < 90) visualMood = 'Dramatic Moody Atmosphere';
  else if (brightness > 160) visualMood = 'Bright & Airy Clean Daylight';
  else if (contrastVal > 60) visualMood = 'Punchy Cinematic Edge';

  return {
    hasImage: true,
    filename: uploadedImage.name || 'foto-sumber.jpg',
    subjectType,
    exposureCondition,
    dynamicRange: contrastVal > 60 ? 'Wide Dynamic Range' : 'Standard Dynamic Range',
    whiteBalance,
    colorTemperature,
    dominantColors: tel.dominantColor ? [tel.dominantColor] : ['Natural Palette', 'Ambient Light'],
    contrastLevel,
    saturationLevel,
    visualMood,
    enhancementPotential: [
      'Peningkatan separasi warna latar & subjek',
      'Harmonisasi kurva highlight roll-off & bayangan',
      'Penyesuaian mood sinematik tanpa artefak digital'
    ],
    preservationConstraints: [
      'Integritas subjek, proporsi tubuh, dan identitas wajah',
      'Geometri, komposisi, dan perspektif asli kamera',
      'Rasio aspek asli foto'
    ]
  };
}

/**
 * Menghitung skor relevansi, label, dan alasan rekomendasi untuk setiap style di katalog
 * Memastikan SELURUH style relevan tetap disimpan dalam daftar hasil tanpa dipotong di awal.
 */
export function evaluateAndRankStyles(photoCharacteristics, customStylesCatalog = ALL_COLOUR_GRADING_STYLES) {
  if (!photoCharacteristics || !photoCharacteristics.hasImage) {
    // Mode tanpa gambar: Kembalikan daftar default kurasi terurut standar
    return customStylesCatalog
      .filter(s => s.name !== 'Custom Style')
      .map(s => ({
        ...s,
        matchScore: 75,
        matchLabel: 'Sesuai sebagai Alternatif',
        reason: 'Style kurasi standar siap digunakan untuk eksplorasi visual.',
        outcomeSummary: s.description,
        isRelevant: true
      }));
  }

  const {
    subjectType = '',
    exposureCondition = '',
    whiteBalance = '',
    contrastLevel = '',
    saturationLevel = '',
    visualMood = ''
  } = photoCharacteristics;

  const results = [];

  for (const style of customStylesCatalog) {
    if (style.name === 'Custom Style') continue; // Custom style tidak masuk rekomendasi otomatis

    let score = 50; // Baseline score
    const styleName = style.name.toLowerCase();
    const catName = (style.category || '').toLowerCase();
    const desc = (style.description || '').toLowerCase();
    const styleKeywords = `${styleName} ${catName} ${desc}`;

    let reasons = [];
    let isIrrelevant = false;

    // 1. Kecocokan dengan Subjek
    if (subjectType.includes('Portrait')) {
      if (styleKeywords.includes('natural') || styleKeywords.includes('skin') || styleKeywords.includes('kulit') || styleKeywords.includes('lifestyle')) {
        score += 25;
        reasons.push('sangat ramah pada warna kulit subjek (skin tone)');
      }
      if (styleKeywords.includes('dslr') || styleKeywords.includes('clean')) {
        score += 15;
        reasons.push('menghasilkan separasi subjek potret yang elegan');
      }
      if (styleKeywords.includes('dark cinematic') && exposureCondition.includes('Underexposed')) {
        score -= 20; // Menghindari potret gelap makin hancur
      }
    } else if (subjectType.includes('Landscape') || subjectType.includes('Nature')) {
      if (styleKeywords.includes('vibrant') || styleKeywords.includes('golden') || styleKeywords.includes('rich') || styleKeywords.includes('warm')) {
        score += 25;
        reasons.push('memperkaya kedalaman warna alam dan horizon langit');
      }
      if (styleKeywords.includes('airy') || styleKeywords.includes('clean')) {
        score += 15;
        reasons.push('menonjolkan kejernihan atmosfer terbuka');
      }
    } else if (subjectType.includes('Street') || subjectType.includes('Urban')) {
      if (styleKeywords.includes('cinematic') || styleKeywords.includes('teal') || styleKeywords.includes('contrast')) {
        score += 25;
        reasons.push('memberikan karakter urban sinematik yang tegas');
      }
      if (styleKeywords.includes('film') || styleKeywords.includes('analog')) {
        score += 20;
        reasons.push('memberikan tekstur nostalgia khas fotografi jalanan');
      }
    } else if (subjectType.includes('Architecture')) {
      if (styleKeywords.includes('clean') || styleKeywords.includes('modern') || styleKeywords.includes('minimal')) {
        score += 25;
        reasons.push('mempertahankan garis struktural dan white balance presisi');
      }
    }

    // 2. Kecocokan dengan Kondisi Pencahayaan & Exposure
    if (exposureCondition.includes('Low-Key') || exposureCondition.includes('Underexposed')) {
      if (styleKeywords.includes('moody') || styleKeywords.includes('deep shadow') || styleKeywords.includes('noir')) {
        score += 20;
        reasons.push('selaras dengan bayangan dramatis pada adegan gelap');
      } else if (styleKeywords.includes('bright & airy')) {
        isIrrelevant = true; // Jangan paksakan High Key pada adegan gelap pekat
      }
    } else if (exposureCondition.includes('High-Key') || exposureCondition.includes('Overexposed')) {
      if (styleKeywords.includes('bright') || styleKeywords.includes('airy') || styleKeywords.includes('high key')) {
        score += 25;
        reasons.push('memaksimalkan karakter terang bersih tanpa over-clipping');
      } else if (styleKeywords.includes('dark & moody')) {
        score -= 25;
      }
    }

    // 3. Kecocokan dengan Temperatur Warna (Warmth / Coolness)
    if (whiteBalance.includes('Warm')) {
      if (styleKeywords.includes('golden') || styleKeywords.includes('warm') || styleKeywords.includes('sunset') || styleKeywords.includes('sun-kissed')) {
        score += 25;
        reasons.push('menonjolkan kehangatan cahaya matahari alami pada foto');
      }
    } else if (whiteBalance.includes('Cool')) {
      if (styleKeywords.includes('teal') || styleKeywords.includes('cool') || styleKeywords.includes('slate') || styleKeywords.includes('modern')) {
        score += 20;
        reasons.push('menyeimbangkan rona sejuk dengan color separation modern');
      }
    }

    // 4. Kecocokan dengan Kontras & Saturasi
    if (contrastLevel.includes('Soft') || contrastLevel.includes('Flat')) {
      if (styleKeywords.includes('contrast') || styleKeywords.includes('vivid') || styleKeywords.includes('rich')) {
        score += 20;
        reasons.push('mengangkat rentang kontras yang sebelumnya datar');
      }
    } else if (contrastLevel.includes('High Dynamic')) {
      if (styleKeywords.includes('soft') || styleKeywords.includes('natural clean') || styleKeywords.includes('film look')) {
        score += 18;
        reasons.push('melembutkan transisi kontras keras agar lebih organik');
      }
    }

    // Batasi skor di rentang 1 - 99
    score = Math.max(15, Math.min(98, score));

    // Filter Eliminasi Relevansi: Jika skor terlalu rendah atau tidak kompatibel, buang dari rekomendasi
    if (score < 40 || isIrrelevant) {
      continue;
    }

    // Tentukan Label Kecocokan
    let matchLabel = 'Sesuai sebagai Alternatif';
    if (score >= 80) {
      matchLabel = 'Paling Sesuai';
    } else if (score >= 65) {
      matchLabel = 'Sangat Sesuai';
    }

    // Buat alasan kalimat lengkap spesifik foto
    const reasonText = reasons.length > 0
      ? `Direkomendasikan karena ${reasons.join(', serta ')}.`
      : `Memberikan keseimbangan visual yang harmonis untuk karakteristik foto ${subjectType.toLowerCase()}.`;

    results.push({
      ...style,
      matchScore: score,
      matchLabel,
      reason: reasonText,
      outcomeSummary: style.description,
      isRelevant: true
    });
  }

  // Urutkan seluruh style relevan dari skor tertinggi ke terendah
  results.sort((a, b) => b.matchScore - a.matchScore);

  return results;
}

/**
 * Menyaring tampilan style berdasarkan pilihan jumlah pengguna (1..20 atau 'all')
 * Mengembalikan objek hasil irisan tanpa memicu perhitungan ulang AI.
 */
export function sliceDisplayedStyles(rankedStyles = [], displayCount = 10) {
  const totalRelevant = Array.isArray(rankedStyles) ? rankedStyles.length : 0;
  if (totalRelevant === 0) {
    return {
      displayedStyles: [],
      totalRelevant: 0,
      displayedCount: 0,
      indicatorText: 'Tidak ada style yang cukup relevan dengan foto ini.',
      isAll: false
    };
  }

  let limit = totalRelevant;
  let isAll = false;

  if (displayCount === 'all' || displayCount === 'Semua Style Relevan' || displayCount === -1) {
    limit = totalRelevant;
    isAll = true;
  } else {
    const parsed = parseInt(displayCount, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 20) {
      limit = Math.min(parsed, totalRelevant);
      isAll = limit >= totalRelevant;
    } else {
      limit = Math.min(10, totalRelevant);
      isAll = limit >= totalRelevant;
    }
  }

  const displayedStyles = rankedStyles.slice(0, limit);
  const displayedCount = displayedStyles.length;

  const indicatorText = isAll
    ? `Menampilkan semua ${totalRelevant} style relevan.`
    : `Menampilkan ${displayedCount} dari ${totalRelevant} style relevan.`;

  return {
    displayedStyles,
    totalRelevant,
    displayedCount,
    indicatorText,
    isAll
  };
}

/**
 * Membangun Prompt Editing Terstruktur untuk ChatGPT bersama Foto Asli
 * Non-Generative, Non-Destructive, Strict Source Image Protection.
 */
export function buildChatGPTEditingPrompt({
  photoCharacteristics = null,
  selectedStyleObj = null,
  additionalRequest = '',
  intensity = 50
}) {
  const parts = [];

  // 1. Header Mandat Pengeditan Non-Destruktif (ChatGPT Ground Truth Directive)
  parts.push(
    `[INSTRUCTION FOR CHATGPT - PROFESSIONAL COLOR GRADING & PHOTO ENHANCEMENT]\n` +
    `Please edit the attached original photo by applying professional, non-destructive COLOR GRADING and TONAL ADJUSTMENTS only. ` +
    `DO NOT regenerate or reconstruct the image from scratch. DO NOT use generative fill. ` +
    `Retain 100% of the original subject facial identity, facial expressions, body proportions, clothing, hair, objects, background architecture, and scene geometry. ` +
    `Preserve original camera perspective, natural optical depth, and aspect ratio exactly as captured in the source image.`
  );

  // 2. Target Style Spesifik & Karakteristik Tonal
  if (selectedStyleObj) {
    const styleName = selectedStyleObj.name || 'Natural Vibrant';
    const styleCat = selectedStyleObj.category || 'Curated Style';
    const styleDesc = toAiEnglishPrompt(selectedStyleObj.description || '');

    parts.push(
      `[TARGET EDITING STYLE: "${styleName}" (${styleCat})]\n` +
      `- Style Intent: ${styleDesc}\n` +
      `- Editing Intensity: ${intensity}%\n` +
      `- Target Tonal Balance: Apply harmonious color grading reflecting "${styleName}", carefully balancing highlight roll-off, midtone separation, and clean shadow depth.`
    );
  }

  // 3. Karakteristik Foto Baseline & Penyesuaian Adaptif
  if (photoCharacteristics && photoCharacteristics.hasImage) {
    parts.push(
      `[PHOTO BASELINE DIAGNOSTICS & ADAPTIVE ENHANCEMENT]\n` +
      `- Subject Context: ${photoCharacteristics.subjectType || 'General Photography'}\n` +
      `- Exposure Baseline: ${photoCharacteristics.exposureCondition || 'Normal'}\n` +
      `- White Balance & Tone: ${photoCharacteristics.whiteBalance || 'Neutral'}, ${photoCharacteristics.colorTemperature || 'Daylight'}\n` +
      `- Contrast & Saturation Baseline: ${photoCharacteristics.contrastLevel || 'Moderate'}, ${photoCharacteristics.saturationLevel || 'Natural'}\n` +
      `- Adaptive Objective: Respect this photo's specific lighting conditions. Enhance mood without creating crushed blacks or blown highlights.`
    );
  }

  // 4. Request Editing Tambahan Pengguna (Jika Diisi)
  const cleanRequest = (additionalRequest || '').trim();
  if (cleanRequest) {
    const requestEn = toAiEnglishPrompt(cleanRequest);
    parts.push(
      `[USER ADDITIONAL EDITING REQUEST - HIGH PRIORITY]\n` +
      `- Specific Request: "${cleanRequest}"\n` +
      `- Execution Directive: Seamlessly integrate this request into the color grading and atmospheric treatment: "${requestEn}". ` +
      `Ensure this modification blends naturally with the chosen style without changing the original photo's composition or core geometry.`
    );
  }

  // 5. Intelligent Protections & Pencegahan Artefak Digital
  parts.push(
    `[INTELLIGENT PRESERVATION & ARTIFACT PREVENTION RULES]\n` +
    `1. Skin Tone Protection: If human subjects are present, keep skin tones authentic, healthy, and natural; strictly avoid unnatural orange, magenta, or plasticky oversaturation.\n` +
    `2. Dynamic Range Guard: Prevent clipping in bright highlights and avoid crushing detail in deep shadows.\n` +
    `3. Color Harmony: Maintain smooth color gradients without digital banding, harsh edge halos, or excessive artificial sharpening.\n` +
    `4. Output Standard: Deliver a refined, cinematic, and professional photograph that feels authentically captured, not artificially rendered.`
  );

  return parts.join('\n\n');
}
