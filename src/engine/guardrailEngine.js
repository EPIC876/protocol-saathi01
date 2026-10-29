// Guardrail and Safety Engine for Protocol Saathi
// Enforces: "Find existing instructions, not new AI medical advice.
// Refuse questions outside its scope and refer to supervising ANM."

import { OUT_OF_SCOPE_TRIGGERS } from "../data/scopeDefinitions.js";

const CRITICAL_EMERGENCY_WORDS = [
  "convulsion", "convulsions", "fit", "fits", "seizure", "unconscious",
  "dora", "behosh", "not breathing", "saans rukna", "blue lips",
  "chest indrawing", "chhati dhasna", "soaking pads", "heavy bleeding",
  "khoon behna", "stridor", "cold baby", "thanda baccha", "severe dehydration"
];

export function evaluateGuardrails(rawQuery) {
  if (!rawQuery || rawQuery.trim().length === 0) {
    return {
      isBlocked: false,
      isEmergency: false,
      refusalData: null
    };
  }

  const query = rawQuery.toLowerCase().trim();

  // 1. Check against explicit Out-Of-Scope & Unsafe practices triggers
  for (const trigger of OUT_OF_SCOPE_TRIGGERS) {
    for (const keyword of trigger.keywords) {
      if (query.includes(keyword)) {
        return {
          isBlocked: true,
          isEmergency: false,
          refusalData: {
            category: trigger.category,
            matchedKeyword: keyword,
            reason: trigger.reason,
            reasonHi: trigger.reasonHi,
            instruction: trigger.refusalInstruction,
            instructionHi: trigger.refusalInstructionHi,
            requiredAction: trigger.requiredAction,
            referralTitle: "Referral to Supervising ANM Required",
            referralTitleHi: "पर्यवेक्षक एएनएम को तत्काल रेफरल आवश्यक"
          }
        };
      }
    }
  }

  // 2. Check for Critical Emergency danger flags in the prompt
  let hasEmergencySign = false;
  let detectedEmergencySign = "";
  for (const word of CRITICAL_EMERGENCY_WORDS) {
    if (query.includes(word)) {
      hasEmergencySign = true;
      detectedEmergencySign = word;
      break;
    }
  }

  return {
    isBlocked: false,
    isEmergency: hasEmergencySign,
    emergencyKeyword: detectedEmergencySign,
    refusalData: null
  };
}
