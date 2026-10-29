import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ language, onToggleLanguage, onOpenSupervisor }) {
  const isHindi = language === "hi";

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* Brand Left */}
        <View style={styles.brandContainer}>
          <View style={styles.logoBadge}>
            <Ionicons name="shield-checkmark" size={20} color="#FFFFFF" />
          </View>
          <View style={styles.titleCol}>
            <Text style={styles.brandTitle} numberOfLines={1}>
              {isHindi ? "प्रोटोकॉल साथी" : "Protocol Saathi"}
            </Text>
            <Text style={styles.brandSubtitle} numberOfLines={1}>
              {isHindi 
                ? "आधिकारिक स्वास्थ्य मार्गदर्शिका" 
                : "Official Offline Health Protocol Engine"}
            </Text>
          </View>
        </View>

        {/* Actions Right */}
        <View style={styles.actionsRow}>
          {/* Language Toggle: Compact & Clean */}
          <TouchableOpacity 
            style={styles.langToggle} 
            onPress={onToggleLanguage}
            accessibilityLabel="Toggle Language"
            activeOpacity={0.8}
          >
            <Ionicons name="language" size={13} color="#FFFFFF" />
            <Text style={styles.langText}>
              {isHindi ? "EN" : "हिंदी"}
            </Text>
          </TouchableOpacity>

          {/* Supervisor Call Shortcut */}
          <TouchableOpacity 
            style={styles.supervisorBtn} 
            onPress={onOpenSupervisor}
            accessibilityLabel="Supervisor ANM"
          >
            <Ionicons name="call" size={15} color="#0D9488" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Offline Status & Guiding Principle */}
      <View style={styles.statusRow}>
        <View style={styles.offlinePill}>
          <View style={styles.onlineDot} />
          <Text style={styles.offlineText}>
            {isHindi ? "100% ऑफ़लाइन" : "100% OFFLINE"}
          </Text>
        </View>
        <Text style={styles.mottoText} numberOfLines={1}>
          {isHindi 
            ? "\"सिस्टम को मजबूत करें; लोगों की रक्षा करें\"" 
            : "\"Strengthen the system; protect the people in it.\""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#042F2E",
    paddingTop: 46,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#134E4A"
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    marginRight: 8
  },
  logoBadge: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: "#0D9488",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#0D9488",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3
  },
  titleCol: {
    flex: 1
  },
  brandTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: -0.3
  },
  brandSubtitle: {
    fontSize: 10.5,
    color: "#99F6E4",
    marginTop: 1
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  langToggle: {
    backgroundColor: "#134E4A",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#2DD4BF"
  },
  langText: {
    color: "#FFFFFF",
    fontSize: 11.5,
    fontWeight: "700"
  },
  supervisorBtn: {
    backgroundColor: "#CCFBF1",
    width: 30,
    height: 30,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  statusRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "rgba(20, 184, 166, 0.2)"
  },
  offlinePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
    gap: 4
  },
  onlineDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#10B981"
  },
  offlineText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#6EE7B7",
    letterSpacing: 0.2
  },
  mottoText: {
    fontSize: 9.5,
    color: "#5EEAD4",
    fontStyle: "italic",
    flexShrink: 1,
    marginLeft: 8
  }
});
