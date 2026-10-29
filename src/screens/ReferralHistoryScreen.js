import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getReferralLogs, clearAllReferralLogs } from "../utils/storage";

export default function ReferralHistoryScreen({ language, refreshTrigger }) {
  const isHindi = language === "hi";
  const [logs, setLogs] = useState([]);

  const loadLogs = async () => {
    const list = await getReferralLogs();
    setLogs(list);
  };

  useEffect(() => {
    loadLogs();
  }, [refreshTrigger]);

  const handleClearHistory = () => {
    Alert.alert(
      isHindi ? "इतिहास हटाएं" : "Clear Referral History",
      isHindi ? "क्या आप वाकई सभी रेफरल पर्चियां हटाना चाहते हैं?" : "Are you sure you want to clear all offline referral slips?",
      [
        { text: isHindi ? "रद्द करें" : "Cancel", style: "cancel" },
        { 
          text: isHindi ? "हटाएं" : "Clear All", 
          style: "destructive",
          onPress: async () => {
            await clearAllReferralLogs();
            loadLogs();
          }
        }
      ]
    );
  };

  const handleShareLog = (item) => {
    const body = encodeURIComponent(`[${isHindi ? "ऑफ़लाइन रेफरल पर्ची" : "OFFLINE REFERRAL LOG"}]
${isHindi ? "मरीज़" : "Case"}: ${item.patientId} (${isHindi ? "उम्र" : "Age"}: ${item.age})
${isHindi ? "रोग/अवस्था" : "Condition"}: ${item.condition}
${isHindi ? "ट्राएज स्तर" : "Triage"}: ${item.triageLevel}
${isHindi ? "प्राथमिक उपचार" : "Pre-referral"}: ${item.preReferralAction || (isHindi ? "कोई नहीं" : "None")}
${isHindi ? "पर्यवेक्षक एएनएम" : "ANM Contacted"}: ${item.anmContacted}
${isHindi ? "समय" : "Timestamp"}: ${item.savedAt}`);

    Linking.openURL(`sms:?body=${body}`).catch(() => {
      Alert.alert(
        isHindi ? "एसएमएस" : "SMS", 
        isHindi ? "मैसेज एप खोलने में असमर्थ" : "Could not open messaging app"
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.screenTitle}>
            {isHindi ? "ऑफ़लाइन रेफरल पर्ची इतिहास" : "Offline Referral Log"}
          </Text>
          <Text style={styles.screenSubtitle}>
            {isHindi ? "फील्ड में तैयार की गई पर्चियां (पीएचसी पर हैंडओवर हेतु)" : "Saved cases for PHC handover & audit"}
          </Text>
        </View>

        {logs.length > 0 && (
          <TouchableOpacity onPress={handleClearHistory} style={styles.clearBtn}>
            <Ionicons name="trash-outline" size={18} color="#EF4444" />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        {logs.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="document-text-outline" size={48} color="#94A3B8" />
            <Text style={styles.emptyTitle}>
              {isHindi ? "कोई रेफरल पर्ची सहेजी नहीं गई" : "No Referral Slips Yet"}
            </Text>
            <Text style={styles.emptySubtitle}>
              {isHindi 
                ? "जब आप गृह-भ्रमण के दौरान किसी मरीज़ को एएनएम को रेफर करेंगे, तो पर्ची यहाँ सुरक्षित रूप से दिखाई देगी।" 
                : "Referral slips generated during home visits will be stored here offline."}
            </Text>
          </View>
        ) : (
          logs.map((item) => {
            const isRed = item.triageLevel === "RED";
            return (
              <View key={item.id} style={styles.logCard}>
                <View style={styles.logHeader}>
                  <View style={styles.patientInfoCol}>
                    <Text style={styles.patientName}>{item.patientId}</Text>
                    <Text style={styles.patientAge}>
                      {isHindi ? "उम्र: " : "Age: "}{item.age} • {isHindi ? "समय: " : "Time: "}{item.savedAt}
                    </Text>
                  </View>
                  <View style={[styles.triageBadge, isRed ? styles.badgeRed : styles.badgeAmber]}>
                    <Text style={[styles.triageBadgeText, isRed ? styles.textRed : styles.textAmber]}>
                      {isRed ? (isHindi ? "लाल आपातकाल" : "RED") : (isHindi ? "पीला परामर्श" : "AMBER")}
                    </Text>
                  </View>
                </View>

                <View style={styles.conditionRow}>
                  <Text style={styles.conditionLabel}>{isHindi ? "रोग / लक्षण:" : "Condition:"}</Text>
                  <Text style={styles.conditionValue}>{item.condition}</Text>
                </View>

                {item.vitalsNotes ? (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>{isHindi ? "लक्षण नोट:" : "Signs:"}</Text>
                    <Text style={styles.detailValue}>{item.vitalsNotes}</Text>
                  </View>
                ) : null}

                {item.preReferralAction ? (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>{isHindi ? "प्राथमिक उपचार:" : "Action:"}</Text>
                    <Text style={styles.detailValue}>{item.preReferralAction}</Text>
                  </View>
                ) : null}

                <View style={styles.footerRow}>
                  <Text style={styles.anmText}>
                    {isHindi ? "पर्यवेक्षक:" : "Supervisor:"} {item.anmContacted}
                  </Text>
                  <TouchableOpacity 
                    style={styles.shareLogBtn} 
                    onPress={() => handleShareLog(item)}
                  >
                    <Ionicons name="share-social-outline" size={14} color="#0D9488" />
                    <Text style={styles.shareLogText}>{isHindi ? "भेजें" : "Share"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC"
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0"
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A"
  },
  screenSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2
  },
  clearBtn: {
    padding: 6
  },
  scrollArea: {
    paddingHorizontal: 16,
    paddingTop: 12
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    paddingHorizontal: 30
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#475569",
    marginTop: 12
  },
  emptySubtitle: {
    fontSize: 12,
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 6,
    lineHeight: 18
  },
  logCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  logHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8
  },
  patientInfoCol: {
    flex: 1
  },
  patientName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0F172A"
  },
  patientAge: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2
  },
  triageBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },
  badgeRed: {
    backgroundColor: "#FEE2E2"
  },
  badgeAmber: {
    backgroundColor: "#FEF3C7"
  },
  triageBadgeText: {
    fontSize: 10,
    fontWeight: "800"
  },
  textRed: {
    color: "#DC2626"
  },
  textAmber: {
    color: "#D97706"
  },
  conditionRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 4
  },
  conditionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#334155"
  },
  conditionValue: {
    fontSize: 12,
    color: "#0F172A",
    fontWeight: "600",
    flex: 1
  },
  detailRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 4
  },
  detailLabel: {
    fontSize: 11.5,
    fontWeight: "600",
    color: "#64748B"
  },
  detailValue: {
    fontSize: 11.5,
    color: "#334155",
    flex: 1
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9"
  },
  anmText: {
    fontSize: 11,
    color: "#0D9488",
    fontWeight: "600"
  },
  shareLogBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#E6FFFA",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  shareLogText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#0D9488"
  }
});
