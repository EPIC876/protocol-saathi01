import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar, 
  Linking, 
  Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./src/components/Header";
import EscalationModal from "./src/components/EscalationModal";
import AssistantScreen from "./src/screens/AssistantScreen";
import DangerSignsScreen from "./src/screens/DangerSignsScreen";
import ProtocolLibraryScreen from "./src/screens/ProtocolLibraryScreen";
import FacilitiesScreen from "./src/screens/FacilitiesScreen";
import ReferralHistoryScreen from "./src/screens/ReferralHistoryScreen";
import SupervisorSettingsScreen from "./src/screens/SupervisorSettingsScreen";
import SplashScreen from "./src/screens/SplashScreen";
import { getANMContact, getAppSettings, saveAppSettings } from "./src/utils/storage";

export default function App() {
  // First time opening defaults to Hindi ("hi") as requested!
  const [language, setLanguage] = useState("hi");
  const [activeTab, setActiveTab] = useState("ASSISTANT"); // "ASSISTANT" | "DANGER" | "PROTOCOLS" | "FACILITIES" | "REFERRALS" | "SETTINGS"
  const [anmContact, setAnmContact] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  
  // Escalation Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [modalProtocol, setModalProtocol] = useState(null);
  const [modalRefusalData, setModalRefusalData] = useState(null);
  const [referralRefreshCount, setReferralRefreshCount] = useState(0);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    const contact = await getANMContact();
    setAnmContact(contact);
    const settings = await getAppSettings();
    if (settings && settings.language) {
      setLanguage(settings.language);
    }
  };

  const handleToggleLanguage = async () => {
    const nextLang = language === "hi" ? "en" : "hi";
    setLanguage(nextLang);
    await saveAppSettings({ language: nextLang });
  };

  const handleOpenEscalation = (protocol = null, refusalData = null, checkedSigns = null) => {
    setModalProtocol(protocol);
    setModalRefusalData(refusalData);
    setModalVisible(true);
  };

  const handleCall108 = () => {
    Linking.openURL("tel:108").catch(() => {
      Alert.alert("Ambulance", "Please dial 108 manually.");
    });
  };

  const isHindi = language === "hi";

  if (showSplash) {
    return (
      <SplashScreen
        language={language}
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#042F2E" />
      
      {/* Top Header with Offline Badge & Language Switcher */}
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenSupervisor={() => setActiveTab("SETTINGS")}
      />

      {/* Main Screen Body */}
      <View style={styles.body}>
        {activeTab === "ASSISTANT" && (
          <AssistantScreen
            onEscalateANM={handleOpenEscalation}
            onCall108={handleCall108}
            language={language}
          />
        )}

        {activeTab === "DANGER" && (
          <DangerSignsScreen
            onEscalateANM={handleOpenEscalation}
            onCall108={handleCall108}
            language={language}
          />
        )}

        {activeTab === "PROTOCOLS" && (
          <ProtocolLibraryScreen
            onEscalateANM={handleOpenEscalation}
            onCall108={handleCall108}
            language={language}
          />
        )}

        {activeTab === "FACILITIES" && (
          <FacilitiesScreen
            language={language}
          />
        )}

        {activeTab === "REFERRALS" && (
          <ReferralHistoryScreen
            language={language}
            refreshTrigger={referralRefreshCount}
          />
        )}

        {activeTab === "SETTINGS" && (
          <SupervisorSettingsScreen
            language={language}
            onContactUpdated={loadInitialData}
            onPreviewSplash={() => setShowSplash(true)}
          />
        )}
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        {/* Tab 1: Assistant */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("ASSISTANT")}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === "ASSISTANT" ? "chatbubbles" : "chatbubbles-outline"}
            size={20}
            color={activeTab === "ASSISTANT" ? "#0D9488" : "#64748B"}
          />
          <Text 
            style={[styles.navLabel, activeTab === "ASSISTANT" && styles.navLabelActive]} 
            numberOfLines={1}
          >
            {isHindi ? "सहायक" : "Assistant"}
          </Text>
        </TouchableOpacity>

        {/* Tab 2: Danger Signs */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("DANGER")}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === "DANGER" ? "warning" : "warning-outline"}
            size={20}
            color={activeTab === "DANGER" ? "#DC2626" : "#64748B"}
          />
          <Text 
            style={[styles.navLabel, activeTab === "DANGER" && styles.navLabelActiveRed]} 
            numberOfLines={1}
          >
            {isHindi ? "खतरे" : "Danger"}
          </Text>
        </TouchableOpacity>

        {/* Tab 3: Protocols */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("PROTOCOLS")}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === "PROTOCOLS" ? "book" : "book-outline"}
            size={20}
            color={activeTab === "PROTOCOLS" ? "#0D9488" : "#64748B"}
          />
          <Text 
            style={[styles.navLabel, activeTab === "PROTOCOLS" && styles.navLabelActive]} 
            numberOfLines={1}
          >
            {isHindi ? "प्रोटोकॉल" : "Protocols"}
          </Text>
        </TouchableOpacity>

        {/* Tab 4: Facilities & Emergency Numbers */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("FACILITIES")}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === "FACILITIES" ? "business" : "business-outline"}
            size={20}
            color={activeTab === "FACILITIES" ? "#0D9488" : "#64748B"}
          />
          <Text 
            style={[styles.navLabel, activeTab === "FACILITIES" && styles.navLabelActive]} 
            numberOfLines={1}
          >
            {isHindi ? "केंद्र/नंबर" : "Facilities"}
          </Text>
        </TouchableOpacity>

        {/* Tab 5: Referrals */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("REFERRALS")}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === "REFERRALS" ? "document-text" : "document-text-outline"}
            size={20}
            color={activeTab === "REFERRALS" ? "#0D9488" : "#64748B"}
          />
          <Text 
            style={[styles.navLabel, activeTab === "REFERRALS" && styles.navLabelActive]} 
            numberOfLines={1}
          >
            {isHindi ? "पर्ची" : "Referrals"}
          </Text>
        </TouchableOpacity>

        {/* Tab 6: Supervisor */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("SETTINGS")}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === "SETTINGS" ? "shield" : "shield-outline"}
            size={20}
            color={activeTab === "SETTINGS" ? "#0D9488" : "#64748B"}
          />
          <Text 
            style={[styles.navLabel, activeTab === "SETTINGS" && styles.navLabelActive]} 
            numberOfLines={1}
          >
            {isHindi ? "एएनएम" : "Supervisor"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ANM Escalation and Referral Slip Modal */}
      <EscalationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        protocol={modalProtocol}
        refusalData={modalRefusalData}
        anmContact={anmContact}
        language={language}
        onReferralSaved={() => setReferralRefreshCount(c => c + 1)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#042F2E"
  },
  body: {
    flex: 1,
    backgroundColor: "#F8FAFC"
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingVertical: 6,
    paddingHorizontal: 2,
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    flex: 1
  },
  navLabel: {
    fontSize: 9.5,
    fontWeight: "600",
    color: "#64748B",
    marginTop: 2
  },
  navLabelActive: {
    color: "#0D9488",
    fontWeight: "800"
  },
  navLabelActiveRed: {
    color: "#DC2626",
    fontWeight: "800"
  }
});
