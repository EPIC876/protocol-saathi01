import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getANMContact, saveANMContact } from "../utils/storage";

export default function SupervisorSettingsScreen({ language, onContactUpdated, onPreviewSplash }) {
  const isHindi = language === "hi";
  const [anmName, setAnmName] = useState("");
  const [anmPhone, setAnmPhone] = useState("");
  const [subCenter, setSubCenter] = useState("");
  const [phcCenter, setPhcCenter] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getANMContact();
    setAnmName(isHindi && data.name ? data.name : (data.nameEn || data.name || ""));
    setAnmPhone(data.phone || "");
    setSubCenter(data.subCenter || "");
    setPhcCenter(data.phcCenter || "");
  };

  const handleSave = async () => {
    const updated = {
      name: anmName || (isHindi ? "सुनीता देवी (एएनएम दीदी)" : "Supervising ANM"),
      phone: anmPhone || "+919876543210",
      subCenter: subCenter || (isHindi ? "कल्याणपुर उप-केंद्र" : "Sub-Center"),
      phcCenter: phcCenter || (isHindi ? "रामपुर 24x7 प्राथमिक स्वास्थ्य केंद्र" : "24x7 PHC"),
      ambulancePhone: "108",
      sncuHelpline: "102"
    };

    await saveANMContact(updated);
    setIsSaved(true);
    if (onContactUpdated) onContactUpdated();
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Guiding Principle Card */}
      <View style={styles.principleCard}>
        <View style={styles.principleHeader}>
          <Ionicons name="shield-checkmark" size={22} color="#0D9488" />
          <Text style={styles.principleTitle}>
            {isHindi ? "हैकथॉन मार्गदर्शक सिद्धांत" : "Hackathon Guiding Track Principle"}
          </Text>
        </View>
        <Text style={styles.principleQuote}>
          {isHindi 
            ? "\"सिस्टम को मजबूत करें; इसमें काम करने वाले लोगों की रक्षा करें।\"" 
            : "\"Strengthen the system; protect the people in it.\""}
        </Text>
        <Text style={styles.principleExpl}>
          {isHindi 
            ? "प्रोटोकॉल साथी आशा कार्यकर्ताओं को सुरक्षित रखता है। यह कभी भी मनगढ़ंत एआई सलाह नहीं देता, बल्कि अधिकृत सरकारी दिशा-निर्देश दिखाता है और कठिन मामलों में सीधे पर्यवेक्षक नर्स (एएनएम दीदी) व 108 एम्बुलेंस से जोड़ता है।" 
            : "Protocol Saathi safeguards frontline health workers. By retrieving exact official MoHFW protocols and strictly refusing out-of-scope queries, it protects both workers and patients from medical hallucinations."}
        </Text>
      </View>

      {/* ANM Configuration Form */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="person-circle" size={20} color="#0D9488" />
          <Text style={styles.cardTitle}>
            {isHindi ? "पर्यवेक्षक एएनएम (नर्स) विवरण एवं संपर्क" : "Supervising ANM (Nurse) Directory"}
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{isHindi ? "एएनएम दीदी का नाम" : "ANM Name"}</Text>
          <TextInput
            style={styles.input}
            value={anmName}
            onChangeText={setAnmName}
            placeholder={isHindi ? "उदा. सुनीता देवी (एएनएम)" : "e.g. Sunita Devi (ANM)"}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{isHindi ? "एएनएम फोन नंबर (कॉल व एसएमएस हेतु)" : "Phone Number (Call & SMS)"}</Text>
          <TextInput
            style={styles.input}
            value={anmPhone}
            onChangeText={setAnmPhone}
            placeholder="e.g. +919876543210"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{isHindi ? "आवंटित उप-केंद्र (Sub-Center)" : "Assigned Sub-Center"}</Text>
          <TextInput
            style={styles.input}
            value={subCenter}
            onChangeText={setSubCenter}
            placeholder={isHindi ? "उदा. कल्याणपुर उप-केंद्र" : "e.g. Kalyanpur Sub-Center"}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{isHindi ? "संबद्ध प्राथमिक स्वास्थ्य केंद्र (24x7 PHC / CHC)" : "Linked 24x7 PHC / CHC"}</Text>
          <TextInput
            style={styles.input}
            value={phcCenter}
            onChangeText={setPhcCenter}
            placeholder={isHindi ? "उदा. रामपुर 24x7 प्राथमिक स्वास्थ्य केंद्र" : "e.g. Rampur 24x7 PHC"}
          />
        </View>

        <TouchableOpacity 
          style={[styles.saveBtn, isSaved && styles.saveBtnSuccess]} 
          onPress={handleSave}
        >
          <Ionicons name={isSaved ? "checkmark" : "save-outline"} size={18} color="#FFFFFF" />
          <Text style={styles.saveBtnText}>
            {isSaved 
              ? (isHindi ? "विवरण सफलतापूर्वक सहेजा गया!" : "Settings Saved Successfully!") 
              : (isHindi ? "सुपरवाइजर विवरण सहेजें" : "Save Supervisor Contact")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Helplines Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="call" size={20} color="#DC2626" />
          <Text style={styles.cardTitle}>
            {isHindi ? "राष्ट्रीय आपातकालीन नंबर (100% ऑफ़लाइन)" : "National Emergency Lines (Offline)"}
          </Text>
        </View>

        <View style={styles.helplineRow}>
          <View>
            <Text style={styles.helplineTitle}>
              {isHindi ? "108 राष्ट्रीय आपातकालीन एम्बुलेंस" : "108 National Ambulance"}
            </Text>
            <Text style={styles.helplineSub}>
              {isHindi ? "24x7 आपातकालीन मरीज परिवहन सेवा" : "24x7 Emergency Medical Transport"}
            </Text>
          </View>
          <View style={styles.helplineBadge}>
            <Text style={styles.helplineBadgeText}>DIAL 108</Text>
          </View>
        </View>

        <View style={styles.helplineRow}>
          <View>
            <Text style={styles.helplineTitle}>
              {isHindi ? "102 जननी शिशु सुरक्षा वाहन" : "102 Janani Shishu Vahan"}
            </Text>
            <Text style={styles.helplineSub}>
              {isHindi ? "गर्भवती माता व बीमार नवजात निशुल्क वाहन" : "Pregnant Mother & Sick Infant Transport"}
            </Text>
          </View>
          <View style={styles.helplineBadge}>
            <Text style={styles.helplineBadgeText}>DIAL 102</Text>
          </View>
        </View>
      </View>

      {/* Splash Screen Demo Action */}
      {onPreviewSplash && (
        <TouchableOpacity
          style={styles.splashPreviewBtn}
          onPress={onPreviewSplash}
          activeOpacity={0.8}
        >
          <Ionicons name="play-circle" size={20} color="#0D9488" />
          <Text style={styles.splashPreviewText}>
            {isHindi ? "स्प्लैश स्क्रीन एनिमेशन चलाएं (लोडिंग बार)" : "Replay Splash Screen Animation (Loading Bar)"}
          </Text>
        </TouchableOpacity>
      )}

      {/* Architecture & Verification Badge */}
      <View style={styles.certCard}>
        <Ionicons name="ribbon-outline" size={28} color="#0D9488" />
        <View style={{ flex: 1 }}>
          <Text style={styles.certTitle}>
            {isHindi ? "प्रोटोकॉल सत्यापन व सुरक्षा इंजन" : "Deterministic Protocol Verification Engine"}
          </Text>
          <Text style={styles.certSubtitle}>
            {isHindi 
              ? "हैकटूबर हैकथॉन प्रोजेक्ट • एक्सपो गो पर पूर्णतः ऑफ़लाइन संचालित। स्वास्थ्य मंत्रालय (MoHFW) भारत सरकार के आधिकारिक दस्तावेजों पर आधारित।" 
              : "Built for Hacktober Hackathon • Complete Edge Execution on Expo Go. Zero external LLM API dependency. Exact document citation compliance with MoHFW India."}
          </Text>
        </View>
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 16,
    paddingTop: 12
  },
  principleCard: {
    backgroundColor: "#042F2E",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#134E4A"
  },
  principleHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  },
  principleTitle: {
    color: "#5EEAD4",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5
  },
  principleQuote: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    fontStyle: "italic",
    marginBottom: 8
  },
  principleExpl: {
    color: "#99F6E4",
    fontSize: 12,
    lineHeight: 18
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    marginBottom: 14
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 8
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A"
  },
  inputGroup: {
    marginBottom: 12
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 4
  },
  input: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 13,
    color: "#1E293B"
  },
  saveBtn: {
    backgroundColor: "#0D9488",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 6
  },
  saveBtnSuccess: {
    backgroundColor: "#059669"
  },
  saveBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  helplineRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9"
  },
  helplineTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B"
  },
  helplineSub: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2
  },
  helplineBadge: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  helplineBadgeText: {
    color: "#DC2626",
    fontSize: 10,
    fontWeight: "800"
  },
  splashPreviewBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FDFA",
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#0D9488",
    gap: 8,
    marginBottom: 16
  },
  splashPreviewText: {
    color: "#0D9488",
    fontWeight: "700",
    fontSize: 13
  },
  certCard: {
    backgroundColor: "#F0FDFA",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#CCFBF1",
    flexDirection: "row",
    gap: 12,
    alignItems: "center"
  },
  certTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#0F766E"
  },
  certSubtitle: {
    fontSize: 11,
    color: "#134E4A",
    marginTop: 3,
    lineHeight: 16
  }
});
