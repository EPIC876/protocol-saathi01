import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DANGER_SIGN_CATEGORIES } from "../data/triageRules";

export default function DangerSignsScreen({ onEscalateANM, onCall108, language }) {
  const isHindi = language === "hi";
  const [selectedCategory, setSelectedCategory] = useState("cat-newborn");
  const [checkedSigns, setCheckedSigns] = useState({});

  const activeCategory = DANGER_SIGN_CATEGORIES.find(c => c.id === selectedCategory);

  const toggleSign = (signId) => {
    setCheckedSigns(prev => ({
      ...prev,
      [signId]: !prev[signId]
    }));
  };

  const activeCheckedCount = activeCategory.signs.filter(s => checkedSigns[s.id]).length;
  const hasRedSignChecked = activeCategory.signs.some(s => checkedSigns[s.id] && s.severity === "RED");

  const handleCreateReferral = () => {
    const checkedList = activeCategory.signs.filter(s => checkedSigns[s.id]);
    const summaryText = checkedList.map(s => s.text).join(", ");
    onEscalateANM(
      {
        title: `${activeCategory.title} Emergency`,
        code: `TRIAGE-${activeCategory.id.toUpperCase()}`,
        triageLevel: hasRedSignChecked ? "RED" : "AMBER"
      },
      {
        reason: summaryText || "High-risk danger signs flagged in field triage matrix"
      }
    );
  };

  return (
    <View style={styles.container}>
      {/* Category Tabs */}
      <View style={styles.categoryTabRow}>
        {DANGER_SIGN_CATEGORIES.map((cat) => {
          const isSelected = cat.id === selectedCategory;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryTab, isSelected && styles.categoryTabActive]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <Text style={[styles.categoryTabText, isSelected && styles.categoryTabTextActive]}>
                {isHindi && cat.hindiTitle ? cat.hindiTitle : cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
        {/* Category Header */}
        <View style={styles.categoryInfoBox}>
          <Text style={styles.categoryHeaderTitle}>
            {isHindi && activeCategory.hindiTitle ? activeCategory.hindiTitle : activeCategory.title}
          </Text>
          <Text style={styles.categorySubtitle}>{activeCategory.subtitle}</Text>
        </View>

        {/* Triage Alert Banner if any sign checked */}
        {activeCheckedCount > 0 && (
          <View style={[styles.triageBanner, hasRedSignChecked ? styles.triageBannerRed : styles.triageBannerAmber]}>
            <Ionicons 
              name={hasRedSignChecked ? "alert-circle" : "warning"} 
              size={22} 
              color="#FFFFFF" 
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.triageAlertTitle}>
                {hasRedSignChecked 
                  ? (isHindi ? "लाल चेतावनी: तुरंत रेफरल आवश्यक!" : "RED ALERT: IMMEDIATE REFERRAL REQUIRED!")
                  : (isHindi ? "पीली चेतावनी: प्राथमिक केंद्र परामर्श जरूरी" : "AMBER ALERT: FACILITY CONSULTATION REQUIRED")}
              </Text>
              <Text style={styles.triageAlertSub}>
                {activeCheckedCount} {isHindi ? "खतरे के लक्षण पहचाने गए" : "danger signs confirmed"}
              </Text>
            </View>
          </View>
        )}

        {/* Danger Signs Checklist */}
        <View style={styles.checklistCard}>
          <Text style={styles.checklistSectionTitle}>
            {isHindi ? "लक्षणों का परीक्षण करें (जो मौजूद हैं उन पर टिक करें):" : "Examine Patient (Tap all signs present):"}
          </Text>

          {activeCategory.signs.map((sign) => {
            const isChecked = !!checkedSigns[sign.id];
            const isRed = sign.severity === "RED";
            return (
              <TouchableOpacity
                key={sign.id}
                style={[
                  styles.signRow, 
                  isChecked && (isRed ? styles.signRowRedActive : styles.signRowAmberActive)
                ]}
                onPress={() => toggleSign(sign.id)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={isChecked ? "checkbox" : "square-outline"}
                  size={22}
                  color={isChecked ? (isRed ? "#DC2626" : "#D97706") : "#94A3B8"}
                />
                <View style={styles.signTextCol}>
                  <Text style={[styles.signMainText, isChecked && styles.signTextChecked]}>
                    {isHindi && sign.hindiText ? sign.hindiText : sign.text}
                  </Text>
                  {isHindi && sign.hindiText && (
                    <Text style={styles.signSubEnText}>{sign.text}</Text>
                  )}
                </View>
                <View style={[styles.severityPill, isRed ? styles.pillRed : styles.pillAmber]}>
                  <Text style={styles.severityPillText}>{sign.severity}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Standard Protocol Directive */}
        <View style={styles.directiveCard}>
          <View style={styles.directiveHeader}>
            <Ionicons name="information-circle" size={18} color="#0D9488" />
            <Text style={styles.directiveTitle}>
              {isHindi ? "आधिकारिक एनएचएम प्रोटोकॉल निर्देश:" : "Official NHM Protocol Directive:"}
            </Text>
          </View>
          <Text style={styles.directiveText}>{activeCategory.recommendedAction}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity 
            style={[styles.referralBtn, activeCheckedCount === 0 && styles.btnDisabled]}
            onPress={handleCreateReferral}
            disabled={activeCheckedCount === 0}
          >
            <Ionicons name="document-text" size={18} color="#FFFFFF" />
            <Text style={styles.referralBtnText}>
              {isHindi ? "रेफरल पर्ची बनाएं" : "Create Referral Slip"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ambulanceBtn} onPress={onCall108}>
            <Ionicons name="call" size={18} color="#DC2626" />
            <Text style={styles.ambulanceBtnText}>108 Ambulance</Text>
          </TouchableOpacity>
        </View>

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
  categoryTabRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    gap: 6
  },
  categoryTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#F1F5F9"
  },
  categoryTabActive: {
    backgroundColor: "#0D9488"
  },
  categoryTabText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#475569",
    textAlign: "center"
  },
  categoryTabTextActive: {
    color: "#FFFFFF"
  },
  contentScroll: {
    paddingHorizontal: 16,
    paddingTop: 12
  },
  categoryInfoBox: {
    marginBottom: 10
  },
  categoryHeaderTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A"
  },
  categorySubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2
  },
  triageBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12
  },
  triageBannerRed: {
    backgroundColor: "#DC2626"
  },
  triageBannerAmber: {
    backgroundColor: "#D97706"
  },
  triageAlertTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF"
  },
  triageAlertSub: {
    fontSize: 11,
    color: "#FFFFFF",
    marginTop: 2
  },
  checklistCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    marginBottom: 12
  },
  checklistSectionTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 10
  },
  signRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F8FAFC",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 8
  },
  signRowRedActive: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FCA5A5"
  },
  signRowAmberActive: {
    backgroundColor: "#FFFBEB",
    borderColor: "#FDE68A"
  },
  signTextCol: {
    flex: 1
  },
  signMainText: {
    fontSize: 13,
    color: "#1E293B",
    fontWeight: "500"
  },
  signTextChecked: {
    fontWeight: "700",
    color: "#0F172A"
  },
  signSubEnText: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2
  },
  severityPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4
  },
  pillRed: {
    backgroundColor: "#FEE2E2"
  },
  pillAmber: {
    backgroundColor: "#FEF3C7"
  },
  severityPillText: {
    fontSize: 9.5,
    fontWeight: "800",
    color: "#991B1B"
  },
  directiveCard: {
    backgroundColor: "#F0FDFA",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#CCFBF1",
    marginBottom: 14
  },
  directiveHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4
  },
  directiveTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0F766E"
  },
  directiveText: {
    fontSize: 12,
    color: "#134E4A",
    lineHeight: 17
  },
  actionsRow: {
    flexDirection: "row",
    gap: 10
  },
  referralBtn: {
    flex: 1.4,
    backgroundColor: "#0D9488",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10
  },
  btnDisabled: {
    backgroundColor: "#94A3B8"
  },
  referralBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  ambulanceBtn: {
    flex: 1,
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10
  },
  ambulanceBtnText: {
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "700"
  }
});
