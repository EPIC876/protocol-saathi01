// Directory of Nearby Government Healthcare Facilities, Emergency Numbers & Addresses
// Designed for frontline health workers (ASHAs/ANMs) during emergencies.

export const FACILITY_CATEGORIES = [
  { id: "ALL", nameEn: "All Facilities", nameHi: "सभी केंद्र" },
  { id: "EMERGENCY", nameEn: "Emergency & Ambulance", nameHi: "एम्बुलेंस व आपातकालीन" },
  { id: "PHC_CHC", nameEn: "PHC & CHC (Sub-District)", nameHi: "प्राथमिक व सामुदायिक केंद्र" },
  { id: "HOSPITAL_SNCU", nameEn: "District Hospital & SNCU", nameHi: "जिला अस्पताल व एसएनसीयू" },
  { id: "HELPLINES", nameEn: "National Helplines", nameHi: "राष्ट्रीय हेल्पलाइन" }
];

export const HEALTHCARE_FACILITIES = [
  // --- EMERGENCY AMBULANCE & DISPATCH ---
  {
    id: "fac-108",
    category: "EMERGENCY",
    nameEn: "108 National Emergency Medical Ambulance Service",
    nameHi: "108 राष्ट्रीय आपातकालीन एम्बुलेंस सेवा",
    facilityTypeEn: "24x7 GPS-Enabled Emergency Response",
    facilityTypeHi: "24x7 जीपीएस युक्त आपातकालीन सेवा",
    phone: "108",
    altPhone: "112",
    addressEn: "State Emergency Medical Response Control Room (Coverage: All Villages)",
    addressHi: "राज्य आपातकालीन चिकित्सा नियंत्रण कक्ष (सभी गांवों में उपलब्ध)",
    distanceKm: "On-Call Dispatch (Avg. arrival: 15-20 min)",
    distanceKmHi: "ऑन-कॉल सेवा (औसत आगमन: 15-20 मिनट)",
    is24x7: true,
    servicesEn: [
      "Critical patient transport with Oxygen",
      "Trained Emergency Medical Technician (EMT)",
      "First aid and neonatal stabilization kit",
      "Direct communication with receiving hospital"
    ],
    servicesHi: [
      "ऑक्सीजन सुविधा युक्त गंभीर मरीज़ परिवहन",
      "प्रशिक्षित आपातकालीन मेडिकल तकनीशियन (ईएमटी)",
      "प्राथमिक उपचार व नवजात स्थिरीकरण किट",
      "अस्पताल के साथ सीधा संपर्क"
    ]
  },
  {
    id: "fac-102",
    category: "EMERGENCY",
    nameEn: "102 Janani Shishu Suraksha Vahan (JSSK)",
    nameHi: "102 जननी शिशु सुरक्षा वाहन (निशुल्क सेवा)",
    facilityTypeEn: "Maternal & Sick Infant Free Transport",
    facilityTypeHi: "गर्भवती महिला व बीमार नवजात निशुल्क वाहन",
    phone: "102",
    altPhone: "18001805145",
    addressEn: "Block Health Transport Fleet, Rampur Block HQ",
    addressHi: "ब्लॉक स्वास्थ्य परिवहन बेड़ा, रामपुर ब्लॉक मुख्यालय",
    distanceKm: "On-Call Dispatch (Avg. arrival: 20-30 min)",
    distanceKmHi: "ऑन-कॉल सेवा (औसत आगमन: 20-30 मिनट)",
    is24x7: true,
    servicesEn: [
      "Free pickup for institutional delivery",
      "Free transport for sick newborn to SNCU",
      "Free drop back home after 48h institutional stay",
      "Zero out-of-pocket expenditure (NHM-JSSK)"
    ],
    servicesHi: [
      "संस्थागत प्रसव हेतु निशुल्क घर से अस्पताल लाना",
      "बीमार नवजात शिशु को एसएनसीयू तक पहुंचाना",
      "प्रसव के 48 घंटे बाद निशुल्क घर वापस छोड़ना",
      "राष्ट्रीय स्वास्थ्य मिशन के तहत पूर्णतः निशुल्क"
    ]
  },

  // --- PRIMARY & COMMUNITY HEALTH CENTERS (PHC / CHC) ---
  {
    id: "fac-phc-kalyanpur",
    category: "PHC_CHC",
    nameEn: "Kalyanpur 24x7 Primary Health Center (PHC)",
    nameHi: "कल्याणपुर 24x7 प्राथमिक स्वास्थ्य केंद्र (पीएचसी)",
    facilityTypeEn: "24x7 Delivery Point & Basic Emergency Obstetric Care",
    facilityTypeHi: "24x7 प्रसव केंद्र व प्राथमिक आपातकालीन देखभाल",
    phone: "+915222401122",
    altPhone: "+919876543210",
    addressEn: "Main Road, Near Kalyanpur Gram Panchayat Bhavan, Sector 4, Kalyanpur",
    addressHi: "मुख्य मार्ग, कल्याणपुर ग्राम पंचायत भवन के पास, सेक्टर 4, कल्याणपुर",
    distanceKm: "3.2 km from Village Center",
    distanceKmHi: "ग्राम केंद्र से 3.2 किमी",
    is24x7: true,
    servicesEn: [
      "24x7 Normal deliveries by skilled staff",
      "Newborn Care Corner (NBCC) with radiant warmer",
      "Essential medicines (ORS, Zinc, IFA, Oxytocin, MgSO4)",
      "Bivalent Malaria & Dengue Rapid Testing",
      "Cold Chain & Routine Immunization center"
    ],
    servicesHi: [
      "प्रशिक्षित स्टाफ द्वारा 24x7 सामान्य प्रसव",
      "रेडिएंट वार्मर युक्त नवजात शिशु देखभाल कॉर्नर (NBCC)",
      "आवश्यक जीवनरक्षक दवाएं (ओआरएस, जिंक, ऑक्सीटोसिन, मैग्नीशियम सल्फेट)",
      "मलेरिया व डेंगू त्वरित जांच (RDT)",
      "कोल्ड चेन व नियमित टीकाकरण केंद्र"
    ]
  },
  {
    id: "fac-chc-rampur",
    category: "PHC_CHC",
    nameEn: "Rampur Community Health Center & FRU",
    nameHi: "रामपुर सामुदायिक स्वास्थ्य केंद्र व प्रथम रेफरल यूनिट (CHC / FRU)",
    facilityTypeEn: "30-Bed First Referral Unit (FRU) with Operation Theater",
    facilityTypeHi: "30-बेड युक्त प्रथम रेफरल यूनिट व ऑपरेशन थियेटर",
    phone: "+915222409988",
    altPhone: "+919415012345",
    addressEn: "Civil Lines, Near Block Development Office, Rampur - 226010",
    addressHi: "सिविल लाइंस, ब्लॉक विकास कार्यालय के पास, रामपुर - 226010",
    distanceKm: "11.5 km from Village Center",
    distanceKmHi: "ग्राम केंद्र से 11.5 किमी",
    is24x7: true,
    servicesEn: [
      "Emergency C-Section and Gynecologist on duty",
      "Newborn Stabilization Unit (NBSU)",
      "Designated Blood Storage Center (BSU)",
      "Anti-Snake Venom (ASV) & Anti-Rabies Vaccine (ARV) available",
      "Pediatrician and General Surgeon available"
    ],
    servicesHi: [
      "आपातकालीन सिजेरियन ऑपरेशन (C-Section) व स्त्री रोग विशेषज्ञ",
      "नवजात स्थिरीकरण यूनिट (NBSU)",
      "मान्यता प्राप्त ब्लड स्टोरेज सेंटर",
      "एंटी-स्नेक वेनम (सांप काटने का विषहर टीका) व एंटी-रेबीज टीका",
      "शिशु रोग विशेषज्ञ एवं सर्जन की सुविधा"
    ]
  },

  // --- DISTRICT HOSPITAL, SNCU & SPECIALIZED CENTERS ---
  {
    id: "fac-sncu-district",
    category: "HOSPITAL_SNCU",
    nameEn: "Special Newborn Care Unit (SNCU) - District Hospital",
    nameHi: "एसएनसीयू (विशेष नवजात गहन चिकित्सा इकाई) - जिला चिकित्सालय",
    facilityTypeEn: "Specialized Level-II Neonatal Intensive Care",
    facilityTypeHi: "विशिष्ट लेवल-II नवजात गहन चिकित्सा वार्ड",
    phone: "+915222610500",
    altPhone: "+915222610505",
    addressEn: "2nd Floor, Maternal & Child Health (MCH) Wing, District Hospital Campus",
    addressHi: "द्वितीय तल, मातृ एवं शिशु स्वास्थ्य विंग, जिला अस्पताल परिसर",
    distanceKm: "24.0 km from Sub-Center",
    distanceKmHi: "उप-केंद्र से 24.0 किमी",
    is24x7: true,
    servicesEn: [
      "Care for low birth weight infants (< 1800g)",
      "Phototherapy for severe neonatal jaundice",
      "Oxygen therapy, CPAP, and neonatal sepsis treatment",
      "Kangaroo Mother Care (KMC) ward with dedicated mother beds",
      "Free medical care under Janani Shishu Suraksha Karyakram"
    ],
    servicesHi: [
      "कम वजन के नवजात शिशुओं (< 1800 ग्राम) की विशेष देखभाल",
      "गंभीर पीलिया (जॉन्डिस) के लिए फोटोथेरेपी यूनिट",
      "ऑक्सीजन थेरेपी, सी-पैप (CPAP) व नवजात सेप्सिस उपचार",
      "कंगारू मदर केयर (KMC) वार्ड माताओं के रहने की सुविधा सहित",
      "जननी शिशु सुरक्षा योजना के तहत संपूर्ण उपचार निशुल्क"
    ]
  },
  {
    id: "fac-dh-main",
    category: "HOSPITAL_SNCU",
    nameEn: "District Women & Child Hospital (Mahila Chikitsalaya)",
    nameHi: "जिला महिला एवं बाल चिकित्सालय",
    facilityTypeEn: "Tertiary Government Referral Hospital (200 Beds)",
    facilityTypeHi: "तृतीयक सरकारी रेफरल अस्पताल (200 बेड)",
    phone: "+915222610100",
    altPhone: "+915222610108",
    addressEn: "Hospital Road, Opposite Collectorate Office, District HQ",
    addressHi: "अस्पताल रोड, कलेक्ट्रेट कार्यालय के सामने, जिला मुख्यालय",
    distanceKm: "24.5 km from Village Center",
    distanceKmHi: "ग्राम केंद्र से 24.5 किमी",
    is24x7: true,
    servicesEn: [
      "24x7 High-risk pregnancy management & ICU",
      "Licensed 24x7 Blood Bank & Component Separation",
      "Comprehensive Abortion Care & Obstetric Complication Management",
      "Ultrasonography (USG) & Advanced Diagnostic Lab",
      "Pradhan Mantri Matru Vandana Yojana (PMMVY) Desk"
    ],
    servicesHi: [
      "24x7 उच्च जोखिम गर्भावस्था प्रबंधन एवं आईसीयू",
      "लाइसेंस प्राप्त 24x7 ब्लड बैंक व रक्त घटक सुविधा",
      "जटिल प्रसूति एवं आपातकालीन रक्तस्राव प्रबंधन",
      "अल्ट्रासाउंड (USG) एवं आधुनिक पैथोलॉजी लैब",
      "प्रधानमंत्री मातृ वंदना योजना सहायता केंद्र"
    ]
  },
  {
    id: "fac-nrc-center",
    category: "HOSPITAL_SNCU",
    nameEn: "Nutrition Rehabilitation Center (NRC)",
    nameHi: "पोषण पुनर्वास केंद्र (एनआरसी - NRC)",
    facilityTypeEn: "14-Day Inpatient Malnutrition Stabilization Center",
    facilityTypeHi: "14-दिवसीय गंभीर कुपोषण उपचार केंद्र",
    phone: "+915222610515",
    altPhone: "+919871123456",
    addressEn: "Ground Floor, Pediatric Block, District Hospital",
    addressHi: "भूतल, बाल रोग विभाग, जिला अस्पताल परिसर",
    distanceKm: "24.2 km from Sub-Center",
    distanceKmHi: "उप-केंद्र से 24.2 किमी",
    is24x7: false,
    servicesEn: [
      "Admission for Severe Acute Malnutrition (SAM) with complications",
      "Therapeutic F-75 & F-100 therapeutic diet formulation",
      "Daily weight & MUAC tracking by clinical nutritionists",
      "Wage compensation for mother during the 14-day stay (₹100-150/day)",
      "Cooking demonstrations & child development counseling"
    ],
    servicesHi: [
      "जटिलताओं से ग्रस्त गंभीर कुपोषित बच्चों (सैम) का दाखिला",
      "विशेष उपचारात्मक आहार (F-75 एवं F-100 फार्मूला)",
      "पोषण विशेषज्ञों द्वारा दैनिक वजन एवं बांह की नाप (MUAC) जांच",
      "भर्ती अवधि के दौरान माता को दैनिक मजदूरी क्षतिपूर्ति भत्ता",
      "स्वास्थ्यवर्धक भोजन पकाने का लाइव प्रशिक्षण व परामर्श"
    ]
  },

  // --- NATIONAL & STATE HELPLINES ---
  {
    id: "fac-hl-1075",
    category: "HELPLINES",
    nameEn: "1075 National Health Helpline (MoHFW)",
    nameHi: "1075 राष्ट्रीय स्वास्थ्य हेल्पलाइन (भारत सरकार)",
    facilityTypeEn: "Toll-Free Government Health Info & Guidance",
    facilityTypeHi: "टोल-फ्री सरकारी स्वास्थ्य मार्गदर्शन एवं सूचना",
    phone: "1075",
    altPhone: "+911123978046",
    addressEn: "Ministry of Health and Family Welfare, Nirman Bhawan, New Delhi",
    addressHi: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय, निर्माण भवन, नई दिल्ली",
    distanceKm: "Nationwide Toll-Free Access",
    distanceKmHi: "अखिल भारतीय निशुल्क टोल-फ्री सेवा",
    is24x7: true,
    servicesEn: [
      "Official clinical advice on infectious outbreaks",
      "Immunization schedule queries and verification",
      "Ayushman Bharat PM-JAY hospital empanelment queries"
    ],
    servicesHi: [
      "संक्रामक बीमारियों एवं महामारी से संबंधित आधिकारिक सलाह",
      "टीकाकरण सारणी एवं वैक्सीन उपलब्धता की जानकारी",
      "आयुष्मान भारत (PM-JAY) संबद्ध अस्पतालों की सूची"
    ]
  },
  {
    id: "fac-hl-181",
    category: "HELPLINES",
    nameEn: "181 Women in Distress Emergency Helpline",
    nameHi: "181 महिला सुरक्षा एवं आपातकालीन सहायता हेल्पलाइन",
    facilityTypeEn: "24x7 Safety, Medical Rescue & Legal Support",
    facilityTypeHi: "24x7 महिला सुरक्षा, त्वरित चिकित्सा व बचाव सहायता",
    phone: "181",
    altPhone: "1090",
    addressEn: "State Women & Child Development Department",
    addressHi: "राज्य महिला एवं बाल विकास विभाग",
    distanceKm: "Statewide Toll-Free Access",
    distanceKmHi: "राज्यव्यापी निशुल्क सेवा",
    is24x7: true,
    servicesEn: [
      "Immediate emergency rescue from domestic danger",
      "Medical care coordination in trauma or violence",
      "One-Stop Crisis Center (Sakhi Kendra) referral"
    ],
    servicesHi: [
      "घरेलू हिंसा व खतरे की स्थिति में त्वरित बचाव",
      "चोट या आघात के मामलों में तत्काल मेडिकल सहायता",
      "सखी वन-स्टॉप सेंटर से सीधा समन्वय"
    ]
  },
  {
    id: "fac-hl-telemanas",
    category: "HELPLINES",
    nameEn: "14416 Tele-MANAS Mental Health Helpline",
    nameHi: "14416 टेली-मानस मानसिक स्वास्थ्य एवं तनाव परामर्श",
    facilityTypeEn: "24x7 Multilingual Psychological & Postpartum Support",
    facilityTypeHi: "24x7 बहुभाषी मानसिक तनाव व प्रसवोत्तर डिप्रेशन परामर्श",
    phone: "14416",
    altPhone: "18008914416",
    addressEn: "National Tele-Mental Health Programme (NIMHANS & MoHFW)",
    addressHi: "राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम (स्वास्थ्य मंत्रालय)",
    distanceKm: "Nationwide Toll-Free Access",
    distanceKmHi: "अखिल भारतीय निशुल्क सेवा",
    is24x7: true,
    servicesEn: [
      "Postpartum depression and severe maternal anxiety counseling",
      "Frontline health worker stress debriefing",
      "Confidential psychological first-aid in regional languages"
    ],
    servicesHi: [
      "प्रसव पश्चात डिप्रेशन (अवसाद) एवं गंभीर चिंता का उपचार",
      "फील्ड स्वास्थ्य कार्यकर्ताओं के लिए तनाव-मुक्ति परामर्श",
      "अपनी मातृभाषा में पूर्णतः गोपनीय व निशुल्क परामर्श"
    ]
  }
];
