import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RefusalBanner({ refusalData, onEscalateANM, language }) {
  const isHindi = language === "hi";

  const reasonText = isHindi 
    ? (refusalData?.reasonHi || refusalData?.reason || "यह अनुरोध अधिकृत आशा/स्वास्थ्य कार्यकर्ता प्रोटोकॉल के दायरे से बाहर है। अप्रमाणित खुराक या सर्जिकल प्रक्रिया जानलेवा हो सकती है।")
    : (refusalData?.reason || "This inquiry involves unapproved medication or tertiary procedures outside authorized field triage.");

  const instructionText = isHindi 
    ? (refusalData?.instructionHi || refusalData?.instruction || "प्रोटोकॉल साथी कृत्रिम बुद्धिमत्ता (AI) से मनगढ़ंत चिकित्सा सलाह नहीं देता। स्वास्थ्य रक्षा के लिए आधिकारिक दिशा-निर्देश ही मान्य हैं।")
    : (refusalData?.instruction || "Protocol Saathi strictly delivers verified MoHFW clinical SOPs. It refuses to invent AI medical advice.");

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.iconCircle}>
          <Ionicons name="hand-left" size={24} color="#DC2626" />
        </View>
        <View style={styles.headerTextCol}>
          <View style={styles.pillRow}>
            <View style={styles.refusalPill}>
              <Text style={styles.refusalPillText}>
                {isHindi ? "अनुरोध अस्वीकृत (क्लिनिकल स्कोप)" : "REQUEST REFUSED • SAFETY SCOPE"}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>
            {isHindi 
              ? "अधिकृत स्वास्थ्य कार्यकर्ता प्रोटोकॉल के बाहर" 
              : "Outside ASHA / CHW Protocol Scope"}
          </Text>
        </View>
      </View>

      <View style={styles.reasonBox}>
        <View style={styles.reasonHeader}>
          <Ionicons name="alert-circle" size={16} color="#B91C1C" />
          <Text style={styles.reasonHeading}>
            {isHindi ? "अस्वीकृति का कारण:" : "Why was this refused?"}
          </Text>
        </View>
        <Text style={styles.reasonText}>
          {reasonText}
        </Text>
      </View>

      <View style={styles.policyNotice}>
        <Ionicons name="shield-half" size={16} color="#0D9488" style={{ marginTop: 2 }} />
        <Text style={styles.policyText}>
          {instructionText}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.escalateBtn}
        onPress={() => onEscalateANM(refusalData)}
        activeOpacity={0.85}
      >
        <Ionicons name="call" size={20} color="#FFFFFF" />
        <View style={styles.escalateBtnContent}>
          <Text style={styles.escalateBtnTitle}>
            {isHindi ? "पर्यवेक्षक एएनएम को तुरंत रेफर करें" : "Escalate to Supervising ANM (Nurse)"}
          </Text>
          <Text style={styles.escalateBtnSub}>
            {isHindi ? "एक-टैप कॉल और आपातकालीन पर्ची" : "Immediate phone consultation & triage note"}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FEF2F2",
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#EF4444",
    marginVertical: 12,
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3
  },
  headerRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center"
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#F87171"
  },
  headerTextCol: {
    flex: 1
  },
  pillRow: {
    flexDirection: "row",
    marginBottom: 4
  },
  refusalPill: {
    backgroundColor: "#DC2626",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4
  },
  refusalPillText: {
    color: "#FFFFFF",
    fontSize: 9.5,
    fontWeight: "800",
    letterSpacing: 0.5
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#991B1B"
  },
  reasonBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#DC2626"
  },
  reasonHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4
  },
  reasonHeading: {
    fontSize: 12,
    fontWeight: "700",
    color: "#991B1B"
  },
  reasonText: {
    fontSize: 13,
    color: "#374151",
    lineHeight: 18
  },
  policyNotice: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
    backgroundColor: "#F0FDFA",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCFBF1"
  },
  policyText: {
    fontSize: 11.5,
    color: "#0F766E",
    flex: 1,
    lineHeight: 16
  },
  escalateBtn: {
    backgroundColor: "#DC2626",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 14,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3
  },
  escalateBtnContent: {
    flex: 1
  },
  escalateBtnTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700"
  },
  escalateBtnSub: {
    color: "#FECACA",
    fontSize: 11,
    marginTop: 2
  }
});
