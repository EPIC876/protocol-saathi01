import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProtocolCard({ protocol, onEscalateANM, onCall108, language }) {
  const isHindi = language === "hi";
  const [checkedDangerSigns, setCheckedDangerSigns] = useState({});

  const toggleDangerSign = (index) => {
    setCheckedDangerSigns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const checkedCount = Object.values(checkedDangerSigns).filter(Boolean).length;

  // Inherent severe medical emergencies that always require urgent hospital/ASV/ICU care
  const INHERENT_RED_PROTOCOLS = [
    "prot-trauma-snakebite",
    "prot-cardio-chestpain-mi",
    "prot-neuro-stroke-fast",
    "prot-toxic-poisoning-op",
    "prot-maternal-pph",
    "prot-maternal-preeclampsia",
    "prot-hbnc-neonatal-sepsis"
  ];

  const isInherentlyRed = INHERENT_RED_PROTOCOLS.includes(protocol.id);

  // Dynamic Triage calculation based on real clinical signs checked by the health worker
  let dynamicTriageLevel = "GREEN";
  let dynamicTriageTitle = isHindi ? "सामान्य: घर पर देखभाल (प्लान A)" : "ROUTINE: HOME CARE (Plan A)";
  let dynamicTriageDesc = isHindi 
    ? "कोई गंभीर खतरे के लक्षण नहीं मिले हैं। घर पर सुरक्षित देखभाल व ओआरएस/तरल दें।" 
    : "No critical danger signs confirmed. Patient can be safely managed with home care & fluids.";
  let dynamicTriageColor = "#059669"; // Green

  if (isInherentlyRed) {
    dynamicTriageLevel = "RED";
    dynamicTriageTitle = isHindi ? "अति-गंभीर आपातकाल (लाल स्तर)" : "CRITICAL EMERGENCY (RED)";
    dynamicTriageDesc = isHindi 
      ? "यह एक गंभीर चिकित्सा संकट है। तत्काल 108 एम्बुलेंस से अस्पताल ले जाएं।" 
      : "High-risk life-threatening emergency. Immediate 108 ambulance & hospital transfer required.";
    dynamicTriageColor = "#DC2626";
  } else if (checkedCount >= 2) {
    dynamicTriageLevel = "RED";
    dynamicTriageTitle = isHindi ? "लाल आपातकाल • 2+ खतरे के निशान!" : "RED EMERGENCY • 2+ Danger Signs Confirmed!";
    dynamicTriageDesc = isHindi 
      ? "मरीज में 2 या अधिक खतरे के लक्षण हैं! तुरंत एएनएम व 108 एम्बुलेंस को कॉल करें।" 
      : "Patient has 2 or more critical red flags. Immediate ANM escalation & 108 ambulance dispatch.";
    dynamicTriageColor = "#DC2626";
  } else if (checkedCount === 1) {
    dynamicTriageLevel = "AMBER";
    dynamicTriageTitle = isHindi ? "पीला स्तर • 1 खतरे का लक्षण (उप-केंद्र परामर्श)" : "AMBER TRIAGE • 1 Danger Sign (Facility Review)";
    dynamicTriageDesc = isHindi 
      ? "1 लक्षण मौजूद है। प्राथमिक उपचार शुरू करें और आज ही उप-केंद्र/एएनएम को दिखाएं।" 
      : "1 danger sign observed. Start stabilization and escort to Sub-Center / ANM for timed review.";
    dynamicTriageColor = "#D97706";
  } else {
    // 0 checked
    if (protocol.triageLevel === "GREEN") {
      dynamicTriageLevel = "GREEN";
      dynamicTriageTitle = isHindi ? "हरा स्तर: घर पर सुरक्षित देखभाल (प्लान A)" : "GREEN TRIAGE: HOME CARE (Plan A)";
      dynamicTriageColor = "#059669";
    } else if (protocol.triageLevel === "AMBER") {
      dynamicTriageLevel = "AMBER";
      dynamicTriageTitle = isHindi ? "पीला स्तर: उप-केंद्र परामर्श (प्लान B)" : "AMBER TRIAGE: CLINIC REVIEW (Plan B)";
      dynamicTriageDesc = isHindi 
        ? "जांचें कि क्या कोई लक्षण मौजूद है। आवश्यकतानुसार उप-केंद्र पर दिखाएं।" 
        : "Check if signs are present. Consult Sub-Center / ANM as needed.";
      dynamicTriageColor = "#D97706";
    } else {
      // Was marked RED in handbook, but 0 signs are checked right now
      dynamicTriageLevel = "GREEN";
      dynamicTriageTitle = isHindi ? "सामान्य स्तर: कोई खतरा टिक नहीं (प्लान A)" : "MILD / HOME CARE (Plan A) • 0 Signs Checked";
      dynamicTriageDesc = isHindi 
        ? "यदि नीचे दिए गए खतरे के लक्षण नहीं हैं, तो मरीज को घर पर ओआरएस/तरल व आराम दें।" 
        : "If none of the danger signs below are checked, manage safely with home hydration & rest.";
      dynamicTriageColor = "#059669";
    }
  }

  const issuingAuthority = isHindi && protocol.hindiIssuingAuthority 
    ? protocol.hindiIssuingAuthority 
    : protocol.issuingAuthority;

  const guidelineDocument = isHindi && protocol.hindiGuidelineDocument 
    ? protocol.hindiGuidelineDocument 
    : protocol.guidelineDocument;

  const signsList = isHindi && protocol.hindiDangerSigns && protocol.hindiDangerSigns.length > 0 
    ? protocol.hindiDangerSigns 
    : protocol.dangerSigns;

  const stepsList = isHindi && protocol.hindiActionSteps && protocol.hindiActionSteps.length > 0 
    ? protocol.hindiActionSteps 
    : protocol.actionSteps;

  const dosageList = isHindi && protocol.hindiDosageChart && protocol.hindiDosageChart.length > 0 
    ? protocol.hindiDosageChart 
    : protocol.dosageChart;

  const contraList = isHindi && protocol.hindiContraindications && protocol.hindiContraindications.length > 0 
    ? protocol.hindiContraindications 
    : protocol.contraindications;

  return (
    <View style={styles.cardContainer}>
      {/* Official MoHFW Header Badge */}
      <View style={styles.officialHeader}>
        <View style={styles.authorityRow}>
          <Ionicons name="ribbon" size={16} color="#0D9488" />
          <Text style={styles.authorityText} numberOfLines={1}>
            {issuingAuthority}
          </Text>
        </View>
        <View style={styles.citationBadge}>
          <Text style={styles.citationBadgeText}>{protocol.pageNumber}</Text>
        </View>
      </View>

      {/* Document & Protocol Identification */}
      <View style={styles.docInfoSection}>
        <Text style={styles.docTitle}>
          {guidelineDocument} ({protocol.publicationYear})
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.protocolCode}>
            {isHindi ? "कोड:" : "CODE:"} {protocol.code}
          </Text>
          <View style={[styles.triagePill, { backgroundColor: dynamicTriageColor }]}>
            <Text style={styles.triagePillText}>
              {dynamicTriageLevel}
            </Text>
          </View>
        </View>
      </View>

      {/* Main Clinical Protocol Title */}
      <View style={styles.titleSection}>
        <Text style={styles.protocolTitle}>
          {isHindi && protocol.hindiTitle ? protocol.hindiTitle : protocol.title}
        </Text>
        {isHindi && protocol.hindiTitle && (
          <Text style={styles.englishSubTitle}>{protocol.title}</Text>
        )}
      </View>

      {/* Real-time Dynamic Triage Status Meter */}
      <View style={[styles.triageMeterBox, { borderColor: dynamicTriageColor, backgroundColor: dynamicTriageColor === "#DC2626" ? "#FEF2F2" : (dynamicTriageColor === "#D97706" ? "#FFFBEB" : "#F0FDF4") }]}>
        <View style={styles.meterHeaderRow}>
          <Ionicons 
            name={dynamicTriageLevel === "RED" ? "alert-circle" : (dynamicTriageLevel === "AMBER" ? "warning" : "checkmark-circle")} 
            size={20} 
            color={dynamicTriageColor} 
          />
          <Text style={[styles.meterTitle, { color: dynamicTriageColor }]}>
            {dynamicTriageTitle}
          </Text>
        </View>
        <Text style={styles.meterDesc}>
          {dynamicTriageDesc}
        </Text>
      </View>

      {/* Danger Signs Section with Checkboxes */}
      <View style={styles.sectionBox}>
        <View style={styles.sectionHeader}>
          <Ionicons name="shield-checkmark" size={18} color="#0D9488" />
          <Text style={styles.sectionTitle}>
            {isHindi ? "खतरे के लक्षणों की जांच करें (जो मौजूद हैं उन पर टिक करें):" : "Check Patient for Danger Signs (Tap if Present):"}
          </Text>
        </View>

        <View style={styles.dangerList}>
          {signsList.map((sign, idx) => {
            const isChecked = !!checkedDangerSigns[idx];
            return (
              <TouchableOpacity 
                key={idx} 
                style={[styles.dangerItem, isChecked && styles.dangerItemActive]}
                onPress={() => toggleDangerSign(idx)}
                activeOpacity={0.7}
              >
                <Ionicons 
                  name={isChecked ? "checkbox" : "square-outline"} 
                  size={20} 
                  color={isChecked ? "#DC2626" : "#6B7280"} 
                />
                <Text style={[styles.dangerText, isChecked && styles.dangerTextActive]}>
                  {sign}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Mandatory Action Steps */}
      <View style={styles.sectionBox}>
        <View style={styles.sectionHeader}>
          <Ionicons name="list" size={18} color="#0D9488" />
          <Text style={styles.sectionTitle}>
            {isHindi ? "स्वास्थ्य कार्यकर्ता के लिए अनिवार्य चरण" : "Mandatory Health Worker Action Steps"}
          </Text>
        </View>

        {stepsList.map((stepItem, idx) => (
          <View key={idx} style={styles.stepRow}>
            <View style={styles.stepNumberBadge}>
              <Text style={styles.stepNumberText}>{stepItem.step}</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{stepItem.title}</Text>
              <Text style={styles.stepInstruction}>{stepItem.instruction}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Pre-Referral Dosage Matrix */}
      {dosageList && dosageList.length > 0 && (
        <View style={styles.sectionBox}>
          <View style={styles.sectionHeader}>
            <Ionicons name="medkit" size={18} color="#2563EB" />
            <Text style={styles.sectionTitle}>
              {isHindi ? "आधिकारिक पूर्व-रेफरल खुराक तालिका" : "Official Pre-Referral Dosage Matrix"}
            </Text>
          </View>

          <View style={styles.dosageTable}>
            {dosageList.map((row, idx) => (
              <View key={idx} style={[styles.dosageRow, idx % 2 === 1 && styles.dosageRowAlt]}>
                <View style={styles.dosageColLeft}>
                  <Text style={styles.dosageAge}>
                    {row.age || row.weight || row.indicator || row.drug || row.category || row.medicine || row.fluid || row.condition}
                  </Text>
                  {row.weight && row.age && (
                    <Text style={styles.dosageWeightSub}>
                      {isHindi ? "वजन:" : "Wt:"} {row.weight}
                    </Text>
                  )}
                </View>
                <View style={styles.dosageColRight}>
                  {row.orseDose && (
                    <Text style={styles.doseItemText}>• <Text style={styles.doseBold}>{isHindi ? "ओआरएस:" : "ORS:"}</Text> {row.orseDose}</Text>
                  )}
                  {row.zincDose && (
                    <Text style={styles.doseItemText}>• <Text style={styles.doseBold}>{isHindi ? "जिंक:" : "Zinc:"}</Text> {row.zincDose}</Text>
                  )}
                  {row.amoxicillinDose && (
                    <Text style={styles.doseItemText}>• <Text style={styles.doseBold}>{isHindi ? "एमोक्सिसिलिन:" : "Amoxicillin:"}</Text> {row.amoxicillinDose}</Text>
                  )}
                  {row.paracetamolDose && (
                    <Text style={styles.doseItemText}>• <Text style={styles.doseBold}>{isHindi ? "पेरासिटामोल:" : "PCM:"}</Text> {row.paracetamolDose}</Text>
                  )}
                  {row.instruction && (
                    <Text style={styles.doseItemText}>{row.instruction}</Text>
                  )}
                  {row.protocol && (
                    <Text style={styles.doseItemText}>{row.protocol}</Text>
                  )}
                  {row.treatment && (
                    <Text style={styles.doseItemText}>{row.treatment}</Text>
                  )}
                  {row.dose && (
                    <Text style={styles.doseItemText}><Text style={styles.doseBold}>{row.timing || (isHindi ? "खुराक" : "Dose")}:</Text> {row.dose}</Text>
                  )}
                  {row.action && (
                    <Text style={styles.doseItemText}>{row.action}</Text>
                  )}
                  {row.application && (
                    <Text style={styles.doseItemText}>{row.application}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Contraindications Warning Box */}
      {contraList && (
        <View style={styles.contraBox}>
          <View style={styles.contraHeader}>
            <Ionicons name="close-circle" size={17} color="#B91C1C" />
            <Text style={styles.contraHeading}>
              {isHindi ? "सख्त निषेध (यह बिल्कुल न करें):" : "Strict Contraindications (DO NOT DO):"}
            </Text>
          </View>
          {contraList.map((ci, idx) => (
            <Text key={idx} style={styles.contraText}>
              ✕ {ci}
            </Text>
          ))}
        </View>
      )}

      {/* Bottom Action Buttons */}
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity 
          style={[
            styles.escalateBtn, 
            dynamicTriageLevel === "RED" && styles.escalateBtnRed,
            dynamicTriageLevel === "GREEN" && styles.escalateBtnGreen
          ]}
          onPress={() => onEscalateANM(
            { ...protocol, triageLevel: dynamicTriageLevel }, 
            checkedDangerSigns
          )}
          activeOpacity={0.8}
        >
          <Ionicons name="call" size={18} color="#FFFFFF" />
          <Text style={styles.escalateBtnText}>
            {dynamicTriageLevel === "RED" 
              ? (isHindi ? "एएनएम को आपातकालीन कॉल" : "Urgent ANM Escalation")
              : (isHindi ? "एएनएम से परामर्श करें" : "Consult Supervising ANM")}
          </Text>
        </TouchableOpacity>

        {dynamicTriageLevel === "RED" ? (
          <TouchableOpacity 
            style={styles.ambulanceBtnEmergency}
            onPress={onCall108}
            activeOpacity={0.8}
          >
            <Ionicons name="car" size={18} color="#FFFFFF" />
            <Text style={styles.ambulanceBtnEmergencyText}>
              {isHindi ? "108 एम्बुलेंस" : "108 Ambulance"}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={styles.routineCareBtn}
            onPress={() => onEscalateANM(
              { ...protocol, triageLevel: dynamicTriageLevel }, 
              checkedDangerSigns
            )}
            activeOpacity={0.8}
          >
            <Ionicons name="document-text-outline" size={18} color="#0D9488" />
            <Text style={styles.routineCareBtnText}>
              {isHindi ? "रेफरल पर्ची" : "Referral Slip"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    marginVertical: 10,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3
  },
  officialHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0FDFA",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCFBF1"
  },
  authorityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1
  },
  authorityText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#0F766E"
  },
  citationBadge: {
    backgroundColor: "#0D9488",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },
  citationBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF"
  },
  docInfoSection: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 8
  },
  docTitle: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500"
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4
  },
  protocolCode: {
    fontSize: 11,
    fontWeight: "700",
    color: "#475569"
  },
  triagePill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },
  triagePillText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.3
  },
  titleSection: {
    marginTop: 8,
    marginBottom: 8
  },
  protocolTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
    lineHeight: 22
  },
  englishSubTitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2
  },
  triageMeterBox: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1.5,
    marginVertical: 8
  },
  meterHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 2
  },
  meterTitle: {
    fontSize: 12.5,
    fontWeight: "800"
  },
  meterDesc: {
    fontSize: 11.5,
    color: "#475569",
    lineHeight: 16,
    marginTop: 2
  },
  sectionBox: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingTop: 10
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8
  },
  sectionTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#1E293B"
  },
  dangerList: {
    gap: 6
  },
  dangerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F8FAFC",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  dangerItemActive: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FCA5A5"
  },
  dangerText: {
    fontSize: 12.5,
    color: "#334155",
    flex: 1
  },
  dangerTextActive: {
    color: "#991B1B",
    fontWeight: "600"
  },
  stepRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    backgroundColor: "#F8FAFC",
    padding: 10,
    borderRadius: 8
  },
  stepNumberBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#0D9488",
    justifyContent: "center",
    alignItems: "center"
  },
  stepNumberText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700"
  },
  stepContent: {
    flex: 1
  },
  stepTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A"
  },
  stepInstruction: {
    fontSize: 12,
    color: "#475569",
    marginTop: 3,
    lineHeight: 17
  },
  dosageTable: {
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  dosageRow: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9"
  },
  dosageRowAlt: {
    backgroundColor: "#F8FAFC"
  },
  dosageColLeft: {
    width: "35%",
    borderRightWidth: 1,
    borderRightColor: "#E2E8F0",
    paddingRight: 6
  },
  dosageAge: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1E293B"
  },
  dosageWeightSub: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 2
  },
  dosageColRight: {
    width: "65%",
    paddingLeft: 8
  },
  doseItemText: {
    fontSize: 11.5,
    color: "#334155",
    marginBottom: 2
  },
  doseBold: {
    fontWeight: "700",
    color: "#0F172A"
  },
  contraBox: {
    backgroundColor: "#FFF1F2",
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#E11D48"
  },
  contraHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4
  },
  contraHeading: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9F1239"
  },
  contraText: {
    fontSize: 11.5,
    color: "#BE123C",
    marginTop: 3,
    lineHeight: 16
  },
  actionButtonsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9"
  },
  escalateBtn: {
    flex: 1.4,
    backgroundColor: "#0D9488",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    borderRadius: 10
  },
  escalateBtnRed: {
    backgroundColor: "#DC2626"
  },
  escalateBtnGreen: {
    backgroundColor: "#059669"
  },
  escalateBtnText: {
    color: "#FFFFFF",
    fontSize: 12.5,
    fontWeight: "700"
  },
  ambulanceBtnEmergency: {
    flex: 1,
    backgroundColor: "#DC2626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    borderRadius: 10
  },
  ambulanceBtnEmergencyText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700"
  },
  routineCareBtn: {
    flex: 1,
    backgroundColor: "#F0FDFA",
    borderWidth: 1,
    borderColor: "#99F6E4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    borderRadius: 10
  },
  routineCareBtnText: {
    color: "#0F766E",
    fontSize: 12,
    fontWeight: "700"
  }
});
