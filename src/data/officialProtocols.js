// Official Guidelines and Clinical Protocols Database
// Sourced from Ministry of Health and Family Welfare (MoHFW), 
// National Health Mission (NHM), Ayushman Bharat CPHC / HWC Guidelines,
// WHO IMNCI, and National Vector Borne Disease Control Programme.
// Covers Maternal, Newborn, Child Illness, Adult Emergencies, and Common Daily Health Issues.

export const OFFICIAL_PROTOCOLS = [
  // =========================================================================
  // SECTION 1: CHILD HEALTH & NEWBORN CARE (IMNCI & HBNC)
  // =========================================================================
  {
    id: "prot-imnci-diarrhea-dehydration",
    code: "MOHFW-IMNCI-DIA-01",
    title: "Diarrhea with Severe Dehydration in Under-5 Child",
    hindiTitle: "5 वर्ष से कम उम्र के बच्चों में दस्त और गंभीर निर्जलीकरण",
    category: "Child Health (IMNCI)",
    hindiCategory: "बाल स्वास्थ्य (IMNCI)",
    issuingAuthority: "Ministry of Health & Family Welfare, Govt. of India",
    hindiIssuingAuthority: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय, भारत सरकार",
    guidelineDocument: "IMNCI Chart Booklet for Child Illnesses (0-5 Years)",
    hindiGuidelineDocument: "बाल रोगों के एकीकृत प्रबंधन (IMNCI) चार्ट बुकलेट",
    pageNumber: "Page 14, Section 2.3",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Emergency Referral to Sub-Center / PHC",
    hindiTriageDescription: "प्राथमिक स्वास्थ्य केंद्र (पीएचसी) हेतु तत्काल आपातकालीन रेफरल",
    dangerSigns: [
      "Lethargic or unconscious child",
      "Sunken eyes (धँसी हुई आँखें)",
      "Skin pinch goes back very slowly (> 2 seconds)",
      "Child unable to drink or drinks poorly"
    ],
    hindiDangerSigns: [
      "सुस्त या बेहोश बच्चा (बुलाने पर प्रतिक्रिया न देना)",
      "धँसी हुई आँखें",
      "पेट की चमड़ी खींचने पर 2 सेकंड से अधिक समय में वापस जाना",
      "बच्चा पीने में पूरी तरह असमर्थ या बहुत कठिनाई से पीता है"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Triage Assessment",
        instruction: "Check if child has at least two of the four danger signs. If yes, classify as SEVERE DEHYDRATION."
      },
      {
        step: 2,
        title: "Pre-Referral Hydration on the Way",
        instruction: "If child is conscious and can drink, give frequent sips of ORS during transit. Do NOT force-feed if unconscious."
      },
      {
        step: 3,
        title: "Zinc Supplementation Initiation",
        instruction: "Give first dose of Zinc tablet dissolved in clean water or breastmilk (10 mg for < 6m; 20 mg for 6-59m). Prescribe for full 14 days."
      },
      {
        step: 4,
        title: "Kangaroo Mother Care / Warmth",
        instruction: "Keep child warm during transportation to prevent hypothermia."
      },
      {
        step: 5,
        title: "Urgent Handover to ANM / Medical Officer",
        instruction: "Accompany or coordinate with Supervising ANM for emergency IV Ringer's Lactate / Normal Saline infusion at the PHC."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "त्वरित ट्राएज परीक्षण",
        instruction: "जांचें कि क्या बच्चे में 4 मुख्य लक्षणों में से कम से कम 2 मौजूद हैं (सुस्त/बेहोश, धंसी आंखें, पीने में असमर्थ, चमड़ी खिंचाव > 2 सेकंड)। यदि हाँ, तो तुरंत 'गंभीर निर्जलीकरण' घोषित करें।"
      },
      {
        step: 2,
        title: "रास्ते में जीवनरक्षक घोल (ओआरएस) देना",
        instruction: "यदि बच्चा होश में है और पी सकता है, तो रास्ते में चम्मच से लगातार ओआरएस का घोल पिलाते रहें।"
      },
      {
        step: 3,
        title: "जिंक की पहली खुराक देना",
        instruction: "जिंक की गोली साफ पानी या माँ के दूध में घोलकर दें (6 माह से कम: 10 मिलीग्राम; 6 से 59 माह: 20 मिलीग्राम)। पूरे 14 दिन दें।"
      },
      {
        step: 4,
        title: "बच्चे को गर्म रखना",
        instruction: "सफर के दौरान बच्चे का शरीर ठंडा न पड़ने दें, कपड़े से अच्छी तरह लपेटकर रखें।"
      },
      {
        step: 5,
        title: "एएनएम / डॉक्टर को तत्काल सुपुर्द करना",
        instruction: "पर्यवेक्षक एएनएम के साथ प्राथमिक स्वास्थ्य केंद्र पहुंचें ताकि ड्रिप (IV रिंगर्स लैक्टेट) तुरंत शुरू की जा सके।"
      }
    ],
    dosageChart: [
      { age: "< 6 Months", weight: "< 6 kg", orseDose: "100-200 mL per loose stool", zincDose: "10 mg daily (1/2 tablet) for 14 days" },
      { age: "6 Months to 2 Years", weight: "6 - 10 kg", orseDose: "200-400 mL per loose stool", zincDose: "20 mg daily (1 tablet) for 14 days" },
      { age: "2 to 5 Years", weight: "10 - 19 kg", orseDose: "400-600 mL per loose stool", zincDose: "20 mg daily (1 tablet) for 14 days" }
    ],
    hindiDosageChart: [
      { age: "6 माह से कम", weight: "6 किग्रा से कम", orseDose: "प्रत्येक दस्त के बाद 100-200 मिली ओआरएस", zincDose: "10 मिग्रा प्रतिदिन (आधी गोली) 14 दिनों तक" },
      { age: "6 माह से 2 वर्ष", weight: "6 से 10 किग्रा", orseDose: "प्रत्येक दस्त के बाद 200-400 मिली ओआरएस", zincDose: "20 मिग्रा प्रतिदिन (1 पूरी गोली) 14 दिनों तक" },
      { age: "2 से 5 वर्ष", weight: "10 से 19 किग्रा", orseDose: "प्रत्येक दस्त के बाद 400-600 मिली ओआरएस", zincDose: "20 मिग्रा प्रतिदिन (1 पूरी गोली) 14 दिनों तक" }
    ],
    contraindications: [
      "Do NOT administer anti-diarrheal or anti-spasmodic medicines (e.g. Loperamide) to children.",
      "Do NOT give sweetened commercial carbonated drinks or unboiled well water.",
      "Do NOT stop breastfeeding during acute diarrhea."
    ],
    hindiContraindications: [
      "बच्चों को दस्त रोकने वाली गोलियां (जैसे लोपेरामाइड या एंटी-स्पास्मोडिक) कभी न दें।",
      "बाजार में मिलने वाले कोल्ड ड्रिंक या बिना उबला पानी हरगिज न पिलाएं।",
      "दस्त के दौरान माँ का दूध पिलाना कभी बंद न करें।"
    ],
    keywords: [
      "diarrhea", "loose motion", "dehydration", "dast", "sunken eyes", 
      "skin pinch", "ors", "zinc", "child loose motion", "watery stools", "vomiting"
    ],
    escalationContact: "Supervising ANM / 108 Ambulance Dispatch"
  },
  {
    id: "prot-imnci-severe-pneumonia",
    code: "MOHFW-IMNCI-ARI-02",
    title: "Fast Breathing & Severe Pneumonia in Infant / Child",
    hindiTitle: "शिशुओं और बच्चों में तेज़ सांस और गंभीर निमोनिया",
    category: "Child Health (IMNCI)",
    hindiCategory: "बाल स्वास्थ्य (IMNCI)",
    issuingAuthority: "National Health Mission & MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय स्वास्थ्य मिशन एवं स्वास्थ्य मंत्रालय, भारत सरकार",
    guidelineDocument: "Management of Acute Respiratory Infections (IMNCI)",
    hindiGuidelineDocument: "तीव्र श्वसन संक्रमण प्रबंधन दिशानिर्देश (IMNCI)",
    pageNumber: "Page 6, Section 1.2",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Referral - High Mortality Risk",
    hindiTriageDescription: "तत्काल आपातकालीन रेफरल - उच्च जोखिम",
    dangerSigns: [
      "Chest indrawing (छाती का अंदर धँसना)",
      "Stridor in calm child (सांस लेते समय सीटी जैसी आवाज)",
      "Inability to breastfeed or drink",
      "Fast breathing (> 50 bpm for 2-11m, > 40 bpm for 12-59m)",
      "Extreme lethargy or convulsions"
    ],
    hindiDangerSigns: [
      "छाती का अंदर धँसना (सांस लेते समय पसलियों के नीचे गड्ढा पड़ना)",
      "बच्चे के शांत रहने पर भी सांस में घरघराहट या सीटी की आवाज (स्ट्राइडर)",
      "माँ का दूध या कोई भी तरल पीने में असमर्थ",
      "तेज़ सांस चलना (2-11 माह: 50 या अधिक/मिनट; 12-59 माह: 40 या अधिक/मिनट)",
      "अत्यधिक सुस्ती, बेहोशी या दौरे पड़ना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Count Respiratory Rate for 60 Seconds",
        instruction: "Uncover chest while child is quiet. Fast breathing threshold: 2 to 11 months = >= 50 breaths/min; 12 to 59 months = >= 40 breaths/min."
      },
      {
        step: 2,
        title: "Look for Lower Chest Indrawing",
        instruction: "If the lower chest wall moves IN during inhalation, classify immediately as SEVERE PNEUMONIA (Danger Sign)."
      },
      {
        step: 3,
        title: "First Dose Pre-Referral Oral Antibiotic",
        instruction: "Administer first dose of oral Amoxicillin (or dispersible tablet) according to IMNCI weight chart before transferring."
      },
      {
        step: 4,
        title: "Fever Management",
        instruction: "If fever is > 38.5°C (101°F), give single dose of Paracetamol syrup (10-15 mg/kg). Do NOT give cold sponge baths."
      },
      {
        step: 5,
        title: "Refer with Oxygen / ANM Escort",
        instruction: "Dial 108 Ambulance or contact Supervising ANM. Keep child upright and warmly wrapped during journey."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "पूरे 60 सेकंड तक सांसों की गिनती करें",
        instruction: "जब बच्चा शांत हो, छाती को देखकर 1 मिनट तक सांस गिनें।"
      },
      {
        step: 2,
        title: "छाती का अंदर धँसना देखें",
        instruction: "यदि सांस अंदर लेते समय छाती की निचली दीवार अंदर धँसती है, तो तुरंत 'गंभीर निमोनिया' मानें।"
      },
      {
        step: 3,
        title: "रेफरल से पहले एंटीबायोटिक की पहली खुराक",
        instruction: "रेफर करने से पूर्व वजन के अनुसार एमोक्सिसिलिन (Amoxicillin) घुलनशील गोली की पहली खुराक दें।"
      },
      {
        step: 4,
        title: "बुखार का सुरक्षित प्रबंधन",
        instruction: "यदि बुखार 101°F (38.5°C) से अधिक है, तो पेरासिटामोल सिरप की एक खुराक दें।"
      },
      {
        step: 5,
        title: "108 एम्बुलेंस से तुरंत अस्पताल भेजें",
        instruction: "108 एम्बुलेंस या एएनएम दीदी को फोन करें। रास्ते में बच्चे को सीधा और गर्म रखें।"
      }
    ],
    dosageChart: [
      { age: "2 - 11 Months", weight: "4 - 9 kg", amoxicillinDose: "125 mg dispersible tab (1 tab) single pre-referral dose", paracetamolDose: "Syrup 120mg/5mL: 2.5 - 5 mL" },
      { age: "12 - 59 Months", weight: "10 - 19 kg", amoxicillinDose: "250 mg dispersible tab (1 tab) single pre-referral dose", paracetamolDose: "Syrup 120mg/5mL: 5 - 7.5 mL" }
    ],
    hindiDosageChart: [
      { age: "2 से 11 माह", weight: "4 से 9 किग्रा", amoxicillinDose: "125 मिग्रा घुलनशील गोली (1 गोली) पहली खुराक", paracetamolDose: "पेरासिटामोल सिरप: 2.5 से 5 मिली" },
      { age: "12 से 59 माह", weight: "10 से 19 किग्रा", amoxicillinDose: "250 मिग्रा घुलनशील गोली (1 गोली) पहली खुराक", paracetamolDose: "पेरासिटामोल सिरप: 5 से 7.5 मिली" }
    ],
    contraindications: [
      "Do NOT administer cough syrups containing codeine, dextromethorphan, or sedatives.",
      "Do NOT force oral fluids if child has chest indrawing and respiratory exhaustion.",
      "Never give adult antibiotics or crushed fluoroquinolones."
    ],
    hindiContraindications: [
      "कोडीन या नशीले तत्व वाली कफ सिरप बच्चों को कभी न दें।",
      "यदि बच्चा सांस लेने में हांफ रहा हो, तो जबरन मुंह में पानी न डालें।",
      "वयस्कों की एंटीबायोटिक गोलियां तोड़कर बच्चों को हरगिज न दें।"
    ],
    keywords: [
      "cough", "pneumonia", "fast breathing", "chest indrawing", "breathless", 
      "tez saans", "stridor", "rib pulling", "khansi", "chhati dhasna"
    ],
    escalationContact: "Supervising ANM / Emergency Ambulance 108"
  },
  {
    id: "prot-hbnc-neonatal-sepsis",
    code: "MOHFW-HBNC-NEO-03",
    title: "Possible Serious Bacterial Infection (PSBI) in Newborn (0-2 Months)",
    hindiTitle: "नवजात शिशु में संभावित गंभीर जीवाणु संक्रमण (खतरे के निशान)",
    category: "Newborn Care (HBNC)",
    hindiCategory: "नवजात शिशु देखभाल (HBNC)",
    issuingAuthority: "Ministry of Health & Family Welfare",
    hindiIssuingAuthority: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय, भारत सरकार",
    guidelineDocument: "Home Based Newborn Care (HBNC) Operational Guidelines",
    hindiGuidelineDocument: "गृह आधारित नवजात शिशु देखभाल (HBNC) मार्गदर्शिका",
    pageNumber: "Page 24-28, Module 7",
    publicationYear: "2022 Revision",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Critical Neonatal Emergency - SNCU Transfer Required",
    hindiTriageDescription: "अति-गंभीर नवजात आपातकाल - तत्काल एसएनसीयू (SNCU) भर्ती आवश्यक",
    dangerSigns: [
      "Not feeding at all or stopped suckling (दूध पीना बंद)",
      "Convulsions / Fits (दौरे पड़ना)",
      "Fast breathing (>= 60 breaths/min counted twice)",
      "Severe chest indrawing",
      "Body feels cold to touch (< 35.4°C) or high fever (> 37.5°C)",
      "Umbilical cord red or draining foul pus",
      "Yellow palms and soles (Severe Jaundice within first week)"
    ],
    hindiDangerSigns: [
      "शिशु ने माँ का दूध पीना पूरी तरह बंद कर दिया है",
      "दौरे पड़ना, झटके आना या शरीर अकड़ना",
      "तेज़ सांस (दो बार गिनने पर भी 60 या अधिक/मिनट)",
      "छाती का अंदर धँसना",
      "शिशु का शरीर असामान्य रूप से ठंडा (< 35.4°C) या तेज़ बुखार",
      "नाल के आसपास लालिमा, सूजन या बदबूदार मवाद",
      "जन्म के पहले 24 घंटे में हथेलियों और तलवों का पीला पड़ना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Temperature Stabilization (KMC)",
        instruction: "Place baby in skin-to-skin contact (Kangaroo Mother Care) between mother's breasts, covered with warm cap and blanket."
      },
      {
        step: 2,
        title: "Cord & Infection Check",
        instruction: "Do NOT apply cow dung, ash, oil, or turmeric to the umbilical stump. Keep dry and exposed."
      },
      {
        step: 3,
        title: "Pre-Referral Antibiotic Coordination",
        instruction: "Call supervising ANM to provide pre-referral Gentamicin + Ampicillin or oral Amoxicillin."
      },
      {
        step: 4,
        title: "Continuous Warmth & Transit",
        instruction: "Transfer baby directly to nearest Special Newborn Care Unit (SNCU) or District Hospital via 102/108 Ambulance."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "शिशु को तुरंत गर्म करना (कंगारू मदर केयर)",
        instruction: "शिशु को माँ की छाती से सीधे त्वचा से सटाकर (KMC) रखें और टोपी व कंबल से ढकें।"
      },
      {
        step: 2,
        title: "नाल की सही देखभाल",
        instruction: "नाल पर गोबर, राख, तेल या हल्दी कुछ भी न लगाएं। नाल को सूखा और साफ रखें।"
      },
      {
        step: 3,
        title: "एएनएम दीदी से पूर्व-रेफरल एंटीबायोटिक समन्वय",
        instruction: "पर्यवेक्षक एएनएम को सूचित करें ताकि राष्ट्रीय दिशा-निर्देशानुसार आवश्यक दवा दी जा सके।"
      },
      {
        step: 4,
        title: "102/108 एम्बुलेंस से एसएनसीयू (SNCU) ट्रांसफर",
        instruction: "102 जननी शिशु वाहन से बिना किसी देरी के सीधे जिला अस्पताल के SNCU ले जाएं।"
      }
    ],
    dosageChart: [
      { weight: "< 2.0 kg", instruction: "Do not self-medicate. Immediate SNCU referral with KMC skin-to-skin." },
      { weight: "2.0 - 2.5 kg", instruction: "Pre-referral Gentamicin 0.25 mL IM only by trained ANM + Amoxicillin 1.25 mL." },
      { weight: "> 2.5 kg", instruction: "Pre-referral Gentamicin 0.35 mL IM only by trained ANM." }
    ],
    hindiDosageChart: [
      { weight: "2.0 किग्रा से कम", instruction: "घर पर कोई दवा न दें। KMC गर्माहट देते हुए सीधे एसएनसीयू ले जाएं।" },
      { weight: "2.0 से 2.5 किग्रा", instruction: "प्रशिक्षित एएनएम द्वारा ही पूर्व-रेफरल जेंटामाइसिन 0.25 mL IM + एमोक्सिसिलिन।" },
      { weight: "2.5 किग्रा से अधिक", instruction: "प्रशिक्षित एएनएम द्वारा ही पूर्व-रेफरल जेंटामाइसिन 0.35 mL IM।" }
    ],
    contraindications: [
      "Never bathe a sick or hypothermic newborn.",
      "Never give prelacteal feeds (ghutti, honey, sugar water).",
      "Never use adult oral antibiotic syrups without exact weight determination by medical officer."
    ],
    hindiContraindications: [
      "बीमार या ठंडे पड़ चुके नवजात शिशु को नहलाने की गलती कभी न करें।",
      "शिशु को घुट्टी, शहद, शक्कर का पानी या ऊपर का दूध बिल्कुल न चटाएं।",
      "बिना डॉक्टर के पर्चे के बच्चों को कोई भी अंग्रेजी सिरप न दें।"
    ],
    keywords: [
      "newborn", "baby not feeding", "cold baby", "fever baby", "navjat", 
      "sepsis", "umbilicus pus", "yellow baby", "fits in baby", "lethargic infant"
    ],
    escalationContact: "SNCU Helpline / ANM Direct / 102 Janani Shishu Vahan"
  },

  // =========================================================================
  // SECTION 2: MATERNAL HEALTH (ANC & PNC)
  // =========================================================================
  {
    id: "prot-maternal-preeclampsia",
    code: "MOHFW-ANC-MAT-04",
    title: "Severe Preeclampsia and Eclampsia in Pregnancy",
    hindiTitle: "गर्भावस्था में उच्च रक्तचाप और एक्लम्पसिया (झटके/दौरे)",
    category: "Maternal Health (ANC)",
    hindiCategory: "मातृ स्वास्थ्य (ANC)",
    issuingAuthority: "Maternal Health Division, MoHFW, Govt. of India",
    hindiIssuingAuthority: "मातृ स्वास्थ्य विभाग, स्वास्थ्य मंत्रालय, भारत सरकार",
    guidelineDocument: "Guidelines for Antenatal Care and Skilled Attendance at Birth",
    hindiGuidelineDocument: "प्रसव पूर्व देखभाल एवं कुशल प्रसव परिचर्या मार्गदर्शिका",
    pageNumber: "Page 31, Module 3",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Obstetric Emergency - Transfer to FRU",
    hindiTriageDescription: "आपातकालीन प्रसूति संकट - प्रथम रेफरल यूनिट (FRU) ट्रांसफर",
    dangerSigns: [
      "Severe persistent headache not relieved by paracetamol",
      "Blurring of vision or seeing spots/flashes",
      "Severe epigastric pain (pain in upper abdomen / liver area)",
      "Sudden swelling of face, fingers, and feet",
      "Blood pressure >= 140/90 mmHg (or >= 160/110 severe)",
      "Convulsions / Fits (Eclampsia)"
    ],
    hindiDangerSigns: [
      "तेज़ और लगातार सिरदर्द जो दवा से ठीक न हो",
      "आंखों के आगे धुंधलापन, तारे दिखना या दो-दो दिखना",
      "पेट के ऊपरी हिस्से में तेज़ दर्द",
      "चेहरे, हाथों और पैरों में अचानक भारी सूजन",
      "रक्तचाप (BP) 140/90 या 160/110 से अधिक दर्ज होना",
      "दौरे पड़ना, बेहोशी या झटके आना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Maintain Airway & Left Lateral Position",
        instruction: "Turn woman onto her left side. Ensure airway is clear. Do NOT put spoon/cloth in mouth during fits."
      },
      {
        step: 2,
        title: "Protect Against Injury",
        instruction: "Ensure the woman does not fall from bed or hit sharp objects during eclamptic seizure."
      },
      {
        step: 3,
        title: "Urgent Escalation to ANM & Medical Officer",
        instruction: "Supervising ANM must administer Loading Dose of Magnesium Sulphate (MgSO4 4g IV + 10g IM)."
      },
      {
        step: 4,
        title: "Arrange 108 Emergency Transport to FRU",
        instruction: "Accompany patient with delivery kit and BP records to First Referral Unit (FRU) / CHC."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "बाईं करवट लिटाना व सांस का रास्ता खुला रखना",
        instruction: "महिला को बाईं करवट लिटाएं। दौरे के समय मुंह में कपड़ा, चम्मच या अंगुली न ठूंसें।"
      },
      {
        step: 2,
        title: "चोट से सुरक्षा",
        instruction: "ध्यान रहे कि दौरे के समय महिला चारपाई से नीचे न गिरे।"
      },
      {
        step: 3,
        title: "मैग्नीशियम सल्फेट (MgSO4) की लोडिंग खुराक",
        instruction: "पर्यवेक्षक एएनएम द्वारा सरकारी दिशा-निर्देशानुसार मैग्नीशियम सल्फेट दिया जाना अनिवार्य है।"
      },
      {
        step: 4,
        title: "108 एम्बुलेंस से एफआरयू (FRU / CHC) रेफर करें",
        instruction: "बिना 1 मिनट गंवाए 108 पर कॉल करें और महिला को अस्पताल पहुंचाएं।"
      }
    ],
    dosageChart: [
      { indication: "Eclampsia / Impending Eclampsia", drug: "Magnesium Sulphate (MgSO4)", protocol: "Loading dose: 4g IV (20% sol over 10 min) + 5g IM into each buttock (total 14g). Administered ONLY by ANM / Doctor." },
      { indication: "Severe Hypertension (BP >= 160/110)", drug: "Labetalol / Nifedipine", protocol: "Oral Nifedipine 10mg stat ONLY under doctor or ANM phone authorization." }
    ],
    hindiDosageChart: [
      { indication: "एक्लम्पसिया (झटके/दौरे)", drug: "मैग्नीशियम सल्फेट (MgSO4)", protocol: "लोडिंग खुराक: 4 ग्राम IV + 10 ग्राम IM (केवल प्रशिक्षित एएनएम/डॉक्टर द्वारा)।" },
      { indication: "अत्यधिक उच्च रक्तचाप (>= 160/110)", drug: "निफेडिपिन (Nifedipine)", protocol: "10 मिग्रा केवल डॉक्टर या एएनएम के निर्देशानुसार ही।" }
    ],
    contraindications: [
      "Never leave an eclamptic woman unattended.",
      "Do NOT administer oral fluids or medicines to a woman who is drowsy or post-ictal.",
      "Do NOT give Diazepam if Magnesium Sulphate is available."
    ],
    hindiContraindications: [
      "दौरे की शिकार गर्भवती महिला को कभी भी अकेला न छोड़ें।",
      "बेहोश या सुस्त महिला के मुंह में पानी, चाय या दवा डालने की भूल न करें।",
      "मैग्नीशियम सल्फेट की मौजूदगी में डायजेपाम न लगाएं।"
    ],
    keywords: [
      "pregnancy headache", "high bp pregnancy", "swelling face", "eclampsia", 
      "preeclampsia", "fits in pregnancy", "garbhavastha", "vision blurred", "epigastric pain"
    ],
    escalationContact: "108 Emergency Medical Service / Supervising ANM / FRU"
  },
  {
    id: "prot-maternal-pph",
    code: "MOHFW-PPH-MAT-05",
    title: "Postpartum Hemorrhage (Excessive Bleeding After Delivery)",
    hindiTitle: "प्रसव के बाद अत्यधिक रक्तस्राव (पीपीएच)",
    category: "Maternal Health (PNC)",
    hindiCategory: "मातृ स्वास्थ्य (PNC)",
    issuingAuthority: "MoHFW - Dakshata Quality Improvement Initiative",
    hindiIssuingAuthority: "दक्षता मातृ स्वास्थ्य गुणवत्ता कार्यक्रम, स्वास्थ्य मंत्रालय",
    guidelineDocument: "Dakshata Manual for Empowering Health Workers",
    hindiGuidelineDocument: "दक्षता प्रसवोत्तर आपातकालीन प्रबंधन मैन्युअल",
    pageNumber: "Page 45, Module 4",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Life-Threatening Emergency",
    hindiTriageDescription: "अति-गंभीर आपातकाल - जान का खतरा",
    dangerSigns: [
      "Bleeding soaking 2 or more pads in less than 30 minutes",
      "Continuous trickle of bright red blood after delivery",
      "Dizziness, fainting, pallor, cold clammy hands",
      "Fast, weak pulse (> 110 bpm) and falling BP"
    ],
    hindiDangerSigns: [
      "30 मिनट से कम समय में 2 या अधिक कपड़े/पैड खून से पूरी तरह भीग जाना",
      "प्रसव के बाद चमकीले लाल खून की लगातार धार बहना",
      "चक्कर आना, बेहोशी, अत्यधिक पीलापन व हाथ-पैर ठंडे पड़ना",
      "नाड़ी की गति बहुत तेज़ व कमज़ोर होना (>110/मिनट) और बीपी गिरना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Uterine Massage",
        instruction: "Place hand on lower abdomen and massage the uterus with firm circular motions until it becomes hard like a cricket ball."
      },
      {
        step: 2,
        title: "Empty the Bladder",
        instruction: "Encourage mother to urinate or have ANM assist, as a full bladder prevents uterine contraction."
      },
      {
        step: 3,
        title: "Uterotonic Administration",
        instruction: "If trained and within ANM purview: Administer Misoprostol 600 mcg orally (or Oxytocin 10 IU IM if cold chain available)."
      },
      {
        step: 4,
        title: "Shock Prevention & Positioning",
        instruction: "Keep mother warm, elevate legs on a bolster or pillows. Call 108 ambulance immediately."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "बच्चेदानी की तुरंत मालिश (यूट्रस मसाज)",
        instruction: "निचले पेट पर हथेली रखकर बच्चेदानी को गोल-गोल तब तक दबाते हुए मलें जब तक कि वह गेंद की तरह सख्त न हो जाए।"
      },
      {
        step: 2,
        title: "पेशाब की थैली खाली करवाना",
        instruction: "महिला को पेशाब करने को कहें, क्योंकि भरी हुई पेशाब की थैली बच्चेदानी को सिकुड़ने नहीं देती।"
      },
      {
        step: 3,
        title: "संकुचन बढ़ाने वाली दवा (मिसोप्रोस्टोल)",
        instruction: "यदि एएनएम द्वारा अधिकृत हो: मिसोप्रोस्टोल (Misoprostol) 600 माइक्रोग्राम की 3 गोलियां मुंह से खिलाएं।"
      },
      {
        step: 4,
        title: "पैरों को ऊंचा उठाना व 108 को कॉल",
        instruction: "महिला को ठंड से बचाएं, तकिया लगाकर पैरों को ऊंचा रखें और तुरंत 108 एम्बुलेंस से सीएचसी ले जाएं।"
      }
    ],
    dosageChart: [
      { drug: "Misoprostol", dose: "600 mcg orally (3 tablets of 200 mcg)", timing: "Single dose if oxytocin unavailable at community level." },
      { drug: "Oxytocin", dose: "10 IU IM", timing: "Standard facility active management by ANM/doctor." }
    ],
    hindiDosageChart: [
      { drug: "मिसोप्रोस्टोल (Misoprostol)", dose: "600 एमसीजी मुंह से (200 mcg की 3 गोलियां)", timing: "सामुदायिक स्तर पर ऑक्सीटोसिन न होने पर एकमात्र खुराक।" },
      { drug: "ऑक्सीटोसिन (Oxytocin)", dose: "10 आईयू (IU) मांसपेशी में", timing: "अस्पताल में एएनएम या डॉक्टर द्वारा।" }
    ],
    contraindications: [
      "Never pack the vagina with cloth, cotton, or ash.",
      "Do NOT delay transport while waiting for bleeding to stop spontaneously."
    ],
    hindiContraindications: [
      "योनि के अंदर कपड़ा, रुई या राख ठूंसने का जानलेवा काम कभी न करें।",
      "खून अपने आप बंद होने के इंतज़ार में अस्पताल जाने में एक पल भी देर न करें।"
    ],
    keywords: [
      "bleeding after delivery", "pph", "khoon behna", "postpartum hemorrhage", 
      "soaking pads", "uterus soft", "pranav bleeding", "dizziness after birth"
    ],
    escalationContact: "108 Ambulance / Nearest 24x7 PHC / Supervising ANM"
  },
  {
    id: "prot-nutrition-sam",
    code: "MOHFW-SAM-NUT-06",
    title: "Severe Acute Malnutrition (SAM) with Medical Complications",
    hindiTitle: "जटिलताओं के साथ गंभीर तीव्र कुपोषण (सैम)",
    category: "Nutrition (NRC)",
    hindiCategory: "पोषण व सैम (NRC)",
    issuingAuthority: "National Health Mission - Child Health Division",
    hindiIssuingAuthority: "राष्ट्रीय स्वास्थ्य मिशन - बाल स्वास्थ्य विभाग",
    guidelineDocument: "Facility & Community Based Management of SAM",
    hindiGuidelineDocument: "कुपोषण प्रबंधन राष्ट्रीय मार्गदर्शिका",
    pageNumber: "Page 18, Section 3",
    publicationYear: "2022 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "AMBER",
    triageDescription: "Urgent Referral to Nutrition Rehabilitation Center (NRC)",
    hindiTriageDescription: "पोषण पुनर्वास केंद्र (NRC) हेतु तत्काल रेफरल",
    dangerSigns: [
      "Bilateral pitting edema of feet/legs (दोनों पैरों में सूजन)",
      "Severe visible wasting (very thin arms, baggy pants appearance)",
      "Mid-Upper Arm Circumference (MUAC) < 11.5 cm (Red band on tape)",
      "Failed appetite test (child refuses ready-to-use therapeutic food / breastmilk)",
      "Fever, hypothermia, or persistent watery diarrhea"
    ],
    hindiDangerSigns: [
      "दोनों पैरों में गड्ढा पड़ने वाली सूजन (एडिमा)",
      "अत्यधिक शारीरिक क्षीणता (बहुत पतले हाथ-पैर, ढीली चमड़ी)",
      "बांह की गोलाई (MUAC) 11.5 सेमी से कम (लाल पट्टी)",
      "भूख का परीक्षण फेल (बच्चा खाना या दूध पीने से मना कर दे)",
      "बुखार, शरीर का ठंडा पड़ना या लगातार दस्त होना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Perform MUAC & Edema Screening",
        instruction: "Measure child's left arm midway between shoulder and elbow using Shakir's MUAC tape. Check for pitting edema."
      },
      {
        step: 2,
        title: "Appetite Test",
        instruction: "Offer a small portion of therapeutic feed or warm clean fluid. If child cannot swallow or refuses, complications exist."
      },
      {
        step: 3,
        title: "Referral to Nutrition Rehabilitation Center (NRC)",
        instruction: "Coordinate with Anganwadi Worker (AWW) and ANM to admit child and caregiver to nearest NRC for 14-day therapeutic rehabilitation."
      },
      {
        step: 4,
        title: "Prevent Hypoglycemia During Travel",
        instruction: "Give 50 mL of 10% sugar water (1 tsp sugar in 50 mL clean water) or breastmilk before travel."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "शाकिर टेप से बांह की नाप (MUAC) व सूजन जांच",
        instruction: "बाएं हाथ की बीच की गोलाई नापें। दोनों पैरों के पंजों को 3 सेकंड दबाकर देखें।"
      },
      {
        step: 2,
        title: "भूख का परीक्षण (Appetite Test)",
        instruction: "बच्चे को थोड़ा तरल या आहार देकर देखें। यदि बच्चा खाने में असमर्थ है, तो जटिलता मौजूद है।"
      },
      {
        step: 3,
        title: "पोषण पुनर्वास केंद्र (NRC) में 14 दिवसीय भर्ती",
        instruction: "आंगनवाड़ी कार्यकर्ता व एएनएम के साथ मिलकर बच्चे और माता को निकटतम एनआरसी केंद्र में भर्ती करवाएं।"
      },
      {
        step: 4,
        title: "रास्ते में शर्करा (ग्लूकोज) कम होने से बचाना",
        instruction: "अस्पताल जाने से पहले बच्चे को 50 मिली मीठा पानी या माँ का दूध जरूर पिलाएं।"
      }
    ],
    dosageChart: [
      { indicator: "MUAC < 11.5 cm", action: "NRC referral. Vitamin A 100,000 IU (6-11m) or 200,000 IU (>12m) as per doctor." },
      { indicator: "Severe Edema (+++)", action: "Immediate hospitalization; restricted sodium, specialized F-75 formula at NRC." }
    ],
    hindiDosageChart: [
      { indicator: "MUAC < 11.5 सेमी (लाल)", action: "एनआरसी में भर्ती। डॉक्टर के निर्देशानुसार विटामिन-ए की खुराक।" },
      { indicator: "पैरों में सूजन (+++)", action: "तत्काल एनआरसी वार्ड में विशेष F-75 आहार से उपचार।" }
    ],
    contraindications: [
      "Never give adult high-protein body-builder powders or heavy unboiled animal milk.",
      "Do NOT administer high dose iron supplements during acute initial stabilization phase."
    ],
    hindiContraindications: [
      "बाजार में मिलने वाले बॉडी-बिल्डर प्रोटीन पाउडर या गाढ़ा कच्चा दूध कभी न पिलाएं।",
      "गंभीर कुपोषण के शुरुआती दिनों में आयरन (खून बढ़ाने वाली) सीरप न दें।"
    ],
    keywords: [
      "malnutrition", "sam", "kuposhan", "muac red", "swollen feet", 
      "very thin child", "underweight baby", "nrc referral", "shakir tape"
    ],
    escalationContact: "Block NRC Center / Anganwadi Supervisor / ANM"
  },
  {
    id: "prot-anemia-pregnancy",
    code: "MOHFW-AMB-MAT-07",
    title: "Severe Anemia in Pregnant Woman (Hb < 7 g/dL)",
    hindiTitle: "गर्भवती महिला में गंभीर एनीमिया (खून की कमी)",
    category: "Maternal Health (AMB)",
    hindiCategory: "मातृ स्वास्थ्य (एनीमिया मुक्त भारत)",
    issuingAuthority: "Anemia Mukt Bharat - MoHFW",
    hindiIssuingAuthority: "एनीमिया मुक्त भारत, स्वास्थ्य मंत्रालय, भारत सरकार",
    guidelineDocument: "Anemia Mukt Bharat Operational Guidelines",
    hindiGuidelineDocument: "एनीमिया मुक्त भारत संचालन मार्गदर्शिका",
    pageNumber: "Page 19, Chapter 4",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "AMBER",
    triageDescription: "Referral to First Referral Unit (FRU) for IV Iron / Transfusion",
    hindiTriageDescription: "एफआरयू / जिला अस्पताल में IV आयरन या रक्त चढ़ाने हेतु रेफरल",
    dangerSigns: [
      "Severe pallor of inner lower eyelids, tongue, palms, nail beds",
      "Breathlessness even at complete rest",
      "Swelling of feet with rapid heart rate (> 100 bpm)",
      "Hemoglobin recorded below 7.0 g/dL on Sahli's or Hemocue"
    ],
    hindiDangerSigns: [
      "आंखों की निचली पलकों, जीभ, हथेलियों व नाखूनों में अत्यधिक सफेदी",
      "बिना कोई काम किए, बैठे रहने पर भी सांस फूलना",
      "पैरों में सूजन और दिल की धड़कन 100/मिनट से तेज़ होना",
      "जांच में हीमोग्लोबिन 7.0 ग्राम/डीएल से कम दर्ज होना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Check Clinical Pallor & Symptoms",
        instruction: "Examine palms and conjunctiva for marked whitening. Inquire if woman gets breathless when lying flat or walking a few steps."
      },
      {
        step: 2,
        title: "Do NOT Treat Severe Anemia with Routine IFA Tablets Alone",
        instruction: "Oral Iron Folic Acid (IFA) is insufficient and too slow for severe anemia in the 2nd/3rd trimester. She requires IV Ferric Carboxymaltose or blood transfusion at FRU."
      },
      {
        step: 3,
        title: "Schedule ANM / Medical Officer Consultation",
        instruction: "Arrange transport to Sub-District / District Hospital for intravenous iron therapy under supervision."
      },
      {
        step: 4,
        title: "Dietary & Deworming Counseling",
        instruction: "Ensure single dose Albendazole 400 mg tablet was given in 2nd trimester as per national guidelines."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "सफेदी व लक्षणों की जांच करें",
        instruction: "जीभ, हथेलियों और आंखों के नीचे सफेदपन देखें।"
      },
      {
        step: 2,
        title: "केवल आईएफए की लाल गोली पर निर्भर न रहें",
        instruction: "गंभीर एनीमिया (Hb < 7) में महिला को अस्पताल में नस द्वारा आयरन (IV FCM) या खून चढ़ाने की आवश्यकता होती है।"
      },
      {
        step: 3,
        title: "अस्पताल में नस द्वारा आयरन का प्रबंध",
        instruction: "एएनएम दीदी के साथ मिलकर महिला को सामुदायिक स्वास्थ्य केंद्र या जिला अस्पताल भेजें।"
      },
      {
        step: 4,
        title: "कृमि मुक्ति एवं पौष्टिक आहार परामर्श",
        instruction: "जांचें कि दूसरी तिमाही में पेट के कीड़े मारने की गोली (अल्बेंडाजोल 400 मिग्रा) दी गई है या नहीं।"
      }
    ],
    dosageChart: [
      { category: "Moderate Anemia (Hb 7.0 - 9.9 g/dL)", treatment: "2 IFA tablets (Red) daily for 100 days under supervision." },
      { category: "Severe Anemia (Hb < 7.0 g/dL)", treatment: "Hospital referral for IV Iron Sucrose / FCM infusion or blood transfusion." }
    ],
    hindiDosageChart: [
      { category: "मध्यम एनीमिया (Hb 7.0 से 9.9)", treatment: "प्रतिदिन 2 लाल आईएफए गोलियां 100 दिनों तक।" },
      { category: "गंभीर एनीमिया (Hb < 7.0)", treatment: "अस्पताल में IV आयरन सुक्रोज या खून चढ़ाने हेतु रेफरल।" }
    ],
    contraindications: [
      "Do NOT administer iron injections at the Sub-Center or home level (risk of anaphylaxis).",
      "Do NOT give IFA tablets with milk, tea, or calcium tablets (reduces absorption)."
    ],
    hindiContraindications: [
      "उप-केंद्र या घर पर कभी भी नस में आयरन का इंजेक्शन न लगाएं (एलर्जी का खतरा)।",
      "आयरन की गोली कभी भी चाय, दूध या कैल्शियम की गोली के साथ न खाएं।"
    ],
    keywords: [
      "anemia", "khoon ki kami", "pale tongue", "low hemoglobin", 
      "hb low", "pregnant pale", "breathless walking", "ifa tablets", "safed aankh"
    ],
    escalationContact: "PHC Medical Officer / Supervising ANM / FRU"
  },
  {
    id: "prot-child-fever-malaria",
    code: "MOHFW-NVBDCP-FEV-08",
    title: "High Fever & Suspected Malaria / Dengue Danger Signs in Child",
    hindiTitle: "बच्चे में तेज़ बुखार और संदिग्ध मलेरिया/डेंगू के खतरे के लक्षण",
    category: "Infectious Diseases (NVBDCP)",
    hindiCategory: "संक्रामक रोग व बुखार (NVBDCP)",
    issuingAuthority: "National Vector Borne Disease Control Programme & NHM",
    hindiIssuingAuthority: "राष्ट्रीय वेक्टर जनित रोग नियंत्रण कार्यक्रम एवं एनएचएम",
    guidelineDocument: "National Guidelines for Diagnosis and Management of Malaria",
    hindiGuidelineDocument: "मलेरिया एवं डेंगू प्रबंधन राष्ट्रीय दिशानिर्देश",
    pageNumber: "Page 11-13",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "AMBER",
    triageDescription: "Immediate Rapid Diagnostic Test (RDT) at Sub-Center",
    hindiTriageDescription: "उप-केंद्र पर तत्काल मलेरिया/डेंगू त्वरित जांच (RDT)",
    dangerSigns: [
      "Fever with convulsions (बुखार में झटके/दौरे)",
      "Inability to sit or stand; altered sensorium",
      "Spontaneous bleeding from gums, nose, or black stools",
      "Persistent vomiting and cold clammy skin"
    ],
    hindiDangerSigns: [
      "बुखार के साथ झटके या दौरे पड़ना (फेब्राइल कंवल्शन)",
      "बच्चा बैठ या खड़ा नहीं हो पा रहा, बेहोशी या अजीब हरकतें",
      "मसूड़ों, नाक से खून आना या काला दस्त (डेंगू के खतरे का निशान)",
      "लगातार उल्टी होना और हाथ-पैर ठंडे पड़ना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Measure Temperature & Count Duration",
        instruction: "If temperature > 38.5°C (101°F), administer weight-appropriate Paracetamol syrup to prevent febrile convulsions."
      },
      {
        step: 2,
        title: "Perform Bivalent Malaria RDT",
        instruction: "Perform finger prick Rapid Diagnostic Test (RDT) for Plasmodium falciparum (Pf) and Plasmodium vivax (Pv)."
      },
      {
        step: 3,
        title: "If Danger Signs Present: Classify as SEVERE MALARIA / DENGUE",
        instruction: "Immediately transfer child to Community Health Center (CHC) or District Hospital with emergency referral slip."
      },
      {
        step: 4,
        title: "Keep Hydrated",
        instruction: "Encourage frequent sips of clean boiled water, ORS, or lemon water."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "तापमान नापना और पेरासिटामोल देना",
        instruction: "यदि बुखार 101°F से अधिक हो, तो दौरे रोकने के लिए वजन के अनुसार पेरासिटामोल सिरप दें।"
      },
      {
        step: 2,
        title: "मलेरिया आरडीटी (RDT) किट से तुरंत जांच",
        instruction: "उंगली से खून की बूंद लेकर आरडीटी किट पर जांचें।"
      },
      {
        step: 3,
        title: "खतरे के निशान होने पर 'गंभीर मलेरिया/डेंगू' मानना",
        instruction: "तुरंत बच्चे को नजदीकी सामुदायिक स्वास्थ्य केंद्र (CHC) या जिला अस्पताल रेफर करें।"
      },
      {
        step: 4,
        title: "तरल पदार्थ पिलाते रहना",
        instruction: "ओआरएस, नींबू पानी या उबला हुआ पानी चम्मच-चम्मच लगातार पिलाते रहें।"
      }
    ],
    dosageChart: [
      { weight: "5 - 10 kg", paracetamolDose: "Paracetamol syrup (120mg/5mL): 5 mL every 6 hours as needed." },
      { weight: "11 - 15 kg", paracetamolDose: "Paracetamol syrup (120mg/5mL): 7.5 mL every 6 hours as needed." },
      { weight: "16 - 20 kg", paracetamolDose: "Paracetamol syrup (250mg/5mL): 5 mL or 250mg tablet." }
    ],
    hindiDosageChart: [
      { weight: "5 से 10 किग्रा", paracetamolDose: "पेरासिटामोल सिरप (120mg/5mL): 5 मिली।" },
      { weight: "11 से 15 किग्रा", paracetamolDose: "पेरासिटामोल सिरप (120mg/5mL): 7.5 मिली।" },
      { weight: "16 से 20 किग्रा", paracetamolDose: "पेरासिटामोल सिरप (250mg/5mL): 5 मिली या 250 मिग्रा गोली।" }
    ],
    contraindications: [
      "Do NOT administer Aspirin or Ibuprofen to children with acute fever (risk of severe bleeding in dengue).",
      "Do NOT begin ACT (Artemisinin) without a confirmed positive RDT or slide result unless advised by Medical Officer in remote areas."
    ],
    hindiContraindications: [
      "बुखार में बच्चों को कभी भी एस्पिरिन (Disprin) या ब्रूफेन न दें।",
      "बिना जांच रिपोर्ट पॉजिटिव आए अपनी मर्जी से मलेरिया की भारी दवाएं शुरू न करें।"
    ],
    keywords: [
      "fever", "bukhar", "malaria", "dengue", "shivering", "chills", 
      "febrile fit", "high temp", "rdt test", "paracetamol syrup"
    ],
    escalationContact: "Supervising ANM / Sub-Center RDT Technician / PHC"
  },

  // =========================================================================
  // SECTION 3: SEVERE ADULT EMERGENCIES (TRAUMA, TOXICOLOGY & CARDIO-NEURO)
  // =========================================================================
  {
    id: "prot-trauma-snakebite",
    code: "MOHFW-TRAUMA-SNK-09",
    title: "Snakebite Envenomation First-Aid & Emergency Transfer",
    hindiTitle: "सर्पदंश (सांप काटना) आपातकालीन प्राथमिक उपचार व एएसवी रेफरल",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "National Health Mission - Disaster & Trauma Division, MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय स्वास्थ्य मिशन - आपदा व आघात विभाग, स्वास्थ्य मंत्रालय",
    guidelineDocument: "Standard Treatment Guidelines for Management of Snakebite in India",
    hindiGuidelineDocument: "भारत में सर्पदंश प्रबंधन राष्ट्रीय मानक उपचार दिशानिर्देश",
    pageNumber: "Page 8-12, Section 3",
    publicationYear: "2023 Revision",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Critical Emergency - 108 Transfer to CHC with ASV",
    hindiTriageDescription: "अति-गंभीर आपातकाल - एंटी-स्नेक वेनम (ASV) युक्त सीएचसी हेतु तत्काल 108 ट्रांसफर",
    dangerSigns: [
      "Drooping eyelids (Ptosis / आँख की पलकें गिरना) or difficulty swallowing",
      "Bleeding from bite fang marks, gums, or fresh cuts",
      "Severe progressive swelling spreading up the limb within 30-60 min",
      "Respiratory paralysis, breathlessness, or slurred speech",
      "Severe abdominal pain and black vomiting (Hemotoxic bite)"
    ],
    hindiDangerSigns: [
      "आंखों की पलकों का गिरना (टोसिस) या निगलने में कठिनाई (न्यूरोटॉक्सिक जहर)",
      "सांप के दांतों के निशान, मसूड़ों या पुरानी चोट से खून बहना (हीमोटॉक्सिक जहर)",
      "काटे गए अंग में 30-60 मिनट के अंदर तेजी से ऊपर चढ़ने वाली सूजन व तेज दर्द",
      "सांस लेने में भारी तकलीफ या बोलने में लड़खड़ाहट",
      "असहनीय पेट दर्द व उल्टी में खून या कालापन"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Reassure Patient & Complete Immobilization (DO NO HARM)",
        instruction: "Keep the patient completely calm and still. Movement accelerates venom absorption into the bloodstream. Immobilize the bitten limb using a splint or sling at heart level (like a fractured bone)."
      },
      {
        step: 2,
        title: "Remove Constricting Items Immediately",
        instruction: "Quickly take off tight rings, bangles, anklets, bracelets, and footwear from the bitten limb before swelling develops."
      },
      {
        step: 3,
        title: "Clean Wound Gently with Clean Water",
        instruction: "Gently wash surface with clean water. Do not rub or scrub vigorously."
      },
      {
        step: 4,
        title: "Immediate 108 Transport to Facility with Anti-Snake Venom (ASV)",
        instruction: "Dial 108 ambulance immediately. Ensure transfer to Rampur CHC / District Hospital where Polyvalent Anti-Snake Venom (ASV) and Neostigmine are in stock."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "मरीज को शांत रखें व अंग को बिल्कुल स्थिर करें",
        instruction: "मरीज को दौड़ने या चलने न दें, क्योंकि घबराहट और हलचल से जहर पूरे शरीर में तेजी से फैलता है। काटे गए हाथ/पैर को लकड़ी की खपच्ची (स्प्लिंट) या दुपट्टे से टूटी हड्डी की तरह स्थिर कर दें।"
      },
      {
        step: 2,
        title: "अंगूठी, चूड़ी, कड़ा, पायल तुरंत उतरवाएं",
        instruction: "सूजन आने से पहले काटे गए अंग से सभी कसने वाले गहने, ताबीज, जूते-मोजे तुरंत उतार लें ताकि खून का दौरा न रुके।"
      },
      {
        step: 3,
        title: "घाव को साफ पानी से धीरे से धोएं",
        instruction: "साफ पानी से घाव की ऊपरी सतह धो लें। घाव को रगड़ें या दबाएं नहीं।"
      },
      {
        step: 4,
        title: "108 एम्बुलेंस से सीधे एएसवी (ASV) वाले अस्पताल ले जाएं",
        instruction: "तुरंत 108 बुलाएं। मरीज को सीधे रामपुर सीएचसी या जिला अस्पताल ले जाएं जहां 24 घंटे सांप के जहर का एंटी-वेनम (ASV) उपलब्ध है।"
      }
    ],
    dosageChart: [
      { indication: "Bite with systemic envenomation signs", protocol: "Polyvalent Anti-Snake Venom (ASV): 10 vials reconstituted in 200 mL normal saline IV over 1 hour. ADMINISTERED ONLY BY DOCTOR AT CHC/HOSPITAL." },
      { indication: "Severe neurotoxic paralysis", protocol: "Neostigmine 0.5 mg + Atropine 0.6 mg IV under Medical Officer supervision." }
    ],
    hindiDosageChart: [
      { indication: "सांप काटने पर जहर के लक्षण दिखने पर", protocol: "पॉलीवैलेंट एंटी-स्नेक वेनम (ASV): 10 शीशी डॉक्टर की निगरानी में अस्पताल में ड्रिप द्वारा।" },
      { indication: "पलकें गिरना व सांस रुकना", protocol: "अस्पताल में डॉक्टर द्वारा नियोस्टिग्मीन व एट्रोपिन इंजेक्शन।" }
    ],
    contraindications: [
      "DO NOT cut the bite wound with blades or knives.",
      "DO NOT attempt to suck venom by mouth or mechanical suction devices.",
      "DO NOT tie tight arterial tourniquets (causes limb gangrene and amputation).",
      "DO NOT apply lime, potassium permanganate, kerosene, or electric shock.",
      "DO NOT waste golden hours at traditional quacks or faith healers."
    ],
    hindiContraindications: [
      "ब्लेड या चाकू से घाव पर चीरा लगाने की जानलेवा भूल कभी न करें।",
      "मुंह से या सिरिंज से जहर चूसने का प्रयास न करें।",
      "काटे गए अंग के ऊपर रस्सी, तार या बहुत कसकर पट्टी (टूर्निकेट) न बांधें (अंग सड़ने का खतरा)।",
      "घाव पर चूना, मिट्टी, गोबर, पेट्रोल या तेजाब न लगाएं।",
      "झाड़-फूंक या तांत्रिक के चक्कर में कीमती शुरुआती घंटे बर्बाद न करें।"
    ],
    keywords: [
      "snake bite", "snakebite", "saap katna", "serpent", "fang marks", 
      "venom", "cobra", "krait", "viper", "asv", "ptosis", "anti snake venom"
    ],
    escalationContact: "108 Emergency Ambulance / CHC Rampur (ASV Center)"
  },
  {
    id: "prot-trauma-dogbite-rabies",
    code: "MOHFW-TRAUMA-RAB-10",
    title: "Animal / Stray Dog Bite & Rabies Post-Exposure Prophylaxis",
    hindiTitle: "कुत्ता या जानवर काटने पर घाव की सफाई व रेबीज रोकथाम प्रोटोकॉल",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "National Rabies Control Programme (NRCP) & MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय रेबीज नियंत्रण कार्यक्रम एवं स्वास्थ्य मंत्रालय",
    guidelineDocument: "National Guidelines on Rabies Prophylaxis and Management",
    hindiGuidelineDocument: "रेबीज रोकथाम एवं प्रबंधन राष्ट्रीय मार्गदर्शिका",
    pageNumber: "Page 4-9, Chapter 2",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "AMBER",
    triageDescription: "Immediate Wound Cleansing & Urgently to PHC for ARV Day 0 Dose",
    hindiTriageDescription: "तुरंत 15 मिनट पानी से घाव धोएं व प्राथमिक केंद्र पर रेबीज टीका (Day 0) लगवाएं",
    dangerSigns: [
      "Category III Bite: Single or multiple transdermal bites or scratches with blood",
      "Licking of broken skin or mucous membranes by stray or suspected rabid animal",
      "Bites on head, neck, face, or fingertips (high neurotropic speed to brain)",
      "Biting animal unprovoked, aggressive, hyper-salivating, or dead within 10 days"
    ],
    hindiDangerSigns: [
      "श्रेणी III घाव: दांत गड़ना, त्वचा कटना और खून बहना",
      "कटी हुई त्वचा या होंठ/आंखों पर आवारा जानवर द्वारा चाटना",
      "चेहरे, गर्दन या उंगलियों पर काटना (दिमाग तक जहर तेजी से पहुंचने का खतरा)",
      "काटने वाला कुत्ता पागल, मुंह से लार टपकना या 10 दिन के अंदर मर जाना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Vigorous Washing for Full 15 Minutes (LIFE SAVING)",
        instruction: "Immediately wash all bite wounds, scratches, and adjacent skin under running tap water vigorously with laundry or bath soap for a minimum of 15 FULL MINUTES. This mechanical wash destroys > 90% of the rabies virus particles."
      },
      {
        step: 2,
        title: "Apply Povidone-Iodine Antiseptic",
        instruction: "After thorough washing, dry gently and apply 5% Povidone-Iodine (Betadine) ointment or liquid. Leave open."
      },
      {
        step: 3,
        title: "Same-Day Hospital Referral for Anti-Rabies Vaccine (ARV Day 0)",
        instruction: "Refer patient immediately to Kalyanpur PHC or Rampur CHC for the 1st dose of Anti-Rabies Vaccine (ARV) on Day 0. If Category III, ensure Rabies Immunoglobulin (RIG) infiltration."
      },
      {
        step: 4,
        title: "Tetanus Toxoid (TT) Check",
        instruction: "Administer 1 dose of Tetanus Toxoid (TT 0.5 mL IM) if not vaccinated in the past 6 months."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "बहते पानी और साबुन से पूरे 15 मिनट तक धोएं (जीवनरक्षक)",
        instruction: "बिना किसी देरी के नल के बहते पानी के नीचे कपड़े धोने वाले साबुन या नहाने के साबुन से घाव को रगड़कर लगातार 15 मिनट तक धोएं। यह रेबीज के 90% से अधिक वायरस को खत्म कर देता है।"
      },
      {
        step: 2,
        title: "पोविडोन-आयोडीन (बीटाडीन) लगाएं",
        instruction: "धोने के बाद साफ कपड़े से पोंछकर बीटाडीन का लेप लगाएं। घाव को खुला रखें।"
      },
      {
        step: 3,
        title: "उसी दिन प्राथमिक स्वास्थ्य केंद्र पर रेबीज का पहला टीका (Day 0)",
        instruction: "मरीज को तुरंत पीएचसी या सीएचसी भेजें ताकि आज ही रेबीज का पहला टीका (Day 0) लग सके।"
      },
      {
        step: 4,
        title: "टिटनेस (TT) का इंजेक्शन",
        instruction: "यदि पिछले 6 महीने में टिटनेस का टीका नहीं लगा है, तो टिटनेस (TT 0.5 mL) का इंजेक्शन लगवाएं।"
      }
    ],
    dosageChart: [
      { schedule: "Intradermal (IDRV) Regimen", doses: "Day 0, Day 3, Day 7, Day 28 (0.1 mL ID at 2 sites each visit). FREE AT GOVT HOSPITALS." },
      { schedule: "Rabies Immunoglobulin (RIG)", doses: "Equine RIG 40 IU/kg infiltrated locally into and around bite wound (Category III)." }
    ],
    hindiDosageChart: [
      { schedule: "रेबीज वैक्सीन अनुसूची (आईडीआरवी)", doses: "दिन 0, दिन 3, दिन 7, और दिन 28 (सरकारी अस्पतालों में पूर्णतः निशुल्क)।" },
      { schedule: "रेबीज इम्युनोग्लोबुलिन (RIG)", doses: "गहरे घावों में घाव के अंदर व चारों ओर डॉक्टर द्वारा लगाया जाता है।" }
    ],
    contraindications: [
      "DO NOT stitch or suture the dog bite wound immediately (forces virus deep into nerves).",
      "DO NOT apply red chilli powder, turmeric, kerosene, lime, or plant juices.",
      "DO NOT bandage tightly without leaving wound open for aeration."
    ],
    hindiContraindications: [
      "कुत्ता काटने के ताजा घाव पर टांके (सिलाई) कभी न लगवाएं (वायरस नसों में गहराई तक चला जाता है)।",
      "घाव पर लाल मिर्च, हल्दी, मिट्टी, चूना या मिट्टी का तेल बिल्कुल न लगाएं।",
      "घाव पर टाइट पट्टी न बांधें, हवा लगने दें।"
    ],
    keywords: [
      "dog bite", "kutta katna", "rabies", "stray dog", "animal bite", 
      "monkey bite", "cat scratch", "arv", "betadine", "idrv", "tetanus"
    ],
    escalationContact: "PHC Kalyanpur / CHC Rampur Anti-Rabies Clinic"
  },
  {
    id: "prot-cardio-chestpain-mi",
    code: "MOHFW-CARDIO-ACS-11",
    title: "Acute Chest Pain & Suspected Heart Attack (Myocardial Infarction)",
    hindiTitle: "सीने में तेज़ दर्द व दिल के दौरे (हार्ट अटैक) की आपातकालीन पहचान",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "National Programme for Prevention & Control of NCDs (NP-NCD), MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय गैर-संचारी रोग नियंत्रण कार्यक्रम, स्वास्थ्य मंत्रालय",
    guidelineDocument: "Standard Treatment Guidelines: Acute Coronary Syndrome at Primary Level",
    hindiGuidelineDocument: "प्राथमिक स्तर पर तीव्र कोरोनरी सिंड्रोम मानक उपचार दिशानिर्देश",
    pageNumber: "Page 14-18, Section 4",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Life-Threatening Emergency - 108 Ambulance Golden Hour",
    hindiTriageDescription: "अति-गंभीर आपातकाल - 'गोल्डन ऑवर' में 108 एम्बुलेंस से जिला अस्पताल रेफरल",
    dangerSigns: [
      "Severe crushing or squeezing retrosternal chest pain lasting > 15 minutes",
      "Pain radiating to left arm, neck, jaw, back, or epigastrium",
      "Profuse cold sweating (diaphoresis) with marked pallor and restlessness",
      "Shortness of breath, dizziness, sudden collapse, or vomiting with chest heaviness"
    ],
    hindiDangerSigns: [
      "सीने के बीच में भारी दबाव, जलन या निचोड़ने जैसा दर्द जो 15 मिनट से अधिक रहे",
      "दर्द का बाएं हाथ, कंधे, गर्दन, जबड़े या पीठ की ओर फैलना",
      "माथे व शरीर पर ठंडा पसीना छूटना, घबराहट और चक्कर आना",
      "सांस फूलना, अत्यधिक कमजोरी, उल्टी या अचानक बेहोश होकर गिरना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Rest in Half-Sitting Position (Fowler's Position)",
        instruction: "Stop all physical exertion immediately. Sit patient propped up against a wall or pillow at 45 degrees. Loosen tight collar and clothes. Do NOT allow patient to walk."
      },
      {
        step: 2,
        title: "Pre-Referral Emergency Antiplatelet (Under MO / Protocol Authorization)",
        instruction: "If available and trained/authorized: Give Soluble Aspirin 300 mg tablet to be CHEWED (not swallowed whole) immediately. This prevents further coronary clot formation."
      },
      {
        step: 3,
        title: "Immediate 108 Ambulance Dispatch",
        instruction: "Dial 108 ambulance with priority cardiac alert. Request vehicle with Oxygen and automated external defibrillator (AED) if available."
      },
      {
        step: 4,
        title: "Reassure and Monitor Vitals",
        instruction: "Keep patient calm. Do not crowd around patient. Keep windows open for fresh ventilation."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "मरीज को तुरंत टिकाकर आधा बिठाएं (चलना-फिरना पूर्ण बंद)",
        instruction: "मरीज को बिल्कुल आराम की स्थिति में तकिया लगाकर 45 डिग्री पर आधा बिठाएं। कपड़े ढीले करें। मरीज को एक कदम भी चलने न दें।"
      },
      {
        step: 2,
        title: "एस्पिरिन की गोली चबाने को देना (डॉक्टर/एएनएम निर्देशानुसार)",
        instruction: "यदि अधिकृत किट में उपलब्ध हो: 300 मिग्रा एस्पिरिन (Aspirin) की गोली पानी से निगलने के बजाय मुंह में चबाकर खाने को कहें। यह दिल की नली में खून का थक्का जमने से रोकती है।"
      },
      {
        step: 3,
        title: "108 एम्बुलेंस को तत्काल कॉल करें",
        instruction: "108 पर तुरंत कॉल करें और बताएं कि मरीज को गंभीर हार्ट अटैक के लक्षण हैं ताकि ऑक्सीजन युक्त गाड़ी आ सके।"
      },
      {
        step: 4,
        title: "मरीज को तसल्ली दें व भीड़ न लगाएं",
        instruction: "मरीज के आसपास भीड़ न लगने दें, खुली हवा आने दें और घबराहट कम करें।"
      }
    ],
    dosageChart: [
      { drug: "Soluble Aspirin", dose: "300 mg stat CHEWED", role: "Inhibits platelet aggregation in coronary artery." },
      { drug: "Sorbitrate (Isosorbide Dinitrate)", dose: "5 mg sublingual ONLY if systolic BP > 100 mmHg", role: "Relieves chest pain under medical supervision." }
    ],
    hindiDosageChart: [
      { drug: "घुलनशील एस्पिरिन (Aspirin)", dose: "300 मिग्रा चबाकर", role: "खून का थक्का पिघलाने में मदद करती है।" },
      { drug: "सॉर्बिट्रेट (Sorbitrate)", dose: "5 मिग्रा जीभ के नीचे (केवल डॉक्टर की सलाह पर यदि बीपी सामान्य हो)", role: "सीने के दर्द में राहत।" }
    ],
    contraindications: [
      "DO NOT allow the patient to walk or exert physical effort.",
      "DO NOT give heavy water or food to a sweating, nauseous patient.",
      "DO NOT dismiss persistent chest pain as mere gastric acidity in adults > 35 years."
    ],
    hindiContraindications: [
      "सीने के दर्द वाले मरीज को पैदल चलने या सीढ़ियां चढ़ने की गलती न करने दें।",
      "पसीना छूट रहे मरीज को जबरन भरपेट पानी या खाना न खिलाएं।",
      "35 वर्ष से अधिक उम्र में सीने के भारी दर्द को केवल 'गैस का दर्द' समझकर अनदेखा न करें।"
    ],
    keywords: [
      "chest pain", "heart attack", "seene me dard", "dil ka daura", "left arm pain", 
      "sweating chest", "cardiac arrest", "aspirin chew", "angina", "fowler position"
    ],
    escalationContact: "108 Emergency Medical Service / District Hospital ICCU"
  },
  {
    id: "prot-neuro-stroke-fast",
    code: "MOHFW-NEURO-STR-12",
    title: "Acute Brain Stroke / Paralysis Recognition (FAST Protocol)",
    hindiTitle: "ब्रेन स्ट्रोक व लकवा की त्वरित पहचान (FAST प्रोटोकॉल)",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "National Stroke Programme - NP-NCD, MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय स्ट्रोक नियंत्रण कार्यक्रम, स्वास्थ्य मंत्रालय",
    guidelineDocument: "Clinical Guidelines for Management of Acute Ischemic Stroke",
    hindiGuidelineDocument: "तीव्र मस्तिष्क पक्षाघात (स्ट्रोक) प्रबंधन राष्ट्रीय मार्गदर्शिका",
    pageNumber: "Page 6-10",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Critical Emergency - 4.5 Hour Thrombolysis Window",
    hindiTriageDescription: "अति-गंभीर आपातकाल - 4.5 घंटे के अंदर सीटी स्कैन व अस्पताल भर्ती जरूरी",
    dangerSigns: [
      "F - Face Drooping: One side of the face is numb or droops when smiling",
      "A - Arm Weakness: One arm is weak or numb; drifts downwards when both raised",
      "S - Speech Difficulty: Slurred speech, unable to speak, or difficulty understanding",
      "T - Time Critical: Note exact time symptoms started (< 4.5 hour golden window)",
      "Sudden loss of balance, vertigo, or sudden blindness in one or both eyes"
    ],
    hindiDangerSigns: [
      "चेहरा टेढ़ा होना (F - Face): हंसने या मुंह खोलने पर एक तरफ का मुंह टेढ़ा हो जाना",
      "हाथ में कमजोरी (A - Arm): दोनों हाथ उठाने पर एक हाथ नीचे लटक जाना या सुन्न होना",
      "आवाज लड़खड़ाना (S - Speech): बोलने में जबान लड़खड़ाना या समझ न आना",
      "समय का महत्व (T - Time): लक्षण शुरू होने का सटीक समय नोट करें (4.5 घंटे का समय)",
      "अचानक संतुलन बिगड़ना, चक्कर आना या एक आंख से अचानक दिखना बंद होना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Perform 60-Second FAST Evaluation",
        instruction: "Ask patient to smile (check face). Ask patient to raise both arms (check weakness). Ask patient to repeat a simple sentence (check speech). If any 1 is abnormal, classify as ACUTE STROKE."
      },
      {
        step: 2,
        title: "Maintain Lateral Positioning & Head Elevated 15-30 Degrees",
        instruction: "Lie patient on the unaffected side with head elevated slightly. Ensure airway is completely clear. Do NOT give anything to eat or drink (high choking risk)."
      },
      {
        step: 3,
        title: "Note Exact 'Time of Last Seen Normal'",
        instruction: "Record exact time symptoms began. Hospital requires this to administer clot-busting medication (Alteplase) within 4.5 hours."
      },
      {
        step: 4,
        title: "Immediate 108 Ambulance Transfer to District Hospital with CT Scan",
        instruction: "Dial 108 immediately. Escort patient to District Hospital where a 24x7 CT scan is operational."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "60 सेकंड में FAST जांच करें",
        instruction: "मरीज को हंसने को कहें (चेहरा देखें), दोनों हाथ उठाने को कहें (कमजोरी देखें), एक छोटा वाक्य बोलने को कहें (बोली देखें)। यदि कोई भी एक लक्षण है तो यह स्ट्रोक है।"
      },
      {
        step: 2,
        title: "सिर को 15-30 डिग्री ऊंचा रखें व मुंह में कुछ न डालें",
        instruction: "सिर को हल्का ऊंचा रखें। मरीज के मुंह में पानी, चाय या दवा भूलकर भी न डालें (फेफड़ों में फंसने का जानलेवा खतरा)।"
      },
      {
        step: 3,
        title: "लक्षण शुरू होने का सही समय नोट करें",
        instruction: "परिजनों से पूछें कि मरीज अंतिम बार कब बिल्कुल ठीक था। 4.5 घंटे के अंदर अस्पताल पहुंचने पर नस का थक्का पिघलाने वाली दवा से लकवा पूरी तरह ठीक हो सकता है।"
      },
      {
        step: 4,
        title: "108 एम्बुलेंस से सीटी स्कैन वाले जिला अस्पताल ले जाएं",
        instruction: "तुरंत 108 बुलाएं और मरीज को सीधे जिला अस्पताल ले जाएं जहां सीटी स्कैन उपलब्ध हो।"
      }
    ],
    dosageChart: [
      { indicator: "Acute Ischemic Stroke within 4.5 hours", action: "Hospital thrombolysis with IV r-tPA (Alteplase) by neurologist after non-contrast head CT scan." }
    ],
    hindiDosageChart: [
      { indicator: "4.5 घंटे के भीतर अस्पताल पहुंचने पर", action: "सीटी स्कैन के बाद न्यूरोलॉजिस्ट द्वारा नस खोलने वाली विशेष दवा (Alteplase) से उपचार।" }
    ],
    contraindications: [
      "DO NOT give water, tea, or food to a stroke patient (swallowing muscles are paralyzed; causes fatal aspiration pneumonia).",
      "DO NOT give Sorbitrate or aggressively lower blood pressure without hospital doctor.",
      "DO NOT wait for symptoms to improve on their own overnight."
    ],
    hindiContraindications: [
      "लकवा पीड़ित मरीज को पानी, शरबत या खाना हरगिज न दें (गले की मांसपेशियां सुन्न होने से सांस की नली चोक हो सकती है)।",
      "घर पर बीपी गिराने की दवाएं मनमर्जी से न खिलाएं।",
      "सुबह तक अपने आप ठीक होने का इंतजार करके 4.5 घंटे का कीमती समय न गंवाएं।"
    ],
    keywords: [
      "stroke", "paralysis", "lakwa", "fast protocol", "face drooping", 
      "slurred speech", "arm weakness", "brain stroke", "hemiplegia", "ct scan"
    ],
    escalationContact: "108 Ambulance Dispatch / District Hospital Emergency CT Unit"
  },
  {
    id: "prot-toxic-poisoning-op",
    code: "MOHFW-TOXIC-PSN-13",
    title: "Organophosphate Pesticide & Household Poisoning Emergency",
    hindiTitle: "कीटनाशक (दवाई) व जहरीले पदार्थ निगलने पर आपातकालीन प्राथमिक उपचार",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "National Poison Information Center (NPIC) & NHM",
    hindiIssuingAuthority: "राष्ट्रीय विष सूचना केंद्र एवं राष्ट्रीय स्वास्थ्य मिशन",
    guidelineDocument: "Emergency Management of Acute Poisoning at Primary Health Level",
    hindiGuidelineDocument: "प्राथमिक स्तर पर तीव्र विषाक्तता आपातकालीन प्रबंधन मार्गदर्शिका",
    pageNumber: "Page 10-15",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Critical Emergency - Hospital Gastric Lavage & Atropine",
    hindiTriageDescription: "अति-गंभीर आपातकाल - अस्पताल में एट्रोपिन व पेट की सफाई हेतु तत्काल रेफरल",
    dangerSigns: [
      "Garlic-like or chemical odor from breath or vomitus",
      "Pinpoint pupils (पुतलियां एकदम छोटी पिन जैसी हो जाना)",
      "Excessive salivation, frothing at mouth, sweating, and tearing",
      "Convulsions, extreme muscle twitching, unconsciousness, or slow heart rate (< 50 bpm)",
      "Labored breathing with gurgling secretions in the chest"
    ],
    hindiDangerSigns: [
      "मुंह या उल्टी से कीटनाशक दवाई या लहसुन जैसी तीखी रासायनिक गंध आना",
      "आंखों की पुतलियों का बिल्कुल छोटा (पिनपॉइंट) हो जाना",
      "मुंह से अत्यधिक झाग या लार टपकना, पसीना व आंखों से आंसू बहना",
      "मांसपेशियों में फड़कन, दौरे पड़ना, अत्यधिक सुस्ती या नाड़ी बहुत धीमी पड़ना",
      "छाती से खड़खड़ाहट की आवाज आना और सांस लेने में भारी कठिनाई"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Remove Contaminated Clothing & Decontaminate Skin",
        instruction: "Protect yourself with gloves/cloth. Immediately remove all pesticide-soaked clothes. Wash skin, hair, and eyes with copious running water and soap to stop dermal absorption."
      },
      {
        step: 2,
        title: "Maintain Clear Airway (Recovery Position)",
        instruction: "Turn patient onto left side with head tilted down. Wipe away excessive foam and saliva from mouth to prevent suffocation."
      },
      {
        step: 3,
        title: "Preserve the Poison Container / Label",
        instruction: "Secure the pesticide bottle, box, or label safely in a polythene bag to bring to the hospital for the doctor to identify specific antidote."
      },
      {
        step: 4,
        title: "Immediate 108 Ambulance Transfer for Atropine & Pralidoxime (PAM)",
        instruction: "Call 108 immediately. Coordinate with Rampur CHC to prepare Atropine vials."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "दवा लगे कपड़े तुरंत उतारें व त्वचा को धोएं",
        instruction: "कीटनाशक लगे सभी कपड़े तुरंत शरीर से उतारें। त्वचा, सिर के बाल और आंखों को भरपूर साफ पानी और साबुन से धोएं ताकि त्वचा से जहर का सोखना रुक सके।"
      },
      {
        step: 2,
        title: "मरीज को करवट लिटाएं व मुंह का झाग साफ करें",
        instruction: "मरीज को बाईं करवट लिटाएं और मुंह से निकलने वाले झाग व लार को साफ करें ताकि सांस की नली बंद न हो।"
      },
      {
        step: 3,
        title: "जहर/दवाई की शीशी या डिब्बा साथ रखें",
        instruction: "कीटनाशक की बोतल या पैकेट को प्लास्टिक की थैली में रखकर अस्पताल साथ ले जाएं ताकि डॉक्टर सही एंटीडोट (दवा) दे सकें।"
      },
      {
        step: 4,
        title: "108 एम्बुलेंस से सीएचसी या जिला अस्पताल ले जाएं",
        instruction: "108 पर कॉल करें ताकि अस्पताल में एट्रोपिन (Atropine) व पैम (PAM) इंजेक्शन तुरंत शुरू किया जा सके।"
      }
    ],
    dosageChart: [
      { antidote: "Atropine Sulphate", protocol: "1.8 - 3 mg IV bolus repeated every 5-10 minutes by Doctor until full atropinization (clear chest, heart rate > 80)." },
      { antidote: "Pralidoxime (2-PAM)", protocol: "1-2 g IV slow infusion over 30 min in organophosphate poisoning." }
    ],
    hindiDosageChart: [
      { antidote: "एट्रोपिन सल्फेट (Atropine)", protocol: "अस्पताल में डॉक्टर द्वारा फेफड़े साफ होने तक लगातार दिया जाने वाला इंजेक्शन।" },
      { antidote: "प्रालिडोक्सिम (2-PAM)", protocol: "कीटनाशक जहर उतारने के लिए अस्पताल में ड्रिप द्वारा।" }
    ],
    contraindications: [
      "DO NOT induce vomiting with salt water or fingers (causes chemical pneumonitis and fatal lung damage).",
      "DO NOT give milk, ghee, raw eggs, or cooking oil (fat increases pesticide absorption).",
      "DO NOT touch contaminated clothing with bare hands."
    ],
    hindiContraindications: [
      "नमक का पानी पिलाकर या उंगली डालकर उल्टी कराने का प्रयास कभी न करें (जहर फेफड़ों में जाकर जान ले लेता है)।",
      "मरीज को दूध, घी, तेल या कच्चा अंडा बिल्कुल न पिलाएं (चिकनाई से जहर पेट में और तेजी से घुलता है)।",
      "कीटनाशक लगे कपड़ों को नंगे हाथों से न छुएं।"
    ],
    keywords: [
      "poisoning", "pesticide", "keetnashak", "jahar khana", "organophosphate", 
      "froth mouth", "pinpoint pupils", "atropine", "antidote", "toxic"
    ],
    escalationContact: "108 Ambulance / CHC Rampur / National Poison Info 1075"
  },

  // =========================================================================
  // SECTION 4: COMMON DAILY PROBLEMS (WOUNDS, BURNS, SCABIES, EYE INFECTION)
  // =========================================================================
  {
    id: "prot-common-burns",
    code: "MOHFW-COMMON-BRN-14",
    title: "Superficial Burns & Scalds First Aid Protocol",
    hindiTitle: "सामान्य आग या गर्म पानी से जलने (बर्न) पर प्राथमिक उपचार",
    category: "Common Daily Problems",
    hindiCategory: "दैनिक सामान्य स्वास्थ्य समस्याएं",
    issuingAuthority: "Directorate General of Health Services (DGHS) & MoHFW",
    hindiIssuingAuthority: "स्वास्थ्य सेवा महानिदेशालय एवं स्वास्थ्य मंत्रालय, भारत सरकार",
    guidelineDocument: "National Guidelines for Burn Care and Management",
    hindiGuidelineDocument: "जलने की चोट (बर्न केयर) राष्ट्रीय प्रबंधन मार्गदर्शिका",
    pageNumber: "Page 5-8, Section 2",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "AMBER",
    triageDescription: "Immediate 15-20 Min Cool Water First Aid, Facility Review if Severe",
    hindiTriageDescription: "तुरंत 15-20 मिनट सामान्य ठंडे पानी से ठंडक पहुंचाएं, गंभीर होने पर अस्पताल ले जाएं",
    dangerSigns: [
      "Burns covering > 10% of total body surface area (1 palm area ~ 1% of body)",
      "Burns on face, eyes, ears, hands, feet, joints, or genitals",
      "Deep burns with white, charred, leathery, or painless skin",
      "Inhalation burn: Soot in nostrils, hoarse voice, singed facial hair, breathlessness"
    ],
    hindiDangerSigns: [
      "शरीर का 10% से अधिक हिस्सा जलना (मरीज की 1 हथेली का आकार = शरीर का 1%)",
      "चेहरा, आंख, कान, हाथ, पैर, जोड़ों या जननांगों का जलना",
      "गहरा जलना जहां त्वचा सफेद, कोयले जैसी काली या सुन्न पड़ गई हो",
      "धुएं से सांस की नली जलना (नाक में कालिख, आवाज बैठना, सांस फूलना)"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Cool Immediately Under Running Water for 15-20 Minutes (CRITICAL)",
        instruction: "Immediately pour clean, cool (room temperature) tap water over the burn continuously for 15-20 minutes until the burning pain subsides. This stops ongoing thermal damage to deeper skin layers."
      },
      {
        step: 2,
        title: "Remove Jewelry & Loose Clothing Gently",
        instruction: "Quickly remove rings, watches, and loose belts before edema develops. Do NOT pull off clothes that are stuck to the burned skin (cut around them)."
      },
      {
        step: 3,
        title: "Protect with Clean Sterile Cover",
        instruction: "Cover the burn loosely with clean, dry, sterile cloth, gauze, or clean plastic cling wrap. Do NOT break blisters."
      },
      {
        step: 4,
        title: "Pain Relief & Hydration",
        instruction: "Give oral Paracetamol tablet or syrup for pain. Encourage frequent sips of ORS or clean fluids to prevent hypovolemia."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "तुरंत सामान्य पानी की धार के नीचे 15-20 मिनट रखें (अति-आवश्यक)",
        instruction: "जले हुए अंग पर तुरंत नल का सामान्य पानी लगातार 15-20 मिनट तक डालें जब तक कि जलन शांत न हो जाए। यह त्वचा की भीतरी परतों को जलने से रोकता है।"
      },
      {
        step: 2,
        title: "अंगूठी, घड़ी, कड़े तुरंत उतारें",
        instruction: "सूजन आने से पहले अंगूठी व कड़े उतार लें। जो कपड़ा जली हुई चमड़ी से चिपक गया हो, उसे जबरन न खींचे, आसपास से कैंची से काट लें।"
      },
      {
        step: 3,
        title: "साफ सूखे कपड़े से ढकें व छाले न फोड़ें",
        instruction: "जले हिस्से को साफ सूती कपड़े या गॉज से ढीला ढकें। फफोले (छाले) कभी न फोड़ें (संक्रमण का खतरा)।"
      },
      {
        step: 4,
        title: "दर्द निवारक व ओआरएस का घोल",
        instruction: "दर्द कम करने हेतु पेरासिटामोल दें और शरीर में पानी की कमी रोकने के लिए ओआरएस या पानी पिलाते रहें।"
      }
    ],
    dosageChart: [
      { type: "First Degree / Minor Superficial Burn", treatment: "1% Silver Sulfadiazine (Silvadene) or Soframycin cream application after cooling." },
      { type: "Pain Relief", treatment: "Paracetamol 500 mg tablet (Adults) or 15 mg/kg syrup (Children) every 6-8 hours." }
    ],
    hindiDosageChart: [
      { type: "सामान्य मामूली जलना", treatment: "पानी से ठंडा करने के बाद 1% सिल्वर सल्फाडियाजीन (सिल्वरैक्स/सोफ्रामाइसिन) मरहम लगाएं।" },
      { type: "दर्द से राहत", treatment: "वयस्कों के लिए पेरासिटामोल 500 मिग्रा गोली (बच्चों के लिए वजन अनुसार सिरप)।" }
    ],
    contraindications: [
      "DO NOT apply ice or ice-cold freezing water (causes frostbite and worsens tissue ischemia).",
      "DO NOT apply toothpaste, cow dung, ink, turmeric, engine oil, or raw eggs.",
      "DO NOT burst or peel blister fluid sacs.",
      "DO NOT apply adhesive bandages directly onto burned skin."
    ],
    hindiContraindications: [
      "जले पर बर्फ या बहुत ज्यादा ठंडा पानी कभी न लगाएं (खून की नसें सिकुड़कर चमड़ी मर जाती है)।",
      "जले पर टूथपेस्ट, गोबर, स्याही, हल्दी, तेल या कच्चा अंडा लगाने की भूल कभी न करें।",
      "पानी भरे छालों को फोड़ने की गलती न करें।",
      "जली हुई चमड़ी पर सीधे चिपकने वाला प्लास्टर न चिपकाएं।"
    ],
    keywords: [
      "burn", "burns", "jalna", "scaldo", "blister", "hot water burn", 
      "chhale", "silver sulfadiazine", "cool water", "fire injury"
    ],
    escalationContact: "Kalyanpur PHC / Rampur CHC Burn Dressing Unit"
  },
  {
    id: "prot-common-wounds",
    code: "MOHFW-COMMON-WND-15",
    title: "Minor Cuts, Lacerations & Wound Cleansing Protocol",
    hindiTitle: "सामान्य चोट, खरोंच व घाव की प्राथमिक सफाई एवं ड्रेसिंग",
    category: "Common Daily Problems",
    hindiCategory: "दैनिक सामान्य स्वास्थ्य समस्याएं",
    issuingAuthority: "Ayushman Bharat Comprehensive Primary Health Care (CPHC)",
    hindiIssuingAuthority: "आयुष्मान भारत - व्यापक प्राथमिक स्वास्थ्य देखभाल दिशानिर्देश",
    guidelineDocument: "Standard Treatment Guidelines for Minor Ailments at Health & Wellness Centers",
    hindiGuidelineDocument: "आरोग्य मंदिर प्राथमिक स्तर पर सामान्य चोट व घाव प्रबंधन दिशानिर्देश",
    pageNumber: "Page 22-26",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "GREEN",
    triageDescription: "Community Level Primary Wound Management & TT Prophylaxis",
    hindiTriageDescription: "सामुदायिक स्तर पर घाव की प्राथमिक सफाई व टिटनेस टीका जांच",
    dangerSigns: [
      "Arterial spurting blood or bleeding that does not stop after 10 minutes of direct pressure",
      "Deep gaping wound exposing fat, muscle, tendon, or bone (needs surgical sutures)",
      "Wound contaminated with rusted iron, farm manure, soil, or animal saliva",
      "Loss of sensation, tingling, or inability to move fingers/toes beyond the wound",
      "Signs of established infection: Redness spreading, throbbing pain, pus, and fever"
    ],
    hindiDangerSigns: [
      "10 मिनट लगातार हाथ से दबाने के बाद भी खून का फव्वारा या तेज बहाव न रुकना",
      "गहरा फटा हुआ घाव जहां मांस, नसें या हड्डी दिखाई दे रही हो (टांके लगना जरूरी)",
      "जंग लगे लोहे, गोबर, खेत की खाद या मिट्टी से सना हुआ गहरा घाव",
      "घाव के आगे के हिस्से में सुन्नपन या उंगलियां हिलाने में असमर्थता",
      "घाव में मवाद पड़ना, अत्यधिक दर्द, लाली फैलना और बुखार आना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Control Bleeding with Firm Direct Pressure",
        instruction: "Apply firm, continuous direct pressure over the bleeding site with a clean cloth or sterile gauze for a full 5-10 minutes without peeking."
      },
      {
        step: 2,
        title: "Copious Cleansing with Running Tap Water or Normal Saline",
        instruction: "Flush the wound thoroughly under clean running water for 3-5 minutes to remove dirt, pebbles, and bacteria. Wash skin around wound with soap."
      },
      {
        step: 3,
        title: "Disinfection with Povidone-Iodine",
        instruction: "Apply 5% Povidone-Iodine (Betadine) solution gently over and around the wound. Cover with a sterile non-stick bandage."
      },
      {
        step: 4,
        title: "Check Tetanus Toxoid (TT) Status",
        instruction: "If the last TT injection was > 5 years ago (for contaminated wounds) or > 10 years ago (for clean wounds), administer TT 0.5 mL IM at the Sub-Center."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "सीधे दबाव से खून का बहना रोकें",
        instruction: "साफ कपड़े या गॉज से घाव के ऊपर लगातार 5-10 मिनट तक हाथ से दबाकर रखें। बार-बार हटाकर न देखें।"
      },
      {
        step: 2,
        title: "बहते साफ पानी से घाव की अच्छी तरह धुलाई",
        instruction: "घाव को नल के बहते पानी या नॉर्मल सलाइन से 3-5 मिनट तक धोएं ताकि धूल, मिट्टी और जीवाणु बह जाएं।"
      },
      {
        step: 3,
        title: "बीटाडीन (पोविडोन-आयोडीन) से ड्रेसिंग",
        instruction: "घाव पर 5% बीटाडीन लगाएं और साफ पट्टी बांधें। पट्टी को रोजाना बदलें।"
      },
      {
        step: 4,
        title: "टिटनेस (TT) टीके की जांच",
        instruction: "यदि पिछले 5-10 वर्षों में टिटनेस का टीका नहीं लगा है, तो उप-केंद्र पर टिटनेस (TT 0.5 mL) का टीका लगवाएं।"
      }
    ],
    dosageChart: [
      { type: "Topical Antiseptic", protocol: "5% Povidone-Iodine ointment or Neomycin-Bacitracin twice daily." },
      { type: "Tetanus Immunization", protocol: "Tetanus Toxoid (TT) 0.5 mL IM in deltoid muscle within 24 hours." }
    ],
    hindiDosageChart: [
      { type: "एंटीसेप्टिक मरहम", protocol: "5% पोविडोन-आयोडीन (बीटाडीन) दिन में दो बार लगाएं।" },
      { type: "टिटनेस का टीका", protocol: "टिटनेस टॉक्साइड (TT) 0.5 mL बाजू में 24 घंटे के अंदर।" }
    ],
    contraindications: [
      "DO NOT pack dirt, ash, cow dung, crushed leaves, or tobacco into open wounds.",
      "DO NOT wash open wounds with harsh detergent or undiluted hydrogen peroxide.",
      "DO NOT ignore deeply punctured wounds caused by rusted nails."
    ],
    hindiContraindications: [
      "घाव पर राख, गोबर, चूना, पिसी तंबाकू या जंगली पत्तियां ठूंसने का काम कभी न करें।",
      "घाव के अंदर कपड़े धोने वाला पाउडर या तेजाब न डालें।",
      "जंग लगी कील चुभने के गहरे घाव को अनदेखा न करें।"
    ],
    keywords: [
      "cut", "wound", "ghav", "chot", "bleeding wound", 
      "tetanus", "betadine", "bandage", "dressing", "laceration"
    ],
    escalationContact: "Kalyanpur Health & Wellness Sub-Center / ANM"
  },
  {
    id: "prot-common-scabies",
    code: "MOHFW-COMMON-SCB-16",
    title: "Scabies & Contagious Skin Itching Protocol",
    hindiTitle: "स्केबीज (खाज/खुजली) का पारिवारिक उपचार व परमेथ्रिन प्रोटोकॉल",
    category: "Common Daily Problems",
    hindiCategory: "दैनिक सामान्य स्वास्थ्य समस्याएं",
    issuingAuthority: "National Health Mission - Dermatology Guidance for CHWs",
    hindiIssuingAuthority: "राष्ट्रीय स्वास्थ्य मिशन - त्वचा रोग प्रबंधन दिशानिर्देश",
    guidelineDocument: "Management of Common Skin Conditions at Ayushman Arogya Mandir",
    hindiGuidelineDocument: "आयुष्मान आरोग्य मंदिर सामान्य त्वचा रोग उपचार मार्गदर्शिका",
    pageNumber: "Page 16-19",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "GREEN",
    triageDescription: "Community Simultaneous Family Treatment with 5% Permethrin",
    hindiTriageDescription: "पूरे परिवार का एक साथ परमेथ्रिन 5% लोशन से सामुदायिक उपचार",
    dangerSigns: [
      "Intense itching that worsens markedly at night, preventing sleep",
      "Pimple-like itchy burrows in web spaces between fingers, wrists, armpits, and groin",
      "Multiple family members or children in the household scratching simultaneously",
      "Secondary bacterial infection: Yellow crusting sores, pus blisters (impetigo), and fever"
    ],
    hindiDangerSigns: [
      "रात के समय असहनीय खुजली जो सोने न दे",
      "उंगलियों के बीच की जगहों, कलाई, कांख, नाभि और जांघों पर बारीक दाने व खुजली",
      "घर के कई सदस्यों या बच्चों को एक साथ खुजली होना (छूत की बीमारी)",
      "खुजाने से घाव में मवाद पड़ना, पीली पपड़ी जमना (इम्पेटिगो) व बुखार"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Simultaneous Treatment of ALL Household Members",
        instruction: "All persons living in the same home must be treated at the EXACT SAME TIME, even if some have no visible itching yet (asymptomatic carriers)."
      },
      {
        step: 2,
        title: "Application of 5% Permethrin Lotion Neck to Toe",
        instruction: "After taking an evening bath, apply Permethrin 5% lotion thoroughly to the ENTIRE body from the neck down to the toes (including under nails, between fingers, and genitals). Leave on for 8-12 hours overnight, then wash off next morning."
      },
      {
        step: 3,
        title: "Disinfection of Clothes & Bedding",
        instruction: "Wash all clothes, bedsheets, blankets, and towels used in the past 4 days in hot water and dry thoroughly under bright sunlight for 2 consecutive days."
      },
      {
        step: 4,
        title: "Repeat Dose After 7 Days",
        instruction: "Repeat the exact application once after 7 days to eliminate any newly hatched scabies mites."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "पूरे परिवार का एक ही दिन एक साथ इलाज (अति-महत्वपूर्ण)",
        instruction: "घर के सभी सदस्यों का इलाज एक ही रात को एक साथ होना अनिवार्य है, भले ही किसी सदस्य को अभी खुजली न हो रही हो।"
      },
      {
        step: 2,
        title: "परमेथ्रिन 5% लोशन गर्दन से पैर के पंजों तक लगाना",
        instruction: "शाम को नहाने के बाद परमेथ्रिन 5% लोशन गर्दन से नीचे पूरे शरीर पर लगाएं (उंगलियों के बीच, नाखूनों के नीचे व जांघों सहित)। पूरी रात (8-12 घंटे) लगा रहने दें, अगली सुबह धोएं।"
      },
      {
        step: 3,
        title: "कपड़ों व बिस्तरों को तेज धूप में सुखाना",
        instruction: "घर के सभी कपड़े, चादरें व तकिए गर्म पानी से धोकर 2 दिन तेज धूप में सुखाएं ताकि खाज के कीड़े मर जाएं।"
      },
      {
        step: 4,
        title: "7 दिन बाद दोबारा दोहराना",
        instruction: "7 दिन बाद यह प्रक्रिया एक बार फिर दोहराएं ताकि बचे हुए कीड़ों के अंडों का भी सफाया हो जाए।"
      }
    ],
    dosageChart: [
      { medicine: "Permethrin 5% Lotion", application: "Single application neck-to-toe overnight (8-12h). Repeat in 7 days. Safe in adults & children > 2 months." },
      { medicine: "Cetirizine 10 mg (Tablet)", application: "1 tablet at bedtime for severe itching (Adults). Syrup 2.5-5 mg for children." }
    ],
    hindiDosageChart: [
      { medicine: "परमेथ्रिन 5% लोशन", application: "गर्दन से पैर तक रात भर लगाकर रखें। 7 दिन बाद एक बार फिर लगाएं।" },
      { medicine: "सिट्रिजिन (Cetirizine) 10 mg", application: "रात को खुजली से आराम के लिए 1 गोली सोते समय।" }
    ],
    contraindications: [
      "DO NOT treat only one sick child while leaving rest of the family untreated (causes immediate relapse).",
      "DO NOT apply strong steroid creams (e.g. Clobetasol) without doctor's order (worsens mite proliferation).",
      "DO NOT share towels, clothes, or beds with infected individuals."
    ],
    hindiContraindications: [
      "केवल एक बच्चे को दवा लगाकर बाकी परिवार को न छोड़ें (बीमारी तुरंत दोबारा लौट आती है)।",
      "बिना डॉक्टर के स्टेरॉयड वाली खुजली की ट्यूब न लगाएं (इससे कीड़े और तेजी से फैलते हैं)।",
      "मरीज के कपड़े, तौलिया या बिस्तर अन्य लोग इस्तेमाल न करें।"
    ],
    keywords: [
      "scabies", "itching", "khujli", "khaj", "permethrin", 
      "night itching", "skin rash", "pimple fingers", "family itching"
    ],
    escalationContact: "Kalyanpur Health & Wellness Center / ANM"
  },
  {
    id: "prot-common-conjunctivitis",
    code: "MOHFW-COMMON-EYE-17",
    title: "Acute Conjunctivitis & Eye Discharge (Pink Eye)",
    hindiTitle: "कंजंक्टिवाइटिस (आँख आना) व लाल आँख का सुरक्षित प्राथमिक उपचार",
    category: "Common Daily Problems",
    hindiCategory: "दैनिक सामान्य स्वास्थ्य समस्याएं",
    issuingAuthority: "National Programme for Control of Blindness and Visual Impairment (NPCBVI)",
    hindiIssuingAuthority: "राष्ट्रीय अंधता एवं दृष्टि दोष नियंत्रण कार्यक्रम, स्वास्थ्य मंत्रालय",
    guidelineDocument: "Primary Eye Care Manual for Community Health Workers",
    hindiGuidelineDocument: "सामुदायिक स्वास्थ्य कार्यकर्ताओं हेतु प्राथमिक नेत्र देखभाल मैन्युअल",
    pageNumber: "Page 11-14",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "GREEN",
    triageDescription: "Local Cleansing & Antibiotic Eye Drops, Facility Referral if Painful",
    hindiTriageDescription: "स्वच्छ पानी से सफाई व एंटीबायोटिक आई ड्रॉप्स, तेज दर्द होने पर डॉक्टर को दिखाएं",
    dangerSigns: [
      "Marked reduction in vision (seeing blurred or unable to count fingers from 3 meters)",
      "Severe deep throbbing eye pain or extreme photophobia (unable to open eye in light)",
      "Hazy, cloudy, or white spot on the clear cornea (corneal ulcer risk)",
      "Unequal pupils or pupil that does not react to light",
      "Neonatal eye discharge within first month of life (Ophthalmia Neonatorum - Emergency)"
    ],
    hindiDangerSigns: [
      "दृष्टि में कमी आना (धुंधला दिखना या 3 मीटर दूर से उंगलियां न गिन पाना)",
      "आंख में असहनीय गहरा दर्द या रोशनी में आंख बिल्कुल न खोल पाना",
      "काली पुतली (कॉर्निया) पर सफेद धब्बा या धुंधलापन (अल्सर का खतरा)",
      "नवजात शिशु की आंख से मवाद जैसा गाढ़ा स्त्राव (नवजात नेत्र संक्रमण - तत्काल डॉक्टर को दिखाएं)"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Cleanse Eye Discharge with Sterile Boiled Water Wipes",
        instruction: "Boil clean water and let it cool. Soak sterile cotton swabs and wipe eye gently from inside corner (near nose) towards outside in a SINGLE stroke. Use a fresh cotton swab for each wipe."
      },
      {
        step: 2,
        title: "Frequent Hand Washing & Separate Towel",
        instruction: "Wash hands thoroughly with soap before and after touching eyes. Use dedicated personal towel to prevent spreading to family members."
      },
      {
        step: 3,
        title: "Apply Antibiotic Eye Drops (Under Sub-Center Purview)",
        instruction: "Instill 1-2 drops of Ciprofloxacin 0.3% or Chloramphenicol 0.5% eye drops 3-4 times daily for 5 days. Ensure dropper tip does NOT touch the eyeball or eyelashes."
      },
      {
        step: 4,
        title: "Refer to Ophthalmic Assistant if No Improvement in 48 Hours",
        instruction: "If redness, swelling, or pain increases after 48 hours, refer to Rampur CHC Eye Clinic."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "उबले ठंडे पानी व रुई से आंख की सफाई",
        instruction: "उबले हुए ठंडे पानी में साफ रुई भिगोकर आंख के अंदरूनी कोने (नाक की तरफ) से बाहर की ओर एक ही बार में साफ करें। हर बार नई रुई लें।"
      },
      {
        step: 2,
        title: "हाथ धोना व अलग तौलिया रखना",
        instruction: "आंख छूने से पहले और बाद में साबुन से हाथ धोएं। अपना तौलिया और रुमाल अलग रखें ताकि घर में अन्य लोगों को न फैले।"
      },
      {
        step: 3,
        title: "सिप्रोफ्लोक्सासिन (Ciprofloxacin) आई ड्रॉप्स",
        instruction: "दिन में 3-4 बार 1-2 बूंद आई ड्रॉप्स डालें। ध्यान रहे कि दवा की शीशी की नोक आंख या पलकों से न छुए।"
      },
      {
        step: 4,
        title: "48 घंटे में आराम न मिलने पर नेत्र सहायक को दिखाएं",
        instruction: "यदि 2 दिन में आंख का लालपन या दर्द कम न हो, तो सामुदायिक स्वास्थ्य केंद्र के नेत्र विभाग में जांच करवाएं।"
      }
    ],
    dosageChart: [
      { medicine: "Ciprofloxacin 0.3% Eye Drops", dose: "1-2 drops in affected eye 4 times daily for 5-7 days." },
      { medicine: "Carboxymethylcellulose 0.5%", dose: "Lubricating soothing drops for burning and grittiness." }
    ],
    hindiDosageChart: [
      { medicine: "सिप्रोफ्लोक्सासिन 0.3% आई ड्रॉप", dose: "प्रभावित आंख में 1-2 बूंद दिन में 4 बार 5 दिनों तक।" },
      { medicine: "आंख में चिकनाई हेतु ड्रॉप", dose: "जलन और चुभन से राहत हेतु।" }
    ],
    contraindications: [
      "DO NOT patch or bandage an infected eye shut (creates warm incubation chamber for bacteria).",
      "DO NOT put breastmilk, kajal, rose water, urine, or unsterile herbal drops into eyes.",
      "DO NOT use steroid eye drops (e.g. Dexamethasone) without slit-lamp examination (can cause blindness in fungal/herpes infection).",
      "DO NOT wear contact lenses during infection."
    ],
    hindiContraindications: [
      "संक्रमित आंख पर काली पट्टी या ढक्कन न बांधें (अंदर गर्मी से बैक्टीरिया तेजी से बढ़ते हैं)।",
      "आंख में काजल, माँ का दूध, गुलाब जल या जड़ी-बूटी का रस कभी न डालें।",
      "बिना नेत्र डॉक्टर की जांच के स्टेरॉयड (डेक्सामेथासोन) वाली आई ड्रॉप्स न डालें (अंधापन हो सकता है)।",
      "आंख आने पर चश्मा या लेंस न लगाएं।"
    ],
    keywords: [
      "conjunctivitis", "pink eye", "aankh aana", "red eye", "eye discharge", 
      "ciprofloxacin drops", "eye pain", "aankh me kichad", "aankh lal hona"
    ],
    escalationContact: "Kalyanpur Health Sub-Center / Rampur CHC Eye Clinic"
  },
  {
    id: "prot-common-heatstroke",
    code: "MOHFW-CPHC-HEX-18",
    title: "Heat Stroke & Severe Heat Exhaustion Protocol",
    hindiTitle: "लू लगना (हीट स्ट्रोक) व अत्यधिक तापघात आपातकालीन प्रबंधन",
    category: "Common Daily Problems",
    hindiCategory: "दैनिक सामान्य स्वास्थ्य समस्याएं",
    issuingAuthority: "National Disaster Management Authority (NDMA) & MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय आपदा प्रबंधन प्राधिकरण एवं स्वास्थ्य मंत्रालय",
    guidelineDocument: "National Guidelines for Prevention and Management of Heatwave",
    hindiGuidelineDocument: "लू व तापघात रोकथाम एवं प्रबंधन राष्ट्रीय दिशानिर्देश",
    pageNumber: "Page 8-10, Chapter 3",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Active Cooling & Urgent 108 Emergency Transfer",
    hindiTriageDescription: "तुरंत सक्रिय रूप से शरीर ठंडा करें व 108 एम्बुलेंस से अस्पताल भेजें",
    dangerSigns: [
      "Body temperature > 104°F (40°C) with hot, dry, red skin and absence of sweating",
      "Altered mental status: Confusion, slurred speech, delirium, stupor, or convulsions",
      "Rapid, strong pulse initially, becoming weak and rapid with low blood pressure",
      "Vomiting, headache, severe dizziness, and sudden collapse in hot weather"
    ],
    hindiDangerSigns: [
      "शरीर का तापमान 104°F (40°C) से अधिक, त्वचा बहुत गर्म व लाल और पसीना आना बंद",
      "मानसिक असंतुलन: अजीब बातें करना, भ्रम, बेहोशी या दौरे पड़ना",
      "नाड़ी बहुत तेज चलना और रक्तचाप (BP) अचानक गिर जाना",
      "धूप में चक्कर खाकर गिरना, सिरदर्द, उल्टी और अचेत होना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Move to Cool Shade & Strip Outer Clothing",
        instruction: "Move victim instantly out of the sun into a cool, well-ventilated, shaded area or air-conditioned room. Remove heavy clothes."
      },
      {
        step: 2,
        title: "Active Evaporative Cooling (LIFE SAVING)",
        instruction: "Spray or sponge entire body with cool (room temperature) tap water and fan vigorously with an electric fan or manual hand fan. Apply cold wet towels or ice packs to the armpits, groin, neck, and back."
      },
      {
        step: 3,
        title: "Hydration ONLY if Fully Conscious",
        instruction: "If the patient is alert and can swallow, give frequent small sips of cool water with ORS. Do NOT force liquids into a drowsy or vomiting patient."
      },
      {
        step: 4,
        title: "Dial 108 for Emergency Hospital Transfer",
        instruction: "Transfer immediately in an air-conditioned or ventilated ambulance to Rampur CHC for IV Normal Saline resuscitation."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "तुरंत ठंडी छायादार जगह लाएं व भारी कपड़े उतारें",
        instruction: "मरीज को तुरंत धूप से हटाकर पेड़ की छाया या पंखे वाले कमरे में लाएं। भारी कपड़े उतारकर हल्के कपड़े रखें।"
      },
      {
        step: 2,
        title: "पूरे शरीर को ठंडा करें (जीवनरक्षक उपाय)",
        instruction: "शरीर पर सामान्य ठंडा पानी छिड़कें और लगातार पंखा झलें। गीली पट्टियां गर्दन, कांख और जांघों के जोड़ों पर रखें जहां खून की बड़ी नसें होती हैं।"
      },
      {
        step: 3,
        title: "होश में होने पर ही पानी या ओआरएस पिलाएं",
        instruction: "यदि मरीज पूरी तरह होश में है, तो चम्मच या घूंट-घूंट करके ओआरएस पिलाएं। बेहोश या सुस्त मरीज के मुंह में पानी न डालें।"
      },
      {
        step: 4,
        title: "108 एम्बुलेंस बुलाकर अस्पताल भेजें",
        instruction: "तुरंत 108 पर कॉल करें और अस्पताल पहुंचाएं ताकि डॉक्टर ड्रिप (IV सलाइन) चढ़ा सकें।"
      }
    ],
    dosageChart: [
      { condition: "Conscious Heat Exhaustion", protocol: "ORS 500-1000 mL over 1-2 hours in small frequent sips." },
      { condition: "Severe Heat Stroke (Unconscious)", protocol: "Immediate IV Normal Saline / Ringer's Lactate (1-2 Litres rapid) at PHC/Hospital." }
    ],
    hindiDosageChart: [
      { condition: "होश में रहने पर (हल्की लू)", protocol: "ओआरएस 500-1000 मिली धीरे-धीरे घूंट-घूंट करके 1-2 घंटे में पिलाएं।" },
      { condition: "गंभीर हीट स्ट्रोक (बेहोशी)", protocol: "अस्पताल में डॉक्टर द्वारा तुरंत ड्रिप (IV सलाइन) से नस में पानी चढ़ाना।" }
    ],
    contraindications: [
      "DO NOT give Paracetamol or Aspirin (they are ineffective in heat stroke and aggravate hepatic and renal injury).",
      "DO NOT pour water into the mouth of a semiconscious or convulsing patient (causes fatal drowning / aspiration).",
      "DO NOT wrap patient in heavy blankets."
    ],
    hindiContraindications: [
      "लू लगने पर पेरासिटामोल या एस्पिरिन न दें (यह दवाएं लू में काम नहीं करतीं और लीवर पर बुरा असर डालती हैं)।",
      "अर्ध-बेहोश या दौरे वाले मरीज के मुंह में पानी डालने की गलती न करें (पानी फेफड़ों में जाने से मौत हो सकती है)।",
      "मरीज को चादर या कंबल में लपेटकर न रखें।"
    ],
    keywords: [
      "heat stroke", "heatstroke", "loo", "loo lagna", "heat wave", 
      "tapghat", "sunstroke", "high fever sun", "dhoop me behosh", "dry skin heat"
    ],
    escalationContact: "108 Ambulance / Rampur CHC Heat Emergency Ward"
  },
  {
    id: "prot-resp-asthma-attack",
    code: "MOHFW-NCD-AST-19",
    title: "Acute Severe Asthma & Wheezing Attack in Adults",
    hindiTitle: "दमा (अस्थमा) का गंभीर दौरा व सांस फूलने का आपातकालीन प्रबंधन",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "National Programme for Prevention & Control of NCDs (NP-NCD), MoHFW",
    hindiIssuingAuthority: "राष्ट्रीय गैर-संचारी रोग कार्यक्रम, स्वास्थ्य मंत्रालय",
    guidelineDocument: "Standard Treatment Guidelines for Bronchial Asthma & COPD at Primary Care",
    hindiGuidelineDocument: "प्राथमिक स्तर पर दमा (अस्थमा) व सांस रोग मानक उपचार दिशानिर्देश",
    pageNumber: "Page 12-16",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Immediate Bronchodilator Inhalation & Urgent Facility Transfer",
    hindiTriageDescription: "तुरंत इनहेलर/नेबुलाइजर से सांस खोलें व ऑक्सीजन युक्त अस्पताल रेफर करें",
    dangerSigns: [
      "Unable to complete a full sentence in one breath; speaks in short words only",
      "Respiratory rate > 30 breaths/min with visible neck muscle straining and sweating",
      "Silent chest: Wheezing disappears because airflow is too restricted (High mortality danger)",
      "Cyanosis: Bluish tinge on lips, tongue, or fingertips; exhaustion and drowsiness"
    ],
    hindiDangerSigns: [
      "एक सांस में पूरा वाक्य न बोल पाना, केवल एक-एक शब्द में बोलना",
      "सांस की गति 30/मिनट से अधिक और गर्दन की नसें खिंचना व पसीना छूटना",
      "सीटी की आवाज अचानक बंद होना क्योंकि फेफड़ों में हवा जाना ही बंद हो गया (अति-गंभीर स्थिति)",
      "होंठ, जीभ या नाखूनों का नीला पड़ना (ऑक्सीजन की भारी कमी) व सुस्ती"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Sit Upright Leaning Slightly Forward (High Fowler's Position)",
        instruction: "Do NOT allow the patient to lie flat. Help them sit upright on a chair, leaning slightly forward with arms resting on knees or a table to assist accessory respiratory muscles."
      },
      {
        step: 2,
        title: "Immediate Salbutamol Inhaler with Spacer (4 to 10 Puffs)",
        instruction: "Administer Salbutamol (100 mcg) Metered Dose Inhaler (MDI): Give 4 to 10 puffs via a spacer, giving 1 puff at a time with 4-5 normal breaths between puffs. Can repeat every 15-20 minutes."
      },
      {
        step: 3,
        title: "Sub-Center Nebulization if Available",
        instruction: "If at Sub-Center / PHC: Nebulize with Salbutamol respules (2.5 mg) dissolved in normal saline driven by Oxygen or electrical compressor."
      },
      {
        step: 4,
        title: "Call 108 Ambulance with Oxygen",
        instruction: "If severe distress persists after 10 puffs, dial 108 immediately. Maintain high-flow oxygen during transit."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "सीधा आगे झुककर बिठाएं (लेटना सख्त मना)",
        instruction: "मरीज को बिस्तर पर सीधा न लिटाएं। कुर्सी पर सीधा आगे की तरफ हल्का झुककर बिठाएं और हाथ घुटनों पर टिकवाएं ताकि सांस लेने में मदद मिले।"
      },
      {
        step: 2,
        title: "सालबुटामोल इनहेलर (पफ) स्पेसिया से तुरंत दिलवाएं",
        instruction: "सालबुटामोल इनहेलर के 4 से 10 पफ स्पेसर के जरिए दें। एक-एक पफ देकर 4-5 बार गहरी सांस लेने को कहें।"
      },
      {
        step: 3,
        title: "उप-केंद्र पर नेबुलाइजर से भाप दिलवाना",
        instruction: "यदि उप-केंद्र पर नेबुलाइजर उपलब्ध हो, तो सालबुटामोल की दवा डालकर तुरंत नेबुलाइज करें।"
      },
      {
        step: 4,
        title: "108 एम्बुलेंस से ऑक्सीजन सहित अस्पताल भेजें",
        instruction: "यदि इनहेलर से 10-15 मिनट में राहत न मिले, तो 108 बुलाकर ऑक्सीजन लगवाते हुए अस्पताल ले जाएं।"
      }
    ],
    dosageChart: [
      { drug: "Salbutamol MDI (Inhaler)", dose: "4-10 puffs via spacer every 20 minutes for up to 1 hour." },
      { drug: "Salbutamol Nebulization", dose: "2.5 - 5 mg respule diluted in 3 mL saline by compressor/oxygen." }
    ],
    hindiDosageChart: [
      { drug: "सालबुटामोल इनहेलर (पफ)", dose: "स्पेसर के जरिए 4 से 10 पफ (हर 20 मिनट पर दोहराएं)।" },
      { drug: "नेबुलाइजर द्वारा भाप", dose: "2.5 मिग्रा सालबुटामोल रेस्प्यूल से अस्पताल/उप-केंद्र पर।" }
    ],
    contraindications: [
      "DO NOT make the breathless patient lie flat on their back (causes sudden respiratory arrest).",
      "DO NOT give sedatives, sleeping pills, or codeine cough syrups (depresses breathing drive).",
      "DO NOT expose patient to incense smoke, dhoop, mosquito coils, or cold air."
    ],
    hindiContraindications: [
      "सांस फूल रहे मरीज को पीठ के बल सीधा लेटने को कभी न कहें (दम घुटने का खतरा)।",
      "दमा के मरीज को नींद की गोली या कोडीन वाली कफ सिरप न दें (इससे सांस की गति रुक जाती है)।",
      "मरीज के पास अगरबत्ती, धूपबत्ती, बीड़ी या मच्छर भगाने वाली कॉइल का धुआं बिल्कुल न होने दें।"
    ],
    keywords: [
      "asthma", "dama", "wheezing", "saans phoolna", "breathlessness", 
      "salbutamol", "inhaler", "nebulizer", "bronchospasm", "silent chest"
    ],
    escalationContact: "108 Ambulance / Kalyanpur PHC Nebulization Unit"
  },
  {
    id: "prot-adult-diarrhea-cholera",
    code: "MOHFW-IDSP-CHL-20",
    title: "Severe Acute Watery Diarrhea & Cholera in Adults",
    hindiTitle: "वयस्कों में गंभीर हैजा व अत्यधिक पानी जैसे दस्त-उल्टी का प्रबंधन",
    category: "Adult & General Emergencies",
    hindiCategory: "वयस्क व सामान्य आपातकाल",
    issuingAuthority: "Integrated Disease Surveillance Programme (IDSP) & MoHFW",
    hindiIssuingAuthority: "एकीकृत रोग निगरानी कार्यक्रम एवं स्वास्थ्य मंत्रालय",
    guidelineDocument: "Standard Operating Procedures for Investigation and Containment of Cholera Outbreaks",
    hindiGuidelineDocument: "हैजा व तीव्र संक्रामक दस्त प्रकोप रोकथाम राष्ट्रीय मानक संचालन प्रक्रिया",
    pageNumber: "Page 15-20",
    publicationYear: "2023 Edition",
    verificationBadge: "VERIFIED_MOHFW_PROTOCOL",
    triageLevel: "RED",
    triageDescription: "Severe Hypovolemic Shock Risk - Immediate IV Resuscitation at PHC",
    hindiTriageDescription: "अति-गंभीर निर्जलीकरण - प्राथमिक केंद्र पर तुरंत ड्रिप (IV रिंगर्स लैक्टेट) लगाना जरूरी",
    dangerSigns: [
      "Profuse, painless rice-water stools pouring out continuously (> 10-20 times/day)",
      "Hypovolemic Shock: Absent radial pulse, unrecordable blood pressure, and cold clammy skin",
      "Severe painful muscle cramps in legs and abdomen due to rapid electrolyte depletion",
      "Washerwoman's hands: Wrinkled fingertips, deeply sunken hollow eyes, and anuria (no urine for > 6 hours)"
    ],
    hindiDangerSigns: [
      "चावल के मांड जैसा सफेद, अत्यधिक पतला दस्त बिना रुके बार-बार होना",
      "हाथ की नब्ज (नाड़ी) न मिलना, बीपी बहुत कम होना और हाथ-पैर ठंडे व चिपचिपे पड़ना (शॉक)",
      "पैरों और पेट की मांसपेशियों में असहनीय ऐंठन (इलेक्ट्रोलाइट्स खत्म होने के कारण)",
      "धोबिन के हाथों जैसी उंगलियों पर सिलवटें पड़ना, आंखें अंदर धंसना व पेशाब पूरी तरह बंद होना"
    ],
    actionSteps: [
      {
        step: 1,
        title: "Immediate Oral Rehydration While Arranging IV Access",
        instruction: "Give ORS continuously in large cups (as much as patient can drink). If patient is in shock or vomiting constantly, they need immediate IV Ringer's Lactate."
      },
      {
        step: 2,
        title: "Rapid IV Fluid Replacement at PHC / CHC",
        instruction: "Adults in severe dehydration need 100 mL/kg of IV Ringer's Lactate (approx. 3 Litres for a 60 kg adult): Give first 30 mL/kg rapidly in 30 minutes, then remaining 70 mL/kg over 2.5 hours."
      },
      {
        step: 3,
        title: "Single-Dose Antibiotic for Cholera (Under Medical Officer)",
        instruction: "Once vomiting stops after rehydration: Give single dose oral Doxycycline 300 mg (or Azithromycin 1 g) to shorten diarrhea duration."
      },
      {
        step: 4,
        title: "Notify IDSP & Chlorine Disinfection of Water Sources",
        instruction: "Alert Medical Officer to test stool hanging drop for Vibrio cholerae. Add chlorine tablets to contaminated village wells."
      }
    ],
    hindiActionSteps: [
      {
        step: 1,
        title: "तुरंत बड़े गिलास में ओआरएस (ORS) पिलाना शुरू करें",
        instruction: "मरीज को लगातार ओआरएस पिलाते रहें। यदि मरीज बेहोश हो या लगातार उल्टी कर रहा हो, तो तुरंत ड्रिप (IV) की जरूरत है।"
      },
      {
        step: 2,
        title: "प्राथमिक स्वास्थ्य केंद्र पर तुरंत रिंगर्स लैक्टेट (RL) ड्रिप",
        instruction: "वयस्क मरीज को तुरंत 3 लीटर तक रिंगर्स लैक्टेट ड्रिप लगाई जाती है। पहला 1 लीटर तेजी से 30 मिनट में चढ़ाया जाता है।"
      },
      {
        step: 3,
        title: "हैजा के लिए डॉक्टर के निर्देशानुसार एंटीबायोटिक",
        instruction: "उल्टी रुकने के बाद डॉक्टर के निर्देशानुसार डॉक्सीसाइक्लिन (300 mg) या एजिथ्रोमाइसिन की एकमात्र खुराक दी जाती है।"
      },
      {
        step: 4,
        title: "आईडीएसपी को सूचित करें व कुओं में क्लोरीन डालें",
        instruction: "गांव में बीमारी फैलने से रोकने के लिए स्वास्थ्य केंद्र को सूचित करें और पीने के पानी में क्लोरीन की गोली डालें।"
      }
    ],
    dosageChart: [
      { fluid: "IV Ringer's Lactate (Adults)", protocol: "100 mL/kg total: 30 mL/kg in first 30 min, then 70 mL/kg in 2.5 hours." },
      { antibiotic: "Doxycycline (Adult Cholera)", protocol: "300 mg stat single oral dose after rehydration." }
    ],
    hindiDosageChart: [
      { fluid: "IV रिंगर्स लैक्टेट ड्रिप (वयस्क)", protocol: "कुल 100 mL/kg: पहले 30 मिनट में तेजी से 1 लीटर, फिर 2.5 घंटे में बाकी।" },
      { antibiotic: "डॉक्सीसाइक्लिन 300 mg", protocol: "उल्टी रुकने के बाद केवल 1 बार मुंह से।" }
    ],
    contraindications: [
      "DO NOT give anti-diarrheal motility blockers (e.g. Loperamide) in acute watery diarrhea (causes toxic megacolon).",
      "DO NOT stop oral fluids while waiting for ambulance.",
      "DO NOT drink untreated well water during an outbreak."
    ],
    hindiContraindications: [
      "हैजा में लोपेरामाइड जैसी दस्त रोकने वाली गोलियां न दें (जहर आंतों के अंदर ही सड़ने लगता है)।",
      "एम्बुलेंस आने के इंतजार में मरीज को ओआरएस पिलाना बंद न करें।",
      "बिना उबला या बिना क्लोरीन मिला पानी न पिएं।"
    ],
    keywords: [
      "cholera", "haija", "watery diarrhea", "rice water stool", "adult loose motion", 
      "dehydration adult", "muscle cramps", "ringers lactate", "anuria", "idsp"
    ],
    escalationContact: "108 Ambulance / Kalyanpur PHC Emergency IV Ward"
  }
];
