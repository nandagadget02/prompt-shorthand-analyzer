(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const za={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE",LIGHTING_SHADOW:"LIGHTING_SHADOW",LIGHTING_HIGHLIGHT:"LIGHTING_HIGHLIGHT",LIGHTING_DYNAMICRANGE:"LIGHTING_DYNAMICRANGE",CONTRAST_NATURAL:"CONTRAST_NATURAL",COLOR_NATURALTONE:"COLOR_NATURALTONE",COLOR_BALANCE:"COLOR_BALANCE",DETAIL_PRESERVATION:"DETAIL_PRESERVATION",TEXTURE_PRESERVATION:"TEXTURE_PRESERVATION",NATURAL_PROCESSING:"NATURAL_PROCESSING",PERSPECTIVE_CORRECTION:"PERSPECTIVE_CORRECTION",LENS_CORRECTION:"LENS_CORRECTION",COMPOSITION_BALANCE:"COMPOSITION_BALANCE",IMAGE_HIGHDETAIL:"IMAGE_HIGHDETAIL"},ie={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},Me=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]},{code:"/shadowrecovery",name:"Shadow Recovery & Black Level Lifting",category:"LIGHTING",target:"SHADOW_LIGHTING",description:"Mengangkat dan memulihkan detail bayangan yang terlalu gelap tanpa menimbulkan noise atau mencuci kontras.",semanticTriggers:["shadow recovery","shadow terlalu gelap","pulihkan bayangan","angkat bayangan gelap","recover shadows","dark shadows","bayangan terlalu pekat"],negativeTriggers:["bayangan pekat","gelapkan bayangan","crushed blacks"],conflicts:[],compatibleWith:["/highlightcontrol","/dynamicrange","/naturalcontrast","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika area bayangan pada subjek, pepohonan, atau latar belakang terlalu gelap sehingga kehilangan detail.",whenNotToUse:"Jangan gunakan jika kontras bayangan pekat sengaja diinginkan untuk gaya dramatis (chiaroscuro).",functionGroup:"LIGHTING_SHADOW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/liftshadows"],relationships:[{code:"/highlightcontrol",relationType:"COMPATIBLE",reason:"Sering dipadukan untuk menyeimbangkan rentang dinamis keseluruhan."}]},{code:"/highlightcontrol",name:"Highlight Control & Rolloff",category:"LIGHTING",target:"HIGHLIGHT_LIGHTING",description:"Mengendalikan area terang yang over-exposed atau blown-out agar detail tekstur cahaya tetap terjaga dengan gradasi halus.",semanticTriggers:["highlight control","highlight perlu dikendalikan","highlight terlalu terang","kendalikan highlight","kurangi overexposed","highlight recovery","blown highlights"],negativeTriggers:["tingkatkan highlight","blow out"],conflicts:[],compatibleWith:["/shadowrecovery","/dynamicrange","/naturalcontrast"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika langit, awan, atau pantulan cahaya terlalu terang hingga kehilangan detail tekstur.",whenNotToUse:"Jangan gunakan jika efek siluet atau flare cahaya terang sengaja diinginkan.",functionGroup:"LIGHTING_HIGHLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/highlightrolloff"],relationships:[{code:"/shadowrecovery",relationType:"COMPATIBLE",reason:"Bekerja bersama pemulihan shadow untuk menghasilkan eksposur seimbang."}]},{code:"/dynamicrange",name:"Dynamic Range Balancing",category:"LIGHTING",target:"DYNAMIC_RANGE",description:"Menyeimbangkan rentang dinamis antara area tergelap dan terang secara simultan untuk eksposur alami tanpa artefak HDR berlebihan.",semanticTriggers:["dynamic range","dynamic range perlu diseimbangkan","seimbangkan dynamic range","rentang dinamis seimbang","balance dynamic range","dynamic range expansion"],negativeTriggers:["kontras ekstrem"],conflicts:[],compatibleWith:["/shadowrecovery","/highlightcontrol","/naturaltone"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat foto memiliki perbedaan pencahayaan ekstrem antara area bayangan dan area terang.",whenNotToUse:"Jangan gunakan jika kontras siluet tinggi atau moody low-key lighting diinginkan.",functionGroup:"LIGHTING_DYNAMICRANGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balanceddynamicrange"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Rentang dinamis yang seimbang menjaga tone warna tetap autentik."}]},{code:"/naturalcontrast",name:"Natural Contrast Balancing",category:"IMAGE_QUALITY",target:"IMAGE_CONTRAST",description:"Menyesuaikan kurva kontras secara alami dan bertahap tanpa membuat warna jenuh berlebihan atau merusak tonal gradation.",semanticTriggers:["natural contrast","kontras alami","seimbangkan kontras","kontras terlalu tajam","kontras pudar","balanced contrast"],negativeTriggers:["kontras ekstrem","hyper contrast"],conflicts:[],compatibleWith:["/naturaltone","/detailpreservation","/colorbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika kontras gambar tampak terlalu keras atau sebaliknya terlihat washed-out/pudar.",whenNotToUse:"Jangan gunakan bila kontras gambar sudah natural dan seimbang.",functionGroup:"CONTRAST_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balancedcontrast"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Kontras alami menjaga nuansa warna tetap seimbang."}]},{code:"/naturaltone",name:"Natural Tonal Range & Skin Tone",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menjaga palet warna dan tonal range tetap natural, hangat, dan autentik sesuai persepsi mata manusia.",semanticTriggers:["natural tone","warna perlu dibuat lebih natural","warna lebih natural","tonal range alami","natural color","warna alami","natural skin tone"],negativeTriggers:["neon","warna over-saturated","fluorescent"],conflicts:["/cyberpunk"],compatibleWith:["/colorbalance","/texturepreservation","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk mengembalikan karakter warna asli lanskap, vegetasi, atau warna kulit subjek.",whenNotToUse:"Jangan gunakan jika grading warna stilistik ekstrem (seperti cyberpunk neon atau monochrome) ditargetkan.",functionGroup:"COLOR_NATURALTONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturaltonal"],relationships:[{code:"/colorbalance",relationType:"DIRECTLY_RELATED",reason:"Keseimbangan warna yang tepat menghasilkan tone alami."}]},{code:"/colorbalance",name:"Color Balance & White Balance Correction",category:"COLOR_TONE",target:"COLOR_BALANCE",description:"Mengoreksi tint dan temperatur warna yang menyimpang (color cast) agar titik netral putih dan abu-abu akurat.",semanticTriggers:["color balance","color balance perlu diperbaiki","koreksi white balance","keseimbangan warna","perbaiki warna","white balance correction","remove color cast"],negativeTriggers:[],conflicts:[],compatibleWith:["/naturaltone","/naturalcontrast","/rawphoto"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar memiliki color cast (misalnya terlalu kuning/hijau/kebiruan) yang tidak diinginkan.",whenNotToUse:"Jangan gunakan jika nuansa warna hangat matahari senja atau cahaya buatan bernuansa sengaja dipertahankan.",functionGroup:"COLOR_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/whitebalance"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"White balance yang netral mendukung pembentukan tone alami."}]},{code:"/detailpreservation",name:"Original Detail Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_DETAIL",description:"Mempertahankan detail mikro arsitektur, dedaunan, permukaan benda, dan elemen halus asli agar tidak terhapus selama proses penyempurnaan.",semanticTriggers:["detail preservation","detail asli perlu dipertahankan","pertahankan detail asli","keep original detail","preserve details","jangan hilangkan detail"],negativeTriggers:["blur","hapus detail"],conflicts:[],compatibleWith:["/texturepreservation","/naturalprocessing","/highdetail"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar sudah memiliki detail halus yang bernilai tinggi dan harus dilindungi dari over-smoothing.",whenNotToUse:"Jangan gunakan jika detail gambar rusak parah dan membutuhkan rekonstruksi ulang secara total.",functionGroup:"DETAIL_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservedetails"],relationships:[{code:"/texturepreservation",relationType:"DIRECTLY_RELATED",reason:"Preservasi detail bekerja berdampingan dengan penjagaan tekstur asli."}]},{code:"/texturepreservation",name:"Authentic Texture Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_TEXTURE",description:"Mencegah efek 'plastik' atau over-denoise dengan menjaga tekstur organik kulit, kain, kayu, batu, dan dedaunan tetap autentik.",semanticTriggers:["texture preservation","tekstur asli perlu dipertahankan","pertahankan tekstur asli","keep original texture","preserve texture","tekstur autentik"],negativeTriggers:["plastik","airbrushed"],conflicts:[],compatibleWith:["/detailpreservation","/rawphoto","/naturalprocessing"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tekstur permukaan benda dan kulit tampak nyata tanpa distorsi perataan buatan.",whenNotToUse:"Jangan gunakan jika efek grafis flat 2D atau render kartun halus diinginkan.",functionGroup:"TEXTURE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservetexture"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor mentah menjaga kejernihan mikrotekstur permukaan."}]},{code:"/naturalprocessing",name:"Natural Processing & Anti-Artifacts",category:"IMAGE_QUALITY",target:"PROCESSING_ARTIFACTS",description:"Memastikan hasil visual bebas dari haloing tepian, artifak kompresi, posterisasi warna, dan efek over-processed.",semanticTriggers:["natural processing","pemrosesan alami","tanpa artifak ai","bebas artifak pemrosesan","clean processing","anti artifacts","no haloing"],negativeTriggers:["over processed"],conflicts:[],compatibleWith:["/rawphoto","/detailpreservation","/texturepreservation"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga standar output tetap bersih dari artefak digital yang merusak kualitas fotografi.",whenNotToUse:"Jangan gunakan jika efek distorsi glitch atau seni digital disengaja.",functionGroup:"NATURAL_PROCESSING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cleanrender"],relationships:[{code:"/detailpreservation",relationType:"COMPATIBLE",reason:"Pemrosesan alami menjaga integritas detail asli."}]},{code:"/perspectivecorrection",name:"Perspective & Vertical Alignment Correction",category:"CAMERA_PHOTO",target:"PERSPECTIVE",description:"Mengoreksi distorsi keystone dan garis vertikal bangunan/ruangan yang miring agar tampak proporsional dan sejajar.",semanticTriggers:["perspective correction","koreksi perspektif","perbaiki sudut kemiringan","luruskan perspektif","keystone correction","garis miring"],negativeTriggers:[],conflicts:[],compatibleWith:["/lenscorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto arsitektur atau pemandangan dengan garis vertikal yang tampak condong atau miring secara tidak sengaja.",whenNotToUse:"Jangan gunakan jika sudut miring (Dutch angle) memang disengaja untuk alasan dramatisasi visual.",functionGroup:"PERSPECTIVE_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/keystonecorrection"],relationships:[{code:"/lenscorrection",relationType:"COMPATIBLE",reason:"Koreksi perspektif dan koreksi lensa saling melengkapi dalam merapikan geometri gambar."}]},{code:"/lenscorrection",name:"Lens Distortion & Vignette Correction",category:"CAMERA_PHOTO",target:"LENS_OPTICS",description:"Menghilangkan distorsi barrel/pincushion dan vignetting gelap pada sudut tepian lensa kamera.",semanticTriggers:["lens correction","koreksi distorsi lensa","hilangkan vignetting","perbaiki distorsi lensa","lens distortion correction","distorsi barrel"],negativeTriggers:[],conflicts:[],compatibleWith:["/perspectivecorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat optik lensa menghasilkan distorsi cembung atau tepian gambar menggelap secara tidak merata.",whenNotToUse:"Jangan gunakan jika efek lensa fish-eye atau vignette retro sengaja diinginkan.",functionGroup:"LENS_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/distortioncorrection"],relationships:[{code:"/perspectivecorrection",relationType:"COMPATIBLE",reason:"Membantu meluruskan batas-batas geometri foto."}]},{code:"/compositionbalance",name:"Composition & Framing Balance",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Menata ulang keseimbangan bobot visual, ruang negatif (negative space), dan penempatan elemen dalam bidang framing.",semanticTriggers:["composition balance","keseimbangan komposisi","seimbangkan framing","komposisi seimbang","balance composition","penataan framing"],negativeTriggers:[],conflicts:[],compatibleWith:["/ruleofthirds","/perspectivecorrection"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat tata letak visual terasa berat sebelah atau framing memotong elemen penting secara canggung.",whenNotToUse:"Jangan gunakan jika komposisi foto sudah seimbang dan proporsional.",functionGroup:"COMPOSITION_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/framingbalance"],relationships:[{code:"/ruleofthirds",relationType:"COMPATIBLE",reason:"Aturan sepertiga adalah salah satu kaidah utama untuk mencapai keseimbangan komposisi."}]},{code:"/highdetail",name:"High Fidelity Micro-Detail",category:"IMAGE_QUALITY",target:"IMAGE_DETAIL",description:"Meningkatkan kejernihan mikrotekstur dan ketajaman detail halus pada seluruh permukaan foto secara koheren.",semanticTriggers:["high detail","detail tinggi","mikro detail tajam","tingkatkan detail","high fidelity detail","detail jernih"],negativeTriggers:["blur","halus berlebih"],conflicts:[],compatibleWith:["/detailpreservation","/sharpen","/highresolution"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat elemen visual memerlukan peningkatan resolusi mikrotekstur tanpa menambahkan noise.",whenNotToUse:"Jangan gunakan jika gambar ditujukan untuk gaya lembut bertekstur minim.",functionGroup:"IMAGE_HIGHDETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/microdetail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Ketajaman mikrokontras mendukung tampilan detail tinggi."}]}];function ce(o,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),t=o.code.toLowerCase(),i=o.name.toLowerCase(),r=o.target.toLowerCase(),s=o.category.toLowerCase(),n=o.description.toLowerCase();if(t===e||t===`/${e}`)return 100;if(t.includes(e))return 75;if(o.semanticTriggers&&o.semanticTriggers.some(g=>g.toLowerCase()===e))return 95;if(o.negativeTriggers)for(const g of o.negativeTriggers){const p=g.toLowerCase(),k=e.indexOf(p);if(k!==-1){const u=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p),m=e.slice(0,k).trim(),h=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(m);if(u||!h)return-50}}if(o.semanticTriggers)for(const g of o.semanticTriggers){const p=g.toLowerCase(),k=e.indexOf(p);if(k!==-1){const u=e.slice(0,k).trim(),m=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(u),h=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p);if(!m||h)return 85}else if(p.includes(e))return 80}const l=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),d=e.split(/\s+/).filter(g=>g.length>2&&!l.has(g));let c=0;for(const g of o.semanticTriggers||[]){const p=g.toLowerCase();if(d.length>0&&d.every(m=>p.includes(m)))return 75;const u=d.filter(m=>p.includes(m)).length;u>c&&(c=u)}return c>1?40+c*5:i.includes(e)?50:r.includes(e)||s.includes(e)?40:n.includes(e)?30:0}function gt(o,{category:a="ALL",target:e="ALL",recommendationLevel:t="ALL",searchQuery:i=""}={}){const r=o.filter(s=>!(a!=="ALL"&&s.category!==a||e!=="ALL"&&s.target!==e||t!=="ALL"&&s.recommendationLevel!==t));if(i&&i.trim()){const s=[];for(const n of r){const l=ce(n,i);l>0&&s.push({item:n,score:l})}return s.sort((n,l)=>l.score-n.score),s.map(n=>n.item)}return r}function ht(o){if(!o||typeof o!="string")return{isValid:!1,code:"",description:"",error:"Input tidak boleh kosong."};const a=o.trim();if(!a)return{isValid:!1,code:"",description:"",error:"Input tidak boleh kosong."};let e="",t="";const i=/\s*(?:—|–|:|=|\||-)\s*/;if(i.test(a)){const r=a.split(i);e=(r[0]||"").trim(),t=r.slice(1).join(" ").trim()}else if(a.startsWith("/")){const r=a.indexOf(" ");r!==-1?(e=a.substring(0,r).trim(),t=a.substring(r+1).trim()):(e=a,t="")}else{const r=a.indexOf(" ");r!==-1?(e=a.substring(0,r).trim(),t=a.substring(r+1).trim()):(e=a,t="")}return e&&!e.startsWith("/")&&(e="/"+e),e=e.replace(/\s+/g,"").toLowerCase(),!e||e==="/"?{isValid:!1,code:"",description:t,error:'Kode shorthand tidak terdeteksi. Gunakan awalan "/" (misal: /facelock).'}:t?{isValid:!0,code:e,description:t,error:null}:{isValid:!1,code:e,description:"",error:"Deskripsi fungsi belum diisi. Masukkan penjelasan fungsi setelah kode shorthand."}}function Ze(o,a){const e=o.replace(/^\//,"");if(!e)return"Custom Shorthand";const t=e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").trim().split(/\s+/).map(i=>i.charAt(0).toUpperCase()+i.slice(1).toLowerCase());return t.length>0&&t[0].length>0?t.join(" "):e.charAt(0).toUpperCase()+e.slice(1)}const bt=[{target:"Wajah",keywords:["wajah","face","muka","mata","hidung","bibir","senyum","pipi","alis","dagu"]},{target:"Rambut",keywords:["rambut","hair","helai","keriting","lurus","poni","warna rambut"]},{target:"Pakaian",keywords:["pakaian","baju","outfit","busana","celana","jaket","kemeja","kaos","gaun","rok"]},{target:"Aksesori / Kepala",keywords:["hijab","jilbab","kerudung","topi","headwear","kacamata","topeng"]},{target:"Tubuh & Pose",keywords:["pose","badan","tubuh","postur","tangan","kaki","gestur","anatomi","berdiri","duduk"]},{target:"Latar Belakang",keywords:["latar","background","ruangan","pemandangan","interior","eksterior","outdoor","indoor","dinding","suasana"]},{target:"Pencahayaan",keywords:["cahaya","lighting","pencahayaan","sinar","bayangan","shadow","highlight","illumination"]},{target:"Warna & Tone",keywords:["warna","tone","color","palet","gradasi","saturasi","warm","cool","kontras"]},{target:"Kamera & Lensa",keywords:["kamera","lensa","lens","bokeh","angle","sudut","depth of field","dof","aperture"]},{target:"Kualitas Gambar",keywords:["kualitas","detail","tajam","sharp","resolusi","tekstur","microtexture","jernih"]}],kt=["kunci","lock","mempertahankan","pertahankan","menjaga","tahan","freeze","preserve","tetap","konsisten","identitas asli"];function Xe(o,a){if(!o||!a)return!1;const e=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(?:^|[^a-zA-Z0-9])${e}(?:[^a-zA-Z0-9]|$)`,"i").test(o)}function at(o){const a=o.toLowerCase();for(const e of bt)for(const t of e.keywords)if(Xe(a,t))return e.target;return""}function et(o,a){const e=o.toLowerCase();if(kt.some(i=>Xe(e,i))&&ie.LOCK_PRESERVATION)return"LOCK_PRESERVATION";switch(a){case"Wajah":return"FACE_IDENTITY";case"Rambut":return"HAIR";case"Aksesori / Kepala":return"HEADWEAR";case"Pakaian":return"OUTFIT";case"Tubuh & Pose":return"BODY_POSE";case"Latar Belakang":return"BACKGROUND";case"Pencahayaan":return"LIGHTING";case"Warna & Tone":return"COLOR_TONE";case"Kamera & Lensa":return"CAMERA_PHOTO";case"Kualitas Gambar":return"IMAGE_QUALITY"}return e.includes("rasio")||e.includes("aspect")||e.includes("canvas")?"CANVAS_RATIO":e.includes("transparan")||e.includes("alpha")||e.includes("png")?"TRANSPARENCY":e.includes("hapus objek")||e.includes("tambah objek")?"OBJECT_EDITING":e.includes("gaya")||e.includes("style")||e.includes("cinematic")||e.includes("vintage")?"STYLE_EFFECT":""}function tt(o,a,e){const t=o.toLowerCase();return a==="LOCK_PRESERVATION"?e==="Wajah"||t.includes("wajah")||t.includes("face")||t.includes("identitas")?za.FACE_PRESERVATION:e==="Rambut"||t.includes("rambut")||t.includes("hair")?za.HAIR_PRESERVATION:e==="Pakaian"||t.includes("pakaian")||t.includes("outfit")?za.OUTFIT_PRESERVATION:e==="Aksesori / Kepala"||t.includes("hijab")||t.includes("headwear")?za.HEADWEAR_PRESERVATION:e==="Tubuh & Pose"||t.includes("badan")||t.includes("tubuh")||t.includes("body")?za.BODY_PRESERVATION:e==="Latar Belakang"||t.includes("latar")||t.includes("background")?za.BACKGROUND_PRESERVATION:za.DETAIL_PRESERVATION:a==="FACE_IDENTITY"?t.includes("swap")||t.includes("tukar")||t.includes("ganti wajah")?"FACE_SWAP":t.includes("ekspresi")||t.includes("senyum")||t.includes("tertawa")||t.includes("marah")?"FACE_EXPRESSION":"FACE_RETOUCH":a==="HAIR"?t.includes("warna")||t.includes("color")||t.includes("cat")?"HAIR_COLOR":"HAIR_EDIT":a==="HEADWEAR"?t.includes("lepas")||t.includes("hapus")||t.includes("buka")?"HEADWEAR_REMOVAL":t.includes("tambah")||t.includes("pasang")||t.includes("pakai")?"HEADWEAR_ADD":"HEADWEAR_PRESERVATION":a==="OUTFIT"?t.includes("lepas")||t.includes("hapus")||t.includes("buka")?"OUTFIT_REMOVE":t.includes("warna")||t.includes("color")?"OUTFIT_COLOR":"OUTFIT_EDIT":a==="BODY_POSE"?t.includes("full body")||t.includes("seluruh badan")?"FRAMING_FULL_BODY":t.includes("close up")||t.includes("closeup")||t.includes("wajah dekat")?"FRAMING_CLOSEUP":"BODY_POSE_EDIT":a==="BACKGROUND"?t.includes("hapus")||t.includes("hilang")||t.includes("remove")?"BACKGROUND_REMOVAL":t.includes("blur")||t.includes("buram")||t.includes("bokeh")?"BACKGROUND_BLUR":t.includes("bersih")||t.includes("clean")?"BACKGROUND_CLEAN":(t.includes("ganti latar")||t.includes("pindah"),"BACKGROUND_REPLACEMENT"):a==="LIGHTING"?t.includes("studio")?"LIGHTING_STUDIO":t.includes("golden")||t.includes("sore")||t.includes("senja")?"LIGHTING_GOLDENHOUR":t.includes("siang")||t.includes("daylight")?"LIGHTING_DAYLIGHT":"LIGHTING_ENHANCEMENT":a==="IMAGE_QUALITY"?t.includes("tajam")||t.includes("sharp")?"IMAGE_SHARPENING":t.includes("noise")||t.includes("denoise")||t.includes("butiran")?"IMAGE_DENOISE":"IMAGE_HIGHDETAIL":a==="COLOR_TONE"?t.includes("hangat")||t.includes("warm")?"COLOR_WARM_TONE":t.includes("dingin")||t.includes("cool")?"COLOR_COOL_TONE":"COLOR_NATURALTONE":za[a]?a:""}function nt(o,a,e){const t=o.replace(/^\//,"").toLowerCase(),i=new Set;if(t){i.add(t);const n=t.replace(/[_-]+/g," ");n!==t&&i.add(n)}const r=new Set(["dan","atau","yang","untuk","pada","di","ke","dari","agar","supaya","dengan","secara","ini","itu","adalah","sebagai","dapat","bisa","akan","the","and","for","with","to","in","of","on","at","is","a","an"]),s=a.toLowerCase().replace(/[^\w\s-]/g," ").split(/\s+/).filter(n=>n.length>2&&!r.has(n));for(const n of s)if(i.add(n),i.size>=6)break;return e&&i.add(e.toLowerCase()),Array.from(i).slice(0,6)}function it(o,a,e,t=[]){if(!t||!Array.isArray(t)||t.length===0)return[];if(!a&&!e)return[];const i=(o||"").trim().toLowerCase(),r=[];for(const s of t){if(!s||!s.code||s.code.trim().toLowerCase()===i)continue;const l=s.functionGroup&&a&&s.functionGroup===a,d=s.target&&e&&s.target.toLowerCase()===e.toLowerCase();l&&d&&r.push(s.code)}return r.slice(0,2)}function ft(o,a=[],e={}){const t=ht(o);if(!t.isValid)return{success:!1,error:t.error,metadata:null,fieldStatus:null};const{code:i,description:r}=t,s=`${i} ${r}`,n=a.some(h=>h&&h.code&&h.code.toLowerCase()===i.toLowerCase()),l=Ze(i),d=at(s),c=et(s,d),g=tt(s,c,d),p=nt(i,r,d),k=it(i,g,d,a),u={code:n?"DUPLICATE":"OK",name:l?"OK":"NEEDS_REVIEW",category:c?"OK":"NEEDS_REVIEW",target:d?"OK":"NEEDS_REVIEW",functionGroup:g?"OK":"NEEDS_REVIEW",description:r?"OK":"NEEDS_REVIEW",semanticTriggers:p.length>0?"OK":"NEEDS_REVIEW",equivalentTo:k.length>0?"VERIFIED":"EMPTY"},m={hasManualValues:!1,manualFields:[]};if(e){const h=["code","name","category","target","functionGroup","description","triggers","equivalent"];for(const b of h)e[b]&&e[b].trim()&&(m.hasManualValues=!0,m.manualFields.push(b))}return{success:!0,error:null,metadata:{code:i,name:l,category:c,target:d,functionGroup:g,description:r,semanticTriggers:p,equivalentTo:k},fieldStatus:u,isDuplicate:n,overwriteInfo:m}}const yt="psa_v2_catalog_db",At=1,Ua="user_shorthands";class vt{constructor(a=Me){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((e,t)=>{const i=window.indexedDB.open(yt,At);i.onupgradeneeded=r=>{const s=r.target.result;s.objectStoreNames.contains(Ua)||s.createObjectStore(Ua,{keyPath:"code"})},i.onsuccess=r=>e(r.target.result),i.onerror=r=>t(r.target.error)}),await this.loadFromIndexedDB()}catch(e){console.warn("IndexedDB unavailable, using memory fallback:",e)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,t)=>{const s=this.db.transaction([Ua],"readonly").objectStore(Ua).getAll();s.onsuccess=()=>e(s.result||[]),s.onerror=()=>t(s.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const t of this.userCatalog.values()){const i=e.findIndex(r=>r.code===t.code);i!==-1?e[i]={...e[i],...t}:e.push(t)}return a?e:e.filter(t=>t.status!=="DISABLED")}searchShorthands(a,e={}){const t=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return t;const i=a.toLowerCase().trim(),r=[];for(const s of t){let n=ce(s,i);s.functionGroup&&s.functionGroup.toLowerCase().includes(i)&&(n=Math.max(n,60)),s.equivalentTo&&s.equivalentTo.some(l=>l.toLowerCase().includes(i))&&(n=Math.max(n,70)),s.relationships&&s.relationships.some(l=>{var d,c;return((d=l.code)==null?void 0:d.toLowerCase().includes(i))||((c=l.relationType)==null?void 0:c.toLowerCase().includes(i))})&&(n=Math.max(n,45)),n>0&&r.push({item:s,score:n})}return r.sort((s,n)=>n.score-s.score),r.map(s=>s.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(t=>t.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(t=>t.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(t=>t.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const t=this.getAll().find(i=>i.code===a||i.target===a);return!t||!t.relationships?[]:t.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),t=e.find(r=>r.code.toLowerCase()===a.code.toLowerCase());if(t)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:t,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const r=e.find(s=>s.functionGroup===a.functionGroup);if(r)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:r,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${r.code}).`}}const i=e.find(r=>r.equivalentTo&&r.equivalentTo.some(s=>s.toLowerCase()===a.code.toLowerCase()));return i?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:i,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${i.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((t,i)=>{const n=this.db.transaction([Ua],"readwrite").objectStore(Ua).put(e);n.onsuccess=()=>t(),n.onerror=()=>i(n.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(t=>t.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((t,i)=>{const n=this.db.transaction([Ua],"readwrite").objectStore(Ua).delete(a);n.onsuccess=()=>t(),n.onerror=()=>i(n.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:t,geminiKey:i,secret:r,password:s,...n}=e;return n});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let t=null;if(typeof a=="string")try{t=JSON.parse(a)}catch(s){throw new Error("Format JSON impor tidak valid: "+s.message)}else t=a;const i=Array.isArray(t)?t:t.entries||[];if(!Array.isArray(i))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((s,n)=>{const c=this.db.transaction([Ua],"readwrite").objectStore(Ua).clear();c.onsuccess=()=>s(),c.onerror=()=>n(c.error)}));let r=0;for(const s of i){if(!s||!s.code||this.coreCatalog.some(k=>k.code===s.code)&&e==="MERGE")continue;const{apiKey:l,geminiKey:d,secret:c,password:g,...p}=s;await this.add({...p,status:p.status||"APPROVED",source:p.source||"USER"}),r++}return{success:!0,count:r,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const r=this.db.transaction([Ua],"readwrite").objectStore(Ua).clear();r.onsuccess=()=>a(),r.onerror=()=>e(r.error)}),!0}}const Ba={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},ea={getApiKey(){try{return localStorage.getItem(Ba.GEMINI_API_KEY)||""}catch{return""}},setApiKey(o){try{return o?localStorage.setItem(Ba.GEMINI_API_KEY,o.trim()):localStorage.removeItem(Ba.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(Ba.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{const o=(localStorage.getItem(Ba.GEMINI_MODEL)||"gemini-2.0-flash").trim().replace(/^models\//,"");return o.includes("1.5-pro")||o.includes("3.5")&&o!=="gemini-3.5-flash-lite"||o.includes("3.8")||o.includes("2.5-pro")?(localStorage.setItem(Ba.GEMINI_MODEL,"gemini-2.0-flash"),"gemini-2.0-flash"):o}catch{return"gemini-2.0-flash"}},setModel(o){try{const a=(o||"gemini-2.0-flash").trim().replace(/^models\//,"");return localStorage.setItem(Ba.GEMINI_MODEL,a),!0}catch{return!1}},getCustomCatalog(){try{const o=localStorage.getItem(Ba.CUSTOM_CATALOG);return o?JSON.parse(o):[]}catch{return[]}},saveCustomCatalog(o){try{return localStorage.setItem(Ba.CUSTOM_CATALOG,JSON.stringify(o)),!0}catch{return!1}},getUiPreferences(){try{const o=localStorage.getItem(Ba.UI_PREFS);return o?JSON.parse(o):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(o){try{return localStorage.setItem(Ba.UI_PREFS,JSON.stringify(o)),!0}catch{return!1}}};class Tt{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,t)=>t.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const t=this.patches.get(a);return t?(t.enabled=!!e,!0):!1}safeExecuteHook(a,e,t={}){let i=e;const r=this.getActivePatches(a);for(const s of r)try{const n=s.hooks[a];if(typeof n=="function"){const l=n(i,t);l!==void 0&&(i=l)}}catch(n){console.warn(`[PatchManager] Peringatan: Patch "${s.id}" pada hook "${a}" gagal dieksekusi:`,n),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:s.id,hookName:a,error:n.message,stack:n.stack})}return i}async safeExecuteHookAsync(a,e,t={}){let i=e;const r=this.getActivePatches(a);for(const s of r)try{const n=s.hooks[a];if(typeof n=="function"){const l=await n(i,t);l!==void 0&&(i=l)}}catch(n){console.warn(`[PatchManager] Peringatan: Async Patch "${s.id}" pada hook "${a}" gagal:`,n),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:s.id,hookName:a,error:n.message})}return i}}const Ge=new Tt,Et={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(o,a){return o&&{...o,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},St={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(o){return o&&{...o,kamusStatus:{available:!0,version:"3.1.0"}}}}};Ge.registerPatch(Et);Ge.registerPatch(St);class Rt{constructor(a=Me,e=Ge){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const t=this.normalize(a),i=this.extractExistingShorthands(a),r=this.stripShorthands(a),s=this.analyzeIntent(r),{editAreas:n,lockedAreas:l,unchangedAreas:d}=this.extractAreas(r,s),c=this.queryPrimaryShorthands(r,n,l,s),g=this.deduplicateByFunctionGroup(c).map(w=>({...w,isPrimary:!0,checked:!0,priority:"WAJIB"})),p=this.discoverRelatedShorthands(r,g,n,l),k=[...g,...p],u=this.detectConflicts(n,l,g,i),m=this.evaluateExclusions(k,g);let h=[];if(e&&Array.isArray(e))h=[...e];else{const w=g.sort((T,R)=>(T.promptIndex??999)-(R.promptIndex??999)).map(T=>T.code),v=new Set([...i,...w]);h=Array.from(v)}for(const w of k)w.checked=h.includes(w.code),w.active=w.checked;const b=this.generateVisualTransformation(n,l,r),f=this.buildOptimalPrompt(r,h),y={rawPrompt:a,normalizedPrompt:t,cleanText:r,intent:s,editAreas:n,lockedAreas:l,unchangedAreas:d,conflicts:u,primaryShorthands:g,relatedShorthands:p,recommendations:k,exclusions:m,installedShorthands:h,visualTransformation:b,optimalPrompt:f,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",y,{engine:this,patchManager:this.patchManager,rawPrompt:a}):y}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,t=[];let i;for(;(i=e.exec(a))!==null;)t.push(i[0]);return Array.from(new Set(t))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let t="MODIFIKASI_VISUAL",i="Gambar",r="Memproses instruksi visual pada gambar.",s="MEDIUM",n="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(t="PENINGKATAN_PENCAHAYAAN",i="Pencahayaan & Tata Cahaya",r="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",s="HIGH",n="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(t="PELEPASAN_PENUTUP_KEPALA",i="Hijab / Penutup Kepala",r="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",s="HIGH",n="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(t="PENGGANTIAN_BUSANA",i="Pakaian & Outfit",r="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",s="HIGH",n="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(t="PENAJAMAN_DETAIL",i="Mikrokontras & Detail",r="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",s="HIGH",n="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(t="PENGHAPUSAN_LATAR",i="Latar Belakang / Background",r="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",s="CRITICAL",n="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(t="PENGGANTIAN_LATAR",i="Latar Belakang / Background",r="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",s="HIGH",n="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(t="PENYESUAIAN_RASIO_KANVAS",i="Kanvas & Dimensi",r="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",s="HIGH",n="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(t="MODIFIKASI_RAMBUT",i="Rambut & Gaya Rambut",r="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",s="HIGH",n="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(t="MODIFIKASI_BENTUK_TUBUH",i="Bentuk Tubuh & Proporsi Lekuk",r="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",s="HIGH",n="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(t="PENYEMPURNAAN_ANATOMI_TANGAN",i="Tangan & Jari Subjek",r="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",s="HIGH",n="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(t="PENINGKATAN_RESOLUSI",i="Resolusi & Detail Gambar",r="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",s="HIGH",n="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(t="PERLUASAN_KANVAS_OUTPAINT",i="Bidang & Batas Kanvas Foto",r="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",s="HIGH",n="CANVAS_RATIO"),{primaryAction:t,primaryTarget:i,summary:r,priority:s,category:n}}extractAreas(a,e){const t=a.toLowerCase(),i=[],r=[],s=new Set,n=A=>{for(const S of A){if(!t.includes(S))continue;if([`jangan ubah ${S}`,`jangan ganti ${S}`,`jangan sentuh ${S}`,`jangan mengubah ${S}`,`pertahankan ${S}`,`kunci ${S}`,`jaga ${S}`,`${S} asli`,`${S} tetap`,`${S} sama`,`${S} harus tetap sama`,`keep ${S}`,`same ${S}`,`preserve ${S}`].some(O=>t.includes(O)))return!0}return!1},l=A=>{for(const S of A){if(!t.includes(S))continue;if([`ubah ${S}`,`ganti ${S}`,`hapus ${S}`,`hilangkan ${S}`,`perbaiki ${S}`,`tingkatkan ${S}`,`buat ${S}`,`lepas ${S}`,`lepaskan ${S}`,`buka ${S}`,`change ${S}`,`remove ${S}`].some(O=>t.includes(O))||S==="pencahayaan"&&(t.includes("perbaiki pencahayaan")||t.includes("lighting")||t.includes("terangkan"))||S==="hijab"&&(t.includes("hapus hijab")||t.includes("lepas hijab")||t.includes("lepaskan hijab")||t.includes("tanpa hijab"))||S==="baju"&&(t.includes("tanktop")||t.includes("kemeja")||t.includes("gaun")||t.includes("jaket"))||S==="rasio"&&(t.includes("9:16")||t.includes("16:9")||t.includes("1:1")||t.includes("4:5"))||S==="latar"&&(t.includes("latar baru")||t.includes("gunakan latar baru")||t.includes("hapus latar")))return!0}return!1},d=["wajah","muka","face","identitas","paras"];d.some(A=>t.includes(A))&&(s.add("FACE"),n(d)?r.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):l(d)&&i.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:t.includes("ganti wajah")?"/facechange":"/faceedit"}));const c=["hijab","kerudung","jilbab","penutup kepala","topi"];c.some(A=>t.includes(A))&&(s.add("HEADWEAR"),n(c)?r.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):i.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const g=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(g.some(A=>t.includes(A)))if(s.add("OUTFIT"),n(g))r.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let A="Pakaian subjek";t.includes("tanktop putih tali tipis")?A="Tanktop putih tali tipis":t.includes("tanktop")?A="Tanktop":t.includes("gaun")?A="Gaun":t.includes("kemeja")&&(A="Kemeja"),i.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${A}.`,shorthand:"/outfit"})}const p=["latar","background","backdrop","lingkungan"];if(p.some(A=>t.includes(A))&&(s.add("BACKGROUND"),n(p)?r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):t.includes("hapus")||t.includes("transparan")||t.includes("hilangkan")||t.includes("buang")?i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(t.includes("ganti")||t.includes("ubah")||t.includes("baru")||t.includes("gunakan latar baru")||t.includes("studio"))&&i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(t.includes("pencahayaan")||t.includes("lighting")||t.includes("terangkan")||t.includes("cahaya"))&&(s.add("LIGHTING"),i.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(A=>t.includes(A))?(s.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(t.includes("tajam")||t.includes("sharpen")||t.includes("perjelas")||t.includes("detail")||t.includes("ketajaman"))&&(s.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),t.includes("rasio")||t.includes("9:16")||t.includes("16:9")||t.includes("1:1")||t.includes("4:5")||t.includes("format")){s.add("CANVAS_RATIO");let A="Rasio baru",S="/ar 9:16";t.includes("9:16")?(A="9:16 (Vertical)",S="/ar 9:16"):t.includes("16:9")?(A="16:9 (Landscape)",S="/ar 16:9"):t.includes("1:1")?(A="1:1 (Persegi)",S="/ar 1:1"):t.includes("4:5")&&(A="4:5 (Portrait)",S="/ar 4:5"),i.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${A}.`,shorthand:S})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(A=>t.includes(A))&&(s.add("CANVAS_RATIO"),i.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(t.includes("full body")||t.includes("seluruh tubuh")||t.includes("badan penuh"))&&(s.add("BODY_POSE"),i.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const h=["rambut","hair","botak","cukur"];if(h.some(A=>t.includes(A))){s.add("HAIR");const A=n(h),S=l(h)||t.includes("botak")||t.includes("merah")||t.includes("cat")||t.includes("gaya rambut");A&&S?(r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:t.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):A?r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):S&&i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:t.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const b=["tubuh","badan","pose","postur"],f=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],y=f.some(A=>t.includes(A));(b.some(A=>t.includes(A))||y)&&(s.add("BODY_POSE"),n([...b,...f])?r.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):y&&i.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const v=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];v.some(A=>t.includes(A))&&(s.add("BODY_POSE"),n(v)?r.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):i.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const R=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(A=>!s.has(A.key)).map(A=>({entity:A.key,label:A.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${A.label.toLowerCase()}.`}));return{editAreas:i,lockedAreas:r,unchangedAreas:R}}findPromptIndex(a,e,t=[]){const i=a.toLowerCase();let r=999;const s=[...e.semanticTriggers||[],...t];for(const n of s){if(!n||n.length<3)continue;const l=i.indexOf(n.toLowerCase());l!==-1&&l<r&&(r=l)}return r}queryPrimaryShorthands(a,e,t,i){const r=new Map;for(const s of t)if(s.shorthand){const n=this.catalog.find(l=>l.code===s.shorthand);if(n){const l=this.findPromptIndex(a,n,[s.label,s.entity,"jangan","pertahankan","kunci"]);r.set(n.code,{item:n,code:n.code,name:n.name,category:n.category,target:s.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${s.description.toLowerCase()}`,score:100,promptIndex:l})}}for(const s of e)if(s.shorthand){const n=this.catalog.find(l=>l.code===s.shorthand);if(n){const l=this.findPromptIndex(a,n,[s.label,s.entity,"ubah","ganti","hapus"]);r.set(n.code,{item:n,code:n.code,name:n.name,category:s.category||n.category,target:s.label,priority:"WAJIB",reason:`Mendukung eksekusi ${s.description.toLowerCase()}`,score:95,promptIndex:l})}}if(e.some(s=>s.entity==="LIGHTING")&&!r.has("/enhance")){const s=this.catalog.find(n=>n.code==="/enhance");s&&r.set("/enhance",{item:s,code:s.code,name:s.name,category:s.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,s,["pencahayaan","lighting"])})}if(e.some(s=>s.entity==="IMAGE_QUALITY")&&!r.has("/sharpen")&&!r.has("/highresolution")){const s=this.catalog.find(n=>n.code==="/sharpen");s&&r.set("/sharpen",{item:s,code:s.code,name:s.name,category:s.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,s,["tajam","sharpen"])})}for(const s of this.catalog){if(r.has(s.code))continue;const n=ce(s,a);if(n>=70){if(t.some(g=>{if(g.shorthand&&s.conflicts&&s.conflicts.includes(g.shorthand))return!0;const p=this.catalog.find(k=>k.code===g.shorthand);return!!(p&&p.conflicts&&p.conflicts.includes(s.code))})||Array.from(r.values()).some(g=>{var p,k;return(k=(p=g.item)==null?void 0:p.relationships)==null?void 0:k.some(u=>u.code===s.code&&u.relationType==="ALTERNATIVE")}))continue;s.category;const c=this.findPromptIndex(a,s);r.set(s.code,{item:s,code:s.code,name:s.name,category:s.category,target:s.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${s.name}'.`,score:n,promptIndex:c})}}return Array.from(r.values())}deduplicateByFunctionGroup(a){var i,r,s;const e=new Map;for(const n of a){const l=((i=n.item)==null?void 0:i.functionGroup)||((r=n.item)==null?void 0:r.category)||n.code;e.has(l)?e.get(l).push(n):e.set(l,[n])}const t=[];for(const[n,l]of e.entries()){if(l.length===1){t.push(l[0]);continue}l.sort((p,k)=>{var y,w,v,T;const u=(y=p.item)!=null&&y.preferredRepresentative?1:0,m=(w=k.item)!=null&&w.preferredRepresentative?1:0;if(m!==u)return m-u;const h={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},b=h[(v=p.item)==null?void 0:v.status]||2,f=h[(T=k.item)==null?void 0:T.status]||2;return f!==b?f-b:(k.score||0)!==(p.score||0)?(k.score||0)-(p.score||0):p.code.length-k.code.length});const d={...l[0]},c=l.slice(1).map(p=>p.code),g=Array.from(new Set([...((s=d.item)==null?void 0:s.equivalentTo)||[],...c,...l.slice(1).flatMap(p=>{var k;return((k=p.item)==null?void 0:k.equivalentTo)||[]})])).filter(p=>p!==d.code);d.item={...d.item,equivalentTo:g},d.equivalentTo=g,t.push(d)}return t}hasConflict(a,e,t){if(!a)return!1;for(const i of e){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const r=this.catalog.find(s=>s.code===i);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}for(const i of t){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const r=this.catalog.find(s=>s.code===i);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,t,i){var k;const r=new Set(e.map(u=>u.code));for(const u of e)if(u.equivalentTo)for(const m of u.equivalentTo)r.add(m);const s=new Set(e.map(u=>{var m,h;return((m=u.item)==null?void 0:m.functionGroup)||((h=u.item)==null?void 0:h.category)})),n=new Set([...t.map(u=>u.entity),...i.map(u=>u.entity)]),l=new Set(i.map(u=>u.shorthand).filter(Boolean)),d=new Map;for(const u of e){const m=((k=u.item)==null?void 0:k.relationships)||[];for(const h of m){if(!h.code||r.has(h.code))continue;const b=this.catalog.find(y=>y.code===h.code);if(!b||this.hasConflict(b,l,r)||ce(b,a)<0)continue;const f=b.functionGroup||b.category;s.has(f)||b.category==="HEADWEAR"&&!n.has("HEADWEAR")||d.has(b.code)||d.set(b.code,{item:b,code:b.code,name:b.name,category:b.category,target:b.target,functionGroup:f,description:b.description,relationship:h.relationType||"DIRECTLY_RELATED",reason:h.reason||`Berhubungan dengan ${u.name}`,source:b.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const c={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const u of n){const m=c[u]||[];for(const h of m)for(const b of this.catalog){if(r.has(b.code)||d.has(b.code)||h.category&&b.category!==h.category||h.target&&b.target!==h.target||b.category==="HEADWEAR"&&!n.has("HEADWEAR")||b.category==="TRANSPARENCY"&&!n.has("BACKGROUND")||this.hasConflict(b,l,r)||ce(b,a)<0)continue;const f=b.functionGroup||b.category;s.has(f)||d.set(b.code,{item:b,code:b.code,name:b.name,category:b.category,target:b.target,functionGroup:f,description:b.description,relationship:h.relation||"CONTEXTUAL",reason:h.reason||`Berhubungan dengan area ${u}`,source:b.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const g=Array.from(d.values());return this.deduplicateByFunctionGroup(g).map(u=>({...u,isPrimary:!1,checked:!1,priority:u.priority||"DISARANKAN"}))}detectConflicts(a,e,t,i){const r=[];for(const l of a){const d=e.find(c=>c.entity===l.entity);if(d){const c={id:`conflict-${l.entity.toLowerCase()}`,entity:l.entity,label:l.label,type:"EDIT_VS_LOCK",shorthandA:d.shorthand||`[Lock ${l.entity}]`,shorthandB:l.shorthand||`[Ubah ${l.entity}]`,instructionA:d.description,instructionB:l.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${l.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};c.suggestion=this.generateConflictSuggestion(c),r.push(c)}}const s=Array.isArray(t)?t.map(l=>typeof l=="string"?l:l.code):Array.from(t.keys?t.keys():[]),n=Array.from(new Set([...s,...i]));for(const l of n){const d=this.catalog.find(c=>c.code===l);if(!(!d||!d.conflicts||d.conflicts.length===0)){for(const c of d.conflicts)if(n.includes(c)){if(r.some(k=>k.shorthandA===l&&k.shorthandB===c||k.shorthandA===c&&k.shorthandB===l))continue;const p=`conflict-${[l,c].sort().join("-")}`;if(!r.some(k=>k.id===p)){const k=this.catalog.find(m=>m.code===c),u={id:p,entity:d.target,label:d.name,type:"SHORTHAND_CLASH",shorthandA:l,shorthandB:c,instructionA:d.description,instructionB:k?k.description:`Konflik dengan direktif ${c}`,reason:`Shorthand ${l} bertentangan langsung dengan ${c} pada target ${d.target}.`,options:[{id:"keep_a",label:`Gunakan ${l}`},{id:"keep_b",label:`Gunakan ${c}`}]};u.suggestion=this.generateConflictSuggestion(u,d,k),r.push(u)}}}}return r}generateConflictSuggestion(a,e=null,t=null){const i=(a.shorthandA||"").toLowerCase(),r=(a.shorthandB||"").toLowerCase(),s=[i,r].sort().join(" vs ");if(s==="/backgroundlock vs /bgblur"||i==="/backgroundlock"&&r==="/bgblur"||r==="/backgroundlock"&&i==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(s==="/backgroundlock vs /studiobg"||i==="/backgroundlock"&&r==="/studiobg"||r==="/backgroundlock"&&i==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(s==="/backgroundlock vs /bgreplace"||i==="/backgroundlock"&&r==="/bgreplace"||r==="/backgroundlock"&&i==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(s==="/backgroundlock vs /bgremove"||i==="/backgroundlock"&&r==="/bgremove"||r==="/backgroundlock"&&i==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(s==="/bgremove vs /bgreplace"||i==="/bgreplace"&&r==="/bgremove"||i==="/bgremove"&&r==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(s==="/bgblur vs /bgremove"||i==="/bgblur"&&r==="/bgremove"||i==="/bgremove"&&r==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(s==="/bgremove vs /studiobg"||i==="/studiobg"&&r==="/bgremove"||i==="/bgremove"&&r==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(s==="/bgblur vs /studiobg"||i==="/studiobg"&&r==="/bgblur"||i==="/bgblur"&&r==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(i==="/facelock"||r==="/facelock"){const l=i==="/facelock"?r:i;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${l}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${l}.`}if(i==="/outfitlock"||r==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${i==="/outfitlock"?r:i}.`;if(i==="/hairlock"||r==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${i==="/hairlock"?r:i}.`;if(i==="/headwearlock"||r==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${i==="/headwearlock"?r:i} jika ingin melepas atau mengganti penutup kepala.`;if(i==="/bodylock"||r==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${i==="/bodylock"?r:i}.`;if(s==="/cinematic vs /rawphoto"||i==="/cinematic"&&r==="/rawphoto"||i==="/rawphoto"&&r==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(s==="/rawphoto vs /vintage"||i==="/vintage"&&r==="/rawphoto"||i==="/rawphoto"&&r==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(s==="/cooltone vs /warmtone"||i==="/warmtone"&&r==="/cooltone"||i==="/cooltone"&&r==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(i==="/monochrome"||r==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${i==="/monochrome"?r:i} jika gambar harus tampil berwarna.`;if(s==="/bokeh vs /sharpen"||i==="/sharpen"&&r==="/bokeh"||i==="/bokeh"&&r==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const l=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${l}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${l}) dan batalkan instruksi ubah.`}const n=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${n}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const t=new Set(a.map(s=>s.code));for(const s of a)if(s.equivalentTo)for(const n of s.equivalentTo)t.add(n);const i=new Set(e.map(s=>s.code)),r=[];for(const s of this.catalog){if(t.has(s.code))continue;let n="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const l=e.find(d=>{var c;return!!(s.conflicts&&s.conflicts.includes(d.code)||(c=d.item)!=null&&c.conflicts&&d.item.conflicts.includes(s.code))});l?n=`Bertentangan dengan direktif aktif: ${l.code} (${l.name}).`:s.category==="LOCK_PRESERVATION"||s.category==="FACE_IDENTITY"?s.code==="/facelock"||s.code==="/faceedit"||s.code==="/facechange"?n="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":s.code==="/hairlock"?n="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":s.code==="/backgroundlock"?n="Latar belakang tidak diminta untuk dikunci secara eksplisit.":s.code==="/outfitlock"?n="Pakaian subjek tidak diminta untuk dikunci.":s.code==="/headwearlock"&&(n="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):s.category==="HAIR"?n="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":s.category==="OUTFIT"?i.has("/outfit")?s.code==="/outfit-remove"?n="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":s.code==="/outfit-color"?n="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":n="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":n="Tidak ada instruksi yang memodifikasi pakaian atau busana.":s.category==="HEADWEAR"?n="Tidak ada instruksi penutup kepala atau hijab.":s.category==="BACKGROUND"||s.category==="TRANSPARENCY"?s.code==="/bgremove"?n="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":s.code==="/bgreplace"?n="Tidak ada permintaan penggantian latar belakang ke scene baru.":n="Tidak ada permintaan manipulasi latar belakang.":s.category==="CANVAS_RATIO"?n="Tidak ada instruksi pengubahan rasio kanvas gambar.":s.category==="BODY_POSE"?n="Tidak ada permintaan perubahan pose atau framing seluruh badan.":s.category==="STYLE_EFFECT"||s.category==="CAMERA_PHOTO"?n="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":s.category==="EXPRESSION"?n="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":s.category==="OBJECT"&&(n="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),r.push({code:s.code,name:s.name,category:s.category,target:s.target,description:s.description,reason:n})}return r}generateVisualTransformation(a,e,t){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:t||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const i=a.map(l=>l.label).join(", "),r=e.map(l=>l.label).join(", ");let s="Elemen visual awal gambar",n="Elemen visual teroptimasi";if(a.some(l=>l.entity==="LIGHTING"))s="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",n="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(l=>l.entity==="HEADWEAR"))s="Subjek mengenakan penutup kepala / hijab asli",n="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(r?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(l=>l.entity==="OUTFIT")){const l=a.find(d=>d.entity==="OUTFIT");s="Busana awal subjek",n=`${l?l.description:"Busana baru terpasang"}`+(r?`; ${r} tetap terkunci aman.`:"")}else if(a.some(l=>l.entity==="BACKGROUND"&&l.action.includes("REMOVE")))s="Foto subjek dengan latar belakang bawaan",n="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(l=>l.entity==="BACKGROUND"&&l.action.includes("REPLACE")))s="Latar belakang awal foto",n="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(l=>l.entity==="CANVAS_RATIO")){const l=a.find(d=>d.entity==="CANVAS_RATIO");s="Dimensi kanvas bawaan foto",n=`${l?l.description:"Dimensi kanvas baru disesuaikan"}`}return{from:s,to:n,summary:`Transformasi pada [${i||"Tanpa Edit"}] dengan preservasi pada [${r||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let t=a.trim();t&&!t.endsWith(".")&&!t.endsWith("!")&&!t.endsWith("?")&&(t+=".");const i=e.join(" ");return t&&i?`${t} ${i}`:i||t}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",generatedPrompt:"",visionData:null,visualBreakdown:null,timestamp:null}}}function oe(o,a=1,e=.5){if(a<.12)return e>.85?"putih bersih / krem netral":e>.65?"abu-abu terang netral":e>.35?"abu-abu netral":e>.15?"abu-abu arang gelap":"hitam pekat monokromatik";switch(o){case"cyan":case"teal":return"biru toska / cyan cerah / denim";case"blue":return"biru muda / denim cerah";case"navy":return"biru tua / biru kobalt";case"pink":return"merah muda / pink pastel lembut";case"purple":case"violet":return"ungu lavender / violet";case"red":return"merah menyala / crimson";case"orange":return"oranye hangat / amber";case"yellow":return"kuning cerah / pastel yellow";case"lime":return"hijau muda terang / lime";case"green":return"hijau zamrud / toska alami";default:return"netral harmonis"}}function ye(o,a=1,e=.5){if(a<.12)return e>.85?"clean white / soft cream":e>.65?"light neutral gray":e>.35?"medium neutral gray":e>.15?"dark charcoal gray":"deep monochromatic black";switch(o){case"cyan":case"teal":return"light cyan / vibrant teal / sky denim";case"blue":return"vivid denim blue / bright blue";case"navy":return"deep navy blue / royal cobalt";case"pink":return"soft pastel pink / rose";case"purple":case"violet":return"lavender / soft violet";case"red":return"vibrant crimson red";case"orange":return"warm amber orange";case"yellow":return"bright sunny yellow";case"lime":return"bright lime green";case"green":return"emerald green / mint";default:return"balanced neutral tone"}}const It={"9:16":9/16,"2:3":2/3,"3:4":3/4,"1:1":1,"4:3":4/3,"3:2":3/2,"16:9":16/9};function Ae(o,a){if(!o||!a||o<=0||a<=0)return"1:1";const e=o/a;let t="1:1",i=1/0;for(const[r,s]of Object.entries(It)){const n=Math.abs(e-s);n<i&&(i=n,t=r)}return t}function Pe(o,a={}){var p,k;const e=(a.filename||"").toLowerCase(),t=a.width||(o==null?void 0:o.width)||800,i=a.height||(o==null?void 0:o.height)||800,r=t/(i||1),s=Ae(t,i),l=(a.targetAspectRatio&&a.targetAspectRatio!=="Otomatis"&&a.targetAspectRatio!=="auto"?a.targetAspectRatio:null)||s;let d="square";r>1.15?d=r>1.6?"landscape-wide":"landscape":r<.88&&(d=r<.65?"portrait-tall":"portrait");const c=e.startsWith("unduhan")||e.includes("download")||e.includes("jfif"),g=e.includes("3d")||e.includes("chibi")||e.includes("doll")||e.includes("render")||e.includes("toy")||e.includes("figure")||e.includes("figurine")||e.includes("character")||e.includes("boneka")||e.includes("avatar")||e.includes("anime")||e.includes("kartun")||e.includes("cartoon")||e.includes("hoodie");if(!o||typeof o.getContext!="function"){const u=g||c&&e.endsWith(".jfif"),m=u?"cyan":"neutral";return{dimensions:{width:t,height:i,aspectRatio:l,orientation:d},styleType:u?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:u,dominantHue:m,dominantColorIndonesian:oe(m,u?.4:.05,.5),dominantColorEnglish:ye(m,u?.4:.05,.5),secondaryColorIndonesian:u?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:u?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:u?"latar studio netral dengan pencahayaan gradasi halus":"latar belakang netral teratur",lightingStyleIndonesian:u?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:u?.38:.18,avgLum:.55,satRatio:u?.32:.12,edgeDensity:u?16:32,centerContrast:.25}}try{const m=document.createElement("canvas");m.width=64,m.height=64;const h=m.getContext("2d",{willReadFrequently:!0});if(!h)throw new Error("Canvas 2D context unavailable");h.drawImage(o,0,0,64,64);const b=h.getImageData(0,0,64,64).data,f=4096;let y=0,w=0,v=0,T=0,R=0,A=0,S=0,E=0,O=0,N=0,_=0,L=0,I=0,x=0,$=0,D=0;const B={cyan:0,blue:0,navy:0,pink:0,purple:0,red:0,orange:0,yellow:0,lime:0,green:0,white:0,gray:0,black:0},U={},G={},J=new Float32Array(f);for(let la=0;la<64;la++)for(let Z=0;Z<64;Z++){const $a=(la*64+Z)*4,Ca=b[$a],Sa=b[$a+1],Ha=b[$a+2];y+=Ca,w+=Sa,v+=Ha;const Ma=Ca/255,oa=Sa/255,ua=Ha/255,Y=Math.max(Ma,oa,ua),da=Math.min(Ma,oa,ua);let aa=0,F=0,V=(Y+da)/2;if(Y!==da){const Oa=Y-da;switch(F=V>.5?Oa/(2-Y-da):Oa/(Y+da),Y){case Ma:aa=(oa-ua)/Oa+(oa<ua?6:0);break;case oa:aa=(ua-Ma)/Oa+2;break;case ua:aa=(Ma-oa)/Oa+4;break}aa*=60}J[la*64+Z]=V,T+=F,R+=V,la<64/2?I+=V:x+=V,Z<64/2?$+=V:D+=V;let ra="gray";F<.14?V>.82?ra="white":V<.18?ra="black":ra="gray":(A++,aa>=345||aa<15?ra="red":aa>=15&&aa<45?ra="orange":aa>=45&&aa<70?ra="yellow":aa>=70&&aa<105?ra="lime":aa>=105&&aa<145?ra="green":aa>=145&&aa<195?ra="cyan":aa>=195&&aa<225?ra="blue":aa>=225&&aa<260?ra="navy":aa>=260&&aa<295?ra="purple":aa>=295&&aa<345&&(ra="pink")),B[ra]=(B[ra]||0)+1;const pa=Z>=16&&Z<=48&&la>=14&&la<=50,fa=Z<10||Z>=54||la<8||la>=56;pa&&(S+=F,E+=V,O++,U[ra]=(U[ra]||0)+1),fa&&(N+=F,_+=V,L++,G[ra]=(G[ra]||0)+1)}const K=T/f,na=R/f,ia=O?S/O:K,ga=L?N/L:K,P=A/f;let W=0,ha=0;for(let la=1;la<63;la++)for(let Z=1;Z<63;Z++){const $a=J[la*64+Z],Ca=Math.abs(J[la*64+(Z+1)]-J[la*64+(Z-1)]),Sa=Math.abs(J[(la+1)*64+Z]-J[(la-1)*64+Z]);W+=Ca+Sa,ha++}const ba=Math.round(W/(ha||1)*100),H=Object.entries(B).sort((la,Z)=>Z[1]-la[1]).map(la=>la[0]),Q=H[0]||"neutral",q=H[1]||"gray",wa=((p=Object.entries(G).sort((la,Z)=>Z[1]-la[1])[0])==null?void 0:p[0])||"white",Ra=((k=Object.entries(U).sort((la,Z)=>Z[1]-la[1])[0])==null?void 0:k[0])||Q;let ya="pencahayaan studio terdistribusi seimbang dengan fill merata";const Ta=(I-x)/(f/2),Ea=E/(O||1)-_/(L||1);Ea>.15?ya="pencahayaan studio terarah lembut pada subjek utama dengan vignette halus":Ea<-.12?ya="pencahayaan rim light kontur dengan pencahayaan latar belakang terdifusi":Ta>.15?ya="pencahayaan softbox terarah dari sudut atas dengan gradasi bayangan natural":na<.3?ya="pencahayaan dramatis low-key dengan aksen highlight tajam":na>.7&&(ya="pencahayaan terang high-key bersih tanpa bayangan pekat");const Ia=Q==="cyan"||Q==="blue"||Ra==="cyan"||Ra==="blue"||B.cyan+B.blue>f*.1,j=ba<22,C=P>.18||K>.22||Ia;let X="REALISTIC_PHOTO";g||c&&(C||Ia)||j&&C?X="STYLED_3D_CHARACTER":Q==="green"&&r>1.2?X="NATURE_LANDSCAPE":Q==="gray"&&ba>28&&(X="URBAN_ARCHITECTURE");const sa=oe(Ra,ia,na),M=ye(Ra,ia,na),ta=oe(q,K,na),Pa=ye(q,K,na),La=oe(wa,ga,_/(L||1));return{dimensions:{width:t,height:i,aspectRatio:l,orientation:d},styleType:X,isStylizedOr3D:X==="STYLED_3D_CHARACTER",dominantHue:Ra,dominantColorIndonesian:sa,dominantColorEnglish:M,secondaryColorIndonesian:ta,secondaryColorEnglish:Pa,backgroundColorIndonesian:La,lightingStyleIndonesian:ya,contrastLevel:Math.abs(Ea)>.1?"tinggi terarah":"seimbang lembut",avgSat:Number(K.toFixed(2)),avgLum:Number(na.toFixed(2)),satRatio:Number(P.toFixed(2)),edgeDensity:ba,centerContrast:Number((ia-ga).toFixed(2))}}catch(u){console.warn("Canvas deep pixel analysis error:",u);const m=g||c&&e.endsWith(".jfif"),h=m?"cyan":"neutral";return{dimensions:{width:t,height:i,aspectRatio:l,orientation:d},styleType:m?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:m,dominantHue:h,dominantColorIndonesian:oe(h,m?.4:.05,.5),dominantColorEnglish:ye(h,m?.4:.05,.5),secondaryColorIndonesian:m?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:m?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:"latar studio bersih terdifusi",lightingStyleIndonesian:m?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:m?.35:.18,avgLum:.55,satRatio:m?.28:.12,edgeDensity:m?16:30,centerContrast:.2}}}function Ot(o,a={}){var E,O,N,_;const e=a.preferredLang==="en",t=o||{},i=(a.filename||"").toLowerCase(),r=(a.referencePrompt||"").trim(),s=r.toLowerCase(),n=`${i} ${s}`,l=a.targetAspectRatio||a.aspectRatio,d=l&&l!=="Otomatis"&&l!=="auto"?l:t.aspectRatio||((E=t.dimensions)==null?void 0:E.aspectRatio)||t.detectedRatio||"1:1",c=((O=t.dimensions)==null?void 0:O.orientation)||"square",g=t.dominantColorIndonesian||"biru toska / cyan cerah / denim",p=t.dominantColorEnglish||"light cyan / sky blue / denim",k=t.secondaryColorIndonesian||"krem / putih netral",u=t.secondaryColorEnglish||"soft cream / clean white",m=t.backgroundColorIndonesian||"latar studio bersih terdifusi",h=t.backgroundColorEnglish||"clean diffused studio backdrop",b=t.lightingStyleIndonesian||"pencahayaan studio terarah halus";if(!!(t.isStylizedOr3D||t.styleType==="STYLED_3D_CHARACTER"||n.includes("chibi")||n.includes("3d")||n.includes("doll")||n.includes("boneka")||n.includes("figurine")||n.includes("figure")||n.includes("toy")||n.includes("miniatur")||n.includes("render")||n.includes("avatar")||n.includes("karakter")||n.includes("character")||n.includes("anime")||n.includes("kartun")||n.includes("cartoon")||n.includes("hoodie")||i.startsWith("unduhan")&&(i.endsWith(".jfif")||(t.avgSat||0)>.15)))return{mainDescription:e?`Cute stylized 3D animated character figurine with expressive oversized eyes, dressed in an oversized hoodie jacket in ${p}, set against a clean studio backdrop with fine directional 3D illumination.`:`Karakter animasi 3D bergaya cute chibi doll figurine dengan mata besar ekspresif yang berbinar, mengenakan jaket hoodie berwarna ${g} bertekstur kain detail, dengan ${b}.`,subjectDescription:e?"Adorably proportioned 3D character doll featuring luminous stylized anime-like eyes, soft rosy cheeks, and smooth porcelain-grade subsurface scattering skin finish.":"Karakter figurin 3D imut (cute chibi doll) dengan proporsi wajah manis, tatapan mata besar jernih berbinar bergaya animasi 3D, pipi merona lembut, dan permukaan material kulit halus dengan subsurface scattering alami.",poseExpression:e?"Poised centered posture facing directly toward the camera, head charmingly tilted with a curious and serene expression.":"Postur tubuh imut terpusat menghadap ke arah kamera, kepala sedikit condong dengan ekspresi manis menggemaskan dan tatapan mata fokus.",identityPreservation:e?"Preserve the unique stylized 3D doll facial features, large anime eyes, and signature jacket tailoring.":"Pertahankan proporsi wajah karakter figurin 3D yang khas, bentuk mata besar berbinar, ekspresi imut, dan desain jaket asli.",outfitMaterial:e?`Cozy hoodie jacket crafted in ${p} with visible woven thread texture, refined hem stitching, hood drawstring accents, complemented by ${k}.`:`Jaket hoodie tebal berkerudung berwarna ${g} dengan kerapatan rajutan kain tampak jelas, jahitan tepi presisi, aksen tali hoodie, dan perpaduan aksen ${k}.`,environmentBackground:e?`Minimalist studio environment with soft diffused backdrop in ${m}, cleanly isolating the 3D figurine subject.`:`Latar belakang studio minimalis dengan nuansa ${m} terdifusi halus yang mengisolasi karakter secara bersih dan terfokus.`,compositionPerspective:e?`Medium closeup portrait centered framing in ${d} aspect ratio, eye-level perspective with measured shallow depth of field.`:`Komposisi medium portrait closeup terpusat dengan rasio aspek ${d}, sudut pandang kamera sejajar mata (eye-level), dan kedalaman bidang terukur (shallow depth of field).`,lightingColor:e?"Controlled 3D studio lighting with soft key fill, subtle rim highlights along the jacket contours, and clean ambient shadows.":`${b}, rim light tipis di sepanjang kontur jaket dan rambut, serta fill ambient lembut tanpa bayangan kasar.`,cameraLensDof:e?"Macro portrait perspective, crisp focus on the character's eyes and face with creamy studio background bokeh.":"Sudut pandang makro portrait, ketajaman kristal pada detail mata dan tekstur busana, dengan latar belakang bokeh studio yang lembut.",photoStyleRealism:e?"High-end 3D digital character render, Octane Render and Unreal Engine 5 aesthetic, smooth vinyl toy surface texture, extreme microcontrast.":"Gaya render digital 3D berkualitas tinggi (3D character / Octane Render aesthetic), tekstur material figurine halus, subsurface scattering lembut pada kulit, dan detail kain presisi.",aspectRatio:d,optimizationNeeds:["high detail","detail preservation","texture preservation","color balance","soft lighting","studio lighting","subsurface scattering"],suggestedShorthands:["/studio","/eyelevel","/softlight","/highdetail","/detailpreservation","/texturepreservation","/enhance"],contextualNegativePrompt:e?"real human photo, photorealistic real skin, wrinkled face, photographic grain, bad 3d render, distorted limbs, extra fingers, deformed eyes, blurry, low resolution, watermark, text":"real human photo, foto manusia asli, kulit berkerut, pori-pori kasar, photographic grain, render 3d cacat, anatomi rusak, jari ekstra, mata juling, buram, resolusi rendah, watermark, teks"};if(!!(t.styleType==="NATURE_LANDSCAPE"||n.includes("landscape")||n.includes("mountain")||n.includes("beach")||n.includes("lake")||n.includes("sunset")||n.includes("sunrise")||n.includes("forest")||n.includes("nature")||n.includes("gunung")||n.includes("pantai")||n.includes("danau")||n.includes("hutan")||n.includes("pemandangan")||n.includes("river")||n.includes("sungai")||n.includes("ocean")||n.includes("laut")||n.includes("valley")||t.dominantHue==="green"&&((N=t.dimensions)==null?void 0:N.width)/(((_=t.dimensions)==null?void 0:_.height)||1)>1.25)){const L=d==="1:1"?"16:9":d;return{mainDescription:e?`Expansive natural landscape photography capturing wide panoramic vistas, dominant ${p} earth tones, and atmospheric ambient illumination.`:`Pemandangan lanskap alam terbuka yang membentang luas dengan formasi horizon memukau, dominasi palet ${g}, dan atmosfer alam yang tenang.`,subjectDescription:e?`Layered geographical contours of undulating terrain with organic vegetation in the foreground and natural ${p} accents.`:`Hamparan bentang alam alami dengan kontur geografis berundak, vegetasi asri, dan aksen alami ${g} pada latar depan dan tengah.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Open scenic wilderness environment with expansive skyline, natural ${h}, and distant atmospheric haze.`:`Lingkungan alam terbuka dengan panorama cakrawala luas, batuan alami bernuansa ${m}, dan nuansa atmosfer yang jernih.`,compositionPerspective:e?`Wide-angle panoramic composition following rule-of-thirds framing, balanced horizontal perspective in ${L} aspect ratio, deep focus throughout.`:`Komposisi lanskap panorama sudut lebar (wide-angle shot) dengan rasio ${L}, garis horizon proporsional mengikuti kaidah rule of thirds, kedalaman ruang penuh (deep focus).`,lightingColor:e?`${b} with warm ambient glow, rich tonal dynamic range between bright skies and natural shadows.`:`${b}, rentang tonal dinamis yang seimbang antara langit terang dan bayangan alami.`,cameraLensDof:e?"24mm wide-angle lens, f/8 aperture, edge-to-edge sharpness from foreground rocks to distant horizon.":"Lensa sudut lebar (wide-angle 24mm f/8), seluruh bidang foto tajam menyeluruh dari foreground hingga cakrawala.",photoStyleRealism:e?"Realistic outdoor nature photography with microcontrast clarity, authentic earthy textures without synthetic saturation.":"Fotografi lanskap realistis dengan detail mikrokontras tinggi pada tekstur batuan dan dedaunan tanpa saturasi berlebih.",aspectRatio:L,optimizationNeeds:["shadow recovery","highlight control","dynamic range","natural tone","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/landscape","/wideangle","/deepfocus","/daylight","/rawphoto","/highdetail","/enhance"],contextualNegativePrompt:e?"people, text, buildings, cars, urban elements, low resolution, blurry, oversaturated colors, artificial clouds, chromatic aberration, digital noise, artifacts, watermark":"people, text, buildings, cars, manusia, perkotaan, low resolution, blur, oversaturated, awan sintetis, chromatic aberration, noise digital, artefak, watermark"}}if(!!(t.styleType==="URBAN_ARCHITECTURE"||n.includes("architecture")||n.includes("building")||n.includes("city")||n.includes("street")||n.includes("urban")||n.includes("tokyo")||n.includes("gedung")||n.includes("bangunan")||n.includes("jalan")||n.includes("kota")||n.includes("skyscraper")||n.includes("tower")||n.includes("facade")||n.includes("menara")||n.includes("interior")||n.includes("exterior")))return{mainDescription:e?`Contemporary urban architectural photography showcasing structural geometric lines, clean facades in ${p}, and ambient city illumination.`:`Struktur arsitektur modern dengan fasad geometris kontemporer, dominasi material bernuansa ${g}, dan garis struktural presisi.`,subjectDescription:e?`Modern architectural structure featuring precision vertical and diagonal geometry, reflective panels in ${p}, and clean structural lines.`:`Bangunan arsitektur dengan garis struktural presisi dan detail material fasad bernuansa ${g} berpadu dengan aksen ${k}.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Metropolitan urban environment with street-level pavement, architectural setting in ${h}, and clear perspective.`:`Kawasan urban perkotaan atau interior berlatar ${m} dengan perspektif geometris teratur.`,compositionPerspective:e?`Architectural perspective framed in ${d} aspect ratio with corrected converging lines, symmetrical framing, and balanced geometric balance.`:`Komposisi sudut presisi dalam rasio ${d} dengan penekanan pada garis tegak lurus, sudut pandang teratur, dan keseimbangan simetri.`,lightingColor:e?`${b} with clean highlights on structural surfaces and balanced shadows.`:`${b}, highlight teratur pada permukaan material, dan keseimbangan bayangan bersih.`,cameraLensDof:e?"35mm perspective-corrected tilt-shift lens, deep focus with maximum geometric fidelity.":"Lensa 35mm dengan koreksi distorsi perspektif (perspective correction) dan ketajaman merata menyeluruh (deep focus).",photoStyleRealism:e?"High-precision architectural documentary photography with crisp material textures and zero optic distortion.":"Fotografi arsitektur realistis dengan reproduksi tekstur material autentik dan distorsi minimal.",aspectRatio:d,optimizationNeeds:["perspective correction","lens correction","composition balance","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/architecture","/deepfocus","/naturalcontrast","/perspectivecorrection","/highdetail","/rawphoto"],contextualNegativePrompt:e?"distorted lines, bent architecture, blurry edges, heavy grain, bad reflection, overexposed, watermark, text":"garis melengkung, distorsi gedung, tepi buram, grain kasar, refleksi rusak, overexposed, watermark, teks"};if(!!(n.includes("animal")||n.includes("cat")||n.includes("dog")||n.includes("bird")||n.includes("wildlife")||n.includes("kucing")||n.includes("anjing")||n.includes("burung")||n.includes("hewan")||n.includes("satwa")))return{mainDescription:e?`Intimate wildlife portrait capturing authentic animal subject with coat tones in ${p}, sharp eye focus, and natural demeanor.`:`Potret satwa autentik dengan nuansa warna ${g}, fokus tajam pada mata, dan tekstur bulu alami.`,subjectDescription:e?`A captivating animal subject showcasing alert gaze, distinct coat patterns in ${p}, and organic vitality.`:`Seekor hewan dengan ekspresi lincah, tatapan mata jernih, dan bulu bernuansa ${g} berpadu ${k}.`,poseExpression:e?"Natural posture with head slightly angled, curious and calm demeanor directed toward the camera.":"Posisi tubuh alami dengan kepala condong proporsional dan tatapan mata fokus ke arah depan.",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Organic natural habitat or indoor setting in ${h} isolating the subject cleanly.`:`Lingkungan berlatar ${m} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Medium closeup shot framed in ${d} aspect ratio at eye-level with the animal, centered subject framing with shallow depth of field.`:`Closeup framing dalam rasio ${d} pada sudut pandang sejajar mata hewan (eye-level), komposisi terpusat proporsional.`,lightingColor:e?`${b} creating natural catchlights in the eyes and gentle coat highlights.`:`${b}, kilau alami pada mata, dan gradasi highlight lembut pada kontur tubuh.`,cameraLensDof:e?"135mm telephoto lens at f/2.8, shallow depth of field with creamy bokeh background.":"Lensa telephoto 135mm f/2.8, kedalaman bidang dangkal (shallow dof) dengan latar belakang blur halus.",photoStyleRealism:e?"Realistic wildlife photography preserving individual strands of fur, whiskers, and natural iris reflections.":"Fotografi satwa realistis dengan detail helai bulu yang tajam dan warna alami tanpa manipulasi sintetis.",aspectRatio:d,optimizationNeeds:["detail preservation","texture preservation","natural tone","high detail","natural processing","raw photo"],suggestedShorthands:["/eyelevel","/softlight","/telephoto","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"cartoon, illustration, 3d render, deformed anatomy, extra paws, blurry eyes, plastic fur, watermark, text":"kartun, ilustrasi, render 3d, anatomi cacat, cakar ekstra, mata buram, bulu plastik, watermark, teks"};if(!!(n.includes("product")||n.includes("food")||n.includes("coffee")||n.includes("watch")||n.includes("cake")||n.includes("produk")||n.includes("makanan")||n.includes("kopi")||n.includes("minuman")||n.includes("still-life")))return{mainDescription:e?`Commercial still-life photography featuring meticulous product placement in ${p}, balanced studio illumination, and tactile surface materiality.`:`Potret still-life komersial dengan penataan objek bernuansa ${g}, pencahayaan terukur, dan detail material berkualitas tinggi.`,subjectDescription:e?`Principal hero subject with distinct contours in ${p}, accented with ${u}, pristine surface finish, and refined craftsmanship details.`:`Objek utama dengan kontur presisi bernuansa ${g} berpadu aksen ${k}, dengan permukaan bersih dan detail pengerjaan rapi.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:e?`Tactile surface materials with subtle micro-reflections and authentic manufacturing texture in ${p}.`:`Tekstur permukaan material asli bernuansa ${g} dengan mikro-refleksi halus dan kerapatan tekstur autentik.`,environmentBackground:e?`Minimalist studio tabletop environment with backdrop in ${h} complementary to the subject.`:`Studio meja still-life dengan permukaan bernuansa ${m} dan penataan elemen pendukung minimalis.`,compositionPerspective:e?`Framed in ${d} aspect ratio at 45-degree elevated angle or eye-level tabletop framing, crisp geometric alignment and focused presentation.`:`Komposisi dalam rasio ${d} dengan sudut 45 derajat atau eye-level tabletop, framing terfokus pada objek utama.`,lightingColor:e?`${b} with controlled diffused softbox highlights and soft contact drop shadows.`:`${b}, softbox diffused illumination, dan gradasi bayangan kontak yang lembut.`,cameraLensDof:e?"90mm macro lens at f/5.6, measured depth of field keeping the critical product surfaces sharp.":"Lensa makro 90mm f/5.6, depth of field terukur dengan ketajaman tinggi pada produk.",photoStyleRealism:e?"Commercial product photography with extreme tactile sharpness, color fidelity, and authentic material finish.":"Fotografi produk profesional dengan kejernihan material dan akurasi warna tinggi.",aspectRatio:d,optimizationNeeds:["detail preservation","texture preservation","color balance","natural contrast","high detail","natural processing","raw photo"],suggestedShorthands:["/studio","/softlight","/macro","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"dust, scratches, harsh reflections, bad lighting, low resolution, blur, watermark, text":"debu, goresan, pantulan silau keras, pencahayaan buruk, resolusi rendah, blur, watermark, teks"};const R=n.includes("woman")||n.includes("wanita")||n.includes("cewek")||n.includes("girl")||n.includes("lady")||n.includes("female")||n.includes("hijab"),A=n.includes("man")||n.includes("pria")||n.includes("cowok")||n.includes("boy")||n.includes("gentleman")||n.includes("businessman")||n.includes("male");let S=e?"an authentic focal subject":"subjek potret autentik";return R?S=e?"an adult woman with natural facial features and poised expression":"seorang wanita dengan ekspresi tenang dan fitur wajah alami":A?S=e?"an adult man with natural facial features and composed demeanor":"seorang pria dewasa dengan ekspresi tenang dan pembawaan wajar":r&&(S=r),{mainDescription:e?`Authentic photograph capturing ${S} with natural posture, dressed in ${p}, framed with balanced composition and ${b}.`:`Potret fotografi autentik dengan framing ${c} terpusat, menampilkan ${S} dengan sentuhan warna ${g}, ${b}, dan karakter visual realistis.`,subjectDescription:e?`${S} featuring authentic facial proportions, crisp eye focus, and natural anatomical alignment.`:`${S} dengan proporsi wajah alami, fokus mata tajam, dan karakter visual nyata tanpa efek sintetis.`,poseExpression:e?"Poised natural posture framed at eye-level perspective, calm composed expression directed forward.":"Postur tubuh seimbang dengan sudut pandang kamera sejajar mata (eye-level perspective), ekspresi tenang bersahaja.",identityPreservation:e?"Preserve natural facial proportions, authentic skin tones, and genuine human contours.":"Pertahankan proporsi wajah alami, warna kulit natural, dan kontur wajah manusia asli.",outfitMaterial:e?`Neat attire featuring ${p} with visible fabric weave, fine seam texture, complemented by ${u}.`:`Busana rapi dengan dominasi warna ${g} dan aksen ${k}, tekstur kain tampak jelas.`,environmentBackground:e?`Cohesive setting in ${h} isolating the subject cleanly with gentle depth of field.`:`Latar belakang bernuansa ${m} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Centered portrait composition framed in ${d} aspect ratio following rule-of-thirds balance at eye-level perspective.`:`Komposisi terpusat dalam rasio aspek ${d}, sudut pandang kamera sejajar mata (eye-level), dan pembagian bidang seimbang.`,lightingColor:e?`${b} with balanced fill, natural shadow transition, and controlled highlights.`:`${b}, gradasi bayangan natural, dan highlight wajah terukur.`,cameraLensDof:e?"Prime portrait lens, shallow depth of field with creamy background bokeh separation.":"Lensa portrait prime, kedalaman bidang dangkal (shallow depth of field) dengan pemisahan latar belakang bokeh halus.",photoStyleRealism:e?"Realistic photographic style, authentic microcontrast, natural skin pore textures without artificial plastic smoothing.":"Gaya fotografi realistis dengan tekstur kulit asli tanpa efek penghalusan plastik berlebih.",aspectRatio:d,optimizationNeeds:["shadow recovery","natural contrast","natural tone","color balance","detail preservation","texture preservation","natural processing","raw photo"],suggestedShorthands:["/portrait","/studio","/eyelevel","/softlight","/rawphoto","/enhance","/highdetail"],contextualNegativePrompt:e?"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, bad eyes, plastic skin, oversaturated, blurry, watermark, text":"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, anatomi cacat, jari ekstra, mata rusak, kulit plastik, oversaturated, blur, watermark, text"}}const Ja={tpl_1:"Add a realistic human subject alongside existing subjects, with coordinating attire, actively engaging in context harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_2:"Add a realistic human subject with coordinating outfit, actively participating in the context of the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_3:"Add a realistic human subject while strictly preserving all existing subjects and characters within the image. Do not modify or remove original subjects or characters. Harmonize the background with the uploaded image.",tpl_4:"Add a new subject wearing an elegant hijab, harmonizing outfit styling and color palette with the uploaded image.",tpl_5:"Add a realistic human subject wearing a hijab, with coordinating outfit and engaging in activity harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_6:"Add a realistic human male as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the male subject's clothing, pose, expression, and activity to integrate naturally and consistently with the scene. Choose attire suited to the theme, environment, atmosphere, and visual context of the uploaded image. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The male subject is only added as a new element into available space within the scene and must not replace or alter any original elements.",tpl_7:"Add a realistic human subject wearing a hijab as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the clothing, pose, expression, and activity of the subject to blend naturally with the scene. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The subject is only added into available space within the scene and must not replace original elements."},ze={gender:{"laki-laki":"Male",pria:"Male",cowok:"Male",perempuan:"Female",wanita:"Female",cewek:"Female"},ethnicity:{asia:"Asian",eropa:"European / Caucasian",afrika:"African","timur tengah":"Middle Eastern","asia selatan":"South Asian","asia timur":"East Asian","asia tenggara":"Southeast Asian","pasifik / oseania":"Pacific Islander / Oceanian",pasifik:"Pacific Islander",oseania:"Oceanian","amerika latin":"Latino / Hispanic"}},wt=[[/Tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Ja.tpl_1],[/Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Ja.tpl_2],[/Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar\. Jangan memodifikasi atau menghilangkan subjek\/karakter asli\. Latar belakang menyesuaikan dengan gambar unggahan\.?/gi,Ja.tpl_3],[/Tambahkan subjek baru yang mengenakan hijab[,\s]+lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan\.?/gi,Ja.tpl_4],[/Tambahkan subjek manusia realistis yang mengenakan hijab[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Ja.tpl_5],[/Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan atau mengubah elemen asli apa pun\.?/gi,Ja.tpl_6],[/Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan elemen asli\.?/gi,Ja.tpl_7],[/tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan/gi,"Add a realistic human subject alongside existing subjects, with coordinating attire"],[/tambahkan subjek manusia realistis/gi,"Add a realistic human subject"],[/tambahkan subjek baru/gi,"Add a new subject"],[/tambahkan subjek/gi,"Add a subject"],[/tambahkan/gi,"Add"],[/dua orang berada di taman tropis dengan latar belakang pemandangan alam/gi,"Two people in a lush tropical garden with a natural scenic landscape backdrop"],[/dua orang berada di taman tropis/gi,"Two people in a lush tropical garden"],[/dua orang berada di/gi,"Two people in"],[/dua orang/gi,"Two people"],[/di taman tropis/gi,"in a lush tropical garden"],[/taman tropis/gi,"tropical garden"],[/dengan latar belakang pemandangan alam/gi,"with a natural scenic landscape backdrop"],[/latar belakang pemandangan alam/gi,"scenic landscape backdrop"],[/pemandangan alam/gi,"scenic landscape"],[/detail subjek utama dengan pencahayaan alami dan warna cerah/gi,"Detail of main subjects with natural daylight illumination and vibrant vivid colors"],[/detail subjek utama/gi,"Detail of main subjects"],[/subjek utama/gi,"main subjects"],[/warna cerah/gi,"vibrant vivid colors"],[/perbaiki pencahayaan foto/gi,"enhance photo lighting with balanced exposure and natural illumination"],[/perbaiki pencahayaan/gi,"enhance lighting with balanced exposure and natural contrast"],[/hapus hijab[,\s]+jangan ubah wajah/gi,"remove headwear, preserve natural hair, preserve original facial identity"],[/hapus hijab/gi,"remove headwear, display natural hair"],[/jangan ubah wajah/gi,"strictly preserve original face and facial identity"],[/pertahankan wajah asli/gi,"maintain authentic original facial identity"],[/pertahankan wajah/gi,"preserve facial identity"],[/ganti baju menjadi tanktop putih tali tipis[,\s]+jangan ubah wajah/gi,"change outfit to a delicate white spaghetti strap tank top, strictly preserve original facial identity"],[/ganti baju menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti baju/gi,"change clothing outfit"],[/ganti pakaian menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti pakaian/gi,"change outfit styling"],[/hapus latar belakang/gi,"remove background, isolate subject on clean backdrop"],[/hapus background/gi,"remove background"],[/gunakan latar baru/gi,"place subject in a new scenic environment"],[/ganti latar/gi,"replace background setting"],[/pertahankan rambut asli tetapi ubah pakaian/gi,"preserve natural authentic hair, change clothing attire"],[/pertahankan rambut asli/gi,"preserve natural authentic hair"],[/ubah rasio menjadi 9:16/gi,"aspect ratio 9:16 vertical composition"],[/ubah rasio menjadi 16:9/gi,"aspect ratio 16:9 wide panoramic composition"],[/ubah rasio menjadi 1:1/gi,"aspect ratio 1:1 square framing"],[/ubah rasio/gi,"change canvas aspect ratio"],[/resolusi tinggi/gi,"high resolution, fine micro-details"],[/kualitas tinggi/gi,"masterpiece quality, ultra-detailed"],[/anatomi tangan natural/gi,"anatomically correct natural hands and fingers"],[/anatomi tangan/gi,"natural hand anatomy"],[/memperluas foto/gi,"outpaint and expand canvas seamlessly"],[/perluas gambar/gi,"expand image canvas with harmonious environment"],[/dokter bedah sedang operasi di rumah sakit futuristik/gi,"a skilled surgical doctor performing an operation inside a high-tech futuristic hospital"],[/dokter bedah/gi,"a professional surgical doctor"],[/rumah sakit futuristik/gi,"a futuristic high-tech hospital"],[/montok/gi,"voluptuous curvy feminine figure"],[/seorang wanita muda/gi,"a young woman"],[/seorang wanita dewasa/gi,"an adult woman"],[/seorang wanita/gi,"a woman"],[/wanita muda/gi,"young woman"],[/wanita cantik/gi,"beautiful woman"],[/wanita/gi,"woman"],[/seorang pria muda/gi,"a young man"],[/seorang pria dewasa/gi,"an adult man"],[/seorang pria/gi,"a man"],[/pria muda/gi,"young man"],[/pria tampan/gi,"handsome man"],[/pria/gi,"man"],[/seorang gadis muda/gi,"a young girl"],[/seorang gadis/gi,"a girl"],[/gadis muda/gi,"young girl"],[/gadis/gi,"girl"],[/anak perempuan/gi,"a young girl"],[/anak laki-laki/gi,"a young boy"],[/anak-anak/gi,"children"],[/dengan rambut hitam panjang/gi,"with long dark hair"],[/dengan rambut panjang/gi,"with long hair"],[/dengan rambut pendek/gi,"with short hair"],[/dengan rambut pirang/gi,"with blonde hair"],[/dengan rambut bergelombang/gi,"with wavy hair"],[/dengan rambut keriting/gi,"with curly textured hair"],[/rambut hitam/gi,"dark hair"],[/rambut cokelat/gi,"brown hair"],[/mata cokelat/gi,"warm brown eyes"],[/kulit cerah/gi,"fair radiant skin"],[/kulit sawo matang/gi,"warm tan golden skin"],[/kulit halus/gi,"smooth skin texture"],[/tekstur kulit/gi,"natural skin microtexture"],[/senyum manis/gi,"gentle charming smile"],[/tersenyum lembut/gi,"softly smiling"],[/ekspresi tenang/gi,"serene composed expression"],[/tatapan mata tajam/gi,"focused engaging gaze"],[/detail fokus pada mata dan tekstur kertas buku/gi,"focus detail on expressive eyes and tactile book paper texture"],[/fokus pada mata/gi,"focused on the eyes"],[/tekstur kertas buku/gi,"tactile book paper texture"],[/tekstur kertas/gi,"paper texture"],[/mengenakan hijab/gi,"wearing a stylish hijab"],[/berhijab/gi,"wearing an elegant hijab"],[/mengenakan jaket hoodie/gi,"wearing a cozy oversized hoodie jacket"],[/mengenakan hoodie/gi,"wearing a hoodie"],[/mengenakan kemeja/gi,"wearing a crisp button-up shirt"],[/mengenakan kaos/gi,"wearing a casual t-shirt"],[/mengenakan gaun/gi,"wearing an elegant dress"],[/mengenakan jas/gi,"wearing a tailored formal suit"],[/mengenakan celana jeans/gi,"wearing denim jeans"],[/berpakaian santai/gi,"dressed in casual attire"],[/berpakaian formal/gi,"dressed in formal attire"],[/memegang buku/gi,"holding a book"],[/memegang/gi,"holding"],[/berjalan di/gi,"walking through"],[/berjalan santai/gi,"strolling gracefully"],[/berdiri di/gi,"standing in"],[/berdiri tegak/gi,"standing confidently"],[/duduk di/gi,"sitting in"],[/duduk santai/gi,"relaxing comfortably"],[/menatap kamera/gi,"looking directly at the camera"],[/menoleh ke samping/gi,"turning head slightly toward the side"],[/di perpustakaan klasik/gi,"in a classic vintage library"],[/di perpustakaan/gi,"in a library"],[/perpustakaan klasik/gi,"classic vintage library"],[/perpustakaan/gi,"library"],[/buku/gi,"book"],[/di taman bunga/gi,"in a blooming flower garden"],[/taman bunga/gi,"blooming flower garden"],[/di pantai saat senja/gi,"on a scenic beach at golden hour sunset"],[/di pantai/gi,"on a picturesque tropical beach"],[/di taman kota/gi,"in a vibrant urban city park"],[/di taman/gi,"in a lush garden park"],[/di jalanan kota/gi,"on a busy modern city street"],[/di kafe/gi,"in a cozy ambient cafe"],[/di studio foto/gi,"in a minimalist photography studio"],[/di studio/gi,"in a professional studio"],[/di kantor modern/gi,"in a sleek contemporary office"],[/di alam terbuka/gi,"in an expansive outdoor landscape"],[/saat senja/gi,"during golden hour sunset"],[/saat malam hari/gi,"at night with atmospheric city lights"],[/saat malam/gi,"at night"],[/saat pagi hari/gi,"in the fresh morning daylight"],[/saat siang hari/gi,"under bright natural midday sun"],[/hujan gerimis/gi,"soft gentle drizzle rain"],[/hujan/gi,"rainy wet pavement atmosphere"],[/pencahayaan alami/gi,"natural daylight illumination"],[/pencahayaan studio/gi,"professional studio key and fill lighting"],[/pencahayaan lembut/gi,"soft diffused ambient lighting"],[/pencahayaan sinematik/gi,"cinematic volumetric illumination"],[/cahaya keemasan/gi,"warm golden hour glow"],[/latar belakang buram/gi,"smooth creamy background bokeh"],[/latar belakang kabur/gi,"shallow depth of field with soft bokeh"],[/sudut pandang sejajar mata/gi,"eye-level camera angle"],[/sudut pandang rendah/gi,"low-angle perspective"],[/sudut pandang tinggi/gi,"high-angle perspective"],[/lensa potret 85mm/gi,"85mm portrait lens with f/1.4 aperture"],[/lensa sudut lebar/gi,"wide-angle 24mm lens"],[/komposisi rule of thirds/gi,"rule of thirds composition"],[/potret jarak dekat/gi,"closeup intimate portrait"],[/potret setengah badan/gi,"medium shot portrait"],[/seluruh badan/gi,"full-length body shot"]];function va(o){if(!o||typeof o!="string")return"";const a=o.trim();if(!a)return"";const e=[],t="___TOKEN_PH_";let i=a.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,s=>{const n=`${t}SH_${e.length}___`;return e.push({id:n,original:s}),n});i=i.replace(/--([a-zA-Z0-9_\-]+)(?:\s+([^-\s][^-\n]*))?/g,s=>{const n=`${t}FLAG_${e.length}___`;return e.push({id:n,original:s}),n});let r=!1;/^(\/imagine prompt:)/i.test(i)&&(r=!0,i=i.replace(/^(\/imagine prompt:\s*)/i,""));for(const[s,n]of wt)i=i.replace(s,n);i=i.replace(/\bdengan tetap mempertahankan\b/gi,"while strictly preserving").replace(/\bdengan mempertahankan\b/gi,"while preserving").replace(/\btanpa perubahan atau penghapusan\b/gi,"without modification or removal").replace(/\btanpa mengubah\b/gi,"without modifying").replace(/\bserta terlibat dalam aktivitas\b/gi,"and engaging in activities").replace(/\bsesuai gambar unggahan\b/gi,"harmonious with the source image").replace(/\bsesuai gambar sumber\b/gi,"harmonious with the source image").replace(/\bdengan pakaian yang menyesuaikan\b/gi,"with coordinating attire").replace(/\bpakaian yang menyesuaikan\b/gi,"coordinating attire").replace(/\bdi luar subjek yang sudah ada\b/gi,"alongside existing subjects").replace(/\bsubjek manusia realistis\b/gi,"a realistic human subject").replace(/\bseluruh subjek dan karakter asli\b/gi,"all original subjects and characters").replace(/\bsubjek\/karakter asli\b/gi,"original subjects and characters").replace(/\blatar belakang menyesuaikan\b/gi,"background harmonized with").replace(/\bsesuaikan outfit dan warna\b/gi,"harmonizing outfit styling and color palette").replace(/\bagar harmonis dengan\b/gi,"to harmonize with").replace(/\bgambar unggahan\b/gi,"uploaded source image").replace(/\bgambar sumber\b/gi,"source image").replace(/\bsubjek baru\b/gi,"a new subject").replace(/\bsubjek adalah\b/gi,"the subject is").replace(/\bsubjek berupa\b/gi,"the subject is").replace(/\bdengan\b/gi,"with").replace(/\bdan\b/gi,"and").replace(/\bserta\b/gi,"and").replace(/\bdi\b/gi,"in").replace(/\bke\b/gi,"to").replace(/\bdari\b/gi,"from").replace(/\bpada\b/gi,"on").replace(/\byang\b/gi,"that is").replace(/\btetapi\b/gi,"but").replace(/\bnamun\b/gi,"however"),i=i.replace(/\s+/g," ").replace(/\s+,/g,",").replace(/\s+\./g,".").replace(/,\s*,/g,",").replace(/\.\s*\./g,".").trim();for(const s of e)i=i.replace(s.id,s.original);return r&&(i=`/imagine prompt: ${i}`),i}function Pt(o,a=null){if(!o)return"";const{customRequest:e="",gender:t="Auto",age:i="Auto",ethnicity:r="Auto",subjectStyle:s="Auto",customSubjectStyle:n="",environmentStyle:l="Auto"}=o,d=[];if(e&&e.trim()){const m=va(e.trim());d.push(`Additional Directive (Custom Request): ${m}`)}const c=t&&!t.toLowerCase().startsWith("auto"),g=i&&!i.toLowerCase().startsWith("auto"),p=r&&!r.toLowerCase().startsWith("auto");if(c||g||p){const m=[];if(c){const h=t.toLowerCase().trim(),b=ze.gender[h]||t;m.push(`Gender: ${b}`)}if(g){const h=parseInt(i,10),b=isNaN(h)?i:`${h} years old`;m.push(`Age: ${b}`)}if(p){const h=r.toLowerCase().trim(),b=ze.ethnicity[h]||r;m.push(`Ethnicity: ${b}`)}d.push(`Subject Character Parameters: ${m.join(", ")}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`)}if(s&&!s.toLowerCase().startsWith("auto"))if(s.toLowerCase()==="ultra realistic")d.push("Subject Style: Visual rendering, materiality, skin microtexture, and clothing adopt an Ultra Realistic photographic aesthetic (ultra-realistic photographic rendering, natural skin microtexture, realistic anatomy and proportions, lifelike hair and fabric details, physically plausible lighting and shadows, natural optical characteristics, authentic photographic appearance), strictly rendering as an authentic photograph rather than illustration, CGI, or 3D render.");else{const m=s==="Custom"?n?va(n.trim()):"Custom Realistic":s;d.push(`Subject Style: Visual rendering, materiality, skin microtexture, and clothing adopt a ${m} aesthetic, prioritizing natural anatomical fidelity, authentic microtextures, and directional illumination on the subject.`)}return l&&!l.toLowerCase().startsWith("auto")&&d.push(`Environment Style: World-building, background setting, atmosphere, environmental materials, and global illumination apply ${l}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`),d.join(`

`)}function Ke(o=""){let a="Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, and preserve fine microtextures and natural skin details without overprocessing.";if(o&&o.trim()){const e=va(o.trim());return`${a} User specific adjustment target: ${e}.`}return a}const Ie=[{id:"none",label:"-- Pilih Template Prompt (Opsional) --",text:""},{id:"tpl_1",label:"Template 1: Tambahkan subjek manusia realistis di luar subjek yang sudah ada...",text:"Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_2",label:"Template 2: Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan...",text:"Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_3",label:"Template 3: Tambahkan subjek manusia realistis dan pertahankan seluruh subjek...",text:"Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar. Jangan memodifikasi atau menghilangkan subjek/karakter asli. Latar belakang menyesuaikan dengan gambar unggahan."},{id:"tpl_4",label:"Template 4: Tambahkan subjek baru yang mengenakan hijab...",text:"Tambahkan subjek baru yang mengenakan hijab, lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan."},{id:"tpl_5",label:"Template 5: Tambahkan subjek manusia realistis yang mengenakan hijab...",text:"Tambahkan subjek manusia realistis yang mengenakan hijab, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_6",label:"Template 6: Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru...",text:"Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan. Analisis terlebih dahulu tema, lingkungan, perspektif, pencahayaan, warna, skala, dan konteks adegan, kemudian sesuaikan pakaian, pose, ekspresi, dan aktivitas laki-laki tersebut agar menyatu secara natural dan konsisten dengan adegan. Pilih pakaian yang sesuai dengan tema, lingkungan, suasana, dan konteks visual gambar unggahan. Jangan mengubah, menghapus, mengganti, memindahkan, atau merusak elemen asli gambar. Semua elemen asli tetap menjadi SOURCE OF TRUTH. Laki-laki tersebut hanya ditambahkan sebagai elemen baru ke ruang yang tersedia dalam adegan dan tidak boleh menggantikan atau mengubah elemen asli apa pun."},{id:"tpl_7",label:"Template 7: Tambahkan subjek manusia realistis berhijab sebagai subjek baru...",text:"Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan. Analisis terlebih dahulu tema, lingkungan, perspektif, pencahayaan, warna, skala, dan konteks adegan, kemudian sesuaikan pakaian, pose, ekspresi, dan aktivitas manusia agar menyatu secara natural dengan adegan. Jangan mengubah, menghapus, mengganti, memindahkan, atau merusak elemen asli gambar. Semua elemen asli tetap menjadi SOURCE OF TRUTH. Manusia hanya ditambahkan ke ruang yang tersedia dalam adegan dan tidak boleh menggantikan elemen asli."}],Lt=["Auto (Smart Detection) mengikuti gambar unggahan","Laki-Laki","Perempuan"],Ct=["Auto (Smart Detection) mengikuti gambar unggahan",...Array.from({length:50},(o,a)=>`${a+1} tahun`)],rt=["Auto (Smart Detection)","Asia","Eropa","Afrika","Timur Tengah","Asia Selatan","Asia Timur","Asia Tenggara","Pasifik / Oseania","Amerika Latin"],Le=["Auto (Smart Detection)","Raw Photography Realism","Realistic","Ultra Realistic","Photorealistic","Ultra Photorealistic","Live-Action","Custom"],de=[{name:"Auto (Smart Detection)",description:"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."},{name:"Stylized 3D Cartoon",description:"Gaya kartun 3D yang sangat stilasi dengan warna berani dan proporsi ekspresif."},{name:"Pixar-style Lighting",description:"Pencahayaan hangat dan emosional khas film Pixar yang memberikan kedalaman pada karakter."},{name:"Nickelodeon Animation Style",description:"Gaya animasi enerjik dan berwarna cerah khas Nickelodeon."},{name:"SpongeBob Cinematic 3D",description:"Visual 3D sinematik bergaya dunia bawah laut SpongeBob yang ceria."},{name:"Soft Clay Render",description:"Render dengan tekstur tanah liat lembut yang memberikan kesan fisik dan taktil."},{name:"Smooth Plastic Material",description:"Material plastik halus dan mengkilap seperti mainan modern yang bersih."},{name:"Vibrant Pastel Colors",description:"Palet warna pastel yang cerah dan hidup untuk suasana yang positif."},{name:"Global Illumination",description:"Teknik pencahayaan realistis yang memantulkan cahaya di seluruh permukaan untuk kedalaman maksimal."},{name:"Clean 3D Render",description:"Hasil render 3D yang sangat bersih, tajam, dan bebas dari noise visual."},{name:"Whimsical Cartoon World",description:"Dunia kartun yang penuh keajaiban, bentuk imajinatif, dan atmosfer fantasi."},{name:"Raw Photography Realism",description:"Realisme murni seperti foto mentah kamera DSLR tanpa efek sinematik, menampilkan pori kulit, noise sensor, dan cahaya alami apa adanya."},{name:"True Camera Capture Realism",description:"Meniru hasil kamera sungguhan dengan parameter fotografi realistis seperti ISO, aperture, shutter, dan depth of field alami."},{name:"Documentary Photo Realism",description:"Gaya foto dokumenter yang jujur dan natural, komposisi tidak dibuat-buat seperti momen kehidupan nyata."},{name:"Natural Light Photorealism",description:"Meniru cahaya alami dengan warna kulit akurat dan bayangan lembut tanpa efek artistik."},{name:"Documentary Style",description:"Tampilan realistis dan informatif yang fokus pada keaslian visual."},{name:"Natural Lighting",description:"Pencahayaan alami tanpa dramatisasi atau efek berlebihan."},{name:"Realistic",description:"Tampilan natural yang mendekati dunia nyata."},{name:"Photorealistic",description:"Sangat realistis seperti hasil foto kamera modern dengan kualitas bersih."},{name:"Ultra Photorealistic Live-Action",description:"Detail sangat tajam dan bersih, masih realistis namun terasa sedikit dipoles."},{name:"Portrait Photography",description:"Fokus pada wajah dengan latar blur profesional dan pencahayaan kamera."},{name:"Photoreal Cinematic Character Study",description:"Studi karakter sangat realistis dengan sentuhan visual sinematik."},{name:"Live-Action Cinematic Photorealism",description:"Perpaduan realisme dunia nyata dengan mood dan atmosfer sinematik."},{name:"Hollywood Movie Still Realism",description:"Tampilan seperti cuplikan film Hollywood dengan color grading dramatis."},{name:"Cinematic Live-Action Portrait",description:"Potret manusia nyata dengan gaya sinema dan pencahayaan artistik."},{name:"Film Still",description:"Visual menyerupai satu frame adegan film."},{name:"Cinematic",description:"Nuansa film dengan framing dan warna dramatis."},{name:"Ultra Cinematic",description:"Cinematic tingkat tinggi dengan depth dan kontras kuat."},{name:"IMAX Look",description:"Visual megah berskala besar dengan detail tinggi."},{name:"Dramatic Lighting",description:"Pencahayaan kontras tinggi untuk emosi kuat dan tegas."},{name:"Moody Lighting",description:"Cahaya redup bernuansa emosional dan misterius."},{name:"Dark & Moody",description:"Nuansa gelap dengan atmosfer dramatis dan intens."},{name:"Hyper-Realistic",description:"Detail ekstrem dengan tekstur dan ketajaman sangat tinggi."},{name:"Hyper-Real Live-Action Character",description:"Sangat detail dan presisi namun sering terasa terlalu sempurna dan kurang alami."},{name:"Toy-like Characters",description:"Karakter dengan proporsi dan material seperti mainan koleksi."},{name:"Semi-Realistic 3D",description:"Perpaduan realisme dan gaya 3D yang masih terasa imut."},{name:"Toy Photography",description:"Foto realistis mainan dengan depth of field dan pencahayaan profesional."},{name:"Miniature World",description:"Dunia mini berskala kecil dengan detail tinggi dan perspektif makro."},{name:"Toy Diorama / Miniature World",description:"Adegan mini seperti diorama mainan dengan detail artistik."},{name:"Plastic Toy Cinematic",description:"Mainan plastik dengan sudut kamera dan pencahayaan sinematik."},{name:"Miniature / Diorama Style",description:"Tampilan dunia makro seperti diorama miniatur dengan efek tilt-shift dan detail kecil yang menakjubkan."},{name:"Hyper-Realistic Miniature / Diorama Action Style",description:"Diorama miniatur dengan detail hyper-realistic dan elemen aksi yang dinamis, memberikan kesan adegan film berskala kecil."},{name:"Miniature Diorama / LEGO Macro Photography",description:"Gaya fotografi makro dengan fokus tajam pada detail balok LEGO, bokeh latar belakang artistik, dan pencahayaan studio yang menonjolkan tekstur plastik serta skala miniatur."},{name:"Low Poly 3D",description:"Bentuk geometris sederhana dan minim detail."},{name:"Roblox-style 3D",description:"Proporsi kotak dengan wajah simpel khas game Roblox."},{name:"Stylized Roblox 3D",description:"Versi Roblox lebih halus dengan pencahayaan modern."},{name:"LEGO Style",description:"Karakter dan objek berbentuk balok LEGO berwarna cerah."},{name:"LEGO Diorama",description:"Adegan LEGO seperti miniatur pameran artistik."},{name:"LEGO Stop-Motion",description:"Tampilan LEGO dengan nuansa animasi stop-motion."},{name:"LEGO Cinematic Superhero",description:"Visual pahlawan super dalam dunia LEGO dengan pencahayaan dramatis, efek kekuatan yang bercahaya, dan komposisi epik."},{name:"LEGO Movie Action Style",description:"Gaya aksi dinamis khas film LEGO dengan motion blur, efek ledakan balok yang intens, dan sudut kamera sinematik."},{name:"LEGO Unreal Engine Cinematic",description:"Render LEGO ultra-detail menggunakan Unreal Engine, menampilkan pantulan cahaya realistis pada plastik dan atmosfer film berkualitas tinggi."},{name:"LEGO Blockbuster VFX",description:"Visual blockbuster dengan efek khusus (VFX) spektakuler seperti api, asap, dan partikel yang terintegrasi dalam estetika balok LEGO."},{name:"LEGO Epic Battle Scene",description:"Adegan pertempuran kolosal LEGO dengan ribuan minifigure, lingkungan yang hancur secara artistik, dan skala sinematik yang luar biasa."},{name:"Pixar-style Animation",description:"Animasi 3D ekspresif ala film keluarga Pixar."},{name:"Storybook 3D",description:"Visual 3D bernuansa buku cerita anak."},{name:"Whimsical Children Illustration",description:"Ilustrasi ceria, imajinatif, dan penuh fantasi anak-anak."},{name:"Cute Kawaii Style",description:"Estetika Kawaii yang sangat imut dengan elemen-elemen menggemaskan."},{name:"Chibi 3D",description:"Proporsi kecil dengan kepala besar, sangat imut."},{name:"Kawaii Style",description:"Visual super lucu dengan bentuk bulat dan ramah anak."},{name:"Cute 3D / Kawaii",description:"Karakter 3D imut dengan warna lembut."},{name:"Cute Toy Style",description:"Karakter seperti mainan dengan tekstur plastik halus."},{name:"Kids Fantasy 3D",description:"Gaya 3D fantasi ceria dan aman untuk anak."},{name:"Dreamy Pastel Fantasy",description:"Dunia fantasi dengan palet warna pastel yang lembut dan suasana seperti mimpi."},{name:"Pastel Soft Lighting",description:"Cahaya lembut bernuansa pastel yang hangat dan dreamy."},{name:"Dreamy Soft Lighting",description:"Pencahayaan halus dengan suasana seperti mimpi."},{name:"Pastel Fantasy",description:"Warna pastel lembut dengan nuansa fantasi."},{name:"Candy World",description:"Dunia fantasi manis seperti permen."},{name:"Candyland / Marshmallow World",description:"Lingkungan imajinatif penuh marshmallow dan warna cerah."},{name:"Candyland 3D Style",description:"Dunia 3D bertema permen dengan bentuk imut dan manis."},{name:"Pastel Candy Commercial Style",description:"Gaya visual seperti iklan permen anak-anak."},{name:"Hello Kitty Dessert World",description:"Dunia dessert pastel bertema Hello Kitty yang ceria."},{name:"Origami Diorama Style",description:"Visual adegan fantasi yang seluruh elemennya terbuat dari lipatan kertas origami presisi dengan tekstur kertas nyata."},{name:"Paper Craft Portrait",description:"Seni potret yang dibuat dari lapisan potongan kertas dan lipatan origami dengan efek kedalaman 3D."},{name:"Papercraft Origami",description:"Visual bergaya kerajinan kertas dengan lipatan origami yang presisi dan tekstur kertas yang nyata."},{name:"Origami Low-Poly",description:"Bentuk geometris rendah (low-poly) yang dipadukan dengan teknik lipat origami untuk tampilan artistik minimalis."},{name:"Pastel Origami Fantasy",description:"Dunia fantasi origami dengan warna-warna pastel lembut dan pencahayaan dreamy."},{name:"Plush Felt Texture",description:"Tekstur kain felt yang lembut dan empuk pada seluruh lingkungan."},{name:"Soft Fuzzy Material",description:"Material berbulu halus yang memberikan kesan hangat dan nyaman."},{name:"Kawaii Plush 3D Render",description:"Karakter 3D seperti boneka plush berbulu dan lembut."},{name:"Cute Felt Toy Aesthetic",description:"Tampilan seperti mainan kain felt buatan tangan."},{name:"Soft Toy Food Diorama",description:"Makanan yang divisualkan seperti boneka empuk."},{name:"Claymation Style",description:"Tampilan seperti animasi plastisin stop-motion."},{name:"Crochet / Knitted / Amigurumi Style",description:"Semua objek tampak dirajut dari benang."},{name:"Amigurumi 3D Style",description:"Boneka rajut imut dalam bentuk 3D."},{name:"3D Yarn World / Yarn Render",description:"Dunia 3D dengan tekstur benang di seluruh objek."},{name:"Clay + Knit Hybrid",description:"Perpaduan clay dan rajutan dengan tampilan boneka lembut."},{name:"Cozy Pastel Toy Cottage",description:"Rumah mini pastel seperti mainan rajut yang hangat."},{name:"Knitted Miniature World",description:"Dunia mini yang seluruh lingkungannya terlihat dirajut."},{name:"Crochet Dollhouse Render",description:"Rumah boneka mini berbahan rajutan crochet."},{name:"Cute Handmade Toy Aesthetic",description:"Estetika mainan buatan tangan yang hangat dan lucu."},{name:"Pastel Yarn Diorama",description:"Diorama kecil bernuansa pastel dengan tekstur benang."},{name:"Cute Pastel Diorama",description:"Diorama mini pastel dengan dunia fantasi yang sangat imut."}];function Nt(o,a){return Pt(o,a)}const me=[{id:"AUTO",label:"✨ Auto (Adaptive AI)",description:"AI menganalisis foto secara individual, mendeteksi exposure, dynamic range, white balance, skin tone, dan menentukan treatment warna paling optimal."},{id:"SELECT_STYLE",label:"🎯 Select Style (Target Visual)",description:"Pilih arah visual / style kurasi. AI menghitung penyesuaian tonal & warna secara adaptif per-foto agar selaras dengan target style."},{id:"CUSTOM_STYLE",label:"⚙️ Custom Style (Parameter Pengguna)",description:"Atur warmth, tint, contrast, highlights, shadows, vibrance, dan tone bayangan/highlight secara presisi dengan koreksi adaptif AI."},{id:"AI_STYLE_ANALYZER",label:"🎨 AI Color Grading & Style Analyzer",description:"Analisis foto, rekomendasikan gaya editing berdasarkan kecocokan visual, atur jumlah style yang ditampilkan, tambahkan request editing, dan buat prompt siap pakai untuk ChatGPT."}];me.AUTO="AUTO";me.SELECT_STYLE="SELECT_STYLE";me.CUSTOM_STYLE="CUSTOM_STYLE";me.AI_STYLE_ANALYZER="AI_STYLE_ANALYZER";const Ce=[{category:"NATURAL / REALISTIC",icon:"🌿",styles:[{name:"Natural Vibrant",description:"Warna natural tetapi lebih hidup dan segar, dengan vibrance terarah dan color separation yang tetap realistis tanpa oversaturation."},{name:"Natural Clean",description:"Tampilan bersih, seimbang, dan realistis dengan white balance netral, contrast moderat, dan warna yang natural."},{name:"Natural DSLR",description:"Karakter foto DSLR modern dengan tonal kaya, detail natural, warna realistis, depth yang baik, dan highlight terkontrol."},{name:"Natural Film",description:"Tampilan natural dengan sentuhan film ringan, tonal lembut, highlight smooth, dan saturation terkontrol."},{name:"True to Life",description:"Memprioritaskan reproduksi warna yang paling mendekati kondisi asli dengan koreksi minimal dan akurat."},{name:"Soft Natural",description:"Tampilan natural yang lembut dengan contrast rendah hingga sedang, highlight halus, shadow tidak terlalu dalam, dan warna yang nyaman."}]},{category:"WARM / BRIGHT",icon:"☀️",styles:[{name:"Warm Cinematic",description:"Nuansa hangat dan cinematic dengan highlight warm, shadow sedikit lebih dalam, dan color separation elegan."},{name:"Golden Hour",description:"Karakter cahaya keemasan seperti golden hour dengan warmth adaptif, highlight keemasan, dan tonal hangat yang natural."},{name:"Sun-Kissed",description:"Kesan terkena cahaya matahari lembut dengan warmth ringan, highlight bercahaya, dan skin tone tetap natural."},{name:"Bright & Airy",description:"Tampilan terang, ringan, bersih, dan airy dengan shadow terangkat, contrast lembut, dan highlight tetap terkendali."},{name:"Warm Lifestyle",description:"Tampilan hangat, ramah, dan natural untuk foto lifestyle dengan warmth moderat dan warna kulit yang nyaman."},{name:"Soft Golden",description:"Nuansa keemasan yang lembut dengan highlight warm dan contrast rendah hingga sedang."}]},{category:"CINEMATIC",icon:"🎬",styles:[{name:"Moody Cinematic",description:"Atmosfer cinematic yang lebih dalam dengan shadow kaya, contrast terkontrol, saturation sedikit lebih tenang, dan mood dramatis."},{name:"Modern Cinematic",description:"Cinematic modern dengan tonal bersih, contrast elegan, warna terkontrol, dan color separation halus."},{name:"Teal & Orange Cinematic",description:"Separation cyan/teal pada area cool dan orange pada area warm secara selektif dengan perlindungan warna kulit."},{name:"Cinematic Contrast",description:"Menonjolkan depth melalui contrast lebih kuat, black lebih tegas, dan highlight tetap terjaga."},{name:"Dark Cinematic",description:"Cinematic dengan overall exposure dan shadow lebih rendah namun tetap mempertahankan detail penting pada area gelap."},{name:"Soft Cinematic",description:"Cinematic yang halus dengan contrast lembut, highlight smooth, shadow tidak crushed, dan warna tetap realistis."}]},{category:"VIBRANT / COLORFUL",icon:"🌈",styles:[{name:"Vivid Color",description:"Meningkatkan vibrance dan saturation secara selektif untuk warna yang lebih hidup tanpa oversaturation."},{name:"Rich Color",description:"Memberikan warna yang lebih kaya, dalam, dan memiliki depth dengan saturation yang dikontrol adaptif."},{name:"Color Pop",description:"Menonjolkan warna utama secara selektif sambil menjaga warna lain tetap seimbang."},{name:"Fresh Vibrant",description:"Tampilan segar, cerah, youthful, dan colorful dengan fokus pada vibrance dan clean color separation."},{name:"Deep Color",description:"Menghasilkan warna lebih pekat dan kaya dengan tonal depth lebih kuat tanpa membuat warna terlihat neon."}]},{category:"CLEAN / MODERN",icon:"✨",styles:[{name:"Clean & Fresh",description:"Warna bersih, segar, netral, dan modern dengan contrast moderat serta saturation terkontrol."},{name:"Modern Clean",description:"Tampilan modern dan polished dengan white balance akurat, tonal rapi, dan warna tidak berlebihan."},{name:"Crisp Detail",description:"Menonjolkan struktur tonal, local contrast, dan detail secara ringan tanpa menghasilkan sharpening berlebihan."},{name:"High Key Clean",description:"Tampilan dominan terang dengan shadow ringan, highlight bersih, dan contrast rendah hingga sedang."},{name:"Minimal Neutral",description:"Color grading sangat minimal dengan warna netral dan tonal natural untuk hasil profesional dan understated."}]},{category:"FILM / ARTISTIC",icon:"🎞️",styles:[{name:"Film Look",description:"Karakter film halus melalui tonal curve lembut, highlight roll-off, saturation terkontrol, dan color palette harmonis."},{name:"Vintage Film",description:"Nuansa film vintage dengan warna sedikit muted, contrast lembut, dan karakter warm/faded yang tetap mempertahankan detail."},{name:"Analog Film",description:"Karakter analog dengan tonal lembut, color response organik, saturation moderat, dan warna yang tidak terlalu digital."},{name:"Pastel Film",description:"Warna lebih lembut dan pastel dengan saturation lebih rendah, highlight airy, dan contrast ringan."},{name:"Faded Film",description:"Efek faded dengan black sedikit terangkat, contrast lembut, dan warna sedikit desaturated."},{name:"Retro Color",description:"Color palette bernuansa retro dengan karakter warna klasik tetap mempertahankan tonal dan detail foto."}]},{category:"DRAMATIC",icon:"🎭",styles:[{name:"Dark & Moody",description:"Nuansa gelap, atmospheric, dan emosional dengan shadow lebih dalam serta warna yang lebih subdued."},{name:"Dramatic Contrast",description:"Menonjolkan perbedaan terang dan gelap dengan contrast kuat namun tetap menjaga highlight dan shadow penting."},{name:"Deep Shadow",description:"Memprioritaskan depth melalui shadow lebih kaya dan pekat tanpa crushing detail penting."},{name:"Low Key Cinematic",description:"Overall image lebih gelap dengan fokus cahaya pada area utama, shadow dalam, dan karakter cinematic yang kuat."}]}],Za=[...Ce.flatMap(o=>o.styles.map(a=>({...a,category:o.category,categoryIcon:o.icon}))),{name:"Custom Style",description:"Style yang ditentukan pengguna melalui parameter color grading dengan adaptive correction berdasarkan kondisi masing-masing foto.",category:"CUSTOM",categoryIcon:"⚙️"}],xt=[{value:0,label:"0% — Original",description:"Tampilan foto asli tanpa grading"},{value:25,label:"25% — Very Subtle",description:"Sentuhan sangat halus dan tipis"},{value:50,label:"50% — Balanced (Default)",description:"Keseimbangan optimal antara gaya & kealamian foto"},{value:75,label:"75% — Strong",description:"Karakter style tegas dan terasa"},{value:100,label:"100% — Full Style",description:"Penerapan style penuh dengan proteksi batas"}],Ya={mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,protections:{highlightProtection:!0,shadowProtection:!0,skinToneProtection:!0,oversaturationProtection:!0,clippingProtection:!0,naturalColorProtection:!0},custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"},aiStyleAnalyzer:{displayCount:10,selectedStyle:null,additionalRequest:"",rankedResults:[],photoProfile:null,generatedPrompt:"",isStale:!1}},jt=[{label:"Neutral (Alami)",value:"Neutral",color:"#64748b"},{label:"Cool Blue (Sinematik Dingin)",value:"Cool Blue",color:"#38bdf8"},{label:"Deep Teal (Teal & Orange)",value:"Deep Teal",color:"#14b8a6"},{label:"Warm Amber (Keemasan Hangat)",value:"Warm Amber",color:"#f59e0b"},{label:"Slate Gray (Matte Film)",value:"Slate Gray",color:"#94a3b8"}],$t=[{label:"Neutral (Alami)",value:"Neutral",color:"#e2e8f0"},{label:"Soft Gold (Golden Hour)",value:"Soft Gold",color:"#fde047"},{label:"Clean White (Modern Airy)",value:"Clean White",color:"#ffffff"},{label:"Warm Amber (Sunset Warmth)",value:"Warm Amber",color:"#fb923c"},{label:"Soft Rose (Pastel Aesthetic)",value:"Soft Rose",color:"#f472b6"}];function Ve(o=Ya,a=null){const e={...Ya,...o},t=e.mode||"AUTO",i=typeof e.intensity=="number"?e.intensity:50,r=[];if(r.push("STRICT PRESERVATION DIRECTIVE (ORIGINAL PHOTO IS SOURCE OF TRUTH): DO NOT regenerate the image. DO NOT use generative fill. DO NOT alter subject facial identity, face features, body structure, clothing, hair, pose, objects, or composition. Retain original source image geometry and perspective. Apply NON-DESTRUCTIVE AI COLOR GRADING and TONAL ENHANCEMENT ONLY."),t==="AUTO")r.push(`COLOUR GRADING MODE: AUTO ADAPTIVE AI. Individually assess the source photo's dynamic range, exposure, highlight roll-off, shadow depth, white balance, and skin tone. Apply intelligent, adaptive, photo-specific color correction and tonal harmonization tailored to this individual image's characteristics. Intensity: ${i}%.`);else if(t==="SELECT_STYLE"){const l=Za.find(c=>c.name===e.selectedStyle)||{name:e.selectedStyle,description:"Visual style direction"},d=va(l.description);r.push(`COLOUR GRADING STYLE TARGET: "${l.name}" (${l.category}). Description: ${d}. Adaptive execution: Use this style as a visual target/color direction. Calculate per-photo adaptive adjustments rather than static numeric presets. Intensity: ${i}%.`)}else if(t==="CUSTOM_STYLE"){const l=e.custom||{};r.push(`COLOUR GRADING CUSTOM SPECIFICATION: Warmth: ${l.warmth>0?"+":""}${l.warmth}, Tint: ${l.tint>0?"+":""}${l.tint}, Contrast: ${l.contrast>0?"+":""}${l.contrast}, Highlights: ${l.highlights>0?"+":""}${l.highlights}, Shadows: ${l.shadows>0?"+":""}${l.shadows}, Vibrance: ${l.vibrance>0?"+":""}${l.vibrance}, Saturation: ${l.saturation>0?"+":""}${l.saturation}, Clarity: ${l.clarity>0?"+":""}${l.clarity}, Shadow Tone: ${l.shadowTone||"Neutral"}, Highlight Tone: ${l.highlightTone||"Neutral"}. AI Adaptive Correction: Balance custom adjustments against the actual image telemetry. Intensity: ${i}%.`)}const s=e.protections||{},n=[];return s.skinToneProtection!==!1&&n.push("Natural Skin Tone Protection (prioritize healthy, authentic skin tones; strictly prevent unnatural orange/red/magenta/gray casts)"),s.highlightProtection!==!1&&n.push("Highlight Protection (prevent blown-out clipping, preserve highlight texture and roll-off)"),s.shadowProtection!==!1&&n.push("Shadow Protection (prevent crushed blacks, preserve low-end shadow detail)"),s.oversaturationProtection!==!1&&n.push("Oversaturation & Gamut Protection (maintain natural color boundaries)"),s.clippingProtection!==!1&&n.push("Dynamic Range Clipping Protection (keep RGB channels within broadcast-safe gamut)"),s.naturalColorProtection!==!1&&n.push("Natural Color Harmony (preserve realism of sky, foliage, and environmental textures)"),n.length>0&&r.push(`INTELLIGENT PROTECTIONS ACTIVE: ${n.join("; ")}.`),r.push("EXECUTION PRIORITY: NATURAL RESULT > STYLE ACCURACY > STRONG EFFECT. If the original photo already has optimal exposure or color, apply minimal fine-tuning. If heavily skewed, apply measured adaptive correction without artificial grading artifacts."),r.join(`

`)}function Mt(o){if(!o)return{brightness:128,contrast:50,colorTemp:"neutral",warmthScore:0,saturation:50,hasSkinTone:!1,skinTonePercentage:0,highlightClipping:0,shadowCrushing:0,dynamicRange:"normal",qualityScore:85};o.getContext("2d");const a=Math.min(o.width,320),e=Math.min(o.height,240),t=document.createElement("canvas");t.width=a,t.height=e;const i=t.getContext("2d");i.drawImage(o,0,0,a,e);const s=i.getImageData(0,0,a,e).data,n=a*e;let l=0,d=0,c=0,g=0,p=0,k=0,u=0,m=0;for(let E=0;E<s.length;E+=4){const O=s[E],N=s[E+1],_=s[E+2];l+=O,d+=N,c+=_;const L=.299*O+.587*N+.114*_;g+=L,L>242&&k++,L<15&&u++;const I=Math.max(O,N,_),x=Math.min(O,N,_),$=I===0?0:(I-x)/I;m+=$,O>N&&N>_&&O-N>=15&&N-_>=10&&L>40&&L<235&&p++}const h=l/n,b=d/n,f=c/n,y=g/n,w=m/n*100,v=h-f;let T="neutral";v>12?T="warm":v<-12&&(T="cool");const R=p/n*100,A=k/n*100,S=u/n*100;return t.width=0,t.height=0,{brightness:Math.round(y),contrast:Math.round(Math.abs(y-128)*.8+40),colorTemp:T,warmthScore:Math.round(v),avgR:Math.round(h),avgG:Math.round(b),avgB:Math.round(f),saturation:Math.round(w),hasSkinTone:R>1.2,skinTonePercentage:Number(R.toFixed(1)),highlightClipping:Number(A.toFixed(1)),shadowCrushing:Number(S.toFixed(1)),dynamicRange:A>5||S>5?"tinggi (perlu proteksi)":"seimbang",qualityScore:Math.max(50,Math.min(98,Math.round(100-A*2-S*2)))}}function Gt(o,a=Ya){const e={...Ya,...a},t=e.mode||"AUTO",i=(typeof e.intensity=="number"?e.intensity:50)/100,r=e.protections||{};let s=0,n=0,l=0,d=0,c=0,g=0,p=0,k=0,u=0,m=e.selectedStyle||"Natural Vibrant";if(t==="AUTO")o.brightness<100?(s+=(115-o.brightness)/100,d+=22):o.brightness>165&&(s-=(o.brightness-150)/120,l-=25),o.colorTemp==="warm"&&o.warmthScore>18?c-=Math.min(18,Math.round(o.warmthScore*.5)):o.colorTemp==="cool"&&o.warmthScore<-18&&(c+=Math.min(18,Math.round(Math.abs(o.warmthScore)*.5))),n+=12,p+=15,m=o.hasSkinTone?"Natural Clean":"Natural Vibrant";else if(t==="SELECT_STYLE"){m=e.selectedStyle||"Natural Vibrant";const f=m.toLowerCase();typeof o.brightness=="number"&&(o.brightness<110?s+=Number(((120-o.brightness)/120).toFixed(2)):o.brightness>155&&(s-=Number(((o.brightness-150)/140).toFixed(2))));const y=o.colorTemp==="warm"||typeof o.warmthScore=="number"&&o.warmthScore>10,w=o.colorTemp==="cool"||typeof o.warmthScore=="number"&&o.warmthScore<-10;f.includes("warm")||f.includes("golden")||f.includes("sun-kissed")?(c+=y?10:w?32:22,l+=8,d+=12,p+=12):f.includes("cinematic")||f.includes("teal")?f.includes("teal")?(c+=8,g-=6,n+=22,d-=8,l+=10,p+=16):f.includes("dark")||f.includes("moody")?(n+=20,d-=15,l-=10,k-=8,p+=6):(n+=16,l+=6,d+=10,p+=14):f.includes("film")||f.includes("vintage")||f.includes("analog")||f.includes("retro")?(d+=18,l-=12,n-=5,c+=8,k-=6,p+=8):f.includes("vivid")||f.includes("color pop")||f.includes("vibrant")?(p+=28,n+=15,k+=o.saturation>60?4:14):f.includes("clean")||f.includes("crisp")||f.includes("airy")?(o.colorTemp!=="neutral"&&(c-=o.warmthScore*.3),s+=f.includes("airy")?.25:.08,l+=10,d+=14,n+=12,p+=10):f.includes("dramatic")?(n+=32,d-=18,l+=14,p+=10):(p+=15,n+=10,d+=8)}else if(t==="CUSTOM_STYLE"){const f=e.custom||{};m="Custom Style",c=(f.warmth||0)*.45,g=(f.tint||0)*.35,n=(f.contrast||0)*.4,l=(f.highlights||0)*.5,d=(f.shadows||0)*.5,k=(f.saturation||0)*.4,p=(f.vibrance||0)*.45,u=(f.clarity||0)*.35}const h=[];return r.highlightProtection!==!1&&o.highlightClipping>3&&(l-=Math.round(o.highlightClipping*5),s=Math.min(s,.05),h.push("Highlight Protection aktif: Mencegah highlight blown-out & menjaga detail tekstur putih.")),r.shadowProtection!==!1&&(o.shadowCrushing>3||d<0)&&(d=Math.max(d,5),h.push("Shadow Protection aktif: Mencegah black crushing & mempertahankan detail bayangan.")),r.skinToneProtection!==!1&&o.hasSkinTone&&(c=Math.max(-15,Math.min(18,c)),k=Math.max(-15,Math.min(12,k)),h.push("Skin Tone Protection aktif: Mempertahankan keaslian & rona alami warna kulit subjek.")),r.oversaturationProtection!==!1&&o.saturation>55&&(p=Math.min(p,12),k=Math.min(k,6),h.push("Oversaturation Protection aktif: Menahan saturasi dalam batas gamut alami foto.")),{exposure:Number((s*i).toFixed(2)),contrast:Math.round(n*i),highlights:Math.round(l*i),shadows:Math.round(d*i),warmth:Math.round(c*i),temperature:Math.round(c*i),tint:Math.round(g*i),vibrance:Math.round(p*i),saturation:Math.round(k*i),clarity:Math.round(u*i),intensityPercent:Math.round(i*100),targetStyle:m,protectionLogs:h}}function _t(){return`You are Prompt Shorthand Analyzer V3.6 - Specialized Two Worlds (2 Dunia) AI Conflict Harmonizer & Prompt Enrichment Engine.
Your mission: Audit, harmonize, and resolve all conflicts, contradictions, inconsistencies, or mismatched instructions within PROMPT OPTIMAL for the "2 Dunia" (Two Worlds) workflow.

============================================================
ABSOLUTE PRIORITY HIERARCHY (SOURCE OF TRUTH)
PARAMETER MODIFIKASI KHUSUS 2 DUNIA → PROMPT HASIL ANALISA 2 DUNIA → PROMPT OPTIMAL
============================================================
1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (HIGHEST PRIORITY - ABSOLUTE SOURCE OF TRUTH):
   - Custom Request (Directive for added subject, attire, action)
   - Subject Demographics (Gender, Age, Ethnicity)
   - Subject Visual Style (Rendering / Materiality)
   - Environment Style (World-building, background, lighting, atmosphere)
   * If any text in PROMPT OPTIMAL contradicts these active parameters, PARAMETER MODIFIKASI KHUSUS 2 DUNIA OVERRULES AND REPLACES IT.

2. PROMPT HASIL ANALISA 2 DUNIA (SECONDARY PRIORITY - ORIGINAL IMAGE CONTEXT):
   - Contains the core visual description and identity of the original source character/subject.
   * ABSOLUTE PRESERVATION: The original character's facial features, identity, physical appearance, and key clothing must remain 100% intact, undistorted, and protected from deletion or unwanted morphing.

3. PROMPT OPTIMAL (PROMPT UNDER AUDIT):
   - The prompt being reviewed and harmonized.
   - Retain all valuable, non-conflicting visual details, realistic microtextures, camera angles, lighting, and composition.

============================================================
SPECIFIC CONFLICT RESOLUTION RULES
============================================================
1. ENVIRONMENT CONFLICT RESOLUTION:
   - If an active Environment Style is chosen (not "Auto"), eliminate any contradictory original background settings (e.g., original classroom, indoor studio, plain wall) and synthesize the scene into the chosen Environment Style world, incorporating its atmosphere, materials, and lighting seamlessly.
   - The original subject must be naturally placed within this new environment while maintaining their identity.

2. SUBJECT & DEMOGRAPHIC CONFLICT RESOLUTION:
   - If an added character or modification is specified in Custom Request or Demographics (Gender, Age, Ethnicity), ensure the added subject adheres strictly to these parameters.
   - Remove any contradictory traits, clothing, or ages assigned to the added character.

3. NEGATIVE PROMPT & SHORTHAND INTEGRITY:
   - Remove any negative prompt flags that contradict the active styles (e.g., remove "--no 3d render" or "3d render" from negative prompts if the environment is a 3D animation/cartoon style).
   - All shorthand codes (e.g., /facelock, /hairlock, /raw, /candid, /masterpiece) and Midjourney parameters (--ar ..., --style ..., --v ...) MUST BE PRESERVED and placed at the end of the prompt.

4. LANGUAGE & FORMAT:
   - Output must be in natural, descriptive, clear English optimal for state-of-the-art AI image generators.
   - Do NOT output conversational filler, disclaimers, or markdown outside JSON.

Format response STRICTLY as valid JSON:
{
  "enrichedPrompt": "the complete, conflict-free, harmonized English prompt with shorthands and parameters preserved at the end",
  "conflictsResolved": ["list of resolved conflicts, e.g., 'Replaced legacy indoor studio background with chosen SpongeBob Cinematic 3D underwater environment'"]
}`}function Dt({optimalPrompt:o,generatedPrompt:a,twoWorldsConfig:e}){const t=e||{};return`=== 1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (PRIORITY 1 - SOURCE OF TRUTH) ===
${[`1. Custom Request (Instruksi Tambahan): "${t.customRequest?t.customRequest.trim():"(tidak ada / kosong)"}"`,`2. Gender Subyek Tambahan: "${t.gender||"Auto"}"`,`3. Usia Karakter Tambahan: "${t.age||"Auto"}"`,`4. Suku / Etnis Karakter: "${t.ethnicity||"Auto"}"`,`5. Style Subyek: "${t.subjectStyle==="Custom"?t.customSubjectStyle||"Custom":t.subjectStyle||"Auto"}"`,`6. Environment Style (Dunia / Background): "${t.environmentStyle||"Auto"}"`].join(`
`)}

=== 2. PROMPT HASIL ANALISA 2 DUNIA (PRIORITY 2 - CONTEXT OF ORIGINAL IMAGE & SUBJECT) ===
"${(a||"").trim()||"(tidak ada analisa visual awal)"}"

=== 3. PROMPT OPTIMAL (PRIORITY 3 - TARGET AUDIT & HARMONISASI) ===
"${(o||"").trim()}"

TUGAS AI:
Audit PROMPT OPTIMAL di atas terhadap PARAMETER MODIFIKASI KHUSUS 2 DUNIA dan PROMPT HASIL ANALISA 2 DUNIA.
Selesaikan semua kontradiksi (seperti latar belakang lama vs environment style baru, deskripsi karakter tambahan yang tidak sesuai parameter, atau negative prompt yang bentrok).
Pertahankan identitas karakter asli 100%, pertahankan seluruh shorthand dan flag parameter di akhir prompt, dan hasilkan prompt final dalam bahasa Inggris yang harmonis dan siap pakai.`}function Ut(o=""){const a=o.match(/\/[a-zA-Z0-9_\-:]+/g)||[],e=[],t=o.match(/--[a-zA-Z0-9_\-]+(?:\s+[a-zA-Z0-9_.,:\-]+)*/g)||[];for(const i of t)e.includes(i.trim())||e.push(i.trim());return{shorthands:a,flags:e}}function Fe({optimalPrompt:o="",generatedPrompt:a="",twoWorldsConfig:e={},analysisResult:t=null}){if(!o||!o.trim())return{success:!1,enrichedPrompt:o,conflictsResolved:[]};const i=[];let r=o.trim();const{shorthands:s}=Ut(r);let n=r.startsWith("/imagine prompt:");n&&(r=r.replace(/^\/imagine prompt:\s*/i,"").trim());const l=(e==null?void 0:e.environmentStyle)||"Auto (Smart Detection)";if(!l.toLowerCase().startsWith("auto")){const f=/3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(l),y=[/(?:standing|sitting|located|set)\s+in\s+a\s+[^.,\n]+(?:classroom|room|office|studio|bedroom|hallway|interior|backdrop)[^.,\n]*/gi,/wooden\s+classroom\s+with\s+chalkboards[^.,\n]*/gi,/in\s+a\s+(?:traditional\s+)?wooden\s+classroom[^.,\n]*/gi,/plain\s+(?:studio\s+)?backdrop[^.,\n]*/gi];let w=!1;for(const T of y)T.test(r)&&(r=r.replace(T,`seamlessly integrated into a ${l} environment`),w=!0);w&&i.push(`Harmonized legacy background into ${l} environment`),!new RegExp(`Environment Style:.*?${l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}`,"i").test(r)&&!r.toLowerCase().includes(l.toLowerCase())&&(r+=`

Environment Style: World-building, background setting, atmosphere, environmental materials, and lighting seamlessly adopt ${l}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`,i.push(`Added explicit ${l} environment harmonization directive`)),f&&(/--no\s+[^,\n]*3d render/i.test(r)||/--no\s+[^,\n]*cartoon/i.test(r))&&(r=r.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),i.push(`Removed conflicting negative prompts ('3d render', 'cartoon') to match ${l}`))}const c=e!=null&&e.customRequest?e.customRequest.trim():"",g=(e==null?void 0:e.gender)||"Auto",p=(e==null?void 0:e.age)||"Auto",k=(e==null?void 0:e.ethnicity)||"Auto",u=!g.toLowerCase().startsWith("auto"),m=!p.toLowerCase().startsWith("auto"),h=!k.toLowerCase().startsWith("auto");if(u||m||h||c){if(c){const f=va(c);r.toLowerCase().includes(f.toLowerCase().slice(0,20))||(r+=`

Additional Directive (Custom Request): ${f}`,i.push(`Synchronized Custom Request directive: ${f}`))}if(u||m||h){const f=[];if(u&&f.push(`Gender: ${g==="Laki-Laki"?"Male":g==="Perempuan"?"Female":g}`),m){const w=parseInt(p,10);f.push(`Age: ${isNaN(w)?p:`${w} years old`}`)}h&&f.push(`Ethnicity: ${k}`);const y=f.join(", ");r.includes(y)||(r+=`

Subject Character Parameters: ${y}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`,i.push(`Synchronized demographic parameters: ${y}`))}}r=va(r);let b=n?`/imagine prompt: ${r}`:r;for(const f of s)b.includes(f)||(b+=` ${f}`);return{success:!0,enrichedPrompt:b.trim(),conflictsResolved:i,source:"HEURISTIC_RESOLVER"}}function Bt({enrichedPrompt:o="",optimalPrompt:a="",twoWorldsConfig:e={},originalShorthands:t=[]}){if(!o||typeof o!="string")return a;let i=va(o.trim());for(const n of t)i.includes(n)||(i+=` ${n}`);const r=(e==null?void 0:e.environmentStyle)||"";return/3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(r)&&(i=i.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,"")),i.trim()}function Ht(o={},a={},e=""){var l;if((l=o.smartDetection)!=null&&l.gender){const d=String(o.smartDetection.gender).trim();if(/perempuan|wanita|female|woman|girl/i.test(d))return"Perempuan";if(/laki-laki|pria|male|man|boy/i.test(d))return"Laki-Laki"}const t=[o.subject,o.subjectDescription,o.mainDescription,o.visualDetails,o.outfit,o.outfitMaterial,o.expression,e].filter(Boolean).join(" ").toLowerCase(),i=["woman","female","wanita","perempuan","cewek","girl","lady","hijab","gadis","ibu","sister","mother","daughter","queen","princess","she","her"],r=["man","male","pria","laki-laki","cowok","boy","gentleman","businessman","ayah","bapak","brother","father","son","king","prince","he","his"];let s=0,n=0;for(const d of i){const c=new RegExp(`\\b${d}\\b`,"g"),g=t.match(c);g&&(s+=g.length)}for(const d of r){const c=new RegExp(`\\b${d}\\b`,"g"),g=t.match(c);g&&(n+=g.length)}return s>n?"Perempuan":(n>s,"Laki-Laki")}function zt(o={},a={},e=""){var r;if((r=o.smartDetection)!=null&&r.age){const n=String(o.smartDetection.age).trim().match(/(\d{1,2})/);if(n)return`${Math.min(50,Math.max(1,parseInt(n[1],10)))} tahun`}const t=[o.subject,o.subjectDescription,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase(),i=t.match(/(?:age|usia|umur|aged|berusia)\s*(?:is|sekitar|about|approx)?\s*(\d{1,2})/i)||t.match(/\b(\d{1,2})\s*(?:years?\s*old|yo|y\.o|thn|tahun)\b/i);return i?`${Math.min(50,Math.max(1,parseInt(i[1],10)))} tahun`:/\b(baby|infant|bayi)\b/i.test(t)?"1 tahun":/\b(toddler|balita)\b/i.test(t)?"3 tahun":/\b(little\s*girl|little\s*boy|anak-anak|anak\s*kecil|child|kid|bocah)\b/i.test(t)?"8 tahun":/\b(preteen|young\s*teen)\b/i.test(t)?"12 tahun":/\b(teenager|teen|remaja|abg|high\s*school)\b/i.test(t)?"16 tahun":/\b(college|university|mahasiswa|dewasa\s*muda|young\s*adult|young\s*woman|young\s*man)\b/i.test(t)?"21 tahun":/\b(chibi|doll|figurine|cute\s*3d)\b/i.test(t)?"22 tahun":/\b(middle\s*aged|paruh\s*baya|dewasa\s*matang)\b/i.test(t)?"42 tahun":/\b(elderly|senior|old\s*man|old\s*woman|kakek|nenek|wrinkled)\b/i.test(t)?"50 tahun":/\b(adult|dewasa|pria\s*dewasa|wanita\s*dewasa)\b/i.test(t)?"28 tahun":"25 tahun"}function Kt(o={},a={},e=""){var i;if((i=o.smartDetection)!=null&&i.ethnicity){const r=String(o.smartDetection.ethnicity).trim(),s=rt.find(n=>n.toLowerCase()===r.toLowerCase()&&!n.startsWith("Auto"));if(s)return s}const t=[o.subject,o.subjectDescription,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(southeast\s*asian|indonesia|indonesian|melayu|malay|asean|nusantara|jawa|sunda|bali|filipino|tagalog|vietnamese|thai)\b/i.test(t)?"Asia Tenggara":/\b(east\s*asian|japanese|korean|chinese|mandarin|tokyo|seoul|beijing|jepang|korea|tionghoa|cina)\b/i.test(t)?"Asia Timur":/\b(south\s*asian|indian|india|pakistan|pakistani|bengali|bangladesh|nepali|sri\s*lanka)\b/i.test(t)?"Asia Selatan":/\b(caucasian|european|eropa|bule|nordic|slavic|british|german|french|italian|scandinavian|western)\b/i.test(t)?"Eropa":/\b(middle\s*eastern|arab|arabic|timur\s*tengah|persian|iranian|turkish|turki)\b/i.test(t)?"Timur Tengah":/\b(african|afrika|black|afro|ethiopian|nigerian|kenyan)\b/i.test(t)?"Afrika":/\b(latino|latina|hispanic|mexican|brazilian|colombian|amerika\s*latin)\b/i.test(t)?"Amerika Latin":/\b(pacific|oceania|polynesian|maori|samoan|hawaiian|pasifik|oseania)\b/i.test(t)?"Pasifik / Oseania":(/\b(asian|asia|oriental)\b/i.test(t),"Asia")}function Vt(o={},a={},e=""){var i;if((i=o.smartDetection)!=null&&i.subjectStyle){const r=String(o.smartDetection.subjectStyle).trim();if(r&&!r.startsWith("Auto"))return Le.find(n=>n.toLowerCase()===r.toLowerCase()&&!n.startsWith("Auto"))||r}const t=[o.style,o.photoStyleRealism,o.subjectDescription,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(lego|minifigure|brick|lego\s*style)\b/i.test(t)?"LEGO Style":/\b(claymation|clay\s*render|clay\s*model|plastisin|soft\s*clay)\b/i.test(t)?"Claymation Style":/\b(anime|manga|anime\s*style|shonen|shojo|makoto\s*shinkai)\b/i.test(t)?"Anime Style":/\b(chibi|doll\s*figurine|cute\s*3d\s*character|chibi\s*3d|vinyl\s*toy|figurine)\b/i.test(t)?"Stylized 3D Character":/\b(3d\s*cartoon|pixar|disney|animated\s*character|cartoon\s*3d|3d\s*animation|cgi\s*character|cartoon)\b/i.test(t)?"3D Cartoon Style":/\b(papercraft|origami|paper\s*cut)\b/i.test(t)?"Papercraft Origami":/\b(crochet|knitted|amigurumi|yarn)\b/i.test(t)?"Crochet / Knitted Style":/\b(raw\s*photo|raw\s*photography|dslr\s*sensor|sensor\s*noise)\b/i.test(t)?"Raw Photography Realism":/\b(ultra\s*photorealistic|ultra\s*photoreal)\b/i.test(t)?"Ultra Photorealistic":/\b(photorealistic|hyper\s*realistic|photorealism)\b/i.test(t)?"Photorealistic":/\b(live-action|live\s*action)\b/i.test(t)?"Live-Action":a!=null&&a.isStylizedOr3D||(a==null?void 0:a.styleType)==="STYLED_3D_CHARACTER"?"3D Cartoon Style":"Realistic Human Style"}function Ft(o={},a={},e=""){var i;if((i=o.smartDetection)!=null&&i.environmentStyle){const r=String(o.smartDetection.environmentStyle).trim();if(r&&!r.startsWith("Auto")){const s=de.find(n=>n.name.toLowerCase()===r.toLowerCase()&&!n.name.startsWith("Auto"));return s?s.name:r}}const t=[o.environment,o.background,o.environmentBackground,o.lighting,o.lightingColor,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(candyland|candy\s*world|marshmallow|sweets|dessert\s*world)\b/i.test(t)?"Candy World 3D Style":/\b(dreamy\s*pastel|pastel\s*fantasy|pastel\s*soft|dreamy\s*soft|pastel\s*lighting)\b/i.test(t)?"Dreamy Pastel 3D":/\b(fantasy\s*environment|magical\s*world|enchanted|fairy\s*tale|mystical)\b/i.test(t)?"Fantasy Environment":/\b(spongebob|bikini\s*bottom|underwater\s*3d)\b/i.test(t)?"SpongeBob Cinematic 3D":/\b(lego|lego\s*world|brick\s*diorama)\b/i.test(t)?"LEGO Style":/\b(claymation|clay\s*world|soft\s*clay)\b/i.test(t)?"Soft Clay Render":/\b(origami|papercraft|paper\s*diorama)\b/i.test(t)?"Papercraft Origami":/\b(plush|felt|fuzzy)\b/i.test(t)?"Cute Felt Toy Aesthetic":/\b(crochet|yarn|knitted|amigurumi)\b/i.test(t)?"Amigurumi 3D Style":/\b(clean\s*3d|studio\s*render|octane\s*render|studio\s*backdrop|clean\s*studio)\b/i.test(t)?"Clean 3D Render":/\b(stylized\s*3d\s*cartoon|cartoon\s*world|whimsical\s*cartoon)\b/i.test(t)?"Stylized 3D Cartoon":/\b(pixar|pixar-style)\b/i.test(t)?"Pixar-style Lighting":/\b(dark\s*&\s*moody|dark\s*and\s*moody|moody\s*lighting)\b/i.test(t)?"Dark & Moody":/\b(dramatic\s*lighting|high\s*contrast\s*light)\b/i.test(t)?"Dramatic Lighting":/\b(cinematic|film\s*still|movie\s*scene)\b/i.test(t)?"Cinematic":/\b(portrait\s*photography|bokeh\s*backdrop|studio\s*portrait)\b/i.test(t)?"Portrait Photography":/\b(realistic\s*environment|outdoor\s*scenic|landscape\s*photography|real\s*world|nature\s*landscape)\b/i.test(t)?"Realistic Environment":/\b(natural\s*lighting|natural\s*light|daylight|sunlight|ambient\s*daylight)\b/i.test(t)?"Natural Lighting":a!=null&&a.isStylizedOr3D||(a==null?void 0:a.styleType)==="STYLED_3D_CHARACTER"?a.dominantHue==="pink"||a.dominantHue==="cyan"?"Dreamy Pastel 3D":"Clean 3D Render":"Natural Lighting"}function st(o={},a={},e={},t={}){const i=e||(a==null?void 0:a.visualTelemetry)||{},r=(a==null?void 0:a.name)||"",s=Ht(o,i,r),n=zt(o,i,r),l=Kt(o,i,r),d=Vt(o,i,r),c=Ft(o,i,r);return{gender:s,age:n,ethnicity:l,subjectStyle:d,environmentStyle:c}}function Wt(){return`Anda adalah Ahli Analisis Latar Belakang & Komposisi Arsitektur Fotografi Vision AI Profesional (Prompt Shorthand Analyzer V3.7).
Tugas Anda: Menganalisis gambar yang diunggah secara objektif, mendalam, dan akurat dengan FOKUS UTAMA PADA LATAR BELAKANG (ENVIRONMENT, RUANG, ARSITEKTUR, DEKORASI, PROPERTI, PENCAHAYAAN LINGKUNGAN), HUBUNGAN SPASIAL PENEMPATAN SUBJEK TERHADAP LATAR, dan REFERENSI OUTFIT SUBJEK TERPISAH.

=======================================================
ATURAN MUTLAK ANALISIS LATAR BELAKANG (STRICT RULES):
=======================================================
1. FOKUS UTAMA ADALAH LATAR BELAKANG:
   Analisis seluruh dekorasi, furnitur, aksesori, properti, tekstur material dinding/lantai, pencahayaan lingkungan, kedalaman ruang, dan atmosfer latar.

2. ATURAN PRIVASI & DILARANG MENGANALISIS IDENTITAS PERSONAL (STRICT NEGATIVE CONSTRAINT):
   Jika foto memiliki subjek/manusia, sistem tidak boleh menganalisis identitas atau karakteristik personal subjek.
   DILARANG KERAS menganalisis atau memasukkan sebagai profil:
   - wajah dan identitas
   - bentuk wajah
   - warna kulit
   - usia
   - jenis kelamin
   - rambut
   - pakaian
   - ekspresi
   - detail fisik tubuh
   Gunakan HANYA label generik netral seperti "Subjek", "Subjek manusia", atau "Karakter".

3. HUBUNGAN SPASIAL SUBJEK & LATAR WAJIB DIANALISIS (SUBJECT–BACKGROUND PLACEMENT PROFILE):
   Meskipun identitas subjek dilarang, informasi SPASIAL, POSISI, SKALA, FRAMING, KEDALAMAN, DAN RELASI SUBJEK TERHADAP ELEMEN LATAR WAJIB DIANALISIS SECARA RINCI.
   Informasi ini adalah acuan komposisi penempatan ketika latar diterapkan untuk subjek baru pada foto berikutnya.

4. REFERENSI OUTFIT SUBJEK (TERPISAH & STRICT ISOLATION):
   Analisis referensi pakaian subjek jika ada (jenis pakaian, gaya, warna, material, tekstur, potongan, layering, formalitas).
   ATURAN MUTLAK:
   - Bebas biometrik / wajah manusia.
   - DILARANG MEMASUKKAN REFERENSI OUTFIT KE DALAM PROMPT ANALISA OPTIMAL BACKGROUND!
   Outfit disimpan murni sebagai referensi terpisah.

5. PROMPT ANALISA OPTIMAL (AI ENGLISH PROMPT):
   - Wajib berbentuk SATU PARAGRAF natural-language prompt dalam Bahasa Inggris yang mengalir, detail, deskriptif, spatially-aware, dan production-ready.
   - BUKAN JSON, BUKAN keyword dump, BUKAN bullet list, BUKAN tabel parameter.
   - Menggabungkan secara koheren: Suasana + Gaya Fotografi + Hubungan Subjek & Latar (diterjemahkan secara spasial alami) + Elemen Background + Komposisi + Lighting + Perspective + Depth.
   - Hubungan subjek & latar harus diterjemahkan menjadi relasi spasial pembingkaian (misal: "The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element.").
   - Default penutup wajib: "Background only, no people, no face, no human identity, no text, no watermark."

6. 8 ASPEK ANALISIS LATAR BELAKANG TERSTRUKTUR (WAJIB):
   1. Ruang & Komposisi
   2. Lapisan Visual
   3. Warna & Material
   4. Pencahayaan Latar
   5. Nuansa Foto / Latar
   6. Elemen Latar Teridentifikasi
   7. Struktur & Komposisi Latar
   8. Hubungan Subjek & Latar

7. KEMBALIKAN OUTPUT HANYA DALAM FORMAT JSON VALID BERIKUT:
{
  "suasanaMood": {
    "atmosphere": "Atmosphere latar secara menyeluruh (cozy, expansive, intimate)",
    "mood": "Mood emosional (tenang, hangat, reflektif, formal, elegan, mewah, santai)",
    "emotionalTone": "Tone emosional visual",
    "visualTemperature": "Temperatur visual (warm amber, neutral daylight, cool moody)",
    "formality": "Tingkat formalitas (formal, semi-formal, kasual, editorial)",
    "overallAmbience": "Karakter keseluruhan ambience ruangan/lingkungan",
    "sophistication": "Tingkat elegansi / sophistication",
    "characterType": "Karakteristik khusus (academic, commercial, luxurious, rustic, minimalist)",
    "summary": "Paragraf ringkasan suasana dan mood latar..."
  },
  
  "gayaFotografi": {
    "photographyStyle": "Gaya fotografi (Architectural Interior, Environmental Portraiture, Editorial Still-Life)",
    "genre": "Genre fotografi",
    "cameraPerspective": "Perspektif kamera (one-point linear, two-point, eye-level, slightly low-angle)",
    "cameraHeight": "Ketinggian kamera relatif (eye-level, chest-level)",
    "focalLengthImpression": "Karakter fokal lensa (35mm environmental, 50mm normal standard, 85mm compression)",
    "framing": "Karakter pembingkaian (medium shot framing, wide architectural view)",
    "depthOfField": "Ketajaman / depth of field (medium DoF with clear background, deep focus, creamy falloff)",
    "lightingStyle": "Gaya tata cahaya (diffused key light, soft wrap-around ambient, dramatic directional)",
    "lightingSoftness": "Kelembutan cahaya dan transisi gradasi",
    "shadowCharacter": "Karakter bayangan (soft progressive shadows, gentle ambient occlusion)",
    "realism": "Tingkat realisme visual (photorealistic, authentic optical rendering)",
    "renderingStyle": "Gaya rendering visual (clean tonal range, textured matte surfaces)",
    "summary": "Paragraf ringkasan gaya fotografi..."
  },
  
  "hubunganSubjekLatar": {
    "subjectPlacementInFrame": "Posisi horizontal dan vertikal subjek: kiri / tengah / kanan; atas / tengah / bawah",
    "relativePositionToBg": "Posisi relatif subjek terhadap elemen background utama",
    "distanceFromBg": "Estimasi jarak subjek terhadap background (misal: 1.5 meter di depan dinding)",
    "scaleToSpace": "Skala subjek terhadap ruang dan frame (misal: mengisi 25%-35% frame)",
    "depthPlane": "Bidang kedalaman penempatan subjek: foreground / midground",
    "depthRelationship": "Hubungan pemisahan kedalaman antara subjek dan latar",
    "framingRelationship": "Bagaimana elemen latar membingkai subjek secara visual",
    "negativeSpace": "Distribusi negative space di sekeliling subjek",
    "visualBalance": "Keseimbangan visual antara subjek dan elemen lingkungan",
    "perspectiveRelationship": "Garis perspektif lingkungan yang mengarah ke area subjek",
    "orientation": "Orientasi tubuh subjek terhadap lingkungan (frontal / 3/4 kiri / 3/4 kanan)",
    "lightingRelationship": "Hubungan pencahayaan antara subjek dan latar",
    "framingElements": "Elemen background yang menjadi pembingkai atau pendukung subjek",
    "spatialSummary": "The subject is positioned centrally within the environment, with the integrated bookshelf forming the main midground structure behind the subject and the floor lamp positioned on the left as a secondary framing element. The background creates balanced depth and supports the subject as the primary focal point."
  },
  
  "referensiOutfitSubjek": {
    "clothingType": "Jenis pakaian yang dikenakan (blazer, kemeja, gaun, sweater, jaket)",
    "garmentStyle": "Gaya busana (smart casual, executive business, vintage classic, relaxed modern)",
    "primaryColor": "Warna utama pakaian",
    "secondaryColor": "Warna sekunder pakaian",
    "material": "Material pakaian (wool, katun, linen, sutra, denim, rajut)",
    "texture": "Karakter tekstur kain (matte weave, smooth, bertekstur mikro)",
    "pattern": "Pola pakaian (solid polos, garis halus, kotak-kotak minimalis)",
    "cut": "Potongan pakaian (tailored fit, relaxed fit, structured)",
    "layering": "Layering pakaian (single layer, two-layer blazer over shirt)",
    "accessories": "Aksesori yang terlihat (jam tangan, kacamata, dasi, syal)",
    "footwear": "Alas kaki jika terlihat",
    "formality": "Tingkat formalitas busana",
    "stylingCharacter": "Karakter styling",
    "relationshipToEnvironment": "Harmonisasi warna/gaya outfit dengan palet lingkungan latar",
    "summary": "Paragraf ringkasan referensi outfit subjek (bebas identitas personal)..."
  },
  
  "elemenBackground": {
    "arsitektur": "Dinding, panel kayu, rak built-in, lantai, plafon, jendela, pintu, struktur ruangan",
    "furniture": "Meja, kursi, sofa, kabinet, rak buku, lampu lantai/meja, perabotan lain",
    "dekorasi": "Buku, tanaman hias pot, lukisan, bingkai foto, vas bunga, ornamen dekoratif",
    "material": "Kayu solid, kain tenun, logam kuningan/matte, kaca, batu alam, keramik",
    "warna": "Warna dominan, warna sekunder, dan warna aksen pada latar",
    "lighting": "Sumber cahaya, arah, kelembutan, intensitas, temperatur warna, karakter bayangan",
    "summary": "Paragraf ringkasan elemen background lengkap..."
  },
  
  "komposisiSpatial": {
    "subjectPlacement": "Penempatan subjek (kiri / tengah / kanan; eye-level)",
    "symmetry": "Simetri atau asimetri yang seimbang (harmonious dynamic balance)",
    "horizontalBalance": "Keseimbangan elemen pada sisi kiri dan kanan frame",
    "verticalBalance": "Keseimbangan elemen bidang atas dan bawah frame",
    "negativeSpace": "Proporsi ruang kosong bersih di sekitar area subjek",
    "depth": "Struktur 3 lapis kedalaman (foreground, midground, background)",
    "perspective": "Garis leading lines dan perspektif linear yang tertata",
    "foreground": "Elemen yang mengisi foreground bawah/depan",
    "midground": "Elemen yang mengisi middle ground tempat subjek berinteraksi",
    "background": "Elemen yang mengisi dinding latar belakang utama",
    "framing": "Pembingkaian alami dari objek samping furnitur dan dekorasi",
    "spatialHierarchy": "Hierarki visual ruangan yang tertata jelas",
    "relativePositioning": "Posisi relatif antar objek penting di dalam ruangan",
    "summary": "Paragraf ringkasan komposisi dan struktur ruang..."
  },
  
  "optimalPrompt": "A detailed indoor studio backdrop featuring a classic luxury library or study room atmosphere. Built-in dark brown wooden wall panels with integrated bookshelves. On the shelves are stacks of vintage hardback books, colorful modern books, an antique framed map, small white decorative lanterns, candlestick holders, and a small artificial flower vase. On the left side, a tall vintage floor lamp with a carved bronze metallic stand and a beige fabric lampshade. On the floor, warm brown wood-grain tile flooring. The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element. Soft warm studio lighting illuminating the scene evenly with gentle shadows, creating a cozy, sophisticated, and academic mood. Eye-level perspective, medium depth of field, background only, no people, no face, no human identity, no text, no watermark. --ar 16:9 --style raw --v 6.1 --no human subject, person, people, watermark, text",
  
  "backgroundProfile": "Deskripsi paragraf komprehensif seluruh karakteristik latar, dekorasi, properti, material, warna, pencahayaan, mood, dan elemen visual latar (Profil A)...",
  "placementProfile": "Deskripsi paragraf lengkap informasi spasial posisi, skala, orientasi, kedalaman, framing, dan relasi penempatan subjek terhadap latar sebagai acuan penempatan subjek baru (Profil B)...",
  
  "spaceAndComposition": {
    "category": "Kategori latar",
    "setting": "Setting lokasi spesifik",
    "architecture": "Deskripsi struktur dinding, lantai, plafon",
    "decoration": "Dekorasi dinding, ornamen, tanaman",
    "propsAndAccessories": "Furnitur utama dan aksesori pendukung"
  },
  "visualLayers": {
    "foreground": "Foreground",
    "middleGround": "Middle ground",
    "background": "Background",
    "perspective": "Linear perspective",
    "depthOfField": "Medium DoF",
    "relativePositions": []
  },
  "colorAndMaterial": {
    "palette": "Palet warna",
    "dominantColor": "Warna dominan",
    "accentColor": "Warna aksen",
    "materialsAndTextures": [],
    "surfaceCharacter": "Karakter permukaan"
  },
  "backgroundLighting": {
    "type": "Jenis pencahayaan",
    "direction": "Arah cahaya",
    "quality": "Kualitas",
    "intensity": "Intensitas",
    "colorTemperature": "Temperatur warna",
    "shadows": "Bayangan",
    "highlights": "Highlight",
    "contrast": "Kontras",
    "distribution": "Distribusi"
  },
  "photoMood": {
    "mood": "Mood",
    "visualStyle": "Gaya visual",
    "backgroundCharacter": "Karakter latar",
    "roomImpression": "Kesan ruang",
    "formalityLevel": "Tingkat formalitas"
  },
  "identifiedElements": [],
  "structureAndComposition": {
    "symmetry": "Simetri/Asimetri",
    "visualBalance": "Keseimbangan",
    "repetitionPatterns": "Pola",
    "leadingLines": "Leading lines",
    "focalPoint": "Titik fokus",
    "negativeSpace": "Negative space",
    "spaceDepth": "Kedalaman"
  },
  "subjectPlacement": {
    "horizontalPos": "Tengah",
    "verticalPos": "Tengah",
    "orientation": "Frontal",
    "scale": "Medium shot",
    "depthPosition": "Middle ground",
    "spatialSummary": "The subject is positioned centrally within the environment..."
  },
  
  "suggestedShorthands": ["/background", "/interior", "/architecture", "/ambientlight", "/woodtexture", "/softlight", "/ruleofthirds"],
  "negativePrompt": "human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, cluttered mess, watermark, text"
}`}function qt(o){if(!o)return"";const a=o.suasanaMood||o.photoMood||{};return["SUASANA / MOOD:",`- Atmosphere: ${a.atmosphere||a.roomImpression||"-"}`,`- Mood: ${a.mood||"-"}`,`- Emotional Tone: ${a.emotionalTone||a.mood||"-"}`,`- Visual Temperature: ${a.visualTemperature||a.colorTemperature||"-"}`,`- Formalitas: ${a.formality||a.formalityLevel||"-"}`,`- Ambience: ${a.overallAmbience||a.backgroundCharacter||"-"}`,`- Sophistication: ${a.sophistication||"High / Elegant"}`,`- Karakter: ${a.characterType||a.visualStyle||"-"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function Yt(o){if(!o)return"";const a=o.gayaFotografi||{},e=o.photoMood||{},t=o.backgroundLighting||{};return["GAYA FOTOGRAFI:",`- Photography Style: ${a.photographyStyle||e.visualStyle||"Architectural Interior Photography"}`,`- Genre: ${a.genre||"Environmental Interior / Still-Life"}`,`- Perspektif: ${a.cameraPerspective||"Eye-level linear perspective"}`,`- Ketinggian Kamera: ${a.cameraHeight||"Eye-level (approx. 150cm)"}`,`- Karakter Lensa: ${a.focalLengthImpression||"50mm standard normal lens (natural perspective)"}`,`- Framing: ${a.framing||"Medium shot environmental framing"}`,`- Depth of Field: ${a.depthOfField||"Medium depth of field with readable background details"}`,`- Gaya Pencahayaan: ${a.lightingStyle||t.type||"Diffused key light with soft ambient fill"}`,`- Kelembutan Cahaya: ${a.lightingSoftness||t.quality||"Soft wrap-around lighting"}`,`- Karakter Bayangan: ${a.shadowCharacter||t.shadows||"Gentle soft-edge progressive shadows"}`,`- Realisme: ${a.realism||"Authentic photorealistic optical rendering"}`,`- Gaya Rendering: ${a.renderingStyle||"Clean tonal range with rich surface textures"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function Jt(o){if(!o)return"";const a=o.referensiOutfitSubjek||{};return["REFERENSI OUTFIT SUBJEK:","[Catatan: Referensi busana saja. Bebas identitas personal / biometrik, dan TIDAK dimasukkan ke Prompt Background.]","",`- Jenis Pakaian: ${a.clothingType||"Smart casual blazer & collared shirt"}`,`- Gaya Busana: ${a.garmentStyle||"Modern professional / elegant"}`,`- Warna Utama: ${a.primaryColor||"Navy blue / dark charcoal"}`,`- Warna Sekunder: ${a.secondaryColor||"Crisp white / soft ecru"}`,`- Material: ${a.material||"Fine wool blend & breathable cotton weave"}`,`- Tekstur: ${a.texture||"Matte fine-weave texture"}`,`- Pola: ${a.pattern||"Solid with subtle micro-texture"}`,`- Potongan (Cut): ${a.cut||"Structured modern tailored fit"}`,`- Layering: ${a.layering||"Two-layer styling (outer over collared inner)"}`,`- Aksesori: ${a.accessories||"Minimalist metallic watch, clean pocket accent"}`,`- Alas Kaki: ${a.footwear||"Polished leather dress shoes (jika terlihat)"}`,`- Formalitas: ${a.formality||"Executive semi-formal"}`,`- Karakter Styling: ${a.stylingCharacter||"Understated classic sophistication"}`,`- Harmonisasi dengan Latar: ${a.relationshipToEnvironment||"Warna gelap kontras elegan terhadap hangatnya kayu latar"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function ot(o){if(!o)return"";const a=o.elemenBackground||{},e=o.spaceAndComposition||{},t=o.colorAndMaterial||{},i=o.backgroundLighting||{};return["ELEMEN BACKGROUND:",`- Arsitektur / Struktur: ${a.arsitektur||e.architecture||"-"}`,`- Furniture: ${a.furniture||e.propsAndAccessories||"-"}`,`- Dekorasi: ${a.dekorasi||e.decoration||"-"}`,`- Material: ${a.material||(Array.isArray(t.materialsAndTextures)?t.materialsAndTextures.map(r=>r.material).join(", "):"-")}`,`- Warna: ${a.warna||t.palette||"-"}`,`- Lighting: ${a.lighting||i.type||"-"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function Qt(o){if(!o)return"";const a=o.komposisiSpatial||o.structureAndComposition||{},e=o.visualLayers||{};return["KOMPOSISI & SPATIAL RELATIONSHIP:",`- Penempatan Subjek: ${a.subjectPlacement||"Center frame, eye-level"}`,`- Simetri / Asimetri: ${a.symmetry||"Harmonious dynamic asymmetry"}`,`- Keseimbangan Horisontal: ${a.horizontalBalance||a.visualBalance||"Seimbang proporsional kiri-kanan"}`,`- Keseimbangan Vertikal: ${a.verticalBalance||"Terpancang mantap di lantai dengan headroom cukup"}`,`- Negative Space: ${a.negativeSpace||"Lapang dan bersih di sekitar subjek"}`,`- Kedalaman (Depth): ${a.depth||a.spaceDepth||"3 lapis hierarki kedalaman nyata"}`,`- Perspektif: ${a.perspective||e.perspective||"Linear perspective mengarah ke pusat"}`,`- Foreground: ${a.foreground||e.foreground||"Lantai dan sudut meja terdekat"}`,`- Midground: ${a.midground||e.middleGround||"Zona subjek dan furnitur penunjang"}`,`- Background: ${a.background||e.background||"Dinding arsitektural dan rak buku utama"}`,`- Framing: ${a.framing||"Dibingkai alami oleh pilar dinding dan lampu samping"}`,`- Hierarki Spasial: ${a.spatialHierarchy||"Fokus utama pada area tengah dengan latar mendukung"}`,`- Posisi Relatif Objek: ${a.relativePositioning||"Lampu di kiri, rak utama di tengah-kanan"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function ue(o){if(!o)return"";const a=o.backgroundProfile||"",e=o.spaceAndComposition||{},t=o.colorAndMaterial||{},i=o.backgroundLighting||{},r=o.photoMood||{},s=o.structureAndComposition||{};return["=== BACKGROUND PROFILE (PROFIL LATAR BELAKANG) ===","","RINGKASAN PROFIL LATAR:",a,"","1. RUANG & ARSITEKTUR:",`- Kategori: ${e.category||"-"}`,`- Setting: ${e.setting||"-"}`,`- Arsitektur: ${e.architecture||"-"}`,`- Dekorasi: ${e.decoration||"-"}`,`- Properti & Aksesori: ${e.propsAndAccessories||"-"}`,"","2. WARNA & MATERIAL:",`- Palet Warna: ${t.palette||"-"}`,`- Warna Dominan: ${t.dominantColor||"-"}`,`- Warna Aksen: ${t.accentColor||"-"}`,`- Karakter Permukaan: ${t.surfaceCharacter||"-"}`,Array.isArray(t.materialsAndTextures)&&t.materialsAndTextures.length>0?`- Material: ${t.materialsAndTextures.map(n=>`${n.material} (${n.texture})`).join("; ")}`:"","","3. PENCAHAYAAN LINGKUNGAN:",`- Jenis: ${i.type||"-"}`,`- Arah Cahaya: ${i.direction||"-"}`,`- Kualitas & Intensitas: ${i.quality||"-"}, ${i.intensity||"-"}`,`- Temperatur Warna: ${i.colorTemperature||"-"}`,`- Bayangan & Highlight: ${i.shadows||"-"} | ${i.highlights||"-"}`,`- Kontras & Distribusi: ${i.contrast||"-"} | ${i.distribution||"-"}`,"","4. SUASANA & MOOD:",`- Mood / Suasana: ${r.mood||"-"}`,`- Gaya Visual: ${r.visualStyle||"-"}`,`- Karakter Latar: ${r.backgroundCharacter||"-"}`,`- Kesan Ruang: ${r.roomImpression||"-"}`,`- Tingkat Formalitas: ${r.formalityLevel||"-"}`,"","5. STRUKTUR & KOMPOSISI LATAR:",`- Keseimbangan: ${s.visualBalance||"-"} (${s.symmetry||"-"})`,`- Pola & Garis: ${s.repetitionPatterns||"-"} | Leading lines: ${s.leadingLines||"-"}`,`- Titik Fokus: ${s.focalPoint||"-"}`,`- Negative Space & Kedalaman: ${s.negativeSpace||"-"} | ${s.spaceDepth||"-"}`].filter(n=>n!=="").join(`
`)}function pe(o){if(!o)return"";const a=o.subjectPlacement||o.hubunganSubjekLatar||{};return["=== SUBJECT–BACKGROUND PLACEMENT PROFILE (ACUAN PENEMPATAN SUBJEK) ===","","RINGKASAN PENEMPATAN SPASIAL:",a.spatialSummary||o.placementProfile||"","","PARAMETER ACUAN KOMPOSISI SUBJEK:",`- Posisi Horizontal: ${a.horizontalPos||a.subjectPlacementInFrame||"-"}`,`- Posisi Vertikal: ${a.verticalPos||"-"}`,`- Orientasi Subjek: ${a.orientation||"-"}`,`- Skala Subjek terhadap Frame: ${a.scale||a.scaleToSpace||"-"}`,`- Proporsi Subjek di Frame: ${a.frameProportion||"-"}`,`- Jarak Subjek ke Latar: ${a.distanceFromBg||"-"}`,`- Kedalaman Posisi Subjek: ${a.depthPosition||a.depthPlane||"-"}`,`- Area Latar di Belakang Subjek: ${a.bgAreaBehindSubject||"-"}`,`- Negative Space di Sekitar Subjek: ${a.negativeSpaceAround||a.negativeSpace||"-"}`,`- Relasi dengan Properti: ${a.propsRelation||"-"}`,`- Anchor Point Latar: ${a.anchorPoint||"-"}`,`- Keseimbangan Komposisi: ${a.compositionBalance||a.visualBalance||"-"}`,`- Alignment Garis Arsitektur: ${a.architecturalAlignment||"-"}`,`- Posisi terhadap Lantai: ${a.floorPlacement||"-"}`,`- Framing terhadap Subjek: ${a.framing||a.framingRelationship||"-"}`,`- Ruang Kosong (Headroom & Samping): ${a.emptySpace||"-"}`,`- Hubungan Ukuran dengan Furnitur: ${a.sizeRelationToProps||"-"}`,`- Posisi terhadap Elemen Utama Latar: ${a.relativeToMainBgElement||"-"}`].join(`
`)}function _e(o){if(!o)return"";const a=ue(o),e=pe(o),t=qt(o),i=Yt(o),r=Jt(o),s=ot(o),n=Qt(o),l=Array.isArray(o.identifiedElements)&&o.identifiedElements.length>0?[`
=== DAFTAR ELEMEN LATAR TERIDENTIFIKASI ===`,...o.identifiedElements.map((c,g)=>`${g+1}. ${c.name} [${c.type||"Elemen"}] - Posisi: ${c.relativePosition||"-"}, Ukuran: ${c.relativeSize||"-"}, Fungsi: ${c.visualFunction||"-"}`)].join(`
`):"",d=o.optimalPrompt?`
=== PROMPT OPTIMAL LATAR BELAKANG (AI ENGLISH) ===
${o.optimalPrompt}`:"";return[a,"",e,"",t,"",i,"",r,"",s,"",n,l,d].filter(Boolean).join(`
`)}function Zt(o,a=1){var k,u,m,h,b,f,y,w,v,T,R,A,S;if(!o)return"";const e=o.aspectRatio||"16:9",t=((k=o.suasanaMood)==null?void 0:k.mood)||((u=o.photoMood)==null?void 0:u.mood)||"warm and sophisticated",i=(((m=o.spaceAndComposition)==null?void 0:m.category)||"classic luxury study room").toLowerCase().replace(/[^a-z0-9 ]/g,""),r=(((h=o.spaceAndComposition)==null?void 0:h.setting)||"indoor studio library backdrop").toLowerCase(),s=((b=o.elemenBackground)==null?void 0:b.arsitektur)||((f=o.spaceAndComposition)==null?void 0:f.architecture)||"built-in dark brown wooden wall panels with integrated bookshelves",n=((y=o.elemenBackground)==null?void 0:y.dekorasi)||((w=o.spaceAndComposition)==null?void 0:w.decoration)||"curated hardback books, an antique framed map, and small decorative lanterns",l=((v=o.elemenBackground)==null?void 0:v.furniture)||((T=o.spaceAndComposition)==null?void 0:T.propsAndAccessories)||"a tall vintage floor lamp with a carved bronze metallic stand on the left",d=((R=o.elemenBackground)==null?void 0:R.lighting)||((A=o.backgroundLighting)==null?void 0:A.type)||"soft warm studio ambient lighting illuminating the scene evenly with gentle shadows",c=((S=o.hubunganSubjekLatar)==null?void 0:S.spatialSummary)||"The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element.",g=(a||0)%3;let p="";return g===0?p=`A detailed indoor studio backdrop featuring a ${t} ${i}. ${s}. On the shelves are ${n}. On the left side, ${l}. ${c} ${d}, creating a cozy, sophisticated, and authentic atmosphere. Eye-level perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${e} --style raw --v 6.1 --no human subject, person, people, watermark, text`:g===1?p=`Cinematic architectural interior photography of a ${t} ${i}, set in a ${r}. Highlights include ${s}, adorned with ${n}, counterbalanced by ${l}. Spatially arranged where ${c.toLowerCase()} Bathed in ${d.toLowerCase()}, rich micro-textures on natural wood and metal surfaces, crisp optical perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${e} --style raw --v 6.1 --no human subject, person, people, watermark, text`:p=`Fine-art atmospheric studio background portraying a distinguished ${i}. Key structural elements feature ${s}, refined with ${n}, and accented by ${l}. Perfectly structured composition: ${c} Illuminated by ${d.toLowerCase()} with gentle gradual shadow falloff, professional balanced composition, eye-level angle, photorealistic architectural rendering, Background only, no people, no face, no human identity, no text, no watermark. --ar ${e} --style raw --v 6.1 --no human subject, person, people, watermark, text`,p}function Xt(o,a=null,e=null,t="auto"){var Q;let i=o,r=a,s=e,n=t;o&&typeof o=="object"&&("imageFile"in o||"visualTelemetry"in o||"targetAspectRatio"in o||"aspectRatio"in o)&&(i=o.imageFile||o,r=o.imageBase64||r,s=o.visualTelemetry||s,n=o.targetAspectRatio||o.aspectRatio||n),s=s||{};const l=((i==null?void 0:i.name)||"").toLowerCase(),d=(i==null?void 0:i.width)||800,c=(i==null?void 0:i.height)||800,g=Ae(d,c),p=n&&n!=="auto"&&n!=="Otomatis"?n:g,k=s.dominantHue||"neutral",u=s.dominantColorIndonesian||"krem netral dan abu-abu hangat",m=s.dominantColorEnglish||"warm neutral cream and light gray",h=s.secondaryColorIndonesian||"aksen kayu cokelat hangat",b=(s.avgLum||.5)<.35,f=s.contrastLevel==="tinggi",y=l.includes("outdoor")||l.includes("nature")||l.includes("pantai")||l.includes("taman")||l.includes("jalan")||k==="green";let w="Studio Interior Modern & Ruang Kreatif",v="Interior studio kontemporer dengan penataan arsitektur bersih dan teratur",T="Dinding bertekstur matte halus dengan panel vertikal minimalis, lantai permukaan padat bertingkat kedalaman terukur",R="Rak terbuka beraksen rapi, tanaman hias pot minimalis, dan ornamen dekoratif geometris terkoordinasi",A="Meja kerja kayu matte, kursi ergonomis berlapis bahan tenun, dan lampu aksen terarah",S=[{material:"Kayu Terpilih (Wood Timber)",texture:"Serat kayu natural bertekstur matte lembut"},{material:"Logam Anodized / Matte Metal",texture:"Finishing satin non-glare pada rangka furnitur"},{material:"Kain Tenun Bertekstur",texture:"Anyaman kain halus dengan daya serap cahaya tinggi"}],E="Tenang, teratur, profesional, dan berestetika modern",O="Modern Minimalist Architectural Interior Photography",N="Pencahayaan diffused terarah dipadukan dengan ambient fill lembut",_="3800K - 4500K (Neutral Daylight)";y?(w="Setting Lingkungan Luar Ruang (Outdoor Natural)",v="Area terbuka alami dengan vegetasi hijau dan latar belakang lanskap seimbang",T="Struktur jalur alami, pembatas batu alam/kayu, dan kanopi langit terbuka",R="Pepohonan rindang, dedaunan bertekstur alami, dan elemen lanskap organik",A="Batu alam bertekstur, bangku kayu outdoor, dan pembatas jalur setapak",S=[{material:"Batu Alam & Kayu Outdoor",texture:"Permukaan berpori dan serat kasar organik"},{material:"Dedaunan & Vegetasi Alami",texture:"Lapisan hijau organik dengan difusi cahaya matahari"}],E="Segar, alami, organik, dan menenangkan",O="Natural Environmental Documentary Landscape",N="Cahaya matahari alami difusi awan dengan arah lateral terukur",_="5200K - 5600K (Natural Outdoor Daylight)"):b&&(w="Interior Moody Sinematik & Industrial",v="Ruang berkonsep industrial chic dengan pencahayaan dramatis berkarakter mendalam",T="Dinding beton ekspos atau bata gelap, lantai semen poles matte, plafon tinggi beraksen balok",R="Lampu gantung Edison amber, rak besi industrial, dan karya seni kontemporer bernuansa monokrom",A="Meja kayu rustik tebal, kursi kulit tua (aged leather), dan lampu lantai berkarakter vintage",S=[{material:"Beton Ekspos & Besi Tempa",texture:"Tekstur berbutir kasar dengan kilau satin minimal"},{material:"Kulit Alami (Aged Leather)",texture:"Permukaan kulit berpatina dengan mikrokontras halus"}],E="Misterius, hangat, berkelas, dan sinematik mendalam",O="Cinematic Moody Architectural Photography",N="Key light terarah dengan fill lembut dan bayangan kontras bergradasi dramatis",_="2800K - 3200K (Warm Amber Tungsten)");const L={atmosphere:`Suasana ${E.toLowerCase()}, mengalirkan kesan ruangan yang lapang, tenang, dan tertata estetik`,mood:E,emotionalTone:b?"Intim, dalam, dan sinematik berkarakter":"Menenteramkan, berwibawa, dan profesional",visualTemperature:_,formality:"Semi-formal elegan dengan standar fotografi komersial profesional",overallAmbience:`Ambience ${w.toLowerCase()} dengan pencahayaan seimbang dan atmosfer ruang kohesif`,sophistication:"Tingkat elegansi tinggi dengan estetika arsitektur terkoordinasi rapi",characterType:b?"Luxurious, Moody & Industrial":y?"Natural & Organic":"Modern, Academic & Minimalist",summary:`Atmosfer ruangan menampilkan suasana ${E.toLowerCase()} dengan karakter visual ${O}. Pencahayaan bertemperatur ${_} memberikan kesan ruang yang nyaman, teratur, dan profesional tanpa distraksi visual.`},I={photographyStyle:O,genre:"Architectural Environmental Interior Photography",cameraPerspective:"Eye-level linear perspective dengan garis horizon lurus teratur",cameraHeight:"Tinggi pandangan mata manusia (eye-level, ±150 cm dari permukaan lantai)",focalLengthImpression:"50mm standard focal length (perspektif optik alami bebas distorsi lensa)",framing:`Medium environmental framing dengan proporsi rasio kanvas ${p}`,depthOfField:"Medium depth of field: latar belakang terbaca detail dengan hierarki visual teratur",lightingStyle:N,lightingSoftness:"Diffused wrap-around soft lighting dengan transisi highlight-ke-bayangan gradual",shadowCharacter:"Bayangan lembut bergradasi alami di bawah perabotan dan sepanjang garis lantai",realism:"Autentik, fotorealistik dengan reproduksi optik nyata tanpa artefak sintetis",renderingStyle:"Rentang tonal kaya dengan penonjolan tekstur mikro pada material permukaan",summary:`Fotografi arsitektural menggunakan perspektif eye-level 50mm yang natural. Tata cahaya ${N.toLowerCase()} menghasilkan bayangan lembut bertingkat serta depth of field yang menjaga detail elemen latar tetap tajam dan informatif.`},x={subjectPlacementInFrame:"Tengah frame (Center alignment)",relativePositionToBg:"Berada di depan struktur dinding utama pada jarak terukur",distanceFromBg:"Sekitar 1.2 hingga 1.8 meter di depan bidang latar belakang",scaleToSpace:"Mengisi sekitar 25% - 35% bidang frame keseluruhan (proporsional manusiawi)",depthPlane:"Middle ground bagian depan, terpisah tegas dari bidang latar",depthRelationship:"Pemisahan kedalaman 3 dimensi nyata antara subjek, furnitur, dan dinding",framingRelationship:"Dibingkai secara proporsional oleh elemen samping perabotan dan pencahayaan aksen",negativeSpace:"Negative space lapang di sisi kiri (15-20%) dan sisi kanan (15-20%) serta headroom bersih",visualBalance:"Keseimbangan simetris dinamis dengan penyeimbang visual di kedua sisi frame",perspectiveRelationship:"Garis batas lantai dan kisi dinding mengalir halus menuju area penempatan subjek",orientation:"Frontal atau tiga perempat (3/4) menghadap kamera",lightingRelationship:"Pencahayaan subjek menyatu alami dengan cahaya lingkungan latar",framingElements:"Dinding arsitektural utama dan elemen pencahayaan samping",spatialSummary:`Subjek diposisikan di tengah frame pada area middle ground dengan jarak sekitar 1.5 meter dari dinding latar belakang. Struktur arsitektural ${w} membentang rapi tepat di belakangnya. Elemen pencahayaan dan perabotan samping berada di kedua sisi frame, menciptakan keseimbangan komposisi visual yang harmonis. Terdapat ruang negatif yang memadai di kedua sisi badan serta headroom bersih sekitar 18% di atas kepala.`},$={clothingType:"Setelan smart-casual tailored blazer dipadukan dengan kemeja kerah bersih dan celana bahan",garmentStyle:"Modern professional smart-casual",primaryColor:b?"Charcoal gray / deep navy":"Navy blue / dark graphite",secondaryColor:"Crisp white / soft light gray",material:"Campuran wol halus dan tenun katun berdaya serap cahaya tinggi",texture:"Tekstur tenun matte halus tanpa kilau sintetis berlebih",pattern:"Warna solid monokromatik dengan aksen jahitan mikro rapi",cut:"Modern structured tailored cut dengan garis bahu tegas dan pas badan",layering:"Dua lapis pakaian (outer blazer berkerah rapi di atas kemeja dalaman)",accessories:"Jam tangan logam minimalis dan aksen saku ramping",footwear:"Sepatu pantofel kulit matte bersih (jika tampak pada frame)",formality:"Semi-formal eksekutif profesional",stylingCharacter:"Elegan, berwibawa, bersih, dan tidak mencolok",relationshipToEnvironment:`Warna gelap pakaian memberikan kontras estetis yang seimbang terhadap palet latar ${u}, memisahkan subjek dengan jelas dari lingkungan.`,privacyNote:"🛡️ Face / Identity Rule: Referensi pakaian saja, bebas biometrik wajah. Tidak dimasukkan ke Prompt Background.",summary:"Referensi pakaian subjek berupa setelan smart casual modern berpalet gelap netral dengan potongan tailored yang rapi. Memiliki kontras tonal yang harmonis terhadap latar belakang tanpa mendominasi frame."},D={arsitektur:T,furniture:A,dekorasi:R,material:S.map(q=>`${q.material} (${q.texture})`).join("; "),warna:`Warna dominan: ${u}; Warna aksen: ${h}; Palet: netral hangat harmonis`,lighting:`${N}, temperatur ${_}, bayangan lembut bertransisi gradual`,summary:`Latar belakang terdiri dari arsitektur ${T.toLowerCase()} yang kokoh, dilengkapi furnitur ${A.toLowerCase()}, dekorasi ${R.toLowerCase()}, serta material bertekstur ${S.map(q=>q.material).join(", ")}.`},B={subjectPlacement:"Center alignment pada sumbu vertikal, eye-level camera height",symmetry:"Asimetris dinamis yang harmonis (Harmonious Dynamic Asymmetry)",horizontalBalance:"Keseimbangan terdistribusi merata antara bobot visual sisi kiri dan kanan",verticalBalance:"Pondasi bawah bertumpu kokoh pada bidang lantai dengan headroom lapang di atas",negativeSpace:"Ruang kosong bersih 35%-40% dari total bidang frame untuk kelegaan visual",depth:"Struktur kedalaman 3 dimensi berlapis (foreground lantai -> middle ground subjek -> background dinding)",perspective:"One-point linear perspective yang mengalir menuju titik tengah",foreground:"Bidang lantai bawah dan aksen sudut properti terdekat",midground:"Area penempatan subjek dan furnitur penyangga utama",background:"Dinding arsitektural utama dan elemen ornamen dinding vertikal",framing:"Pembingkaian alami dari elemen perabotan lateral dan batas dinding ruangan",spatialHierarchy:"Pusat perhatian tertuju pada area subjek dengan latar belakang berperan sebagai pendukung estetika kohesif",relativePositioning:"Lantai di bawah, dinding di belakang, properti samping menyeimbangkan kedua sisi frame",summary:"Komposisi ruang memanfaatkan hierarki 3 bidang kedalaman dengan leading lines linear. Penempatan subjek di tengah frame diimbangi oleh elemen samping ruangan, menghasilkan pembingkaian alami yang stabil dan proporsional."},U=`A detailed indoor studio backdrop featuring a ${E.toLowerCase().replace(/[^a-z0-9 ]/g,"")} ${w.toLowerCase().replace(/[^a-z0-9 ]/g,"")} atmosphere. Built-in ${m} architectural wall panels with fine surface textures of ${S.map(q=>q.material.toLowerCase().replace(/\([^)]*\)/g,"").trim()).join(" and ")}. Arranged with carefully coordinated interior elements including ${A.toLowerCase().replace(/[^a-z0-9, ]/g,"")} and subtle decorative accents. The environment is composed to naturally frame a centrally positioned subject, with the primary architectural wall forming a stable midground structure and lateral elements providing balanced framing depth. Soft diffused ambient lighting illuminating the scene evenly with gentle progressive shadows, creating a cozy, sophisticated, and professional mood. Eye-level linear perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${p} --style raw --v 6.1 --no human subject, person, people, watermark, text`,G={category:w,setting:v,architecture:T,decoration:R,propsAndAccessories:A,details:`${v}. ${T}. Dilengkapi ${R} serta properti ${A}.`},J={foreground:"Area depan frame dengan lantai dan aksen sudut properti terdekat",middleGround:"Zona interaksi utama tempat kedudukan penempatan subjek dan furnitur penyangga",background:"Dinding arsitektural utama dengan sekat pembagi, elemen gantung, dan dekorasi vertikal",perspective:"Linear perspective eye-level dengan garis batas lantai-dinding mengalir rapi menuju titik tengah",depthOfField:"Separasi kedalaman sedang (medium depth of field) dengan latar terbaca jelas namun tetap memberikan efek hierarki visual",relativePositions:[{element:"Struktur Dinding Utama",position:"Background tengah dan atas"},{element:"Furnitur Penyangga Utama",position:"Middle ground tengah"},{element:"Lampu Aksen / Properti Samping",position:"Middle ground kiri dan kanan"},{element:"Lantai / Bidang Bawah",position:"Foreground bawah"}]},K={palette:`${u}, dipadukan dengan ${h}`,dominantColor:u,accentColor:h,materialsAndTextures:S,surfaceCharacter:"Dominan permukaan matte non-reflektif bertekstur mikro alami dengan pantulan cahaya terkontrol"},na={type:N,direction:(Q=s.lightingStyleIndonesian)!=null&&Q.includes("kiri")?"Dominan dari arah kiri atas":"Merata terarah dari sudut 45 derajat",quality:"Soft diffused dengan transisi highlight-ke-bayangan halus",intensity:b?"Intensitas sedang-rendah bernuansa intim":"Intensitas seimbang tidak overexposed",colorTemperature:_,shadows:"Bayangan lembut di bawah furnitur dan sepanjang tepi dinding dengan detail gelap yang tetap terjaga",highlights:"Highlight satin halus pada tepi furnitur dan aksen dekoratif",darkAreas:"Sudut tepi ruangan dan bidang batas luar frame",contrast:f?"Kontras terukur dengan pemisahan bidang yang tegas":"Kontras moderat lembut bergradasi alami",distribution:"Terdistribusi harmonis pada seluruh latar belakang, menciptakan ilusi kedalaman tiga dimensi"},ia={mood:E,visualStyle:O,backgroundCharacter:"Arsitektural, kohesif, proporsional, dan estetik",roomImpression:"Memberikan kesan kedalaman ruang yang lapang dan teratur",formalityLevel:"Semi-formal elegan dengan standar fotografi visual profesional",photoCharacter:`Fotografi arsitektural berresolusi tajam dengan rasio framing ${p}`},ga=[{name:"Dinding Arsitektural Utama",type:"Struktur Ruang",relativePosition:"Background tengah dan atas",relativeSize:"Besar (mengisi sekitar 45% frame)",visualFunction:"Kanvas penahan pandangan dan pondasi atmosfer ruang",compositionRelation:"Menjadi bidang vertikal stabil yang mengikat seluruh elemen"},{name:"Elemen Furnitur / Properti Utama",type:"Furnitur",relativePosition:"Middle ground tengah",relativeSize:"Sedang (mengisi sekitar 20% frame)",visualFunction:"Anchor fisik dan penentu fungsi ruangan",compositionRelation:"Titik tumpu horisontal penyangga komposisi"},{name:"Aksen Pencahayaan / Lampu Ruangan",type:"Pencahayaan / Aksesori",relativePosition:"Middle ground samping",relativeSize:"Sedang-vertikal",visualFunction:"Penyedia aksen cahaya dan pemecah kekosongan bidang samping",compositionRelation:"Counterbalance penyeimbang simetri visual"},{name:"Dekorasi & Ornamen Lingkungan",type:"Dekorasi",relativePosition:"Background samping / ambalan",relativeSize:"Kecil hingga sedang",visualFunction:"Pemberi sentuhan personalitas estetika ruangan",compositionRelation:"Pengisi ritme detail visual tanpa mendominasi frame"}],P={symmetry:"Asimetris seimbang (Harmonious Dynamic Asymmetry)",visualBalance:"Keseimbangan terdistribusi proporsional antara sisi kiri dan kanan frame",repetitionPatterns:"Pola garis vertikal kisi arsitektur dan bidang horizontal furnitur berulang teratur",leadingLines:"Garis batas lantai dan sudut meja mengarahkan pandangan ke pusat frame",focalPoint:"Area tengah bidang latar pada ketinggian eye-level",elementDistribution:"Tersebar merata dengan rasio kepadatan seimbang",negativeSpace:"Tersedia ruang kosong bersih yang cukup di sekeliling area penempatan subjek",spaceDepth:"Hierarki kedalaman 3 dimensi nyata (foreground, middle ground, background)",framing:"Elemen samping furnitur dan pencahayaan membentuk pembingkaian alami (natural frame)",layering:"Multi-layer visual depth layering yang solid"},W={horizontalPos:"Tengah frame (Center alignment)",verticalPos:"Tengah frame (Eye-level center)",orientation:"Frontal atau tiga perempat (3/4) menghadap kamera",scale:"Medium shot (pinggang ke atas)",frameProportion:"Mengisi sekitar 25% - 35% bidang frame keseluruhan",distanceFromBg:"Berjarak sekitar 1.2 hingga 1.8 meter di depan dinding latar utama",depthPosition:"Middle ground bagian depan, terpisah tegas dari lapisan latar belakang",bgAreaBehindSubject:"Bidang tengah dinding arsitektural dan garis sekat vertikal tepat di belakang tubuh/kepala",negativeSpaceAround:"Tersedia negative space lapang di sisi kiri (15-20%) dan sisi kanan (15-20%) badan",propsRelation:"Diposisikan sejajar atau sedikit di depan furnitur utama, dengan lampu aksen berada di samping",anchorPoint:"Titik temu antara garis batas bidang tengah latar dan garis horizontal lantai",compositionBalance:"Menciptakan komposisi segitiga visual yang kokoh dan seimbang terhadap elemen latar samping",architecturalAlignment:"Punggung/sumbu tubuh sejajar lurus dengan garis vertikal arsitektur latar",floorPlacement:"Berdiri atau bertumpu mantap pada bidang lantai foreground/middle ground",framing:"Dibingkai secara proporsional oleh elemen dekorasi di kedua sisi bidang luar",emptySpace:"Headroom bersih lapang sekitar 15% - 20% dari batas atas frame hingga ujung kepala",sizeRelationToProps:"Skala subjek natural dan berskala proporsional manusiawi terhadap furnitur di sekelilingnya",relativeToMainBgElement:"Subjek berposisi tepat di tengah tanpa menutupi seluruh detail ornamen kunci latar belakang",spatialSummary:x.spatialSummary},ha=`${G.category} dengan ${G.setting}. Arsitektur latar menampilkan ${G.architecture}, diperkaya dekorasi berupa ${G.decoration}, serta perabotan ${G.propsAndAccessories}. Palet warna didominasi oleh ${K.palette} dengan karakter material ${S.map(q=>q.material).join(", ")}. Pencahayaan berkarakter ${na.type} dengan temperatur ${na.colorTemperature} dan distribusi cahaya terarah yang lembut. Suasana lingkungan terasa ${ia.mood} dalam gaya visual ${ia.visualStyle}. Struktur komposisi menghadirkan kedalaman ruang berlapis (layering) dengan leading lines perspektif yang rapi.`,ba=W.spatialSummary,H={mode:"BACKGROUND_ANALYSIS",suasanaMood:L,gayaFotografi:I,hubunganSubjekLatar:x,referensiOutfitSubjek:$,elemenBackground:D,komposisiSpatial:B,optimalPrompt:U,backgroundProfile:ha,placementProfile:ba,spaceAndComposition:G,visualLayers:J,colorAndMaterial:K,backgroundLighting:na,photoMood:ia,identifiedElements:ga,structureAndComposition:P,subjectPlacement:W,suggestedShorthands:["/background","/interior","/architecture","/ambientlight","/woodtexture","/softlight","/ruleofthirds"],negativePrompt:"human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, cluttered mess, watermark, text",aspectRatio:p};return H.backgroundProfileText=ue(H),H.placementProfileText=pe(H),H.fullReportText=_e(H),H.aspects=[{id:"ruang_komposisi",title:"1. Ruang & Komposisi",content:`${G.category} — ${G.setting}`},{id:"lapisan_visual",title:"2. Lapisan Visual & Kedalaman Ruang",content:`FG: ${J.foreground} | MG: ${J.middleGround} | BG: ${J.background}`},{id:"warna_material",title:"3. Warna & Material Latar",content:`${K.dominantColor}, ${K.surfaceCharacter}`},{id:"pencahayaan_latar",title:"4. Pencahayaan Latar & Properti",content:`${na.type} (${na.direction})`},{id:"nuansa_foto",title:"5. Nuansa Foto / Latar",content:`${ia.mood} • ${ia.visualStyle}`},{id:"elemen_teridentifikasi",title:"6. Elemen Latar Teridentifikasi",content:ga.map(q=>q.name).join(", ")},{id:"struktur_komposisi",title:"7. Struktur & Komposisi Latar",content:`${P.visualBalance} • ${P.repetitionPatterns}`},{id:"hubungan_subjek_latar",title:"8. Hubungan Subjek & Latar",content:W.spatialSummary}],H}const Ne={COMPOSITION_FRAMING:{id:"composition_framing",label:"Komposisi & Framing",description:"Variasi sudut kamera, jarak fokal, framing, dan perspektif visual.",modifiers:[{name:"Wide Cinematic Vista",directive:"wide-angle 24mm panoramic shot, expansive environment framing, rule of thirds placement",shorthands:["/cam_wide"]},{name:"Intimate Close-up Portrait",directive:"tight 85mm portrait framing, shallow depth of field, focused subject emphasis",shorthands:["/cam_portrait"]},{name:"Dynamic Low-Angle Hero Shot",directive:"dramatic low-angle upward perspective, monumental presence, dynamic ground-level framing",shorthands:["/cam_low"]},{name:"Overhead Bird-Eye View",directive:"high-angle top-down geometric overhead perspective, spatial architectural arrangement",shorthands:["/cam_topdown"]},{name:"Dutch Angle Action Framing",directive:"subtle tilted Dutch angle framing, dynamic tension, diagonal leading lines",shorthands:["/cam_dynamic"]}]},ENVIRONMENT_BACKGROUND:{id:"environment_background",label:"Lingkungan & Latar",description:"Variasi setting tempat, background, dan atmosfer lokasi.",modifiers:[{name:"Metropolitan Urban Street",directive:"bustling modern metropolis street background, blurred architectural bokeh, reflections on glass facades",shorthands:["/env_urban"]},{name:"Minimalist Studio Space",directive:"ultra-clean minimalist architectural studio interior, raw concrete texture, spacious negative space",shorthands:["/env_studio"]},{name:"Lush Botanical Horizon",directive:"verdant organic botanical greenhouse surroundings, lush tropical foliage, diffused natural canopy",shorthands:["/env_nature"]},{name:"Atmospheric Industrial Loft",directive:"vintage industrial loft setting, exposed brickwork, steel framework, subtle ambient haze",shorthands:["/env_industrial"]},{name:"Coastal Horizon Glow",directive:"serene open coastal seashore horizon, distant calm ocean waves, soft mist atmosphere",shorthands:["/env_coastal"]}]},LIGHTING_MOOD:{id:"lighting_mood",label:"Suasana & Pencahayaan",description:"Variasi tata cahaya, temperatur warna, dan mood dramatis.",modifiers:[{name:"Golden Hour Warm Radiance",directive:"warm sunset golden hour illumination, soft glowing rim highlights, rich amber backlight",shorthands:["/lighting_goldenhour"]},{name:"High-Contrast Studio Chiaroscuro",directive:"dramatic low-key studio lighting, defined rim lighting, deep sculptural shadows, soft fill reflector",shorthands:["/lighting_dramatic"]},{name:"Soft Diffused Overcast Daylight",directive:"gentle north-facing diffused daylight, velvety shadow roll-off, natural even tone gradation",shorthands:["/lighting_natural"]},{name:"Cyberpunk Neon Nocturne",directive:"vibrant dual-tone cyan and magenta neon night illumination, sharp reflective accent edges",shorthands:["/lighting_neon"]},{name:"Ethereal Foggy Dawn",directive:"cool ethereal morning twilight fog, gentle atmospheric light rays filtering through haze",shorthands:["/lighting_dawn"]}]},VISUAL_STYLE:{id:"visual_style",label:"Gaya Visual & Estetika",description:"Variasi gaya fotografi, emulasi film, dan sentuhan artistik.",modifiers:[{name:"Editorial High-Fashion Look",directive:"high-end editorial magazine aesthetics, sharp optical micro-contrast, elegant commercial styling",shorthands:["/style_editorial"]},{name:"Classic 35mm Analog Film",directive:"authentic 35mm color film grain texture, natural halation glow, vintage Kodak Portra aesthetic",shorthands:["/style_35mm"]},{name:"Documentary Candid Realism",directive:"unposed photojournalistic realism, authentic spontaneous moment, honest natural texture",shorthands:["/style_documentary"]},{name:"Fine-Art Minimalist Monochrome",directive:"high-contrast monochrome monochrome tonal scale, deep blacks, luminous highlights, sculptural form",shorthands:["/style_monochrome"]},{name:"Hyper-Detailed Medium Format RAW",directive:"masterpiece Hasselblad 100MP medium format RAW photography, pristine optical clarity",shorthands:["/style_raw"]}]},CREATIVE_CONCEPT:{id:"creative_concept",label:"Konsep Kreatif & Storytelling",description:"Variasi narasi visual, momen aksi, dan konsep konseptual.",modifiers:[{name:"Dynamic Motion Freeze",directive:"high-speed freeze-action capture, suspended particles in mid-air, dynamic kinetic energy",shorthands:["/concept_freeze"]},{name:"Cinematic Storytelling Candid",directive:"cinematic narrative moment, introspective gaze, atmospheric depth, film still storytelling",shorthands:["/concept_cinematic"]},{name:"Surreal Poetic Juxtaposition",directive:"poetic subtle surrealism, dreamlike harmony, unexpected visual interplay",shorthands:["/concept_surreal"]},{name:"Reflective Double Exposure Touch",directive:"subtle layered reflection overlay, multi-dimensional narrative visual texture",shorthands:["/concept_reflection"]}]},COMMERCIAL_STOCK:{id:"commercial_stock",label:"Fotografi Komersial & Stock",description:"Variasi siap pakai untuk kebutuhan periklanan, web hero banner, dan stock imagery.",modifiers:[{name:"Clean Commercial Negative Space",directive:"asymmetrical composition with clean negative copy space for headline typography, professional advertising layout",shorthands:["/stock_copyspace"]},{name:"Authentic Lifestyle Hero",directive:"relatable authentic lifestyle photography, bright welcoming atmosphere, premium commercial lookbook",shorthands:["/stock_lifestyle"]},{name:"Premium Corporate Brand Identity",directive:"sophisticated corporate aesthetic, trustworthy modern atmosphere, clean polished color harmony",shorthands:["/stock_corporate"]},{name:"Luxury Product & Editorial Hero",directive:"impeccable commercial showcase, tactile surface materials, perfectionist lighting alignment",shorthands:["/stock_luxury"]}]}},We=[{id:"pose_seated_relaxed",name:"Duduk Santai Alami",directive:"seated in a relaxed natural posture, hands resting comfortably",poseType:"SEATED"},{id:"pose_standing_confident",name:"Berdiri Percaya Diri",directive:"standing tall with relaxed confident posture, natural weight shift",poseType:"STANDING"},{id:"pose_walking_candid",name:"Melangkah Dinamis (Candid)",directive:"captured mid-stride in natural walking motion, spontaneous candid energy",poseType:"WALKING"},{id:"pose_leaning_casual",name:"Bersandar Santai",directive:"casually leaning against a supportive architectural surface, relaxed expression",poseType:"LEANING"},{id:"pose_three_quarter_turn",name:"Menoleh Tiga Perempat",directive:"standing in a graceful three-quarter turned profile, gently glancing back toward camera",poseType:"TURNED_PROFILE"},{id:"pose_seated_low",name:"Duduk Santai Rendah",directive:"seated low with relaxed arms draped comfortably in an intimate grounding posture",poseType:"LOW_SEATED"},{id:"pose_expressive_gesture",name:"Gestur Tangan Ekspresif",directive:"dynamic posture with hands gesturing expressively and naturally in conversation",poseType:"EXPRESSIVE_GESTURE"},{id:"pose_arms_crossed_poised",name:"Berdiri Anggun Berwibawa",directive:"poised upright stance with arms loosely folded in front, calm poised presence",poseType:"POISED_STANDING"}],qe=[{name:"Natural Depth & Micro-Detail",directive:"pristine optical micro-texture rendering, natural fine surface depth, truthful tonal fidelity",approachId:"neutral_nuance",approachLabel:"Nuansa Alami"},{name:"Subtle Expressive Nuance",directive:"intimate authentic expression clarity, lifelike organic textures, refined visual balance",approachId:"neutral_nuance",approachLabel:"Nuansa Alami"},{name:"Clean Organic Definition",directive:"sharp clean subject focus, true-to-life organic materials definition, balanced natural presence",approachId:"neutral_nuance",approachLabel:"Nuansa Alami"},{name:"Refined Harmonic Polish",directive:"harmonious natural tonality, pristine fine edge separation, balanced organic realism",approachId:"neutral_nuance",approachLabel:"Nuansa Alami"},{name:"Authentic Photographic Texture",directive:"unfiltered true-to-life photographic texture, natural highlight gradation, crisp tactile detail",approachId:"neutral_nuance",approachLabel:"Nuansa Alami"}];function xe(o=""){if(!o||typeof o!="string")return[];const a=o.match(/\/[a-zA-Z0-9_-]+/g);return a?Array.from(new Set(a.map(e=>e.toLowerCase()))):[]}function an(o="",a=[],e={}){const t=!!e.face,i=!!e.outfit,r=!!e.pose,s=!!e.color,n=(e.custom||"").trim(),l=[];return t&&l.push({type:"face",label:"Identitas Wajah (/facelock)",token:"/facelock"}),i&&l.push({type:"outfit",label:"Pakaian & Aksesori (/outfitlock)",token:"/outfitlock"}),r&&l.push({type:"pose",label:"Pose & Proporsi Tubuh (/poselock)",token:"/poselock"}),s&&l.push({type:"color",label:"Palet Warna Dominan (/colorpreserve)",token:"/colorpreserve"}),n&&l.push({type:"custom",label:`Instruksi Kustom: "${n}"`,token:n}),{lockFacelock:t,lockOutfit:i,lockPose:r,lockColor:s,customLock:n,activeLocks:l,lockedTokens:l.map(d=>d.token)}}function lt(o="",a="",e={}){let t=o.trim();const i=new Set(xe(t));return e.lockPose?!i.has("/poselock")&&!i.has("/bodyshape")&&(t=`${t}, /poselock`,i.add("/poselock")):(t=t.replace(/(?:,\s*)?\/(?:poselock|bodyshape)\b/gi,"").trim(),i.delete("/poselock"),i.delete("/bodyshape")),e.lockOutfit?i.has("/outfitlock")||(t=`${t}, /outfitlock`,i.add("/outfitlock")):(t=t.replace(/(?:,\s*)?\/outfitlock\b/gi,"").trim(),i.delete("/outfitlock")),e.lockColor?i.has("/colorpreserve")||(t=`${t}, /colorpreserve`,i.add("/colorpreserve")):(t=t.replace(/(?:,\s*)?\/colorpreserve\b/gi,"").trim(),i.delete("/colorpreserve")),e.lockFacelock&&(i.has("/facelock")||(t=`${t}, /facelock`,i.add("/facelock"))),e.customLock&&!t.toLowerCase().includes(e.customLock.toLowerCase())&&(t=`${t}, preserving ${e.customLock}`),t=t.replace(/,\s*,/g,",").replace(/^,\s*|,\s*$/g,"").trim(),t}const en=[{id:"auto",label:"Otomatis (Ikuti Sumber)",shortLabel:"Otomatis",description:"Gunakan rasio gambar referensi jika tersedia atau konteks prompt"},{id:"1:1",label:"1:1 — Persegi",shortLabel:"1:1",description:"Square framing (1024x1024), ideal untuk avatar dan posting grid"},{id:"3:2",label:"3:2 — Landscape Foto",shortLabel:"3:2",description:"Format standar fotografi kamera DSLR/mirrorless horizontal"},{id:"2:3",label:"2:3 — Portrait Foto",shortLabel:"2:3",description:"Format standar fotografi potret vertikal"},{id:"4:3",label:"4:3 — Landscape Klasik",shortLabel:"4:3",description:"Rasio klasik display dan cetak fotografi landscape"},{id:"3:4",label:"3:4 — Portrait Klasik",shortLabel:"3:4",description:"Rasio klasik majalah dan fotografi potret"},{id:"16:9",label:"16:9 — Widescreen",shortLabel:"16:9",description:"Standar layar video, desktop, dan sinematik panorama"},{id:"9:16",label:"9:16 — Vertikal / Mobile",shortLabel:"9:16",description:"Format vertikal smartphone penuh (Story, Reels, TikTok)"},{id:"21:9",label:"21:9 — Ultrawide",shortLabel:"21:9",description:"Sinematik anamorphic ultrawide yang sangat dramatis"},{id:"custom",label:"Bebas / Custom",shortLabel:"Custom",description:"Masukkan rasio numerik bebas kustom (contoh: 5:4, 2.35:1)"}];function qa(o){if(!o||typeof o!="string")return{valid:!1,error:"Rasio kustom tidak boleh kosong. Masukkan format angka W:H (contoh: 5:4 atau 2.35:1)."};const a=o.trim();if(!a)return{valid:!1,error:"Rasio kustom tidak boleh kosong. Masukkan format angka W:H (contoh: 5:4 atau 2.35:1)."};const e=a.match(/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/);if(!e)return{valid:!1,error:"Format rasio kustom tidak valid. Harap gunakan format angka positif W:H (contoh: 5:4 atau 2.35:1)."};const t=parseFloat(e[1]),i=parseFloat(e[2]);return isNaN(t)||isNaN(i)||t<=0||i<=0?{valid:!1,error:"Nilai lebar dan tinggi rasio kustom harus berupa angka positif yang lebih besar dari nol."}:{valid:!0,normalized:`${e[1]}:${e[2]}`}}function tn(o,a){const e=parseInt(o,10),t=parseInt(a,10);if(!e||!t||e<=0||t<=0)return null;const i=e/t,r=[{ratio:"1:1",val:1},{ratio:"16:9",val:16/9},{ratio:"9:16",val:9/16},{ratio:"3:2",val:3/2},{ratio:"2:3",val:2/3},{ratio:"4:3",val:4/3},{ratio:"3:4",val:3/4},{ratio:"21:9",val:21/9}];for(const l of r)if(Math.abs(i-l.val)<=.045)return l.ratio;const s=(l,d)=>d===0?l:s(d,l%d),n=s(e,t);return n>1&&e/n<=50&&t/n<=50?`${e/n}:${t/n}`:`${Math.round(i*100)/100}:1`}function De({sourceType:o,variationImage:a,previousAnalysis:e,basePrompt:t=""}={}){var i;if(o==="NEW_IMAGE"&&a){if(a.width&&a.height){const r=tn(a.width,a.height);if(r)return r}if(a.aspectRatio&&a.aspectRatio!=="auto")return a.aspectRatio}if(o==="PREVIOUS_ANALYSIS"&&e){if((i=e.visionData)!=null&&i.aspectRatio&&e.visionData.aspectRatio!=="auto")return e.visionData.aspectRatio;if(e.targetAspectRatio&&e.targetAspectRatio!=="auto")return e.targetAspectRatio}if(t&&typeof t=="string"){const r=t.match(/--ar\s+([0-9]+(?:\.[0-9]+)?\s*:\s*[0-9]+(?:\.[0-9]+)?)/i);if(r){const s=r[1].replace(/\s+/g,""),n=qa(s);if(n.valid)return n.normalized}}return null}function nn({aspectRatio:o="auto",customAspectRatio:a="",sourceType:e="PREVIOUS_ANALYSIS",variationImage:t=null,previousAnalysis:i=null,basePrompt:r=""}={}){if(o==="custom"){const s=qa(a);return s.valid?s.normalized:null}return o&&o!=="auto"&&o!=="Otomatis"?o:De({sourceType:e,variationImage:t,previousAnalysis:i,basePrompt:r})}function Xa(o="",a=null){if(!o||typeof o!="string")return"";let e=o.trim();return e=e.replace(/\s*--ar\s+[0-9]+(?:\.[0-9]+)?\s*:\s*[0-9]+(?:\.[0-9]+)?/gi,"").trim(),e=e.replace(/,\s*$/,"").trim(),a&&typeof a=="string"&&a.trim()&&(e=`${e} --ar ${a.trim()}`),e}function rn({basePrompt:o="",installedShorthands:a=[],count:e=5,selectedApproaches:t=["composition_framing","environment_background","lighting_mood","visual_style"],lockedConfig:i={},aspectRatio:r="auto",customAspectRatio:s="",sourceType:n="PREVIOUS_ANALYSIS",variationImage:l=null,previousAnalysis:d=null}={}){const c=(o||"").trim()||"A beautiful subject in natural setting",g=Math.max(1,Math.min(10,parseInt(e,10)||5)),p=an(c,a,i),k=[],u=Array.isArray(t)?t:[];if(u.length===0)qe.forEach(y=>{k.push({...y})});else for(const y of u){const w=Ne[y.toUpperCase()]||Ne[y];w&&Array.isArray(w.modifiers)&&w.modifiers.forEach(v=>{k.push({...v,approachId:w.id,approachLabel:w.label})})}k.length===0&&qe.forEach(y=>{k.push({...y})});let m=xe(c);p.lockPose||(m=m.filter(y=>y!=="/poselock"&&y!=="/bodyshape")),p.lockOutfit||(m=m.filter(y=>y!=="/outfitlock")),p.lockColor||(m=m.filter(y=>y!=="/colorpreserve"));let h=c.replace(/(?:,\s*)?\/[a-zA-Z0-9_-]+/g,"").trim();p.lockPose||(h=h.replace(/\b(standing|seated|sitting|leaning|walking|posing)\s+(?:in|on|with|against)\s+[^,.]+/gi,"").trim(),h=h.replace(/,\s*,/g,",").replace(/^,\s*|,\s*$/g,"").trim());const b=nn({aspectRatio:r,customAspectRatio:s,sourceType:n,variationImage:l,previousAnalysis:d,basePrompt:c}),f=[];for(let y=0;y<g;y++){const w=y%k.length,v=k[w];let T="",R="";if(!p.lockPose){const $=We[y%We.length];T=$.directive,R=$.name}const A=[h];T&&A.push(T),v.directive&&A.push(v.directive);let S=A.filter(Boolean).join(", ");const E=new Set([...m,...v.shorthands||[]]);E.size>0&&(S=`${S}, ${Array.from(E).join(", ")}`);const O=lt(S,c,p),N=Xa(O,b),_=xe(N);let L=[`Variasi ${y+1}`];v.name&&v.approachId!=="neutral_nuance"&&L.push(v.name),R&&!p.lockPose&&L.push(R),L.length===1&&L.push(v.name||"Nuansa Alami");const I=L.join(" • ");let x=`Pendekatan ${v.approachLabel.toLowerCase()}`;!p.lockPose&&R&&(x+=` dengan variasi pose fisik: ${R.toLowerCase()}`),p.activeLocks.length>0?x+=` sambil melindungi: ${p.activeLocks.map($=>$.label).join(", ")}`:x+=" tanpa pembatasan penguncian kaku.",b&&(x+=` (Rasio: ${b})`),f.push({id:`var_${y+1}`,title:I,approachId:v.approachId,approachLabel:v.approachLabel,prompt:N,basePrompt:c,shorthands:_,poseApplied:p.lockPose?"Pose Terkunci":R,aspectRatioApplied:b?`--ar ${b}`:"Alami (Ikuti Sumber)",lockedElementsApplied:p.activeLocks.map($=>$.label),explanation:x})}return{sourceBasePrompt:c,count:f.length,locks:p,selectedApproaches:u,targetAspectRatio:b,variations:f}}const Ka={BALANCED:{id:"balanced",name:"Balanced Optimization",icon:"⚖️",description:"Peningkatan menyeluruh secara harmonis antara subjek, pencahayaan, tekstur, dan komposisi.",directives:[{title:"Harmonious Visual Balance",additive:"balanced natural lighting, clear optical subject separation, refined atmospheric depth, clean professional photographic finish",recommendedShorthands:["/realistic","/softlight"]},{title:"Cinematic Ambient Polish",additive:"subtle cinematic atmosphere, calibrated organic contrast roll-off, balanced tonal clarity, highly refined visual coherence",recommendedShorthands:["/cinematic"]},{title:"Pristine Subject Definition",additive:"crisp tactile focal definition, harmonious ambient environment integration, nuanced shadows, lifelike depth of field",recommendedShorthands:["/enhance"]},{title:"Polished Editorial Coherence",additive:"sophisticated tonal harmony, balanced natural exposure, refined midtone details, professional magazine editorial aesthetic",recommendedShorthands:["/rawphoto"]},{title:"Dynamic Nuanced Harmony",additive:"delicate light interplay, natural dimensionality, realistic environmental reflections, authentic true-to-life presence",recommendedShorthands:["/goldenhour"]}]},DETAIL:{id:"detail",name:"Detail Enhancement",icon:"🔬",description:"Memperjelas detail mikro, tekstur permukaan, materialitas, dan ketajaman pencahayaan.",directives:[{title:"Micro-Texture Fidelity",additive:"intricate micro-surface textures, pores, fine textile weaves, tactile surface fidelity, razor-sharp optical clarity",recommendedShorthands:["/highdetail","/cleandetail"]},{title:"Hyper-Refined Surface Polish",additive:"pristine high-frequency edge definition, authentic tangible material depth, crisp specular micro-reflections",recommendedShorthands:["/detailpreservation","/sharpen"]},{title:"Tactile Environmental Detailing",additive:"ultra-detailed atmospheric particles, subtle surface imperfections, rich granular material definition, 8k photographic resolution",recommendedShorthands:["/texturepreservation"]},{title:"Textural Subtlety & Depth",additive:"nuanced surface lighting accents, tangible organic textures, refined high-fidelity micro-contrast",recommendedShorthands:["/highresolution"]},{title:"Sculpted Edge Precision",additive:"crisp edge separation without artificial halos, authentic physical materiality, rich detailed gradation",recommendedShorthands:["/highdetail"]}]},COMPOSITION:{id:"composition",name:"Composition Optimization",icon:"📐",description:"Memperjelas framing kamera, sudut pandang, jarak fokal, dan keseimbangan spasial.",directives:[{title:"Rule of Thirds Master Framing",additive:"calibrated rule of thirds framing, balanced geometric alignment, dynamic visual flow, clean negative breathing space",recommendedShorthands:["/ruleofthirds"]},{title:"Cinematic Depth & Leading Lines",additive:"dramatic three-dimensional foreground-to-background spatial depth, subtle leading lines directing focus, layered perspective",recommendedShorthands:["/shallowdof"]},{title:"Focused Dynamic Framing",additive:"intentional focal hierarchy, cinematic 50mm natural perspective, grounded spatial placement, balanced weight distribution",recommendedShorthands:["/compositionbalance"]},{title:"Expansive Environmental Context",additive:"wide panoramic vista framing, atmospheric spatial relationship between subject and environment, golden ratio composition",recommendedShorthands:["/wideangle"]},{title:"Dynamic Low-Perspective Angle",additive:"slight low-angle heroic elevation, dynamic architectural lines, grounded spatial proportion",recommendedShorthands:["/eyelevel"]}]},PHOTOREALISM:{id:"photorealism",name:"Photorealism Optimization",icon:"📸",description:"Memperkuat arahan realisme fotografi otentik, sensor grain, dan gradasi warna sensor alami.",directives:[{title:"Authentic 35mm Optical Realism",additive:"authentic 35mm optical capture, natural chromatic aberration roll-off, organic camera sensor dynamic range, unfiltered photographic fidelity",recommendedShorthands:["/rawphoto","/naturalprocessing"]},{title:"Natural Photographic Exposure",additive:"truthful exposure latitude, uncompressed organic shadows, subtle analog sensor grain, zero plastic waxy skin rendering",recommendedShorthands:["/rawphoto","/naturaltone"]},{title:"Documentary Candid Authenticity",additive:"candid photojournalistic realism, unscripted ambient lighting, truthful organic textures, genuine physical presence",recommendedShorthands:["/rawphoto"]},{title:"Medium Format Studio Fidelity",additive:"Hasselblad medium format aesthetic, creamy falloff, immaculate color rendition, believable natural shadows",recommendedShorthands:["/studiobg","/rawphoto"]},{title:"Natural Optical Bokeh & Depth",additive:"shallow f/1.8 optical depth of field, natural circular bokeh discs, soft organic highlight gradation",recommendedShorthands:["/bokeh","/shallowdof"]}]},CREATIVE:{id:"creative",name:"Creative Optimization",icon:"🎨",description:"Meningkatkan kedalaman atmosfer, mood sinematik, dan visual storytelling yang kaya.",directives:[{title:"Atmospheric Mood & Narrative",additive:"evocative cinematic mood, atmospheric haze and volumetric rays, rich emotional storytelling tone, layered visual intrigue",recommendedShorthands:["/cinematic","/dynamicrange"]},{title:"Poetic Visual Metaphor",additive:"subtle poetic visual symbolism, contemplative atmospheric density, lyrical color harmony, dynamic narrative tension",recommendedShorthands:["/colorgrade"]},{title:"Neo-Cinematic Contrast Roll-off",additive:"moody chiaroscuro contrasts, stylized ambient color bleed, expressive ambient lighting accents, captivating visual drama",recommendedShorthands:["/cinematic"]},{title:"Dreamlike Ethereal Glow",additive:"delicate ethereal luminescence, soft diffused highlight halation, dreamy atmospheric mist, evocative visual mystery",recommendedShorthands:["/goldenhour"]},{title:"Stylized Conceptual Polish",additive:"bold conceptual color temperature contrast, distinctive aesthetic signature, atmospheric narrative depth",recommendedShorthands:["/vintage"]}]},COMMERCIAL_STOCK:{id:"commercial_stock",name:"Commercial Stock Optimization",icon:"💼",description:"Menyesuaikan prompt untuk kebutuhan fotografi komersial, periklanan, dan stock photography.",directives:[{title:"Clean Copy Space Advertising Layout",additive:"asymmetrical composition with clean negative copy space for headline typography, professional advertising layout, welcoming atmosphere",recommendedShorthands:["/cleandetail","/studiobg"]},{title:"Authentic Lifestyle Hero",additive:"relatable authentic lifestyle photography, bright welcoming natural daylight, premium commercial lookbook aesthetic",recommendedShorthands:["/daylight","/realistic"]},{title:"Corporate Brand Identity Polish",additive:"sophisticated corporate brand identity, trustworthy modern atmosphere, clean polished color harmony, premium executive look",recommendedShorthands:["/colorbalance"]},{title:"Luxury Editorial Product Showcase",additive:"impeccable commercial showcase, tactile surface materials, perfectionist lighting alignment, high-end catalog quality",recommendedShorthands:["/highresolution","/studiobg"]},{title:"Vibrant Commercial Stock Presence",additive:"optimistic commercial stock appeal, bright clean tonal grading, versatile multi-platform marketing usability",recommendedShorthands:["/enhance"]}]},MINIMAL_CHANGE:{id:"minimal_change",name:"Minimal Change",icon:"✨",description:"Polesan minimal dan presisi tinggi, mempertahankan struktur dan maksud sumber semaksimal mungkin.",directives:[{title:"Gentle Tonal Polishing",additive:"refined natural clarity, clean visual coherence, subtle optical polish without altering original intent",recommendedShorthands:[]},{title:"Precision Syntax Cleanup",additive:"cohesive AI image prompt phrasing, enhanced descriptive flow, faithful original subject preservation",recommendedShorthands:[]},{title:"Natural Realism Preservation",additive:"subtle organic realism touch, pristine edge cleanliness, true-to-source fidelity",recommendedShorthands:[]},{title:"Harmonious Balance Touch",additive:"balanced visual polish, respectful of original subject framing and setting",recommendedShorthands:[]},{title:"Clean Structural Alignment",additive:"clear descriptive precision, natural lighting balance, preserved narrative tone",recommendedShorthands:[]}]}};function Ue(o=""){if(!o||typeof o!="string")return[];const a=o.match(/\/[a-zA-Z0-9_-]+/g);return a?Array.from(new Set(a.map(e=>e.toLowerCase()))):[]}function dt(o="",a=[]){const e=Ue(o);if(!e.length)return[];const t=new Map;if(Array.isArray(a))for(const i of a)i&&i.code&&t.set(i.code.toLowerCase(),i);return e.map(i=>{const r=t.get(i);return r?{code:r.code||i,name:r.name||i.replace(/^\//,"").replace(/_/g," "),category:r.category||"Shorthand Tag",isKnown:!0}:null}).filter(Boolean)}function ct(o="",a={}){const e=[],t=(o||"").toLowerCase();if(a.face&&(t.includes("change face")||t.includes("different face")||t.includes("distorted face")||t.includes("ugly face")||t.includes("/faceswap")||t.includes("altering smile")||t.includes("alter face"))&&e.push("Instruksi modifikasi wajah bertentangan dengan Wajah (/facelock) yang sedang dilindungi."),a.outfit&&(t.includes("change outfit")||t.includes("different clothes")||t.includes("strip clothes")||t.includes("recolor clothes")||t.includes("/outfitswap"))&&e.push("Instruksi perubahan pakaian bertentangan dengan Pakaian (/outfitlock) yang sedang dilindungi."),a.pose&&(t.includes("running mid-stride")||t.includes("sitting on floor")||t.includes("jumping dynamic")||t.includes("change pose"))&&e.push("Instruksi pose baru bertentangan dengan Pose (/poselock) yang sedang dilindungi."),a.color&&(t.includes("monochrome black and white")||t.includes("inverted neon palette")||t.includes("neon recolor")||t.includes("recolor"))&&e.push("Instruksi palet warna bertentangan dengan Palet Warna (/colorpreserve) yang sedang dilindungi."),a.custom&&a.custom.trim()){const i=a.custom.trim().toLowerCase();(t.includes(`remove ${i}`)||t.includes(`without ${i}`)||t.includes(`replace ${i}`))&&e.push(`Instruksi modifikasi bertentangan dengan elemen kustom "${a.custom}" yang dilindungi.`)}return e}function ut(o="",a={}){let e=(o||"").trim();const t=new Set(Ue(e));if(a.face?t.has("/facelock")||(e=`${e}, /facelock`,t.add("/facelock")):e=e.replace(/(?:,\s*)?\/facelock\b/gi,"").trim(),a.outfit?t.has("/outfitlock")||(e=`${e}, /outfitlock`,t.add("/outfitlock")):e=e.replace(/(?:,\s*)?\/outfitlock\b/gi,"").trim(),a.pose?t.has("/poselock")||(e=`${e}, /poselock`,t.add("/poselock")):e=e.replace(/(?:,\s*)?\/poselock\b/gi,"").trim(),a.color?t.has("/colorpreserve")||(e=`${e}, /colorpreserve`,t.add("/colorpreserve")):e=e.replace(/(?:,\s*)?\/colorpreserve\b/gi,"").trim(),a.custom&&a.custom.trim()){const i=a.custom.trim();e.toLowerCase().includes(i.toLowerCase())||(e=`${e}, [PRESERVE: ${i}]`)}return e=e.replace(/,\s*,/g,",").replace(/^,\s*|,\s*$/g,"").trim(),e}function sn(o,a,e={},t=[]){const i=[];i.push(`Dioptimalkan dengan fokus **${o.name}**.`),a&&a.title&&i.push(`Peningkatan: *${a.title}*.`);const r=[];return e.face&&r.push("Wajah"),e.outfit&&r.push("Pakaian"),e.pose&&r.push("Pose"),e.color&&r.push("Warna"),e.aspectRatio&&r.push("Rasio Aspek"),e.custom&&r.push(`"${e.custom.trim()}"`),r.length>0&&i.push(`Proteksi instruksi: ${r.join(", ")} dilindungi penuh.`),t.length>0&&i.push(`Shorthand terkait: ${t.join(" ")}.`),i.join(" ")}function on({basePrompt:o="",mode:a="balanced",count:e=3,lockedConfig:t={face:!1,outfit:!1,pose:!1,color:!1,aspectRatio:!0,custom:""},catalog:i=[],detectedRatio:r=null}={}){const s=(o||"").trim();if(!s)return[];const n=(a||"balanced").toUpperCase(),l=Ka[n]||Ka.BALANCED,d=l.directives||[];let c=null;if(t.aspectRatio){const m=s.match(/--ar\s+([0-9.:]+)/i);m?c=m[1].trim():r&&(c=r)}const g=s.replace(/\s*--ar\s+[0-9]+(?:\.[0-9]+)?\s*:\s*[0-9]+(?:\.[0-9]+)?/gi,"").trim(),p=va(g),k=[],u=Math.min(Math.max(parseInt(e,10)||3,1),5);for(let m=0;m<u;m++){const h=d[m%d.length]||d[0],b=`Versi ${m+1} — ${h.title||l.name}`;let f=`${p}, ${h.additive}`;const y=new Set(Ue(f)),w=[];if(Array.isArray(h.recommendedShorthands))for(const A of h.recommendedShorthands)y.has(A.toLowerCase())||(f=`${f}, ${A}`,y.add(A.toLowerCase()),w.push(A));f=ut(f,t),c&&(f=Xa(f,c));const v=dt(f,i),T=ct(f,t),R=sn(l,h,t,w);k.push({id:`opt_v${m+1}_${Date.now()}`,versionNumber:m+1,versionName:b,mode:l.id,modeName:l.name,prompt:f,originalPrompt:s,summary:R,recognizedShorthands:v,conflicts:T,directiveUsed:h.title})}return k}function ln({mode:o="balanced",lockedConfig:a={},catalog:e=[]}={}){const t=(o||"balanced").toUpperCase(),i=Ka[t]||Ka.BALANCED,r=(e||[]).slice(0,50).map(s=>`${s.code}: ${s.name} (${s.description||""})`).join(`
`);return`You are the Expert AI Image Prompt Optimizer for PROMPT SHORTHAND ANALYZER V3.8.
Your job is to optimize the user's image generation prompt based strictly on the chosen optimization mode: "${i.name}".
Mode Objective: ${i.description}

RULES & CONSTRAINTS:
1. Maintain the core subject, intent, and primary narrative of the source prompt.
2. Produce professional AI image generator prompts (clean, highly descriptive, optical terminology).
3. Do not add conversational filler ("Here is the prompt", "Sure!"). Output ONLY structured JSON.
4. INSTRUCTION LOCKS:
   - Face Lock: ${a.face?"STRICTLY LOCKED (/facelock). Never modify face/facial features.":"Unlocked"}
   - Outfit Lock: ${a.outfit?"STRICTLY LOCKED (/outfitlock). Never modify clothes/attire.":"Unlocked"}
   - Pose Lock: ${a.pose?"STRICTLY LOCKED (/poselock). Never alter physical pose/body proportions.":"Unlocked"}
   - Color Lock: ${a.color?"STRICTLY LOCKED (/colorpreserve). Preserve color palette.":"Unlocked"}
   - Aspect Ratio: ${a.aspectRatio?"Preserve any --ar flag exactly as provided.":"Optional"}
   ${a.custom?`- Custom Constraint: Must preserve "${a.custom}".`:""}

KNOWN SHORTHAND CATALOG REFERENCE:
${r}

RETURN JSON FORMAT:
{
  "versions": [
    {
      "versionName": "Versi 1 — Short descriptive title",
      "prompt": "Optimized prompt string with appropriate shorthands and locks",
      "summary": "Clear Indonesian summary of visual enhancements and protections applied"
    }
  ]
}`}const Aa={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class dn{constructor(a=[]){this.catalog=a,this.localEngine=new Rt(a),this.status=Aa.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){ea.getApiKey()||(this.status=Aa.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!ea.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const t=e.indexOf("{"),i=e.lastIndexOf("}");if(t!==-1&&i>t){const n=e.substring(t,i+1);try{return JSON.parse(n)}catch{}}const r=e.indexOf("["),s=e.lastIndexOf("]");if(r!==-1&&s>r){const n=e.substring(r,s+1);try{return JSON.parse(n)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var d;const t=(a||ea.getApiKey()).trim(),i=e||ea.getModel()||"gemini-2.0-flash";if(!t)return this.status=Aa.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:Aa.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const s=[i.trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((c,g,p)=>c&&p.indexOf(c)===g&&!c.includes("1.5-pro")&&!c.includes("2.5-pro")&&(c==="gemini-3.5-flash-lite"||!c.includes("3.5")&&!c.includes("3.8")));let n="",l=null;for(const c of s)try{const g=`https://generativelanguage.googleapis.com/v1beta/models/${c}?key=${encodeURIComponent(t)}`,p=await fetch(g,{method:"GET",headers:{"Content-Type":"application/json"}});if(p.ok){l=c;break}else{if(n=((d=(await p.json().catch(()=>({}))).error)==null?void 0:d.message)||`HTTP ${p.status}: ${p.statusText}`,p.status===404)continue;if(p.status===400||p.status===403)break}}catch(g){n=g.message||"Koneksi jaringan gagal"}if(l)return this.status=Aa.CONNECTED,this.lastError=null,l!==i&&ea.setModel(l),{success:!0,status:Aa.CONNECTED,message:`Berhasil terhubung ke model ${l}!`};try{const c=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(t)}`,g=await fetch(c);if(g.ok){const k=((await g.json().catch(()=>({}))).models||[]).filter(m=>{var h;return(h=m.supportedGenerationMethods)==null?void 0:h.includes("generateContent")}).map(m=>m.name.replace(/^models\//,"")).filter(m=>!m.includes("1.5-pro")&&!m.includes("2.5-pro")&&!m.includes("3.5")&&!m.includes("3.8")),u=k.find(m=>m.includes("2.0-flash"))||k.find(m=>m.includes("1.5-flash"))||k[0];if(u)return ea.setModel(u),this.status=Aa.CONNECTED,this.lastError=null,{success:!0,status:Aa.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${u})!`}}}catch{}return this.status=Aa.FAILED,this.lastError=n||"Koneksi gagal",{success:!1,status:Aa.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const t=ea.getApiKey().trim(),i=ea.getModel()||"gemini-2.0-flash";if(!t){const n=this.localEngine.analyze(a,e),l=va(n.optimalPrompt);return{...n,optimalPrompt:l,englishBasePrompt:va(n.cleanText),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."}}try{const n=await this.callGeminiAPI(a,t,i);if(n){const l=this.mergeAiWithCatalog(n,a,e);this.status=Aa.CONNECTED,this.lastError=null;const d=ea.getModel()||i;return{...l,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${d}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(n){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",n),this.lastError=n.message}const r=this.localEngine.analyze(a,e),s=va(r.optimalPrompt);return{...r,optimalPrompt:s,englishBasePrompt:va(r.cleanText),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,t){const r=[(t||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((n,l,d)=>n&&d.indexOf(n)===l&&!n.includes("1.5-pro")&&!n.includes("2.5-pro")&&(n==="gemini-3.5-flash-lite"||!n.includes("3.5")&&!n.includes("3.8")));let s=null;for(const n of r)try{const l=await this.executeGenerateContent(a,e,n);if(l)return n!==t&&ea.setModel(n),l}catch(l){s=l,console.warn(`Model ${n} tidak dapat digunakan (${l.message}), mencoba model alternatif...`);continue}throw s||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,t){var c,g,p,k,u;const i=`https://generativelanguage.googleapis.com/v1beta/models/${t}:generateContent?key=${encodeURIComponent(e)}`,s={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
Tugas Anda: Menganalisis SELURUH isi INPUT PROMPT pengguna secara semantik dan menemukan/merekomendasikan notasi visual shorthand AI yang paling tepat, profesional, dan relevan.

PRINSIP UTAMA: PENCARIAN SHORTHAND HARUS TERBUKA DAN TIDAK TERBATAS.
- JANGAN MEMBATASI pencarian hanya pada kategori, subkategori, daftar istilah, atau topik tertentu.
- SETIAP INPUT PENGGUNA HARUS DAPAT DIPROSES DAN DICARI, apa pun topik, objek, gaya seni, konsep visual, komposisi, rasio/perluasan kanvas (outpainting / uncrop / expand canvas), aktivitas, profesi, suasana, atau istilah baru yang digunakan.
- Analisis seluruh makna dan konteks prompt, bukan hanya pencocokan kata kaku.
- Tetap temukan shorthand untuk istilah atau konsep baru yang belum terdapat dalam daftar shorthand lokal.
- Tidak memberikan batasan pencarian berdasarkan kategori aset.
- Tidak memblokir pencarian hanya karena istilah tidak dikenal oleh katalog shorthand lokal.
- Tampilkan HANYA shorthand yang benar-benar relevan dengan fungsi atau konsep dalam prompt.

PANDUAN SHORTHAND & NOTASI VISUAL:
1. Awali setiap shorthand dengan garis miring "/" (contoh: /outpaint, /expandcanvas, /facelock, /hairlock, /curvy, /enhance, /sharpen, /cyberpunk, /surgeon, /macrolens, /bokeh, dsb.).
2. Jika konsep ada di katalog umum aplikasi (misal: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /highresolution, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade, /bodyvoluptuous, /curvy, /fullfigured, /plussize, /voluptuous, /handperfect, /hands, /handanatomy, /fingerperfect, /handdetail, /handnatural, /outpaint), prioritaskan kode tersebut.
3. JIKA user memasukkan kata kunci / konsep baru di luar katalog dasar (contoh: "memperluas foto" -> /outpaint, "fotografer tokyo cyberpunk" -> /cyberpunk, "dokter bedah" -> /surgeon, "lensa makro" -> /macrolens, dsb.), Anda WAJIB membuat dan merekomendasikan notasi shorthand yang paling profesional, presisi, dan sesuai standar industri visual AI.
4. Struktur Rekomendasi:
   - primaryShorthands (Prioritas 'WAJIB', isPrimary: true, checked: true): Rekomendasi utama (1 atau 2 shorthand paling vital yang langsung terpasang di Prompt Optimal). Beri label source: "ONLINE".
   - relatedShorthands (Prioritas 'DISARANKAN', isPrimary: false, checked: false): Alternatif shorthand relevan lainnya (2 sampai 5 pilihan alternatif). Beri label source: "ONLINE".

Jawab HANYA dalam format JSON valid tanpa markdown formatting:
{
  "intent": {
    "primaryAction": "NAMA_AKSI_SEMANTIK",
    "primaryTarget": "Target visual",
    "summary": "Ringkasan maksud instruksi visual user dalam bahasa Indonesia",
    "priority": "HIGH" | "MEDIUM" | "LOW",
    "category": "BODY_POSE" | "FACE_IDENTITY" | "HAIR" | "HEADWEAR" | "OUTFIT" | "BACKGROUND" | "LIGHTING" | "IMAGE_QUALITY" | "COLOR_TONE" | "CANVAS_RATIO" | "TRANSPARENCY" | "OBJECT_EDITING" | "STYLE_EFFECT" | "CAMERA_PHOTO"
  },
  "editAreas": [
    {
      "entity": "KATEGORI_ENTITY",
      "label": "Nama Area",
      "action": "ACTION_CODE",
      "description": "Deskripsi perubahan",
      "shorthand": "/shorthandutama"
    }
  ],
  "lockedAreas": [],
  "primaryShorthands": [
    {
      "code": "/shorthandutama",
      "name": "Nama Shorthand Utama",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi shorthand utama",
      "priority": "WAJIB",
      "reason": "Alasan rekomendasi utama",
      "isPrimary": true,
      "checked": true
    }
  ],
  "relatedShorthands": [
    {
      "code": "/alternatif1",
      "name": "Nama Alternatif",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi alternatif",
      "priority": "DISARANKAN",
      "reason": "Alternatif untuk variasi kebutuhan",
      "isPrimary": false,
      "checked": false
    }
  ],
  "installedShorthands": ["/shorthandutama"],
  "optimalPrompt": "Natural, descriptive, AI-readable ENGLISH prompt optimized for generative image AI (Midjourney/SDXL/DALL-E), preserving all user intent, subjects, and visual attributes, followed by installed shorthands. Example: A young woman with long dark hair walking in a vibrant park during golden hour. /portrait /softlight",
  "visualTransformation": "Deskripsi efek visual yang terjadi pada gambar"
}

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!n.ok){const m=await n.text();throw new Error(`Gemini API error (${n.status}): ${m}`)}const d=(u=(k=(p=(g=(c=(await n.json()).candidates)==null?void 0:c[0])==null?void 0:g.content)==null?void 0:p.parts)==null?void 0:k[0])==null?void 0:u.text;if(!d)throw new Error("Respon Gemini kosong.");return this.extractJson(d)}async analyzeShorthandMetadata({code:a,description:e}){var l,d,c,g,p;const t=ea.getApiKey().trim();if(!t||this.status!==Aa.CONNECTED)return null;const s=`https://generativelanguage.googleapis.com/v1beta/models/${(ea.getModel()||"gemini-2.0-flash").replace(/^models\//,"")}:generateContent?key=${encodeURIComponent(t)}`,n=`Analisis shorthand berikut dan petakan metadata semantiknya:
Kode: "${a}"
Deskripsi: "${e}"

Pilihan Kategori valid: LOCK_PRESERVATION, FACE_IDENTITY, HAIR, HEADWEAR, OUTFIT, BODY_POSE, BACKGROUND, LIGHTING, IMAGE_QUALITY, COLOR_TONE, CANVAS_RATIO, TRANSPARENCY, OBJECT_EDITING, STYLE_EFFECT.

Format JSON yang wajib dikembalikan:
{
  "name": "Nama Shorthand Representatif",
  "category": "KATEGORI_VALID",
  "target": "Target Area spesifik (Wajah/Rambut/Pakaian/Latar/dll)",
  "functionGroup": "Grup fungsi semantik (misal: FACE_PRESERVATION, HAIR_EDIT, BACKGROUND_REMOVAL, dll)",
  "semanticTriggers": ["kata1", "kata2", "kata3"]
}`;try{const u=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:n}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}})});if(!u.ok)return null;const h=(p=(g=(c=(d=(l=(await u.json()).candidates)==null?void 0:l[0])==null?void 0:d.content)==null?void 0:c.parts)==null?void 0:g[0])==null?void 0:p.text;return h?this.extractJson(h):null}catch{return null}}mergeAiWithCatalog(a,e,t){var h,b,f,y,w;const i=this.localEngine.analyze(e,t);let r=[];const s=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const v of a.primaryShorthands){if(!v||!v.code)continue;const T=v.code.startsWith("/")?v.code:`/${v.code}`;if(s.has(T))continue;s.add(T);const R=this.catalog.find(A=>A.code.toLowerCase()===T.toLowerCase());r.push({item:R||null,code:T,name:v.name||(R==null?void 0:R.name)||T,category:v.category||(R==null?void 0:R.category)||"ONLINE_DISCOVERY",target:v.target||(R==null?void 0:R.target)||"Konsep Visual Prompt",description:v.description||(R==null?void 0:R.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:v.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:R?"CORE":"ONLINE",isOnline:!R,equivalentTo:(R==null?void 0:R.equivalentTo)||v.equivalentTo||[],functionGroup:(R==null?void 0:R.functionGroup)||v.functionGroup||v.category||"ONLINE_EXTENSION"})}if(i.primaryShorthands&&i.primaryShorthands.length>0)for(const v of i.primaryShorthands)v.category==="LOCK_PRESERVATION"&&!s.has(v.code)&&(s.add(v.code),r.push({...v,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else i.primaryShorthands&&i.primaryShorthands.length>0&&(r=i.primaryShorthands);let n=[];const l=new Set([...r.map(v=>v.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const v of a.relatedShorthands){if(!v||!v.code)continue;const T=v.code.startsWith("/")?v.code:`/${v.code}`;if(l.has(T))continue;l.add(T);const R=this.catalog.find(A=>A.code.toLowerCase()===T.toLowerCase());n.push({item:R||null,code:T,name:v.name||(R==null?void 0:R.name)||T,category:v.category||(R==null?void 0:R.category)||"ONLINE_DISCOVERY",target:v.target||(R==null?void 0:R.target)||"Variasi Konsep Visual",description:v.description||(R==null?void 0:R.description)||"Alternatif shorthand hasil analisis semantik online.",priority:v.priority||"DISARANKAN",reason:v.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:R?"CORE":"ONLINE",isOnline:!R,equivalentTo:(R==null?void 0:R.equivalentTo)||v.equivalentTo||[],functionGroup:(R==null?void 0:R.functionGroup)||v.functionGroup||v.category||"ONLINE_EXTENSION"})}if(i.relatedShorthands&&i.relatedShorthands.length>0)for(const v of i.relatedShorthands)l.has(v.code)||(l.add(v.code),n.push(v));let d=[];t&&Array.isArray(t)?d=t:r.length>0?d=r.map(v=>v.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?d=a.installedShorthands.map(v=>v.startsWith("/")?v:`/${v}`):i.installedShorthands&&i.installedShorthands.length>0&&(d=i.installedShorthands);const c=i.cleanText||e.trim();let g="",p="";if(a.optimalPrompt&&a.optimalPrompt.trim()){if(g=va(a.optimalPrompt.trim()),p=g.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,"").trim(),d.length>0)for(const v of d)g.includes(v)||(g+=` ${v}`)}else p=va(c),p&&!p.endsWith(".")&&!p.endsWith("!")&&!p.endsWith("?")&&(p+="."),g=d.length>0?`${p} ${d.join(" ")}`.trim():p;const k={primaryAction:(h=a.intent)!=null&&h.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:i.intent.primaryAction,primaryTarget:(b=a.intent)!=null&&b.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:i.intent.primaryTarget,summary:((f=a.intent)==null?void 0:f.summary)||a.summary||i.intent.summary,priority:((y=a.intent)==null?void 0:y.priority)||i.intent.priority,category:(w=a.intent)!=null&&w.category&&a.intent.category!=="GENERAL"?a.intent.category:i.intent.category},u=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:i.editAreas,m=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:i.lockedAreas;return{rawPrompt:e,normalizedPrompt:i.normalizedPrompt,cleanText:c,englishBasePrompt:p,intent:k,editAreas:u,lockedAreas:m,unchangedAreas:i.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:i.conflicts,primaryShorthands:r,relatedShorthands:n,recommendations:[...r,...n],exclusions:i.exclusions,installedShorthands:d,visualTransformation:a.visualTransformation||i.visualTransformation,optimalPrompt:g,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var n,l,d,c,g;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const e=ea.getApiKey()?ea.getApiKey().trim():"",t=ea.getModel()||"gemini-2.0-flash";if(!e)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const i=[t,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((p,k,u)=>p&&u.indexOf(p)===k&&(p==="gemini-3.5-flash-lite"||!p.includes("3.5")&&!p.includes("3.8"))),s={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
Aturan:
1. Rekomendasikan 4 sampai 8 notasi shorthand yang paling relevan dengan kata kunci user.
2. Setiap kode shorthand WAJIB diawali garis miring (misal: /handperfect).
3. Berikan nama yang jelas dan deskripsi fungsi spesifik dalam bahasa Indonesia.
4. Format kembalian HANYA JSON array valid tanpa markdown wrapper:
[
  {
    "code": "/...",
    "name": "...",
    "description": "...",
    "category": "BODY_POSE"
  }
]

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const p of i)try{const k=`https://generativelanguage.googleapis.com/v1beta/models/${p}:generateContent?key=${encodeURIComponent(e)}`,u=await fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!u.ok)continue;const h=(g=(c=(d=(l=(n=(await u.json()).candidates)==null?void 0:n[0])==null?void 0:l.content)==null?void 0:d.parts)==null?void 0:c[0])==null?void 0:g.text;if(!h)continue;let b=[];try{b=this.extractJson(h)}catch{continue}if(!Array.isArray(b))continue;const f=b.filter(y=>y&&y.code&&typeof y.code=="string").map(y=>({code:y.code.startsWith("/")?y.code:`/${y.code}`,name:y.name||y.code,description:y.description||"Instruksi visual shorthand online",category:y.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:f,onlineAvailable:!0,message:f.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(k){console.warn(`Pencarian online dengan model ${p} gagal:`,k);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var p,k,u,m,h,b;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const t=ea.getApiKey()?ea.getApiKey().trim():"",i=ea.getModel()||"gemini-2.0-flash";if(!t)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const r=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],s=[i,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((f,y,w)=>f&&w.indexOf(f)===y&&(f==="gemini-3.5-flash-lite"||!f.includes("3.5")&&!f.includes("3.8"))),n=`Anda adalah Prompt Shorthand Analyzer V3.3.5 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
Tugas Anda: Memperkaya Prompt Optimal pengguna dengan detail visual berkualitas tinggi tanpa mengubah makna atau maksud utamanya.

PRINSIP UTAMA: "ENRICH, NOT REPLACE" (Prompt Optimal asli adalah SOURCE OF TRUTH).

ATURAN WAJIB & BATASAN KETAT:
1. JANGAN PERNAH mengubah subjek utama, objek utama, aktivitas, konteks, maksud/intent, maupun konsep adegan.
2. JANGAN PERNAH menghapus informasi penting dari Prompt Optimal asli.
3. JANGAN PERNAH menghapus atau mengubah shorthand visual (kata atau kode berawalan '/'). Seluruh shorthand yang ada pada prompt asli WAJIB dipertahankan dan diletakkan di akhir prompt.
4. JANGAN mengubah instruksi identitas, lock, pose, outfit, background, atau constraint penting lainnya.
5. ANDA DIIZINKAN DAN DIANJURKAN MEMPERBAIKI:
   - Kejelasan deskripsi visual dan materialitas objek.
   - Komposisi gambar (framing, focal length, angle kamera jika relevan).
   - Pencahayaan alami atau sinematik (soft illumination, ambient rim light, directional shadow).
   - Atmosfer, kedalaman ruang (depth of field), dan tekstur realistis.
   - Urutan instruksi deskriptif agar optimal dipahami model generasi gambar AI.
6. JANGAN menambahkan detail sembarangan atau fantasi berlebihan hanya agar prompt menjadi panjang.
7. JANGAN mengubah prompt menjadi konsep baru.
8. BAHASA OUTPUT WAJIB BAHASA INGGRIS: Seluruh prompt yang diperkaya wajib ditulis dalam Bahasa Inggris yang natural, deskriptif, dan optimal untuk AI image generator, dengan seluruh shorthand asli dipertahankan di akhir.

Format respons HANYA berupa JSON valid:
{
  "enrichedPrompt": "teks prompt lengkap yang telah diperkaya dalam Bahasa Inggris beserta seluruh shorthand asli di akhir"
}`,l=((p=e==null?void 0:e.intent)==null?void 0:p.summary)||"",d=`Prompt Optimal Asli:
"${a.trim()}"
${l?`Konteks/Maksud Analisis:
"${l}"
`:""}Shorthand Terpasang Wajib Dipertahankan: ${r.length>0?r.join(" "):"(tidak ada)"}`,c={contents:[{role:"user",parts:[{text:`${n}

${d}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let g=null;for(const f of s)try{const y=`https://generativelanguage.googleapis.com/v1beta/models/${f}:generateContent?key=${encodeURIComponent(t)}`,w=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!w.ok){const S=await w.text();throw new Error(`HTTP ${w.status}: ${S}`)}const T=(b=(h=(m=(u=(k=(await w.json()).candidates)==null?void 0:k[0])==null?void 0:u.content)==null?void 0:m.parts)==null?void 0:h[0])==null?void 0:b.text;if(!T)throw new Error("Respon Gemini kosong.");const R=this.extractJson(T);let A=R.enrichedPrompt||R.prompt||(typeof R=="string"?R:"");if(!A||typeof A!="string"||!A.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");A=va(A.trim());for(const S of r)A.includes(S)||(A+=` ${S}`);return{success:!0,enrichedPrompt:A,modelUsed:f}}catch(y){g=y,console.warn(`Enrich prompt dengan model ${f} gagal:`,y.message);continue}throw g||new Error("Gagal memperkaya prompt dengan Gemini.")}async enrichTwoWorldsPrompt({optimalPrompt:a,generatedPrompt:e="",twoWorldsConfig:t=null,analysisResult:i=null}){var u,m,h,b,f;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal 2 Dunia kosong.");const r=ea.getApiKey()?ea.getApiKey().trim():"",s=ea.getModel()||"gemini-2.0-flash";if(!r){const y=Fe({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:t,analysisResult:i});return{success:!0,enrichedPrompt:y.enrichedPrompt,conflictsResolved:y.conflictsResolved,modelUsed:"HEURISTIC_RESOLVER"}}const n=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],l=[s,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((y,w,v)=>y&&v.indexOf(y)===w&&(y==="gemini-3.5-flash-lite"||!y.includes("3.5")&&!y.includes("3.8"))),d=_t(),c=Dt({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:t}),g={contents:[{role:"user",parts:[{text:`${d}

${c}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let p=null;for(const y of l)try{const w=`https://generativelanguage.googleapis.com/v1beta/models/${y}:generateContent?key=${encodeURIComponent(r)}`,v=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!v.ok){const E=await v.text();throw new Error(`HTTP ${v.status}: ${E}`)}const R=(f=(b=(h=(m=(u=(await v.json()).candidates)==null?void 0:u[0])==null?void 0:m.content)==null?void 0:h.parts)==null?void 0:b[0])==null?void 0:f.text;if(!R)throw new Error("Respon Gemini kosong.");const A=this.extractJson(R);let S=A.enrichedPrompt||A.prompt||(typeof A=="string"?A:"");if(!S||typeof S!="string"||!S.trim())throw new Error("Hasil pengayaan AI 2 Dunia kosong atau tidak valid.");return S=Bt({enrichedPrompt:S,optimalPrompt:a,twoWorldsConfig:t,originalShorthands:n}),{success:!0,enrichedPrompt:S,conflictsResolved:A.conflictsResolved||[],modelUsed:y}}catch(w){p=w,console.warn(`Enrich 2 Dunia dengan model ${y} gagal:`,w.message);continue}console.warn("Fallback ke Heuristic Conflict Resolver untuk 2 Dunia:",p==null?void 0:p.message);const k=Fe({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:t,analysisResult:i});return{success:!0,enrichedPrompt:k.enrichedPrompt,conflictsResolved:k.conflictsResolved,modelUsed:"HEURISTIC_FALLBACK"}}detectImageAspect(a=null,e=null){if(a!=null&&a.width&&(a!=null&&a.height)){const i=a.width/a.height;if(i>1.6)return{ar:"16:9",orientation:"landscape-wide"};if(i>1.25)return{ar:"4:3",orientation:"landscape"};if(i>.9&&i<1.1)return{ar:"1:1",orientation:"square"};if(i<.65)return{ar:"9:16",orientation:"portrait-tall"};if(i<.85)return{ar:"3:4",orientation:"portrait"}}if(e&&typeof e=="string")try{const i=e.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"");if(typeof atob=="function"){const r=atob(i.substring(0,4e3));if(r.charCodeAt(0)===137&&r.charCodeAt(1)===80&&r.charCodeAt(2)===78&&r.charCodeAt(3)===71){const s=r.charCodeAt(16)<<24|r.charCodeAt(17)<<16|r.charCodeAt(18)<<8|r.charCodeAt(19),n=r.charCodeAt(20)<<24|r.charCodeAt(21)<<16|r.charCodeAt(22)<<8|r.charCodeAt(23);if(s>0&&n>0){const l=s/n;return l>1.6?{ar:"16:9",orientation:"landscape-wide"}:l>1.2?{ar:"4:3",orientation:"landscape"}:l>.9&&l<1.1?{ar:"1:1",orientation:"square"}:l<.65?{ar:"9:16",orientation:"portrait-tall"}:{ar:"3:4",orientation:"portrait"}}}}}catch{}const t=((a==null?void 0:a.name)||"").toLowerCase();return t.includes("portrait")||t.includes("vertical")||t.includes("story")||t.includes("reel")?{ar:"9:16",orientation:"portrait-tall"}:t.includes("square")||t.includes("feed")||t.includes("profile")||t.includes("1x1")?{ar:"1:1",orientation:"square"}:{ar:"16:9",orientation:"landscape-wide"}}assembleStructuredImagePrompt(a){if(!a)return"";const e=(a.mainDescription||a.generatedPrompt||"").trim()||"Fotografi autentik dengan pencahayaan alami dan detail realistis.",t=e.startsWith("/imagine prompt:")?e:`/imagine prompt: ${e}`;let i=(a.visualDetails||"").trim();if(!i){const r=[];(a.subject||a.subjectDescription)&&r.push((a.subject||a.subjectDescription).trim()),(a.pose||a.poseExpression&&a.poseExpression!=="-")&&r.push((a.pose||a.poseExpression).trim()),a.identityPreservation&&a.identityPreservation!=="-"&&r.push(a.identityPreservation.trim()),(a.outfit||a.outfitMaterial&&a.outfitMaterial!=="-")&&r.push((a.outfit||a.outfitMaterial).trim()),(a.environment||a.environmentBackground&&a.environmentBackground!=="-")&&r.push((a.environment||a.environmentBackground).trim()),(a.composition||a.compositionPerspective&&a.compositionPerspective!=="-")&&r.push((a.composition||a.compositionPerspective).trim()),(a.lighting||a.lightingColor&&a.lightingColor!=="-")&&r.push((a.lighting||a.lightingColor).trim()),a.cameraLensDof&&a.cameraLensDof!=="-"&&r.push(a.cameraLensDof.trim()),(a.style||a.photoStyleRealism&&a.photoStyleRealism!=="-")&&r.push((a.style||a.photoStyleRealism).trim()),i=r.join(`

`)}return i?`${t}

${i}`:t}assembleOptimalImagePrompt(a,e=[],t=null){const i=((a==null?void 0:a.mainDescription)||(a==null?void 0:a.generatedPrompt)||"").trim()||"Authentic photography with natural lighting and realistic details.",r=va(i),s=r.startsWith("/imagine prompt:")?r:`/imagine prompt: ${r}`;let n=((a==null?void 0:a.visualDetails)||"").trim();if(!n){const m=[];(a!=null&&a.subject||a!=null&&a.subjectDescription)&&m.push((a.subject||a.subjectDescription).trim()),(a!=null&&a.pose||a!=null&&a.poseExpression&&a.poseExpression!=="-")&&m.push((a.pose||a.poseExpression).trim()),a!=null&&a.identityPreservation&&a.identityPreservation!=="-"&&m.push(a.identityPreservation.trim()),(a!=null&&a.outfit||a!=null&&a.outfitMaterial&&a.outfitMaterial!=="-")&&m.push((a.outfit||a.outfitMaterial).trim()),(a!=null&&a.environment||a!=null&&a.environmentBackground&&a.environmentBackground!=="-")&&m.push((a.environment||a.environmentBackground).trim()),(a!=null&&a.composition||a!=null&&a.compositionPerspective&&a.compositionPerspective!=="-")&&m.push((a.composition||a.compositionPerspective).trim()),(a!=null&&a.lighting||a!=null&&a.lightingColor&&a.lightingColor!=="-")&&m.push((a.lighting||a.lightingColor).trim()),a!=null&&a.cameraLensDof&&a.cameraLensDof!=="-"&&m.push(a.cameraLensDof.trim()),(a!=null&&a.style||a!=null&&a.photoStyleRealism&&a.photoStyleRealism!=="-")&&m.push((a.style||a.photoStyleRealism).trim()),n=m.join(`

`)}const l=[s];if(n&&l.push(va(n)),t){const m=Nt(t,a);m&&l.push(m)}const d=(a==null?void 0:a.aspectRatio)||"16:9";let g=(e||[]).map(m=>m.startsWith("/")?m:`/${m}`).join(" ");g?g+=` --ar ${d} --style raw --v 6.1`:g=`--ar ${d} --style raw --v 6.1`,l.push(g);let p=((a==null?void 0:a.negativePrompt)||(a==null?void 0:a.contextualNegativePrompt)||"").trim();const k=!!(a!=null&&a.photoStyleRealism&&/3d|render|octane|chibi|doll|figurine|toy/i.test(a.photoStyleRealism)||a!=null&&a.subjectDescription&&/3d|chibi|doll|figurine|toy/i.test(a.subjectDescription)||a!=null&&a.mainDescription&&/3d|chibi|doll|figurine|toy/i.test(a.mainDescription));p||(p=k?"real human photo, photographic grain, wrinkled skin, bad 3d render, distorted limbs, extra fingers, blurry, watermark, text":"cartoon, 3d render, illustration, deformed, blurry, watermark, text");let u=va(p.replace(/^--no\s+/i,"").trim());return k&&(u=u.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/illustration,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),u.includes("real human photo")||(u=`real human photo, photographic grain, ${u}`.replace(/^,\s*/,""))),l.push(`--no ${u}`),l.join(`

`)}matchImageShorthands(a,e=null){const t=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+((e==null?void 0:e.subject)||"")+" "+((e==null?void 0:e.subjectDescription)||"")+" "+((e==null?void 0:e.outfit)||"")+" "+((e==null?void 0:e.outfitMaterial)||"")+" "+((e==null?void 0:e.pose)||"")+" "+((e==null?void 0:e.poseExpression)||"")+" "+((e==null?void 0:e.environment)||"")+" "+((e==null?void 0:e.environmentBackground)||"")+" "+((e==null?void 0:e.composition)||"")+" "+((e==null?void 0:e.compositionPerspective)||"")+" "+((e==null?void 0:e.lighting)||"")+" "+((e==null?void 0:e.lightingColor)||"")+" "+((e==null?void 0:e.cameraLensDof)||"")+" "+((e==null?void 0:e.style)||"")+" "+((e==null?void 0:e.photoStyleRealism)||"")+" "+(Array.isArray(e==null?void 0:e.suggestedShorthands)?e.suggestedShorthands.join(" "):"")+" "+(Array.isArray(e==null?void 0:e.optimizationNeeds)?e.optimizationNeeds.join(" "):"")).toLowerCase(),i=[];if(Array.isArray(e==null?void 0:e.suggestedShorthands))for(const n of e.suggestedShorthands){const l=(n||"").trim();if(!l)continue;const d=l.startsWith("/")?l.toLowerCase():`/${l.toLowerCase()}`,c=this.catalog.find(g=>g.code.toLowerCase()===d);c&&i.push({code:c.code,name:c.name,category:c.category,functionGroup:c.functionGroup||`GROUP_${c.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:c.description,priority:"WAJIB",isPrimary:!0,checked:!0,reason:"Teridentifikasi langsung oleh Vision AI dari karakteristik gambar aktual",source:"IMAGE_VISION_AI"})}for(const n of this.catalog){const l=(n.negativeTriggers||[]).map(p=>p.toLowerCase());if(l.length>0&&l.some(p=>t.includes(p)))continue;const d=(n.semanticTriggers||[]).map(p=>p.toLowerCase());let c=!1,g="";t.includes(n.code.toLowerCase())?(c=!0,g=`Terdeteksi dari direktif visual: ${n.code}`):d.some(p=>t.includes(p))?(c=!0,g=`Teridentifikasi dari atribut visual gambar (${n.name})`):Array.isArray(e==null?void 0:e.optimizationNeeds)&&e.optimizationNeeds.some(p=>n.code.toLowerCase().includes(p.toLowerCase())||(n.name||"").toLowerCase().includes(p.toLowerCase())||d.some(k=>p.toLowerCase().includes(k)))&&(c=!0,g=`Direkomendasikan untuk optimasi visual gambar (${n.name})`),c&&i.push({code:n.code,name:n.name,category:n.category,functionGroup:n.functionGroup||`GROUP_${n.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:n.description,priority:n.priority||"WAJIB",isPrimary:!0,checked:!0,reason:g||n.whenToUse||"Sesuai dengan karakter visual gambar",source:"IMAGE_ANALYSIS"})}const r=new Set,s=[];for(const n of i)r.has(n.functionGroup)||(r.add(n.functionGroup),s.push(n));return s}getStandard13VisualBreakdown(a){const e=(a==null?void 0:a.aspectRatio)||"16:9",t=e==="9:16"||e==="3:4";return{Subject:((a==null?void 0:a.subject)||(a==null?void 0:a.subjectDescription)||(a==null?void 0:a.mainDescription)||"Subjek visual utama teridentifikasi").trim(),Pose:((a==null?void 0:a.pose)||(a==null?void 0:a.poseExpression)||"Postur alami terpusat").trim(),Framing:((a==null?void 0:a.framing)||(t?"Vertical portrait framing":"Eye-level balanced framing")).trim(),"Camera / Angle":((a==null?void 0:a.cameraAngle)||(a==null?void 0:a.camera)||(a==null?void 0:a.cameraLensDof)||"Eye-level angle, 50mm prime f/2.8").trim(),Lighting:((a==null?void 0:a.lighting)||(a==null?void 0:a.lightingColor)||"Pencahayaan terukur dengan gradasi bayangan natural").trim(),Environment:((a==null?void 0:a.environment)||(a==null?void 0:a.environmentBackground)||"Setting lingkungan terkoordinasi secara alami").trim(),Background:((a==null?void 0:a.background)||(a==null?void 0:a.environmentBackground)||"Latar belakang dengan separasi kedalaman terukur").trim(),Outfit:((a==null?void 0:a.outfit)||(a==null?void 0:a.outfitMaterial)||"Pakaian rapi dengan tekstur bahan autentik").trim(),Expression:((a==null?void 0:a.expression)||"Ekspresi wajar, fokus tenang, dan proporsi alami").trim(),Composition:((a==null?void 0:a.composition)||(a==null?void 0:a.compositionPerspective)||"Komposisi terpusat seimbang rule-of-thirds").trim(),Style:((a==null?void 0:a.style)||(a==null?void 0:a.photoStyleRealism)||"Fotografi realistis autentik").trim(),"Color / Tone":((a==null?void 0:a.colorTone)||"Palet warna alami dengan kontras seimbang").trim(),"Aspect Ratio":e}}analyzeImageShorthandsBlueprint(a,e){const t=new Set,i=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+Object.values(e||{}).filter(h=>typeof h=="string").join(" ")).toLowerCase(),r=new Map;Array.isArray(e==null?void 0:e.suggestedShorthands)&&e.suggestedShorthands.forEach(h=>{const b=(h||"").trim().toLowerCase(),f=b.startsWith("/")?b:`/${b}`;r.set(f,100)});for(const h of this.catalog){const b=h.code.toLowerCase();let f=r.get(b)||0;i.includes(b)&&(f+=35);const y=(h.semanticTriggers||[]).map(v=>v.toLowerCase());for(const v of y)v&&i.includes(v)&&(f+=20);if(Array.isArray(e==null?void 0:e.optimizationNeeds))for(const v of e.optimizationNeeds){const T=(v||"").toLowerCase();T&&(y.some(R=>T.includes(R))||(h.name||"").toLowerCase().includes(T))&&(f+=25)}(h.negativeTriggers||[]).map(v=>v.toLowerCase()).some(v=>v&&i.includes(v))&&(f=-100),f>0&&r.set(b,f)}const s=[];for(const h of this.catalog){const b=r.get(h.code.toLowerCase())||0;b>0&&s.push({item:h,score:b})}s.sort((h,b)=>b.score-h.score);const n=[],l=new Set;for(const{item:h}of s){const b=h.code.toLowerCase(),f=h.functionGroup||h.category;if(!l.has(f)&&!t.has(b)&&(l.add(f),t.add(b),n.push({code:h.code,name:h.name,category:h.category,functionGroup:f,description:h.description,target:h.target||"Visual Utama",priority:"WAJIB",isPrimary:!0,checked:!0,active:!0,reason:`Mewakili fungsi visual inti (${h.name}) dari analisis gambar aktual`,source:(r.get(b)||0)>=100?"VISION_AI":"IMAGE_ANALYSIS",equivalentTo:h.equivalentTo||[]}),n.length>=8))break}const d=[],c=new Set;for(const{item:h}of s){const b=h.code.toLowerCase(),f=h.functionGroup||h.category;if(!l.has(f)&&!c.has(f)&&!t.has(b)&&(c.add(f),t.add(b),d.push({code:h.code,name:h.name,category:h.category,functionGroup:f,description:h.description,target:h.target||"Visual Pendukung",priority:"OPSIONAL",isPrimary:!1,checked:!1,active:!1,relationship:"COMPLEMENTARY",reason:`Melengkapi fungsi visual pada domain ${h.category} (${h.name})`,source:"IMAGE_ANALYSIS",equivalentTo:h.equivalentTo||[]}),d.length>=8))break}const g=[],p=new Set([...n.map(h=>h.category),...d.map(h=>h.category)]),k=new Set([...l,...c]);for(const{item:h}of s){const b=h.code.toLowerCase(),f=h.functionGroup||h.category;if(!t.has(b)&&(k.has(f)||p.has(h.category))&&(t.add(b),g.push({code:h.code,name:h.name,category:h.category,functionGroup:f,description:h.description,target:h.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif sinonim untuk fungsi ${f} (${h.name})`,source:"IMAGE_ANALYSIS",equivalentTo:h.equivalentTo||[]}),g.length>=8))break}if(g.length<5)for(const h of this.catalog){const b=h.code.toLowerCase(),f=h.functionGroup||h.category;if(!t.has(b)&&(p.has(h.category)||k.has(f))){if((h.negativeTriggers||[]).map(w=>w.toLowerCase()).some(w=>w&&i.includes(w)))continue;if(t.add(b),g.push({code:h.code,name:h.name,category:h.category,functionGroup:f,description:h.description,target:h.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif variasi gaya dalam domain ${h.category}`,source:"CATALOG_ALTERNATIVE",equivalentTo:h.equivalentTo||[]}),g.length>=8)break}}const u=[],m=[];for(const h of this.catalog){const b=h.code.toLowerCase();if(t.has(b))continue;const y=(h.negativeTriggers||[]).map(v=>v.toLowerCase()).some(v=>v&&i.includes(v)),w=!p.has(h.category);if((y||w)&&(t.add(b),m.push({code:h.code,target:h.target||h.name,reason:y?`Bertentangan dengan kondisi visual gambar aktual (${h.name})`:`Tidak relevan dengan subjek atau medium gambar (${h.category})`}),m.length>=10))break}return{primaryShorthands:n,relatedShorthands:d,similarShorthands:g,conflicts:u,exclusions:m}}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:t="image/jpeg",referencePrompt:i="",preferredLang:r="id",visualTelemetry:s=null,targetAspectRatio:n="auto",isTwoWorlds:l=!1,twoWorldsConfig:d=null}){const c=ea.getApiKey().trim(),g=ea.getModel()||"gemini-2.0-flash";let p=null,k="LOCAL_ENGINE",u=!1,m="";if(c&&e)try{const I=await this.executeMultimodalImageAnalysis(e,t,i,c,g,r,n,l);I&&(I.mainDescription||I.subjectDescription)&&(p=I,k="GEMINI_AI",u=!0,this.status=Aa.CONNECTED,this.lastError=null,m=`🌐 Analisa Gambar AI AKTIF (${ea.getModel()||g}) — Vision analysis mendalam dari gambar aktual.`)}catch(I){console.warn("Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:",I),this.lastError=I.message}p||(p=this.generateDynamicImageAnalysis(a,e,i,r,s,n),k=c?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",u=!!c,m=u?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung)."),n&&n!=="auto"&&n!=="Otomatis"&&(p.aspectRatio=n);const h=this.assembleStructuredImagePrompt(p),b=this.getStandard13VisualBreakdown(p);p.aspectRatio&&(b["Aspect Ratio"]=p.aspectRatio);const{primaryShorthands:f,relatedShorthands:y,similarShorthands:w,conflicts:v,exclusions:T}=this.analyzeImageShorthandsBlueprint(h,p),R=f.map(I=>I.code);let A=null,S=d?{...d}:null;l&&(A=st(p,a,s,d),p.smartDetection=A,S&&A&&((!S.gender||S.gender.startsWith("Auto"))&&(S.gender=A.gender),(!S.age||S.age.startsWith("Auto"))&&(S.age=A.age),(!S.ethnicity||S.ethnicity.startsWith("Auto"))&&(S.ethnicity=A.ethnicity),(!S.subjectStyle||S.subjectStyle.startsWith("Auto"))&&(S.subjectStyle=A.subjectStyle),(!S.environmentStyle||S.environmentStyle.startsWith("Auto"))&&(S.environmentStyle=A.environmentStyle)));const E=this.assembleOptimalImagePrompt(p,R,l?S||d:null),O={primaryAction:l?"REPRESENTASI_2_DUNIA":"REPRESENTASI_VISUAL",primaryTarget:l?"Karakteristik Visual & Dualitas Gambar Sumber":"Karakteristik Visual Gambar Aktual",summary:l?`Gambar ini merepresentasikan konsep 2 Dunia berbasis ${p.subjectDescription||p.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt representasi dualitas / dua dunia yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`:`Gambar ini merepresentasikan ${p.subjectDescription||p.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`,priority:"HIGH",category:l?"TWO_WORLDS":"IMAGE_TO_PROMPT"},N=[{entity:"STRUKTUR_PROMPT",label:"Penyesuaian Struktur Prompt",description:"Menyusun urutan deskripsi sistematis: subjek utama → atribut pose & busana → pencahayaan & suasana → framing kamera."},{entity:"PENJELASAN_KATA",label:"Penyederhanaan & Presisi Frasa",description:"Mengonversi elemen visual menjadi deskripsi spesifik dan bahasa alami yang langsung dipahami oleh engine generatif AI."},{entity:"PENEKANAN_VISUAL",label:"Penekanan Elemen Visual Kunci",description:"Mempertegas karakteristik pencahayaan, tekstur material, dan proporsi nyata dari gambar sumber."},{entity:"PENGUATAN_DETAIL",label:"Penguatan Detail Mikro",description:"Menambahkan detail resolusi tinggi, kedalaman ruang (DoF), dan mikrokontras natural untuk menghindari artefak."},{entity:"PARAMETER_TEKNIS",label:"Integrasi Parameter AI Generatif",description:`Menambahkan parameter teknis standar (--ar ${p.aspectRatio||"16:9"} --style raw --v 6.1) dan direktif negative prompt (--no) untuk stabilitas hasil visual.`}],_=[{entity:"SUBJEK_UTAMA",label:"Subjek Utama & Identitas Visual",description:p.subjectDescription||p.subject||p.mainDescription},{entity:"POSE_EKSPRESI",label:"Pose & Ekspresi",description:p.poseExpression||p.pose||"Postur alami dan ekspresi wajah subjek asli"},{entity:"PAKAIAN_BUSANA",label:"Pakaian & Aksesoris",description:p.outfitMaterial||p.outfit||"Gaya pakaian dan tekstur material busana"},{entity:"FRAMING_KAMERA",label:"Framing & Angle Kamera",description:p.cameraLensDof||p.camera||"Sudut pandang lensa kamera dan rasio framing"},{entity:"BACKGROUND_ENV",label:"Background & Environment",description:p.environmentBackground||p.environment||"Setting lokasi dan latar belakang asli"},{entity:"KOMPOSISI",label:"Komposisi Visual",description:p.compositionPerspective||p.composition||"Pusat perhatian visual dan keseimbangan bidang"},{entity:"PENCAHAYAAN",label:"Pencahayaan & Suasana",description:p.lightingColor||p.lighting||"Arah pencahayaan, kontras shadow-highlight, dan tone ambient"}],L={from:`Kondisi visual aktual dari file gambar sumber: ${p.mainDescription||"Subjek dan komposisi visual nyata"}`,to:`Spesifikasi prompt AI optimal terstruktur lengkap dengan shorthand terpasang (${R.join(" ")}), parameter teknis (--ar ${p.aspectRatio||"16:9"} --style raw --v 6.1), dan negative prompt.`,summary:"💡 Translasi analitis representasi visual: Gambar sumber dianalisis secara objektif menjadi spesifikasi prompt AI generatif tanpa melakukan editing atau perombakan gambar asli."};return{mode:l?"TWO_WORLDS":"IMAGE_TO_PROMPT",source:k,isOnlineActive:u,engineNotice:m,generatedPrompt:h,optimalPrompt:E,cleanText:h,visionData:p,visualBreakdown:b,primaryShorthands:f,relatedShorthands:y,similarShorthands:w,recommendations:[...f,...y,...w],installedShorthands:R,conflicts:v,exclusions:T,editAreas:N,lockedAreas:_,unchangedAreas:_.map(I=>I.description),visualTransformation:L,intent:O,referencePrompt:i||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:t,aspectRatio:p.aspectRatio||"16:9"},twoWorldsSmartDetection:l?A:null,timestamp:new Date().toISOString()}}async executeMultimodalImageAnalysis(a,e,t,i,r,s="id",n="auto",l=!1){var f,y,w,v;const c=[(r||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((T,R,A)=>T&&A.indexOf(T)===R&&!T.includes("1.5-pro")&&!T.includes("2.5-pro")&&(T==="gemini-3.5-flash-lite"||!T.includes("3.5")&&!T.includes("3.8")));c.length===0&&c.push("gemini-2.0-flash","gemini-1.5-flash");const g=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!g||g.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let p=(e||"image/jpeg").toLowerCase().trim();p.includes("png")?p="image/png":p.includes("webp")?p="image/webp":p.includes("heic")?p="image/heic":p.includes("heif")?p="image/heif":p="image/jpeg";const u=`Anda adalah Ahli Analisis Gambar Vision AI & Prompt Engineering Profesional.
Tugas Anda: Menganalisis gambar yang diunggah secara objektif, mendalam, dan akurat sebagai SATU-SATUNYA SOURCE OF TRUTH.

ATURAN MUTLAK:
1. JANGAN PERNAH menggunakan template statis, data default, atau asumsi fiktif.
2. Analisis APA YANG BENAR-BENAR TERLIHAT pada gambar:
   - Subjek utama (siapa/apa: pria/wanita/anak/karakter 3D animasi/chibi doll figurine/hewan/objek; busana/hoodie/pakaian, warna nyata yang terlihat, tekstur, material).
   - Pose tubuh, posisi, gestur, arah pandangan, ekspresi wajah.
   - Komposisi, framing, sudut kamera (eye-level, low angle, closeup, medium shot, wide shot, dll.).
   - Pencahayaan (studio softbox, daylight alami, directional, ambient, highlight, shadow).
   - Lingkungan & latar belakang (studio foto, kantor, indoor, alam outdoor, warna background).
   - Palet warna, white balance, saturasi, tone.
    - Gaya fotografi atau gaya visual asli (realistis, karakter 3D animasi, chibi figurine, digital render).${l?`
4. KHUSUS MODE 2 DUNIA (SMART DETECTION OTOMATIS):
Sertakan juga objek "smartDetection" di root JSON respons dengan nilai spesifik hasil deteksi gambar aktual:
"smartDetection": {
  "gender": "Laki-Laki" | "Perempuan",
  "age": "Perkiraan usia spesifik (contoh: 25 tahun)",
  "ethnicity": "Asia" | "Asia Tenggara" | "Asia Timur" | "Asia Selatan" | "Eropa" | "Timur Tengah" | "Afrika" | "Amerika Latin",
  "subjectStyle": "Nama spesifik style subjek (contoh: LEGO Style, 3D Cartoon Style, Anime Style, Realistic Human Style, Claymation Style, Stylized 3D Character, dll.)",
  "environmentStyle": "Nama spesifik style environment (contoh: Candy World 3D Style, Fantasy Environment, Dreamy Pastel 3D, Realistic Environment, Natural Lighting, dll.)"
}`:""}

3. ATURAN BAHASA MUTLAK (GLOBAL PROMPT OPTIMAL):
Seluruh atribut visual yang menjadi bagian dari prompt (mainDescription, visualDetails, subject, pose, outfit, environment, lighting, composition, cameraAngle, style, colorTone, negativePrompt) WAJIB ditulis dalam BAHASA INGGRIS yang natural, deskriptif, spesifik, dan siap digunakan untuk AI image generator (Midjourney/SDXL/DALL-E).

Kembalikan respons HANYA dalam format JSON valid dengan 13 atribut visual lengkap:
{
  "mainDescription": "Descriptive main image prompt in natural AI-readable English...",
  "visualDetails": "Comprehensive visual details in English covering subject, attire, pose, expression, composition, lighting, background, and photographic character...",
  "subject": "Subject description in English...",
  "pose": "Subject pose in English...",
  "framing": "Framing shot in English (e.g., medium shot, closeup, wide)...",
  "cameraAngle": "Camera angle and lens in English (e.g., eye-level angle, 50mm lens)...",
  "lighting": "Lighting characteristics in English...",
  "environment": "Surrounding environment in English...",
  "background": "Background setting in English...",
  "outfit": "Attire and clothing details in English...",
  "expression": "Facial expression in English...",
  "composition": "Visual composition in English...",
  "style": "Photographic or visual style in English...",
  "colorTone": "Dominant color palette and tone in English...",
  "aspectRatio": "16:9",
  "suggestedShorthands": ["/portrait", "/studio", "/suit", "/eyelevel", "/softlight", "/realistic", "/rawphoto"],
  "negativePrompt": "Relevant negative prompt in English (e.g., deformed, bad anatomy, blurry, watermark)"
}`,m=t&&t.trim()?`Analisis gambar ini dengan panduan pengguna: "${t.trim()}". Pastikan seluruh output prompt dalam Bahasa Inggris natural.`:"Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata dalam Bahasa Inggris natural untuk AI image generator.";let h=null;const b=[];for(const T of c){const R=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(i)}`,A=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const S of A)try{const E={contents:[{role:"user",parts:[{text:`${u}

Instruksi: ${m}`},{inlineData:{mimeType:p,data:g}}]}],generationConfig:S},O=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});if(!O.ok){const x=await O.text();if(O.status===400&&S.responseMimeType)continue;throw new Error(`HTTP ${O.status}: ${x}`)}const _=((w=(y=(f=(await O.json()).candidates)==null?void 0:f[0])==null?void 0:y.content)==null?void 0:w.parts)||[];let L="";for(const x of _)x.text&&!x.thought&&(L+=x.text);if(!L&&((v=_[0])!=null&&v.text)&&(L=_[0].text),!L)throw new Error("Respon Gemini kosong.");let I=null;try{I=this.extractJson(L)}catch{I={mainDescription:L.replace(/```[a-z]*\n?/gi,"").trim(),visualDetails:""}}if(I&&typeof I=="object"){const x=I.mainDescription||I.prompt||I.generatedPrompt||I.description||I.summary||I.subjectDescription||I.subject||I.visualDetails||I.details||I.analysis;if(x)return I.mainDescription||(I.mainDescription=String(x).trim()),I.mainDescription=va(I.mainDescription),I.visualDetails&&(I.visualDetails=va(I.visualDetails)),n&&n!=="auto"&&n!=="Otomatis"&&(I.aspectRatio=n),this.lastSuccessfulModel=T,T!==r&&ea.setModel(T),I}}catch(E){h=E,b.push(`${T}: ${E.message}`),console.warn(`Model ${T} multimodal gagal:`,E.message);break}}throw h||new Error(`Gagal menganalisis gambar dengan Gemini API (${b.join(" | ")}).`)}generateDynamicImageAnalysis(a,e,t="",i="en",r=null,s="auto"){const n=r||(a==null?void 0:a.visualTelemetry)||Pe(null,{filename:a==null?void 0:a.name,width:a==null?void 0:a.width,height:a==null?void 0:a.height,targetAspectRatio:s});return Ot(n,{preferredLang:"en",referencePrompt:t,filename:a==null?void 0:a.name,targetAspectRatio:s})}async executeMultimodalBackgroundImageAnalysis(a,e,t,i,r,s="id",n="auto"){var h,b,f;const d=[(r||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((y,w,v)=>y&&v.indexOf(y)===w&&!y.includes("1.5-pro")&&!y.includes("2.5-pro")&&(y==="gemini-3.5-flash-lite"||!y.includes("3.5")&&!y.includes("3.8")));d.length===0&&d.push("gemini-2.0-flash","gemini-1.5-flash");const c=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!c||c.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let g=(e||"image/jpeg").toLowerCase().trim();g.includes("png")?g="image/png":g.includes("webp")?g="image/webp":g.includes("heic")?g="image/heic":g.includes("heif")?g="image/heif":g="image/jpeg";const p=Wt(),k=t&&t.trim()?`Analisis latar belakang foto ini dengan fokus utama pada dekorasi, ruang, arsitektur, dan hubungan spasial penempatan subjek: "${t.trim()}". Pisahkan jelas antara Background Profile dan Subject–Background Placement Profile.`:"Analisis latar belakang foto ini secara mendalam (ruang, arsitektur, dekorasi, properti, material, pencahayaan) serta rekam profil spasial penempatan subjek terhadap latar sebagai acuan.";let u=null;const m=[];for(const y of d){const w=`https://generativelanguage.googleapis.com/v1beta/models/${y}:generateContent?key=${encodeURIComponent(i)}`,v=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const T of v)try{const R={contents:[{role:"user",parts:[{text:`${p}

Instruksi: ${k}`},{inlineData:{mimeType:g,data:c}}]}],generationConfig:T},A=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});if(!A.ok){const _=await A.text();if(A.status===400&&T.responseMimeType)continue;throw new Error(`HTTP ${A.status}: ${_}`)}const E=((f=(b=(h=(await A.json()).candidates)==null?void 0:h[0])==null?void 0:b.content)==null?void 0:f.parts)||[];let O="";for(const _ of E)_.text&&!_.thought&&(O+=_.text);if(!O)throw new Error("Respon teks multimodal latar belakang kosong.");const N=this.extractJson(O);if(N&&(N.backgroundProfile||N.spaceAndComposition||N.placementProfile))return this.status=Aa.CONNECTED,this.lastError=null,this.lastSuccessfulModel=y,y!==r&&ea.setModel(y),N}catch(R){u=R,m.push(`${y}: ${R.message}`),console.warn(`Model ${y} multimodal background gagal:`,R.message);break}}throw u||new Error(`Gagal menganalisis latar belakang dengan Gemini API (${m.join(" | ")}).`)}async analyzeBackground({imageFile:a=null,imageBase64:e=null,mimeType:t="image/jpeg",referencePrompt:i="",preferredLang:r="id",visualTelemetry:s=null,targetAspectRatio:n="auto"}){var _,L,I,x,$,D,B,U,G,J,K,na,ia,ga,P,W,ha,ba,H,Q,q,ja,wa,Na,Ra,ya,Ta,Ea,Ia,j,C,X,sa,M,ta,Pa,La,la;const l=ea.getApiKey().trim(),d=ea.getModel()||"gemini-2.0-flash";let c=null,g="LOCAL_ENGINE",p=!1,k="";if(l&&e)try{const Z=await this.executeMultimodalBackgroundImageAnalysis(e,t,i,l,d,r,n);Z&&(Z.backgroundProfile||Z.spaceAndComposition)&&(c=Z,g="GEMINI_AI",p=!0,this.status=Aa.CONNECTED,this.lastError=null,k=`🌐 Analisa Latar Belakang AI AKTIF (${ea.getModel()||d}) — Analisis mendalam latar, dekorasi & hubungan spasial subjek.`)}catch(Z){console.warn("Gemini multimodal background analysis failed, falling back to dynamic heuristic engine:",Z),this.lastError=Z.message}c||(c=Xt(a,e,s,n),g=l?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",p=!!l,k=p?`🌐 Mode Analisa Latar Belakang (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Latar Belakang (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung)."),n&&n!=="auto"&&n!=="Otomatis"&&(c.aspectRatio=n);const u=c.backgroundProfile||ue(c),m=c.placementProfile||pe(c);let h=c.optimalPrompt||"";if(!h||typeof h!="string"){const Z=c.aspectRatio||"16:9";h=`Interior architectural photography of ${((_=c.spaceAndComposition)==null?void 0:_.category)||"modern authentic room"}, ${((L=c.spaceAndComposition)==null?void 0:L.setting)||"clean spatial setting"}, natural lighting, balanced composition, highly detailed textures, 8k resolution, photorealistic --ar ${Z} --style raw --v 6.1

--no human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, watermark, text`}h=va(h),c.optimalPrompt=h;const b=h||`${u}

${m}`.trim(),{primaryShorthands:f,relatedShorthands:y,similarShorthands:w,conflicts:v,exclusions:T}=this.analyzeImageShorthandsBlueprint(h,{mainDescription:h,environment:((I=c.elemenBackground)==null?void 0:I.arsitektur)||((x=c.spaceAndComposition)==null?void 0:x.setting)||"",background:(($=c.elemenBackground)==null?void 0:$.arsitektur)||((D=c.spaceAndComposition)==null?void 0:D.architecture)||"",lighting:((B=c.elemenBackground)==null?void 0:B.lighting)||((U=c.backgroundLighting)==null?void 0:U.type)||"",colorTone:((G=c.elemenBackground)==null?void 0:G.warna)||((J=c.colorAndMaterial)==null?void 0:J.palette)||"",aspectRatio:c.aspectRatio||"16:9",suggestedShorthands:c.suggestedShorthands||["/background","/interior","/architecture","/ambientlight"]}),R=f.map(Z=>Z.code),A={"1. Ruang & Komposisi":`${((K=c.spaceAndComposition)==null?void 0:K.category)||"-"} (${((na=c.spaceAndComposition)==null?void 0:na.setting)||"-"})`,"2. Lapisan Visual":`FG: ${((ia=c.visualLayers)==null?void 0:ia.foreground)||"-"} | MG: ${((ga=c.visualLayers)==null?void 0:ga.middleGround)||"-"} | BG: ${((P=c.visualLayers)==null?void 0:P.background)||"-"}`,"3. Warna & Material":`${((W=c.colorAndMaterial)==null?void 0:W.dominantColor)||"-"}, ${((ha=c.colorAndMaterial)==null?void 0:ha.surfaceCharacter)||"-"}`,"4. Pencahayaan Latar":`${((ba=c.backgroundLighting)==null?void 0:ba.type)||"-"} (${((H=c.backgroundLighting)==null?void 0:H.direction)||"-"})`,"5. Nuansa Foto / Latar":`${((Q=c.photoMood)==null?void 0:Q.mood)||"-"} &bull; ${((q=c.photoMood)==null?void 0:q.visualStyle)||"-"}`,"6. Elemen Teridentifikasi":Array.isArray(c.identifiedElements)?c.identifiedElements.map(Z=>Z.name).join(", "):"-","7. Struktur Komposisi":`${((ja=c.structureAndComposition)==null?void 0:ja.visualBalance)||"-"} &bull; ${((wa=c.structureAndComposition)==null?void 0:wa.repetitionPatterns)||"-"}`,"8. Hubungan Spasial Subjek":((Na=c.subjectPlacement)==null?void 0:Na.spatialSummary)||m||"-"},S=[{entity:"LATAR_BELAKANG_UTAMA",label:"Karakteristik & Arsitektur Latar",description:`${((Ra=c.spaceAndComposition)==null?void 0:Ra.category)||"Latar arsitektural"}: ${((ya=c.spaceAndComposition)==null?void 0:ya.architecture)||"Struktur dinding, lantai, dan plafon asli"}`},{entity:"DEKORASI_DAN_PROPERTI",label:"Dekorasi & Properti Lingkungan",description:`${((Ta=c.spaceAndComposition)==null?void 0:Ta.decoration)||"Dekorasi"} & properti: ${((Ea=c.spaceAndComposition)==null?void 0:Ea.propsAndAccessories)||"Perabotan dan ornamen penunjang"}`},{entity:"PENCAHAYAAN_LINGKUNGAN",label:"Pencahayaan Lingkungan / Latar",description:`${((Ia=c.backgroundLighting)==null?void 0:Ia.type)||"Pencahayaan alami"}: arah ${((j=c.backgroundLighting)==null?void 0:j.direction)||"terarah"} dengan temperatur ${((C=c.backgroundLighting)==null?void 0:C.colorTemperature)||"seimbang"}`},{entity:"ACUAN_SPASIAL_PENEMPATAN",label:"Hubungan Spasial Penempatan Subjek (Profil B)",description:`Posisi ${((X=c.subjectPlacement)==null?void 0:X.horizontalPos)||"tengah"}, skala ${((sa=c.subjectPlacement)==null?void 0:sa.scale)||"medium shot"}, kedalaman ${((M=c.subjectPlacement)==null?void 0:M.depthPosition)||"middle ground"} (Acuan untuk penempatan subjek baru)`}],E=[{entity:"ISOLASI_IDENTITAS_SUBJEK",label:"Proteksi Privasi & Isolasi Identitas",description:"Menghapus analisis identitas fisik/personal subjek (wajah, usia, pakaian, jenis kelamin) dan hanya mempertahankan data spasial murni."},{entity:"PRESERVASI_KEDALAMAN_RUANG",label:"Preservasi Kedalaman Ruang 3D",description:"Mempertahankan pemisahan foreground, middle ground, dan background agar subjek baru dapat berpadu harmonis."},{entity:"PENAJAMAN_TEKSTUR_MATERIAL",label:"Optimasi Tekstur Material Latar",description:`Mempertegas tekstur mikro ${((Pa=(ta=c.colorAndMaterial)==null?void 0:ta.materialsAndTextures)==null?void 0:Pa.map(Z=>Z.material).join(", "))||"material latar"} pada prompt optimal.`},{entity:"PARAMETER_AI_GENERATIF",label:"Integrasi Parameter AI Generatif",description:`Menyematkan parameter teknis (--ar ${c.aspectRatio||"16:9"} --style raw --v 6.1) dan negative prompt pencegah artefak subjek.`}],O={primaryAction:"ANALISA_LATAR_BELAKANG",primaryTarget:"Karakteristik Latar Belakang & Acuan Spasial Subjek",summary:`Analisis khusus terhadap latar belakang (${((La=c.spaceAndComposition)==null?void 0:La.category)||"lingkungan"}) dan hubungan spasial subjek terhadap latar sebagai acuan penempatan pada foto berikutnya.`,priority:"HIGH",category:"BACKGROUND"},N={from:`Kondisi visual latar belakang aktual: ${((la=c.spaceAndComposition)==null?void 0:la.category)||"Latar foto"} dengan properti dan pencahayaan yang terlihat.`,to:"Profil referensi latar belakang (Profil A) dan acuan penempatan subjek (Profil B) lengkap dengan prompt optimal dan shorthand terkait.",summary:"💡 Analisis Latar Belakang: Menghasilkan profil lingkungan yang detail dan reusable, sekaligus mengunci hubungan posisi subjek terhadap latar sebagai acuan komposisi."};return{mode:"BACKGROUND_ANALYSIS",source:g,isOnlineActive:p,engineNotice:k,backgroundData:c,backgroundProfile:u,placementProfile:m,backgroundProfileText:c.backgroundProfileText||ue(c),placementProfileText:c.placementProfileText||pe(c),fullReportText:c.fullReportText||_e(c),aspects:c.aspects||[{id:"ruang_komposisi",title:"1. Ruang & Komposisi",content:A["1. Ruang & Komposisi"]},{id:"lapisan_visual",title:"2. Lapisan Visual & Kedalaman Ruang",content:A["2. Lapisan Visual"]},{id:"warna_material",title:"3. Warna & Material Latar",content:A["3. Warna & Material"]},{id:"pencahayaan_latar",title:"4. Pencahayaan Latar & Properti",content:A["4. Pencahayaan Latar"]},{id:"nuansa_foto",title:"5. Nuansa Foto / Latar",content:A["5. Nuansa Foto / Latar"]},{id:"elemen_teridentifikasi",title:"6. Elemen Latar Teridentifikasi",content:A["6. Elemen Teridentifikasi"]},{id:"struktur_komposisi",title:"7. Struktur & Komposisi Latar",content:A["7. Struktur Komposisi"]},{id:"hubungan_subjek_latar",title:"8. Hubungan Subjek & Latar",content:A["8. Hubungan Spasial Subjek"]}],generatedPrompt:b,optimalPrompt:h,cleanText:b,visualBreakdown:A,primaryShorthands:f,relatedShorthands:y,similarShorthands:w,recommendations:[...f,...y,...w],installedShorthands:R,conflicts:v,exclusions:T,editAreas:E,lockedAreas:S,unchangedAreas:S.map(Z=>Z.description),visualTransformation:N,intent:O,referencePrompt:i||"",imageInfo:{name:(a==null?void 0:a.name)||"background-reference.jpg",size:(a==null?void 0:a.size)||0,type:t,aspectRatio:c.aspectRatio||"16:9"},timestamp:new Date().toISOString()}}async analyzeShorthandImprove(a,e=null,t={}){var l,d,c,g,p;const i=!!(t.isColourGrading||t.mode==="COLOUR_GRADING"),r=i?"COLOUR_GRADING":t.mode||"SHORTHAND_IMPROVE",s=await this.analyzePrompt(a,e),n={conflictCount:((l=s.conflicts)==null?void 0:l.length)||0,redundancyCount:(((d=s.recommendations)==null?void 0:d.length)||0)-(((c=s.primaryShorthands)==null?void 0:c.length)||0),isOptimized:(((g=s.conflicts)==null?void 0:g.length)||0)===0,improvementAdvice:((p=s.conflicts)==null?void 0:p.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":i?"Shorthand colour grading telah dianalisis dan diselaraskan secara semantik tanpa konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...s,mode:r,isColourGrading:i,isImageRepair:!1,diagnostics:n}}async analyzeImageRepair({imageFile:a=null,imageBase64:e=null,mimeType:t="image/jpeg",notesPrompt:i="",preferredLang:r="id",isColourGrading:s=!1,mode:n="SHORTHAND_IMPROVE",colourGradingConfig:l=null,telemetry:d=null}){const c=!!(s||n==="COLOUR_GRADING"),g=c?"COLOUR_GRADING":"SHORTHAND_IMPROVE",p=ea.getApiKey().trim(),k=ea.getModel()||"gemini-2.0-flash",u=c?l||Ya:null,m=c?Gt(d||{},u):null;let h=null,b="LOCAL_ENGINE",f=!1,y="";if(p&&e)try{const I=await this.executeMultimodalImageRepairAnalysis(e,t,i,p,k,r,c,u);if(I&&(I.optimizationAreas||I.visualConditionSummary)){h=I,b="GEMINI_AI",f=!0,this.status=Aa.CONNECTED,this.lastError=null;const x=ea.getModel()||k;y=c?`🌐 Analisa Colour Grading AI AKTIF (${x}) — Diagnosis tone & warna komprehensif dari gambar asli.`:`🌐 Analisa Perbaikan AI AKTIF (${x}) — Diagnosis visual komprehensif dari gambar asli.`}}catch(I){console.warn("Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:",I),this.lastError=I.message}h||(h=this.generateHeuristicImageRepair(a,i,r,c,u),b=p?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",f=!!p,y=f?c?`🌐 Mode Analisa Colour Grading (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:`🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:c?"🖥️ Mode Analisa Colour Grading (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis warna AI langsung).":"🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).");const{visualConditionSummary:w=c?"Karakteristik warna gambar telah dianalisis secara visual.":"Gambar telah dianalisis secara visual.",optimizationAreas:v=[],goodAspects:T=[],repairInstructions:R=c?"Terapkan colour grading harmonis dan profesional pada foto.":"Optimalkan kualitas dan karakteristik visual foto."}=h,A={PRIMARY_ISSUE:1,SECONDARY_ISSUE:2,OPTIMIZATION:3,PRESERVATION:4,FINISHING:5},S=[];for(const I of v){const x=Array.isArray(I.recommendedCodes)?I.recommendedCodes:[];let $=null;for(const B of x){const U=B.startsWith("/")?B:`/${B}`,G=this.catalog.find(J=>J.code.toLowerCase()===U.toLowerCase());if(G){$=G;break}}if(!$){const B=`${I.aspect||""} ${I.problem||""} ${I.suggestedAction||""}`.toLowerCase();for(const U of this.catalog)if((U.semanticTriggers||[]).map(J=>J.toLowerCase()).some(J=>B.includes(J))||B.includes(U.name.toLowerCase())){$=U;break}}const D=$?$.code:x[0]?x[0].startsWith("/")?x[0]:`/${x[0]}`:null;D&&S.push({code:D,name:($==null?void 0:$.name)||D.replace("/","").toUpperCase(),category:($==null?void 0:$.category)||(c?"COLOR_GRADING":"IMAGE_QUALITY"),functionGroup:($==null?void 0:$.functionGroup)||`GROUP_${D.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:($==null?void 0:$.description)||I.suggestedAction||(c?"Penyesuaian colour grading":"Optimasi visual gambar"),issuePriority:I.priority||"OPTIMIZATION",priorityWeight:A[I.priority]||3,aspect:I.aspect||(c?"Aspek Tone & Warna":"Aspek Visual"),problem:I.problem||"",reason:I.reason||`Diperlukan untuk ${I.suggestedAction||"mengoptimalkan aspek ini"}.`,priority:"WAJIB",isPrimary:!0,checked:!0,source:"DIAGNOSTIC_REPAIR"})}const E=new Set,O=[];for(const I of S){const x=I.functionGroup;E.has(x)||(E.add(x),O.push(I))}O.sort((I,x)=>{const $=(I.priorityWeight||3)-(x.priorityWeight||3);return $!==0?$:I.code.localeCompare(x.code)});const N=O.map(I=>I.code);let _="",L="";if(c){const I=Ve(u,m);L=I,_=N.length>0?`${I}

${N.join(" ")}`.trim():I.trim()}else{const I=Ke(R);L=I,_=N.length>0?`${I} ${N.join(" ")}`.trim():I}return{mode:g,isColourGrading:c,isImageRepair:!0,source:b,isOnlineActive:f,engineNotice:y,visualConditionSummary:w,optimizationAreas:v,goodAspects:T,repairInstructions:R,englishBasePrompt:L,colourGradingConfig:u,adaptiveAdjustments:m,telemetry:c?d:null,diagnosedShorthands:O,installedShorthands:N,optimalPrompt:_,primaryShorthands:O,relatedShorthands:[],recommendations:O,conflicts:[],exclusions:[],editAreas:v.map(I=>({entity:I.aspect||(c?"AREA_COLOUR_GRADING":"AREA_OPTIMASI"),description:I.problem||I.suggestedAction||""})),lockedAreas:T.map(I=>({entity:"ASPEK_SUDAH_BAIK",description:I})),unchangedAreas:T,intent:{primaryAction:c?"DIAGNOSIS_COLOUR_GRADING":"DIAGNOSIS_PERBAIKAN_GAMBAR",primaryTarget:c?"Tone & Palet Warna":"Kondisi Visual Foto",summary:w,priority:"HIGH",category:c?"COLOR_GRADING":"IMAGE_QUALITY"},diagnostics:{issueCount:v.length,goodCount:T.length,isOptimized:!1,improvementAdvice:c?`Ditemukan ${v.length} area warna & tone yang disesuaikan. Menampilkan ${O.length} shorthand rekomendasi tanpa batasan.`:`Ditemukan ${v.length} area visual yang membutuhkan perbaikan. Menampilkan ${O.length} shorthand rekomendasi tanpa batasan.`},imageInfo:{name:(a==null?void 0:a.name)||(c?"colour-grading-source.jpg":"repair-source.jpg"),size:(a==null?void 0:a.size)||0,type:t},timestamp:new Date().toISOString()}}async executeMultimodalImageRepairAnalysis(a,e,t,i,r,s="id",n=!1,l=null){var b,f,y,w,v,T,R,A;const c=[(r||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((S,E,O)=>S&&O.indexOf(S)===E&&!S.includes("1.5-pro")&&!S.includes("2.5-pro")&&(S==="gemini-3.5-flash-lite"||!S.includes("3.5")&&!S.includes("3.8")));c.length===0&&c.push("gemini-2.0-flash","gemini-1.5-flash");const g=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!g||g.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let p=(e||"image/jpeg").toLowerCase().trim();p.includes("png")?p="image/png":p.includes("webp")?p="image/webp":p.includes("heic")?p="image/heic":p.includes("heif")?p="image/heif":p="image/jpeg";const k=n?`Anda adalah Ahli Colour Grading & Visual Colorist profesional.
Tugas Anda: Menganalisis karakter warna, tonal curve, temperatur, saturasi, kontras warna, dan color harmony dari gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis karakteristik warna gambar dan menentukan SELURUH ASPEK penyesuaian colour grading yang dibutuhkan untuk menciptakan palet warna sinematik, harmonis, atau tone estetis yang diinginkan.
${l?`
TARGET ARAH VISUAL & STYLE:
- Mode: ${l.mode||"AUTO"}
- Target Style: ${l.selectedStyle||"Natural Vibrant"}
- Intensity: ${l.intensity??50}%
- Highlight Protection: ${((b=l.protections)==null?void 0:b.highlightProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Shadow Protection: ${((f=l.protections)==null?void 0:f.shadowProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Skin Tone Protection: ${((y=l.protections)==null?void 0:y.skinToneProtection)!==!1?"AKTIF (Prioritas Utama: pertahankan keaslian warna kulit alami manusia)":"NON-AKTIF"}
- Oversaturation Protection: ${((w=l.protections)==null?void 0:w.oversaturationProtection)!==!1?"AKTIF":"NON-AKTIF"}
`:""}
PRINSIP NON-DESTRUKTIF MUTLAK:
FOTO ASLI ADALAH SOURCE OF TRUTH. Proses ini murni AI IMAGE ENHANCEMENT / COLOR GRADING, BUKAN IMAGE REGENERATION. Wajib 100% mempertahankan subjek, wajah, identitas, proporsi tubuh, busana, rambut, pose, objek, latar belakang, dan struktur komposisi tanpa perubahan generatif.

Parameter analisis meliputi:
- Color temperature & white balance (warm, cool, neutral)
- Color cast / tint (pergeseran warna hijau/magenta/kuning/biru)
- Tonal curve / contrast / gamma (bayangan pekat, highlight lembut)
- Shadow tint & black point (cinematic lifted shadows, matte blacks, deep shadows)
- Highlight roll-off & highlight tint (warm highlights, golden glow, clean whites)
- Saturation, vibrance & color gamut (muted tone, vibrant pop, pastel, monochrome)
- Skin tone accuracy & natural color preservation (pada subjek manusia)
- Color harmony & palette style (teal and orange, moody cinematic, vintage retro, pastel aesthetics)
- Film look, texture & digital grain
- Dynamic range & color separation

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan penyesuaian warna/tone yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek warna yang SUDAH BAIK/OPTIMAL.
3. Sebutkan secara eksplisit aspek visual/warna yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah warna/tone utama (white balance bergeser, color cast ekstrem, kontras tidak seimbang).
   - SECONDARY_ISSUE: Penyesuaian saturasi, harmonisasi palet warna, tint bayangan/highlight.
   - OPTIMIZATION: Peningkatan tone sinematik, split toning, kurva gamma estetik.
   - PRESERVATION: Preservasi keaslian warna kulit (skin tone) & tekstur alami.
   - FINISHING: Sentuhan akhir grading film, look estetis, atau nuansa fotografi natural.
6. Cocokkan dengan shorthand yang tepat, contoh: /colorbalance, /naturaltone, /naturalcontrast, /shadowrecovery, /highlightcontrol, /dynamicrange, /rawphoto, /texturepreservation, /detailpreservation, /naturalprocessing.
7. Gunakan bahasa: ${s==="en"?"English":"Bahasa Indonesia"}.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif karakteristik warna dan tone foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek warna/tone (misal: Color Balance & Temperature)",
      "problem": "Deskripsi karakteristik atau kebutuhan penyesuaian spesifik",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan penyesuaian colour grading yang direkomendasikan",
      "recommendedCodes": ["/colorbalance"],
      "reason": "Alasan mengapa shorthand colour grading ini direkomendasikan"
    }
  ],
  "goodAspects": [
    "Aspek warna/visual yang dinilai sudah optimal 1",
    "Aspek warna/visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Natural, AI-readable ENGLISH prompt directives for color grading..."
}`:`Anda adalah Ahli Diagnosa Visual & Optimasi Fotografi Digital profesional.
Tugas Anda: Menganalisis kondisi aktual gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis kondisi visual gambar dan menentukan SELURUH ASPEK gambar yang membutuhkan perbaikan, peningkatan, atau optimasi.

Parameter analisis meliputi:
- Exposure / brightness / lighting
- Highlight (terlalu keras / blown / clipping)
- Shadow (terlalu gelap / detail hilang)
- Dynamic range (rentang dinamis terbatas)
- Contrast (terlalu keras / datar)
- White balance / color balance / color temperature / saturation
- Skin tone (jika terdapat subjek manusia)
- Sharpness / detail / texture / noise / focus
- Lens distortion / perspective
- Composition / framing
- Processing artifacts / realism / keaslian karakter foto

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan optimasi yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek yang SUDAH BAIK.
3. Sebutkan secara eksplisit aspek-aspek visual yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah utama (pencahayaan, bayangan pekat, highlight silau, blur/fokus, distorsi).
   - SECONDARY_ISSUE: Masalah sekunder (kontras, saturasi, white balance, tone warna).
   - OPTIMIZATION: Kebutuhan peningkatan tambahan (dynamic range, high detail, kejernihan, komposisi).
   - PRESERVATION: Kebutuhan preservasi detail/tekstur/kulit.
   - FINISHING: Sentuhan akhir/realisme/karakter fotografi alami.
6. Cocokkan dengan shorthand yang tepat, contoh: /shadowrecovery, /highlightcontrol, /dynamicrange, /naturalcontrast, /naturaltone, /colorbalance, /detailpreservation, /texturepreservation, /naturalprocessing, /perspectivecorrection, /lenscorrection, /compositionbalance, /highdetail, /sharpen, /denoise, /enhance, /hdr, /rawphoto.
7. Gunakan bahasa: ${s==="en"?"English":"Bahasa Indonesia"}. Catatan Khusus: Bidang "repairInstructions" WAJIB dalam Bahasa Inggris natural untuk generative visual AI.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif kondisi visual foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek visual (misal: Shadow / Bayangan)",
      "problem": "Deskripsi masalah spesifik yang ditemukan",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan perbaikan yang direkomendasikan",
      "recommendedCodes": ["/shadowrecovery"],
      "reason": "Alasan mengapa shorthand ini direkomendasikan untuk gambar ini"
    }
  ],
  "goodAspects": [
    "Aspek visual yang dinilai sudah optimal 1",
    "Aspek visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, while preserving authentic skin textures and micro-details without synthetic artifacts."
}`,u=n?t&&t.trim()?`Analisis karakteristik warna dan tone gambar ini untuk colour grading. Catatan/preferensi warna pengguna: "${t.trim()}".`:"Analisis karakteristik warna, kurva tonal, kontras, dan saturasi gambar ini secara menyeluruh untuk rekomendasi colour grading.":t&&t.trim()?`Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${t.trim()}".`:"Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.";let m=null;const h=[];for(const S of c){const E=`https://generativelanguage.googleapis.com/v1beta/models/${S}:generateContent?key=${encodeURIComponent(i)}`,O=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const N of O)try{const _={contents:[{role:"user",parts:[{text:`${k}

Instruksi: ${u}`},{inlineData:{mimeType:p,data:g}}]}],generationConfig:N},L=await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!L.ok){const B=await L.text();if(L.status===400&&N.responseMimeType)continue;throw new Error(`HTTP ${L.status}: ${B}`)}const x=((R=(T=(v=(await L.json()).candidates)==null?void 0:v[0])==null?void 0:T.content)==null?void 0:R.parts)||[];let $="";for(const B of x)B.text&&!B.thought&&($+=B.text);if(!$&&((A=x[0])!=null&&A.text)&&($=x[0].text),!$)throw new Error("Respon Gemini kosong.");let D=null;try{D=this.extractJson($)}catch{D={visualConditionSummary:$.replace(/```[a-z]*\n?/gi,"").trim(),optimizationAreas:[]}}if(D&&typeof D=="object"){const B=D.visualConditionSummary||D.summary||D.diagnosis||D.description;if(B||Array.isArray(D.optimizationAreas)&&D.optimizationAreas.length>0)return!D.visualConditionSummary&&B&&(D.visualConditionSummary=String(B).trim()),this.lastSuccessfulModel=S,S!==r&&ea.setModel(S),D}}catch(_){m=_,h.push(`${S}: ${_.message}`),console.warn(`Model ${S} multimodal repair gagal:`,_.message);break}}throw m||new Error(`Gagal menganalisis perbaikan gambar dengan Gemini API (${h.join(" | ")}).`)}generateHeuristicImageRepair(a,e="",t="id",i=!1,r=null){const s=(e||"").toLowerCase(),n=!!(e&&e.trim()),l=[],d=[];if(i){const k=(b,f)=>{n?b.some(y=>s.includes(y))&&l.push(f):l.push(f)};k(["suhu","temperature","warm","cool","hangat","dingin","kuning","biru","balance","cast","white balance"],{aspect:"Color Balance & Temperature",problem:"Suhu warna dan white balance memerlukan kalibrasi akurat agar nuansa visual harmonis.",priority:"PRIMARY_ISSUE",suggestedAction:"Penyelarasan suhu warna dan kalibrasi white balance netral",recommendedCodes:["/colorbalance"],reason:"Menyeimbangkan pergeseran suhu warna agar palet warna terlihat sinematik dan natural."}),k(["kontras","contrast","gamma","curve","kurva","keras","datar","flat"],{aspect:"Kurva Kontras & Tonal Gamma",problem:"Gradasi kontras antara highlight dan shadow memerlukan kurva transisi yang lebih halus dan sinematik.",priority:"PRIMARY_ISSUE",suggestedAction:"Penerapan kurva kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menciptakan kedalaman visual dengan rentang kontras organik khas film modern."}),k(["shadow","bayangan","gelap","hitam","lifted","pekat","black"],{aspect:"Shadow Toning & Black Point",problem:"Area bayangan gelap memerlukan pemulihan gradasi tonal agar tidak kehilangan nuansa warna.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan dan kontrol black point",recommendedCodes:["/shadowrecovery"],reason:"Mempertahankan kedalaman bayangan dengan detail tonal yang tetap terbaca bersih."}),k(["highlight","terang","silau","roll-off","roll off","putih","glow"],{aspect:"Highlight Roll-off & Tonal Rendah",problem:"Transisi area terang ke highlight paling tinggi memerlukan penataan yang lembut tanpa clipping keras.",priority:"SECONDARY_ISSUE",suggestedAction:"Pengendalian intensitas dan kelembutan highlight",recommendedCodes:["/highlightcontrol"],reason:"Menghindari highlight yang terlalu tajam/silau sehingga transisi pencahayaan tampak organik."}),k(["saturasi","saturation","vibrance","tone","warna","pucat","kusam","pekat","muted"],{aspect:"Rentang Tonal & Saturasi Warna",problem:"Intensitas warna dan kehangatan tonal memerlukan harmonisasi agar tidak over-saturated atau kusam.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan saturasi warna yang pas, estetis, dan nyaman dipandang."}),k(["dinamis","rentang","dynamic","range","hdr"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan dan kilau terang dapat diperluas untuk persepsi kedalaman maksimal.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Meningkatkan rentang tonal agar gradasi warna pada setiap tingkatan eksposur terpelihara utuh."}),k(["tekstur","kulit","skin","texture","asli","material"],{aspect:"Preservasi Tekstur & Warna Kulit Alami",problem:"Tekstur organik kulit dan material rentan terdistorsi oleh proses pewarnaan berlebih.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material dan keaslian warna kulit",recommendedCodes:["/texturepreservation"],reason:"Memastikan colour grading tidak mengubah pori-pori kulit, serat kain, atau tekstur alami objek."}),k(["alami","natural","realis","raw","film","sinematik","grade"],{aspect:"Karakter Pemrosesan Alami & Film Grade",problem:"Potensi terjadinya artefak digital berlebih selama proses penyesuaian grading warna.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Menjaga hasil akhir colour grading tetap memiliki nuansa fotografi autentik dan bernilai seni tinggi."}),d.length===0&&(d.push("Distribusi pencahayaan dasar dan kontras subjek utama sudah terdistribusi dengan baik."),d.push("Kerapatan detail dan tekstur dasar gambar sudah terjaga dengan jelas."),d.push("Tidak ditemukan pergeseran warna ekstrim (chromatic aberration) yang merusak kualitas gambar."));const u=(r==null?void 0:r.selectedStyle)||"Natural Vibrant",m=`Hasil diagnosis colour grading menunjukkan gambar memiliki fondasi visual yang kuat. Ditemukan ${l.length} area penyesuaian tonal curve, suhu warna, dan palet warna untuk mencapai grade estetis yang harmonis dan optimal (Arah visual: ${u}).`,h=Ve(r);return{visualConditionSummary:m,optimizationAreas:l,goodAspects:d,repairInstructions:h}}const c=(k,u)=>{n?k.some(m=>s.includes(m))&&l.push(u):l.push(u)};c(["shadow","gelap","bayangan","underexposed","pekat"],{aspect:"Shadow / Bayangan",problem:"Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan tanpa mencerahkan berlebih",recommendedCodes:["/shadowrecovery"],reason:"Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami."}),c(["highlight","terang","silau","blown","overexposed","putih"],{aspect:"Highlight / Pencahayaan Terang",problem:"Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.",priority:"PRIMARY_ISSUE",suggestedAction:"Pengendalian intensitas highlight",recommendedCodes:["/highlightcontrol"],reason:"Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus."}),s.includes("tajam")||s.includes("buram")||s.includes("blur")||s.includes("fokus")||s.includes("kabur")?l.push({aspect:"Ketajaman & Fokus",problem:"Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.",priority:"PRIMARY_ISSUE",suggestedAction:"Peningkatan ketajaman tepi dan kontur",recommendedCodes:["/sharpen"],reason:"Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih."}):n||d.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),s.includes("noise")||s.includes("bintik")||s.includes("grain")?l.push({aspect:"Noise & Grain",problem:"Terdapat gangguan bintik noise digital pada area bergradasi halus.",priority:"PRIMARY_ISSUE",suggestedAction:"Pembersihan noise digital secara selektif",recommendedCodes:["/denoise"],reason:"Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial."}):n||d.push("Tingkat noise digital berada dalam batas yang sangat rendah dan bersih."),s.includes("perspektif")||s.includes("miring")||s.includes("tilt")?l.push({aspect:"Perspektif Garis & Sudut",problem:"Garis bidang foto tampak miring atau mengalami distorsi perspektif.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi pelurusan perspektif",recommendedCodes:["/perspectivecorrection"],reason:"Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami."}):s.includes("distorsi")||s.includes("lensa")||s.includes("barrel")?l.push({aspect:"Distorsi Lensa",problem:"Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi distorsi lensa",recommendedCodes:["/lenscorrection"],reason:"Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural."}):n||d.push("Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung."),c(["kontras","contrast","keras","datar"],{aspect:"Kontras Visual",problem:"Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.",priority:"SECONDARY_ISSUE",suggestedAction:"Penerapan kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik."}),c(["balance","kuning","biru","cast","suhu","warna"],{aspect:"Keseimbangan Warna & White Balance",problem:"Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.",priority:"SECONDARY_ISSUE",suggestedAction:"Penyelarasan white balance dan netralisasi color cast",recommendedCodes:["/colorbalance"],reason:"Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna."}),(s.includes("pucat")||s.includes("kusam")||s.includes("tone")||!n&&!l.some(k=>k.recommendedCodes.includes("/naturaltone")))&&(n||l.length<8)&&l.push({aspect:"Rentang Tonal Warna",problem:"Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan."}),c(["dinamis","rentang","dynamic","range"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight."}),(s.includes("kualitas")||s.includes("detail tinggi")||s.includes("resolusi")||s.includes("definisi"))&&l.push({aspect:"Kerapatan Detail Visual",problem:"Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.",priority:"OPTIMIZATION",suggestedAction:"Peningkatan detail mikro berkualitas tinggi",recommendedCodes:["/highdetail"],reason:"Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar."}),c(["detail","pertahankan","preservasi","halus"],{aspect:"Preservasi Detail Halus",problem:"Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.",priority:"PRESERVATION",suggestedAction:"Penguncian dan perlindungan detail halus",recommendedCodes:["/detailpreservation"],reason:"Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi."}),c(["tekstur","texture","kulit","kain","permukaan"],{aspect:"Preservasi Tekstur Alami",problem:"Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material",recommendedCodes:["/texturepreservation"],reason:"Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik."}),c(["alami","natural","realis","asli","overprocess"],{aspect:"Karakter Pemrosesan Alami",problem:"Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing."}),d.length===0&&(d.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),d.push("Komposisi dan framing foto sudah proporsional."),d.push("Tidak ditemukan distorsi optik lensa yang mengganggu."));const g=`Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${l.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`,p=Ke(e);return{visualConditionSummary:g,optimizationAreas:l,goodAspects:d,repairInstructions:p}}async generatePromptVariations({source:a="PREVIOUS_ANALYSIS",basePrompt:e="",imageBase64:t=null,mimeType:i="image/jpeg",count:r=5,selectedApproaches:s=["composition_framing","environment_background","lighting_mood","visual_style"],lockedConfig:n={},installedShorthands:l=[],aspectRatio:d="auto",customAspectRatio:c="",variationImage:g=null,previousAnalysis:p=null}={}){var h,b,f,y,w;const k=ea.getApiKey(),u=!!(k&&this.status!==Aa.FAILED),m=rn({basePrompt:e,installedShorthands:l,count:r,selectedApproaches:s,lockedConfig:n,aspectRatio:d,customAspectRatio:c,sourceType:a,variationImage:g,previousAnalysis:p});if(!u)return{...m,source:"HEURISTIC_LOCAL",notice:"Dihasilkan secara lokal menggunakan Prompt Variation Engine V3.8."};try{const T=(ea.getModel()||"gemini-2.0-flash").replace(/^models\//,""),R=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(k)}`,A=[{id:"composition_framing",label:"Komposisi & Framing"},{id:"environment_background",label:"Lingkungan & Latar"},{id:"lighting_mood",label:"Suasana & Pencahayaan"},{id:"visual_style",label:"Gaya Visual & Estetika"},{id:"creative_concept",label:"Konsep Kreatif & Storytelling"},{id:"commercial_stock",label:"Fotografi Komersial & Stock"}],S=A.filter(G=>(s||[]).includes(G.id)),E=A.filter(G=>!(s||[]).includes(G.id)),O=S.length>0?S.map(G=>G.label).join(", "):"SEMUA PENDEKATAN NONAKTIF (Hasilkan variasi nuansa natural dari prompt dasar TANPA memaksakan perubahan latar, gaya, lighting, atau kamera)",N=E.length>0?`JANGAN MEMAKSAKAN perubahan pada dimensi berikut karena opsi dinonaktifkan: ${E.map(G=>G.label).join(", ")}.`:"",_=m.locks.lockPose?"POSE TERKUNCI: Wajib pertahankan pose dan proporsi tubuh asli secara persis, sertakan token /poselock.":"POSE TIDAK DIKUNCI: Pengguna mengizinkan variasi pose. Anda WAJIB memvariasikan pose dan posisi fisik subjek di setiap variasi (misal: sitting, standing confident, walking mid-stride, casual leaning, turned profile). JANGAN menyertakan /poselock atau /bodyshape!",L=m.targetAspectRatio?`ATURAN RASIO ASPEK TARGET: Wajib sertakan parameter --ar ${m.targetAspectRatio} di akhir setiap variasi prompt (gantikan deklarasi --ar lama jika ada).`:"ATURAN RASIO ASPEK TARGET: Pertahankan rasio komposisi alami tanpa memaksakan parameter --ar paksaan.",x=[{text:`
Anda adalah AI Creative Director untuk Prompt Shorthand Analyzer V3.8.
Tugas Anda: Buat ${r} variasi prompt kreatif yang beragam dengan perbedaan semantik yang nyata.

PROMPT DASAR / KONTEKS:
"${e}"

ATURAN PENDEKATAN KREATIF (CHECKBOX DRIVEN):
- PENDEKATAN YANG AKTIF DITERAPKAN: ${O}
- ${N}

ATURAN PERLINDUNGAN INSTRUKSI MUTLAK (INSTRUCTION LOCK):
${m.locks.activeLocks.length>0?m.locks.activeLocks.map(G=>`- WAJIB DIPERTAHANKAN: ${G.label}`).join(`
`):"- Tidak ada elemen yang dikunci."}

ATURAN POSE SUBJEK:
${_}

ATURAN RASIO ASPEK:
${L}

KEMBALIKAN OUTPUT HANYA DALAM FORMAT JSON BERSIH TANPA MARKDOWN BACKTICKS DENGAN SKEMA:
{
  "variations": [
    {
      "id": "var_1",
      "title": "Nama Ringkas Variasi (contoh: Variasi 1: Golden Hour Horizon • Duduk Santai)",
      "approachId": "pendekatan_id",
      "approachLabel": "Label Pendekatan",
      "prompt": "Prompt variasi lengkap berbahasa Inggris siap generate",
      "explanation": "Penjelasan singkat perbedaan visual, pose, estetika, dan rasio yang diterapkan"
    }
  ]
}
`.trim()}];t&&x.push({inlineData:{mimeType:i||"image/jpeg",data:t.replace(/^data:[^;]+;base64,/,"")}});const $=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:x}],generationConfig:{temperature:.7,responseMimeType:"application/json"}})});if(!$.ok)throw new Error(`HTTP ${$.status}: ${$.statusText}`);const D=await $.json(),B=(w=(y=(f=(b=(h=D==null?void 0:D.candidates)==null?void 0:h[0])==null?void 0:b.content)==null?void 0:f.parts)==null?void 0:y[0])==null?void 0:w.text,U=this.extractJson(B);if(U&&Array.isArray(U.variations)&&U.variations.length>0){const G=U.variations.map((J,K)=>{const na=lt(J.prompt||"",e,m.locks),ia=Xa(na,m.targetAspectRatio),ga=m.locks.activeLocks.map(P=>P.label);return{id:J.id||`var_${K+1}`,title:J.title||`Variasi ${K+1}`,approachId:J.approachId||"creative_concept",approachLabel:J.approachLabel||"Konsep Kreatif",prompt:ia,basePrompt:e,shorthands:(ia||"").match(/\/[a-zA-Z0-9_-]+/g)||[],lockedElementsApplied:ga,aspectRatioApplied:m.targetAspectRatio?`--ar ${m.targetAspectRatio}`:"Alami (Ikuti Sumber)",explanation:J.explanation||"Eksplorasi variasi kreatif berbasis AI."}});return{sourceBasePrompt:e,count:G.length,locks:m.locks,targetAspectRatio:m.targetAspectRatio,variations:G,source:"GEMINI_AI",notice:`Dihasilkan menggunakan ${T} dengan perlindungan instruksi semantik${m.targetAspectRatio?` dan rasio ${m.targetAspectRatio}`:""}.`}}return{...m,source:"HEURISTIC_LOCAL",notice:"Dihasilkan secara lokal menggunakan Prompt Variation Engine V3.8."}}catch(v){return console.warn("Gemini generatePromptVariations error, fallback to heuristic:",v),{...m,source:"HEURISTIC_LOCAL",notice:`Dihasilkan menggunakan engine lokal V3.8 (${v.message||"Offline"}).`}}}async optimizePrompt({basePrompt:a,mode:e="balanced",count:t=3,lockedConfig:i={},detectedRatio:r=null}){var l,d,c,g,p;const s=on({basePrompt:a,mode:e,count:t,lockedConfig:i,catalog:this.catalog,detectedRatio:r}),n=ea.getApiKey();if(!n||this.status===Aa.FAILED)return{results:s,source:"HEURISTIC_LOCAL",notice:"Dihasilkan secara lokal menggunakan Prompt Optimizer Engine V3.8."};try{const u=(ea.getModel()||"gemini-2.5-flash").replace(/^models\//,""),m=`https://generativelanguage.googleapis.com/v1beta/models/${u}:generateContent?key=${n}`,b=`
${ln({mode:e,lockedConfig:i,catalog:this.catalog})}

USER SOURCE PROMPT TO OPTIMIZE:
"""${a}"""

Generate exactly ${t} distinct optimized prompt versions following the "${e}" mode directives.
Return valid JSON only.
`.trim(),f=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:b}]}],generationConfig:{temperature:.65,responseMimeType:"application/json"}})});if(!f.ok)throw new Error(`HTTP ${f.status}: ${f.statusText}`);const y=await f.json(),w=(p=(g=(c=(d=(l=y==null?void 0:y.candidates)==null?void 0:l[0])==null?void 0:d.content)==null?void 0:c.parts)==null?void 0:g[0])==null?void 0:p.text,v=this.extractJson(w);return v&&Array.isArray(v.versions)&&v.versions.length>0?{results:v.versions.slice(0,t).map((R,A)=>{let S=ut(R.prompt||"",i);if(i.aspectRatio){const N=a.match(/--ar\s+([0-9.:]+)/i);N?S=Xa(S,N[1].trim()):r&&(S=Xa(S,r))}const E=dt(S,this.catalog),O=ct(S,i);return{id:`opt_v${A+1}_${Date.now()}`,versionNumber:A+1,versionName:R.versionName||`Versi ${A+1}`,mode:e,modeName:(Ka[e.toUpperCase()]||Ka.BALANCED).name,prompt:S,originalPrompt:a,summary:R.summary||"Optimasi cerdas Gemini AI berbasis shorthand.",recognizedShorthands:E,conflicts:O,directiveUsed:"Gemini AI Optimization"}}),source:"GEMINI_AI",notice:`Dihasilkan menggunakan ${u} dengan kecerdasan Gemini AI & perlindungan instruksi.`}:{results:s,source:"HEURISTIC_LOCAL",notice:"Dihasilkan secara lokal menggunakan Prompt Optimizer Engine V3.8."}}catch(k){return console.warn("Gemini optimizePrompt error, fallback to heuristic:",k),{results:s,source:"HEURISTIC_LOCAL",notice:`Dihasilkan menggunakan engine lokal V3.8 (${k.message||"Offline"}).`}}}}function ve(o){return!o||typeof o!="string"?0:o.trim().split(/\s+/).filter(Boolean).length}function je(o){if(!o||typeof o!="string")return 0;const a=o.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function cn(o,a=[]){if(!o||a.length===0)return 0;const e=ve(o);if(e===0)return 0;const t=a.length;return Math.min(100,Math.round(t/e*100))}function un(o){return!o||typeof o!="string"?"":o.trim()}function pn(o,a,e,t){const{status:i}=a;let r="status-unconfigured",s="Gemini: Belum diuji";return i===Aa.CONNECTED?(r="status-connected",s="Gemini: Tersambung"):i===Aa.FAILED&&(r="status-failed",s="Gemini: Gagal"),{html:`
    <header class="app-header">
      <div class="header-container">
        <div class="brand-wrapper">
          <div class="brand-logo" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-text">
            <h1>
              PROMPT SHORTHAND ANALYZER
              <span class="version-tag">V3.8</span>
            </h1>
            <p>Contextual Shorthand Notation &amp; Semantic Preservation</p>
          </div>
        </div>

        <nav class="nav-menu" role="tablist">
          <button type="button" class="nav-item ${o==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${o==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${o==="dictionary"?"active":""}" data-tab="dictionary" role="tab" aria-selected="${o==="dictionary"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            Kamus Shorthand
          </button>
          <button type="button" class="nav-item ${o==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${o==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${o==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${o==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${o==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${o==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions" style="display: flex; align-items: center; gap: 0.5rem;">
          <a 
            href="./Prompt-Shorthand-Analyzer-v3.8-release.apk" 
            download="Prompt-Shorthand-Analyzer-v3.8-release.apk" 
            class="btn btn-primary btn-xs" 
            id="btn-download-apk" 
            style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 700; text-decoration: none; padding: 0.35rem 0.65rem;"
            title="Download file instalasi aplikasi Android APK V3.8"
          >
            📥 <span>Download APK</span>
          </a>
          <button type="button" class="status-badge ${r}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${s}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(l){l.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",()=>{const g=c.getAttribute("data-tab");e&&e(g)})});const d=l.querySelector("#header-status-badge");d&&t&&d.addEventListener("click",()=>t())}}}const Ye=[{id:"preset-a",label:"A. Realitas Seperti Foto Kamera",badge:"Camera Realism",prompt:"authentic camera-captured appearance, photorealistic, natural optical rendering",description:"Menghasilkan tampilan visual otentik seperti jepretan kamera asli dengan rendering optik natural."},{id:"preset-b",label:"B. Detail Sangat Nyata",badge:"Microtexture & Detail",prompt:"high resolving detail, realistic microtexture, fine natural details, lifelike surface textures",description:"Menonjolkan detail mikrotekstur resolusi tinggi dan tekstur permukaan alami yang hidup."},{id:"preset-c",label:"C. Pencahayaan dan Warna Alami",badge:"Natural Light & Color",prompt:"physically accurate lighting, natural color rendition, realistic shadow gradients, balanced dynamic range",description:"Pencahayaan akurat secara fisik dengan reproduksi warna alami, gradasi bayangan nyata, dan rentang dinamis seimbang."},{id:"preset-d",label:"D. Ketajaman Seperti Lensa Profesional",badge:"Pro Lens Optics",prompt:"precise focus, natural optical depth of field, realistic bokeh, crisp details without oversharpening",description:"Fokus presisi dengan depth of field optik alami, bokeh realistis, dan detail tajam tanpa oversharpening."}];function mn(o){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${Ye.map(t=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${t.id}" title="${t.description}">
      <span style="font-weight: 700; color: #93c5fd;">${t.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(t){t.querySelectorAll(".btn-preset-chip").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-preset-id"),s=Ye.find(n=>n.id===r);s&&o&&o(s.prompt)})})}}}function gn(o=null){if(!o)return{hasImage:!1,subjectType:"General Scene",exposureCondition:"Normal Balanced",dynamicRange:"Standard",whiteBalance:"Neutral",colorTemperature:"Neutral (~5500K)",dominantColors:["Neutral Gray","Ambient Tones"],contrastLevel:"Moderate Contrast",saturationLevel:"Natural Saturation",visualMood:"Natural Daylight",enhancementPotential:["Penyelarasan tonal seimbang","Harmonisasi kontras visual"],preservationConstraints:["Komposisi & perspektif foto asli","Identitas & integritas subjek","Rasio aspek asli foto"]};const a=o.colorTelemetry||o.visualTelemetry||{},e=(o.name||"").toLowerCase();let t="General Photography";e.includes("portrait")||e.includes("person")||e.includes("model")||e.includes("wajah")||e.includes("foto")?t="Portrait & Lifestyle":e.includes("land")||e.includes("alam")||e.includes("pemandangan")||e.includes("mountain")||e.includes("sea")?t="Landscape & Nature":e.includes("street")||e.includes("city")||e.includes("urban")||e.includes("jalan")?t="Street & Urban":e.includes("arch")||e.includes("building")||e.includes("gedung")||e.includes("interior")?t="Architecture & Interior":e.includes("product")||e.includes("produk")||e.includes("still")?t="Product & Commercial":a.aspectRatio==="9:16"||a.aspectRatio==="2:3"||a.aspectRatio==="3:4"?t="Portrait / Vertical Frame":t="Landscape / Wide Scene";const i=typeof a.brightness=="number"?a.brightness:128;let r="Normal Balanced";i<85?r="Low-Key / Underexposed (Bayangan Pekat)":i>180?r="High-Key / Overexposed (Terang Dominan)":i<110?r="Slightly Muted / Moody":r="Balanced Daylight Exposure";const s=typeof a.warmth=="number"?a.warmth:0,n=(a.colorTemp||"").toLowerCase(),l=a.dominantRgb||{};let d="Neutral Calibrated",c="Neutral Daylight (~5400K)";s>20||n==="warm"||l.r&&l.b&&l.r>l.b*1.25?(d="Warm Skewed (Cenderung Hangat/Keemasan)",c="Warm Golden (~6500K+)"):(s<-20||n==="cool"||l.b&&l.r&&l.b>l.r*1.25)&&(d="Cool Skewed (Cenderung Dingin/Kebiruan)",c="Cool Ambient (~4200K-)");const g=typeof a.contrast=="number"?a.contrast:50;let p="Moderate Clean Contrast";g>65?p="High Dynamic Contrast (Punchy)":g<35&&(p="Soft / Flat Gradation");const k=typeof a.saturation=="number"?a.saturation:50;let u="Natural Balanced Saturation";k>65?u="Vivid / Saturated Colors":k<35&&(u="Muted / Desaturated Tones");let m="Authentic Natural Ambience";return s>20&&i>=110?m="Warm Sunset / Golden Hour Glow":i<90?m="Dramatic Moody Atmosphere":i>160?m="Bright & Airy Clean Daylight":g>60&&(m="Punchy Cinematic Edge"),{hasImage:!0,filename:o.name||"foto-sumber.jpg",subjectType:t,exposureCondition:r,dynamicRange:g>60?"Wide Dynamic Range":"Standard Dynamic Range",whiteBalance:d,colorTemperature:c,dominantColors:a.dominantColor?[a.dominantColor]:["Natural Palette","Ambient Light"],contrastLevel:p,saturationLevel:u,visualMood:m,enhancementPotential:["Peningkatan separasi warna latar & subjek","Harmonisasi kurva highlight roll-off & bayangan","Penyesuaian mood sinematik tanpa artefak digital"],preservationConstraints:["Integritas subjek, proporsi tubuh, dan identitas wajah","Geometri, komposisi, dan perspektif asli kamera","Rasio aspek asli foto"]}}function hn(o,a=Za){if(!o||!o.hasImage)return a.filter(d=>d.name!=="Custom Style").map(d=>({...d,matchScore:75,matchLabel:"Sesuai sebagai Alternatif",reason:"Style kurasi standar siap digunakan untuk eksplorasi visual.",outcomeSummary:d.description,isRelevant:!0}));const{subjectType:e="",exposureCondition:t="",whiteBalance:i="",contrastLevel:r="",saturationLevel:s="",visualMood:n=""}=o,l=[];for(const d of a){if(d.name==="Custom Style")continue;let c=50;const g=d.name.toLowerCase(),p=(d.category||"").toLowerCase(),k=(d.description||"").toLowerCase(),u=`${g} ${p} ${k}`;let m=[],h=!1;if(e.includes("Portrait")?((u.includes("natural")||u.includes("skin")||u.includes("kulit")||u.includes("lifestyle"))&&(c+=25,m.push("sangat ramah pada warna kulit subjek (skin tone)")),(u.includes("dslr")||u.includes("clean"))&&(c+=15,m.push("menghasilkan separasi subjek potret yang elegan")),u.includes("dark cinematic")&&t.includes("Underexposed")&&(c-=20)):e.includes("Landscape")||e.includes("Nature")?((u.includes("vibrant")||u.includes("golden")||u.includes("rich")||u.includes("warm"))&&(c+=25,m.push("memperkaya kedalaman warna alam dan horizon langit")),(u.includes("airy")||u.includes("clean"))&&(c+=15,m.push("menonjolkan kejernihan atmosfer terbuka"))):e.includes("Street")||e.includes("Urban")?((u.includes("cinematic")||u.includes("teal")||u.includes("contrast"))&&(c+=25,m.push("memberikan karakter urban sinematik yang tegas")),(u.includes("film")||u.includes("analog"))&&(c+=20,m.push("memberikan tekstur nostalgia khas fotografi jalanan"))):e.includes("Architecture")&&(u.includes("clean")||u.includes("modern")||u.includes("minimal"))&&(c+=25,m.push("mempertahankan garis struktural dan white balance presisi")),t.includes("Low-Key")||t.includes("Underexposed")?u.includes("moody")||u.includes("deep shadow")||u.includes("noir")?(c+=20,m.push("selaras dengan bayangan dramatis pada adegan gelap")):u.includes("bright & airy")&&(h=!0):(t.includes("High-Key")||t.includes("Overexposed"))&&(u.includes("bright")||u.includes("airy")||u.includes("high key")?(c+=25,m.push("memaksimalkan karakter terang bersih tanpa over-clipping")):u.includes("dark & moody")&&(c-=25)),i.includes("Warm")?(u.includes("golden")||u.includes("warm")||u.includes("sunset")||u.includes("sun-kissed"))&&(c+=25,m.push("menonjolkan kehangatan cahaya matahari alami pada foto")):i.includes("Cool")&&(u.includes("teal")||u.includes("cool")||u.includes("slate")||u.includes("modern"))&&(c+=20,m.push("menyeimbangkan rona sejuk dengan color separation modern")),r.includes("Soft")||r.includes("Flat")?(u.includes("contrast")||u.includes("vivid")||u.includes("rich"))&&(c+=20,m.push("mengangkat rentang kontras yang sebelumnya datar")):r.includes("High Dynamic")&&(u.includes("soft")||u.includes("natural clean")||u.includes("film look"))&&(c+=18,m.push("melembutkan transisi kontras keras agar lebih organik")),c=Math.max(15,Math.min(98,c)),c<40||h)continue;let b="Sesuai sebagai Alternatif";c>=80?b="Paling Sesuai":c>=65&&(b="Sangat Sesuai");const f=m.length>0?`Direkomendasikan karena ${m.join(", serta ")}.`:`Memberikan keseimbangan visual yang harmonis untuk karakteristik foto ${e.toLowerCase()}.`;l.push({...d,matchScore:c,matchLabel:b,reason:f,outcomeSummary:d.description,isRelevant:!0})}return l.sort((d,c)=>c.matchScore-d.matchScore),l}function bn(o=[],a=10){const e=Array.isArray(o)?o.length:0;if(e===0)return{displayedStyles:[],totalRelevant:0,displayedCount:0,indicatorText:"Tidak ada style yang cukup relevan dengan foto ini.",isAll:!1};let t=e,i=!1;if(a==="all"||a==="Semua Style Relevan"||a===-1)t=e,i=!0;else{const l=parseInt(a,10);!isNaN(l)&&l>=1&&l<=20?(t=Math.min(l,e),i=t>=e):(t=Math.min(10,e),i=t>=e)}const r=o.slice(0,t),s=r.length,n=i?`Menampilkan semua ${e} style relevan.`:`Menampilkan ${s} dari ${e} style relevan.`;return{displayedStyles:r,totalRelevant:e,displayedCount:s,indicatorText:n,isAll:i}}function kn({photoCharacteristics:o=null,selectedStyleObj:a=null,additionalRequest:e="",intensity:t=50}){const i=[];if(i.push(`[INSTRUCTION FOR CHATGPT - PROFESSIONAL COLOR GRADING & PHOTO ENHANCEMENT]
Please edit the attached original photo by applying professional, non-destructive COLOR GRADING and TONAL ADJUSTMENTS only. DO NOT regenerate or reconstruct the image from scratch. DO NOT use generative fill. Retain 100% of the original subject facial identity, facial expressions, body proportions, clothing, hair, objects, background architecture, and scene geometry. Preserve original camera perspective, natural optical depth, and aspect ratio exactly as captured in the source image.`),a){const s=a.name||"Natural Vibrant",n=a.category||"Curated Style",l=va(a.description||"");i.push(`[TARGET EDITING STYLE: "${s}" (${n})]
- Style Intent: ${l}
- Editing Intensity: ${t}%
- Target Tonal Balance: Apply harmonious color grading reflecting "${s}", carefully balancing highlight roll-off, midtone separation, and clean shadow depth.`)}o&&o.hasImage&&i.push(`[PHOTO BASELINE DIAGNOSTICS & ADAPTIVE ENHANCEMENT]
- Subject Context: ${o.subjectType||"General Photography"}
- Exposure Baseline: ${o.exposureCondition||"Normal"}
- White Balance & Tone: ${o.whiteBalance||"Neutral"}, ${o.colorTemperature||"Daylight"}
- Contrast & Saturation Baseline: ${o.contrastLevel||"Moderate"}, ${o.saturationLevel||"Natural"}
- Adaptive Objective: Respect this photo's specific lighting conditions. Enhance mood without creating crushed blacks or blown highlights.`);const r=(e||"").trim();if(r){const s=va(r);i.push(`[USER ADDITIONAL EDITING REQUEST - HIGH PRIORITY]
- Specific Request: "${r}"
- Execution Directive: Seamlessly integrate this request into the color grading and atmospheric treatment: "${s}". Ensure this modification blends naturally with the chosen style without changing the original photo's composition or core geometry.`)}return i.push(`[INTELLIGENT PRESERVATION & ARTIFACT PREVENTION RULES]
1. Skin Tone Protection: If human subjects are present, keep skin tones authentic, healthy, and natural; strictly avoid unnatural orange, magenta, or plasticky oversaturation.
2. Dynamic Range Guard: Prevent clipping in bright highlights and avoid crushing detail in deep shadows.
3. Color Harmony: Maintain smooth color gradients without digital banding, harsh edge halos, or excessive artificial sharpening.
4. Output Standard: Deliver a refined, cinematic, and professional photograph that feels authentically captured, not artificially rendered.`),i.join(`

`)}function fn({config:o,uploadedImage:a,onConfigChange:e,onResetGrading:t,batchImages:i=[],activeBatchIndex:r=0,onSelectBatchImage:s,showNotification:n}){const l=o||{},d=l.mode||"AUTO",c=l.selectedStyle||"Natural Vibrant",g=typeof l.intensity=="number"?l.intensity:50,p=l.protections||{},k=l.custom||{},u=l.aiStyleAnalyzer||{selectedStyle:"Cinematic Teal & Orange",displayCount:10,additionalRequest:"",generatedPrompt:"",photoDiagnostics:null,rankedResults:null},m=u.photoDiagnostics||gn(a),h=u.rankedResults&&u.rankedResults.length>0?u.rankedResults:hn(m,Za),b=u.displayCount!==void 0?u.displayCount:10,{displayedStyles:f,totalRelevant:y,displayedCount:w,indicatorText:v}=bn(h,b),T=u.selectedStyle||(f[0]?f[0].name:c),R=Za.find(E=>E.name===T)||f[0]||null,A=Za.find(E=>E.name===c)||{category:"Target Visual",categoryIcon:"🎯"};return{html:`
    <div class="colour-grading-panel" id="colour-grading-panel" style="margin-top: 1rem; margin-bottom: 1.25rem;">
      <!-- FLOATING POPOVER TOOLTIP (Zero permanent layout space, follows hovered / focused Style) -->
      <div 
        id="cg-style-tooltip" 
        class="cg-style-tooltip" 
        role="tooltip" 
        aria-hidden="true" 
        style="display: none; position: fixed; z-index: 999999; max-width: 330px; background: rgba(15, 23, 42, 0.98); border: 1px solid #f472b6; border-radius: 6px; padding: 0.65rem 0.85rem; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), 0 0 15px rgba(236, 72, 153, 0.25); pointer-events: none; backdrop-filter: blur(8px); transition: opacity 0.12s ease; opacity: 0;"
      >
        <div id="cg-tooltip-title" style="font-weight: 700; color: #f472b6; font-size: 0.825rem; margin-bottom: 0.15rem;"></div>
        <div id="cg-tooltip-cat" style="font-size: 0.68rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.35rem;"></div>
        <div id="cg-tooltip-desc" style="font-size: 0.775rem; color: #f1f5f9; line-height: 1.45;"></div>
      </div>

      <!-- 1. SOURCE IMAGE PROTECTION BANNER (NON-GENERATIVE GUARANTEE) -->
      <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 0.85rem; font-size: 0.825rem; line-height: 1.5; color: #fce7f3; display: flex; align-items: flex-start; gap: 0.65rem;">
        <span style="font-size: 1.2rem; line-height: 1;">🛡️</span>
        <div>
          <strong style="color: #f472b6; font-size: 0.85rem; display: block; margin-bottom: 0.2rem;">
            FOTO ASLI ADALAH SOURCE OF TRUTH — ENHANCEMENT NON-DESTRUKTIF
          </strong>
          <span>Color Grading hanya memengaruhi karakteristik <strong>warna, tonal, kontras &amp; pencahayaan</strong>. Subjek, wajah, identitas, proporsi tubuh, pakaian, rambut, pose, objek, latar belakang, dan komposisi <strong>100% DIPERTAHANKAN UTUH tanpa regenerasi citra</strong>.</span>
        </div>
      </div>

      <!-- 2. ACTION & STATUS BAR (RESET COLOR GRADING & BATCH INDICATOR) -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.55rem 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.825rem; font-weight: 700; color: #f472b6; display: flex; align-items: center; gap: 0.35rem;">
            <span>🎨</span>
            <span>KONTROL PARAMETER AI COLOR GRADING</span>
          </span>
          ${a?`
            <span style="font-size: 0.725rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px;">
              📷 Foto Terpasang (Source of Truth)
            </span>
          `:""}
          ${d==="SELECT_STYLE"?`
            <span style="font-size: 0.725rem; color: #e2e8f0; background: rgba(255, 255, 255, 0.08); padding: 0.15rem 0.5rem; border-radius: 4px;">
              Target: <strong>${c}</strong> (${g}%)
            </span>
          `:""}
        </div>

        <!-- Reset Color Grading Button -->
        <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-reset-colour-grading" style="font-size: 0.725rem; padding: 0.25rem 0.65rem;" title="Kembalikan seluruh parameter grading ke kondisi awal (Foto Asli)">
          🔄 RESET COLOR GRADING
        </button>
      </div>

      <!-- 3. BATCH THUMBNAIL SELECTOR (JIKA MULTI-FOTO DIUNGGAH) -->
      ${i&&i.length>1?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem;">
          <span style="font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">
            📚 Batch Processing (${i.length} Foto — Analisis &amp; Penyesuaian Adaptif Per-Foto):
          </span>
          <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.25rem;">
            ${i.map((E,O)=>`
              <button 
                type="button" 
                class="batch-thumb-btn ${O===r?"active":""}" 
                data-batch-idx="${O}" 
                style="border: 2px solid ${O===r?"#ec4899":"rgba(255,255,255,0.1)"}; background: transparent; padding: 2px; border-radius: 4px; cursor: pointer;"
                title="Pilih Foto ${O+1}"
              >
                <img src="${E.previewUrl}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 2px; display: block;" alt="Foto ${O+1}" />
              </button>
            `).join("")}
          </div>
        </div>
      `:""}

      <!-- 4. MODE SELECTOR (AUTO | SELECT STYLE | CUSTOM STYLE) -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
          <span>🎛️</span>
          <span>1. PILIHAN MODE COLOR GRADING:</span>
        </label>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.5rem;">
          ${me.map(E=>`
            <button 
              type="button" 
              class="cg-mode-btn ${d===E.id?"active":""}" 
              data-cg-mode="${E.id}" 
              ${E.id==="CUSTOM_STYLE"?'data-style-name="Custom Style"':""}
              tabindex="0"
              style="display: flex; flex-direction: column; align-items: flex-start; text-align: left; padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid ${d===E.id?"#ec4899":"rgba(255, 255, 255, 0.1)"}; background: ${d===E.id?"rgba(236, 72, 153, 0.15)":"rgba(30, 41, 59, 0.4)"}; color: #f8fafc; cursor: pointer; transition: all 0.2s ease;"
            >
              <strong style="font-size: 0.825rem; color: ${d===E.id?"#f472b6":"#f1f5f9"}; margin-bottom: 0.2rem;">
                ${E.label}
              </strong>
              <small style="font-size: 0.72rem; color: #94a3b8; line-height: 1.35;">
                ${E.description}
              </small>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- 5. SELECT STYLE SECTION (JIKA MODE === 'SELECT_STYLE') -->
      ${d==="SELECT_STYLE"?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
            <label id="cg-style-label" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🎯</span>
              <span>2. TARGET VISUAL STYLE:</span>
            </label>
            <span style="font-size: 0.725rem; color: #f472b6; font-weight: 600;">
              Total ${Za.length} Curated Styles
            </span>
          </div>

          <!-- CUSTOM DROPDOWN / LISTBOX WITH HOVER/FOCUS TOOLTIPS -->
          <div class="cg-custom-dropdown" id="cg-custom-dropdown" style="position: relative; width: 100%;">
            <!-- Trigger Button: Hanya menampilkan Style Name (Bersih, Tidak Memakan Ruang) -->
            <button 
              type="button" 
              id="cg-style-dropdown-btn" 
              class="cg-style-dropdown-btn" 
              aria-haspopup="listbox" 
              aria-expanded="false" 
              aria-labelledby="cg-style-label" 
              data-style-name="${c}"
              tabindex="0"
              style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.35); color: #f8fafc; padding: 0.6rem 0.85rem; border-radius: 6px; font-size: 0.825rem; cursor: pointer; text-align: left; transition: all 0.2s ease;"
            >
              <span style="display: flex; align-items: center; gap: 0.45rem;">
                <span style="font-size: 0.95rem;">${A.categoryIcon||"🎯"}</span>
                <strong style="color: #fce7f3; font-size: 0.825rem;">${c}</strong>
                <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.25rem;">(${A.category||"Target Visual"})</span>
              </span>
              <span id="cg-dropdown-arrow" style="font-size: 0.75rem; color: #f472b6; transition: transform 0.2s ease;">▼</span>
            </button>

            <!-- Hidden Standard Select Element (Dukungan Kompatibilitas Form & Test) -->
            <select id="cg-style-select" style="display: none;" aria-hidden="true" tabindex="-1">
              ${Ce.map(E=>`
                <optgroup label="${E.icon} ${E.category}">
                  ${E.styles.map(O=>`
                    <option value="${O.name}" ${c===O.name?"selected":""}>
                      ${O.name}
                    </option>
                  `).join("")}
                </optgroup>
              `).join("")}
            </select>

            <!-- Custom Listbox Dropdown Menu (Grouped by Category) -->
            <div 
              id="cg-style-menu" 
              class="cg-style-menu" 
              role="listbox" 
              aria-labelledby="cg-style-label" 
              style="display: none; position: absolute; top: calc(100% + 4px); left: 0; right: 0; max-height: 290px; overflow-y: auto; background: #090d16; border: 1px solid rgba(236, 72, 153, 0.4); border-radius: 6px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85); z-index: 1000; padding: 0.35rem 0;"
            >
              <!-- Search Filter Input -->
              <div style="padding: 0.4rem 0.65rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; background: #090d16; z-index: 2;">
                <input 
                  type="text" 
                  id="cg-style-search" 
                  placeholder="🔍 Cari Style visual (misal: Film, Warm, Moody, Clean)..." 
                  style="width: 100%; background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.15); color: #f8fafc; padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.775rem; outline: none;"
                />
              </div>

              <!-- Listbox Options Container -->
              <div id="cg-style-list-items">
                ${Ce.map(E=>`
                  <div class="cg-category-group" data-cat-name="${E.category}" style="padding: 0.25rem 0;">
                    <div style="padding: 0.25rem 0.75rem; font-size: 0.68rem; font-weight: 700; color: #f472b6; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.35rem; background: rgba(236, 72, 153, 0.06);">
                      <span>${E.icon}</span>
                      <span>${E.category}</span>
                    </div>
                    ${E.styles.map(O=>{const N=c===O.name;return`
                        <div 
                          class="cg-style-item ${N?"selected":""}" 
                          role="option" 
                          aria-selected="${N}" 
                          data-style-name="${O.name}" 
                          tabindex="0" 
                          style="padding: 0.45rem 0.85rem; font-size: 0.8rem; color: ${N?"#f472b6":"#e2e8f0"}; background: ${N?"rgba(236, 72, 153, 0.15)":"transparent"}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.15s ease;"
                        >
                          <span>${O.name}</span>
                          ${N?'<span style="font-size: 0.75rem; color: #f472b6; font-weight: 700;">✓</span>':""}
                        </div>
                      `}).join("")}
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <small style="color: #94a3b8; display: block; margin-top: 0.45rem; font-size: 0.725rem;">
            💡 <em>Arahkan kursor atau fokus keyboard ke nama Style untuk melihat deskripsi visual target.</em>
          </small>
        </div>
      `:""}

      <!-- 6. CUSTOM STYLE PARAMETERS (JIKA MODE === 'CUSTOM_STYLE') -->
      ${d==="CUSTOM_STYLE"?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚙️</span>
              <span>2. PARAMETER CUSTOM STYLE:</span>
            </label>
            <span 
              class="cg-custom-style-info"
              data-style-name="Custom Style" 
              tabindex="0"
              style="font-size: 0.725rem; color: #f472b6; cursor: help; border-bottom: 1px dashed rgba(244, 114, 182, 0.6); padding-bottom: 1px;"
              title="Arahkan kursor untuk info Custom Style"
            >
              ℹ️ Info Custom Style
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 0.85rem;">
            <!-- Warmth -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Warmth (Dingin / Hangat)</span>
                <span id="cg-val-warmth" style="color: #f472b6; font-weight: 600;">${k.warmth||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-warmth" min="-100" max="100" value="${k.warmth||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Tint -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Tint (Hijau / Magenta)</span>
                <span id="cg-val-tint" style="color: #f472b6; font-weight: 600;">${k.tint||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-tint" min="-100" max="100" value="${k.tint||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Contrast -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Contrast (Kontras)</span>
                <span id="cg-val-contrast" style="color: #f472b6; font-weight: 600;">${k.contrast||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-contrast" min="-100" max="100" value="${k.contrast||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Highlights -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Highlights</span>
                <span id="cg-val-highlights" style="color: #f472b6; font-weight: 600;">${k.highlights||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-highlights" min="-100" max="100" value="${k.highlights||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Shadows -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Shadows (Bayangan)</span>
                <span id="cg-val-shadows" style="color: #f472b6; font-weight: 600;">${k.shadows||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-shadows" min="-100" max="100" value="${k.shadows||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Vibrance -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Vibrance (Warna Cerdas)</span>
                <span id="cg-val-vibrance" style="color: #f472b6; font-weight: 600;">${k.vibrance||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-vibrance" min="-100" max="100" value="${k.vibrance||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Saturation -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Saturation (Saturasi)</span>
                <span id="cg-val-saturation" style="color: #f472b6; font-weight: 600;">${k.saturation||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-saturation" min="-100" max="100" value="${k.saturation||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Clarity -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Clarity (Mikro-Kontras)</span>
                <span id="cg-val-clarity" style="color: #f472b6; font-weight: 600;">${k.clarity||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-clarity" min="-100" max="100" value="${k.clarity||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>
          </div>

          <!-- Split Toning (Shadow Tone & Highlight Tone) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            <div>
              <label for="cg-custom-shadow-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Shadow Tone (Rona Bayangan):
              </label>
              <select id="cg-custom-shadow-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${jt.map(E=>`
                  <option value="${E.value}" ${k.shadowTone===E.value?"selected":""}>${E.label}</option>
                `).join("")}
              </select>
            </div>
            <div>
              <label for="cg-custom-highlight-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Highlight Tone (Rona Highlight):
              </label>
              <select id="cg-custom-highlight-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${$t.map(E=>`
                  <option value="${E.value}" ${k.highlightTone===E.value?"selected":""}>${E.label}</option>
                `).join("")}
              </select>
            </div>
          </div>
        </div>
      `:""}

      ${d==="AI_STYLE_ANALYZER"?`
        <!-- ========================================== -->
        <!-- MODE: AI COLOR GRADING & STYLE ANALYZER   -->
        <!-- ========================================== -->

        <!-- 1. EVALUASI KARAKTERISTIK FOTO AKTUAL -->
        <div style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.825rem; font-weight: 700; color: #f472b6; display: flex; align-items: center; gap: 0.4rem;">
              <span>🔬</span>
              <span>2. KARAKTERISTIK VISUAL FOTO ASLI (SOURCE OF TRUTH)</span>
            </label>
            <span style="font-size: 0.72rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); padding: 0.15rem 0.5rem; border-radius: 4px; border: 1px solid rgba(56, 189, 248, 0.25);">
              ${a?"Foto Terdeteksi":"Mode Eksplorasi (Tanpa Foto)"}
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.775rem;">
            <div style="background: rgba(30, 41, 59, 0.5); padding: 0.5rem 0.65rem; border-radius: 5px; border-left: 3px solid #ec4899;">
              <span style="color: #94a3b8; display: block; font-size: 0.7rem;">Subjek &amp; Komposisi:</span>
              <strong style="color: #f1f5f9;">${m.subjectType}</strong>
            </div>
            <div style="background: rgba(30, 41, 59, 0.5); padding: 0.5rem 0.65rem; border-radius: 5px; border-left: 3px solid #38bdf8;">
              <span style="color: #94a3b8; display: block; font-size: 0.7rem;">Pencahayaan &amp; Exposure:</span>
              <strong style="color: #f1f5f9;">${m.exposureCondition}</strong>
            </div>
            <div style="background: rgba(30, 41, 59, 0.5); padding: 0.5rem 0.65rem; border-radius: 5px; border-left: 3px solid #fbbf24;">
              <span style="color: #94a3b8; display: block; font-size: 0.7rem;">White Balance &amp; Rona:</span>
              <strong style="color: #f1f5f9;">${m.whiteBalance} (${m.colorTemperature})</strong>
            </div>
            <div style="background: rgba(30, 41, 59, 0.5); padding: 0.5rem 0.65rem; border-radius: 5px; border-left: 3px solid #a855f7;">
              <span style="color: #94a3b8; display: block; font-size: 0.7rem;">Kontras &amp; Saturasi:</span>
              <strong style="color: #f1f5f9;">${m.contrastLevel} • ${m.saturationLevel}</strong>
            </div>
          </div>
        </div>

        <!-- 2. CONTROLLER JUMLAH STYLE YANG DITAMPILKAN -->
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.75rem 0.85rem; margin-bottom: 0.85rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.65rem;">
          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <label for="cg-analyzer-display-count" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🔢</span>
              <span>JUMLAH STYLE YANG DITAMPILKAN:</span>
            </label>
            <select id="cg-analyzer-display-count" style="background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.4); color: #f8fafc; padding: 0.35rem 0.65rem; border-radius: 5px; font-size: 0.8rem; font-weight: 600; outline: none; cursor: pointer;">
              ${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(E=>`
                <option value="${E}" ${String(b)===String(E)?"selected":""}>
                  ${E} style
                </option>
              `).join("")}
              <option value="all" ${String(b)==="all"||b==="Semua Style Relevan"?"selected":""}>
                Semua Style Relevan
              </option>
            </select>
          </div>

          <!-- Real-Time Counter Badge -->
          <div id="cg-analyzer-indicator-badge" style="font-size: 0.75rem; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 600;">
            📊 ${v}
          </div>
        </div>

        <!-- 3. KARTU REKOMENDASI GAYA EDITING -->
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🎯</span>
              <span>3. REKOMENDASI GAYA EDITING BERDASARKAN FOTO:</span>
            </label>
            <span style="font-size: 0.72rem; color: #94a3b8;">
              Pilih satu style untuk membuat prompt editing ChatGPT
            </span>
          </div>

          <div id="cg-analyzer-style-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
            ${f.map(E=>{const O=T===E.name;let N="#38bdf8",_="rgba(56, 189, 248, 0.15)",L="rgba(56, 189, 248, 0.35)";return E.matchLabel==="Paling Sesuai"?(N="#4ade80",_="rgba(74, 222, 128, 0.15)",L="rgba(74, 222, 128, 0.4)"):E.matchLabel==="Sangat Sesuai"&&(N="#f472b6",_="rgba(236, 72, 153, 0.15)",L="rgba(236, 72, 153, 0.4)"),`
                <div 
                  class="cg-ai-style-card ${O?"active":""}" 
                  data-style-name="${E.name}"
                  style="background: ${O?"rgba(236, 72, 153, 0.12)":"rgba(15, 23, 42, 0.65)"}; border: 1px solid ${O?"#ec4899":"rgba(255, 255, 255, 0.08)"}; border-radius: var(--radius-sm); padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.5rem; transition: all 0.2s ease;"
                >
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.4rem; margin-bottom: 0.35rem;">
                      <strong style="font-size: 0.85rem; color: ${O?"#f472b6":"#f1f5f9"};">
                        ${E.categoryIcon||"🎨"} ${E.name}
                      </strong>
                      <span style="font-size: 0.68rem; font-weight: 700; color: ${N}; background: ${_}; border: 1px solid ${L}; padding: 0.15rem 0.45rem; border-radius: 4px; white-space: nowrap;">
                        ${E.matchLabel} (${E.matchScore}%)
                      </span>
                    </div>

                    <p style="font-size: 0.725rem; color: #cbd5e1; line-height: 1.4; margin-bottom: 0.35rem;">
                      <strong style="color: #94a3b8;">Alasan:</strong> ${E.reason}
                    </p>

                    <p style="font-size: 0.7rem; color: #94a3b8; line-height: 1.35; font-style: italic; margin-bottom: 0;">
                      <strong style="color: #cbd5e1; font-style: normal;">Hasil:</strong> ${E.outcomeSummary}
                    </p>
                  </div>

                  <div style="display: flex; justify-content: flex-end; align-items: center; pt: 0.25rem;">
                    <button 
                      type="button" 
                      class="btn btn-xs btn-select-ai-style ${O?"btn-primary":"btn-outline"}" 
                      data-style-name="${E.name}"
                      style="font-size: 0.72rem; padding: 0.25rem 0.65rem;"
                    >
                      ${O?"✓ Style Terpilih":"Pilih Style"}
                    </button>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- 4. REQUEST EDITING TAMBAHAN (OPSIONAL) -->
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <label for="cg-analyzer-request" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.35rem;">
            <span>✍️</span>
            <span>4. REQUEST EDITING TAMBAHAN (OPSIONAL):</span>
          </label>
          <textarea 
            id="cg-analyzer-request" 
            class="font-mono"
            rows="3"
            placeholder="Contoh: buat langit sedikit lebih dramatis, naikkan kehangatan cahaya matahari, jaga warna jaket tetap hitam pekat, buat bayangan lebih lembut..." 
            style="width: 100%; background: #0b1120; border: 1px solid rgba(255, 255, 255, 0.12); color: #f8fafc; padding: 0.5rem 0.65rem; border-radius: 5px; font-size: 0.775rem; line-height: 1.4; outline: none; resize: vertical;"
          >${u.additionalRequest||""}</textarea>
          <small style="color: #94a3b8; display: block; margin-top: 0.35rem; font-size: 0.72rem;">
            💡 <em>Instruksi Anda akan diterjemahkan ke bahasa editing teknis dan disisipkan dengan prioritas tinggi pada Prompt ChatGPT.</em>
          </small>
        </div>

        <!-- 5. TOMBOL GENERATE PROMPT EDITING & OUTPUT BOX CHATGPT -->
        <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <strong style="font-size: 0.825rem; color: #f472b6; display: flex; align-items: center; gap: 0.35rem;">
                <span>💬</span>
                <span>PROMPT EDITING UNTUK CHATGPT</span>
              </strong>
              <small style="font-size: 0.71rem; color: #94a3b8; display: block;">
                Style Terpilih: <span style="color: #f1f5f9; font-weight: 600;">${T}</span>
                ${u.additionalRequest?' • <span style="color: #38bdf8;">Request Tambahan Aktif</span>':""}
              </small>
            </div>

            <button 
              type="button" 
              id="btn-build-chatgpt-prompt" 
              class="btn btn-primary"
              style="font-size: 0.775rem; padding: 0.35rem 0.85rem; display: flex; align-items: center; gap: 0.35rem;"
            >
              <span>⚡</span>
              <span>Buat Prompt Editing</span>
            </button>
          </div>

          <div style="position: relative;">
            <textarea 
              id="cg-chatgpt-prompt-output" 
              class="font-mono" 
              rows="7" 
              readonly 
              placeholder="Pilih style di atas lalu klik tombol [⚡ Buat Prompt Editing] untuk menghasilkan prompt pengeditan foto yang siap digunakan bersama foto asli di ChatGPT..." 
              style="width: 100%; background: #090d16; border: 1px solid rgba(255, 255, 255, 0.15); color: #f8fafc; padding: 0.65rem 0.75rem; border-radius: 5px; font-size: 0.75rem; line-height: 1.45; outline: none; resize: vertical;"
            >${u.generatedPrompt||""}</textarea>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
              <small style="color: #94a3b8; font-size: 0.71rem;">
                🔒 <em>Aturan proteksi aktif: Non-Generative, Non-Destructive, 100% Retain facial identity, clothing, &amp; geometry.</em>
              </small>

              <button 
                type="button" 
                id="btn-copy-chatgpt-prompt" 
                class="btn btn-outline btn-xs"
                ${u.generatedPrompt?"":"disabled"}
                style="font-size: 0.75rem; padding: 0.3rem 0.75rem; display: flex; align-items: center; gap: 0.3rem;"
              >
                <span>📋</span>
                <span>Salin Prompt</span>
              </button>
            </div>
          </div>
        </div>
      `:`
        <!-- 7. COLOR GRADING INTENSITY CONTROL (MODE AUTO / SELECT / CUSTOM) -->
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
            <label for="cg-intensity-range" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚡</span>
              <span>3. COLOR GRADING INTENSITY:</span>
            </label>
            <span id="cg-intensity-badge" style="font-size: 0.8rem; font-weight: 700; color: #f472b6; background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.3); padding: 0.15rem 0.55rem; border-radius: 4px;">
              ${g}%
            </span>
          </div>

          <input 
            type="range" 
            id="cg-intensity-range" 
            min="0" 
            max="100" 
            step="1" 
            value="${g}" 
            style="width: 100%; accent-color: #ec4899; margin-bottom: 0.5rem;" 
          />

          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            ${xt.map(E=>`
              <button 
                type="button" 
                class="btn btn-xs ${g===E.value?"btn-primary":"btn-outline"}" 
                data-cg-intensity="${E.value}"
                style="font-size: 0.725rem; padding: 0.25rem 0.55rem;"
                title="${E.description}"
              >
                ${E.label}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- 8. INTELLIGENT PROTECTION SYSTEM -->
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🛡️</span>
              <span>4. INTELLIGENT PROTECTIONS (Pelindung Kualitas Foto Asli):</span>
            </label>
            <span style="font-size: 0.725rem; color: #4ade80;">Semua Proteksi Aktif</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.45rem;">
            <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
              <input type="checkbox" id="cg-prot-skin" ${p.skinToneProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
              <span><strong>Skin Tone Protection</strong> (Rona Kulit Alami)</span>
            </label>

            <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
              <input type="checkbox" id="cg-prot-hl" ${p.highlightProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
              <span><strong>Highlight Protection</strong> (Anti-Blown/Clipping)</span>
            </label>

            <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
              <input type="checkbox" id="cg-prot-sh" ${p.shadowProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
              <span><strong>Shadow Protection</strong> (Anti-Crushed Blacks)</span>
            </label>

            <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
              <input type="checkbox" id="cg-prot-oversat" ${p.oversaturationProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
              <span><strong>Oversaturation Protection</strong> (Batas Gamut)</span>
            </label>

            <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
              <input type="checkbox" id="cg-prot-clip" ${p.clippingProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
              <span><strong>Clipping Protection</strong> (Safe RGB 0-255)</span>
            </label>

            <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
              <input type="checkbox" id="cg-prot-natcolor" ${p.naturalColorProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
              <span><strong>Natural Color Protection</strong> (Langit &amp; Daun)</span>
            </label>
          </div>
        </div>
      `}
    </div>
  `,bindEvents(E){const O=E.querySelector("#colour-grading-panel");if(!O)return;const N=O.querySelector("#cg-style-tooltip"),_=O.querySelector("#cg-tooltip-title"),L=O.querySelector("#cg-tooltip-cat"),I=O.querySelector("#cg-tooltip-desc"),x=(j,C)=>{if(!N||!j)return;const X=C||j.getAttribute("data-style-name");if(!X)return;const sa=Za.find(la=>la.name.toLowerCase()===X.toLowerCase())||{name:X,category:"Target Visual",categoryIcon:"🎯",description:"Arah visual colour grading adaptif."};_&&(_.textContent=sa.name),L&&(L.textContent=`${sa.categoryIcon||"🎯"} ${sa.category||""}`),I&&(I.textContent=sa.description),N.style.display="block",N.style.opacity="1",N.setAttribute("aria-hidden","false");const M=j.getBoundingClientRect(),ta=N.getBoundingClientRect();let Pa=M.top+M.height/2-ta.height/2,La=M.right+12;La+ta.width>window.innerWidth-12&&(La=M.left-ta.width-12),La<12&&(La=Math.max(12,Math.min(window.innerWidth-ta.width-12,M.left)),Pa=M.bottom+8),Pa<12&&(Pa=12),Pa+ta.height>window.innerHeight-12&&(Pa=window.innerHeight-ta.height-12),N.style.top=`${Math.round(Pa)}px`,N.style.left=`${Math.round(La)}px`},$=()=>{N&&(N.style.opacity="0",N.style.display="none",N.setAttribute("aria-hidden","true"))},D=(j,C)=>{j&&(j.addEventListener("mouseenter",()=>x(j,C)),j.addEventListener("mouseleave",$),j.addEventListener("focus",()=>x(j,C)),j.addEventListener("blur",$))},B=O.querySelector("#cg-style-dropdown-btn"),U=O.querySelector("#cg-style-menu"),G=O.querySelector("#cg-dropdown-arrow"),J=O.querySelector("#cg-style-search"),K=O.querySelector("#cg-style-select");let na=!1;const ia=()=>{U&&(na=!0,U.style.display="block",B&&B.setAttribute("aria-expanded","true"),G&&(G.style.transform="rotate(180deg)"),J&&(J.value="",W(""),setTimeout(()=>J.focus(),50)))},ga=()=>{U&&(na=!1,U.style.display="none",B&&B.setAttribute("aria-expanded","false"),G&&(G.style.transform="rotate(0deg)"),$())},P=()=>{na?ga():ia()};function W(j){const C=(j||"").toLowerCase().trim();O.querySelectorAll(".cg-category-group").forEach(X=>{let sa=!1;X.querySelectorAll(".cg-style-item").forEach(M=>{const ta=(M.getAttribute("data-style-name")||"").toLowerCase();!C||ta.includes(C)?(M.style.display="flex",sa=!0):M.style.display="none"}),X.style.display=sa?"block":"none"})}B&&(B.addEventListener("click",j=>{j.stopPropagation(),P()}),D(B,c),B.addEventListener("keydown",j=>{j.key==="ArrowDown"||j.key==="Enter"||j.key===" "?(j.preventDefault(),ia()):j.key==="Escape"&&ga()})),J&&(J.addEventListener("input",j=>{W(j.target.value)}),J.addEventListener("keydown",j=>{if(j.key==="Escape")ga(),B&&B.focus();else if(j.key==="ArrowDown"){j.preventDefault();const C=O.querySelector('.cg-style-item:not([style*="display: none"])');C&&C.focus()}}));const ha=j=>{var C;na&&!((C=O.querySelector("#cg-custom-dropdown"))!=null&&C.contains(j.target))&&ga()};document.addEventListener("click",ha),O.querySelectorAll(".cg-style-item").forEach(j=>{const C=j.getAttribute("data-style-name");D(j,C),j.addEventListener("click",()=>{e&&C&&e({...l,selectedStyle:C}),K&&(K.value=C),ga(),B&&B.focus()}),j.addEventListener("keydown",X=>{if(X.key==="Enter"||X.key===" ")X.preventDefault(),j.click();else if(X.key==="Escape")X.preventDefault(),ga(),B&&B.focus();else if(X.key==="ArrowDown"){X.preventDefault();const sa=Array.from(O.querySelectorAll('.cg-style-item:not([style*="display: none"])')),M=sa.indexOf(j);M>=0&&M<sa.length-1&&sa[M+1].focus()}else if(X.key==="ArrowUp"){X.preventDefault();const sa=Array.from(O.querySelectorAll('.cg-style-item:not([style*="display: none"])')),M=sa.indexOf(j);M>0?sa[M-1].focus():J&&J.focus()}})}),K&&K.addEventListener("change",j=>{e&&e({...l,selectedStyle:j.target.value})});const ba=O.querySelector(".cg-custom-style-info");ba&&D(ba,"Custom Style");const H=O.querySelector('.cg-mode-btn[data-cg-mode="CUSTOM_STYLE"]');H&&D(H,"Custom Style"),O.querySelectorAll(".cg-mode-btn").forEach(j=>{j.addEventListener("click",()=>{const C=j.getAttribute("data-cg-mode");e&&C!==d&&e({...l,mode:C})})});const Q=O.querySelector("#cg-intensity-range");Q&&Q.addEventListener("input",j=>{const C=Number(j.target.value),X=O.querySelector("#cg-intensity-badge");X&&(X.textContent=`${C}%`),e&&e({...l,intensity:C})}),O.querySelectorAll("[data-cg-intensity]").forEach(j=>{j.addEventListener("click",()=>{const C=Number(j.getAttribute("data-cg-intensity"));e&&e({...l,intensity:C})})});const q=O.querySelector("#btn-reset-colour-grading");q&&q.addEventListener("click",()=>{t?t():e&&e({...l,mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}})}),["warmth","tint","contrast","highlights","shadows","saturation","vibrance","clarity"].forEach(j=>{const C=O.querySelector(`#cg-custom-${j}`);C&&C.addEventListener("input",X=>{const sa=Number(X.target.value),M=O.querySelector(`#cg-val-${j}`);M&&(M.textContent=sa),e&&e({...l,custom:{...l.custom,[j]:sa}})})});const wa=O.querySelector("#cg-custom-shadow-tone");wa&&wa.addEventListener("change",j=>{e&&e({...l,custom:{...l.custom,shadowTone:j.target.value}})});const Na=O.querySelector("#cg-custom-highlight-tone");Na&&Na.addEventListener("change",j=>{e&&e({...l,custom:{...l.custom,highlightTone:j.target.value}})}),[{id:"#cg-prot-skin",prop:"skinToneProtection"},{id:"#cg-prot-hl",prop:"highlightProtection"},{id:"#cg-prot-sh",prop:"shadowProtection"},{id:"#cg-prot-oversat",prop:"oversaturationProtection"},{id:"#cg-prot-clip",prop:"clippingProtection"},{id:"#cg-prot-natcolor",prop:"naturalColorProtection"}].forEach(({id:j,prop:C})=>{const X=O.querySelector(j);X&&X.addEventListener("change",sa=>{e&&e({...l,protections:{...l.protections,[C]:sa.target.checked}})})}),O.querySelectorAll("[data-batch-idx]").forEach(j=>{j.addEventListener("click",()=>{const C=Number(j.getAttribute("data-batch-idx"));s&&s(C)})});const ya=O.querySelector("#cg-analyzer-display-count");ya&&ya.addEventListener("change",j=>{const C=j.target.value,X=C==="all"?"all":parseInt(C,10);e&&e({...l,aiStyleAnalyzer:{...u,displayCount:X,photoDiagnostics:m,rankedResults:h}})}),O.querySelectorAll(".btn-select-ai-style, .cg-ai-style-card").forEach(j=>{j.addEventListener("click",C=>{var sa;const X=j.getAttribute("data-style-name")||((sa=j.closest("[data-style-name]"))==null?void 0:sa.getAttribute("data-style-name"));X&&(j.classList.contains("cg-ai-style-card")&&C.target.closest(".btn-select-ai-style")||e&&e({...l,selectedStyle:X,aiStyleAnalyzer:{...u,selectedStyle:X,photoDiagnostics:m,rankedResults:h}}))})});const Ta=O.querySelector("#cg-analyzer-request");Ta&&(Ta.addEventListener("input",j=>{const C=j.target.value;l.aiStyleAnalyzer&&(l.aiStyleAnalyzer.additionalRequest=C)}),Ta.addEventListener("change",j=>{e&&e({...l,aiStyleAnalyzer:{...u,additionalRequest:j.target.value,photoDiagnostics:m,rankedResults:h}})}));const Ea=O.querySelector("#btn-build-chatgpt-prompt");Ea&&Ea.addEventListener("click",()=>{const j=Ta?Ta.value:u.additionalRequest||"",C=kn({photoCharacteristics:m,selectedStyleObj:R,additionalRequest:j,intensity:g});e&&e({...l,aiStyleAnalyzer:{...u,additionalRequest:j,generatedPrompt:C,photoDiagnostics:m,rankedResults:h}}),n&&n("✅ Prompt editing ChatGPT berhasil dibuat!")});const Ia=O.querySelector("#btn-copy-chatgpt-prompt");Ia&&Ia.addEventListener("click",()=>{const j=u.generatedPrompt||"";j.trim()&&navigator.clipboard.writeText(j).then(()=>{n&&n("📋 Prompt editing untuk ChatGPT berhasil disalin ke clipboard!")}).catch(()=>{const C=document.createElement("textarea");C.value=j,document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove(),n&&n("📋 Prompt editing untuk ChatGPT berhasil disalin ke clipboard!")})})}}}function yn({state:o={},optimalPrompt:a="",variationList:e=[],onStateChange:t,onRunOptimization:i,onCopyPrompt:r,onSetAsMainPrompt:s,onOptimizeAgain:n}){const{sourceType:l="OPTIMAL_PROMPT",manualPrompt:d="",selectedVariationIndex:c=0,mode:g="balanced",count:p=3,lockedElements:k={face:!1,outfit:!1,pose:!1,color:!1,aspectRatio:!0,custom:""},results:u=[],isOptimizing:m=!1,comparingVersionIndex:h=null}=o;let b="";if(l==="OPTIMAL_PROMPT")b=(a||"").trim();else if(l==="VARIATION_PROMPT"){const T=e[c];b=T?(T.prompt||"").trim():""}else b=(d||"").trim();const f=Ka[(g||"balanced").toUpperCase()]||Ka.BALANCED,y=ve(b),w=je(b);return{html:`
    <div class="prompt-optimizer-panel" id="card-prompt-optimizer" style="margin-top: 0.85rem;">
      <!-- Notice Header Tab -->
      <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.8rem; color: #bae6fd;">
        <div style="display: flex; align-items: center; gap: 0.4rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.2rem;">
          <span>✨</span> <span>Prompt Optimizer: Peningkatan Kualitas Prompt Cerdas &amp; Terarah</span>
        </div>
        <div style="font-size: 0.735rem; color: var(--text-muted); line-height: 1.4;">
          Pilih sumber prompt, tentukan mode strategi optimasi, aktifkan perlindungan instruksi (lock), lalu tekan <strong>Optimalkan Prompt</strong> untuk menghasilkan versi prompt terbaik.
        </div>
      </div>

      <!-- 1. Sumber Input Prompt -->
      <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>1. SUMBER PROMPT ACUAN</span>
          <span style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${b?`${y} kata • ~${w} token`:"Belum ada input"}
          </span>
        </div>

        <!-- 3 Pilihan Sumber -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.45rem; margin-bottom: 0.65rem;">
          <label data-source="OPTIMAL_PROMPT" style="display: flex; align-items: center; gap: 0.45rem; background: ${l==="OPTIMAL_PROMPT"?"rgba(56, 189, 248, 0.15)":"rgba(15, 23, 42, 0.6)"}; border: 1px solid ${l==="OPTIMAL_PROMPT"?"#38bdf8":"rgba(255, 255, 255, 0.1)"}; border-radius: 6px; padding: 0.5rem 0.65rem; cursor: pointer;">
            <input type="radio" name="optimizer-source-type" value="OPTIMAL_PROMPT" ${l==="OPTIMAL_PROMPT"?"checked":""} />
            <div style="font-size: 0.775rem; font-weight: 600; color: ${l==="OPTIMAL_PROMPT"?"#38bdf8":"#f1f5f9"};">
              🎯 Gunakan Prompt Optimal
            </div>
          </label>

          <label data-source="MANUAL_PROMPT" style="display: flex; align-items: center; gap: 0.45rem; background: ${l==="MANUAL_PROMPT"?"rgba(56, 189, 248, 0.15)":"rgba(15, 23, 42, 0.6)"}; border: 1px solid ${l==="MANUAL_PROMPT"?"#38bdf8":"rgba(255, 255, 255, 0.1)"}; border-radius: 6px; padding: 0.5rem 0.65rem; cursor: pointer;">
            <input type="radio" name="optimizer-source-type" value="MANUAL_PROMPT" ${l==="MANUAL_PROMPT"?"checked":""} />
            <div style="font-size: 0.775rem; font-weight: 600; color: ${l==="MANUAL_PROMPT"?"#38bdf8":"#f1f5f9"};">
              ✍️ Masukkan Prompt Manual
            </div>
          </label>

          <label data-source="VARIATION_PROMPT" style="display: flex; align-items: center; gap: 0.45rem; background: ${l==="VARIATION_PROMPT"?"rgba(56, 189, 248, 0.15)":"rgba(15, 23, 42, 0.6)"}; border: 1px solid ${l==="VARIATION_PROMPT"?"#38bdf8":"rgba(255, 255, 255, 0.1)"}; border-radius: 6px; padding: 0.5rem 0.65rem; cursor: pointer;">
            <input type="radio" name="optimizer-source-type" value="VARIATION_PROMPT" ${l==="VARIATION_PROMPT"?"checked":""} />
            <div style="font-size: 0.775rem; font-weight: 600; color: ${l==="VARIATION_PROMPT"?"#38bdf8":"#f1f5f9"};">
              🎨 Gunakan Prompt Variasi
            </div>
          </label>
        </div>

        <!-- Wadah Konten Berdasarkan Sumber -->
        ${l==="OPTIMAL_PROMPT"?`
          ${a?`
            <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 6px; padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.825rem; color: #f1f5f9; line-height: 1.5; max-height: 120px; overflow-y: auto;">
              ${a}
            </div>
          `:`
            <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 6px; padding: 0.65rem 0.85rem; font-size: 0.775rem; color: #fde047;">
              ℹ️ Belum ada hasil PROMPT OPTIMAL dari Analyzer. Silakan jalankan analisis di tab <strong>📝 Analisa Prompt</strong> terlebih dahulu, atau pilih opsi <strong>✍️ Masukkan Prompt Manual</strong> di atas.
            </div>
          `}
        `:""}

        ${l==="MANUAL_PROMPT"?`
          <div>
            <textarea 
              id="input-optimizer-manual-prompt" 
              rows="3" 
              class="font-mono"
              placeholder="Ketik atau tempelkan prompt bahasa Indonesia, bahasa Inggris, atau bershorthand di sini..."
              style="width: 100%; box-sizing: border-box; background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.6rem 0.8rem; color: #f1f5f9; font-size: 0.825rem; resize: vertical;"
            >${d||""}</textarea>
          </div>
        `:""}

        ${l==="VARIATION_PROMPT"?`
          ${e&&e.length>0?`
            <div style="display: flex; flex-direction: column; gap: 0.45rem;">
              <select id="select-optimizer-variation" class="form-select" style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.45rem 0.65rem; color: #f1f5f9; font-size: 0.8rem; cursor: pointer;">
                ${e.map((T,R)=>`
                  <option value="${R}" ${R===c?"selected":""}>
                    ${T.versionName||`Variasi ${R+1}`} (${(T.prompt||"").slice(0,50)}...)
                  </option>
                `).join("")}
              </select>
              <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.55rem 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: #f1f5f9; max-height: 90px; overflow-y: auto;">
                ${b}
              </div>
            </div>
          `:`
            <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 6px; padding: 0.65rem 0.85rem; font-size: 0.775rem; color: #fde047;">
              ℹ️ Belum ada hasil variasi dari tab <strong>Ide Variasi Prompt</strong>. Silakan hasilkan variasi terlebih dahulu, atau pilih opsi <strong>✍️ Masukkan Prompt Manual</strong> di atas.
            </div>
          `}
        `:""}
      </div>

      <!-- 2. Pengaturan Optimasi -->
      <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9;">2. PENGATURAN MODE &amp; JUMLAH OUTPUT</span>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span style="font-size: 0.725rem; color: var(--text-muted);">Jumlah:</span>
            <button type="button" class="btn btn-xs ${p===1?"btn-primary":"btn-outline"} btn-optimizer-count" data-count="1">1 Versi</button>
            <button type="button" class="btn btn-xs ${p===3?"btn-primary":"btn-outline"} btn-optimizer-count" data-count="3">3 Versi</button>
            <button type="button" class="btn btn-xs ${p===5?"btn-primary":"btn-outline"} btn-optimizer-count" data-count="5">5 Versi</button>
          </div>
        </div>

        <div style="margin-bottom: 0.45rem;">
          <select id="select-optimizer-mode" class="form-select" style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.5rem 0.75rem; color: #f1f5f9; font-size: 0.825rem; cursor: pointer;">
            ${Object.values(Ka).map(T=>`
              <option value="${T.id}" ${T.id===g?"selected":""}>
                ${T.icon} ${T.name}
              </option>
            `).join("")}
          </select>
        </div>

        <div style="font-size: 0.725rem; color: var(--text-muted); line-height: 1.35; padding: 0.35rem 0.5rem; background: rgba(0, 0, 0, 0.25); border-radius: 4px;" id="desc-optimizer-mode">
          💡 ${f.description}
        </div>
      </div>

      <!-- 3. Perlindungan Instruksi (Instruction Lock) -->
      <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.45rem;">
          3. PERLINDUNGAN INSTRUKSI (INSTRUCTION LOCK)
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.55rem;">
          Centang elemen yang ingin dilindungi. Checkbox dicentang berarti instruksi tersebut wajib dipertahankan.
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.45rem; margin-bottom: 0.55rem;">
          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-face" ${k.face?"checked":""} />
            <span>Kunci Wajah (<code>/facelock</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-outfit" ${k.outfit?"checked":""} />
            <span>Kunci Pakaian (<code>/outfitlock</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-pose" ${k.pose?"checked":""} />
            <span>Kunci Pose (<code>/poselock</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-color" ${k.color?"checked":""} />
            <span>Kunci Palet Warna (<code>/colorpreserve</code>)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #f1f5f9; cursor: pointer; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <input type="checkbox" id="cb-opt-lock-aspect" ${k.aspectRatio?"checked":""} />
            <span>Pertahankan Rasio Aspek (<code>--ar</code>)</span>
          </label>
        </div>

        <input 
          type="text" 
          id="input-opt-custom-lock" 
          value="${k.custom||""}" 
          placeholder="Elemen kustom yang ingin dilindungi (opsional, contoh: leather jacket, red guitar, glasses)"
          style="width: 100%; box-sizing: border-box; background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; padding: 0.45rem 0.75rem; color: #f1f5f9; font-size: 0.775rem;"
        />
      </div>

      <!-- Actions Bar: Optimalkan Prompt -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          💡 Optimasi mengeksekusi strategi ${f.name} secara presisi tanpa merusak konteks prompt.
        </small>
        <button 
          type="button" 
          class="btn btn-primary" 
          id="btn-run-prompt-optimizer" 
          ${!b||m?"disabled":""}
          style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border-color: #38bdf8;"
        >
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${m?"✨ Mengoptimalkan Prompt...":"✨ Optimalkan Prompt"}
        </button>
      </div>

      <!-- 4. HASIL OPTIMASI PROMPT (Ditampilkan saat ada hasil) -->
      ${u&&u.length>0?`
        <div id="optimizer-results-container" style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 0.35rem;">
              <span>🏆</span> <span>HASIL OPTIMASI PROMPT (${u.length} VERSI)</span>
            </div>
            <span class="badge" style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 0.725rem;">
              ${f.name}
            </span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${u.map((T,R)=>{const A=h===R;return`
                <div class="optimizer-result-card" style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.85rem;">
                  <!-- Header Kartu -->
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
                    <div style="font-size: 0.825rem; font-weight: 700; color: #f1f5f9;">
                      ${T.versionName||`Versi ${R+1}`}
                    </div>
                    <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
                      ${ve(T.prompt)} kata • ~${je(T.prompt)} token
                    </div>
                  </div>

                  <!-- Ringkasan Perubahan -->
                  <div style="background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8; border-radius: 4px; padding: 0.45rem 0.65rem; margin-bottom: 0.55rem; font-size: 0.735rem; color: #bae6fd; line-height: 1.35;">
                    ${T.summary}
                  </div>

                  <!-- Prompt Hasil Bersih Box -->
                  <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.825rem; color: #f1f5f9; line-height: 1.5; margin-bottom: 0.55rem;">
                    ${T.prompt}
                  </div>

                  <!-- Tag Shorthand yang Dikenali -->
                  ${T.recognizedShorthands&&T.recognizedShorthands.length>0?`
                    <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 0.55rem;">
                      <span style="font-size: 0.7rem; color: var(--text-muted);">Shorthand aktif:</span>
                      ${T.recognizedShorthands.map(S=>`
                        <span class="badge" style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 0.7rem; font-family: var(--font-mono);">
                          ${S.code}
                        </span>
                      `).join("")}
                    </div>
                  `:""}

                  <!-- Peringatan Konflik Instruksi (Jika ada) -->
                  ${T.conflicts&&T.conflicts.length>0?`
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 6px; padding: 0.45rem 0.65rem; margin-bottom: 0.55rem; font-size: 0.725rem; color: #fca5a5;">
                      <strong>⚠️ Potensi Konflik Instruksi:</strong>
                      <ul style="margin: 0.25rem 0 0 1rem; padding: 0;">
                        ${T.conflicts.map(S=>`<li>${S}</li>`).join("")}
                      </ul>
                    </div>
                  `:""}

                  <!-- Panel Perbandingan Langsung (Toggled on Demand) -->
                  ${A?`
                    <div class="optimizer-diff-panel" style="background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 0.65rem; margin-bottom: 0.65rem;">
                      <div style="font-size: 0.725rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.35rem;">
                        ⚖️ Perbandingan Teks Asli vs Hasil Optimasi:
                      </div>
                      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <div>
                          <div style="font-size: 0.685rem; color: var(--text-muted); margin-bottom: 0.2rem;">Sumber Asli:</div>
                          <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 4px; padding: 0.4rem; font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono); max-height: 80px; overflow-y: auto;">
                            ${T.originalPrompt}
                          </div>
                        </div>
                        <div>
                          <div style="font-size: 0.685rem; color: var(--text-muted); margin-bottom: 0.2rem;">Hasil Optimasi:</div>
                          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 4px; padding: 0.4rem; font-size: 0.75rem; color: #6ee7b7; font-family: var(--font-mono); max-height: 80px; overflow-y: auto;">
                            ${T.prompt}
                          </div>
                        </div>
                      </div>
                    </div>
                  `:""}

                  <!-- 4 Tombol Aksi Nyata -->
                  <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center; justify-content: flex-end; border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 0.55rem;">
                    <button type="button" class="btn btn-outline btn-xs btn-compare-optimized btn-compare-opt-prompt" data-index="${R}" title="Bandingkan dengan prompt asli">
                      ⚖️ ${A?"Tutup Perbandingan":"Bandingkan dengan Asli"}
                    </button>
                    <button type="button" class="btn btn-outline btn-xs btn-reoptimize btn-reoptimize-prompt" data-index="${R}" title="Jadikan sumber dan optimalkan kembali">
                      🔁 Optimalkan Lagi
                    </button>
                    <button type="button" class="btn btn-outline btn-xs btn-set-main-prompt btn-set-main-opt-prompt" data-index="${R}" title="Gunakan sebagai Prompt Utama Analyzer" style="color: #fde047; border-color: rgba(234, 179, 8, 0.4);">
                      ⭐ Jadikan Prompt Utama
                    </button>
                    <button type="button" class="btn btn-primary btn-xs btn-copy-optimized btn-copy-opt-prompt" data-index="${R}" title="Salin prompt bersih siap pakai">
                      📋 Salin Prompt
                    </button>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `:""}
    </div>
  `,bindEvents(T){T.querySelectorAll('input[name="optimizer-source-type"]').forEach(D=>{D.addEventListener("change",B=>{t&&t({sourceType:B.target.value})})});const R=T.querySelector("#input-optimizer-manual-prompt");R&&R.addEventListener("input",D=>{t&&t({manualPrompt:D.target.value})});const A=T.querySelector("#select-optimizer-variation");A&&A.addEventListener("change",D=>{t&&t({selectedVariationIndex:parseInt(D.target.value,10)||0})});const S=T.querySelector("#select-optimizer-mode");S&&S.addEventListener("change",D=>{t&&t({mode:D.target.value})}),T.querySelectorAll(".btn-optimizer-count").forEach(D=>{D.addEventListener("click",()=>{const B=parseInt(D.getAttribute("data-count"),10)||3;t&&t({count:B})})});const E=T.querySelector("#cb-opt-lock-face"),O=T.querySelector("#cb-opt-lock-outfit"),N=T.querySelector("#cb-opt-lock-pose"),_=T.querySelector("#cb-opt-lock-color"),L=T.querySelector("#cb-opt-lock-aspect"),I=T.querySelector("#input-opt-custom-lock"),x=()=>{t&&t({lockedElements:{face:!!(E!=null&&E.checked),outfit:!!(O!=null&&O.checked),pose:!!(N!=null&&N.checked),color:!!(_!=null&&_.checked),aspectRatio:!!(L!=null&&L.checked),custom:((I==null?void 0:I.value)||"").trim()}})};E&&E.addEventListener("change",x),O&&O.addEventListener("change",x),N&&N.addEventListener("change",x),_&&_.addEventListener("change",x),L&&L.addEventListener("change",x),I&&I.addEventListener("input",x);const $=T.querySelector("#btn-run-prompt-optimizer");$&&$.addEventListener("click",()=>{i&&b&&i()}),T.querySelectorAll(".btn-copy-optimized").forEach(D=>{D.addEventListener("click",()=>{const B=parseInt(D.getAttribute("data-index"),10),U=u[B];U&&r&&r(U.prompt)})}),T.querySelectorAll(".btn-compare-optimized").forEach(D=>{D.addEventListener("click",()=>{const B=parseInt(D.getAttribute("data-index"),10);t&&t({comparingVersionIndex:h===B?null:B})})}),T.querySelectorAll(".btn-set-main-prompt").forEach(D=>{D.addEventListener("click",()=>{const B=parseInt(D.getAttribute("data-index"),10),U=u[B];U&&s&&s(U.prompt)})}),T.querySelectorAll(".btn-reoptimize").forEach(D=>{D.addEventListener("click",()=>{const B=parseInt(D.getAttribute("data-index"),10),U=u[B];U&&n&&n(U.prompt)})})}}}function An({state:o={},previousAnalysis:a=null,onSourceTypeChange:e,onCustomPromptChange:t,onImageSelected:i,onImageRemoved:r,onVariationCountChange:s,onToggleApproach:n,onToggleLock:l,onCustomLockChange:d,onAspectRatioChange:c,onCustomAspectRatioChange:g,onGenerate:p,onCopyPrompt:k,onSetMainPrompt:u,onOptimizePrompt:m,onMakeBaseForNextVariation:h,onNavigateTab:b,isEmbedded:f=!1}){const{sourceType:y="PREVIOUS_ANALYSIS",customPrompt:w="",variationImage:v=null,variationCount:T=5,selectedApproaches:R=["composition_framing","environment_background","lighting_mood","visual_style"],lockedElements:A={face:!0,outfit:!0,pose:!1,color:!1,custom:""},aspectRatio:S="auto",customAspectRatio:E="",aspectRatioError:O=null,generatedVariations:N=[],isGenerating:_=!1,generationMeta:L=null}=o,I=De({sourceType:y,variationImage:v,previousAnalysis:a,basePrompt:y==="CUSTOM_PROMPT"?w:(a==null?void 0:a.optimalPrompt)||(a==null?void 0:a.generatedPrompt)||""}),x=!!(a&&(a.optimalPrompt||a.generatedPrompt)),$=(a==null?void 0:a.optimalPrompt)||(a==null?void 0:a.generatedPrompt)||"",D=(a==null?void 0:a.installedShorthands)||[];return{html:`
    <div class="${f?"prompt-variations-embedded-wrapper":"page-container page-prompt-variations"}" id="page-prompt-variations"${f?' style="margin-top: 0.85rem;"':""}>
      ${f?`
        <!-- Embedded Header Banner -->
        <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.8rem; color: #bae6fd;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.2rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem; font-weight: 700; color: #38bdf8;">
              <span>⭐</span> <span>IDE VARIASI PROMPT: Multi-Dimensi &amp; Instruction Lock</span>
            </div>
            <span class="badge" style="background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #38bdf8; font-size: 0.7rem;">V3.8</span>
          </div>
          <div style="font-size: 0.735rem; color: var(--text-muted); line-height: 1.4;">
            Eksplorasi ide variasi visual dari analisis sebelumnya, gambar baru, atau prompt teks dengan perlindungan elemen semantik terkunci.
          </div>
        </div>
      `:`
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
      `}

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
              <label class="source-radio-card ${y==="PREVIOUS_ANALYSIS"?"active":""}" style="border: 1px solid ${y==="PREVIOUS_ANALYSIS"?"#38bdf8":"rgba(255,255,255,0.1)"}; background: ${y==="PREVIOUS_ANALYSIS"?"rgba(56, 189, 248, 0.12)":"rgba(15, 23, 42, 0.6)"}; border-radius: 8px; padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: flex-start; gap: 0.6rem; transition: all 0.2s;">
                <input type="radio" name="source_type" value="PREVIOUS_ANALYSIS" ${y==="PREVIOUS_ANALYSIS"?"checked":""} style="margin-top: 0.2rem;" />
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; color: ${y==="PREVIOUS_ANALYSIS"?"#38bdf8":"#f1f5f9"};">
                    📋 Gunakan Analisis Sebelumnya
                  </div>
                  <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Gunakan hasil analisis prompt optimal &amp; shorthand dari tab Analyzer tanpa re-analisa.
                  </div>
                </div>
              </label>

              <label class="source-radio-card ${y==="NEW_IMAGE"?"active":""}" style="border: 1px solid ${y==="NEW_IMAGE"?"#38bdf8":"rgba(255,255,255,0.1)"}; background: ${y==="NEW_IMAGE"?"rgba(56, 189, 248, 0.12)":"rgba(15, 23, 42, 0.6)"}; border-radius: 8px; padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: flex-start; gap: 0.6rem; transition: all 0.2s;">
                <input type="radio" name="source_type" value="NEW_IMAGE" ${y==="NEW_IMAGE"?"checked":""} style="margin-top: 0.2rem;" />
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; color: ${y==="NEW_IMAGE"?"#38bdf8":"#f1f5f9"};">
                    🖼️ Upload Gambar Baru
                  </div>
                  <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Masukkan gambar referensi baru mandiri tanpa menimpa analisis sebelumnya.
                  </div>
                </div>
              </label>

              <label class="source-radio-card ${y==="CUSTOM_PROMPT"?"active":""}" style="border: 1px solid ${y==="CUSTOM_PROMPT"?"#38bdf8":"rgba(255,255,255,0.1)"}; background: ${y==="CUSTOM_PROMPT"?"rgba(56, 189, 248, 0.12)":"rgba(15, 23, 42, 0.6)"}; border-radius: 8px; padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: flex-start; gap: 0.6rem; transition: all 0.2s;">
                <input type="radio" name="source_type" value="CUSTOM_PROMPT" ${y==="CUSTOM_PROMPT"?"checked":""} style="margin-top: 0.2rem;" />
                <div>
                  <div style="font-weight: 700; font-size: 0.85rem; color: ${y==="CUSTOM_PROMPT"?"#38bdf8":"#f1f5f9"};">
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
              ${y==="PREVIOUS_ANALYSIS"?`
                <div id="panel-source-previous">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">Context Analisis Terakhir:</span>
                    <span class="badge ${x?"status-connected":"status-unconfigured"}" style="font-size: 0.7rem;">
                      ${x?"🟢 Tersedia":"🟡 Belum Ada Analisis"}
                    </span>
                  </div>
                  ${x?`
                    <div style="font-family: var(--font-mono); font-size: 0.825rem; color: #f1f5f9; background: rgba(0,0,0,0.3); padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.2); line-height: 1.45;">
                      ${$}
                    </div>
                    ${D.length>0?`
                      <div style="margin-top: 0.45rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                        <span style="font-size: 0.725rem; color: var(--text-muted);">Shorthand Terpasang:</span>
                        ${D.map(U=>`<code style="font-size: 0.725rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 0.1rem 0.35rem; border-radius: 4px;">${U}</code>`).join(" ")}
                      </div>
                    `:""}
                  `:`
                    <div style="font-size: 0.8rem; color: var(--text-muted); padding: 0.75rem; background: rgba(245, 158, 11, 0.08); border: 1px dashed rgba(245, 158, 11, 0.3); border-radius: 6px;">
                      ⚠️ Belum ada hasil analisis aktif di tab Analyzer. Anda dapat memilih sumber <strong>[Upload Gambar Baru]</strong> atau <strong>[Masukkan Prompt]</strong>, atau klik tombol <em>Buka Analyzer</em> untuk menganalisis prompt/gambar awal terlebih dahulu.
                    </div>
                  `}
                </div>
              `:""}

              ${y==="NEW_IMAGE"?`
                <div id="panel-source-image">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">Upload Gambar Khusus Variasi (Terpisah):</span>
                    <span style="font-size: 0.725rem; color: var(--text-muted);">Konteks gambar Analyzer tetap aman</span>
                  </div>
                  ${v?`
                    <div style="display: flex; gap: 1rem; align-items: center; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.3);">
                      <img src="${v.base64}" alt="Preview" style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);" />
                      <div style="flex: 1;">
                        <div style="font-weight: 700; font-size: 0.85rem; color: #f1f5f9;">${v.name||"Gambar Referensi"}</div>
                        <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">
                          Dimensi: ${v.width||0} x ${v.height||0} px • Aspek Rasio: ${v.aspectRatio||"1:1"}
                        </div>
                        <div style="margin-top: 0.4rem;">
                          <button type="button" class="btn btn-outline btn-xs" id="btn-remove-variation-image" style="color: #f87171; border-color: rgba(239, 68, 68, 0.4);">
                            🗑️ Hapus Gambar
                          </button>
                        </div>
                      </div>
                    </div>
                  `:`
                    <div class="dropzone-box" id="dropzone-variation-image" style="border: 2px dashed rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(15, 23, 42, 0.4); cursor: pointer;">
                      <input type="file" id="input-variation-file" accept="image/*" style="display: none;" />
                      <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8; width: 32px; height: 32px; margin-bottom: 0.4rem;"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #f1f5f9;">Klik atau Tarik Gambar Referensi Baru ke Sini</div>
                      <div style="font-size: 0.735rem; color: var(--text-muted); margin-top: 0.2rem;">Mendukung format PNG, JPG, WEBP hingga 10MB</div>
                    </div>
                  `}
                </div>
              `:""}

              ${y==="CUSTOM_PROMPT"?`
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
                  >${w}</textarea>
                  <div style="font-size: 0.725rem; color: var(--text-muted); margin-top: 0.3rem;">
                    💡 Tips: Anda dapat mengetik teks bahasa natural, shorthand murni seperti <code>/cam_wide /golden_hour</code>, atau kombinasinya.
                  </div>
                </div>
              `:""}
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
              <button type="button" class="btn btn-xs ${T===3?"btn-primary":"btn-outline"} btn-count-toggle" data-count="3">3 Ide</button>
              <button type="button" class="btn btn-xs ${T===5?"btn-primary":"btn-outline"} btn-count-toggle" data-count="5">5 Ide</button>
              <button type="button" class="btn btn-xs ${T===10?"btn-primary":"btn-outline"} btn-count-toggle" data-count="10">10 Ide</button>
            </div>
          </div>

          <!-- Approach Checkboxes -->
          <div style="margin-top: 0.75rem;">
            <div style="font-size: 0.775rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.4rem;">
              Pilih Pendekatan Kreatif yang Diinginkan:
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.5rem;">
              ${Object.values(Ne).map(U=>{const G=R.includes(U.id);return`
                  <label class="approach-toggle-card" style="display: flex; align-items: center; gap: 0.6rem; background: ${G?"rgba(56, 189, 248, 0.12)":"rgba(15, 23, 42, 0.4)"}; border: 1px solid ${G?"rgba(56, 189, 248, 0.4)":"rgba(255, 255, 255, 0.08)"}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                    <input type="checkbox" class="cb-approach" value="${U.id}" ${G?"checked":""} />
                    <div>
                      <div style="font-size: 0.8rem; font-weight: 600; color: ${G?"#38bdf8":"#f1f5f9"};">${U.label}</div>
                      <div style="font-size: 0.7rem; color: var(--text-muted); line-height: 1.2;">${U.description}</div>
                    </div>
                  </label>
                `}).join("")}
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
              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${A.face?"rgba(16, 185, 129, 0.12)":"rgba(15, 23, 42, 0.4)"}; border: 1px solid ${A.face?"#10b981":"rgba(255, 255, 255, 0.08)"}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="face" ${A.face?"checked":""} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${A.face?"#6ee7b7":"#f1f5f9"};">
                  👤 Identitas Wajah (<code>/facelock</code>)
                </span>
              </label>

              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${A.outfit?"rgba(16, 185, 129, 0.12)":"rgba(15, 23, 42, 0.4)"}; border: 1px solid ${A.outfit?"#10b981":"rgba(255, 255, 255, 0.08)"}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="outfit" ${A.outfit?"checked":""} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${A.outfit?"#6ee7b7":"#f1f5f9"};">
                  👔 Pakaian &amp; Aksesori (<code>/outfitlock</code>)
                </span>
              </label>

              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${A.pose?"rgba(16, 185, 129, 0.12)":"rgba(15, 23, 42, 0.4)"}; border: 1px solid ${A.pose?"#10b981":"rgba(255, 255, 255, 0.08)"}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="pose" ${A.pose?"checked":""} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${A.pose?"#6ee7b7":"#f1f5f9"};">
                  🧘 Pose &amp; Proporsi (<code>/poselock</code>, <code>/bodyshape</code>)
                </span>
              </label>

              <label class="lock-toggle-card" style="display: flex; align-items: center; gap: 0.5rem; background: ${A.color?"rgba(16, 185, 129, 0.12)":"rgba(15, 23, 42, 0.4)"}; border: 1px solid ${A.color?"#10b981":"rgba(255, 255, 255, 0.08)"}; border-radius: 6px; padding: 0.45rem 0.65rem; cursor: pointer;">
                <input type="checkbox" class="cb-lock" data-lock="color" ${A.color?"checked":""} />
                <span style="font-size: 0.8rem; font-weight: 600; color: ${A.color?"#6ee7b7":"#f1f5f9"};">
                  🎨 Palet Warna Dominan (<code>/colorpreserve</code>)
                </span>
              </label>
            </div>

            <!-- Custom Lock Text Input -->
            <div style="margin-top: 0.55rem;">
              <input 
                type="text" 
                id="input-custom-lock"
                value="${A.custom||""}"
                placeholder="Elemen kustom yang ingin dikunci (opsional, contoh: red leather jacket, vintage watch, cat in arms)" 
                style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.3); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 6px; padding: 0.45rem 0.75rem; color: #f1f5f9; font-size: 0.8rem;"
              />
            </div>
          </div>
        </section>

        <!-- 4. Rasio Hasil Generate (V3.8 Patch) -->
        <section class="panel analyzer-card" id="card-aspect-ratio" style="border: 1px solid rgba(56, 189, 248, 0.25);">
          <div class="card-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 0.6rem;">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>
              <h2>4. RASIO HASIL GENERATE</h2>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge" id="badge-active-aspect-ratio" style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 0.725rem; font-weight: 700;">
                ${S==="auto"?I?`📐 Otomatis (Sumber: ${I})`:"📐 Otomatis (Alami)":S==="custom"?`📐 Custom: ${E||"Belum diisi"}`:`📐 Target: ${S}`}
              </span>
            </div>
          </div>

          <div style="margin-top: 0.75rem;">
            <div style="font-size: 0.775rem; color: var(--text-muted); margin-bottom: 0.6rem; line-height: 1.4;">
              Pilih rasio aspek target kanvas. Rasio yang dipilih akan diterapkan secara konsisten (<code>--ar ...</code>) ke <strong>seluruh variasi prompt</strong> yang dihasilkan.
            </div>

            <!-- Aspect Ratio Button Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.45rem;" id="aspect-ratio-buttons-grid">
              ${en.map(U=>{const G=S===U.id;return`
                  <button 
                    type="button" 
                    class="btn-aspect-ratio-preset ${G?"active":""}" 
                    data-ratio="${U.id}"
                    style="display: flex; flex-direction: column; align-items: flex-start; text-align: left; padding: 0.5rem 0.65rem; border-radius: 6px; background: ${G?"rgba(56, 189, 248, 0.18)":"rgba(15, 23, 42, 0.5)"}; border: 1px solid ${G?"#38bdf8":"rgba(255, 255, 255, 0.08)"}; color: #f1f5f9; cursor: pointer; transition: all 0.15s ease;"
                  >
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                      <span style="font-size: 0.8rem; font-weight: 700; color: ${G?"#38bdf8":"#f1f5f9"};">
                        ${G?"🔘":"⚪"} ${U.label}
                      </span>
                    </div>
                    <span style="font-size: 0.685rem; color: var(--text-muted); margin-top: 0.2rem; line-height: 1.25;">
                      ${U.description}
                    </span>
                  </button>
                `}).join("")}
            </div>

            <!-- Custom Aspect Ratio Input Container -->
            ${S==="custom"?`
              <div id="panel-custom-aspect-ratio" style="margin-top: 0.75rem; background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.75rem 0.9rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.4rem;">
                  <label for="input-custom-aspect-ratio" style="font-size: 0.8rem; font-weight: 700; color: #38bdf8;">
                    Ketik Rasio Kustom (Format W:H):
                  </label>
                  <span style="font-size: 0.725rem; color: var(--text-muted);">Contoh: 5:4, 7:5, 2.35:1, 1.85:1</span>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <input 
                    type="text" 
                    id="input-custom-aspect-ratio" 
                    value="${E||""}" 
                    placeholder="Contoh: 5:4 atau 2.35:1"
                    style="flex: 1; background: rgba(15, 23, 42, 0.8); border: 1px solid ${O?"#ef4444":"rgba(56, 189, 248, 0.3)"}; border-radius: 6px; padding: 0.5rem 0.75rem; color: #f1f5f9; font-size: 0.85rem; font-family: var(--font-mono);"
                  />
                </div>
                ${O?`
                  <div style="color: #f87171; font-size: 0.735rem; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
                    <span>⚠️</span> <span>${O}</span>
                  </div>
                `:`
                  <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">
                    💡 Pastikan kedua angka bernilai positif lebih besar dari nol.
                  </div>
                `}
              </div>
            `:""}
          </div>
        </section>

        <!-- Generation Trigger Action Button -->
        <div style="display: flex; justify-content: flex-end; margin-top: 0.25rem;">
          <button 
            type="button" 
            class="btn btn-primary" 
            id="btn-generate-variations" 
            style="padding: 0.65rem 1.75rem; font-size: 0.95rem; font-weight: 700; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border: 1px solid #38bdf8; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);"
            ${_?"disabled":""}
          >
            ${_?"⏳ Sedang Meracik Ide Variasi...":`✨ Hasilkan ${T} Ide Variasi Prompt`}
          </button>
        </div>
      </div>

      <!-- 4. Hasil Ide Variasi Prompt -->
      <section class="panel analyzer-card" id="card-variation-results" style="margin-top: 1.25rem;">
        <div class="card-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 0.75rem;">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
            <h2>HASIL IDE VARIASI PROMPT (${N.length} Variasi)</h2>
          </div>
          ${L!=null&&L.notice?`
            <span style="font-size: 0.75rem; color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid rgba(56, 189, 248, 0.25);">
              ℹ️ ${L.notice}
            </span>
          `:""}
        </div>

        <div style="margin-top: 0.85rem;">
          ${N.length>0?`
            <div style="display: grid; grid-template-columns: 1fr; gap: 0.85rem;" id="variation-cards-list">
              ${N.map((U,G)=>`
                <div class="variation-item-card" style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.85rem 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.45rem; flex-wrap: wrap;">
                      <span style="font-weight: 800; font-size: 0.9rem; color: #38bdf8;">${U.title||`Variasi ${G+1}`}</span>
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #7dd3fc; font-size: 0.68rem;">
                        ${U.approachLabel||"Kreatif"}
                      </span>
                      ${U.aspectRatioApplied?`
                        <span class="badge badge-aspect-ratio" style="background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.35); color: #d8b4fe; font-size: 0.68rem; font-weight: 600;">
                          📐 ${U.aspectRatioApplied}
                        </span>
                      `:""}
                    </div>
                    <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap;">
                      <button type="button" class="btn btn-outline btn-xs btn-copy-variation" data-idx="${G}" title="Salin prompt variasi ini">
                        📋 Salin
                      </button>
                      <button type="button" class="btn btn-primary btn-xs btn-set-main-prompt" data-idx="${G}" style="background: #0284c7; border-color: #0369a1;" title="Gunakan sebagai prompt utama dan buka tab Analyzer">
                        🎯 Jadikan Prompt Utama
                      </button>
                      <button type="button" class="btn btn-outline btn-xs btn-optimize-variation" data-idx="${G}" title="Kirim ke Analyzer untuk langsung dianalisa mendalam">
                        ⚡ Optimalkan
                      </button>
                      <button type="button" class="btn btn-outline btn-xs btn-further-variation" data-idx="${G}" title="Jadikan basis baru untuk variasi lanjutan">
                        🔄 Variasi Lanjutan
                      </button>
                    </div>
                  </div>

                  <!-- Prompt Text Monospace -->
                  <div style="background: rgba(10, 15, 29, 0.9); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.835rem; color: #f1f5f9; line-height: 1.45; word-break: break-word;">
                    ${U.prompt}
                  </div>

                  <!-- Metadata & Locks Info -->
                  <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem; font-size: 0.725rem;">
                    <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
                      <span style="color: var(--text-muted);">Shorthand:</span>
                      ${U.shorthands&&U.shorthands.length>0?U.shorthands.map(J=>`<code style="color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 0.05rem 0.3rem; border-radius: 3px;">${J}</code>`).join(" "):'<span style="color: var(--text-muted);">-</span>'}
                    </div>
                    ${U.lockedElementsApplied&&U.lockedElementsApplied.length>0?`
                      <div style="display: flex; align-items: center; gap: 0.3rem; color: #6ee7b7;">
                        <span>🛡️ Terkunci:</span>
                        <span>${U.lockedElementsApplied.join(", ")}</span>
                      </div>
                    `:""}
                  </div>
                  ${U.explanation?`
                    <div style="margin-top: 0.35rem; font-size: 0.735rem; color: var(--text-muted); font-style: italic;">
                      💡 ${U.explanation}
                    </div>
                  `:""}
                </div>
              `).join("")}
            </div>
          `:`
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
  `,bindEvents(U){const G=U.querySelector("#page-prompt-variations");if(!G)return;G.querySelectorAll('input[name="source_type"]').forEach(H=>{H.addEventListener("change",()=>{e&&e(H.value)})});const J=G.querySelector("#btn-quick-to-analyzer");J&&b&&J.addEventListener("click",()=>b("analyzer"));const K=G.querySelector("#input-custom-prompt");K&&t&&K.addEventListener("input",()=>{t(K.value)});const na=G.querySelector("#btn-clear-custom-prompt");na&&K&&t&&na.addEventListener("click",()=>{K.value="",t("")});const ia=G.querySelector("#dropzone-variation-image"),ga=G.querySelector("#input-variation-file");ia&&ga&&(ia.addEventListener("click",()=>ga.click()),ga.addEventListener("change",H=>{var q;const Q=(q=H.target.files)==null?void 0:q[0];Q&&i&&i(Q)}),ia.addEventListener("dragover",H=>{H.preventDefault(),ia.style.borderColor="#38bdf8",ia.style.background="rgba(56, 189, 248, 0.15)"}),ia.addEventListener("dragleave",H=>{H.preventDefault(),ia.style.borderColor="rgba(56, 189, 248, 0.35)",ia.style.background="rgba(15, 23, 42, 0.4)"}),ia.addEventListener("drop",H=>{var q;H.preventDefault(),ia.style.borderColor="rgba(56, 189, 248, 0.35)",ia.style.background="rgba(15, 23, 42, 0.4)";const Q=(q=H.dataTransfer.files)==null?void 0:q[0];Q&&i&&i(Q)}));const P=G.querySelector("#btn-remove-variation-image");P&&r&&P.addEventListener("click",()=>r()),G.querySelectorAll(".btn-count-toggle").forEach(H=>{H.addEventListener("click",()=>{const Q=parseInt(H.getAttribute("data-count"),10);Q&&s&&s(Q)})}),G.querySelectorAll(".cb-approach").forEach(H=>{H.addEventListener("change",()=>{n&&n(H.value,H.checked)})}),G.querySelectorAll(".cb-lock").forEach(H=>{H.addEventListener("change",()=>{const Q=H.getAttribute("data-lock");Q&&l&&l(Q,H.checked)})});const W=G.querySelector("#input-custom-lock");W&&d&&W.addEventListener("input",()=>{d(W.value)}),G.querySelectorAll(".btn-aspect-ratio-preset").forEach(H=>{H.addEventListener("click",()=>{const Q=H.getAttribute("data-ratio");Q&&c&&c(Q)})});const ha=G.querySelector("#input-custom-aspect-ratio");ha&&g&&ha.addEventListener("input",()=>{g(ha.value)});const ba=G.querySelector("#btn-generate-variations");ba&&p&&ba.addEventListener("click",()=>p()),G.querySelectorAll(".btn-copy-variation").forEach(H=>{H.addEventListener("click",()=>{const Q=parseInt(H.getAttribute("data-idx"),10),q=N[Q];q&&k&&k(q.prompt)})}),G.querySelectorAll(".btn-set-main-prompt").forEach(H=>{H.addEventListener("click",()=>{const Q=parseInt(H.getAttribute("data-idx"),10),q=N[Q];q&&u&&u(q.prompt)})}),G.querySelectorAll(".btn-optimize-variation").forEach(H=>{H.addEventListener("click",()=>{const Q=parseInt(H.getAttribute("data-idx"),10),q=N[Q];q&&m&&m(q.prompt)})}),G.querySelectorAll(".btn-further-variation").forEach(H=>{H.addEventListener("click",()=>{const Q=parseInt(H.getAttribute("data-idx"),10),q=N[Q];q&&h&&h(q.prompt)})})}}}function vn({currentValue:o="",onAnalyze:a,onReset:e,onClear:t,onSelectPreset:i,isAnalyzing:r=!1,isOnlineActive:s=!1,activeMode:n="ANALISA_PROMPT",onModeChange:l,uploadedImage:d=null,onImageSelected:c,onImageRemoved:g,selectedAspectRatio:p="auto",onAspectRatioChange:k,twoWorldsConfig:u=null,onTwoWorldsConfigChange:m,colourGradingConfig:h=null,onColourGradingConfigChange:b,onResetGrading:f,batchImages:y=[],activeBatchIndex:w=0,onSelectBatchImage:v,promptAnalysisAspectRatio:T="auto",promptAnalysisCustomAspectRatio:R="",promptAnalysisAspectRatioError:A=null,onPromptAnalysisAspectRatioChange:S,onPromptAnalysisCustomAspectRatioChange:E,promptOptimizerState:O={},onPromptOptimizerStateChange:N,onRunPromptOptimization:_,onCopyOptimizedPrompt:L,onSetAsMainPrompt:I,onOptimizeAgain:x,optimalPromptForOptimizer:$="",variationListForOptimizer:D=[],promptVariationsState:B={},previousAnalysisForVariations:U=null,onVariationSourceTypeChange:G,onVariationCustomPromptChange:J,onVariationImageSelected:K,onVariationImageRemoved:na,onVariationCountChange:ia,onToggleVariationApproach:ga,onToggleVariationLock:P,onCustomVariationLockChange:W,onVariationAspectRatioChange:ha,onVariationCustomAspectRatioChange:ba,onGenerateVariations:H,onCopyVariationPrompt:Q,onSetMainPromptFromVariation:q,onOptimizeVariation:ja,onMakeBaseForNextVariation:wa,showNotification:Na}){var sa;const Ra=mn(i),ya=n==="COLOUR_GRADING"?fn({config:h||Ya,uploadedImage:d,onConfigChange:b,onResetGrading:f,batchImages:y,activeBatchIndex:w,onSelectBatchImage:v,showNotification:Na}):null,Ta=n==="PROMPT_OPTIMIZER"?yn({state:O,optimalPrompt:$,variationList:D,onStateChange:N,onRunOptimization:_,onCopyPrompt:L,onSetAsMainPrompt:I,onOptimizeAgain:x}):null,Ea=n==="PROMPT_VARIATIONS"?An({state:B,previousAnalysis:U,onSourceTypeChange:G,onCustomPromptChange:J,onImageSelected:K,onImageRemoved:na,onVariationCountChange:ia,onToggleApproach:ga,onToggleLock:P,onCustomLockChange:W,onAspectRatioChange:ha,onCustomAspectRatioChange:ba,onGenerate:H,onCopyPrompt:Q,onSetMainPrompt:q,onOptimizePrompt:ja,onMakeBaseForNextVariation:wa,onNavigateTab:l,isEmbedded:!0}):null,Ia=d?d.detectedAspectRatio||(d.width&&d.height?Ae(d.width,d.height):"1:1"):null;let j="💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik.";n==="BACKGROUND_ANALYSIS"?j="💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk profil latar belakang &amp; acuan spasial penempatan subjek.":n==="TWO_WORLDS"?j="💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk sintesis prompt 2 Dunia &amp; rekomendasi shorthand.":n==="IMAGE_TO_PROMPT"?j="💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk menghasilkan deskripsi visual 13 atribut &amp; rekomendasi shorthand.":n==="PROMPT_VARIATIONS"?j="⭐ Menghasilkan variasi prompt terarah dengan 3 sumber input, pendekatan kreatif, Instruction Lock, dan rasio fleksibel.":n==="COLOUR_GRADING"&&d?j="💡 Mendiagnosis parameter warna, tone curve, saturasi &amp; merekomendasikan seluruh shorthand colour grading yang relevan tanpa batasan jumlah.":n==="SHORTHAND_IMPROVE"&&d?j="💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":n==="PROMPT_OPTIMIZER"&&(j="✨ Mengoptimalkan prompt menjadi versi bersih, tajam, kaya detail, dan terstruktur sesuai mode &amp; shorthand yang dipilih.");let C=s?"🌐 Analisis Prompt":"Analisis Prompt";return r?n==="BACKGROUND_ANALYSIS"?C="🏞️ Menganalisis Latar Belakang...":n==="TWO_WORLDS"?C="🌐 Menganalisis 2 Dunia...":n==="IMAGE_TO_PROMPT"?C="🔍 Menganalisis Gambar...":n==="COLOUR_GRADING"&&d?C="🎨 Mendiagnosis Colour Grading...":n==="SHORTHAND_IMPROVE"&&d?C="🛠️ Mendiagnosis Gambar...":n==="COLOUR_GRADING"?C="🎨 Menganalisis Colour Grading...":C=s?"Mencari Online...":"Menganalisis...":n==="BACKGROUND_ANALYSIS"?C="🏞️ Analisa Latar Belakang":n==="TWO_WORLDS"?C="🌐 Analisa 2 Dunia → Prompt":n==="IMAGE_TO_PROMPT"?C="🔍 Analisa Gambar → Prompt":n==="COLOUR_GRADING"&&d?C="🎨 Analisa Colour Grading Gambar":n==="COLOUR_GRADING"?C="🎨 Analisa Colour Grading":n==="SHORTHAND_IMPROVE"&&d?C="🛠️ Analisa Perbaikan Gambar":n==="SHORTHAND_IMPROVE"&&(C="🛠️ Analisa Shorthand &amp; Perbaikan"),{html:`
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT &amp; MODE ANALISIS</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          ${n!=="IMAGE_TO_PROMPT"&&n!=="TWO_WORLDS"&&n!=="BACKGROUND_ANALYSIS"&&n!=="PROMPT_OPTIMIZER"&&n!=="PROMPT_VARIATIONS"?`
            <button type="button" class="btn btn-outline btn-xs" id="btn-clear-prompt" title="Kosongkan teks">
              Kosongkan
            </button>
          `:""}
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-app" title="Kembalikan aplikasi ke keadaan awal">
            Reset
          </button>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="analysis-mode-selector" id="mode-tabs-container">
        <button type="button" class="mode-tab-btn ${n==="ANALISA_PROMPT"?"active":""}" data-mode="ANALISA_PROMPT">
          <span>📝</span>
          <span>Analisa Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="IMAGE_TO_PROMPT"?"active":""}" data-mode="IMAGE_TO_PROMPT">
          <span>🔍</span>
          <span>Analisa Gambar → Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="PROMPT_VARIATIONS"?"active":""}" data-mode="PROMPT_VARIATIONS">
          <span>⭐</span>
          <span>Ide Variasi Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="BACKGROUND_ANALYSIS"?"active":""}" data-mode="BACKGROUND_ANALYSIS">
          <span>🏞️</span>
          <span>Analisa Latar Belakang/background</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="TWO_WORLDS"?"active":""}" data-mode="TWO_WORLDS">
          <span>🌐</span>
          <span>2 dunia</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="SHORTHAND_IMPROVE"?"active":""}" data-mode="SHORTHAND_IMPROVE">
          <span>🛠️</span>
          <span>Analisa Shorthand Perbaikan Gambar</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="COLOUR_GRADING"?"active":""}" data-mode="COLOUR_GRADING">
          <span>🎨</span>
          <span>colour grading</span>
        </button>
        <button type="button" class="mode-tab-btn ${n==="PROMPT_OPTIMIZER"?"active":""}" data-mode="PROMPT_OPTIMIZER">
          <span>✨</span>
          <span>Prompt Optimizer</span>
        </button>
      </div>

      <!-- Online Shorthand Search Status Banner -->
      <div class="online-status-banner ${s?"banner-online-active":"banner-online-inactive"}" id="prompt-online-status-banner">
        <div class="banner-inner">
          ${s?`
            <div class="banner-content">
              <span class="status-pulse-dot"></span>
              <strong class="banner-title">🌐 Pencarian Online Shorthand: AKTIF</strong>
              <span class="banner-desc">Analisis terbuka &amp; tidak terbatas — Memetakan konsep, objek, aktivitas, gaya, kanvas/outpaint, atau istilah baru ke shorthand AI yang relevan.</span>
            </div>
          `:`
            <div class="banner-content">
              <span class="status-offline-dot">⚪</span>
              <strong class="banner-title">🖥️ Pencarian Online Shorthand: TIDAK AKTIF</strong>
              <span class="banner-desc">Berjalan dalam Mode Heuristik Lokal. Sambungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online AI terbuka tanpa batas.</span>
            </div>
          `}
        </div>
      </div>

      <!-- IMAGE UPLOAD SECTION (MODE 2, BACKGROUND, MODE 2 DUNIA, MODE 3 & MODE COLOUR GRADING) -->
      ${n==="IMAGE_TO_PROMPT"||n==="BACKGROUND_ANALYSIS"||n==="TWO_WORLDS"||n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          <input type="file" id="image-file-input" ${n==="COLOUR_GRADING"?"multiple":""} accept="image/*, .jfif, .jpg, .jpeg, .png, .webp" style="display: none;" />
          ${d?`
            <div class="image-preview-card">
              <img src="${d.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${d.name||"reference-source.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${d.size?(d.size/1024).toFixed(1)+" KB":"Gambar Sumber"} &bull;
                  <span style="color: ${n==="SHORTHAND_IMPROVE"?"#c084fc":n==="COLOUR_GRADING"?"#ec4899":n==="BACKGROUND_ANALYSIS"?"#10b981":"#38bdf8"};">
                    ${n==="SHORTHAND_IMPROVE"?"SOURCE OF TRUTH Diagnosis Perbaikan":n==="COLOUR_GRADING"?"SOURCE OF TRUTH Diagnosis Colour Grading":n==="BACKGROUND_ANALYSIS"?"SOURCE OF TRUTH Visual (Latar Belakang)":n==="TWO_WORLDS"?"SOURCE OF TRUTH Visual (2 Dunia)":"SOURCE OF TRUTH Visual"}
                  </span>
                </div>
              </div>
              <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                <button type="button" class="btn btn-outline btn-xs" id="btn-change-image" title="Ganti gambar dengan file lain">
                  🔄 Ganti Gambar
                </button>
                <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-remove-image" title="Hapus gambar">
                  ✕ Hapus Gambar
                </button>
              </div>
            </div>
          `:`
            <div class="image-dropzone" id="image-dropzone">
              <svg class="dropzone-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
              <div class="dropzone-text">
                ${n==="COLOUR_GRADING"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; di-colour grade di sini, atau klik untuk memilih file":n==="SHORTHAND_IMPROVE"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini, atau klik untuk memilih file":n==="BACKGROUND_ANALYSIS"?"Tarik &amp; lepas gambar yang ingin dianalisis latar belakangnya di sini, atau klik untuk memilih file (Analisa Latar Belakang)":n==="TWO_WORLDS"?"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file (Mode 2 Dunia)":"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file"}
              </div>
              <div class="dropzone-hint">
                ${n==="COLOUR_GRADING"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis palet warna, tonal curve, temperature, kontras &amp; merekomendasikan shorthand colour grading (UNLIMITED)":n==="SHORTHAND_IMPROVE"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis kondisi visual &amp; merekomendasikan shorthand perbaikan (UNLIMITED)":n==="BACKGROUND_ANALYSIS"?"Format yang didukung: JPG, PNG, WEBP (Fokus analisis mendalam pada latar belakang, dekorasi, pencahayaan &amp; hubungan spasial subjek)":n==="TWO_WORLDS"?"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual konsep 2 Dunia)":"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)"}
              </div>
            </div>
          `}
          <!-- ASPECT RATIO SELECTOR (V3.3.5) -->
          <div class="aspect-ratio-control-panel" id="aspect-ratio-control-panel">
            <div class="aspect-ratio-control-header">
              <div class="aspect-ratio-title">
                <span class="aspect-ratio-icon">📐</span>
                <span class="aspect-ratio-heading">Pilihan Rasio Aspek:</span>
                <span class="aspect-ratio-badge" id="aspect-ratio-badge">
                  ${p==="auto"||p==="Otomatis"||!p?Ia?`Otomatis (Asli: ${Ia})`:"Otomatis (Dimensi Asli)":`Target: ${p}`}
                </span>
              </div>
              <div class="aspect-ratio-hint">
                ${p==="auto"||p==="Otomatis"||!p?d?`Mendeteksi aspek rasio asli gambar (${d.width||"?"}×${d.height||"?"}px → ${Ia}). Proporsi subjek dipertahankan tanpa distorsi.`:"Mendeteksi rasio aspek otomatis dari dimensi asli gambar yang diunggah.":`Mengarahkan rasio target kanvas ke ${p} tanpa stretching atau perubahan proporsi subjek.`}
              </div>
            </div>
            <div class="aspect-ratio-btn-group" role="radiogroup" aria-label="Pilihan Rasio Aspek">
              ${["Otomatis","1:1","2:3","3:2","3:4","4:3","9:16","16:9"].map(M=>`
                  <button 
                    type="button" 
                    class="aspect-ratio-btn ${M==="Otomatis"&&(p==="auto"||p==="Otomatis"||!p)||p===M?"active":""}" 
                    data-ratio="${M}"
                    id="btn-aspect-${M.replace(":","-")}"
                    title="${M==="Otomatis"?"Deteksi otomatis dari dimensi asli gambar":`Pilih rasio target ${M}`}"
                  >
                    ${M==="Otomatis"?"🔄 Otomatis":M}
                  </button>
                `).join("")}
            </div>
          </div>
        </div>
      `:""}

      <!-- 2 DUNIA PARAMETER PANEL (V3.5 PATCH ONLY - KHUSUS TAB 2 DUNIA) -->
      ${n==="TWO_WORLDS"?`
        <div class="two-worlds-config-panel" id="two-worlds-config-panel">
          <div class="two-worlds-header">
            <div class="two-worlds-title">
              <span>🌐</span>
              <span>PARAMETER MODIFIKASI KHUSUS 2 DUNIA</span>
            </div>
            <span class="two-worlds-badge">SOURCE OF TRUTH V3.5</span>
          </div>

          <!-- 1. CUSTOM REQUEST -->
          <div class="two-worlds-field">
            <label class="two-worlds-label" for="tw-custom-request">
              <span>✍️</span>
              <span>1. CUSTOM REQUEST (Instruksi Tambahan)</span>
            </label>
            <div class="two-worlds-hint">
              Instruksi tambahan untuk memodifikasi <strong>PROMPT OPTIMAL</strong>. Karakter/subjek asli tetap dipertahankan utuh kecuali diminta secara eksplisit.
            </div>

            <!-- PROMPT TEMPLATES (Dropdown Pilihan Cepat Template) -->
            <div style="margin-top: 0.5rem; margin-bottom: 0.45rem;">
              <label class="two-worlds-label" for="tw-prompt-template" style="font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.25rem;">
                <span>📋</span>
                <span>PROMPT TEMPLATES:</span>
              </label>
              <select id="tw-prompt-template" class="two-worlds-select" style="font-size: 0.8rem; padding: 0.45rem 0.65rem;">
                ${Ie.map(M=>`
                  <option value="${M.id}">${M.label}</option>
                `).join("")}
              </select>
            </div>

            <textarea 
              id="tw-custom-request" 
              class="two-worlds-textarea" 
              rows="3" 
              placeholder="Contoh: Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."
            >${(u==null?void 0:u.customRequest)||""}</textarea>
          </div>

          <!-- DEMOGRAFI SUBJEK: JENIS KELAMIN, USIA, RAS/ETNIS -->
          <div class="two-worlds-grid-row">
            <!-- 2. JENIS KELAMIN SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-gender">
                <span>👤</span>
                <span>2. JENIS KELAMIN SUBYEK</span>
              </label>
              <select id="tw-gender" class="two-worlds-select">
                ${Lt.map(M=>`
                  <option value="${M}" ${(u==null?void 0:u.gender)===M||!(u!=null&&u.gender)&&M.startsWith("Auto")?"selected":""}>${M}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Diterapkan pada subjek/karakter tambahan atau karakter yang diminta.</div>
            </div>

            <!-- 3. USIA KARAKTER -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-age">
                <span>🎂</span>
                <span>3. USIA KARAKTER</span>
              </label>
              <select id="tw-age" class="two-worlds-select">
                ${Ct.map(M=>`
                  <option value="${M}" ${(u==null?void 0:u.age)===M||!(u!=null&&u.age)&&M.startsWith("Auto")?"selected":""}>${M}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Pilihan Auto atau 1 s/d 50 tahun untuk karakter yang dibuat.</div>
            </div>

            <!-- 4. RAS / ETNIS -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-ethnicity">
                <span>🌍</span>
                <span>4. RAS / ETNIS</span>
              </label>
              <select id="tw-ethnicity" class="two-worlds-select">
                ${rt.map(M=>`
                  <option value="${M}" ${(u==null?void 0:u.ethnicity)===M||!(u!=null&&u.ethnicity)&&M.startsWith("Auto")?"selected":""}>${M}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Auto (Smart Detection) atau etnis spesifik karakter.</div>
            </div>
          </div>

          <!-- VISUAL STYLE: STYLE SUBYEK & ENVIRONMENT STYLE -->
          <div class="two-worlds-grid-row">
            <!-- 5. STYLE SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-subject-style">
                <span>🎨</span>
                <span>5. STYLE SUBYEK</span>
              </label>
              <select id="tw-subject-style" class="two-worlds-select">
                ${Le.map(M=>`
                  <option value="${M}" ${(u==null?void 0:u.subjectStyle)===M||!(u!=null&&u.subjectStyle)&&M.startsWith("Auto")?"selected":""}>${M}</option>
                `).join("")}
                ${u!=null&&u.subjectStyle&&!Le.includes(u.subjectStyle)?`
                  <option value="${u.subjectStyle}" selected>${u.subjectStyle}</option>
                `:""}
              </select>
              <input 
                type="text" 
                id="tw-custom-subject-style" 
                class="two-worlds-input" 
                placeholder="Ketik style subjek custom (misal: Neo-Renaissance Oil Painting)..." 
                value="${(u==null?void 0:u.customSubjectStyle)||""}" 
                style="display: ${(u==null?void 0:u.subjectStyle)==="Custom"?"block":"none"}; margin-top: 0.35rem;" 
              />
              <div class="two-worlds-hint">Hanya mengontrol tampilan visual, materialitas, rendering, dan tekstur subjek.</div>
            </div>

            <!-- 6. ENVIRONMENT STYLE -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-env-style">
                <span>🏞️</span>
                <span>6. ENVIRONMENT STYLE</span>
              </label>
              <select id="tw-env-style" class="two-worlds-select">
                ${de.map(M=>`
                  <option value="${M.name}" ${(u==null?void 0:u.environmentStyle)===M.name||!(u!=null&&u.environmentStyle)&&M.name.startsWith("Auto")?"selected":""}>${M.name}</option>
                `).join("")}
                ${u!=null&&u.environmentStyle&&!de.some(M=>M.name===u.environmentStyle)?`
                  <option value="${u.environmentStyle}" selected>${u.environmentStyle}</option>
                `:""}
              </select>
              <div class="two-worlds-desc-box" id="tw-env-desc">
                ${((sa=de.find(M=>M.name===((u==null?void 0:u.environmentStyle)||"Auto (Smart Detection)")))==null?void 0:sa.description)||"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."}
              </div>
              <div class="two-worlds-hint">Mengontrol estetika latar belakang &amp; atmosfer. Subjek asli tetap dipertahankan.</div>
            </div>
          </div>
        </div>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${n==="SHORTHAND_IMPROVE"?`
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan Gambar:</strong> 
          ${d?"Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: DIAGNOSTIC NOTICE -->
      ${n==="COLOUR_GRADING"?`
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #f472b6;">
          <strong>🎨 Mode Analisa Colour Grading:</strong> 
          ${d?"Gambar terpasang. Sistem akan mendiagnosis karakteristik warna (color balance, kurva kontras, shadow toning, highlight roll-off, saturasi, dll.) dan merekomendasikan shorthand colour grading profesional.":"Unggah gambar di atas untuk diagnosis karakter warna, kurva kontras, dan tone komprehensif, atau masukkan catatan preferensi colour grading di bawah."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: ADVANCED PANEL & PREVIEW (V3.6) -->
      ${n==="COLOUR_GRADING"&&ya?ya.html:""}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 / Colour Grading without image) -->
      ${n==="ANALISA_PROMPT"||(n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING")&&!d?`
        <div id="presets-container">
          ${Ra.html}
        </div>
      `:""}

      <!-- Textarea Input (Hanya untuk Mode 1, Mode 3, dan Colour Grading) -->
      ${n!=="IMAGE_TO_PROMPT"&&n!=="TWO_WORLDS"&&n!=="BACKGROUND_ANALYSIS"&&n!=="PROMPT_OPTIMIZER"&&n!=="PROMPT_VARIATIONS"?`
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
            ${(n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING")&&d?n==="COLOUR_GRADING"?"B. Catatan Colour Grading (Opsional / Preferensi Warna):":"B. Prompt Pengguna (Opsional / Catatan Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
          </label>
          <textarea 
            id="prompt-textarea" 
            class="textarea-prompt font-mono" 
            placeholder="${(n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING")&&d?n==="COLOUR_GRADING"?"Ketik preferensi atau catatan colour grading yang diinginkan (opsional, misal: tone sinematik hangat, teal and orange, moody film grain, muted shadows)...":"Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
          >${o||""}</textarea>
        </div>
      `:""}

      <!-- KONTROL RASIO HASIL GENERATE (V3.8 PATCH KHUSUS TAB ANALISA PROMPT) -->
      ${n==="ANALISA_PROMPT"?`
        <div class="prompt-aspect-ratio-panel" id="panel-prompt-aspect-ratio" style="background: rgba(15, 23, 42, 0.45); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 0.65rem 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.45rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="font-size: 0.95rem;">📐</span>
              <label for="select-prompt-aspect-ratio" style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin: 0; cursor: pointer;">
                Rasio Hasil Generate
              </label>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span class="badge" id="badge-prompt-ratio-status" style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 0.725rem; font-weight: 700;">
                ${T==="auto"?"Otomatis":T==="custom"?R?`Custom: ${R}`:"Custom":`Target: ${T}`}
              </span>
            </div>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.6rem; align-items: center;">
            <div style="flex: 1; min-width: 220px;">
              <select 
                id="select-prompt-aspect-ratio" 
                class="form-select"
                style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; padding: 0.45rem 0.7rem; color: #f1f5f9; font-size: 0.825rem; cursor: pointer;"
              >
                <option value="auto" ${T==="auto"?"selected":""}>Otomatis (Ikuti Prompt)</option>
                <option value="1:1" ${T==="1:1"?"selected":""}>1:1 — Persegi</option>
                <option value="3:2" ${T==="3:2"?"selected":""}>3:2 — Landscape Foto</option>
                <option value="2:3" ${T==="2:3"?"selected":""}>2:3 — Portrait Foto</option>
                <option value="4:3" ${T==="4:3"?"selected":""}>4:3 — Landscape Klasik</option>
                <option value="3:4" ${T==="3:4"?"selected":""}>3:4 — Portrait Klasik</option>
                <option value="16:9" ${T==="16:9"?"selected":""}>16:9 — Widescreen</option>
                <option value="9:16" ${T==="9:16"?"selected":""}>9:16 — Vertikal / Mobile</option>
                <option value="21:9" ${T==="21:9"?"selected":""}>21:9 — Ultrawide</option>
                <option value="custom" ${T==="custom"?"selected":""}>Bebas / Custom</option>
              </select>
            </div>

            ${T==="custom"?`
              <div style="flex: 1; min-width: 200px; display: flex; gap: 0.4rem; align-items: center;" id="container-prompt-custom-ratio">
                <input 
                  type="text" 
                  id="input-prompt-custom-aspect-ratio" 
                  value="${R||""}" 
                  placeholder="Format W:H (contoh: 5:4 atau 2.35:1)"
                  style="flex: 1; background: rgba(0, 0, 0, 0.35); border: 1px solid ${A?"#ef4444":"rgba(56, 189, 248, 0.35)"}; border-radius: 6px; padding: 0.45rem 0.65rem; color: #f1f5f9; font-size: 0.8rem; font-family: var(--font-mono);"
                />
              </div>
            `:""}
          </div>

          ${A?`
            <div id="error-prompt-custom-ratio" style="color: #ef4444; font-size: 0.725rem; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.25rem;">
              <span>⚠️</span> <span>${A}</span>
            </div>
          `:""}

          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.35;">
            ${T==="auto"?"💡 Mempertahankan parameter <code>--ar</code> dari prompt asli jika ada. Jika prompt tidak menyebutkan rasio, prompt tetap alami tanpa memaksakan parameter rasio.":T==="custom"?"💡 Masukkan perbandingan lebar:tinggi angka positif (contoh: <code>5:4</code> atau <code>2.35:1</code>). Otomatis diterapkan sebagai <code>--ar W:H</code> pada Prompt Optimal.":`💡 Parameter rasio terpilih akan diterapkan sebagai <code>--ar ${T}</code> pada PROMPT OPTIMAL dan menggantikan rasio lama secara bersih.`}
          </div>
        </div>
      `:""}

      <!-- PROMPT VARIATIONS PANEL (V3.8 PATCH) -->
      ${n==="PROMPT_VARIATIONS"&&Ea?Ea.html:""}

      <!-- PROMPT OPTIMIZER PANEL (V3.8 PATCH) -->
      ${n==="PROMPT_OPTIMIZER"&&Ta?Ta.html:""}

      <!-- Actions Bar (Hanya untuk Mode selain PROMPT_OPTIMIZER dan PROMPT_VARIATIONS) -->
      ${n!=="PROMPT_OPTIMIZER"&&n!=="PROMPT_VARIATIONS"?`
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${j}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${r?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${C}
        </button>
      </div>
      `:""}
    </section>
  `,bindEvents(M){n==="PROMPT_VARIATIONS"&&Ea&&Ea.bindEvents(M),n==="PROMPT_OPTIMIZER"&&Ta&&Ta.bindEvents(M),n==="COLOUR_GRADING"&&ya&&ya.bindEvents(M),(n==="ANALISA_PROMPT"||(n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING")&&!d)&&Ra.bindEvents(M);const ta=M.querySelector("#prompt-textarea"),Pa=M.querySelector("#btn-run-analysis"),La=M.querySelector("#btn-clear-prompt"),la=M.querySelector("#btn-reset-app"),Z=M.querySelector("#select-prompt-aspect-ratio"),$a=M.querySelector("#input-prompt-custom-aspect-ratio");Z&&Z.addEventListener("change",Y=>{S&&S(Y.target.value)}),$a&&$a.addEventListener("input",Y=>{E&&E(Y.target.value)}),M.querySelectorAll(".mode-tab-btn").forEach(Y=>{Y.addEventListener("click",()=>{const da=Y.getAttribute("data-mode");l&&da!==n&&l(da)})});const Ca=M.querySelector("#image-dropzone"),Sa=M.querySelector("#image-file-input"),Ha=M.querySelector("#btn-change-image"),Ma=M.querySelector("#btn-remove-image");if(Sa){let Y=function(F){return new Promise(V=>{if(!F)return V(null);const ra=F.type&&F.type.startsWith("image/"),pa=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(F.name||"");if(!ra&&!pa)return V(null);const fa=new FileReader;fa.onload=Oa=>{const z=Oa.target.result,ca=new Image;ca.onload=()=>{const ka=ca.naturalWidth||ca.width||800,Ga=ca.naturalHeight||ca.height||800;let ae=z,re=null,ge=null;try{let Va=ka,Fa=Ga;if(Va>1280||Fa>1280){const se=Math.min(1280/Va,1280/Fa);Va=Math.round(Va*se),Fa=Math.round(Fa*se)}const Wa=document.createElement("canvas");Wa.width=Va,Wa.height=Fa,Wa.getContext("2d").drawImage(ca,0,0,Va,Fa),re=Pe(Wa,{filename:F.name,targetAspectRatio:p}),n==="COLOUR_GRADING"&&(ge=Mt(Wa)),ae=Wa.toDataURL("image/jpeg",.88)}catch(be){console.warn("Canvas processing fallback:",be),ae=z,re=Pe(null,{filename:F.name,targetAspectRatio:p})}const he=Ae(ka,Ga);V({file:F,name:F.name,size:F.size,type:"image/jpeg",base64:ae,previewUrl:ae,width:ka,height:Ga,aspectRatio:he,detectedAspectRatio:he,visualTelemetry:re,colorTelemetry:ge})},ca.onerror=()=>{V({file:F,name:F.name,size:F.size,type:"image/jpeg",base64:z,previewUrl:z,width:0,height:0,visualTelemetry:null,colorTelemetry:null})},ca.src=z},fa.onerror=()=>V(null),fa.readAsDataURL(F)})};var ua=Y;Ca&&(Ca.addEventListener("click",()=>{Sa.click()}),Ca.addEventListener("dragover",F=>{F.preventDefault(),Ca.classList.add("dragover")}),Ca.addEventListener("dragleave",()=>{Ca.classList.remove("dragover")}),Ca.addEventListener("drop",F=>{F.preventDefault(),Ca.classList.remove("dragover"),F.dataTransfer.files&&F.dataTransfer.files.length>0&&(n==="COLOUR_GRADING"&&F.dataTransfer.files.length>1?da(Array.from(F.dataTransfer.files)):aa(F.dataTransfer.files[0]))})),Ha&&Ha.addEventListener("click",()=>{Sa.click()}),Sa.addEventListener("change",()=>{Sa.files&&Sa.files.length>0&&(n==="COLOUR_GRADING"&&Sa.files.length>1?da(Array.from(Sa.files)):aa(Sa.files[0]),Sa.value="")});async function da(F){const V=F.filter(pa=>{const fa=pa.type&&pa.type.startsWith("image/"),Oa=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(pa.name||"");return fa||Oa});if(V.length===0){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const ra=[];for(const pa of V){const fa=await Y(pa);fa&&ra.push(fa)}ra.length>0&&c&&c(ra[0],ra)}async function aa(F){if(!F)return;const V=F.type&&F.type.startsWith("image/"),ra=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(F.name||"");if(!V&&!ra){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const pa=await Y(F);pa&&c&&c(pa,[pa])}}if(Ma&&Ma.addEventListener("click",()=>{g&&g()}),M.querySelectorAll(".aspect-ratio-btn").forEach(Y=>{Y.addEventListener("click",da=>{da.preventDefault();const aa=Y.getAttribute("data-ratio");k&&k(aa)})}),Pa&&Pa.addEventListener("click",()=>{if(n==="IMAGE_TO_PROMPT"||n==="TWO_WORLDS"||n==="BACKGROUND_ANALYSIS"){if(!d){Sa&&Sa.click();return}a&&a("");return}const Y=ta?ta.value:"";a&&a(Y)}),La&&La.addEventListener("click",()=>{ta&&(ta.value=""),t&&t()}),la&&la.addEventListener("click",()=>{e&&e()}),ta&&ta.addEventListener("keydown",Y=>{(Y.ctrlKey||Y.metaKey)&&Y.key==="Enter"&&(Y.preventDefault(),a&&a(ta.value))}),n==="TWO_WORLDS"){const Y=M.querySelector("#tw-prompt-template"),da=M.querySelector("#tw-custom-request"),aa=M.querySelector("#tw-gender"),F=M.querySelector("#tw-age"),V=M.querySelector("#tw-ethnicity"),ra=M.querySelector("#tw-subject-style"),pa=M.querySelector("#tw-custom-subject-style"),fa=M.querySelector("#tw-env-style"),Oa=M.querySelector("#tw-env-desc"),z=(ca=null)=>{m&&m({customRequest:da?da.value:"",gender:aa?aa.value:"Auto (Smart Detection) mengikuti gambar unggahan",age:F?F.value:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:V?V.value:"Auto (Smart Detection)",subjectStyle:ra?ra.value:"Auto (Smart Detection)",customSubjectStyle:pa?pa.value:"",environmentStyle:fa?fa.value:"Auto (Smart Detection)"},ca)};Y&&Y.addEventListener("change",()=>{const ca=Y.value,ka=Ie.find(Ga=>Ga.id===ca);ka&&ka.id!=="none"&&ka.text&&da&&(da.value=ka.text,z("customRequest"))}),da&&da.addEventListener("input",()=>{if(Y&&Y.value!=="none"){const ca=Ie.find(ka=>ka.id===Y.value);ca&&da.value!==ca.text&&(Y.value="none")}z("customRequest")}),aa&&aa.addEventListener("change",()=>z("gender")),F&&F.addEventListener("change",()=>z("age")),V&&V.addEventListener("change",()=>z("ethnicity")),ra&&ra.addEventListener("change",()=>{const ca=ra.value==="Custom";pa&&(pa.style.display=ca?"block":"none",ca&&pa.focus()),z("subjectStyle")}),pa&&pa.addEventListener("input",()=>z("customSubjectStyle")),fa&&fa.addEventListener("change",()=>{const ca=fa.value,ka=de.find(Ga=>Ga.name===ca);Oa&&(Oa.textContent=ka?ka.description:""),z("environmentStyle")})}}}}function Tn(o=[],a,e="ANALISA_PROMPT"){const t=o&&o.length>0,i=e==="IMAGE_TO_PROMPT"?"D":"G",r=t?o.map(n=>{const l=n.type==="EDIT_VS_LOCK"||n.shorthandA&&n.shorthandA.includes("lock"),d=l?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${n.shorthandB} (Hapus ${n.shorthandA})`,c=l?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${n.shorthandA} (Hapus ${n.shorthandB})`,g=n.suggestion||En(n);return`
    <div class="conflict-banner" data-conflict-id="${n.id}" style="margin-bottom: 0.75rem;">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>DETEKSI KONFLIK &mdash; CONFLICT DETECTED</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${n.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${n.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${n.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${n.instructionA||n.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${n.instructionB||n.shorthandB}"</em>
        </span>
      </div>

      <!-- SARAN SOLUSI KONFLIK -->
      <div class="conflict-suggestion-box">
        <div class="conflict-suggestion-header">
          <svg class="icon-sm" viewBox="0 0 24 24" width="16" height="16" style="vertical-align: middle;"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
          <span>💡 SARAN SOLUSI:</span>
        </div>
        <div class="conflict-suggestion-text">
          ${g}
        </div>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${n.id}">
          ${d}
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${n.id}">
          ${c}
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${n.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `}).join(""):"";return{html:`
    <!-- CARD SHORTHAND KONFLIK (CONFLICT DETECTED) -->
    <section class="panel analyzer-card" id="card-conflicts">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: ${t?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">${i}</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${t?"badge-wajib":"badge-neutral"}">
          ${t?`${o.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${t?`
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${r}
        </div>
      `:`
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik shorthand. Seluruh instruksi dan elemen visual konsisten.</span>
        </div>
      `}
    </section>
  `,bindEvents(n){n.querySelectorAll(".btn-resolve").forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-action"),c=l.getAttribute("data-conflict-id");a&&a(c,d)})})}}}function En(o){if(o.suggestion)return o.suggestion;const a=o.shorthandA||"",e=o.shorthandB||"";if(o.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const t=a.includes("lock")?a:e,i=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${t}) dan terapkan instruksi ubah (${i}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${t}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${o.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function Sn({installedShorthands:o=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:t}){const i=o.length>0?o.map(n=>`
        <span class="shorthand-chip" data-code="${n}">
          <span>${n}</span>
          <button type="button" class="chip-remove-btn" data-code="${n}" title="Hapus ${n}">&times;</button>
        </span>
      `).join(""):'<span style="font-size: 0.8rem; color: var(--text-dim); font-style: italic;">Belum ada shorthand terpasang</span>';return{html:`
    <div class="installed-shorthands-bar">
      <div class="installed-title-row">
        <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.04em;">
          Shorthand Terpasang:
        </span>

        <!-- Add shorthand selector from catalog -->
        <div class="add-shorthand-controls">
          <select id="select-catalog-shorthand" class="select-input">
            <option value="">-- Pilih Shorthand dari Catalog --</option>
            ${a.filter(n=>!o.includes(n.code)).map(n=>`
      <option value="${n.code}">${n.code} - ${n.name}</option>
    `).join("")}
          </select>
          <button type="button" class="btn btn-secondary btn-xs" id="btn-add-shorthand" title="Pasang shorthand ke prompt">
            + Tambah
          </button>
        </div>
      </div>

      <div class="installed-chips-container" id="installed-chips-list">
        ${i}
      </div>
    </div>
  `,bindEvents(n){n.querySelectorAll(".chip-remove-btn").forEach(c=>{c.addEventListener("click",g=>{g.stopPropagation();const p=c.getAttribute("data-code");e&&e(p)})});const l=n.querySelector("#btn-add-shorthand"),d=n.querySelector("#select-catalog-shorthand");l&&d&&l.addEventListener("click",()=>{const c=d.value;c&&t&&t(c)})}}}const pt={UNIVERSAL:"universal"},le={quality:["lowres","worst quality","low quality","blurry","jpeg artifacts","compression artifacts","pixelated","oversaturated","grainy noise"],anatomy:["bad anatomy","bad hands","missing fingers","extra fingers","mutated hands","poorly drawn hands","poorly drawn face","mutation","deformed","extra limbs","missing limbs","floating limbs","disconnected limbs","malformed limbs","disfigured","bad body proportions"],styleContamination:["cgi","3d render","illustration","cartoon","anime","painting","plastic skin","waxy face","doll face","airbrushed skin","artificial look"],watermarkText:["text","watermark","signature","logo","username","artist name","copyright notice","timestamp"],compositionLighting:["overexposed","underexposed","harsh flash","blown out highlights","muddy shadows","awkward framing","cut off subject","bad perspective"]};function Rn(o="",a=[]){const e=(o||"").toLowerCase(),t=(a||[]).map(u=>(typeof u=="string"?u:u.code||"").toLowerCase()),i=/woman|man|girl|boy|person|portrait|face|model|female|male|selfie|pose|hand|eyes|skin/i.test(e)||t.some(u=>/facelock|bodyshape|agepreserve|hairlock|expressionlock/i.test(u)),r=/photo|raw|dslr|canon|sony|nikon|bokeh|lens|film|realistic|8k|hyperrealistic|cinematic/i.test(e)||t.some(u=>/cam_|lens_|raw|photorealistic/i.test(u)),s=/anime|manga|illustration|drawing|concept art|vector|cartoon|comic|pixiv/i.test(e),n=/anime|manga|illustration|drawing|concept art|vector|cartoon|comic|pixiv/i.test(e),l=/cgi|3d render|unreal engine|octane render|blender|3d model|3d animation/i.test(e),d=/motion blur|action blur|speed blur|dynamic blur/i.test(e),c=/low[- ]?key|dark shadows?|chiaroscuro|deep shadows?|silhouette|moody shadows?/i.test(e),g=/film grain|vintage grain|analog noise|grainy texture|kodak|fujifilm/i.test(e),p=/close[- ]?up|tight framing|cropped (subject|portrait|face)|macro shot/i.test(e),k=/(keep|preserve|show|showing|display|with|visible|featuring|contain).{0,40}(logo|watermark|text|brand|signature)|(brand|product|official) logo/i.test(e);return{hasHumanSubject:i,isPhotorealistic:r,isAnimeOrArt:s,hasLandscape:/landscape|scenery|mountain|city|nature|street|architecture|building/i.test(e),requestsAnime:n,requestsCgiOr3d:l,requestsMotionBlur:d,requestsLowKeyOrShadows:c,requestsFilmGrain:g,requestsCroppedOrFraming:p,requestsLogoOrText:k}}function In(o=[],a={}){const e=[];return{filtered:o.filter(i=>{const r=i.toLowerCase().trim();return a.requestsAnime&&["illustration","cartoon","anime","drawing","painting"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta gaya anime / ilustrasi"}),!1):a.requestsCgiOr3d&&["cgi","3d render"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta render CGI / 3D"}),!1):a.requestsMotionBlur&&["blurry"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta efek motion blur"}),!1):a.requestsLowKeyOrShadows&&["muddy shadows","underexposed"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta pencahayaan low-key / bayangan dramatis"}),!1):a.requestsFilmGrain&&["grainy noise"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta tekstur film grain"}),!1):a.requestsCroppedOrFraming&&["awkward framing","cut off subject"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta framing close-up / artistik"}),!1):a.requestsLogoOrText&&["logo","watermark","signature","text"].includes(r)?(e.push({term:i,reason:"Prompt positif meminta logo / watermark dipertahankan"}),!1):!0}),conflictsDetected:e}}function On({prompt:o="",installedShorthands:a=[],preset:e=pt.UNIVERSAL,activeCategories:t={quality:!0,anatomy:!0,styleContamination:!0,watermarkText:!0,compositionLighting:!0},customTerms:i=[],analysisStatus:r="IDLE"}={}){const s=o&&typeof o=="string"?o.trim():"";if(!s)return{negativePrompt:"",termCount:0,profile:{hasHumanSubject:!1,isPhotorealistic:!1,isAnimeOrArt:!1,hasLandscape:!1,requestsAnime:!1,requestsCgiOr3d:!1,requestsMotionBlur:!1,requestsLowKeyOrShadows:!1,requestsFilmGrain:!1,requestsCroppedOrFraming:!1,requestsLogoOrText:!1},activeCategories:t,terms:[],mode:"EMPTY",modeLabel:"MENUNGGU PROMPT OPTIMAL",conflictsDetected:[],conflictsResolved:[],emptyStateMessage:"Prompt Optimal belum tersedia. Lakukan analisis prompt terlebih dahulu untuk menghasilkan negative prompt otomatis.",effectivePrompt:""};const n=s.match(/\/[a-zA-Z0-9_-]+/g)||[],l=Array.from(new Set([...a||[],...n])),d=Rn(s,l);let c=[];t.quality&&c.push(...le.quality),t.anatomy&&d.hasHumanSubject&&c.push(...le.anatomy),t.styleContamination&&(c.push(...le.styleContamination),d.isAnimeOrArt&&c.push("photorealistic","real life photography","realistic texture")),t.watermarkText&&c.push(...le.watermarkText),t.compositionLighting&&c.push(...le.compositionLighting),Array.isArray(i)&&i.length>0&&i.forEach(h=>{const b=(h||"").trim();b&&!c.includes(b)&&c.push(b)});const g=In(c,d);c=g.filtered;const p=g.conflictsDetected,k=new Set,u=[];for(const h of c){if(!h)continue;const b=h.trim().toLowerCase();b&&!k.has(b)&&(k.add(b),u.push(b))}const m=u.length===0?"Tidak ditemukan kebutuhan negative prompt relevan atau seluruh kategori proteksi dinonaktifkan.":"";return{negativePrompt:u.join(", "),termCount:u.length,profile:d,activeCategories:t,terms:u,mode:"ANALYSIS",modeLabel:"TERHUBUNG KE PROMPT OPTIMAL",conflictsDetected:p,conflictsResolved:p,emptyStateMessage:m,effectivePrompt:s}}function wn(o=[]){const a={generator:"Prompt Shorthand Analyzer V3.8",exportedAt:new Date().toISOString(),totalItems:o.length,items:o.map((e,t)=>({id:e.id||`item_${t+1}`,title:e.title||`Variasi ${t+1}`,positivePrompt:e.positivePrompt||"",negativePrompt:e.negativePrompt||"",shorthands:Array.isArray(e.shorthands)?e.shorthands:[],wordCount:(e.positivePrompt||"").trim().split(/\s+/).filter(Boolean).length,nuance:e.nuance||"Default",timestamp:e.timestamp||new Date().toISOString()}))};return JSON.stringify(a,null,2)}function Pn(o=[]){return o.map((e,t)=>{const i=[];return o.length>1&&i.push(e.title?`=== PROMPT VARIATION ${t+1} === (${e.title})`:`=== PROMPT VARIATION ${t+1} ===`),e.positivePrompt&&e.positivePrompt.trim()&&(i.push("[POSITIVE PROMPT]"),i.push(e.positivePrompt.trim())),e.negativePrompt&&e.negativePrompt.trim()&&(i.push(e.positivePrompt&&e.positivePrompt.trim()?`
[NEGATIVE PROMPT]`:"[NEGATIVE PROMPT]"),i.push(e.negativePrompt.trim())),e.shorthands&&e.shorthands.length>0&&(i.push(`
[SHORTHANDS]`),i.push(e.shorthands.join(", "))),i.join(`
`)}).join(`

----------------------------------------

`)}function Qa(o){return o==null?'""':`"${String(o).replace(/"/g,'""')}"`}function Ln(o=[]){const a=["ID","Title","Positive Prompt","Negative Prompt","Installed Shorthands","Word Count","Nuance","Timestamp"],e=o.map((t,i)=>{const r=t.id||`PROMPT_${i+1}`,s=t.title||`Variasi ${i+1}`,n=t.positivePrompt||"",l=t.negativePrompt||"",d=Array.isArray(t.shorthands)?t.shorthands.join(";"):"",c=n.trim().split(/\s+/).filter(Boolean).length,g=t.nuance||"",p=t.timestamp||new Date().toISOString();return[Qa(r),Qa(s),Qa(n),Qa(l),Qa(d),c,Qa(g),Qa(p)].join(",")});return[a.join(","),...e].join(`\r
`)}function Oe(o,a,e="text/plain"){if(typeof window>"u"||typeof document>"u")return!1;try{const t=new Blob([a],{type:`${e};charset=utf-8;`}),i=URL.createObjectURL(t),r=document.createElement("a");return r.href=i,r.setAttribute("download",o),document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(i),200),!0}catch(t){return console.error("File download failed:",t),!1}}function we(o="",a="",e=3,t=[]){if(!o||typeof o!="string"||!o.trim())return[];const i=[{id:"variation_1",title:"Variasi 1 (Original)",positivePrompt:o,negativePrompt:a,shorthands:t,nuance:"Baseline Original"}],r=[{title:"Variasi 2 (Cinematic Golden Hour)",tag:"bathed in warm cinematic golden hour light, soft atmospheric haze, volumetric rim illumination",nuance:"Pencahayaan Golden Hour Hangat"},{title:"Variasi 3 (Dramatic High-Contrast Studio)",tag:"dramatic chiaroscuro lighting, deep natural contrast, sharp focal clarity, professional studio key light",nuance:"Pencahayaan Studio Kontras Tinggi"},{title:"Variasi 4 (Cool Atmospheric Twilight)",tag:"cool blue twilight ambiance, subtle diffused backlight, ethereal mood, balanced soft tones",nuance:"Nuansa Twilight Biru Dingin"},{title:"Variasi 5 (Wide Angle Environmental)",tag:"environmental wide-angle perspective, dynamic spatial depth, natural contextual surroundings",nuance:"Perspektif Spasial Dinamis"}];for(let s=0;s<Math.min(e-1,r.length);s++){const n=r[s],l=o.trim();let d;l.endsWith(".")?d=`${l.slice(0,-1)}, ${n.tag}.`:d=`${l}, ${n.tag}`,i.push({id:`variation_${s+2}`,title:n.title,positivePrompt:d,negativePrompt:a,shorthands:t,nuance:n.nuance})}return i}function Cn({optimalPrompt:o="",userPrompt:a="",installedShorthands:e=[],analysisStatus:t="IDLE",onCopyText:i,showNotification:r}){let s=pt.UNIVERSAL,n={quality:!0,anatomy:!0,styleContamination:!0,watermarkText:!0,compositionLighting:!0},l=[],d=!1;function c(){return On({prompt:o,installedShorthands:e,preset:s,activeCategories:n,customTerms:l,analysisStatus:t})}const g=c(),p=g.effectivePrompt?we(g.effectivePrompt,g.negativePrompt,3,e):[];let k="badge badge-empty",u="background: rgba(148, 163, 184, 0.15); border: 1px solid rgba(148, 163, 184, 0.35); color: #94a3b8; font-size: 0.68rem;";g.effectivePrompt&&(k="badge badge-analysis",u="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #6ee7b7; font-size: 0.68rem;");const m=f=>f.effectivePrompt?"Tidak ditemukan kebutuhan negative prompt relevan atau semua kategori proteksi dinonaktifkan.":"Prompt Optimal belum tersedia. Lakukan analisis prompt terlebih dahulu untuk menghasilkan negative prompt otomatis.",h=m(g);return{html:`
    <section class="panel analyzer-card card-negative-prompt" id="card-negative-prompt" style="margin-top: 1rem; border: 1px solid rgba(239, 68, 68, 0.25); background: rgba(15, 23, 42, 0.65);">
      <div class="card-header" style="border-bottom: 1px solid rgba(239, 68, 68, 0.15); padding-bottom: 0.75rem;">
        <div class="card-title" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
          <svg class="icon" viewBox="0 0 24 24" style="color: #f87171;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <h2 style="color: #fca5a5; font-size: 1rem; letter-spacing: 0.5px; margin: 0;">DYNAMIC NEGATIVE PROMPT BUILDER</h2>
          <span class="badge" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #f87171; color: #fca5a5; font-size: 0.7rem;">V3.8</span>
          <span class="${k}" id="negative-mode-badge" style="${u}">${g.modeLabel}</span>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span id="negative-terms-count" style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${g.termCount} istilah negatif aktif
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
      <div id="negative-conflicts-wrap" style="${g.conflictsDetected&&g.conflictsDetected.length>0?"margin-top: 0.6rem;":"display: none; margin-top: 0.6rem;"}">
        <div style="font-size: 0.735rem; color: #fbbf24; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 6px; padding: 0.35rem 0.65rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
          <span>🛡️ <strong>Konflik Terdeteksi & Disesuaikan:</strong></span>
          <span id="negative-conflicts-text">
            ${(g.conflictsDetected||[]).map(f=>`<code>${f.term}</code> (${f.reason})`).join(", ")}
          </span>
        </div>
      </div>

      <!-- Category Filter Chips -->
      <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; font-size: 0.775rem;">
          <span style="color: var(--text-muted); font-weight: 600;">Kategori Proteksi:</span>
          <button type="button" class="chip-filter ${n.quality?"active":""}" data-category="quality" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${n.quality?"rgba(239, 68, 68, 0.25)":"rgba(30, 41, 59, 0.5)"}; color: #f1f5f9;">
            🛡️ Kualitas
          </button>
          <button type="button" class="chip-filter ${n.anatomy?"active":""}" data-category="anatomy" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${n.anatomy?"rgba(239, 68, 68, 0.25)":"rgba(30, 41, 59, 0.5)"}; color: #f1f5f9;">
            🖐️ Anatomi &amp; Tangan
          </button>
          <button type="button" class="chip-filter ${n.styleContamination?"active":""}" data-category="styleContamination" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${n.styleContamination?"rgba(239, 68, 68, 0.25)":"rgba(30, 41, 59, 0.5)"}; color: #f1f5f9;">
            🎨 Anti-CGI / Plastik
          </button>
          <button type="button" class="chip-filter ${n.watermarkText?"active":""}" data-category="watermarkText" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${n.watermarkText?"rgba(239, 68, 68, 0.25)":"rgba(30, 41, 59, 0.5)"}; color: #f1f5f9;">
            🏷️ Anti-Watermark
          </button>
          <button type="button" class="chip-filter ${n.compositionLighting?"active":""}" data-category="compositionLighting" style="padding: 0.2rem 0.55rem; border-radius: 9999px; font-size: 0.75rem; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: ${n.compositionLighting?"rgba(239, 68, 68, 0.25)":"rgba(30, 41, 59, 0.5)"}; color: #f1f5f9;">
            💡 Pencahayaan
          </button>
        </div>

        <!-- Negative Prompt Text Area Box -->
        <div class="negative-prompt-display-box" style="background: rgba(10, 15, 29, 0.85); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-top: 0.35rem;">
          <p id="negative-prompt-text" class="font-mono" style="margin: 0; line-height: 1.5; color: ${g.negativePrompt?"#fca5a5":"#94a3b8"}; font-size: 0.85rem; word-break: break-word;">
            ${g.negativePrompt||h}
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
          ${p.map((f,y)=>`
            <div class="batch-variation-card" style="background: rgba(10, 15, 29, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.6rem 0.75rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; gap: 0.5rem; flex-wrap: wrap;">
                <div>
                  <span style="font-weight: 700; color: #38bdf8; font-size: 0.8rem;">${f.title}</span>
                  <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.4rem;">(${f.nuance||"Default"})</span>
                </div>
                <button type="button" class="btn btn-outline btn-xs btn-copy-var" data-idx="${y}" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">
                  Salin Variasi ${y+1}
                </button>
              </div>
              <div class="col-positive-variation">
                ${f.positivePrompt?`<p class="font-mono" style="margin: 0 0 0.35rem 0; font-size: 0.78rem; color: #f1f5f9; line-height: 1.4;">${f.positivePrompt}</p>`:""}
              </div>
              <div class="col-negative-variation" style="font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono); line-height: 1.35; background: rgba(0,0,0,0.25); padding: 0.3rem 0.5rem; border-radius: 4px;">
                <span style="color: #ef4444; font-weight: 700;">--no</span> ${f.negativePrompt}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `,bindEvents(f){const y=f.querySelector("#card-negative-prompt");if(!y)return;const w=()=>{const L=c(),I=y.querySelector("#negative-prompt-text"),x=y.querySelector("#negative-terms-count"),$=y.querySelector("#negative-mode-badge"),D=y.querySelector("#negative-conflicts-wrap"),B=y.querySelector("#negative-conflicts-text");I&&(I.textContent=L.negativePrompt||m(L),I.style.color=L.negativePrompt?"#fca5a5":"#94a3b8"),x&&(x.textContent=`${L.termCount} istilah negatif aktif`),$&&($.textContent=L.modeLabel,L.mode==="ANALYSIS"?($.className="badge badge-analysis",$.style.background="rgba(16, 185, 129, 0.15)",$.style.borderColor="#10b981",$.style.color="#6ee7b7"):L.mode==="ANALYSIS_FAILED"?($.className="badge badge-failed",$.style.background="rgba(245, 158, 11, 0.15)",$.style.borderColor="#f59e0b",$.style.color="#fcd34d"):($.className="badge badge-empty",$.style.background="rgba(148, 163, 184, 0.15)",$.style.borderColor="rgba(148, 163, 184, 0.35)",$.style.color="#94a3b8")),D&&B&&(L.conflictsDetected&&L.conflictsDetected.length>0?(D.style.display="block",B.innerHTML=L.conflictsDetected.map(U=>`<code>${U.term}</code> (${U.reason})`).join(", ")):D.style.display="none")};y.querySelectorAll(".chip-filter").forEach(L=>{L.addEventListener("click",()=>{const I=L.getAttribute("data-category");I&&n.hasOwnProperty(I)&&(n[I]=!n[I],L.style.background=n[I]?"rgba(239, 68, 68, 0.25)":"rgba(30, 41, 59, 0.5)",L.classList.toggle("active",n[I]),w())})});const v=y.querySelector("#btn-copy-negative-prompt");v&&v.addEventListener("click",()=>{const L=c();if(!L.effectivePrompt){r&&r("Prompt Optimal masih kosong. Belum ada negative prompt yang dapat disalin.","warning");return}if(!L.negativePrompt){r&&r("Tidak ada negative prompt aktif untuk disalin.","warning");return}navigator.clipboard.writeText(L.negativePrompt).then(()=>{r&&r("Negative prompt disalin ke clipboard!")}).catch(()=>{i&&i(L.negativePrompt)})});const T=y.querySelector("#btn-copy-combined-prompts");T&&T.addEventListener("click",()=>{const L=c(),I=L.effectivePrompt;if(!I){r&&r("Prompt Optimal masih kosong. Silakan lakukan analisis prompt terlebih dahulu.","warning");return}let x="";L.negativePrompt?x=`[PROMPT]
${I}

[NEGATIVE PROMPT]
${L.negativePrompt}`.trim():x=`[PROMPT]
${I}`.trim(),navigator.clipboard.writeText(x).then(()=>{r&&r("Prompt Positif & Negatif berhasil disalin!")}).catch(()=>{i&&i(x)})});const R=y.querySelector("#btn-toggle-batch-preview"),A=y.querySelector("#batch-variations-container"),S=y.querySelector("#batch-variations-list");R&&A&&S&&R.addEventListener("click",()=>{const L=c();if(!L.effectivePrompt){r&&r("Prompt Optimal masih kosong. Belum ada variasi batch yang dapat ditampilkan.","warning");return}if(d=!d,A.style.display=d?"block":"none",R.textContent=d?"✕ Tutup Variasi Batch":"✨ Lihat 3 Variasi Batch",d){const I=we(L.effectivePrompt,L.negativePrompt,3,e);S.innerHTML=I.map((x,$)=>`
              <div style="background: rgba(10, 15, 29, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 0.6rem 0.75rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; gap: 0.5rem; flex-wrap: wrap;">
                  <div>
                    <span style="font-weight: 700; color: #38bdf8; font-size: 0.8rem;">${x.title}</span>
                    <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.4rem;">(${x.nuance||"Default"})</span>
                  </div>
                  <button type="button" class="btn btn-outline btn-xs btn-copy-var" data-idx="${$}" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">
                    Salin Variasi ${$+1}
                  </button>
                </div>
                ${x.positivePrompt?`<p class="font-mono" style="margin: 0 0 0.35rem 0; font-size: 0.78rem; color: #f1f5f9; line-height: 1.4;">${x.positivePrompt}</p>`:""}
                <div style="font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono); line-height: 1.35; background: rgba(0,0,0,0.25); padding: 0.3rem 0.5rem; border-radius: 4px;">
                  <span style="color: #ef4444; font-weight: 700;">--no</span> ${x.negativePrompt}
                </div>
              </div>
            `).join(""),S.querySelectorAll(".btn-copy-var").forEach(x=>{x.addEventListener("click",()=>{const $=parseInt(x.getAttribute("data-idx"),10);if(I[$]){const D=I[$],B=D.positivePrompt?`${D.positivePrompt}

--no ${D.negativePrompt}`:D.negativePrompt;navigator.clipboard.writeText(B).then(()=>{r&&r(`Variasi ${$+1} berhasil disalin!`)})}})})}});const E=()=>{const L=c();return L.effectivePrompt?we(L.effectivePrompt,L.negativePrompt,3,e):[]},O=y.querySelector("#btn-export-json");O&&O.addEventListener("click",()=>{if(!c().effectivePrompt){r&&r("Prompt Optimal masih kosong. Tidak ada prompt untuk diekspor.","warning");return}const I=E(),x=wn(I);Oe("prompts-shorthand-v3.8.json",x,"application/json"),r&&r("File JSON berhasil diunduh!")});const N=y.querySelector("#btn-export-txt");N&&N.addEventListener("click",()=>{if(!c().effectivePrompt){r&&r("Prompt Optimal masih kosong. Tidak ada prompt untuk diekspor.","warning");return}const I=E(),x=Pn(I);Oe("prompts-shorthand-v3.8.txt",x,"text/plain"),r&&r("File TXT berhasil diunduh!")});const _=y.querySelector("#btn-export-csv");_&&_.addEventListener("click",()=>{if(!c().effectivePrompt){r&&r("Prompt Optimal masih kosong. Tidak ada prompt untuk diekspor.","warning");return}const I=E(),x=Ln(I);Oe("prompts-shorthand-v3.8.csv",x,"text/csv"),r&&r("File CSV berhasil diunduh!")})}}}function Nn({optimalPrompt:o="",userPrompt:a="",installedShorthands:e=[],catalog:t=[],isOnlineActive:i=!1,isEnriching:r=!1,analysisStatus:s="IDLE",onCopyPrompt:n,onEnrichPrompt:l,onRemoveShorthand:d,onAddShorthand:c,onCopyText:g,showNotification:p}){const k=Sn({installedShorthands:e,catalog:t,onRemoveShorthand:d,onAddShorthand:c}),u=Cn({optimalPrompt:o,userPrompt:a,installedShorthands:e,analysisStatus:s,onCopyText:g||n,showNotification:p}),m=ve(o),h=je(o);return cn(o,e),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${m} kata &bull; ~${h} token
          </span>
          <button 
            type="button" 
            class="btn btn-enrich btn-sm" 
            id="btn-enrich-ai" 
            ${!i||r||!o?"disabled":""}
            title="${i?o?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
          >
            ${r?"⏳ MEMPERKAYA...":"✨ PERKAYA DENGAN AI"}
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-main-prompt" title="Hanya salin main prompt tanpa metadata">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            SALIN PROMPT
          </button>
        </div>
      </div>

      <!-- Optimal Output String Display -->
      <div class="optimal-output-box" id="optimal-prompt-display">
        <span>${o||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${k.html}

      <!-- Dynamic Negative Prompt Builder & Multi-Format Exporter (V3.8) -->
      ${u.html}
    </section>
  `,bindEvents(f){k.bindEvents(f),u.bindEvents(f);const y=f.querySelector("#btn-copy-main-prompt");y&&y.addEventListener("click",()=>{n&&n(o)});const w=f.querySelector("#btn-enrich-ai");w&&w.addEventListener("click",()=>{l&&!r&&i&&o&&l()})}}}function xn(o){const{primaryAction:a="-",primaryTarget:e="-",summary:t="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:i="-",category:r="-"}=o||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${t}</p>
      </div>

      <div class="intent-grid">
        <div class="intent-meta-card">
          <span class="intent-meta-label">INTENT</span>
          <span class="intent-meta-value">${a}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">TARGET AREA</span>
          <span class="intent-meta-value">${e}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">KATEGORI</span>
          <span class="intent-meta-value">${r}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${i}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function jn(o=[]){const a=o.length>0?o.map(t=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${t.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${t.label}</span>
              ${t.shorthand?`<span class="badge badge-blue font-mono">${t.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${t.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${o.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function $n(o=[],a=[]){const e=o.length>0?o.map(i=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${i.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${i.label}</span>
              ${i.shorthand?`<span class="badge badge-wajib font-mono">${i.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${i.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Seluruh elemen visual selain instruksi edit dipertahankan secara otomatis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-locked-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">C</span>
          <h2>AREA YANG DIPERTAHANKAN / LOCKED</h2>
        </div>
        <span class="badge badge-blue">${o.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function Mn(o){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:t=""}=o||{};return{html:`
    <section class="panel analyzer-card" id="card-transformation">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">D</span>
          <h2>TRANSFORMASI VISUAL FROM &rarr; TO</h2>
        </div>
      </div>

      <div class="transform-flow-card">
        <!-- FROM BOX -->
        <div class="transform-box">
          <span class="transform-box-label">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            KONDISI AWAL (FROM)
          </span>
          <p class="transform-box-content">${a}</p>
        </div>

        <!-- ARROW ICON -->
        <div class="transform-arrow-box">
          <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </div>

        <!-- TO BOX -->
        <div class="transform-box" style="border-left: 3px solid var(--accent-blue);">
          <span class="transform-box-label" style="color: #60a5fa;">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            KONDISI TARGET (TO)
          </span>
          <p class="transform-box-content">${e}</p>
        </div>
      </div>

      ${t?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${t}</p>`:""}
    </section>
  `,bindEvents(){}}}function Gn({primaryShorthands:o=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:t=[],activeMode:i="ANALISA_PROMPT",onToggleShorthand:r}){const s=i==="IMAGE_TO_PROMPT",n=s?"A":"E",l=s?"B":"F",d=o.length>0?o:e.filter(u=>u.isPrimary!==!1&&u.priority==="WAJIB"),c=a.length>0?a:e.filter(u=>u.isPrimary===!1||u.priority!=="WAJIB"),g=d.length>0?d.map(u=>{var f,y,w;const m=t.includes(u.code),h=u.equivalentTo||((f=u.item)==null?void 0:f.equivalentTo)||[],b=u.functionGroup||((y=u.item)==null?void 0:y.functionGroup)||u.category;return`
          <div class="rec-card primary-rec-card ${m?"rec-card-active":""}" data-code="${u.code}">
            <div>
              <div class="rec-card-header">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="rec-code" style="color: #60a5fa; font-size: 1rem; font-weight: 800;">✓ ${u.code}</span>
                  <span class="badge badge-wajib">WAJIB</span>
                  <span class="badge badge-blue font-mono" style="font-size: 0.675rem;">REPRESENTATIF UTAMA</span>
                  ${u.source==="ONLINE"||u.isOnline?'<span class="badge badge-online">🌐 ONLINE</span>':""}
                </div>
                <span class="badge badge-neutral" style="font-size: 0.7rem;">${u.category}</span>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${u.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${u.target}</span></div>
                <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #c084fc;">${b}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${u.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${u.source==="ONLINE"||u.isOnline?"ONLINE":((w=u.item)==null?void 0:w.status)||"CORE"}</span></div>
                ${h.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${h.map(v=>`<span class="alias-tag font-mono">${v}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${m?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${m?"✅ Aktif Otomatis di Prompt Optimal":"⚠️ Dilepas dari Prompt"}
              </span>
              <button 
                type="button" 
                class="btn ${m?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${u.code}"
                title="${m?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${m?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',p=c.length>0?c.map(u=>{var y;const m=t.includes(u.code),h=u.equivalentTo||((y=u.item)==null?void 0:y.equivalentTo)||[],b=u.relationship||"CONTEXTUAL",f=u.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${m?"rec-card-active":""}" data-code="${u.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${u.code}" 
                    ${m?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${u.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${b}</span>
                  ${u.source==="ONLINE"||u.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${f}" style="font-size: 0.675rem;">${u.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${u.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${u.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${u.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${b}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${u.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${u.source==="ONLINE"||u.isOnline?"ONLINE":u.source||"CORE"}</span></div>
                ${h.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${h.map(w=>`<span class="alias-tag font-mono">${w}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${m?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${m?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
              </span>
              <button 
                type="button" 
                class="btn ${m?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
                data-code="${u.code}"
                title="${m?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
              >
                ${m?"Batal Centang":"+ Centang & Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand berhubungan yang relevan.</div>';return{html:`
    <!-- CARD: SHORTHAND UTAMA (PRIMARY SHORTHAND) -->
    <section class="panel analyzer-card" id="card-primary-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${n}</span>
          <h2>SHORTHAND UTAMA (PRIMARY SHORTHAND)</h2>
        </div>
        <span class="badge badge-blue">${d.length} Aktif Otomatis</span>
      </div>

      ${d.length===0&&c.length===0?`
        <div class="empty-recs-notice" style="padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); color: #93c5fd; font-size: 0.85rem; margin-bottom: 0.85rem;">
          ℹ️ Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.
        </div>
      `:""}

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Mewakili instruksi langsung dari prompt user. Otomatis terpasang [✓] dan masuk ke Prompt Optimal dengan deduplikasi fungsi terbaik.
      </p>

      <div class="rec-grid">
        ${g}
      </div>
    </section>

    <!-- CARD: SHORTHAND BERHUBUNGAN (RELATED SHORTHAND) -->
    <section class="panel analyzer-card" id="card-related-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${l}</span>
          <h2>SHORTHAND BERHUBUNGAN (RELATED SHORTHAND)</h2>
        </div>
        <span class="badge badge-purple">${c.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${p}
      </div>
    </section>
  `,bindEvents(u){u.querySelectorAll(".btn-toggle-rec").forEach(m=>{m.addEventListener("click",h=>{h.stopPropagation();const b=m.getAttribute("data-code");r&&r(b)})}),u.querySelectorAll(".related-checkbox").forEach(m=>{m.addEventListener("change",h=>{h.stopPropagation();const b=m.getAttribute("data-code");r&&r(b)})})}}}function _n(o=[],a=[],e){const t=o.length>0?o.map(r=>{const s=a.includes(r.code),n=r.equivalentTo||[],l=r.functionGroup||r.category;return`
      <div class="rec-card similar-rec-card ${s?"rec-card-active":""}" data-code="${r.code}">
        <div class="related-item-content">
          <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                class="similar-checkbox" 
                data-code="${r.code}" 
                ${s?"checked":""} 
                style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #0ea5e9;"
              />
              <span class="rec-code" style="color: #38bdf8; font-size: 1rem; font-weight: 800;">${r.code}</span>
            </label>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <span class="badge badge-blue" style="font-size: 0.675rem; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.4); color: #38bdf8;">ALTERNATIF</span>
              <span class="badge badge-neutral" style="font-size: 0.7rem;">${r.category}</span>
            </div>
          </div>

          <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
            <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${r.name}</span></div>
            <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${r.target||"Visual"}</span></div>
            <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #38bdf8;">${l}</span></div>
            <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${r.reason}</span></div>
            ${n.length>0?`
              <div style="margin-top: 0.2rem;">
                <strong style="color: var(--text-muted);">Alias Setara:</strong>
                ${n.map(d=>`<span class="alias-tag font-mono">${d}</span>`).join(" ")}
              </div>
            `:""}
          </div>
        </div>

        <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: ${s?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
            ${s?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
          </span>
          <button 
            type="button" 
            class="btn ${s?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
            data-code="${r.code}"
            title="${s?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
          >
            ${s?"Batal Centang":"+ Centang & Pasang"}
          </button>
        </div>
      </div>
    `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand alternatif tambahan yang terdeteksi.</div>';return{html:`
    <!-- CARD C: SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND) -->
    <section class="panel analyzer-card" id="card-similar-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: #0ea5e9; color: #fff;">C</span>
          <h2>SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND)</h2>
        </div>
        <span class="badge badge-neutral">${o.length} Alternatif</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Shorthand alternatif atau sinonim yang memiliki kesamaan fungsi/kategori dengan shorthand utama atau pendukung. Nonaktif secara default <strong>[ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${t}
      </div>
    </section>
  `,bindEvents(r){r&&(r.querySelectorAll(".similar-checkbox").forEach(s=>{s.addEventListener("change",n=>{n.stopPropagation();const l=s.getAttribute("data-code");e&&e(l)})}),r.querySelectorAll("#card-similar-shorthands .btn-toggle-rec").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();const l=s.getAttribute("data-code");e&&e(l)})}))}}}function Dn(o=[],a="ANALISA_PROMPT"){const e=o.length,t=a==="IMAGE_TO_PROMPT"?"E":"H",i=e>0?o.map(s=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${s.code}</span>
            <span class="exclusion-target">&bull; ${s.target}</span>
          </div>
          <p class="exclusion-reason">
            ${s.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header exclusions-toggle-header" id="header-exclusions" role="button" tabindex="0" title="Klik untuk menampilkan atau menyembunyikan daftar pengecualian">
        <div class="card-title">
          <span class="card-step-badge">${t}</span>
          <h2>SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <div class="exclusions-header-actions" style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="badge badge-neutral">${e} Dikecualikan</span>
          <button type="button" class="btn btn-secondary btn-xs btn-toggle-exclusions" id="btn-toggle-exclusions" aria-expanded="false" title="Tampilkan / Sembunyikan daftar">
            <svg class="icon-sm icon-eye" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          </button>
        </div>
      </div>

      <!-- DEFAULT HIDE: Konten tersembunyi secara default agar tidak mengambil ruang tampilan utama -->
      <div class="exclusions-content" id="exclusions-content" style="display: none;">
        <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0.75rem 0 0.85rem 0;">
          Engine secara cerdas mengecualikan shorthand di bawah ini karena tidak relevan dengan konteks prompt:
        </p>

        <div class="exclusions-grid">
          ${i}
        </div>
      </div>
    </section>
  `,bindEvents(s){if(!s)return;const n=s.querySelector("#btn-toggle-exclusions"),l=s.querySelector("#exclusions-content"),d=s.querySelector("#header-exclusions");if(!n||!l)return;const c=g=>{g&&(g.preventDefault(),g.stopPropagation()),l.style.display==="none"||!l.style.display?(l.style.display="block",n.setAttribute("aria-expanded","true"),n.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,n.classList.remove("btn-secondary"),n.classList.add("btn-outline")):(l.style.display="none",n.setAttribute("aria-expanded","false"),n.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,n.classList.remove("btn-outline"),n.classList.add("btn-secondary"))};n.addEventListener("click",c),d&&(d.addEventListener("click",g=>{g.target.closest("#btn-toggle-exclusions")||c(g)}),d.addEventListener("keydown",g=>{if(g.key==="Enter"||g.key===" "){if(g.target.closest("#btn-toggle-exclusions"))return;c(g)}}))}}}function Un(o={}){var G,J;const a=(o==null?void 0:o.analysisResult)||o,{onCopyMood:e,onCopyPhotographyStyle:t,onCopySubjectPlacement:i,onCopyOutfit:r,onCopyBackgroundElements:s,onCopyCompositionSpatial:n,onCopyOptimalPrompt:l,onEditOptimalPrompt:d,onRegenerateOptimalPrompt:c,onCopyBackgroundProfile:g,onCopyPlacementProfile:p,onCopyFullReport:k,onCopyGeneratedPrompt:u}=(o!=null&&o.analysisResult,o||{}),m=(a==null?void 0:a.backgroundData)||a||{},h=(a==null?void 0:a.backgroundProfile)||m.backgroundProfile||(a==null?void 0:a.generatedPrompt)||"",b=(a==null?void 0:a.placementProfile)||m.placementProfile||((G=m.subjectPlacement)==null?void 0:G.spatialSummary)||"",f=(a==null?void 0:a.optimalPrompt)||m.optimalPrompt||"",y=m.suasanaMood||m.photoMood||{},w=m.gayaFotografi||{},v=m.hubunganSubjekLatar||m.subjectPlacement||{},T=m.referensiOutfitSubjek||{},R=m.elemenBackground||{},A=m.komposisiSpatial||m.structureAndComposition||{},S=y.summary||y.atmosphere||"Suasana dan mood latar belakang sedang dianalisis...",E=w.summary||"Karakteristik gaya fotografi sedang dianalisis...",O=v.spatialSummary||b||"Subjek berada di tengah frame pada area middle ground dengan elemen latar belakang membingkai secara alami.",N=T.summary||"Referensi pakaian subjek sedang dianalisis...",_=A.summary||"Struktur komposisi ruang sedang dianalisis...",L=m.spaceAndComposition||{},I=m.visualLayers||{},x=m.colorAndMaterial||{},$=m.backgroundLighting||{},D=Array.isArray(m.aspects)?m.aspects:Array.isArray(a==null?void 0:a.aspects)?a.aspects:[];return Array.isArray(m.identifiedElements)&&m.identifiedElements,{html:`
    <!-- CARD 1: HASIL ANALISIS LATAR BELAKANG -->
    <section class="panel analyzer-card card-background-analysis" id="card-background-analysis" style="border-left: 3px solid #10b981;">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #10b981;"><path fill="currentColor" d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></svg>
          <h2 style="color: #10b981;">HASIL ANALISIS LATAR BELAKANG</h2>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
          <span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🏞️ Analisa Latar Belakang/background</span>
          ${(a==null?void 0:a.source)==="GEMINI_AI"?`<span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🌐 Vision AI Aktif (${((J=a.imageInfo)==null?void 0:J.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🤖 Source of Truth Latar Belakang</span>'}
          <button type="button" class="btn btn-outline btn-xs" id="btn-copy-full-bg-report" title="Salin seluruh laporan analisis latar belakang lengkap">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            Salin Seluruh Laporan
          </button>
        </div>
      </div>

      <!-- 6 STRUKTUR UTAMA ANALISA BACKGROUND -->
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 0.75rem;">

        <!-- 1. SUASANA / MOOD -->
        <div class="bg-section-card" id="section-suasana-mood" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(168, 85, 247, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">🎭</span>
              <strong style="color: #c084fc; font-size: 0.875rem;">1. SUASANA / MOOD</strong>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(168, 85, 247, 0.1); border-left: 3px solid #c084fc; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${S}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-mood" style="color: #c084fc; border-color: rgba(168, 85, 247, 0.4); flex-shrink: 0;" title="Salin ringkasan Suasana / Mood">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #c084fc;">Atmosphere:</strong> <span style="color: #cbd5e1;">${y.atmosphere||"-"}</span></div>
            <div><strong style="color: #c084fc;">Mood:</strong> <span style="color: #cbd5e1;">${y.mood||"-"}</span></div>
            <div><strong style="color: #c084fc;">Emotional Tone:</strong> <span style="color: #cbd5e1;">${y.emotionalTone||y.mood||"-"}</span></div>
            <div><strong style="color: #c084fc;">Visual Temperature:</strong> <span style="color: #cbd5e1;">${y.visualTemperature||"-"}</span></div>
            <div><strong style="color: #c084fc;">Formalitas:</strong> <span style="color: #cbd5e1;">${y.formality||"-"}</span></div>
            <div><strong style="color: #c084fc;">Ambience:</strong> <span style="color: #cbd5e1;">${y.overallAmbience||"-"}</span></div>
            <div><strong style="color: #c084fc;">Sophistication:</strong> <span style="color: #cbd5e1;">${y.sophistication||"High / Elegant"}</span></div>
            <div><strong style="color: #c084fc;">Karakter:</strong> <span style="color: #cbd5e1;">${y.characterType||"-"}</span></div>
          </div>
        </div>

        <!-- 2. GAYA FOTOGRAFI -->
        <div class="bg-section-card" id="section-gaya-fotografi" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(59, 130, 246, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">📷</span>
              <strong style="color: #60a5fa; font-size: 0.875rem;">2. GAYA FOTOGRAFI</strong>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(59, 130, 246, 0.1); border-left: 3px solid #60a5fa; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${E}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-photo-style" style="color: #60a5fa; border-color: rgba(59, 130, 246, 0.4); flex-shrink: 0;" title="Salin ringkasan Gaya Fotografi">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #60a5fa;">Photography Style:</strong> <span style="color: #cbd5e1;">${w.photographyStyle||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Genre:</strong> <span style="color: #cbd5e1;">${w.genre||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Perspektif Kamera:</strong> <span style="color: #cbd5e1;">${w.cameraPerspective||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Ketinggian Kamera:</strong> <span style="color: #cbd5e1;">${w.cameraHeight||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Karakter Lensa:</strong> <span style="color: #cbd5e1;">${w.focalLengthImpression||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Framing:</strong> <span style="color: #cbd5e1;">${w.framing||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Depth of Field:</strong> <span style="color: #cbd5e1;">${w.depthOfField||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Gaya Pencahayaan:</strong> <span style="color: #cbd5e1;">${w.lightingStyle||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Kelembutan Cahaya:</strong> <span style="color: #cbd5e1;">${w.lightingSoftness||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Karakter Bayangan:</strong> <span style="color: #cbd5e1;">${w.shadowCharacter||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Realisme:</strong> <span style="color: #cbd5e1;">${w.realism||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Gaya Rendering:</strong> <span style="color: #cbd5e1;">${w.renderingStyle||"-"}</span></div>
          </div>
        </div>

        <!-- 3. HUBUNGAN SUBJEK & LATAR (WAJIB) -->
        <div class="bg-section-card" id="section-hubungan-subjek" style="background: rgba(15, 23, 42, 0.9); border: 2px solid #38bdf8; border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(56, 189, 248, 0.3); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">👥</span>
              <strong style="color: #38bdf8; font-size: 0.875rem;">3. HUBUNGAN SUBJEK &amp; LATAR</strong>
              <span class="badge badge-blue" style="font-size: 0.7rem; margin-left: 0.35rem;">WAJIB</span>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(56, 189, 248, 0.12); border-left: 3px solid #38bdf8; padding: 0.85rem; border-radius: 4px; font-size: 0.825rem; line-height: 1.6; color: #f1f5f9; margin-bottom: 0.75rem;">
            <div style="flex: 1;">
              <strong style="color: #38bdf8; display: block; margin-bottom: 0.25rem;">Deskripsi Spasial Alami:</strong>
              ${O}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-subject-placement" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); flex-shrink: 0;" title="Salin ringkasan Hubungan Subjek & Latar">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #38bdf8;">Posisi Subjek:</strong> <span style="color: #cbd5e1;">${v.subjectPlacementInFrame||v.horizontalPos||"Tengah (Center)"}</span></div>
            <div><strong style="color: #38bdf8;">Posisi Relatif ke BG:</strong> <span style="color: #cbd5e1;">${v.relativePositionToBg||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Jarak ke Background:</strong> <span style="color: #cbd5e1;">${v.distanceFromBg||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Skala Subjek:</strong> <span style="color: #cbd5e1;">${v.scaleToSpace||v.scale||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Bidang Kedalaman:</strong> <span style="color: #cbd5e1;">${v.depthPlane||v.depthPosition||"Midground"}</span></div>
            <div><strong style="color: #38bdf8;">Separasi Kedalaman:</strong> <span style="color: #cbd5e1;">${v.depthRelationship||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Hubungan Framing:</strong> <span style="color: #cbd5e1;">${v.framingRelationship||v.framing||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Negative Space:</strong> <span style="color: #cbd5e1;">${v.negativeSpace||v.negativeSpaceAround||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Keseimbangan Visual:</strong> <span style="color: #cbd5e1;">${v.visualBalance||v.compositionBalance||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Hubungan Perspektif:</strong> <span style="color: #cbd5e1;">${v.perspectiveRelationship||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Orientasi Subjek:</strong> <span style="color: #cbd5e1;">${v.orientation||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Pencahayaan Relasi:</strong> <span style="color: #cbd5e1;">${v.lightingRelationship||"-"}</span></div>
          </div>
        </div>

        <!-- 4. REFERENSI OUTFIT SUBJEK (TERPISAH DARI PROMPT BACKGROUND) -->
        <div class="bg-section-card" id="section-outfit-ref" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(234, 179, 8, 0.4); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(234, 179, 8, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">👔</span>
              <strong style="color: #facc15; font-size: 0.875rem;">4. REFERENSI OUTFIT SUBJEK</strong>
            </div>
          </div>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.65rem;">
            🛡️ <strong>FACE / IDENTITY RULE:</strong> <em>Referensi busana saja. Tidak menganalisis identitas/wajah manusia, dan <strong>TIDAK dimasukkan</strong> ke Prompt Background Final.</em>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(234, 179, 8, 0.1); border-left: 3px solid #facc15; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${N}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-outfit" style="color: #facc15; border-color: rgba(234, 179, 8, 0.4); flex-shrink: 0;" title="Salin ringkasan Referensi Outfit Subjek">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #facc15;">Jenis Pakaian:</strong> <span style="color: #cbd5e1;">${T.clothingType||"-"}</span></div>
            <div><strong style="color: #facc15;">Gaya Busana:</strong> <span style="color: #cbd5e1;">${T.garmentStyle||"-"}</span></div>
            <div><strong style="color: #facc15;">Warna Utama:</strong> <span style="color: #cbd5e1;">${T.primaryColor||"-"}</span></div>
            <div><strong style="color: #facc15;">Warna Sekunder:</strong> <span style="color: #cbd5e1;">${T.secondaryColor||"-"}</span></div>
            <div><strong style="color: #facc15;">Material:</strong> <span style="color: #cbd5e1;">${T.material||"-"}</span></div>
            <div><strong style="color: #facc15;">Tekstur:</strong> <span style="color: #cbd5e1;">${T.texture||"-"}</span></div>
            <div><strong style="color: #facc15;">Pola / Pattern:</strong> <span style="color: #cbd5e1;">${T.pattern||"-"}</span></div>
            <div><strong style="color: #facc15;">Potongan (Cut):</strong> <span style="color: #cbd5e1;">${T.cut||"-"}</span></div>
            <div><strong style="color: #facc15;">Layering:</strong> <span style="color: #cbd5e1;">${T.layering||"-"}</span></div>
            <div><strong style="color: #facc15;">Aksesori:</strong> <span style="color: #cbd5e1;">${T.accessories||"-"}</span></div>
            <div><strong style="color: #facc15;">Alas Kaki:</strong> <span style="color: #cbd5e1;">${T.footwear||"-"}</span></div>
            <div><strong style="color: #facc15;">Formalitas:</strong> <span style="color: #cbd5e1;">${T.formality||"-"}</span></div>
            <div style="grid-column: 1 / -1;"><strong style="color: #facc15;">Harmonisasi dengan Latar:</strong> <span style="color: #cbd5e1;">${T.relationshipToEnvironment||"-"}</span></div>
          </div>
        </div>

        <!-- 5. ELEMEN BACKGROUND -->
        <div class="bg-section-card" id="section-bg-elements" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">🏛️</span>
              <strong style="color: #34d399; font-size: 0.875rem;">5. ELEMEN BACKGROUND</strong>
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-bg-elements" style="color: #34d399; border-color: rgba(16, 185, 129, 0.4);" title="Salin hanya analisis Elemen Background">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.6rem; font-size: 0.8rem;">
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🏛️ Arsitektur / Struktur:</strong>
              <span style="color: #f1f5f9;">${R.arsitektur||L.architecture||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🪑 Furniture:</strong>
              <span style="color: #f1f5f9;">${R.furniture||L.propsAndAccessories||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🖼️ Dekorasi:</strong>
              <span style="color: #f1f5f9;">${R.dekorasi||L.decoration||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🧱 Material:</strong>
              <span style="color: #f1f5f9;">${R.material||(Array.isArray(x.materialsAndTextures)?x.materialsAndTextures.map(K=>K.material).join(", "):"-")}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🎨 Warna:</strong>
              <span style="color: #f1f5f9;">${R.warna||x.palette||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">💡 Lighting:</strong>
              <span style="color: #f1f5f9;">${R.lighting||$.type||"-"}</span>
            </div>
          </div>
        </div>

        <!-- 6. KOMPOSISI & SPATIAL RELATIONSHIP -->
        <div class="bg-section-card" id="section-bg-spatial" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(20, 184, 166, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(20, 184, 166, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">📐</span>
              <strong style="color: #2dd4bf; font-size: 0.875rem;">6. KOMPOSISI &amp; SPATIAL RELATIONSHIP</strong>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(20, 184, 166, 0.1); border-left: 3px solid #2dd4bf; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${_}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-composition-spatial" style="color: #2dd4bf; border-color: rgba(20, 184, 166, 0.4); flex-shrink: 0;" title="Salin ringkasan Komposisi & Spatial Relationship">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #2dd4bf;">Penempatan Subjek:</strong> <span style="color: #cbd5e1;">${A.subjectPlacement||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Simetri / Asimetri:</strong> <span style="color: #cbd5e1;">${A.symmetry||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Keseimbangan Horisontal:</strong> <span style="color: #cbd5e1;">${A.horizontalBalance||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Keseimbangan Vertikal:</strong> <span style="color: #cbd5e1;">${A.verticalBalance||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Negative Space:</strong> <span style="color: #cbd5e1;">${A.negativeSpace||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Kedalaman (Depth):</strong> <span style="color: #cbd5e1;">${A.depth||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Perspektif:</strong> <span style="color: #cbd5e1;">${A.perspective||I.perspective||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Foreground:</strong> <span style="color: #cbd5e1;">${A.foreground||I.foreground||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Midground:</strong> <span style="color: #cbd5e1;">${A.midground||I.middleGround||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Background:</strong> <span style="color: #cbd5e1;">${A.background||I.background||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Framing:</strong> <span style="color: #cbd5e1;">${A.framing||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Hierarki Spasial:</strong> <span style="color: #cbd5e1;">${A.spatialHierarchy||"-"}</span></div>
          </div>
        </div>

      </div>

      <!-- KARTU PROFIL A & PROFIL B & 8 ASPEK (PRESERVED FOR BACKWARD COMPATIBILITY) -->
      <details style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.75rem;">
        <summary style="cursor: pointer; font-size: 0.8rem; color: #94a3b8; user-select: none;">
          ℹ️ Tampilkan Rincian 8 Aspek Analisis Latar Belakang &amp; Ringkasan Profil A/B
        </summary>
        <div style="margin-top: 0.75rem;">
          <h4 style="font-size: 0.825rem; color: #94a3b8; margin-bottom: 0.5rem;">Rincian 8 Aspek Analisis Latar Belakang</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.5rem; margin-bottom: 0.75rem;">
            ${(D||[]).map(K=>`
              <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 0.5rem; font-size: 0.75rem;">
                <strong style="color: #38bdf8; display: block; margin-bottom: 0.2rem;">${K.aspectNumber}. ${String(K.title||"").toUpperCase().replace("&","&amp;")}</strong>
                <p style="color: #cbd5e1; margin: 0; line-height: 1.4;">${K.summary||"-"}</p>
              </div>
            `).join("")}
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem; margin-top: 0.6rem;">
          <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(16,185,129,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #10b981; font-size: 0.8rem;">PROFIL A: BACKGROUND PROFILE (PROFIL LATAR BELAKANG)</strong>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-bg-profile">Salin Profil A</button>
            </div>
            <div class="font-mono" style="font-size: 0.75rem; line-height: 1.5; color: #cbd5e1; max-height: 150px; overflow-y: auto;">
              ${h||"-"}
            </div>
          </div>
          <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(56,189,248,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #38bdf8; font-size: 0.8rem;">PROFIL B: SUBJECT–BACKGROUND PLACEMENT PROFILE</strong>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-placement-profile">Salin Profil B</button>
            </div>
            <div class="font-mono" style="font-size: 0.75rem; line-height: 1.5; color: #cbd5e1; max-height: 150px; overflow-y: auto;">
              ${b||"-"}
            </div>
          </div>
        </div>
      </details>
    </section>

    <!-- CARD 2: PROMPT ANALISA OPTIMAL -->
    <section class="panel analyzer-card card-optimal-prompt" id="card-optimal-prompt" style="border-left: 3px solid #38bdf8; margin-top: 1.25rem;">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #38bdf8;">PROMPT ANALISA OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.45rem; align-items: center; flex-wrap: wrap;">
          <button type="button" class="btn btn-outline btn-sm" id="btn-edit-optimal-prompt" title="Edit Prompt Analisa Optimal secara manual">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            EDIT PROMPT
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="btn-regenerate-optimal-prompt" title="Regenerasi variasi prompt baru dari hasil analisis yang sama">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
            REGENERATE
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-optimal-prompt" title="Salin hanya Prompt Analisa Optimal">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            COPY PROMPT
          </button>
        </div>
      </div>

      <!-- KONTEN PROMPT (VIEW MODE) -->
      <div id="optimal-prompt-view-container" style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 1.15rem; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.65; color: #f8fafc; white-space: pre-wrap; word-break: break-word;">
        ${f||'<span style="color: #94a3b8; font-style: italic;">Prompt analisa optimal sedang dibuat...</span>'}
      </div>

      <!-- KONTEN PROMPT (EDIT MODE - INLINE) -->
      <div id="optimal-prompt-edit-container" style="display: none; flex-direction: column; gap: 0.6rem; margin-top: 0.25rem;">
        <textarea 
          id="optimal-prompt-edit-textarea" 
          rows="6" 
          style="width: 100%; background: rgba(0, 0, 0, 0.6); border: 1px solid #38bdf8; border-radius: 6px; padding: 0.85rem; color: #f8fafc; font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; resize: vertical;"
        >${f||""}</textarea>
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button type="button" class="btn btn-outline btn-xs" id="btn-cancel-edit-prompt">Batal</button>
          <button type="button" class="btn btn-primary btn-xs" id="btn-save-edited-prompt">Simpan &amp; Terapkan</button>
        </div>
      </div>

      <div style="margin-top: 0.65rem; font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.4rem;">
        <span>💡 <em>Prompt di atas adalah paragraf AI profesional Bahasa Inggris. Sistem Shorthand di bawah berjalan langsung berdasarkan prompt ini.</em></span>
        <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">Production-Ready</span>
      </div>
    </section>
  `,bindEvents(K){const na=(C,X)=>{if(C)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(C);else{const sa=document.createElement("textarea");sa.value=C,document.body.appendChild(sa),sa.select(),document.execCommand("copy"),sa.remove()}},ia=(C,X="📋 COPY")=>{if(!C)return;const sa=C.innerHTML;C.innerHTML="✓ COPIED",C.style.opacity="0.9",setTimeout(()=>{C.innerHTML=sa||X,C.style.opacity="1"},1500)},ga=K.querySelector("#btn-copy-mood");ga&&ga.addEventListener("click",()=>{const C=S;e?e(C):na(C),ia(ga)});const P=K.querySelector("#btn-copy-photo-style, #btn-copy-photography-style");P&&P.addEventListener("click",()=>{const C=E;t?t(C):na(C),ia(P)});const W=K.querySelector("#btn-copy-subject-placement, #btn-copy-subject-background-rel");W&&W.addEventListener("click",()=>{const C=O;i?i(C):na(C),ia(W)});const ha=K.querySelector("#btn-copy-outfit");ha&&ha.addEventListener("click",()=>{const C=N;r?r(C):na(C),ia(ha)});const ba=K.querySelector("#btn-copy-bg-elements");ba&&ba.addEventListener("click",()=>{const C=ot(m);s?s(C):na(C),ia(ba)});const H=K.querySelector("#btn-copy-composition-spatial");H&&H.addEventListener("click",()=>{const C=_;n?n(C):na(C),ia(H)});const Q=K.querySelector("#btn-copy-optimal-prompt");Q&&Q.addEventListener("click",()=>{const C=f||m.optimalPrompt||"";l?l(C):u?u(C):na(C)});const q=K.querySelector("#btn-edit-optimal-prompt"),ja=K.querySelector("#optimal-prompt-view-container"),wa=K.querySelector("#optimal-prompt-edit-container"),Na=K.querySelector("#optimal-prompt-edit-textarea"),Ra=K.querySelector("#btn-save-edited-prompt"),ya=K.querySelector("#btn-cancel-edit-prompt");q&&ja&&wa&&Na&&(q.addEventListener("click",()=>{ja.style.display="none",wa.style.display="flex",Na.focus()}),ya&&ya.addEventListener("click",()=>{wa.style.display="none",ja.style.display="block"}),Ra&&Ra.addEventListener("click",()=>{const C=Na.value.trim();C&&d&&d(C),wa.style.display="none",ja.style.display="block"}));const Ta=K.querySelector("#btn-regenerate-optimal-prompt");Ta&&c&&Ta.addEventListener("click",()=>{c()});const Ea=K.querySelector("#btn-copy-bg-profile");Ea&&Ea.addEventListener("click",()=>{const C=ue(m)||h;g?g(C):na(C)});const Ia=K.querySelector("#btn-copy-placement-profile");Ia&&Ia.addEventListener("click",()=>{const C=pe(m)||b;p?p(C):na(C)});const j=K.querySelector("#btn-copy-full-bg-report");j&&j.addEventListener("click",()=>{const C=_e(m);k?k(C):na(C)})}}}function Bn({analysisResult:o,currentPrompt:a,catalog:e,isAnalyzing:t,isOnlineActive:i=!1,isEnriching:r=!1,activeMode:s="ANALISA_PROMPT",uploadedImage:n=null,onModeChange:l,onImageSelected:d,onImageRemoved:c,onAnalyze:g,onReset:p,onClear:k,onSelectPreset:u,onCopyPrompt:m,onCopyGeneratedPrompt:h,onCopyBackgroundProfile:b,onCopyPlacementProfile:f,onCopyFullReport:y,onCopyMood:w,onCopyPhotographyStyle:v,onCopySubjectPlacement:T,onCopyOutfit:R,onCopyBackgroundElements:A,onCopyCompositionSpatial:S,onEditOptimalPrompt:E,onRegenerateOptimalPrompt:O,onEnrichPrompt:N,onAddShorthand:_,onRemoveShorthand:L,onToggleRecommendation:I,onResolveConflict:x,selectedAspectRatio:$="auto",onAspectRatioChange:D,twoWorldsConfig:B=null,onTwoWorldsConfigChange:U,colourGradingConfig:G=null,onColourGradingConfigChange:J,onResetGrading:K,batchImages:na=[],activeBatchIndex:ia=0,onSelectBatchImage:ga,promptAnalysisAspectRatio:P="auto",promptAnalysisCustomAspectRatio:W="",promptAnalysisAspectRatioError:ha=null,onPromptAnalysisAspectRatioChange:ba,onPromptAnalysisCustomAspectRatioChange:H,promptOptimizerState:Q={},onPromptOptimizerStateChange:q,onRunPromptOptimization:ja,onCopyOptimizedPrompt:wa,onSetAsMainPrompt:Na,onOptimizeAgain:Ra,optimalPromptForOptimizer:ya="",variationListForOptimizer:Ta=[],promptVariationsState:Ea={},previousAnalysisForVariations:Ia=null,onVariationSourceTypeChange:j,onVariationCustomPromptChange:C,onVariationImageSelected:X,onVariationImageRemoved:sa,onVariationCountChange:M,onToggleVariationApproach:ta,onToggleVariationLock:Pa,onCustomVariationLockChange:La,onVariationAspectRatioChange:la,onVariationCustomAspectRatioChange:Z,onGenerateVariations:$a,onCopyVariationPrompt:Ca,onSetMainPromptFromVariation:Sa,onOptimizeVariation:Ha,onMakeBaseForNextVariation:Ma,showNotification:oa}){var He;const{optimalPrompt:ua="",generatedPrompt:Y="",visualBreakdown:da=null,isImageRepair:aa=!1,visualConditionSummary:F="",calculatedAdjustments:V=null,protectionLogs:ra=[],colorGradingRecipe:pa=null,optimizationAreas:fa=[],goodAspects:Oa=[],diagnosedShorthands:z=[],installedShorthands:ca=[],conflicts:ka=[],intent:Ga={},editAreas:ae=[],lockedAreas:re=[],unchangedAreas:ge=[],visualTransformation:he={},primaryShorthands:be=[],relatedShorthands:Va=[],similarShorthands:Fa=[],recommendations:Wa=[],exclusions:Be=[]}=o||{};function se(ma){switch(ma){case"PRIMARY_ISSUE":return'<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';case"SECONDARY_ISSUE":return'<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';case"OPTIMIZATION":return'<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';case"PRESERVATION":return'<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';case"FINISHING":return'<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';default:return'<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>'}}const _a=vn({currentValue:a,onAnalyze:g,onReset:p,onClear:k,onSelectPreset:u,isAnalyzing:t,isOnlineActive:i,activeMode:s,onModeChange:l,uploadedImage:n,onImageSelected:d,onImageRemoved:c,selectedAspectRatio:$,onAspectRatioChange:D,twoWorldsConfig:B,onTwoWorldsConfigChange:U,colourGradingConfig:G,onColourGradingConfigChange:J,onResetGrading:K,batchImages:na,activeBatchIndex:ia,onSelectBatchImage:ga,promptAnalysisAspectRatio:P,promptAnalysisCustomAspectRatio:W,promptAnalysisAspectRatioError:ha,onPromptAnalysisAspectRatioChange:ba,onPromptAnalysisCustomAspectRatioChange:H,promptOptimizerState:Q,onPromptOptimizerStateChange:q,onRunPromptOptimization:ja,onCopyOptimizedPrompt:wa,onSetAsMainPrompt:Na,onOptimizeAgain:Ra,optimalPromptForOptimizer:ya,variationListForOptimizer:Ta,promptVariationsState:Ea,previousAnalysisForVariations:Ia,onVariationSourceTypeChange:j,onVariationCustomPromptChange:C,onVariationImageSelected:X,onVariationImageRemoved:sa,onVariationCountChange:M,onToggleVariationApproach:ta,onToggleVariationLock:Pa,onCustomVariationLockChange:La,onVariationAspectRatioChange:la,onVariationCustomAspectRatioChange:Z,onGenerateVariations:$a,onCopyVariationPrompt:Ca,onSetMainPromptFromVariation:Sa,onOptimizeVariation:Ha,onMakeBaseForNextVariation:Ma,showNotification:oa}),ee=Tn(ka,x,s),ke=Nn({optimalPrompt:ua,userPrompt:a||"",installedShorthands:ca,catalog:e,isOnlineActive:i,isEnriching:r,analysisStatus:o!=null&&o.isFailed?"FAILED":ua?"ANALYSIS_READY":"IDLE",onCopyPrompt:m,onEnrichPrompt:N,onRemoveShorthand:L,onAddShorthand:_,showNotification:oa}),Te=xn(Ga),Ee=jn(ae),Se=$n(re,ge),Re=Mn(he),te=Gn({primaryShorthands:be,relatedShorthands:Va,recommendations:Wa,installedShorthands:ca,activeMode:s,onToggleShorthand:I}),fe=_n(Fa,ca,I),ne=Dn(Be,s);if(s==="PROMPT_VARIATIONS")return{html:`
        <div class="analyzer-stream-container">
          ${_a.html}
        </div>
      `,bindEvents(ma){_a.bindEvents(ma)}};if(s==="PROMPT_OPTIMIZER")return{html:`
        <div class="analyzer-stream-container">
          ${_a.html}
        </div>
      `,bindEvents(ma){_a.bindEvents(ma)}};if(s==="BACKGROUND_ANALYSIS"){if(!Y)return{html:`
          <div class="analyzer-stream-container">
            ${_a.html}
          </div>
        `,bindEvents(Da){_a.bindEvents(Da)}};const ma=Un({analysisResult:o,onCopyMood:w,onCopyPhotographyStyle:v,onCopySubjectPlacement:T,onCopyOutfit:R,onCopyBackgroundElements:A,onCopyCompositionSpatial:S,onCopyOptimalPrompt:m||h,onEditOptimalPrompt:E,onRegenerateOptimalPrompt:O,onCopyBackgroundProfile:b,onCopyPlacementProfile:f,onCopyFullReport:y,onCopyGeneratedPrompt:h});return{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${_a.html}

        <!-- 2. HASIL ANALISIS LATAR BELAKANG & PROMPT ANALISA OPTIMAL (MASTER PATCH) -->
        ${ma.html}

        <!-- 3. EXISTING PROMPT SHORTHAND ANALYZER (Dijalankan langsung berdasarkan Prompt Analisa Optimal) -->
        <div class="panel" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-sm); padding: 0.65rem 1rem; display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg class="icon-sm" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <strong style="color: #93c5fd; font-size: 0.85rem; letter-spacing: 0.5px;">EXISTING PROMPT SHORTHAND ANALYZER</strong>
          </div>
          <span style="font-size: 0.75rem; color: #94a3b8;">Dijalankan langsung berdasarkan Prompt Analisa Optimal &bull; Shorthand Catalog Source of Truth</span>
        </div>

        <!-- SHORTHAND ANALYSIS (4 Kelompok Shorthand Eksisting) -->
        <!-- 1. SHORTHAND RELEVAN (Utama & Berhubungan) -->
        ${te.html}

        <!-- 2. SHORTHAND ALTERNATIF / SERUPA -->
        ${fe.html}

        <!-- 3. SHORTHAND KONFLIK -->
        ${ee.html}

        <!-- 4. SHORTHAND TIDAK DIPERLUKAN -->
        ${ne.html}

        <!-- 4. MAKSUD PROMPT -->
        ${Te.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${Ee.html}
          ${Se.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${Re.html}
      </div>
    `,bindEvents(Da){_a.bindEvents(Da),ma.bindEvents(Da),te.bindEvents(Da),fe.bindEvents(Da),ee.bindEvents(Da),ne.bindEvents(Da)}}}return s==="IMAGE_TO_PROMPT"||s==="TWO_WORLDS"?Y?{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${_a.html}

        <!-- 2. PROMPT HASIL ANALISIS GAMBAR -->
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">
                ${s==="TWO_WORLDS"?"PROMPT HASIL ANALISA 2 DUNIA":"PROMPT HASIL ANALISA GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              ${s==="TWO_WORLDS"?'<span class="badge badge-purple" style="background: rgba(168, 85, 247, 0.15); border: 1px solid #c084fc; color: #c084fc;">🌐 Mode 2 Dunia</span>':""}
              ${(o==null?void 0:o.source)==="GEMINI_AI"?`<span class="badge badge-blue" style="background: rgba(14, 165, 233, 0.15); border: 1px solid #38bdf8; color: #38bdf8;">🌐 Vision AI Aktif (${((He=o.imageInfo)==null?void 0:He.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-blue">🤖 Source of Truth Visual</span>'}
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem; white-space: pre-wrap;">
              ${Y}
            </p>
          </div>
          ${da?`
            <div style="margin-top: 1rem;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📋</span> Rincian 13 Atribut Visual Gambar Aktual:
              </h3>
              <div class="visual-breakdown-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.55rem; font-size: 0.825rem;">
                ${Object.entries(da).map(([xa,Da],mt)=>`
                  <div style="background: rgba(15, 23, 42, 0.7); padding: 0.55rem 0.75rem; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2); display: flex; flex-direction: column; gap: 0.2rem;">
                    <strong style="color: #38bdf8; font-size: 0.8rem;">${mt+1}. ${xa}</strong>
                    <span style="color: #f1f5f9; font-size: 0.8rem; line-height: 1.4;">${Da}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </section>

        <!-- 3. PROMPT OPTIMAL -->
        ${ke.html}

        <!-- 4. MAKSUD PROMPT -->
        ${Te.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${Ee.html}
          ${Se.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${Re.html}

        <!-- 7. SHORTHAND ANALYSIS (5 Kelompok Terpisah Sesuai Blueprint) -->
        <!-- A & B. Shorthand Utama & Shorthand Berhubungan -->
        ${te.html}

        <!-- C. Shorthand Alternatif / Serupa -->
        ${fe.html}

        <!-- D. Shorthand Konflik -->
        ${ee.html}

        <!-- E. Shorthand Tidak Diperlukan (Dikecualikan) -->
        ${ne.html}
      </div>
    `,bindEvents(xa){_a.bindEvents(xa),ke.bindEvents(xa),te.bindEvents(xa),fe.bindEvents(xa),ee.bindEvents(xa),ne.bindEvents(xa);const Da=xa.querySelector("#btn-copy-generated-prompt");Da&&Da.addEventListener("click",()=>{h&&h(Y)})}}:{html:`
          <div class="analyzer-stream-container">
            ${_a.html}
          </div>
        `,bindEvents(xa){_a.bindEvents(xa)}}:{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${_a.html}

      <!-- MODE 3 / COLOUR GRADING SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN / COLOUR GRADING GAMBAR CARD -->
      ${(s==="SHORTHAND_IMPROVE"||s==="COLOUR_GRADING")&&aa?`
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: ${s==="COLOUR_GRADING"?"#ec4899":"#c084fc"};"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: ${s==="COLOUR_GRADING"?"#ec4899":"#c084fc"};">
                ${s==="COLOUR_GRADING"?"🎨 DIAGNOSIS &amp; REKOMENDASI COLOUR GRADING":"🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge ${s==="COLOUR_GRADING"?"badge-pink":"badge-purple"}">
                ${s==="COLOUR_GRADING"?"🎨 Diagnosis Tone & Palet Warna":"🔍 Diagnosis Visual Komprehensif"}
              </span>
              <span class="badge badge-blue">⚡ ${z.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual / Warna Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>${s==="COLOUR_GRADING"?"🎨":"📷"}</span> ${s==="COLOUR_GRADING"?"Ringkasan Karakter Warna & Tone Gambar:":"Ringkasan Kondisi Visual Gambar:"}
            </h3>
            <div style="background: ${s==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.08)":"rgba(168, 85, 247, 0.08)"}; border-left: 3px solid ${s==="COLOUR_GRADING"?"#ec4899":"#c084fc"}; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${F}
            </div>
          </div>

          <!-- 1.5. HASIL PENYESUAIAN ADAPTIF PER-FOTO & PROTEKSI CERDAS (KHUSUS COLOUR GRADING) -->
          ${s==="COLOUR_GRADING"&&V?`
            <div style="margin-bottom: 1.15rem; background: rgba(30, 41, 59, 0.55); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 8px; padding: 0.85rem 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.55rem; flex-wrap: wrap; gap: 0.4rem;">
                <h3 style="font-size: 0.825rem; font-weight: 700; color: #f472b6; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                  <span>🎚️</span> Parameter Penyesuaian Adaptif Terhitung (Target: ${V.targetStyle||"Adaptive"} &bull; ${V.intensityPercent||50}%):
                </h3>
                <span class="badge badge-outline" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.4); font-size: 0.7rem;">
                  Non-Destructive &bull; Source Preserved
                </span>
              </div>

              <!-- Parameter Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 0.65rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Exposure</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.exposure>0?"+":""}${V.exposure} EV</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Contrast</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.contrast>0?"+":""}${V.contrast}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Highlights</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.highlights>0?"+":""}${V.highlights}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Shadows</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.shadows>0?"+":""}${V.shadows}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Warmth (Temp)</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.warmth>0?"+":""}${V.warmth}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Tint</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.tint>0?"+":""}${V.tint}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Vibrance</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.vibrance>0?"+":""}${V.vibrance}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Saturation</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.saturation>0?"+":""}${V.saturation}</strong>
                </div>
              </div>

              <!-- Proteksi Cerdas yang Diterapkan -->
              ${V.protectionLogs&&V.protectionLogs.length>0?`
                <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 0.5rem; font-size: 0.735rem; color: #a7f3d0; line-height: 1.45;">
                  <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🛡️ Proteksi Cerdas Diterapkan:</strong>
                  ${V.protectionLogs.map(ma=>`<div>&bull; ${ma}</div>`).join("")}
                </div>
              `:""}
            </div>
          `:""}

          <!-- 2. Area yang Membutuhkan Optimasi / Penyesuaian -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> ${s==="COLOUR_GRADING"?"Area Penyesuaian Tone & Warna":"Area yang Membutuhkan Optimasi"} (${fa.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${fa.map((ma,xa)=>`
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${xa+1}. ${ma.aspect}</strong>
                    ${se(ma.priority)}
                  </div>
                  <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0 0 0.4rem 0; line-height: 1.45;">
                    ${ma.problem}
                  </p>
                  <div style="color: #38bdf8; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
                    <span>➔ Tindakan:</span> <span>${ma.suggestedAction}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Aspek yang Sudah Baik -->
          ${Oa&&Oa.length>0?`
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${Oa.map(ma=>`<li>${ma}</li>`).join("")}
                </ul>
                <small style="color: #86efac; display: block; margin-top: 0.4rem; font-size: 0.75rem;">
                  💡 <em>Catatan: Aspek visual di atas sudah optimal pada foto asli, sehingga sistem secara cerdas tidak memunculkan shorthand yang tidak diperlukan untuk menjaga keaslian.</em>
                </small>
              </div>
            </div>
          `:""}

          <!-- 4. Rekomendasi Shorthand Perbaikan / Colour Grading (UNLIMITED) -->
          <div style="margin-bottom: 0.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                <span>🎯</span> ${s==="COLOUR_GRADING"?"Rekomendasi Shorthand Colour Grading":"Rekomendasi Shorthand Perbaikan"} (${z.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${z.map(ma=>`
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${s==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.25)":"rgba(168, 85, 247, 0.25)"}; border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: ${s==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
                        ${ma.code}
                      </code>
                      ${se(ma.issuePriority)}
                    </div>
                    <div style="font-weight: 600; color: #f1f5f9; font-size: 0.825rem; margin-bottom: 0.25rem;">
                      ${ma.name}
                    </div>
                    <p style="color: #94a3b8; font-size: 0.775rem; margin: 0 0 0.45rem 0; line-height: 1.4;">
                      ${ma.reason}
                    </p>
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.725rem; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 0.4rem; margin-top: 0.25rem;">
                    <span>Grup: <strong style="color: #cbd5e1;">${ma.functionGroup}</strong></span>
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: ${s==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; border-color: ${s==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.4)":"rgba(168, 85, 247, 0.4)"};">TERPASANG</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${ke.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${Te.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${Ee.html}
        ${Se.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${Re.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${te.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${ee.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${ne.html}
    </div>
  `,bindEvents(ma){_a.bindEvents(ma),ke.bindEvents(ma),te.bindEvents(ma),ee.bindEvents(ma),ne.bindEvents(ma);const xa=ma.querySelector("#btn-copy-generated-prompt");xa&&xa.addEventListener("click",()=>{h&&h(Y)})}}}function Hn({searchQuery:o="",searchResults:a=[],selectedShorthands:e=[],isSearching:t=!1,searchNotice:i=null,hasSearched:r=!1,catalog:s=[],savingCatalogCodes:n=[],justSavedCatalogCodes:l=[],failedCatalogCodes:d=[],onSearch:c,onAddShorthand:g,onRemoveShorthand:p,onClearAll:k,onCopyShorthands:u,onSaveToCatalog:m}){const h=new Set(e.map(E=>(E.code||E||"").toLowerCase().trim())),b=new Set((n||[]).map(E=>(E||"").toLowerCase().trim())),f=new Set((l||[]).map(E=>(E||"").toLowerCase().trim())),y=new Set((d||[]).map(E=>(E||"").toLowerCase().trim())),w=new Set,v=new Set;for(const E of s||[])if(E&&E.code&&w.add(E.code.toLowerCase().trim()),E&&Array.isArray(E.equivalentTo))for(const O of E.equivalentTo)typeof O=="string"&&O.trim()&&v.add(O.toLowerCase().trim());const T=e.length>0;let R="";T?R=e.map((E,O)=>{const N=typeof E=="string"?E:E.code,_=typeof E=="object"&&E.name?E.name:"";return`
          <div class="selected-shorthand-tag ${typeof E=="object"&&E.source==="ONLINE"?"tag-online":""}" title="${_?_+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${N}</span>
            <button type="button" class="btn-remove-tag" data-code="${N}" aria-label="Hapus ${N}">
              &times;
            </button>
          </div>
        `}).join(""):R=`
      <div class="empty-selected-notice">
        Belum ada shorthand yang dipilih. Cari shorthand di bawah lalu tekan tombol <strong>[ + ]</strong>.
      </div>
    `;let A="";return t?A=`
      <div class="searching-state">
        <div class="spinner"></div>
        <span>Mencari di katalog lokal &amp; online fallback...</span>
      </div>
    `:r&&a.length===0?A=`
      <div class="no-results-card">
        <div class="no-results-icon">🔍</div>
        <p class="no-results-text">
          ${i||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?A=`
      <div class="dictionary-results-grid">
        ${a.map(E=>{const N=(E.code||"").toLowerCase().trim(),_=h.has(N),L=E.source==="ONLINE",I=L?"badge-online":"badge-local",x=L?"🌐 ONLINE":"LOCAL",$=b.has(N),D=f.has(N),B=y.has(N),U=w.has(N)||v.has(N);let G="";return $?G=`
                <button type="button" class="btn btn-sm btn-catalog-status btn-catalog-saving" disabled title="Sedang menyimpan ke User Catalog...">
                  <span class="spinner-sm"></span> Menyimpan...
                </button>
              `:D?G=`
                <button type="button" class="btn btn-sm btn-catalog-status btn-catalog-saved" disabled title="Shorthand berhasil tersimpan di User Catalog">
                  <span class="check-icon">✓</span> Tersimpan di Catalog
                </button>
              `:U?G=`
                <button type="button" class="btn btn-sm btn-catalog-status btn-catalog-exists" disabled title="Shorthand atau alias ini sudah terdaftar di Catalog">
                  <span class="check-icon">✓</span> Sudah Ada di Catalog
                </button>
              `:B?G=`
                <button type="button" class="btn btn-sm btn-add-to-catalog btn-catalog-retry" data-code="${E.code}" title="Penyimpanan gagal. Klik untuk mencoba kembali.">
                  <span class="retry-icon">⚠️</span> Gagal Menyimpan
                </button>
              `:G=`
                <button type="button" class="btn btn-sm btn-add-to-catalog" data-code="${E.code}" title="Simpan shorthand ini beserta seluruh deskripsinya langsung ke User Catalog">
                  <span class="plus-icon">+</span> Tambah ke Catalog
                </button>
              `,`
              <div class="dictionary-card ${_?"card-selected":""}" data-code="${E.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${E.code}</span>
                    <span class="source-badge ${I}">${x}</span>
                  </div>
                  <div class="card-action">
                    ${_?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${E.code}" title="Tambahkan ${E.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${E.name||E.code}</div>
                  <div class="card-desc">${E.description||"Tidak ada deskripsi"}</div>
                  ${E.equivalentTo&&E.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${E.equivalentTo.slice(0,4).map(J=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${J}</span>`).join("")}
                      ${E.equivalentTo.length>4?`<span style="opacity: 0.6;">+${E.equivalentTo.length-4} lainnya</span>`:""}
                    </div>
                  `:""}
                </div>

                <div class="card-footer-actions">
                  <div class="card-footer-meta">
                    ${E.target?`<span class="footer-meta-pill" title="Target Area">🎯 ${E.target}</span>`:""}
                    ${E.category?`<span class="footer-meta-pill" title="Kategori Catalog">📁 ${E.category}</span>`:""}
                  </div>
                  <div class="card-footer-btn-wrapper">
                    ${G}
                  </div>
                </div>
              </div>
            `}).join("")}
      </div>
    `:A=`
      <div class="initial-search-hint">
        <p>Ketik kata kunci untuk mencari notasi shorthand visual. Contoh: <code>wajah</code>, <code>rambut</code>, <code>pencahayaan</code>, <code>ketajaman</code>, <code>cinematic</code>, <code>portrait</code>.</p>
      </div>
    `,{html:`
    <div class="dictionary-page-container">
      <!-- HEADER PANEL -->
      <section class="panel dictionary-header-panel">
        <div class="card-header">
          <div class="card-title">
            <span style="font-size: 1.4rem;">📚</span>
            <h2>KAMUS SHORTHAND</h2>
          </div>
        </div>
        <p class="panel-subtitle">
          Cari notasi shorthand satu per satu, kumpulkan dengan tombol <strong>[ + ]</strong>, dan salin seluruh shorthand yang terkumpul sekaligus. Pilihan Anda tetap aman saat mencari berulang kali.
        </p>

        <!-- PANEL SHORTHAND TERPILIH (SELALU MUNCUL DI ATAS) -->
        <div class="selected-shorthands-panel">
          <div class="selected-panel-header">
            <div class="selected-panel-title">
              <span>📌</span>
              <strong>SHORTHAND TERPILIH</strong>
              <span class="selected-count-badge">${e.length}</span>
            </div>
            <div class="selected-panel-actions">
              <button 
                type="button" 
                class="btn btn-secondary btn-sm" 
                id="btn-clear-all-shorthands" 
                ${T?"":"disabled"} 
                title="Kosongkan seluruh shorthand terpilih">
                🗑 Hapus Semua
              </button>
              <button 
                type="button" 
                class="btn btn-primary btn-sm" 
                id="btn-copy-selected-shorthands" 
                ${T?"":"disabled"} 
                title="Salin seluruh shorthand terpilih ke clipboard">
                📋 COPY SHORTHAND
              </button>
            </div>
          </div>

          <div class="selected-tags-container" id="selected-tags-container">
            ${R}
          </div>
        </div>
      </section>

      <!-- SEARCH SECTION -->
      <section class="panel dictionary-search-panel">
        <form id="dictionary-search-form" class="dictionary-search-form" onsubmit="return false;">
          <div class="search-input-wrapper">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              id="dictionary-search-input" 
              class="dictionary-search-input" 
              placeholder="Cari shorthand, fungsi, atau keyword (misal: wajah, rambut, pencahayaan)..." 
              value="${o||""}"
              autocomplete="off"
              spellcheck="false"
            />
            ${o?'<button type="button" class="btn-clear-search" id="btn-clear-search" title="Bersihkan pencarian">&times;</button>':""}
          </div>
          <button type="submit" class="btn btn-primary btn-search-submit" id="btn-search-submit">
            CARI
          </button>
        </form>

        <!-- Search Status Info -->
        ${r&&a.length>0?`
              <div class="search-status-bar">
                <span>Ditemukan <strong>${a.length}</strong> shorthand relevan untuk "<em>${o}</em>"</span>
                <span class="search-priority-hint">Prioritas: 1. Katalog Lokal &bull; 2. Online Fallback</span>
              </div>
            `:""}

        <!-- RESULTS LIST -->
        <div class="results-wrapper">
          ${A}
        </div>
      </section>
    </div>
  `,bindEvents(E){const O=E.querySelector("#dictionary-search-form"),N=E.querySelector("#dictionary-search-input"),_=E.querySelector("#btn-clear-search"),L=E.querySelector("#btn-copy-selected-shorthands"),I=E.querySelector("#btn-clear-all-shorthands");O&&N&&O.addEventListener("submit",x=>{x.preventDefault();const $=N.value.trim();c&&c($)}),_&&N&&_.addEventListener("click",()=>{N.value="",N.focus(),c&&c("")}),E.querySelectorAll(".btn-add-shorthand").forEach(x=>{x.addEventListener("click",()=>{const $=x.getAttribute("data-code"),D=a.find(B=>B.code===$);D&&g&&g(D)})}),E.querySelectorAll(".btn-remove-tag").forEach(x=>{x.addEventListener("click",()=>{const $=x.getAttribute("data-code");$&&p&&p($)})}),L&&L.addEventListener("click",()=>{u&&u()}),I&&I.addEventListener("click",()=>{k&&k()}),E.querySelectorAll(".btn-add-to-catalog").forEach(x=>{x.addEventListener("click",$=>{$.stopPropagation();const D=x.getAttribute("data-code"),B=a.find(U=>(U.code||"").toLowerCase()===(D||"").toLowerCase())||a.find(U=>U.code===D);B&&m&&m(B)})})}}}function zn({analysisResult:o,onCopyJson:a,onRunCustomJson:e}){var c,g,p;const t=JSON.stringify({rawPrompt:(o==null?void 0:o.rawPrompt)||"",cleanText:(o==null?void 0:o.cleanText)||"",installedShorthands:(o==null?void 0:o.installedShorthands)||[]},null,2),i=JSON.stringify(o||{},null,2),r=((c=o==null?void 0:o.conflicts)==null?void 0:c.length)>0,s=!!((g=o==null?void 0:o.intent)!=null&&g.primaryAction&&o.intent.primaryAction!=="-"),n=((p=o==null?void 0:o.installedShorthands)==null?void 0:p.length)||0,l=(o==null?void 0:o.source)||"LOCAL_ENGINE";return{html:`
    <section class="panel">
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">TEST (JSON) &mdash; PIPELINE DATA INSPECTOR</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Inspeksi representasi data JSON terstruktur untuk pengujian developer, integrasi API, dan validasi kepatuhan.
          </p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" id="btn-copy-output-json">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          Salin Output JSON
        </button>
      </div>

      <!-- Validation Checklist Bar -->
      <div class="validation-row">
        <div class="val-item" style="border-left: 3px solid ${s?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${s?"✅ Ya":"⚪ Menunggu Input"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid ${r?"var(--status-danger)":"var(--status-success)"};">
          <span>Status Konflik:</span>
          <strong>${r?"⚠️ Terdeteksi":"✅ Aman"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-blue);">
          <span>Shorthand Aktif:</span>
          <strong>${n} Item</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-purple);">
          <span>Sumber Engine:</span>
          <strong>${l}</strong>
        </div>
      </div>

      <!-- JSON Dual Viewer Grid -->
      <div class="json-viewer-container">
        <!-- Input JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase;">
              INPUT JSON
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Payload Masukan</span>
          </div>
          <pre class="json-box" id="json-input-view">${t}</pre>
        </div>

        <!-- Output JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7; text-transform: uppercase;">
              OUTPUT JSON (PIPELINE RESULT)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Hasil Analisis Lengkap</span>
          </div>
          <pre class="json-box" id="json-output-view">${i}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(k){const u=k.querySelector("#btn-copy-output-json");u&&u.addEventListener("click",()=>{a&&a(i)})}}}function Kn({catalog:o=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:t="ALL",searchQuery:i="",currentPage:r=1,pageSize:s=12,selectedDetailCode:n=null,isAddModalOpen:l=!1,isImportModalOpen:d=!1,duplicateWarning:c=null,geminiService:g=null,onSelectCategory:p,onSelectTarget:k,onSelectRecLevel:u,onSearchChange:m,onPageChange:h,onOpenDetail:b,onCloseDetail:f,onOpenAddModal:y,onCloseAddModal:w,onSubmitAddShorthand:v,onOpenImportModal:T,onCloseImportModal:R,onSubmitImport:A,onExportCatalog:S,onResetUserCatalog:E,onAddShorthandToPrompt:O}){const N=gt(o,{category:a,target:e,recommendationLevel:t,searchQuery:i}),_=N.length,L=Math.max(1,Math.ceil(_/s)),I=Math.min(Math.max(1,r),L),x=(I-1)*s,$=N.slice(x,x+s),D=Array.from(new Set(o.map(P=>P.target))).sort(),U=["ALL",...Object.keys(ie)].map(P=>{const W=ie[P],ha=P==="ALL"?"Semua Kategori":`${W.code}. ${W.label}`;return`
      <button type="button" class="category-tab-btn ${a===P?"active":""}" data-cat="${P}">
        ${ha}
      </button>
    `}).join(""),G=$.length>0?$.map(P=>{let W="badge-opsional";P.recommendationLevel==="WAJIB"||P.priority==="HIGH"?W="badge-wajib":P.recommendationLevel==="DISARANKAN"&&(W="badge-disarankan");const ha=P.source==="USER"?"badge-purple":"badge-neutral",ba=(P.semanticTriggers||[]).slice(0,3).map(q=>`<span class="compat-pill">"${q}"</span>`).join(" "),H=P.equivalentTo||[],Q=P.relationships||[];return`
          <div class="catalog-item-card" data-code="${P.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${P.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${ha}">${P.source||"CORE"}</span>
                  <span class="badge ${W}">${P.recommendationLevel||P.priority}</span>
                  <span class="badge badge-neutral">${P.category}</span>
                </div>
              </div>
              <h3 class="catalog-item-name">${P.name}</h3>
              <p class="catalog-item-desc" style="margin-top: 0.4rem;">${P.description}</p>
            </div>

            <!-- Structured Metadata Section -->
            <div class="catalog-meta-list" style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <div><strong>Target:</strong> <span style="color: #93c5fd;">${P.target}</span></div>
              ${P.functionGroup?`<div><strong>Fungsi:</strong> <span style="color: #c084fc; font-size: 0.75rem;">${P.functionGroup}</span></div>`:""}
              ${H.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${H.map(q=>`<span class="alias-tag font-mono">${q}</span>`).join(" ")}
                </div>
              `:""}
              ${Q.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${Q.length} terhubung (${Q.map(q=>q.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${ba||"-"}</div>
            </div>

            <!-- Card Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 0.75rem;">
              <button type="button" class="btn btn-outline btn-xs btn-open-detail" data-code="${P.code}" title="Lihat detail lengkap direktif">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Detail
              </button>
              <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${P.code}">
                + Tambah ke Prompt
              </button>
            </div>
          </div>
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',J=L>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${I<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${I} dari ${L} (${_} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${I>=L?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let K="";if(n){const P=o.find(W=>W.code===n);P&&(K=`
        <div class="modal-backdrop" id="modal-detail-backdrop">
          <div class="modal-card" style="max-width: 680px;" role="dialog" aria-modal="true">
            <div class="modal-header">
              <div>
                <span class="catalog-item-code" style="font-size: 1.35rem;">${P.code}</span>
                <h3 style="font-size: 1rem; color: #ffffff; margin-top: 0.2rem;">${P.name}</h3>
              </div>
              <button type="button" class="modal-close" id="btn-close-detail-modal" aria-label="Tutup">&times;</button>
            </div>

            <div class="modal-body" style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto;">
              <!-- Meta Row -->
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-neutral">Sumber: ${P.source||"CORE"}</span>
                <span class="badge badge-blue">Kategori: ${P.category}</span>
                <span class="badge badge-purple">Target: ${P.target}</span>
                <span class="badge badge-wajib">Level: ${P.recommendationLevel||P.priority}</span>
                ${P.preferredRepresentative?'<span class="badge badge-blue font-mono">REPRESENTATIF UTAMA</span>':""}
              </div>

              <!-- Function Group & Equivalents -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-card); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>Function Group:</strong> <span style="color: #c084fc;">${P.functionGroup||"-"}</span>
                </div>
                ${P.equivalentTo&&P.equivalentTo.length>0?`
                  <div style="margin-top: 0.4rem; font-size: 0.8rem;">
                    <strong>Alias Setara (Equivalent To):</strong>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.25rem;">
                      ${P.equivalentTo.map(W=>`<span class="alias-tag font-mono">${W}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${P.relationships&&P.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${P.relationships.map(W=>`
                      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 0.4rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                        <span class="font-mono" style="color: #c4b5fd; font-weight: 700;">${W.code}</span>
                        <span class="badge badge-purple" style="font-size: 0.65rem; margin-left: 0.35rem;">${W.relationType}</span>
                        <div style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.2rem;">${W.reason}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Deskripsi -->
              <div>
                <span class="detail-label">DESKRIPSI:</span>
                <p class="detail-value" style="margin-top: 0.25rem;">${P.description}</p>
              </div>

              <!-- Kapan Digunakan -->
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #6ee7b7; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${P.whenToUse||"Sesuai dengan instruksi user yang relevan."}</p>
              </div>

              <!-- Kapan Tidak Digunakan -->
              <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #fca5a5; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN TIDAK DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${P.whenNotToUse||"Jika bertentangan dengan preferensi user."}</p>
              </div>

              <!-- Semantic Triggers -->
              <div>
                <span class="detail-label">SEMANTIC TRIGGERS:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                  ${(P.semanticTriggers||[]).map(W=>`<span class="compat-pill">"${W}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${P.conflicts&&P.conflicts.length>0?P.conflicts.map(W=>`<span class="conflict-pill">${W}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${P.compatibleWith&&P.compatibleWith.length>0?P.compatibleWith.map(W=>`<span class="compat-pill">${W}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-close-detail-footer">Tutup</button>
              <button type="button" class="btn btn-primary btn-sm btn-add-from-modal" data-code="${P.code}">
                + Tambah ${P.code} ke Prompt
              </button>
            </div>
          </div>
        </div>
      `)}let na="";if(l){const P=Object.keys(za);na=`
      <div class="modal-backdrop" id="modal-add-backdrop">
        <div class="modal-card" style="max-width: 620px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">+ Tambah Shorthand Baru (User Catalog)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Tersimpan permanen di browser (IndexedDB). Tidak akan terhapus saat Analyzer di-reset.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-add-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-add-shorthand">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 65vh; overflow-y: auto;">
              ${c?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${c.message}</p>
                  <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
                    Disarankan menambahkan kode ini sebagai <em>Alias Setara (Equivalent To)</em> atau klik Simpan Kembali jika tetap ingin membuat entri baru.
                  </p>
                </div>
              `:""}

              <!-- SMART AUTO-FILL SECTION -->
              <div class="autofill-section" style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: var(--radius-sm); padding: 0.85rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                  <strong style="color: #818cf8; font-size: 0.82rem; letter-spacing: 0.04em; display: flex; align-items: center; gap: 0.35rem;">
                    ✨ SMART AUTO-FILL — ISI METADATA OTOMATIS
                  </strong>
                </div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0 0 0.55rem 0; line-height: 1.4;">
                  Masukkan kode dan arti shorthand. Sistem akan membantu mengisi kolom metadata yang tersedia. Hasil dapat diperiksa dan diedit sebelum disimpan.
                </p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <div style="flex: 1; min-width: 220px;">
                    <label class="detail-label" for="autofill-raw-input" style="font-size: 0.7rem; margin-bottom: 0.2rem; display: block;">Kode Shorthand dan Deskripsi</label>
                    <input type="text" id="autofill-raw-input" class="input-primary" style="width: 100%;" 
                           placeholder="/facelock — mempertahankan identitas wajah" />
                  </div>
                  <div style="display: flex; align-items: flex-end;">
                    <button type="button" id="btn-run-autofill" class="btn btn-primary btn-sm" style="height: 38px; white-space: nowrap;">
                      ✨ Isi Otomatis
                    </button>
                  </div>
                </div>
                <div id="autofill-status-msg" style="display: none; font-size: 0.75rem; margin-top: 0.6rem; border-radius: var(--radius-sm); padding: 0.55rem 0.75rem;"></div>
              </div>

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-code">KODE SHORTHAND *</label>
                  <input type="text" id="add-code" class="input-primary" placeholder="/customtag" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
                <div>
                  <label class="detail-label" for="add-name">NAMA SHORTHAND *</label>
                  <input type="text" id="add-name" class="input-primary" placeholder="Nama representatif" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-category">KATEGORI *</label>
                  <select id="add-category" class="select-input" style="width: 100%; margin-top: 0.25rem;">
                    ${Object.keys(ie).map(W=>`<option value="${W}">${W} - ${ie[W].label}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label class="detail-label" for="add-target">TARGET AREA *</label>
                  <input type="text" id="add-target" class="input-primary" placeholder="Misal: Wajah, Pakaian, Latar" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div>
                <label class="detail-label" for="add-func-group">FUNCTION GROUP (SEMANTIC DEDUPLICATION) *</label>
                <input type="text" id="add-func-group" class="input-primary" placeholder="Misal: CUSTOM_ACTION atau pilih group standar" list="list-func-groups" style="width: 100%; margin-top: 0.25rem;" />
                <datalist id="list-func-groups">
                  ${P.map(W=>`<option value="${W}">`).join("")}
                </datalist>
              </div>

              <div>
                <label class="detail-label" for="add-desc">DESKRIPSI *</label>
                <textarea id="add-desc" class="input-primary" rows="2" placeholder="Fungsi dan cara kerja shorthand ini..." required style="width: 100%; margin-top: 0.25rem;"></textarea>
              </div>

              <div>
                <label class="detail-label" for="add-triggers">SEMANTIC TRIGGERS (Pisahkan dengan koma)</label>
                <input type="text" id="add-triggers" class="input-primary" placeholder="kata kunci 1, kata kunci 2, pemicu semantik" style="width: 100%; margin-top: 0.25rem;" />
              </div>

              <div>
                <label class="detail-label" for="add-equivalent">ALIAS SETARA (EQUIVALENT TO, pisahkan dengan koma)</label>
                <input type="text" id="add-equivalent" class="input-primary" placeholder="/alias1, /alias2" style="width: 100%; margin-top: 0.25rem;" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-add">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Simpan Shorthand</button>
            </div>
          </form>
        </div>
      </div>
    `}let ia="";return d&&(ia=`
      <div class="modal-backdrop" id="modal-import-backdrop">
        <div class="modal-card" style="max-width: 580px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">⬆️ Impor Katalog (JSON)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Impor data shorthand. Format JSON aman tanpa API key atau kredensial rahasia.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-import-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-import-catalog">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div>
                <label class="detail-label">MODE IMPOR:</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.35rem;">
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="MERGE" checked />
                    <strong>MERGE</strong> (Gabungkan tanpa menimpa CORE)
                  </label>
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="REPLACE" />
                    <strong>REPLACE</strong> (Ganti User Catalog)
                  </label>
                </div>
              </div>

              <div>
                <label class="detail-label" for="import-json-textarea">PASTE JSON ATAU PILIH FILE:</label>
                <textarea id="import-json-textarea" class="input-primary font-mono" rows="6" placeholder='{ "catalogVersion": "2.1", "entries": [...] }' style="width: 100%; margin-top: 0.25rem; font-size: 0.775rem;"></textarea>
              </div>

              <div>
                <input type="file" id="import-file-input" accept=".json" style="font-size: 0.8rem; color: var(--text-muted);" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-import">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Mulai Impor</button>
            </div>
          </form>
        </div>
      </div>
    `),{html:`
    <section class="panel">
      <!-- Page Header -->
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">SEMANTIC SHORTHAND KNOWLEDGE BASE</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Basis pengetahuan semantik shorthand yang terintegrasi langsung dengan Semantic Engine, Deduplikasi Fungsi, dan Relasi Antar-Domain.
          </p>
        </div>
        <span class="badge badge-blue font-mono">${o.length} Shorthand Terdaftar</span>
      </div>

      <!-- Action Bar: Add, Export, Import, Reset User Catalog -->
      <div class="catalog-action-bar">
        <div style="font-size: 0.825rem; color: var(--text-muted);">
          CORE CATALOG: <strong>Read-Only</strong> &bull; USER CATALOG: <strong>IndexedDB Persistent</strong>
        </div>
        <div class="catalog-actions-group">
          <button type="button" class="btn btn-primary btn-xs" id="btn-open-add-shorthand">
            + Tambah Shorthand
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-catalog" title="Download sanitized catalog JSON">
            ⬇️ Ekspor JSON
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-open-import-catalog" title="Import catalog JSON">
            ⬆️ Impor JSON
          </button>
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-user-catalog" title="Reset hanya entri user, core tetap utuh">
            🔄 Reset User Katalog
          </button>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="category-tabs" id="catalog-category-tabs" style="margin-bottom: 1rem;">
        ${U}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${D.map(P=>`<option value="${P}" ${e===P?"selected":""}>Target: ${P}</option>`).join("")}
          </select>

          <!-- Filter Recommendation Level -->
          <select id="select-filter-rec-level" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Level Rekomendasi --</option>
            <option value="WAJIB" ${t==="WAJIB"?"selected":""}>Level: WAJIB</option>
            <option value="DISARANKAN" ${t==="DISARANKAN"?"selected":""}>Level: DISARANKAN</option>
            <option value="OPSIONAL" ${t==="OPSIONAL"?"selected":""}>Level: OPSIONAL</option>
          </select>
        </div>

        <!-- Semantic Search Input -->
        <div style="flex: 1; max-width: 380px; min-width: 250px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari semantik: misal 'jangan ubah wajah', 'ganti baju', 'latar baru'..."
            value="${i||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${G}
      </div>

      <!-- Pagination -->
      ${J}

      <!-- Modals -->
      ${K}
      ${na}
      ${ia}
    </section>
  `,bindEvents(P){P.querySelectorAll(".category-tab-btn").forEach(oa=>{oa.addEventListener("click",()=>{const ua=oa.getAttribute("data-cat");p&&p(ua)})});const W=P.querySelector("#select-filter-target");W&&W.addEventListener("change",oa=>{k&&k(oa.target.value)});const ha=P.querySelector("#select-filter-rec-level");ha&&ha.addEventListener("change",oa=>{u&&u(oa.target.value)});const ba=P.querySelector("#catalog-search-input");ba&&ba.addEventListener("input",oa=>{m&&m(oa.target.value)});const H=P.querySelector(".btn-prev-page");H&&H.addEventListener("click",()=>{h&&h(I-1)});const Q=P.querySelector(".btn-next-page");Q&&Q.addEventListener("click",()=>{h&&h(I+1)});const q=P.querySelector("#btn-open-add-shorthand");q&&y&&q.addEventListener("click",y);const ja=P.querySelector("#btn-export-catalog");ja&&S&&ja.addEventListener("click",S);const wa=P.querySelector("#btn-open-import-catalog");wa&&T&&wa.addEventListener("click",T);const Na=P.querySelector("#btn-reset-user-catalog");Na&&E&&Na.addEventListener("click",E),P.querySelectorAll(".btn-open-detail").forEach(oa=>{oa.addEventListener("click",()=>{const ua=oa.getAttribute("data-code");b&&b(ua)})});const Ra=P.querySelector("#btn-close-detail-modal"),ya=P.querySelector("#btn-close-detail-footer"),Ta=P.querySelector("#modal-detail-backdrop"),Ea=()=>{f&&f()};Ra&&Ra.addEventListener("click",Ea),ya&&ya.addEventListener("click",Ea),Ta&&Ta.addEventListener("click",oa=>{oa.target===Ta&&Ea()});const Ia=P.querySelector("#btn-close-add-modal"),j=P.querySelector("#btn-cancel-add"),C=P.querySelector("#modal-add-backdrop"),X=()=>{w&&w()};Ia&&Ia.addEventListener("click",X),j&&j.addEventListener("click",X),C&&C.addEventListener("click",oa=>{oa.target===C&&X()});const sa=P.querySelector("#btn-run-autofill"),M=P.querySelector("#autofill-raw-input"),ta=P.querySelector("#autofill-status-msg");if(sa&&M){const oa=async()=>{const ua=M.value.trim();if(!ua){ta&&(ta.style.display="block",ta.style.background="rgba(239, 68, 68, 0.15)",ta.style.border="1px solid #ef4444",ta.style.color="#fca5a5",ta.innerHTML="⚠️ Masukkan kode dan deskripsi terlebih dahulu (misal: <code>/facelock — mempertahankan identitas wajah</code>).");return}const Y=P.querySelector("#add-code"),da=P.querySelector("#add-name"),aa=P.querySelector("#add-category"),F=P.querySelector("#add-target"),V=P.querySelector("#add-func-group"),ra=P.querySelector("#add-desc"),pa=P.querySelector("#add-triggers"),fa=P.querySelector("#add-equivalent"),Oa={code:Y?Y.value.trim():"",name:da?da.value.trim():"",category:aa?aa.value:"",target:F?F.value.trim():"",functionGroup:V?V.value.trim():"",description:ra?ra.value.trim():"",triggers:pa?pa.value.trim():"",equivalent:fa?fa.value.trim():""},z=ft(ua,o,Oa);if(!z.success){ta&&(ta.style.display="block",ta.style.background="rgba(239, 68, 68, 0.15)",ta.style.border="1px solid #ef4444",ta.style.color="#fca5a5",ta.innerHTML=`⚠️ <strong>Format Belum Sesuai:</strong> ${z.error}`);return}if(Y&&(Y.value=z.metadata.code),da&&(da.value=z.metadata.name),aa&&z.metadata.category&&(aa.value=z.metadata.category),F&&z.metadata.target&&(F.value=z.metadata.target),V&&z.metadata.functionGroup&&(V.value=z.metadata.functionGroup),ra&&z.metadata.description&&(ra.value=z.metadata.description),pa&&z.metadata.semanticTriggers.length>0&&(pa.value=z.metadata.semanticTriggers.join(", ")),fa&&(fa.value=z.metadata.equivalentTo.join(", ")),ta){ta.style.display="block",ta.style.background=z.isDuplicate?"rgba(245, 158, 11, 0.15)":"rgba(16, 185, 129, 0.12)",ta.style.border=z.isDuplicate?"1px solid #f59e0b":"1px solid #10b981",ta.style.color="#ffffff";const ca=[];z.isDuplicate?ca.push(`<span style="color: #fbbf24;">⚠️ Kode <b>${z.metadata.code}</b> sudah ada di katalog</span>`):ca.push(`<span style="color: #4ade80;">✅ Kode: <b>${z.metadata.code}</b></span>`),z.metadata.category?ca.push(`Kategori: <b>${z.metadata.category}</b>`):ca.push('<span style="color: #fbbf24;">Kategori: Perlu Tinjauan Manual</span>'),z.metadata.target&&ca.push(`Target: <b>${z.metadata.target}</b>`),z.metadata.functionGroup&&ca.push(`Group: <b>${z.metadata.functionGroup}</b>`),z.metadata.equivalentTo.length>0&&ca.push(`Alias Terverifikasi: <b>${z.metadata.equivalentTo.join(", ")}</b>`),ta.innerHTML=`
              <div style="font-size: 0.8rem; margin-bottom: 0.25rem;">
                ${z.isDuplicate?"⚠️ <strong>Peringatan Duplikasi Shorthand:</strong>":"✨ <strong>Kolom Metadata Berhasil Diisi Otomatis:</strong>"}
              </div>
              <div style="font-size: 0.75rem; color: #e2e8f0; line-height: 1.45;">
                ${ca.join(" | ")}
              </div>
              <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">
                * Kolom di bawah tetap dapat ditinjau dan diedit manual. Tekan <strong>Simpan Shorthand</strong> untuk menyimpan.
              </div>
            `}if(g&&typeof g.getStatus=="function"){const ca=g.getStatus();if(ca&&ca.status==="CONNECTED"&&typeof g.analyzeShorthandMetadata=="function")try{const ka=await g.analyzeShorthandMetadata({code:z.metadata.code,description:z.metadata.description});if(ka){if(ka.category&&aa&&!z.metadata.category&&(aa.value=ka.category),ka.target&&F&&!z.metadata.target&&(F.value=ka.target),ka.functionGroup&&V&&!z.metadata.functionGroup&&(V.value=ka.functionGroup),Array.isArray(ka.semanticTriggers)&&ka.semanticTriggers.length>0&&pa){const Ga=Array.from(new Set([...z.metadata.semanticTriggers,...ka.semanticTriggers]));pa.value=Ga.join(", ")}if(ta){const Ga=ta.querySelector("div:last-child");Ga&&(Ga.innerHTML+=' <span style="color: #60a5fa;">(Diperkaya oleh Gemini AI)</span>')}}}catch{}}};sa.addEventListener("click",oa),M.addEventListener("keydown",ua=>{ua.key==="Enter"&&(ua.preventDefault(),oa())})}const Pa=P.querySelector("#form-add-shorthand");Pa&&v&&Pa.addEventListener("submit",oa=>{oa.preventDefault();let ua=P.querySelector("#add-code").value.trim();ua.startsWith("/")||(ua="/"+ua);const Y=P.querySelector("#add-name").value.trim(),da=P.querySelector("#add-category").value,aa=P.querySelector("#add-target").value.trim(),F=P.querySelector("#add-func-group").value.trim()||da,V=P.querySelector("#add-desc").value.trim(),ra=P.querySelector("#add-triggers").value.trim(),pa=P.querySelector("#add-equivalent").value.trim(),fa=ra?ra.split(",").map(z=>z.trim()).filter(Boolean):[],Oa=pa?pa.split(",").map(z=>z.trim().startsWith("/")?z.trim():"/"+z.trim()).filter(Boolean):[];v({code:ua,name:Y,category:da,target:aa,functionGroup:F,description:V,semanticTriggers:fa,equivalentTo:Oa,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${aa.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const La=P.querySelector("#btn-close-import-modal"),la=P.querySelector("#btn-cancel-import"),Z=P.querySelector("#modal-import-backdrop"),$a=()=>{R&&R()};La&&La.addEventListener("click",$a),la&&la.addEventListener("click",$a),Z&&Z.addEventListener("click",oa=>{oa.target===Z&&$a()});const Ca=P.querySelector("#import-file-input"),Sa=P.querySelector("#import-json-textarea");Ca&&Sa&&Ca.addEventListener("change",oa=>{const ua=oa.target.files[0];if(ua){const Y=new FileReader;Y.onload=da=>{Sa.value=da.target.result},Y.readAsText(ua)}});const Ha=P.querySelector("#form-import-catalog");Ha&&A&&Ha.addEventListener("submit",oa=>{var da,aa,F;oa.preventDefault();const ua=((da=P.querySelector('input[name="import-mode"]:checked'))==null?void 0:da.value)||"MERGE",Y=(F=(aa=P.querySelector("#import-json-textarea"))==null?void 0:aa.value)==null?void 0:F.trim();A(Y,ua)}),P.querySelectorAll(".btn-add-from-catalog").forEach(oa=>{oa.addEventListener("click",()=>{const ua=oa.getAttribute("data-code");O&&O(ua)})});const Ma=P.querySelector(".btn-add-from-modal");Ma&&Ma.addEventListener("click",()=>{const oa=Ma.getAttribute("data-code");O&&O(oa),Ea()})}}}function Vn({geminiStatusInfo:o,onTestConnection:a,onSaveSettings:e,onClearKey:t}){const i=ea.getApiKey(),r=ea.getModel(),{status:s,error:n}=o;let l="status-unconfigured",d="🟡 Gemini: Belum diuji / konfigurasi";return s===Aa.CONNECTED?(l="status-connected",d="🟢 Gemini: Tersambung"):s===Aa.FAILED&&(l="status-failed",d="🔴 Gemini: Gagal"),{html:`
    <div class="settings-container">
      <section class="panel">
        <div class="card-header">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: var(--accent-blue);"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <h2>API &amp; PENGATURAN (BYOK)</h2>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
          Aplikasi beroperasi dengan sistem <strong>BYOK (Bring Your Own Key)</strong>. 
          API key disimpan hanya di browser lokal Anda (<code>localStorage</code>) dan tidak pernah dikirim ke server developer.
        </p>

        <!-- FORM BYOK -->
        <form id="settings-form" onsubmit="return false;">
          <!-- API Key Input with Show/Hide -->
          <div class="form-group">
            <label class="form-label" for="setting-api-key">Gemini API Key:</label>
            <div class="password-input-group">
              <input 
                type="password" 
                id="setting-api-key" 
                placeholder="AIzaSy..." 
                value="${i||""}" 
                autocomplete="off"
                spellcheck="false"
              />
              <button type="button" class="password-toggle-btn" id="btn-toggle-key-visibility" title="Tampilkan/Sembunyikan Key">
                <svg class="icon-sm" id="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>
            <p class="form-help">
              Dapatkan API Key gratis di <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue);">Google AI Studio</a>.
            </p>
          </div>

          <!-- Model Selector -->
          <div class="form-group">
            <label class="form-label" for="setting-model-select">Model Gemini:</label>
            <select id="setting-model-select" class="select-input" style="width: 100%; padding: 0.65rem 0.85rem;">
              <option value="gemini-2.0-flash" ${r==="gemini-2.0-flash"?"selected":""}>gemini-2.0-flash (Rekomendasi Utama &bull; Multimodal Cepat &amp; Akurat)</option>
              <option value="gemini-3.5-flash-lite" ${r==="gemini-3.5-flash-lite"?"selected":""}>gemini-3.5-flash-lite (Flash-Lite &bull; Cepat, Ringan &amp; Hemat Kuota)</option>
              <option value="gemini-1.5-flash" ${r==="gemini-1.5-flash"?"selected":""}>gemini-1.5-flash (Flash &bull; Ringan &amp; Stabil)</option>
              <option value="gemini-2.5-flash" ${r==="gemini-2.5-flash"?"selected":""}>gemini-2.5-flash (Penalaran Hibrida &bull; Flash)</option>
              <option value="gemini-1.5-flash-8b" ${r==="gemini-1.5-flash-8b"?"selected":""}>gemini-1.5-flash-8b (Ultra Cepat &amp; Hemat Kuota)</option>
            </select>
          </div>

          <!-- Connection Status Card -->
          <div class="connection-status-card">
            <div style="flex: 1;">
              <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                Status Koneksi:
              </div>
              <div class="status-badge ${l}" id="settings-status-badge">
                <span class="status-dot"></span>
                <span>${d}</span>
              </div>
              ${n?`<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${n}</div>`:""}
            </div>
            <div>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-test-connection">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                Test Connection
              </button>
            </div>
          </div>

          <!-- Action Buttons: Save & Clear -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-danger btn-sm" id="btn-clear-key" title="Hapus API Key dari browser">
              Clear Key
            </button>
            <button type="button" class="btn btn-primary" id="btn-save-settings">
              Save / Apply
            </button>
          </div>
        </form>

        <!-- Fallback notice -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
          <strong>🛡️ Mode Offline &amp; Heuristic Fallback:</strong>
          Jika API Key tidak diisi atau koneksi offline, aplikasi tidak akan pernah crash. Engine Semantik Lokal otomatis aktif memproses prompt, mendeteksi entity lock, dan merumuskan shorthand.
        </div>

        <!-- V3 Safe Patch Architecture Panel -->
        <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 8px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); font-size: 0.8rem; line-height: 1.6;">
          <div style="font-weight: 700; color: var(--accent-blue); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>🛡️</span>
            <span>V3 SAFE PATCH-ONLY ARCHITECTURE</span>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: 0.6rem;">
            Basis / Source of Truth: <strong>Prompt Shorthand Analyzer V2 (Immutable)</strong>. 
            Semua penambahan fitur di V3 beroperasi melalui layer patch independen tanpa memodifikasi kode inti.
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle); color: var(--text-secondary);">
            • Core Patch: v3-core-architecture (Active &bull; Priority 1000)<br/>
            • Safe Execution Wrapper: ENABLED (Zero-Crash Fallback Active)<br/>
            • Baseline V2 Knowledge Base: 15 Kategori A-O &bull; 46 Core Shorthands (Preserved)
          </div>
        </div>
      </section>
    </div>
  `,bindEvents(g){const p=g.querySelector("#setting-api-key"),k=g.querySelector("#setting-model-select"),u=g.querySelector("#btn-toggle-key-visibility"),m=g.querySelector("#btn-test-connection"),h=g.querySelector("#btn-save-settings"),b=g.querySelector("#btn-clear-key");u&&p&&u.addEventListener("click",()=>{const f=p.type==="password";p.type=f?"text":"password"}),m&&m.addEventListener("click",()=>{a&&a(p.value,k.value)}),h&&h.addEventListener("click",()=>{e&&e(p.value,k.value)}),b&&b.addEventListener("click",()=>{p.value="",t&&t()})}}}const Je={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class Qe{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const t=a.trim().toLowerCase(),i=t.startsWith("/")?t.slice(1):t,r=t.split(/\s+/).filter(Boolean),s=new Set(r);for(const l of r)if(Je[l])for(const d of Je[l])s.add(d.toLowerCase());const n=[];for(const l of e){if(!l||!l.code)continue;let d=0;const c=(l.code||"").toLowerCase(),g=c.startsWith("/")?c.slice(1):c,p=(l.name||"").toLowerCase(),k=(l.description||"").toLowerCase(),u=(l.category||"").toLowerCase(),m=Array.isArray(l.semanticTriggers)?l.semanticTriggers.map(b=>(b||"").toLowerCase()):[],h=(l.whenToUse||"").toLowerCase();c===t||g===i?d+=1e3:g.startsWith(i)?d+=600:g.includes(i)&&(d+=350);for(const b of m)if(b===t)d+=400;else if(b.includes(t))d+=250;else for(const f of s)if(f.length>2&&b.includes(f)){d+=100;break}if(p===t)d+=300;else if(p.includes(t))d+=200;else for(const b of s)if(b.length>2&&p.includes(b)){d+=80;break}if(k.includes(t))d+=150;else for(const b of s)if(b.length>2&&k.includes(b)){d+=60;break}u.includes(t)&&(d+=50),h.includes(t)&&(d+=40),d>0&&n.push({...l,score:d,source:"LOCAL",isOnline:!1})}return n.sort((l,d)=>d.score-l.score),this.deduplicateResultsByFunction(n)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,t=new Map;for(const r of a){if(!r||!r.code)continue;const s=r.code.toLowerCase();let n=t.get(s);if(!n){n=r.functionGroup||r.category||s;for(const[l,d]of e.entries())if(d.some(g=>(g.equivalentTo||[]).map(k=>typeof k=="string"?k.toLowerCase():"").includes(s))){n=l;break}}if(t.set(s,n),Array.isArray(r.equivalentTo))for(const l of r.equivalentTo)typeof l=="string"&&t.set(l.toLowerCase(),n);e.has(n)?e.get(n).push(r):e.set(n,[r])}const i=[];for(const[r,s]of e.entries()){if(s.length===1){i.push(s[0]);continue}s.sort((c,g)=>{if(c.preferredRepresentative&&!g.preferredRepresentative)return-1;if(!c.preferredRepresentative&&g.preferredRepresentative)return 1;if((g.score||0)!==(c.score||0))return(g.score||0)-(c.score||0);const p={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},k=p[c.status]||(c.source==="LOCAL"?3:1),u=p[g.status]||(g.source==="LOCAL"?3:1);return u!==k?u-k:(c.code||"").length-(g.code||"").length});const n=s[0],l=s.slice(1).map(c=>c.code),d=Array.from(new Set([...n.equivalentTo||[],...l]));i.push({...n,equivalentTo:d})}return i.sort((r,s)=>(s.score||0)-(r.score||0)),i}static async search(a,e=[],t=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const i=a.trim();let r=[];try{r=this.searchLocal(i,e)}catch(p){console.warn("[DictionaryService] Error pencarian lokal:",p),r=[]}let s=[],n=null;const l=r.some(p=>p.score>=600);if((r.length<4||!l)&&t)try{const p=await t.searchOnlineShorthand(i);if(p&&Array.isArray(p.results)){const k=new Set(r.map(u=>u.code.toLowerCase()));s=p.results.filter(u=>!k.has(u.code.toLowerCase()))}p&&p.message&&r.length===0&&(n=p.message)}catch(p){console.warn("[DictionaryService] Online fallback error:",p)}const c=this.deduplicateResultsByFunction([...r,...s]);let g=null;return c.length===0&&(g=n||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:i,results:c,localCount:r.length,onlineCount:s.length,notice:g}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class Fn{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new vt(Me),this.catalog=this.catalogRepo.getAll(),this.geminiService=new dn(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.selectedAspectRatio="auto",this.currentPrompt="",this.promptAnalysisAspectRatio="auto",this.promptAnalysisCustomAspectRatio="",this.promptAnalysisAspectRatioError=null,this.isAnalyzing=!1,this.analysisRequestId=0,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1,savingCatalogCodes:[],justSavedCatalogCodes:[],failedCatalogCodes:[]},this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.colourGradingConfig={...Ya},this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.promptVariationsState={sourceType:"PREVIOUS_ANALYSIS",customPrompt:"",variationImage:null,variationCount:5,selectedApproaches:["composition_framing","environment_background","lighting_mood","visual_style"],lockedElements:{face:!0,outfit:!0,pose:!1,color:!1,custom:""},aspectRatio:"auto",customAspectRatio:"",aspectRatioError:null,generatedVariations:[],isGenerating:!1,generationMeta:null},this.promptOptimizerState={sourceType:"OPTIMAL_PROMPT",manualPrompt:"",selectedVariationIndex:0,mode:"balanced",versionCount:3,lockedElements:{face:!0,outfit:!0,pose:!1,color:!1,aspectRatio:!0,custom:""},results:[],isOptimizing:!1,comparingVersionIndex:null},this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=ea.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="toast-container",document.body.appendChild(t));const i=document.createElement("div");i.className=`toast toast-${e}`,i.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,t.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 0.3s ease",setTimeout(()=>i.remove(),300)},2800)}async runAnalysis(a,e=null){var i;const t=++this.analysisRequestId;if(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS"||this.activeMode==="BACKGROUND_ANALYSIS"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const r=this.uploadedImage.file?Object.assign(this.uploadedImage.file,{width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry}):{name:this.uploadedImage.name,size:this.uploadedImage.size,width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry},s=this.selectedAspectRatio&&this.selectedAspectRatio!=="auto"&&this.selectedAspectRatio!=="Otomatis"?this.selectedAspectRatio:this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio||"auto";let n;if(this.activeMode==="BACKGROUND_ANALYSIS"?n=await this.geminiService.analyzeBackground({imageFile:r,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry,targetAspectRatio:s}):n=await this.geminiService.analyzeImageToPrompt({imageFile:r,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry,targetAspectRatio:s,isTwoWorlds:this.activeMode==="TWO_WORLDS",twoWorldsConfig:this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null}),t!==this.analysisRequestId)return;if(n.mode=this.activeMode,this.activeMode==="TWO_WORLDS"){const l=n.twoWorldsSmartDetection||((i=n.visionData)==null?void 0:i.smartDetection)||st(n.visionData,this.uploadedImage,this.uploadedImage.visualTelemetry,this.twoWorldsConfig);if(l){this.twoWorldsDetectedValues={...l};const d={...this.twoWorldsConfig},c=["gender","age","ethnicity","subjectStyle","environmentStyle"];for(const g of c)!this.twoWorldsManualLocks[g]&&l[g]&&(d[g]=l[g]);this.twoWorldsConfig=d,typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(n.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(n.visionData,n.installedShorthands||[],this.twoWorldsConfig),n.generatedPrompt=n.optimalPrompt)}}if(this.analysisResult=n,n.source==="GEMINI_AI")this.activeMode==="BACKGROUND_ANALYSIS"?this.showToast("✅ Analisa Latar Belakang Vision AI berhasil!","success"):this.activeMode==="TWO_WORLDS"?this.showToast("✅ Analisa 2 Dunia Vision AI berhasil!","success"):this.showToast("✅ Analisa Vision AI berhasil berdasarkan gambar aktual!","success");else if(n.source==="LOCAL_ENGINE_FALLBACK"){const l=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${l}, menggunakan analisis visual lokal.`,"warning")}else this.activeMode==="BACKGROUND_ANALYSIS"?this.showToast("Analisa latar belakang & profil spasial berhasil!"):this.activeMode==="TWO_WORLDS"?this.showToast("Analisa 2 dunia & pemetaan shorthand berhasil!"):this.showToast("Analisa gambar & pemetaan shorthand berhasil!")}catch(r){if(t!==this.analysisRequestId)return;this.showToast(`Gagal menganalisis gambar: ${r.message}`,"error")}finally{t===this.analysisRequestId&&(this.isAnalyzing=!1,this.render())}return}if(this.activeMode==="SHORTHAND_IMPROVE"||this.activeMode==="COLOUR_GRADING"){const r=this.activeMode==="COLOUR_GRADING";if(this.uploadedImage){this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const s=await this.geminiService.analyzeImageRepair({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,notesPrompt:a,isColourGrading:r,mode:this.activeMode,colourGradingConfig:r?this.colourGradingConfig:null,telemetry:r&&(this.uploadedImage.colorTelemetry||this.uploadedImage.visualTelemetry)||null});if(t!==this.analysisRequestId)return;if(s.mode=this.activeMode,this.analysisResult=s,s.source==="GEMINI_AI")this.showToast(r?"✅ Diagnosis visual Vision AI & rekomendasi colour grading selesai!":"✅ Diagnosis visual Vision AI & rekomendasi perbaikan selesai!","success");else if(s.source==="LOCAL_ENGINE_FALLBACK"){const n=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${n}, menggunakan diagnosis visual lokal.`,"warning")}else this.showToast(r?"Diagnosis visual & rekomendasi colour grading selesai!":"Diagnosis visual & rekomendasi perbaikan gambar selesai!")}catch(s){if(t!==this.analysisRequestId)return;this.showToast(`Gagal menganalisis ${r?"colour grading":"perbaikan gambar"}: ${s.message}`,"error")}finally{t===this.analysisRequestId&&(this.isAnalyzing=!1,this.render())}return}if(!a||!a.trim()){this.showToast(r?"Silakan unggah gambar atau masukkan preferensi colour grading yang diinginkan.":"Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const s=await this.geminiService.analyzeShorthandImprove(a,e,{isColourGrading:r,mode:this.activeMode});if(t!==this.analysisRequestId)return;s.mode=this.activeMode,this.analysisResult=s,this.showToast(r?"Analisa shorthand colour grading selesai!":"Analisa shorthand perbaikan selesai!")}catch(s){if(t!==this.analysisRequestId)return;this.showToast(`Gagal menganalisis: ${s.message}`,"error")}finally{t===this.analysisRequestId&&(this.isAnalyzing=!1,this.render())}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}if(this.promptAnalysisAspectRatio==="custom"){const r=qa(this.promptAnalysisCustomAspectRatio);if(!r.valid){this.promptAnalysisAspectRatioError=r.error,this.showToast(r.error,"warning"),this.render();return}this.promptAnalysisAspectRatioError=null}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const r=await this.geminiService.analyzePrompt(a,e);if(t!==this.analysisRequestId)return;this.analysisResult=r,this.syncPromptAnalysisAspectRatioToResults(),this.showToast("Analisis prompt selesai!")}catch(r){if(t!==this.analysisRequestId)return;this.showToast(`Gagal menganalisis: ${r.message}`,"error")}finally{t===this.analysisRequestId&&(this.isAnalyzing=!1,this.render())}}handleReset(){this.analysisRequestId++,this.isAnalyzing=!1,this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.promptAnalysisAspectRatio="auto",this.promptAnalysisCustomAspectRatio="",this.promptAnalysisAspectRatioError=null,this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.analysisRequestId++,this.isAnalyzing=!1,this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.promptAnalysisAspectRatioError=null,this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleTwoWorldsConfigChange(a,e=null){const t={...a},i=["gender","age","ethnicity","subjectStyle","environmentStyle"];if(e&&i.includes(e)){const r=t[e];r&&typeof r=="string"&&r.startsWith("Auto")?(this.twoWorldsManualLocks[e]=!1,this.twoWorldsDetectedValues&&this.twoWorldsDetectedValues[e]&&(t[e]=this.twoWorldsDetectedValues[e])):this.twoWorldsManualLocks[e]=!0}else for(const r of i)if(t[r]!==void 0&&t[r]!==this.twoWorldsConfig[r]){const s=t[r];s&&typeof s=="string"&&s.startsWith("Auto")?(this.twoWorldsManualLocks[r]=!1,this.twoWorldsDetectedValues&&this.twoWorldsDetectedValues[r]&&(t[r]=this.twoWorldsDetectedValues[r])):this.twoWorldsManualLocks[r]=!0}this.twoWorldsConfig={...this.twoWorldsConfig,...t},this.activeMode==="TWO_WORLDS"&&this.analysisResult&&this.analysisResult.visionData&&typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.twoWorldsConfig),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt),this.render()}handleColourGradingConfigChange(a){this.colourGradingConfig={...this.colourGradingConfig,...a},this.activeMode==="COLOUR_GRADING"&&this.analysisResult&&this.analysisResult.isColourGrading&&(this.analysisResult.colourGradingConfig=this.colourGradingConfig),this.render()}handleResetGrading(){this.colourGradingConfig={...Ya},this.render(),this.showToast("Pengaturan Colour Grading telah di-reset ke nilai default (Foto Asli).")}handleSelectBatchImage(a){this.batchGradingImages&&this.batchGradingImages[a]&&(this.activeGradingBatchIndex=a,this.uploadedImage=this.batchGradingImages[a],this.render())}handleAspectRatioChange(a){var t,i;this.selectedAspectRatio=a;const e=a==="auto"||a==="Otomatis"?this.uploadedImage&&(this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio)||"1:1":a;if(this.analysisResult&&this.analysisResult.visionData)this.analysisResult.visionData.aspectRatio=e,this.analysisResult.visualBreakdown&&(this.analysisResult.visualBreakdown["Aspect Ratio"]=e),typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt);else if(this.analysisResult&&this.analysisResult.backgroundData){this.analysisResult.backgroundData.aspectRatio=e,this.analysisResult.imageInfo&&(this.analysisResult.imageInfo.aspectRatio=e);const r=e,s=((t=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:t.category)||"modern authentic room",n=((i=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:i.setting)||"clean spatial setting",l=(this.analysisResult.installedShorthands||[]).join(" "),d=l?`${l} --ar ${r} --style raw --v 6.1`:`--ar ${r} --style raw --v 6.1`;this.analysisResult.optimalPrompt=`Interior architectural photography of ${s}, ${n}, natural lighting, balanced composition, highly detailed textures, 8k resolution, photorealistic ${d}

--no human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, watermark, text`}a==="auto"||a==="Otomatis"?this.showToast(`📐 Rasio Aspek: Otomatis (Asli: ${e})`):this.showToast(`📐 Rasio Aspek Target: ${a} (Proporsi subjek dipertahankan)`),this.render()}syncPromptAnalysisAspectRatioToResults(){if(!this.analysisResult)return;let a=null;if(this.promptAnalysisAspectRatio==="custom"){const e=qa(this.promptAnalysisCustomAspectRatio);if(e.valid)a=e.normalized;else return}else if(this.promptAnalysisAspectRatio==="auto"){const e=this.currentPrompt||"";a=De({sourceType:"CUSTOM_PROMPT",basePrompt:e})}else a=this.promptAnalysisAspectRatio;this.analysisResult.optimalPrompt&&(this.analysisResult.optimalPrompt=Xa(this.analysisResult.optimalPrompt,a)),this.analysisResult.generatedPrompt&&(this.analysisResult.generatedPrompt=Xa(this.analysisResult.generatedPrompt,a))}handlePromptAnalysisAspectRatioChange(a){if(this.promptAnalysisAspectRatio=a,this.promptAnalysisAspectRatioError=null,a==="custom"&&this.promptAnalysisCustomAspectRatio){const e=qa(this.promptAnalysisCustomAspectRatio);e.valid||(this.promptAnalysisAspectRatioError=e.error)}this.analysisResult&&(this.analysisResult.optimalPrompt||this.analysisResult.generatedPrompt)&&this.syncPromptAnalysisAspectRatioToResults(),a==="auto"?this.showToast("📐 Rasio: Otomatis (Ikuti Prompt)"):a==="custom"?this.showToast("📐 Rasio: Bebas / Custom (Masukkan W:H)"):this.showToast(`📐 Rasio Hasil Generate: ${a}`),this.render()}handlePromptAnalysisCustomAspectRatioChange(a){if(this.promptAnalysisCustomAspectRatio=a,this.promptAnalysisAspectRatio==="custom"){const e=qa(a);e.valid?(this.promptAnalysisAspectRatioError=null,this.analysisResult&&(this.analysisResult.optimalPrompt||this.analysisResult.generatedPrompt)&&this.syncPromptAnalysisAspectRatioToResults()):this.promptAnalysisAspectRatioError=e.error}this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a,e="✅ Main Prompt berhasil disalin ke clipboard!"){const t=un(a);if(!t){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(t).then(()=>{this.showToast(e)}).catch(()=>{const i=document.createElement("textarea");i.value=t,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove(),this.showToast(e)})}handleEditOptimalPrompt(a){var i,r,s,n,l,d,c,g,p;if(!a||!a.trim()){this.showToast("Prompt tidak boleh kosong.","warning");return}const e=a.trim();this.analysisResult||(this.analysisResult={}),this.analysisResult.optimalPrompt=e,this.analysisResult.generatedPrompt=e,this.analysisResult.backgroundData&&(this.analysisResult.backgroundData.optimalPrompt=e);const t=this.geminiService.analyzeImageShorthandsBlueprint(e,{aspectRatio:((i=this.analysisResult.backgroundData)==null?void 0:i.aspectRatio)||this.selectedAspectRatio||"16:9",environment:((s=(r=this.analysisResult.backgroundData)==null?void 0:r.elemenBackground)==null?void 0:s.arsitektur)||"",background:((l=(n=this.analysisResult.backgroundData)==null?void 0:n.elemenBackground)==null?void 0:l.arsitektur)||"",lighting:((c=(d=this.analysisResult.backgroundData)==null?void 0:d.elemenBackground)==null?void 0:c.lighting)||"",colorTone:((p=(g=this.analysisResult.backgroundData)==null?void 0:g.elemenBackground)==null?void 0:p.warna)||""});this.analysisResult.primaryShorthands=t.primaryShorthands,this.analysisResult.relatedShorthands=t.relatedShorthands,this.analysisResult.similarShorthands=t.similarShorthands,this.analysisResult.recommendations=[...t.primaryShorthands,...t.relatedShorthands,...t.similarShorthands],this.analysisResult.installedShorthands=t.primaryShorthands.map(k=>k.code),this.analysisResult.conflicts=t.conflicts,this.analysisResult.exclusions=t.exclusions,this.showToast("✅ Prompt Analisa Optimal diperbarui & Shorthand diselaraskan!"),this.render()}handleRegenerateOptimalPrompt(){if(!this.analysisResult||!this.analysisResult.backgroundData){this.showToast("Data analisa latar belakang belum tersedia.","warning");return}this.bgPromptVariant=((this.bgPromptVariant||0)+1)%3;const a=Zt(this.analysisResult.backgroundData,this.bgPromptVariant);this.handleEditOptimalPrompt(a),this.showToast(`🔄 Prompt Analisa Optimal baru berhasil digenerate (Variasi ${this.bgPromptVariant+1})!`)}async handleEnrichPrompt(){var t,i,r;const a=((t=this.analysisResult)==null?void 0:t.optimalPrompt)||"";if(!a||!a.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!!!(ea.getApiKey()&&ea.getApiKey().trim())||this.geminiService.status===Aa.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{if(this.activeMode==="TWO_WORLDS"||((i=this.analysisResult)==null?void 0:i.mode)==="TWO_WORLDS"){this.showToast("Menyelaraskan & memperkaya prompt 2 Dunia dengan Gemini AI...","info");const n=await this.geminiService.enrichTwoWorldsPrompt({optimalPrompt:a,generatedPrompt:((r=this.analysisResult)==null?void 0:r.generatedPrompt)||"",twoWorldsConfig:this.twoWorldsConfig,analysisResult:this.analysisResult});if(n&&n.success&&n.enrichedPrompt){this.analysisResult.optimalPrompt=n.enrichedPrompt;const l=n.conflictsResolved&&n.conflictsResolved.length>0?"✨ Prompt Optimal 2 Dunia berhasil diperkaya & konflik diselaraskan!":"✨ Prompt Optimal 2 Dunia berhasil diperkaya dengan AI!";this.showToast(l,"success")}else throw new Error("Hasil pengayaan AI 2 Dunia tidak valid.")}else{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const n=await this.geminiService.enrichPrompt(a,this.analysisResult);if(n&&n.success&&n.enrichedPrompt)this.analysisResult.optimalPrompt=n.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}}catch(s){console.warn("Enrich prompt error:",s),this.showToast(`Gagal memperkaya prompt: ${s.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const t=[...e,a];this.updateInstalledShorthands(t),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const t=(this.analysisResult.installedShorthands||[]).filter(i=>i!==a);this.updateInstalledShorthands(t),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){var e,t;if(this.analysisResult.installedShorthands=a,this.analysisResult.mode==="BACKGROUND_ANALYSIS"&&this.analysisResult.backgroundData){const i=this.analysisResult.backgroundData.aspectRatio||"16:9",r=((e=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:e.category)||"modern authentic room",s=((t=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:t.setting)||"clean spatial setting",n=a.length>0?`${a.join(" ")} --ar ${i} --style raw --v 6.1`:`--ar ${i} --style raw --v 6.1`;this.analysisResult.optimalPrompt=`Interior architectural photography of ${r}, ${s}, natural lighting, balanced composition, highly detailed textures, 8k resolution, photorealistic ${n}

--no human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, watermark, text`}else if((this.analysisResult.mode==="IMAGE_TO_PROMPT"||this.analysisResult.mode==="TWO_WORLDS")&&this.analysisResult.visionData)this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,a,this.analysisResult.mode==="TWO_WORLDS"?this.twoWorldsConfig:null);else if(this.analysisResult.isColourGrading){if(typeof this.geminiService.assembleImageRepairPrompt=="function"){const i=this.uploadedImagesList[this.activeUploadedImageIndex],r=(i==null?void 0:i.colorTelemetry)||(i==null?void 0:i.visualTelemetry)||this.analysisResult.telemetry||null,s=this.geminiService.assembleImageRepairPrompt({...this.analysisResult,colourGradingConfig:this.colourGradingConfig,telemetry:r,installedOverrides:a});this.analysisResult.optimalPrompt=s.optimalPrompt}}else if(this.analysisResult.isImageRepair&&this.analysisResult.repairInstructions){const i=this.analysisResult.englishBasePrompt||va(this.analysisResult.repairInstructions.trim());this.analysisResult.optimalPrompt=a.length>0?`${i} ${a.join(" ")}`.trim():i}else{const i=this.analysisResult.englishBasePrompt||va(this.analysisResult.cleanText||"");this.analysisResult.optimalPrompt=a.length>0?`${i}. ${a.join(" ")}`.trim():i}if(this.activeMode==="ANALISA_PROMPT"&&this.syncPromptAnalysisAspectRatioToResults(),this.analysisResult.recommendations)for(const i of this.analysisResult.recommendations)i.checked=a.includes(i.code),i.active=i.checked;if(this.analysisResult.primaryShorthands)for(const i of this.analysisResult.primaryShorthands)i.checked=a.includes(i.code),i.active=i.checked;if(this.analysisResult.relatedShorthands)for(const i of this.analysisResult.relatedShorthands)i.checked=a.includes(i.code),i.active=i.checked;if(this.analysisResult.similarShorthands)for(const i of this.analysisResult.similarShorthands)i.checked=a.includes(i.code),i.active=i.checked;this.render()}handleResolveConflict(a,e){const t=this.analysisResult.conflicts.find(s=>s.id===a);if(!t)return;let i=[...this.analysisResult.installedShorthands||[]];const r=t.type==="EDIT_VS_LOCK"||t.shorthandA&&t.shorthandA.includes("lock");if(e==="use_user_edit"){i=i.filter(n=>n!==t.shorthandA);const s=r?`Kunci ${t.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${t.shorthandB}, ${t.shorthandA} dihapus.`;this.showToast(s)}else if(e==="keep_lock"){i=i.filter(n=>n!==t.shorthandB),i.includes(t.shorthandA)||i.push(t.shorthandA);const s=r?`Lock ${t.shorthandA} dipertahankan.`:`Memilih ${t.shorthandA}, ${t.shorthandB} dihapus.`;this.showToast(s)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(s=>s.id!==a),this.updateInstalledShorthands(i)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(t),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const t=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${t.count} shorthand (${e})!`),this.render()}catch(t){this.showToast(`Gagal impor: ${t.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const t=await this.geminiService.testConnection(a,e);t.success?this.showToast(t.message,"success"):this.showToast(t.message,"error"),this.render()}handleSaveSettings(a,e){ea.setApiKey(a),ea.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){ea.clearApiKey(),this.geminiService.status=Aa.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await Qe.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();if(!e)return;this.dictionaryState.selectedShorthands.some(i=>(typeof i=="string"?i:i.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render())}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=Qe.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}async handleSaveDictionaryToCatalog(a){if(!a||!a.code){this.showToast("Data shorthand tidak valid untuk disimpan.","error");return}let e=(a.code||"").trim();e.startsWith("/")||(e="/"+e);const t=e.replace(/\s+/g,"").toLowerCase(),i=this.catalog.find(s=>s&&s.code&&s.code.toLowerCase()===t);if(i){this.showToast(`Shorthand ${t} sudah ada di Catalog (${i.source||"CORE"}).`,"info");return}const r=this.catalog.find(s=>Array.isArray(s.equivalentTo)&&s.equivalentTo.some(n=>typeof n=="string"&&n.toLowerCase()===t));if(r){this.showToast(`Kode ${t} sudah terdaftar sebagai alias dari ${r.code} di Catalog.`,"info");return}this.dictionaryState.savingCatalogCodes||(this.dictionaryState.savingCatalogCodes=[]),this.dictionaryState.savingCatalogCodes=[...this.dictionaryState.savingCatalogCodes,t],this.render();try{const s=a.description||"Instruksi visual shorthand untuk AI image generation.",n=a.name&&a.name!==a.code?a.name:Ze(t,s),l=a.target||at(`${n} ${s}`)||"Umum";let d=a.category;(!d||!ie[d])&&(d=et(`${n} ${s}`,l)||"LOCK_PRESERVATION");const c=a.functionGroup||tt(`${n} ${s}`,d,l)||(za[d]?d:"GENERAL_PRESERVATION"),g=Array.isArray(a.semanticTriggers)&&a.semanticTriggers.length>0?a.semanticTriggers:nt(t,s,l),p=Array.isArray(a.equivalentTo)&&a.equivalentTo.length>0?a.equivalentTo:it(t,c,l,this.catalog),k={code:t,name:n,description:s,category:d,target:l,functionGroup:c,equivalentTo:p,semanticTriggers:g,negativeTriggers:Array.isArray(a.negativeTriggers)?a.negativeTriggers:[],conflicts:Array.isArray(a.conflicts)?a.conflicts:[],compatibleWith:Array.isArray(a.compatibleWith)?a.compatibleWith:[],relationships:Array.isArray(a.relationships)?a.relationships:[],recommendationLevel:a.recommendationLevel||(d==="LOCK_PRESERVATION"?"WAJIB":"DISARANKAN"),priority:a.priority||(d==="LOCK_PRESERVATION"?"HIGH":"MEDIUM"),status:"CUSTOM",source:"USER",preferredRepresentative:!1,updatedAt:new Date().toISOString()};await this.catalogRepo.add(k),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.dictionaryState.savingCatalogCodes=(this.dictionaryState.savingCatalogCodes||[]).filter(u=>u!==t),this.dictionaryState.justSavedCatalogCodes||(this.dictionaryState.justSavedCatalogCodes=[]),this.dictionaryState.justSavedCatalogCodes=[...this.dictionaryState.justSavedCatalogCodes,t],this.dictionaryState.failedCatalogCodes=(this.dictionaryState.failedCatalogCodes||[]).filter(u=>u!==t),this.showToast(`✅ Shorthand ${t} berhasil disimpan ke User Catalog!`,"success")}catch(s){console.error("[App] Error menyimpan shorthand ke catalog:",s),this.dictionaryState.savingCatalogCodes=(this.dictionaryState.savingCatalogCodes||[]).filter(n=>n!==t),this.dictionaryState.failedCatalogCodes||(this.dictionaryState.failedCatalogCodes=[]),this.dictionaryState.failedCatalogCodes=[...this.dictionaryState.failedCatalogCodes,t],this.showToast(`Gagal menyimpan shorthand ke Catalog: ${s.message}`,"error")}this.render()}handleVariationSourceTypeChange(a){this.promptVariationsState.sourceType=a,this.render()}handleVariationCustomPromptChange(a){this.promptVariationsState.customPrompt=a}handleVariationCountChange(a){this.promptVariationsState.variationCount=a,this.render()}handleToggleVariationApproach(a,e){const t=this.promptVariationsState.selectedApproaches;e&&!t.includes(a)?this.promptVariationsState.selectedApproaches=[...t,a]:!e&&t.includes(a)&&(this.promptVariationsState.selectedApproaches=t.filter(i=>i!==a)),this.render()}handleToggleVariationLock(a,e){this.promptVariationsState.lockedElements.hasOwnProperty(a)&&(this.promptVariationsState.lockedElements[a]=e,this.render())}handleCustomVariationLockChange(a){this.promptVariationsState.lockedElements.custom=a}handleVariationAspectRatioChange(a){this.promptVariationsState.aspectRatio=a,this.promptVariationsState.aspectRatioError=null,this.render()}handleVariationCustomAspectRatioChange(a){if(this.promptVariationsState.customAspectRatio=a,this.promptVariationsState.aspectRatio==="custom"){const e=qa(a);this.promptVariationsState.aspectRatioError=e.valid?null:e.error}}async handleVariationImageSelected(a){if(a)try{const e=new FileReader;e.onload=t=>{const i=t.target.result,r=new Image;r.onload=()=>{const s=r.naturalWidth||r.width,n=r.naturalHeight||r.height,l=`${s}:${n}`;this.promptVariationsState.variationImage={file:a,name:a.name,size:a.size,width:s,height:n,aspectRatio:l,base64:i,type:a.type||"image/jpeg"},this.render(),this.showToast(`Gambar variasi "${a.name}" berhasil dimuat!`)},r.src=i},e.readAsDataURL(a)}catch(e){this.showToast("Gagal memproses gambar variasi: "+e.message,"error")}}handleVariationImageRemoved(){this.promptVariationsState.variationImage=null,this.render(),this.showToast("Gambar variasi dihapus.")}async handleGenerateVariations(){var s,n,l,d;const a=this.promptVariationsState;let e="",t=null,i="image/jpeg",r=[];if(a.aspectRatio==="custom"){const c=qa(a.customAspectRatio);if(!c.valid){a.aspectRatioError=c.error,this.render(),this.showToast(c.error,"error");return}a.aspectRatioError=null}if(a.sourceType==="PREVIOUS_ANALYSIS"){if(e=((s=this.analysisResult)==null?void 0:s.optimalPrompt)||((n=this.analysisResult)==null?void 0:n.generatedPrompt)||this.currentPrompt||"",r=((l=this.analysisResult)==null?void 0:l.installedShorthands)||[],(d=this.uploadedImage)!=null&&d.base64&&(t=this.uploadedImage.base64,i=this.uploadedImage.type),!e){this.showToast("Belum ada hasil analisis sebelumnya. Silakan masukkan prompt atau upload gambar terlebih dahulu.","warning");return}}else if(a.sourceType==="NEW_IMAGE"){if(!a.variationImage){this.showToast("Silakan pilih atau upload gambar baru untuk variasi.","warning");return}e=a.customPrompt||"A high-end photographic portrait with pristine detail and lighting",t=a.variationImage.base64,i=a.variationImage.type}else{if(e=(a.customPrompt||"").trim(),!e){this.showToast("Silakan ketik atau tempelkan prompt acuan terlebih dahulu.","warning");return}r=e.match(/\/[a-zA-Z0-9_-]+/g)||[]}a.isGenerating=!0,this.render();try{const c=await this.geminiService.generatePromptVariations({source:a.sourceType,basePrompt:e,imageBase64:t,mimeType:i,count:a.variationCount,selectedApproaches:a.selectedApproaches,lockedConfig:a.lockedElements,installedShorthands:r,aspectRatio:a.aspectRatio,customAspectRatio:a.customAspectRatio,variationImage:a.variationImage,previousAnalysis:this.analysisResult});a.generatedVariations=c.variations||[],a.generationMeta={source:c.source,notice:c.notice},this.showToast(`Berhasil menghasilkan ${a.generatedVariations.length} ide variasi!`)}catch(c){console.error("Error generating variations:",c),this.showToast("Gagal menghasilkan variasi: "+c.message,"error")}finally{a.isGenerating=!1,this.render();const c=document.getElementById("card-variation-results");c&&c.scrollIntoView({behavior:"smooth"})}}handleSetMainPromptFromVariation(a){a&&(this.currentPrompt=a,this.analysisResult&&(this.analysisResult.optimalPrompt=a,this.analysisResult.generatedPrompt=a),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.render(),this.showToast("Variasi berhasil ditetapkan sebagai Prompt Utama di tab Analisa Prompt!"),window.scrollTo({top:0,behavior:"smooth"}))}handleOptimizeVariation(a){a&&(this.promptOptimizerState.sourceType="MANUAL_PROMPT",this.promptOptimizerState.manualPrompt=a,this.activeTab="analyzer",this.activeMode="PROMPT_OPTIMIZER",this.render(),this.showToast("Prompt variasi dikirim ke Prompt Optimizer!"),window.scrollTo({top:0,behavior:"smooth"}))}handleMakeBaseForNextVariation(a){a&&(this.promptVariationsState.sourceType="CUSTOM_PROMPT",this.promptVariationsState.customPrompt=a,this.render(),this.showToast("Variasi berhasil dijadikan basis baru untuk eksplorasi lanjutan!"),window.scrollTo({top:150,behavior:"smooth"}))}handlePromptOptimizerStateChange(a){!a||typeof a!="object"||(this.promptOptimizerState={...this.promptOptimizerState,...a,lockedElements:{...this.promptOptimizerState.lockedElements,...a.lockedElements||{}}},this.render())}async handleRunPromptOptimization(){var t,i,r,s,n,l;const a=this.promptOptimizerState;let e="";if(a.sourceType==="OPTIMAL_PROMPT"){if(e=(((t=this.analysisResult)==null?void 0:t.optimalPrompt)||((i=this.analysisResult)==null?void 0:i.generatedPrompt)||this.currentPrompt||"").trim(),!e){this.showToast("Belum ada Prompt Optimal dari hasil Analisis. Silakan lakukan Analisa Prompt terlebih dahulu atau pilih sumber Manual.","warning");return}}else if(a.sourceType==="VARIATION_PROMPT"){const d=((r=this.promptVariationsState)==null?void 0:r.generatedVariations)||[],c=d[a.selectedVariationIndex]||d[0];if(e=((c==null?void 0:c.prompt)||"").trim(),!e){this.showToast("Belum ada hasil variasi yang tersedia. Silakan hasilkan variasi di tab Ide Variasi Prompt atau pilih sumber Manual.","warning");return}}else if(e=(a.manualPrompt||"").trim(),!e){this.showToast("Silakan ketik atau tempelkan prompt pada kolom manual terlebih dahulu.","warning");return}a.isOptimizing=!0,a.comparingVersionIndex=null,this.render();try{const d=((s=this.uploadedImage)==null?void 0:s.detectedAspectRatio)||((n=this.uploadedImage)!=null&&n.width&&((l=this.uploadedImage)!=null&&l.height)?`${this.uploadedImage.width}:${this.uploadedImage.height}`:null),c=await this.geminiService.optimizePrompt({basePrompt:e,mode:a.mode,count:a.versionCount,lockedConfig:a.lockedElements,detectedRatio:d});a.results=c.results||[],this.showToast(`Berhasil menghasilkan ${a.results.length} versi prompt teroptimasi!`)}catch(d){console.error("Error running prompt optimization:",d),this.showToast("Gagal mengoptimalkan prompt: "+d.message,"error")}finally{a.isOptimizing=!1,this.render();const d=document.getElementById("optimizer-results-container");d&&d.scrollIntoView({behavior:"smooth"})}}handleSetAsMainPrompt(a){a&&(this.currentPrompt=a,this.analysisResult&&(this.analysisResult.optimalPrompt=a),this.showToast("⭐ Prompt hasil optimasi berhasil dijadikan Prompt Utama!"),this.render())}handleOptimizeAgain(a){if(!a)return;this.promptOptimizerState.sourceType="MANUAL_PROMPT",this.promptOptimizerState.manualPrompt=a,this.promptOptimizerState.results=[],this.promptOptimizerState.comparingVersionIndex=null,this.render(),this.showToast("Prompt dimasukkan ke kolom Input Manual. Silakan sesuaikan mode lalu klik Optimalkan Prompt.");const e=document.getElementById("card-input");e&&e.scrollIntoView({behavior:"smooth"})}render(){var i,r,s;const a=this.geminiService.getStatus(),e=pn(this.activeTab,a,n=>{this.activeTab=n,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let t=null;if(this.activeTab==="analyzer"){const l=!!(ea.getApiKey()&&ea.getApiKey().trim())&&this.geminiService.status!==Aa.FAILED;t=Bn({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:l,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,selectedAspectRatio:this.selectedAspectRatio,onAspectRatioChange:d=>this.handleAspectRatioChange(d),twoWorldsConfig:this.twoWorldsConfig,onTwoWorldsConfigChange:(d,c)=>this.handleTwoWorldsConfigChange(d,c),colourGradingConfig:this.colourGradingConfig,onColourGradingConfigChange:d=>this.handleColourGradingConfigChange(d),onResetGrading:()=>this.handleResetGrading(),batchImages:this.batchGradingImages,activeBatchIndex:this.activeGradingBatchIndex,onSelectBatchImage:d=>this.handleSelectBatchImage(d),onModeChange:d=>{this.activeMode!==d&&(this.activeMode=d,this.render())},onImageSelected:(d,c)=>{this.uploadedImage=d,this.activeMode==="TWO_WORLDS"&&(this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null),c&&Array.isArray(c)&&c.length>0?(this.batchGradingImages=c,this.activeGradingBatchIndex=0):d?(this.batchGradingImages=[d],this.activeGradingBatchIndex=0):(this.batchGradingImages=[],this.activeGradingBatchIndex=0),this.colourGradingConfig&&this.colourGradingConfig.aiStyleAnalyzer&&(this.colourGradingConfig.aiStyleAnalyzer={...this.colourGradingConfig.aiStyleAnalyzer,photoDiagnostics:null,rankedResults:null,generatedPrompt:""}),this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render(),(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS"||this.activeMode==="BACKGROUND_ANALYSIS")&&this.runAnalysis(this.currentPrompt)},onImageRemoved:()=>{this.uploadedImage=null,this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onAnalyze:d=>this.runAnalysis(d),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:d=>this.handleSelectPreset(d),onCopyPrompt:d=>this.handleCopyPrompt(d),onCopyGeneratedPrompt:d=>this.handleCopyPrompt(d),onCopyBackgroundProfile:d=>this.handleCopyPrompt(d),onCopyPlacementProfile:d=>this.handleCopyPrompt(d),onCopyFullReport:d=>this.handleCopyPrompt(d),onCopyMood:d=>this.handleCopyPrompt(d,"✅ Ringkasan Suasana / Mood berhasil disalin!"),onCopyPhotographyStyle:d=>this.handleCopyPrompt(d,"✅ Ringkasan Gaya Fotografi berhasil disalin!"),onCopySubjectPlacement:d=>this.handleCopyPrompt(d,"✅ Ringkasan Hubungan Subjek & Latar berhasil disalin!"),onCopyOutfit:d=>this.handleCopyPrompt(d,"✅ Ringkasan Referensi Outfit Subjek berhasil disalin!"),onCopyBackgroundElements:d=>this.handleCopyPrompt(d,"✅ Ringkasan Elemen Background berhasil disalin!"),onCopyCompositionSpatial:d=>this.handleCopyPrompt(d,"✅ Ringkasan Komposisi & Spatial Relationship berhasil disalin!"),onEditOptimalPrompt:d=>this.handleEditOptimalPrompt(d),onRegenerateOptimalPrompt:()=>this.handleRegenerateOptimalPrompt(),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:d=>this.handleAddShorthand(d),onRemoveShorthand:d=>this.handleRemoveShorthand(d),onToggleRecommendation:d=>this.handleToggleRecommendation(d),onResolveConflict:(d,c)=>this.handleResolveConflict(d,c),promptAnalysisAspectRatio:this.promptAnalysisAspectRatio,promptAnalysisCustomAspectRatio:this.promptAnalysisCustomAspectRatio,promptAnalysisAspectRatioError:this.promptAnalysisAspectRatioError,onPromptAnalysisAspectRatioChange:d=>this.handlePromptAnalysisAspectRatioChange(d),onPromptAnalysisCustomAspectRatioChange:d=>this.handlePromptAnalysisCustomAspectRatioChange(d),promptOptimizerState:this.promptOptimizerState,onPromptOptimizerStateChange:d=>this.handlePromptOptimizerStateChange(d),onRunPromptOptimization:()=>this.handleRunPromptOptimization(),onCopyOptimizedPrompt:d=>this.handleCopyPrompt(d,"📋 Prompt teroptimasi berhasil disalin!"),onSetAsMainPrompt:d=>this.handleSetAsMainPrompt(d),onOptimizeAgain:d=>this.handleOptimizeAgain(d),optimalPromptForOptimizer:((i=this.analysisResult)==null?void 0:i.optimalPrompt)||((r=this.analysisResult)==null?void 0:r.generatedPrompt)||this.currentPrompt||"",variationListForOptimizer:((s=this.promptVariationsState)==null?void 0:s.generatedVariations)||[],promptVariationsState:this.promptVariationsState,previousAnalysisForVariations:this.analysisResult,onVariationSourceTypeChange:d=>this.handleVariationSourceTypeChange(d),onVariationCustomPromptChange:d=>this.handleVariationCustomPromptChange(d),onVariationImageSelected:d=>this.handleVariationImageSelected(d),onVariationImageRemoved:()=>this.handleVariationImageRemoved(),onVariationCountChange:d=>this.handleVariationCountChange(d),onToggleVariationApproach:(d,c)=>this.handleToggleVariationApproach(d,c),onToggleVariationLock:(d,c)=>this.handleToggleVariationLock(d,c),onCustomVariationLockChange:d=>this.handleCustomVariationLockChange(d),onVariationAspectRatioChange:d=>this.handleVariationAspectRatioChange(d),onVariationCustomAspectRatioChange:d=>this.handleVariationCustomAspectRatioChange(d),onGenerateVariations:()=>this.handleGenerateVariations(),onCopyVariationPrompt:d=>this.handleCopyPrompt(d,"✅ Prompt variasi disalin ke clipboard!"),onSetMainPromptFromVariation:d=>this.handleSetMainPromptFromVariation(d),onOptimizeVariation:d=>this.handleOptimizeVariation(d),onMakeBaseForNextVariation:d=>this.handleMakeBaseForNextVariation(d),showNotification:(d,c="success")=>this.showToast(d,c)})}else if(this.activeTab==="prompt-variations"){this.activeTab="analyzer",this.activeMode="PROMPT_VARIATIONS",this.render();return}else this.activeTab==="json-test"?t=zn({analysisResult:this.analysisResult,onCopyJson:n=>{navigator.clipboard.writeText(n),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?t=Kn({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,geminiService:this.geminiService,onSelectCategory:n=>{this.catalogCategory=n,this.catalogCurrentPage=1,this.render()},onSelectTarget:n=>{this.catalogTarget=n,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:n=>{this.catalogRecLevel=n,this.catalogCurrentPage=1,this.render()},onSearchChange:n=>{this.catalogSearchQuery=n,this.catalogCurrentPage=1,this.render()},onPageChange:n=>{this.catalogCurrentPage=n,this.render()},onOpenDetail:n=>{this.selectedDetailCode=n,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async n=>{await this.handleAddShorthandSubmit(n)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(n,l)=>{await this.handleImportCatalog(n,l)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:n=>{this.handleAddShorthand(n),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${n} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?t=Hn({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,catalog:this.catalog,savingCatalogCodes:this.dictionaryState.savingCatalogCodes,justSavedCatalogCodes:this.dictionaryState.justSavedCatalogCodes,failedCatalogCodes:this.dictionaryState.failedCatalogCodes,onSearch:n=>this.handleDictionarySearch(n),onAddShorthand:n=>this.handleDictionaryAddShorthand(n),onRemoveShorthand:n=>this.handleDictionaryRemoveShorthand(n),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy(),onSaveToCatalog:async n=>{await this.handleSaveDictionaryToCatalog(n)}}):this.activeTab==="settings"&&(t=Vn({geminiStatusInfo:a,onTestConnection:(n,l)=>this.handleTestConnection(n,l),onSaveSettings:(n,l)=>this.handleSaveSettings(n,l),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
      <div class="app-container">
        ${e.html}
        <main class="main-content">
          ${t.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V3.8</strong> &mdash; Safe Patch-Only Architecture
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; Kamus Shorthand Enabled
            </div>
          </div>
        </footer>
      </div>
    `,e.bindEvents(this.appRoot),t.bindEvents&&t.bindEvents(this.appRoot)}}function $e(){if(window.__PSA_APP__)return;document.getElementById("app")&&(window.__PSA_APP__=new Fn,window.__PSA_APP__.render())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$e):$e();window.addEventListener("load",$e);
//# sourceMappingURL=index-Cvu7VBZf.js.map
