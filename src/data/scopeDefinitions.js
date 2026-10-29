// Clinical Scope Definitions & Guardrail Triggers
// Protocol Saathi strictly adheres to community-level ASHA/CHW/ANM guidelines.
// Any queries outside community triage are explicitly refused to prevent hallucinated medical advice.

export const IN_SCOPE_DOMAINS = [
  "Home-Based Newborn Care (HBNC) - 0 to 2 months",
  "Integrated Management of Neonatal & Childhood Illnesses (IMNCI) - 2 months to 5 years",
  "Antenatal Care (ANC) & Maternal Danger Signs Identification",
  "Postpartum Care (PNC) & Hemorrhage Triage",
  "Diarrhea, ORS & Zinc Administration Protocols",
  "Acute Respiratory Infections & Fast Breathing Assessment",
  "Severe Acute Malnutrition (SAM) & MUAC Screening",
  "Bivalent Malaria Rapid Diagnostic Testing (RDT) & Fever Care"
];

export const IN_SCOPE_DOMAINS_HI = [
  "गृह आधारित नवजात शिशु देखभाल (HBNC) - 0 से 2 माह",
  "बाल रोगों का एकीकृत प्रबंधन (IMNCI) - 2 माह से 5 वर्ष",
  "प्रसव पूर्व देखभाल (ANC) व खतरे के लक्षणों की पहचान",
  "प्रसवोत्तर देखभाल (PNC) व अत्यधिक रक्तस्राव प्रबंधन",
  "दस्त, जीवनरक्षक घोल (ORS) एवं जिंक खुराक प्रोटोकॉल",
  "तीव्र श्वसन संक्रमण व तेज सांस की जांच",
  "गंभीर तीव्र कुपोषण (सैम) व बांह की नाप (MUAC) जांच",
  "मलेरिया आरडीटी त्वरित जांच व बुखार प्रबंधन"
];

export const OUT_OF_SCOPE_TRIGGERS = [
  {
    category: "UNAPPROVED_OR_DANGEROUS_PEDIATRIC_MEDICATION",
    keywords: ["aspirin for baby", "aspirin child", "disprin for fever", "adult antibiotic for baby", "sleeping pill", "cough syrup for infant", "sedative"],
    reason: "Aspirin is strictly contraindicated in children due to life-threatening Reye's Syndrome risk. Sedatives and adult antibiotics are hazardous for pediatric use.",
    reasonHi: "बच्चों में एस्पिरिन (डिस्प्रिन) देना पूर्णतः वर्जित है क्योंकि इससे जानलेवा रेये सिंड्रोम (मस्तिष्क व यकृत क्षति) हो सकता है। नींद की दवाएं या वयस्कों की एंटीबायोटिक बच्चों के लिए अत्यंत खतरनाक हैं।",
    refusalInstruction: "Protocol Saathi refuses unapproved medication queries. MoHFW only authorizes weight-graded Paracetamol and approved IMNCI pre-referral medicines under supervision.",
    refusalInstructionHi: "प्रोटोकॉल साथी अप्रमाणित दवा के सवालों का जवाब देने से सख्ती से मना करता है। स्वास्थ्य मंत्रालय केवल वजन के अनुसार पेरासिटामोल व अधिकृत दवाएं ही स्वीकार करता है।",
    requiredAction: "ESCALATE_TO_ANM"
  },
  {
    category: "SURGICAL_OR_INVASIVE_PROCEDURES",
    keywords: ["perform abortion", "induce labor", "deliver baby at home breech", "cut cord with blade unsterilized", "snake bite cut", "snake bite suck", "tourniquet"],
    reason: "Invasive procedures, unassisted non-institutional deliveries, and traditional snakebite incision/tourniquets cause fatal complications and tissue necrosis.",
    reasonHi: "असुरक्षित गर्भपात, घर पर जटिल प्रसव या सांप काटने पर चीरा लगाना व कसकर पट्टी बांधना जानलेवा हो सकता है और अंग सड़ने का कारण बनता है।",
    refusalInstruction: "Protocol Saathi strictly refuses invasive procedural guidance. All obstetric and surgical emergencies mandate institutional care at a 24x7 PHC or FRU.",
    refusalInstructionHi: "प्रोटोकॉल साथी चीर-फाड़ या अवैध प्रसूति प्रक्रियाओं का मार्गदर्शन नहीं देता। सभी सर्जिकल आपात स्थितियों में तत्काल अस्पताल ले जाना अनिवार्य है।",
    requiredAction: "IMMEDIATE_108_AMBULANCE"
  },
  {
    category: "TERTIARY_ADULT_CHRONIC_OR_CRITICAL_CARE",
    keywords: ["chemotherapy", "cancer dosage", "insulin adjustment", "cardiac arrest medication", "heart attack home cure", "stroke injection", "dialysis"],
    reason: "Tertiary oncological, cardiac, or complex metabolic conditions require specialized hospital teams and laboratory monitoring.",
    reasonHi: "कैंसर कीमोथेरेपी, इंसुलिन खुराक या दिल के दौरे जैसी जटिल बीमारियों का इलाज केवल बड़े अस्पतालों में विशेषज्ञ डॉक्टरों की निगरानी में ही संभव है।",
    refusalInstruction: "This inquiry is outside the purview of ASHA community clinical protocols. Do not attempt unguided management.",
    refusalInstructionHi: "यह सवाल आशा कार्यकर्ता के प्राथमिक प्रोटोकॉल के दायरे से बाहर है। स्वयं इलाज का प्रयास कभी न करें।",
    requiredAction: "REFER_TO_MEDICAL_OFFICER"
  },
  {
    category: "UNVERIFIED_FOLK_OR_ILLEGAL_REMEDIES",
    keywords: ["give honey to newborn", "ghutti to baby", "cow dung on umbilical cord", "kajal in infant eyes", "starve fever", "stop water in diarrhea"],
    reason: "Traditional harmful practices like applying dung to the umbilical cord cause neonatal tetanus and sepsis; stopping water in diarrhea causes fatal hypovolemic shock.",
    reasonHi: "नाल पर गोबर या राख लगाने से नवजात को धनुस्तंभ (टिटनेस) हो जाता है, और दस्त में पानी रोकने से बच्चे की मृत्यु हो सकती है।",
    refusalInstruction: "MoHFW and WHO strictly prohibit prelacteal feeds, umbilical contaminants, and fluid restriction.",
    refusalInstructionHi: "स्वास्थ्य मंत्रालय व विश्व स्वास्थ्य संगठन हानिकारक अंधविश्वासों व घुट्टी देने पर पूर्ण प्रतिबंध लगाते हैं।",
    requiredAction: "COUNSEL_FAMILY_AND_ALERT_ANM"
  }
];

export const GENERAL_SAFETY_NOTICE = {
  title: "Strengthen the System; Protect the People in It",
  titleHi: "सिस्टम को मजबूत करें; इसमें काम करने वाले लोगों की रक्षा करें",
  tagline: "Official Protocol Verification Engine - Zero AI Medical Hallucinations",
  taglineHi: "आधिकारिक प्रोटोकॉल सत्यापन इंजन - जीरो एआई मनगढ़ंत सलाह",
  message: "Protocol Saathi surfaces verified MoHFW & NHM clinical standard operating procedures only. When clinical ambiguity or danger signs exist, the primary duty is immediate referral to the Supervising ANM and Medical Officer.",
  messageHi: "प्रोटोकॉल साथी केवल स्वास्थ्य मंत्रालय के सत्यापित दिशा-निर्देश ही दिखाता है। किसी भी संदेह या खतरे के लक्षण की स्थिति में प्राथमिक कर्तव्य पर्यवेक्षक एएनएम को रेफर करना है।"
};
