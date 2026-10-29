# 🛡️ Protocol Saathi (प्रोटोकॉल साथी)
> *"Strengthen the system; protect the people in it."*
> **Offline Clinical Protocol Assistant, Emergency Facility Directory & ANM Escalation Engine for Frontline Health Workers**

Built for **Hacktober** with **React Native & Expo Go**.

---

## 📌 Problem Statement & Context
Frontline community health workers in India (**ASHAs** — *Accredited Social Health Activists*, Anganwadi workers, and Auxiliary Nurse Midwives) deliver life-saving care during household visits in rural and semi-urban communities. However:
1. **Connectivity is Limited or Non-Existent:** Mobile data is frequently unavailable in remote field locations.
2. **General AI is Unsafe for Clinical Triage:** Generic cloud LLMs suffer from hallucinations, fabricated dosages, and unpredictability—risking maternal, pediatric, and adult lives.
3. **Legal & Clinical Liability:** Health workers need **exact, verified official pages** from the Ministry of Health and Family Welfare (MoHFW) and National Health Mission (NHM), not synthetic medical advice.
4. **Safety Net Required:** When a question falls outside their training or danger signs emerge, workers need an immediate, deterministic way to refuse the query and escalate directly to their supervising **ANM (Auxiliary Nurse Midwife)** or emergency ambulance (108).
5. **Broad Scope Needed:** In addition to maternal and infant health, frontline workers confront **adult emergencies** (snakebites, dog bites/rabies, heart attacks, strokes, poisoning, heat stroke, asthma) and **daily common problems** (burns, cuts, wounds, scabies, conjunctivitis).

---

## 💡 What Protocol Saathi Builds (MVP & Architecture)

```
                       ┌────────────────────────────────────────┐
                       │   ASHA / Health Worker Field Query     │
                       └───────────────────┬────────────────────┘
                                           │ (100% Offline)
                                           ▼
                       ┌────────────────────────────────────────┐
                       │     Edge Safety & Guardrail Engine     │
                       └───────┬────────────────────────┬───────┘
                               │                        │
         [Dangerous / Out of Scope]           [Legitimate Clinical Query]
                               │                        │
                               ▼                        ▼
       ┌───────────────────────────────┐ ┌──────────────────────────────────┐
       │   STRICT SAFE REFUSAL CARD    │ │  Deterministic Protocol Matcher  │
       │  • Refuses unverified advice  │ │  • 20 MoHFW / NHM SOPs Embedded  │
       │  • Explains clinical danger   │ │  • Full Hindi (हिंदी) by Default │
       │  • Escalates to ANM Nurse     │ └──────────────────┬───────────────┘
       └───────────────┬───────────────┘                    │
                       │                                    ▼
                       │                    ┌──────────────────────────────────┐
                       │                    │   EXACT OFFICIAL PROTOCOL PAGE   │
                       │                    │ • Document title & Page Citation │
                       │                    │ • Step-by-step verified checklist│
                       │                    │ • Official pre-referral dosage   │
                       │                    │ • Strict Contraindications list  │
                       │                    └───────────────┬──────────────────┘
                       │                                    │
                       └──────────────────┬─────────────────┘
                                          │
                                          ▼
       ┌──────────────────────────────────┴─────────────────────────────────┐
       │             SUPERVISING ANM & EMERGENCY FACILITIES                 │
       │ • One-touch ANM Phone Call & Pre-filled SMS Clinical Referral      │
       │ • 108 / 102 Emergency Ambulance One-Tap Direct Dialers            │
       │ • Nearby Govt Facilities Directory (PHCs, CHCs, SNCUs, Blood Bank) │
       │ • Offline Referral Log & Audit Trail for Hospital Handover         │
       └────────────────────────────────────────────────────────────────────┘
```

---

## 📚 Complete Catalog of 20 Official Embedded Protocols

### 👶 1. Newborn Care (HBNC) & Child Health (IMNCI)
1. **Diarrhea with Severe Dehydration in Under-5 Child** (`IMNCI Chart Booklet, Page 14, Section 2.3`)
2. **Fast Breathing & Severe Pneumonia** (`IMNCI Acute Respiratory Infections, Page 6, Section 1.2`)
3. **Possible Serious Bacterial Infection (PSBI) in Newborn (0-2m)** (`HBNC Guidelines, Page 24-28, Module 7`)
4. **Severe Acute Malnutrition (SAM) with Complications** (`NHM Child Health Division, Page 18, Section 3`)
5. **High Fever & Suspected Malaria / Dengue in Child** (`NVBDCP Protocol, Page 11-13`)

### 🤰 2. Maternal Health (ANC & PNC)
6. **Severe Preeclampsia & Eclampsia in Pregnancy** (`ANC & Skilled Attendance Guidelines, Page 31, Module 3`)
7. **Postpartum Hemorrhage (PPH / Excessive Bleeding)** (`Dakshata Manual, Page 45, Module 4`)
8. **Severe Anemia in Pregnancy (Hb < 7 g/dL)** (`Anemia Mukt Bharat Guidelines, Page 19, Chapter 4`)

### ⚠️ 3. Adult Severe Emergencies, Trauma & Toxicology
9. **Snakebite Envenomation First-Aid & ASV Referral** (`MoHFW Snakebite STG, Page 8-12, Section 3`)
10. **Animal / Stray Dog Bite & Rabies Prophylaxis** (`National Rabies Control Programme, Page 4-9, Chapter 2`)
11. **Acute Chest Pain & Suspected Heart Attack (MI)** (`NP-NCD Acute Coronary Syndrome STG, Page 14-18`)
12. **Acute Brain Stroke & Paralysis (FAST Protocol)** (`National Stroke Guidelines, Page 6-10`)
13. **Organophosphate Pesticide & Household Poisoning** (`National Poison Info Center & NHM, Page 10-15`)
14. **Acute Severe Asthma & Wheezing Attack in Adults** (`NP-NCD Bronchial Asthma Guidelines, Page 12-16`)
15. **Severe Acute Watery Diarrhea & Cholera in Adults** (`IDSP Cholera Outbreak Guidelines, Page 15-20`)

### 🩹 4. Daily Common Health Problems (Ayushman Arogya Mandir / HWC)
16. **Superficial Burns & Scalds First Aid** (`National Burn Care Guidelines, Page 5-8, Section 2`)
17. **Minor Cuts, Lacerations & Wound Cleansing (TT)** (`Ayushman Bharat Arogya Mandir Manual, Page 22-26`)
18. **Scabies & Contagious Skin Itching (Permethrin)** (`NHM Dermatology Guidelines, Page 16-19`)
19. **Acute Conjunctivitis & Pink Eye Discharge** (`NPCBVI Eye Care Manual, Page 11-14`)
20. **Heat Stroke & Severe Heat Exhaustion (Loo Lagna)** (`NDMA & MoHFW Heatwave Guidelines, Page 8-10`)

---

## 📱 Interactive Home Screen & 3D Animated Navigation

Protocol Saathi features a custom-built, gesture-optimized navigation system designed for frontline field conditions:

* **2×3 Home Screen Grid:** 
  - Six large, touch-friendly cards (`minWidth: 44`, `minHeight: 44` tap targets).
  - Distinct red accent for **खतरे (Danger signs)** to ensure emergency recognition.
  - Bilingual titles and subtitles respecting the instant EN/HI language switcher.
  - Bottom guiding motto: *"सिस्टम को मजबूत करें; लोगों की रक्षा करें"*.
* **7-Slot Bottom Dock with 3D Elevated HOME Button:**
  - `[सहायक] [खतरे] [प्रोटोकॉल] [ HOME ] [केंद्र/नंबर] [पर्ची] [एएनएम]`
  - Centered 3D HOME button raised above the bar with gradient shading (`#14B8A6` to `#0F766E`), inner top specular highlight, dark bottom bevel, tactile spring-press scaling (`0.94`), and drop shadow.
* **Morphing Dock/Undock Animation (React Native Reanimated):**
  - Driven by a single UI-thread shared value `progress` (`0 = Home`, `1 = Docked`).
  - Cards glide and resize smoothly from grid positions down into their docked bottom bar slots (~450ms cubic easing with ~35ms stagger).
  - Crossfading between Home screen and active clinical screens.
* **Edge Cases & Accessibility Handled:**
  - **Android Hardware Back Button:** Tapping back from any section smoothly reverses the animation to Home; exits only on Home.
  - **Interruption & Rapid Taps:** Animation cancellations resume seamlessly from the current progress value without stuck states.
  - **Reduce Motion:** Automatically queries `AccessibilityInfo.isReduceMotionEnabled()` and switches tabs instantly if enabled.
  - **Tactile Haptic Feedback:** Integrated with `expo-haptics` on all card and nav button presses.
  - **Narrow Screen Adaptation:** Auto-fitting 10sp text for long Hindi labels (`"केंद्र/नंबर"`) on ~360px wide devices.

---

## 🎨 Professional Splash Screen & Simulated Offline Loader

The app launches with an animated branded splash screen designed specifically to welcome frontline health workers:
* **Brand Logo & Emblem:** Heart emblem enclosing three stylized community figures, looping smoothly into a healthcare stethoscope bell.
* **Guiding Track Principle:** Displayed prominently below the brand name: *"Strengthen the system; protect the people in it."*
* **Simulated Loading Slidebar:** A smooth gradient progress bar (teal `#00A878` to deep blue `#0A3C7B`) animating from 0% to 100% with real-time percentage readout (e.g. `68%`) and localized status transitions (`संसाधन लोड हो रहे हैं...` / `Loading resources...`).
* **Watermark Artwork:** Background waves and stethoscope watermark contour.
* **Instant Skip Option:** Frontline workers in critical emergency scenarios can tap "आगे बढ़ें / Skip" at any moment to bypass the loader immediately.
* **Replay Demo in Settings:** The splash animation can be re-triggered anytime from the *Supervisor Settings* tab for demonstrations and presentations.

---

## 🧪 Automated Clinical Test Suite (21 / 21 Passed ✅)

Run the test suite directly from the command line:

```powershell
cd C:\Users\ASUS\.gemini\antigravity\scratch\protocol-saathi
node testEngine.js
```

### Verified Test Cases:
| Test Scenario | Query | Expected Status | Result |
|---|---|---|---|
| **Newborn Sepsis (HBNC)** | `baby not feeding lethargic cold navjat` | `MATCHED` | ✅ Pass (`MOHFW-HBNC-NEO-03`) |
| **Child Dehydration (IMNCI)** | `loose motion sunken eyes skin pinch dast` | `MATCHED` | ✅ Pass (`MOHFW-IMNCI-DIA-01`) |
| **Severe Pneumonia (ARI)** | `chhati dhasna tez saans khansi` | `MATCHED` | ✅ Pass (`MOHFW-IMNCI-ARI-02`) |
| **Maternal Preeclampsia (ANC)** | `pregnant woman severe headache swelling` | `MATCHED` | ✅ Pass (`MOHFW-ANC-MAT-04`) |
| **Postpartum Hemorrhage** | `heavy bleeding after delivery soaking pads pph` | `MATCHED` | ✅ Pass (`MOHFW-PPH-MAT-05`) |
| **Snakebite Envenomation** | `saap katna snakebite asv limb immobilize` | `MATCHED` | ✅ Pass (`MOHFW-TRAUMA-SNK-09`) |
| **Dog Bite (Rabies)** | `kutta katna dog bite wash 15 minutes arv` | `MATCHED` | ✅ Pass (`MOHFW-TRAUMA-RAB-10`) |
| **Heart Attack / Chest Pain** | `seene me dard severe chest pain left arm` | `MATCHED` | ✅ Pass (`MOHFW-CARDIO-ACS-11`) |
| **Stroke (FAST Protocol)** | `lakwa stroke face drooping arm weakness` | `MATCHED` | ✅ Pass (`MOHFW-NEURO-STR-12`) |
| **Pesticide Poisoning** | `keetnashak jahar poison pinpoint pupils` | `MATCHED` | ✅ Pass (`MOHFW-TOXIC-PSN-13`) |
| **Superficial Burns** | `jalna burns superficial scald cool water` | `MATCHED` | ✅ Pass (`MOHFW-COMMON-BRN-14`) |
| **Minor Cuts & Wounds** | `chot ghav minor cut wound betadine` | `MATCHED` | ✅ Pass (`MOHFW-COMMON-WND-15`) |
| **Scabies Itching** | `khujli scabies night itching between fingers` | `MATCHED` | ✅ Pass (`MOHFW-COMMON-SCB-16`) |
| **Eye Conjunctivitis** | `aankh aana red eye discharge conjunctivitis` | `MATCHED` | ✅ Pass (`MOHFW-COMMON-EYE-17`) |
| **Heat Stroke (Loo Lagna)** | `loo lagna heat stroke tapghat cool water` | `MATCHED` | ✅ Pass (`MOHFW-CPHC-HEX-18`) |
| **Severe Asthma Attack** | `dama asthma attack wheezing saans phoolna` | `MATCHED` | ✅ Pass (`MOHFW-NCD-AST-19`) |
| **Adult Cholera / Diarrhea** | `haija cholera rice water stool adult` | `MATCHED` | ✅ Pass (`MOHFW-IDSP-CHL-20`) |
| **Guardrail: Pediatric Aspirin** | `can I give disprin or aspirin for baby fever` | `REFUSED` | ✅ Pass (Reye's syndrome risk) |
| **Guardrail: Invasive Abortion** | `how to perform abortion at home` | `REFUSED` | ✅ Pass (Prohibited surgical) |
| **Guardrail: Snakebite Cut** | `snake bite cut with blade and suck venom` | `REFUSED` | ✅ Pass (Tissue necrosis risk) |
| **Ambiguity Fallback** | `what is the cricket match score today in town` | `UNRESOLVED` | ✅ Pass (AI Guessing blocked) |

---

## 🚀 How to Run the App on Expo Go

```powershell
cd C:\Users\ASUS\.gemini\antigravity\scratch\protocol-saathi
npx expo start
```

Scan the QR code with **Expo Go** on your Android or iPhone. The app opens in **Hindi by default** with all 20 clinical protocols, 6 navigation tabs, emergency facilities directory, and offline ANM escalation ready for immediate field use.
