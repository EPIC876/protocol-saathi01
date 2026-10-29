import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { OFFICIAL_PROTOCOLS } from "../data/officialProtocols";
import ProtocolCard from "../components/ProtocolCard";

export default function ProtocolLibraryScreen({ onEscalateANM, onCall108, language }) {
  const isHindi = language === "hi";
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [expandedProtocolId, setExpandedProtocolId] = useState(null);

  const FILTERS = [
    { id: "ALL", label: isHindi ? "सभी प्रोटोकॉल" : "All Protocols" },
    { id: "Adult & General Emergencies", label: isHindi ? "वयस्क व आपातकाल" : "Adult Emergencies" },
    { id: "Common Daily Problems", label: isHindi ? "दैनिक सामान्य रोग" : "Daily Problems" },
    { id: "Child Health (IMNCI)", label: isHindi ? "बाल स्वास्थ्य (IMNCI)" : "Child (IMNCI)" },
    { id: "Newborn Care (HBNC)", label: isHindi ? "नवजात (HBNC)" : "Newborn (HBNC)" },
    { id: "Maternal Health (ANC)", label: isHindi ? "मातृ स्वास्थ्य (ANC/PNC)" : "Maternal Health" },
    { id: "Nutrition (NRC)", label: isHindi ? "पोषण व सैम (NRC)" : "Nutrition" },
    { id: "Infectious Diseases (NVBDCP)", label: isHindi ? "संक्रामक रोग" : "Infections" }
  ];

  const filteredList = selectedFilter === "ALL" 
    ? OFFICIAL_PROTOCOLS 
    : OFFICIAL_PROTOCOLS.filter(p => 
        p.category.includes(selectedFilter) || 
        selectedFilter.includes(p.category) || 
        (p.hindiCategory && (p.hindiCategory.includes(selectedFilter) || selectedFilter.includes(p.hindiCategory)))
      );

  return (
    <View style={styles.container}>
      {/* Category Filter Pills */}
      <View style={styles.filterBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FILTERS.map((f) => {
            const isSelected = selectedFilter === f.id;
            return (
              <TouchableOpacity
                key={f.id}
                style={[styles.filterChip, isSelected && styles.filterChipActive]}
                onPress={() => setSelectedFilter(f.id)}
              >
                <Text style={[styles.filterText, isSelected && styles.filterTextActive]}>
                  {f.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView style={styles.listScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.headerInfo}>
          <Text style={styles.countText}>
            {filteredList.length} {isHindi ? "आधिकारिक एसओपी उपलब्ध (100% ऑफ़लाइन)" : "Official SOPs Verified & Offline"}
          </Text>
        </View>

        {filteredList.map((protocol) => {
          const isExpanded = expandedProtocolId === protocol.id;
          const isRed = protocol.triageLevel === "RED";
          const isGreen = protocol.triageLevel === "GREEN";
          const docTitle = isHindi && protocol.hindiGuidelineDocument 
            ? protocol.hindiGuidelineDocument 
            : protocol.guidelineDocument;
          const displayTitle = isHindi && protocol.hindiTitle 
            ? protocol.hindiTitle 
            : protocol.title;

          if (isExpanded) {
            return (
              <View key={protocol.id} style={styles.expandedWrapper}>
                <TouchableOpacity 
                  style={styles.collapseHeaderBtn}
                  onPress={() => setExpandedProtocolId(null)}
                >
                  <Ionicons name="chevron-up-circle" size={18} color="#0D9488" />
                  <Text style={styles.collapseText}>
                    {isHindi ? "विवरण संक्षिप्त करें (बंद करें)" : "Collapse Protocol Details"}
                  </Text>
                </TouchableOpacity>

                <ProtocolCard
                  protocol={protocol}
                  onEscalateANM={(prot, checkedSigns) => onEscalateANM(prot, null, checkedSigns)}
                  onCall108={onCall108}
                  language={language}
                />
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={protocol.id}
              style={styles.summaryCard}
              onPress={() => setExpandedProtocolId(protocol.id)}
              activeOpacity={0.75}
            >
              <View style={styles.summaryTopRow}>
                <View style={styles.authorityPill}>
                  <Text style={styles.authorityPillText} numberOfLines={1}>{docTitle}</Text>
                </View>
                <View style={styles.pageBadge}>
                  <Text style={styles.pageBadgeText}>{protocol.pageNumber}</Text>
                </View>
              </View>

              <Text style={styles.summaryTitle}>
                {displayTitle}
              </Text>

              <View style={styles.summaryBottomRow}>
                <View style={[
                  styles.triageTag, 
                  isRed ? styles.triageRed : (isGreen ? styles.triageGreen : styles.triageAmber)
                ]}>
                  <Text style={[
                    styles.triageTagText, 
                    isRed ? styles.textRed : (isGreen ? styles.textGreen : styles.textAmber)
                  ]}>
                    {isRed 
                      ? (isHindi ? "आपातकालीन (लाल)" : "RED EMERGENCY") 
                      : (isGreen ? (isHindi ? "प्राथमिक देखभाल (हरा)" : "GREEN PRIMARY") : (isHindi ? "त्वरित देखभाल (पीला)" : "AMBER FACILITY"))}
                  </Text>
                </View>

                <View style={styles.openDetailsRow}>
                  <Text style={styles.openDetailsText}>
                    {isHindi ? "आधिकारिक पृष्ठ खोलें" : "Open Official Page"}
                  </Text>
                  <Ionicons name="chevron-forward" size={14} color="#0D9488" />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

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
  filterBar: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0"
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
    marginRight: 8
  },
  filterChipActive: {
    backgroundColor: "#0D9488"
  },
  filterText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600"
  },
  filterTextActive: {
    color: "#FFFFFF"
  },
  listScroll: {
    paddingHorizontal: 16,
    paddingTop: 12
  },
  headerInfo: {
    marginBottom: 8
  },
  countText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "600"
  },
  summaryCard: {
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
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6
  },
  authorityPill: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    flex: 1,
    marginRight: 8
  },
  authorityPillText: {
    fontSize: 10,
    color: "#475569",
    fontWeight: "700"
  },
  pageBadge: {
    backgroundColor: "#E6FFFA",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#99F6E4"
  },
  pageBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#0F766E"
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    marginVertical: 4
  },
  summaryBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9"
  },
  triageTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4
  },
  triageRed: {
    backgroundColor: "#FEE2E2"
  },
  triageAmber: {
    backgroundColor: "#FEF3C7"
  },
  triageGreen: {
    backgroundColor: "#DCFCE7"
  },
  triageTagText: {
    fontSize: 9.5,
    fontWeight: "800"
  },
  textRed: {
    color: "#DC2626"
  },
  textAmber: {
    color: "#D97706"
  },
  textGreen: {
    color: "#15803D"
  },
  openDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  openDetailsText: {
    fontSize: 12,
    color: "#0D9488",
    fontWeight: "700"
  },
  expandedWrapper: {
    marginBottom: 12
  },
  collapseHeaderBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#E6FFFA",
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 6
  },
  collapseText: {
    fontSize: 12,
    color: "#0D9488",
    fontWeight: "700"
  }
});
