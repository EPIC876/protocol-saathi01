import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  useWindowDimensions, 
  ScrollView 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NAV_SECTIONS, NAV_THEME } from "../constants/navConfig";

export default function HomeScreen({ language = "hi", onSelectSection }) {
  const isHindi = language === "hi";
  const { width: windowWidth } = useWindowDimensions();

  // 2 columns with 16px padding on sides and 12px gap between columns
  const cardWidth = (windowWidth - 44) / 2;

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* 2-Column x 3-Row Grid */}
        <View style={styles.gridContainer}>
          {NAV_SECTIONS.map((section) => {
            const isDanger = section.id === "DANGER";
            const mainLabel = isHindi ? section.hindiLabel : section.englishLabel;
            const subLabel = isHindi ? section.englishLabel : section.hindiLabel;

            return (
              <TouchableOpacity
                key={section.id}
                style={[
                  styles.card,
                  { width: cardWidth },
                  isDanger ? styles.cardDanger : styles.cardTeal
                ]}
                onPress={() => onSelectSection && onSelectSection(section.id)}
                activeOpacity={0.82}
                accessibilityRole="button"
                accessibilityLabel={`${mainLabel}, ${subLabel}`}
              >
                {/* Large Icon Badge */}
                <View 
                  style={[
                    styles.iconCircle,
                    { backgroundColor: isDanger ? "#FEE2E2" : "#CCFBF1" }
                  ]}
                >
                  <Ionicons
                    name={section.icon}
                    size={30}
                    color={section.accentColor}
                  />
                </View>

                {/* Main Label */}
                <Text 
                  style={[
                    styles.cardTitle,
                    { color: isDanger ? "#DC2626" : "#0F172A" }
                  ]}
                  numberOfLines={1}
                >
                  {mainLabel}
                </Text>

                {/* Subtitle (Bilingual following toggle) */}
                <Text style={styles.cardSubtitle} numberOfLines={1}>
                  {subLabel}
                </Text>

                {/* Detail Footer */}
                <View style={styles.cardFooter}>
                  <Text 
                    style={[
                      styles.cardDetailText,
                      { color: isDanger ? "#DC2626" : "#0D9488" }
                    ]}
                    numberOfLines={1}
                  >
                    {isHindi ? section.hindiSubtitle : section.englishSubtitle}
                  </Text>
                  <Ionicons 
                    name="chevron-forward" 
                    size={13} 
                    color={isDanger ? "#EF4444" : "#0D9488"} 
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Tagline below the grid */}
        <View style={styles.taglineContainer}>
          <Ionicons name="shield-checkmark-outline" size={16} color="#0D9488" style={{ marginRight: 6 }} />
          <Text style={styles.taglineText}>
            {isHindi 
              ? "सिस्टम को मजबूत करें; लोगों की रक्षा करें" 
              : "Strengthen the system; protect the people in it."}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAV_THEME.bgLight,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 72,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
  card: {
    backgroundColor: NAV_THEME.cardBg,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 136,
    borderWidth: 1.5,
    // Soft shadow (iOS)
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    // Elevation (Android)
    elevation: 4,
  },
  cardTeal: {
    borderColor: "#E2E8F0",
  },
  cardDanger: {
    borderColor: "#FECACA",
    backgroundColor: "#FFFDFD",
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16.5,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 11.5,
    fontWeight: "600",
    color: NAV_THEME.textMuted,
    textAlign: "center",
    marginBottom: 6,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    width: "100%",
  },
  cardDetailText: {
    fontSize: 10,
    fontWeight: "700",
    marginRight: 2,
  },
  taglineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  taglineText: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#64748B",
    textAlign: "center",
    fontStyle: "italic",
  },
});
