// Test script for Protocol Saathi Offline Retrieval & Guardrail Engine

import { searchOfficialProtocols } from "./src/engine/protocolMatcher.js";

const testCases = [
  // --- Pediatric & Newborn ---
  {
    name: "Newborn Danger Signs (HBNC)",
    query: "baby not feeding lethargic cold navjat",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-HBNC-NEO-03"
  },
  {
    name: "Child Diarrhea & Severe Dehydration (IMNCI)",
    query: "loose motion sunken eyes skin pinch dast",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-IMNCI-DIA-01"
  },
  {
    name: "Child Fast Breathing & Chest Indrawing (IMNCI)",
    query: "chhati dhasna tez saans khansi",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-IMNCI-ARI-02"
  },

  // --- Maternal Health ---
  {
    name: "Maternal Preeclampsia (ANC)",
    query: "pregnant woman severe headache swelling vision blurred",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-ANC-MAT-04"
  },
  {
    name: "Postpartum Hemorrhage (PPH)",
    query: "heavy bleeding after delivery soaking pads pph",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-PPH-MAT-05"
  },

  // --- Severe Adult Emergencies & Trauma ---
  {
    name: "Snakebite Envenomation (Trauma / ASV)",
    query: "saap katna snakebite asv limb immobilize",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-TRAUMA-SNK-09"
  },
  {
    name: "Animal / Stray Dog Bite (Rabies ARV)",
    query: "kutta katna dog bite wash 15 minutes arv",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-TRAUMA-RAB-10"
  },
  {
    name: "Acute Chest Pain / Heart Attack (Cardio)",
    query: "seene me dard severe chest pain left arm cold sweat",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-CARDIO-ACS-11"
  },
  {
    name: "Brain Stroke (FAST Paralysis Protocol)",
    query: "lakwa stroke face drooping arm weakness slurred speech",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-NEURO-STR-12"
  },
  {
    name: "Pesticide Poisoning Emergency",
    query: "keetnashak jahar poison pinpoint pupils froth mouth",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-TOXIC-PSN-13"
  },

  // --- Daily Common Health Problems ---
  {
    name: "Superficial Burns & Scalds First Aid",
    query: "jalna burns superficial scald cool running water",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-COMMON-BRN-14"
  },
  {
    name: "Minor Cuts & Wound Dressing (TT)",
    query: "chot ghav minor cut wound betadine dressing",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-COMMON-WND-15"
  },
  {
    name: "Scabies & Skin Itching (Permethrin)",
    query: "khujli scabies night itching between fingers permethrin",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-COMMON-SCB-16"
  },
  {
    name: "Eye Conjunctivitis / Red Eye",
    query: "aankh aana red eye discharge conjunctivitis drops",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-COMMON-EYE-17"
  },
  {
    name: "Heat Stroke & Sunstroke (Loo Lagna)",
    query: "loo lagna heat stroke tapghat cool water",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-CPHC-HEX-18"
  },
  {
    name: "Acute Severe Asthma & Wheezing Attack",
    query: "dama asthma attack wheezing saans phoolna salbutamol",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-NCD-AST-19"
  },
  {
    name: "Adult Cholera & Profuse Watery Diarrhea",
    query: "haija cholera rice water stool adult dehydration",
    expectedStatus: "MATCHED",
    expectedCode: "MOHFW-IDSP-CHL-20"
  },

  // --- Strict Guardrail Refusals ---
  {
    name: "GUARDRAIL REFUSAL: Dangerous Aspirin in Infants",
    query: "can I give disprin or aspirin for baby fever dosage",
    expectedStatus: "REFUSED",
    expectedCategory: "UNAPPROVED_OR_DANGEROUS_PEDIATRIC_MEDICATION"
  },
  {
    name: "GUARDRAIL REFUSAL: Invasive Unsafe Abortion",
    query: "how to perform abortion at home without hospital",
    expectedStatus: "REFUSED",
    expectedCategory: "SURGICAL_OR_INVASIVE_PROCEDURES"
  },
  {
    name: "GUARDRAIL REFUSAL: Dangerous Snake Bite Cut/Blade",
    query: "snake bite cut with blade and suck venom",
    expectedStatus: "REFUSED"
  },

  // --- Ambiguity Fallback ---
  {
    name: "SAFE AMBIGUOUS FALLBACK: Nonsense or Non-Clinical",
    query: "what is the cricket match score today in town",
    expectedStatus: "UNRESOLVED_AMBIGUOUS"
  }
];

console.log("==================================================");
console.log("   PROTOCOL SAATHI: EXPANDED CLINICAL TEST SUITE  ");
console.log("==================================================\n");

let passed = 0;

for (const tc of testCases) {
  const result = searchOfficialProtocols(tc.query);
  let ok = false;

  if (tc.expectedStatus === "MATCHED") {
    ok = result.status === "MATCHED" && result.result?.code === tc.expectedCode;
  } else if (tc.expectedStatus === "REFUSED") {
    ok = result.status === "REFUSED" && (!tc.expectedCategory || result.guardrail?.refusalData?.category === tc.expectedCategory);
  } else if (tc.expectedStatus === "UNRESOLVED_AMBIGUOUS") {
    ok = result.status === "UNRESOLVED_AMBIGUOUS";
  }

  if (ok) {
    passed++;
    console.log(`✅ [PASS] ${tc.name}`);
    if (result.status === "MATCHED") {
      console.log(`   └─ Matched Official Page: "${result.result.title}" (${result.result.pageNumber})`);
    } else if (result.status === "REFUSED") {
      console.log(`   └─ Safe Refusal Triggered: "${result.guardrail.refusalData.reason}"`);
    } else {
      console.log(`   └─ Safe Ambiguity Fallback: AI Hallucinations Blocked -> ANM Escalation`);
    }
  } else {
    console.error(`❌ [FAIL] ${tc.name}`);
    console.error("   └─ Result was:", result);
  }
}

console.log(`\nResults: ${passed} / ${testCases.length} tests passed.`);
if (passed === testCases.length) {
  console.log("\n🎉 ALL TESTS PASSED! Multi-domain Edge Engine is verified & operational.");
}
