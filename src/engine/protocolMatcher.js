// Deterministic Protocol Retrieval Engine
// Operates 100% offline with zero external network dependency.
// Matches queries to exact MoHFW / NHM / IMNCI protocol pages.

import { OFFICIAL_PROTOCOLS } from "../data/officialProtocols.js";
import { evaluateGuardrails } from "./guardrailEngine.js";

// Common Hindi/Hinglish medical vocabulary mapping to clinical terms
const SYNONYM_MAP = {
  // Pediatric & Maternal
  "dast": ["diarrhea", "loose", "motion", "watery", "stools"],
  "jhada": ["diarrhea", "loose", "motion"],
  "bukhar": ["fever", "temperature", "tap"],
  "khansi": ["cough", "respiratory", "pneumonia"],
  "saans": ["breathing", "respiration", "breath"],
  "tez saans": ["fast", "breathing", "respiratory", "pneumonia"],
  "chhati": ["chest", "indrawing"],
  "baccha": ["child", "baby", "infant"],
  "bacha": ["child", "baby", "infant"],
  "navjat": ["newborn", "infant", "sepsis"],
  "khoon": ["bleeding", "hemorrhage", "blood"],
  "rakt": ["bleeding", "blood"],
  "peela": ["jaundice", "yellow", "palms"],
  "peeliya": ["jaundice", "yellow"],
  "dora": ["convulsion", "fit", "seizure"],
  "jhatke": ["convulsions", "fits", "seizures"],
  "sir dard": ["headache", "preeclampsia"],
  "soojan": ["swelling", "edema"],
  "kuposhan": ["malnutrition", "sam", "wasting"],
  "sukha rog": ["malnutrition", "wasting"],
  "ulti": ["vomit", "vomiting"],
  "chakkar": ["dizziness", "fainting"],
  "doodh nahi": ["not feeding", "cannot feed", "poor suckling"],
  "thanda": ["cold", "hypothermia"],
  "safed": ["pallor", "pale", "anemia"],

  // Adult Emergencies & Trauma
  "saap": ["snake", "snakebite", "fang", "venom", "asv"],
  "saanp": ["snake", "snakebite", "fang", "venom", "asv"],
  "dams": ["snake", "bite"],
  "kutta": ["dog", "dogbite", "rabies", "arv", "animal bite"],
  "seene me dard": ["chest pain", "heart attack", "cardio", "aspirin"],
  "chhati dard": ["chest pain", "heart attack", "angina"],
  "dil ka daura": ["heart attack", "chest pain", "cardiac"],
  "lakwa": ["stroke", "paralysis", "fast", "face drooping"],
  "pakshaghat": ["stroke", "paralysis", "brain"],
  "jahar": ["poison", "poisoning", "toxic", "pesticide"],
  "keetnashak": ["pesticide", "poisoning", "organophosphate"],
  "dawai pi li": ["poisoning", "toxic", "pesticide"],
  "loo": ["heat", "heat stroke", "sunstroke", "tapghat"],
  "dhoop": ["heat", "sun", "burn"],
  "dama": ["asthma", "wheezing", "saans phoolna", "salbutamol"],
  "haija": ["cholera", "rice water", "watery diarrhea", "dast"],

  // Daily Common Ailments
  "jalna": ["burn", "burns", "scald", "chhale", "blister"],
  "aag": ["burn", "fire", "jalna"],
  "chot": ["wound", "cut", "laceration", "tetanus", "betadine"],
  "ghav": ["wound", "cut", "bleeding", "dressing"],
  "khujli": ["scabies", "itching", "khaj", "permethrin"],
  "khaj": ["scabies", "itching", "permethrin"],
  "aankh": ["eye", "conjunctivitis", "red eye", "pink eye"],
  "aankh aana": ["conjunctivitis", "pink eye", "eye discharge"],
  "kichad": ["conjunctivitis", "discharge", "eye"]
};

const STOP_WORDS = new Set([
  "the", "and", "for", "with", "this", "that", "what", "when", "from", 
  "have", "has", "are", "was", "were", "you", "your", "can", "how", "give", "today", "town"
]);

function normalizeQuery(text) {
  let lower = text.toLowerCase().replace(/[^\w\s]/gi, " ");
  let tokens = lower.split(/\s+/).filter(Boolean);
  let expanded = [...tokens.filter(t => !STOP_WORDS.has(t))];

  for (const token of tokens) {
    if (SYNONYM_MAP[token]) {
      expanded.push(...SYNONYM_MAP[token]);
    }
  }

  // Handle common bigrams
  if (lower.includes("fast breathing") || lower.includes("tez saans")) {
    expanded.push("pneumonia", "fast breathing", "ari");
  }
  if (lower.includes("loose motion") || lower.includes("watery stool")) {
    expanded.push("diarrhea", "dehydration", "ors");
  }
  if (lower.includes("not feeding") || lower.includes("doodh nahi")) {
    expanded.push("newborn", "sepsis", "psbi");
  }
  if (lower.includes("high bp") || lower.includes("headache")) {
    expanded.push("preeclampsia", "eclampsia", "maternal");
  }
  if (lower.includes("bleeding after") || lower.includes("soaking pads")) {
    expanded.push("pph", "hemorrhage", "postpartum");
  }
  if (lower.includes("snake bite") || lower.includes("saap katna") || lower.includes("saap ne kaat")) {
    expanded.push("snake", "snakebite", "envenomation", "asv");
  }
  if (lower.includes("dog bite") || lower.includes("kutte ne kaat") || lower.includes("kutta katna")) {
    expanded.push("dog", "dogbite", "rabies", "arv");
  }
  if (lower.includes("chest pain") || lower.includes("seene me dard") || lower.includes("heart attack")) {
    expanded.push("chest pain", "heart attack", "mi", "cardio");
  }
  if (lower.includes("stroke") || lower.includes("lakwa") || lower.includes("muh tedha")) {
    expanded.push("stroke", "paralysis", "fast", "brain");
  }
  if (lower.includes("poison") || lower.includes("jahar") || lower.includes("keetnashak")) {
    expanded.push("poisoning", "toxic", "pesticide", "organophosphate");
  }
  if (lower.includes("burn") || lower.includes("jal gaya") || lower.includes("jalna")) {
    expanded.push("burn", "burns", "scald");
  }
  if (lower.includes("cut") || lower.includes("chot") || lower.includes("ghav")) {
    expanded.push("wound", "cut", "laceration", "tetanus");
  }
  if (lower.includes("khujli") || lower.includes("scabies") || lower.includes("khaj")) {
    expanded.push("scabies", "itching", "permethrin");
  }
  if (lower.includes("aankh aana") || lower.includes("red eye") || lower.includes("conjunctivitis")) {
    expanded.push("conjunctivitis", "eye", "pink eye");
  }
  if (lower.includes("heat stroke") || lower.includes("loo lagna") || lower.includes("tapghat") || lower.includes("dhoop me behosh")) {
    expanded.push("heat stroke", "loo", "tapghat");
  }
  if (lower.includes("asthma") || lower.includes("dama") || lower.includes("wheezing") || lower.includes("saans phoolna")) {
    expanded.push("asthma", "dama", "wheezing", "salbutamol");
  }
  if (lower.includes("cholera") || lower.includes("haija") || lower.includes("rice water stool")) {
    expanded.push("cholera", "haija", "rice water");
  }

  return expanded;
}

export function searchOfficialProtocols(query) {
  if (!query || query.trim().length === 0) {
    return {
      status: "EMPTY",
      result: null
    };
  }

  // Step 1: Run Guardrails & Refusal Rules
  const guardrailCheck = evaluateGuardrails(query);
  if (guardrailCheck.isBlocked) {
    return {
      status: "REFUSED",
      guardrail: guardrailCheck,
      result: null
    };
  }

  // Step 2: Score against verified protocols
  const searchTokens = normalizeQuery(query);
  const scoredProtocols = OFFICIAL_PROTOCOLS.map((protocol) => {
    let score = 0;
    const protocolTextTokens = [
      ...protocol.title.toLowerCase().split(/\s+/),
      ...protocol.category.toLowerCase().split(/\s+/),
      ...(protocol.hindiTitle ? protocol.hindiTitle.toLowerCase().split(/\s+/) : []),
      ...(protocol.hindiCategory ? protocol.hindiCategory.toLowerCase().split(/\s+/) : []),
      ...protocol.keywords.map(k => k.toLowerCase())
    ];

    // High priority keyword matches
    for (const kw of protocol.keywords) {
      if (query.toLowerCase().includes(kw)) {
        score += 3.8;
      }
    }

    // Token overlap matches
    for (const token of searchTokens) {
      if (token.length <= 2 || STOP_WORDS.has(token)) continue;
      
      const isMatch = protocolTextTokens.some(pt => {
        if (pt === token) return true;
        if (token.length >= 4 && (pt.includes(token) || token.includes(pt))) return true;
        return false;
      });

      if (isMatch) {
        score += 1.6;
      }

      // Check danger signs
      for (const ds of protocol.dangerSigns) {
        if (ds.toLowerCase().split(/\s+/).includes(token)) {
          score += 1.2;
        }
      }
    }

    return {
      protocol,
      score
    };
  });

  // Sort descending by relevance score
  scoredProtocols.sort((a, b) => b.score - a.score);

  const bestMatch = scoredProtocols[0];
  const CONFIDENCE_THRESHOLD = 2.4;

  if (bestMatch && bestMatch.score >= CONFIDENCE_THRESHOLD) {
    return {
      status: "MATCHED",
      // isEmergency is ONLY true if user query actually contains an acute red-flag emergency word
      // Common symptoms like loose motion, cough, fever start at routine/amber triage!
      isEmergency: guardrailCheck.isEmergency,
      emergencyKeyword: guardrailCheck.emergencyKeyword,
      confidenceScore: bestMatch.score,
      result: bestMatch.protocol,
      otherRelevant: scoredProtocols
        .filter(item => item.score >= 2.0 && item.protocol.id !== bestMatch.protocol.id)
        .map(item => item.protocol)
    };
  }

  // Ambiguous query: Safe fallback refusal to prevent hallucinatory medical output
  return {
    status: "UNRESOLVED_AMBIGUOUS",
    isEmergency: guardrailCheck.isEmergency,
    emergencyKeyword: guardrailCheck.emergencyKeyword,
    message: "No verified MoHFW instruction page matched with high confidence. To protect patient safety, Protocol Saathi does not guess medical advice.",
    suggestedProtocols: OFFICIAL_PROTOCOLS.slice(0, 3)
  };
}
