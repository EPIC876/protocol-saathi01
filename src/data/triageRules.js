// Triage Rules and Red Flag Danger Signs Matrix
// Implements MoHFW / IMNCI / Ayushman Bharat rapid triage algorithm.

export const DANGER_SIGN_CATEGORIES = [
  {
    id: "cat-newborn",
    title: "Newborn (0 - 2 Months)",
    hindiTitle: "नवजात शिशु (0 से 2 माह)",
    subtitle: "HBNC High-Risk Sepsis & Hypothermia Check",
    signs: [
      { id: "nb-1", text: "Baby unable to feed or stopped suckling", hindiText: "दूध पीना बिल्कुल बंद या असमर्थ", severity: "RED" },
      { id: "nb-2", text: "Convulsions, fits, or abnormal twitching", hindiText: "दौरे पड़ना या झटके आना", severity: "RED" },
      { id: "nb-3", text: "Fast breathing (>= 60 breaths/min counted twice)", hindiText: "तेज़ सांस चलना (60 या अधिक/मिनट)", severity: "RED" },
      { id: "nb-4", text: "Severe chest indrawing", hindiText: "छाती का अत्यधिक धँसना", severity: "RED" },
      { id: "nb-5", text: "Baby cold to touch (< 35.4°C) or burning hot", hindiText: "शरीर ठंडा पड़ना या अत्यधिक बुखार", severity: "RED" },
      { id: "nb-6", text: "Umbilical stump red, swollen, or foul pus", hindiText: "नाल में लालिमा या दुर्गंधयुक्त मवाद", severity: "AMBER" },
      { id: "nb-7", text: "Yellow palms and soles within 24h of birth", hindiText: "हथेलियों और तलवों में पीलापन (पीलिया)", severity: "RED" }
    ],
    recommendedAction: "Wrap in warm clothes (KMC), dial 108 ambulance, and escort immediately to SNCU with ANM."
  },
  {
    id: "cat-child",
    title: "Child Illness (2 Months - 5 Years)",
    hindiTitle: "बाल रोग (2 माह से 5 वर्ष)",
    subtitle: "IMNCI Respiratory, Dehydration & Malnutrition Check",
    signs: [
      { id: "ch-1", text: "Unable to drink or breastfeed at all", hindiText: "कुछ भी पीने या खाने में असमर्थ", severity: "RED" },
      { id: "ch-2", text: "Vomits everything swallowed", hindiText: "हर घूंट के बाद उल्टी हो जाना", severity: "RED" },
      { id: "ch-3", text: "Convulsions during current illness", hindiText: "वर्तमान बीमारी के दौरान दौरे पड़ना", severity: "RED" },
      { id: "ch-4", text: "Lethargic or unconscious (does not respond to call)", hindiText: "बेहोश या अत्यधिक सुस्त (जगाने पर न जागना)", severity: "RED" },
      { id: "ch-5", text: "Stridor (harsh sound) when child is calm", hindiText: "शांत रहने पर भी सांस में सीटी/खड़खड़ाहट", severity: "RED" },
      { id: "ch-6", text: "Skin pinch on abdomen retracts > 2 seconds", hindiText: "पेट की त्वचा चुटकी छोड़ने पर >2 सेकंड ले", severity: "RED" },
      { id: "ch-7", text: "Visible severe wasting or bilateral foot edema", hindiText: "दोनों पैरों में सूजन या अत्यधिक दुर्बलता", severity: "AMBER" }
    ],
    recommendedAction: "Administer pre-referral ORS or 1st dose oral antibiotic if indicated. Alert Supervising ANM and transfer to PHC."
  },
  {
    id: "cat-maternal",
    title: "Maternal Health (Pregnancy & Postpartum)",
    hindiTitle: "मातृ स्वास्थ्य (गर्भावस्था व प्रसव पश्चात)",
    subtitle: "Dakshata & ANC Emergency Protocol Check",
    signs: [
      { id: "mat-1", text: "Heavy vaginal bleeding (soaking 2+ pads in 30 min)", hindiText: "अत्यधिक रक्तस्राव (30 मिनट में 2 से अधिक पैड)", severity: "RED" },
      { id: "mat-2", text: "Severe headache with blurred vision / spots", hindiText: "तेज़ सिरदर्द के साथ आँखों के आगे धुंधलापन", severity: "RED" },
      { id: "mat-3", text: "Convulsions or loss of consciousness", hindiText: "दौरे पड़ना या बेहोशी", severity: "RED" },
      { id: "mat-4", text: "High fever (> 38°C) with foul-smelling vaginal discharge", hindiText: "तेज़ बुखार और बदबूदार स्त्राव", severity: "RED" },
      { id: "mat-5", text: "Severe abdominal pain not like labor pains", hindiText: "असहनीय पेट दर्द जो प्रसव पीड़ा से अलग हो", severity: "RED" },
      { id: "mat-6", text: "Water breaking (leaking) without labor for > 12 hours", hindiText: "प्रसव पीड़ा के बिना पानी की थैली फटना", severity: "AMBER" },
      { id: "mat-7", text: "Marked pallor, breathless while resting", hindiText: "अत्यधिक सफेदी व बैठे रहने पर भी सांस फूलना", severity: "AMBER" }
    ],
    recommendedAction: "Turn to left side, perform uterine massage if PPH, dial 108 immediately, and contact Supervising ANM for emergency referral."
  },
  {
    id: "cat-adult-emergency",
    title: "Adult Emergencies & Trauma",
    hindiTitle: "वयस्क आपातकाल व आघात",
    subtitle: "Snakebite, Heart Attack, Stroke & Poisoning",
    signs: [
      { id: "em-1", text: "Snakebite with drooping eyelids, bleeding, or rapid swelling", hindiText: "सांप काटना, पलकें गिरना, खून बहना या तेजी से सूजन", severity: "RED" },
      { id: "em-2", text: "Severe crushing chest pain radiating to left arm with cold sweat", hindiText: "सीने में असहनीय भारी दर्द, बाएं हाथ में फैलना व पसीना", severity: "RED" },
      { id: "em-3", text: "Sudden facial drooping, arm weakness, or slurred speech (Stroke)", hindiText: "अचानक मुंह टेढ़ा होना, हाथ में कमजोरी या आवाज लड़खड़ाना (स्ट्रोक)", severity: "RED" },
      { id: "em-4", text: "Pesticide ingestion with pinpoint pupils and frothing at mouth", hindiText: "कीटनाशक जहर निगलना, पुतलियां सिकुड़ना व मुंह से झाग", severity: "RED" },
      { id: "em-5", text: "Stray dog bite with skin laceration and bleeding (Category III)", hindiText: "पागल कुत्ते द्वारा काटना व खून निकलना (श्रेणी III घाव)", severity: "AMBER" },
      { id: "em-6", text: "Severe Asthma attack: Silent chest, unable to speak, cyanosis", hindiText: "दमे का गंभीर दौरा: बोलने में असमर्थ, होंठ नीले पड़ना, सीटी बंद होना", severity: "RED" },
      { id: "em-7", text: "Heat Stroke: Temperature > 104°F, hot dry skin, delirium/confusion", hindiText: "गंभीर लू (हीट स्ट्रोक): 104°F बुखार, पसीना बंद, बेहोशी व भ्रम", severity: "RED" },
      { id: "em-8", text: "Cholera / Rice-water stools: Severe dehydration, cramps, absent pulse", hindiText: "हैजा: सफेद मांड जैसा दस्त, नब्ज न मिलना व पैरों में तेज ऐंठन", severity: "RED" }
    ],
    recommendedAction: "Immobilize limb, do NOT give oral fluids if unconscious, dial 108 ambulance immediately, and transfer to CHC/District Hospital."
  },
  {
    id: "cat-daily-problems",
    title: "Daily Common Problems",
    hindiTitle: "दैनिक सामान्य रोग व प्राथमिक उपचार",
    subtitle: "Cuts, Burns, Scabies & Eye Infections",
    signs: [
      { id: "dp-1", text: "Superficial burn or scald with redness, pain, and blisters", hindiText: "गर्म पानी या आग से जलना, लालिमा, दर्द व फफोले", severity: "GREEN" },
      { id: "dp-2", text: "Minor cuts, scrapes, or lacerations requiring cleaning and dressing", hindiText: "सामान्य खरोंच, चोट या कटने का घाव (ड्रेसिंग जरूरी)", severity: "GREEN" },
      { id: "dp-3", text: "Severe contagious itching at night between fingers and family (Scabies)", hindiText: "रात में तेज खुजली, उंगलियों के बीच दाने व परिवार में संक्रमण (खाज)", severity: "GREEN" },
      { id: "dp-4", text: "Red, swollen eyes with sticky morning discharge (Conjunctivitis)", hindiText: "आंख लाल होना, सूजन व चिपचिपा कीचड़ आना (कंजंक्टिवाइटिस)", severity: "GREEN" }
    ],
    recommendedAction: "Clean with clean running water, apply appropriate topical antiseptic or Permethrin, and verify Tetanus Toxoid vaccination status."
  }
];
