import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Keyboard 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { searchOfficialProtocols } from "../engine/protocolMatcher";
import ProtocolCard from "../components/ProtocolCard";
import RefusalBanner from "../components/RefusalBanner";

export default function AssistantScreen({ 
  onEscalateANM, 
  onCall108, 
  language 
}) {
  const isHindi = language === "hi";
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const QUICK_SCENARIOS = [
    // Emergency & Trauma
    { label: isHindi ? "🐍 सर्पदंश (सांप काटना)" : "🐍 Snakebite First-Aid", query: "saap katna snakebite asv limb immobilize" },
    { label: isHindi ? "🐕 कुत्ता काटना (रेबीज)" : "🐕 Dog Bite & Rabies", query: "kutta katna dog bite wash 15 minutes arv" },
    { label: isHindi ? "❤️ सीने में दर्द / हार्ट अटैक" : "❤️ Chest Pain / Heart Attack", query: "seene me dard severe chest pain left arm cold sweat" },
    { label: isHindi ? "🧠 स्ट्रोक व लकवा (FAST)" : "🧠 Stroke / Paralysis (FAST)", query: "lakwa stroke face drooping arm weakness slurred speech" },
    { label: isHindi ? "🧪 कीटनाशक जहर निगलना" : "🧪 Pesticide Poisoning", query: "keetnashak jahar poison pinpoint pupils froth mouth" },
    { label: isHindi ? "☀️ लू लगना (हीट स्ट्रोक)" : "☀️ Heat Stroke (Loo)", query: "loo lagna heat stroke tapghat cool water" },
    { label: isHindi ? "💨 दमा का दौरा (अस्थमा)" : "💨 Asthma Attack", query: "dama asthma attack wheezing saans phoolna salbutamol" },
    { label: isHindi ? "🌊 हैजा व अत्यधिक दस्त" : "🌊 Cholera / Watery Stools", query: "haija cholera rice water stool adult dehydration" },
    // Daily Common Problems
    { label: isHindi ? "🔥 जलने पर प्राथमिक उपचार" : "🔥 Burn First-Aid", query: "jalna burns superficial scald cool running water" },
    { label: isHindi ? "🩹 चोट व घाव ड्रेसिंग" : "🩹 Wound Cleaning & TT", query: "chot ghav minor cut wound betadine dressing" },
    { label: isHindi ? "🧴 खाज/खुजली (स्केबीज)" : "🧴 Scabies Itching", query: "khujli scabies night itching between fingers permethrin" },
    { label: isHindi ? "👁️ आँख आना (कंजंक्टिवाइटिस)" : "👁️ Eye Conjunctivitis", query: "aankh aana red eye discharge conjunctivitis drops" },
    // Maternal & Infant
    { label: isHindi ? "👶 नवजात दूध नहीं पी रहा" : "👶 Newborn Not Feeding", query: "baby not feeding lethargic cold navjat" },
    { label: isHindi ? "💧 दस्त व निर्जलीकरण" : "💧 Diarrhea & Dehydration", query: "loose motion sunken eyes skin pinch dast" },
    { label: isHindi ? "🫁 तेज़ सांस व निमोनिया" : "🫁 Fast Breathing / Pneumonia", query: "child fast breathing chest indrawing cough" },
    { label: isHindi ? "🤰 गर्भावस्था तेज़ सिरदर्द" : "🤰 Severe Pregnancy Headache", query: "pregnant woman severe headache swelling vision blurred" },
    { label: isHindi ? "🩸 प्रसव बाद रक्तस्राव (PPH)" : "🩸 Postpartum Bleeding (PPH)", query: "heavy bleeding after delivery soaking pads pph" },
    // Guardrail Tests
    { label: isHindi ? "🚫 टेस्ट: शिशु को एस्पिरिन (रोक)" : "🚫 Test: Aspirin for infant (Refusal)", query: "aspirin for baby fever dosage disprin" },
    { label: isHindi ? "🚫 टेस्ट: घर पर गर्भपात (रोक)" : "🚫 Test: Perform abortion (Refusal)", query: "how to perform abortion at home" }
  ];

  const handleSearch = (textToSearch) => {
    Keyboard.dismiss();
    const target = textToSearch !== undefined ? textToSearch : query;
    if (!target.trim()) return;

    const result = searchOfficialProtocols(target);
    setSearchResult(result);
  };

  const handleClear = () => {
    setQuery("");
    setSearchResult(null);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar Input */}
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#0D9488" />
          <TextInput
            style={styles.input}
            placeholder={
              isHindi 
                ? "लक्षण लिखें (उदा. सांप काटना, सीने में दर्द, जलना, दस्त, घाव)..." 
                : "Enter symptoms (e.g. snakebite, chest pain, burn, cut, fever)..."
            }
            placeholderTextColor="#94A3B8"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={() => handleSearch()}
            returnKeyType="search"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={handleClear} style={styles.clearBtn}>
              <Ionicons name="close-circle" size={18} color="#94A3B8" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity 
          style={styles.searchBtn} 
          onPress={() => handleSearch()}
          activeOpacity={0.8}
        >
          <Text style={styles.searchBtnText}>
            {isHindi ? "खोजें" : "Search"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick Clinical Scenario Chips */}
      <View style={styles.scenariosSection}>
        <Text style={styles.scenariosTitle}>
          {isHindi ? "त्वरित स्थितियां (टैप करें):" : "Quick Clinical Scenarios (Tap to view):"}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
          {QUICK_SCENARIOS.map((item, idx) => {
            const isRefusalTest = item.query.includes("aspirin") || item.query.includes("abortion");
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.scenarioChip, isRefusalTest && styles.scenarioChipRefusal]}
                onPress={() => {
                  setQuery(item.query);
                  handleSearch(item.query);
                }}
              >
                <Text style={[styles.chipText, isRefusalTest && styles.chipTextRefusal]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Dynamic Results Presentation */}
      {searchResult && (
        <View style={styles.resultsArea}>
          {/* CASE 1: STRICT REFUSAL TRIGGERED */}
          {searchResult.status === "REFUSED" && (
            <RefusalBanner
              refusalData={searchResult.guardrail.refusalData}
              onEscalateANM={(data) => onEscalateANM(null, data)}
              language={language}
            />
          )}

          {/* CASE 2: MATCHED OFFICIAL PROTOCOL */}
          {searchResult.status === "MATCHED" && (
            <View>
              {searchResult.isEmergency && (
                <View style={styles.emergencyBanner}>
                  <Ionicons name="alert" size={18} color="#FFFFFF" />
                  <Text style={styles.emergencyBannerText}>
                    {isHindi 
                      ? "खतरे के निशान पाए गए! तत्काल एएनएम एवं 108 को सूचित करें।" 
                      : "CRITICAL DANGER SIGNS DETECTED! Urgent ANM & 108 ambulance referral."}
                  </Text>
                </View>
              )}

              <ProtocolCard
                protocol={searchResult.result}
                onEscalateANM={(protocol, checkedSigns) => onEscalateANM(protocol, null, checkedSigns)}
                onCall108={onCall108}
                language={language}
              />
            </View>
          )}

          {/* CASE 3: AMBIGUOUS / UNRESOLVED QUERY */}
          {searchResult.status === "UNRESOLVED_AMBIGUOUS" && (
            <View style={styles.ambiguousCard}>
              <View style={styles.ambiguousHeaderRow}>
                <Ionicons name="help-buoy" size={24} color="#D97706" />
                <View style={{ flex: 1 }}>
                  <Text style={styles.ambiguousTitle}>
                    {isHindi ? "कोई सत्यापित आधिकारिक पृष्ठ नहीं मिला" : "No Verified Protocol Matched"}
                  </Text>
                  <Text style={styles.ambiguousSubtitle}>
                    {isHindi 
                      ? "अनुमान लगाकर दवा देना वर्जित है। कृपया पर्यवेक्षक एएनएम से परामर्श लें।" 
                      : "AI guessing is disabled to protect patient safety. Escalate to supervising ANM."}
                  </Text>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.ambiguousEscalateBtn}
                onPress={() => onEscalateANM(null, { 
                  reason: "Ambiguous field inquiry requiring clinical verification",
                  reasonHi: "अस्पष्ट फील्ड समस्या जिसके लिए एएनएम परामर्श आवश्यक है"
                })}
              >
                <Ionicons name="call" size={18} color="#FFFFFF" />
                <Text style={styles.ambiguousBtnText}>
                  {isHindi ? "एएनएम दीदी से सीधे पूछें" : "Consult Supervising ANM Directly"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {/* Initial Guide / Operational Principles */}
      {!searchResult && (
        <View style={styles.introContainer}>
          <View style={styles.principleCard}>
            <View style={styles.principleHeader}>
              <Ionicons name="shield-checkmark" size={20} color="#0D9488" />
              <Text style={styles.principleTitle}>
                {isHindi ? "सुरक्षित फील्ड कार्यप्रणाली गारंटी" : "Safe Field Operation Guarantees"}
              </Text>
            </View>
            <View style={styles.principleList}>
              <View style={styles.principleItem}>
                <Ionicons name="checkmark-circle" size={16} color="#0D9488" />
                <Text style={styles.principleText}>
                  <Text style={styles.boldText}>
                    {isHindi ? "केवल आधिकारिक पृष्ठ:" : "Official SOPs Only:"}
                  </Text>{" "}
                  {isHindi 
                    ? "मातृ, शिशु, दैनिक घाव, जलना, सर्पदंश व आपातकाल के आधिकारिक MoHFW दिशा-निर्देश।" 
                    : "Surfaces exact verified pages from MoHFW & NHM handbooks."}
                </Text>
              </View>

              <View style={styles.principleItem}>
                <Ionicons name="checkmark-circle" size={16} color="#0D9488" />
                <Text style={styles.principleText}>
                  <Text style={styles.boldText}>
                    {isHindi ? "जीरो एआई अनुमान:" : "Zero AI Guesswork:"}
                  </Text>{" "}
                  {isHindi 
                    ? "दायरे से बाहर या संदिग्ध सवालों पर जवाब देने से सख्ती से मना करता है।" 
                    : "Strictly refuses out-of-scope inquiries to eliminate hallucination risks."}
                </Text>
              </View>

              <View style={styles.principleItem}>
                <Ionicons name="checkmark-circle" size={16} color="#0D9488" />
                <Text style={styles.principleText}>
                  <Text style={styles.boldText}>
                    {isHindi ? "एएनएम सुरक्षा घेरा:" : "ANM Escalation Safety Net:"}
                  </Text>{" "}
                  {isHindi 
                    ? "हर गंभीर या आपातकालीन मामले को सीधे 108 व पर्यवेक्षक नर्स से जोड़ता है।" 
                    : "Seamlessly routes critical cases to the supervising ANM & ambulance."}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      <View style={{ height: 40 }} />
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
  searchBoxContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: "#0F172A"
  },
  clearBtn: {
    padding: 2
  },
  searchBtn: {
    backgroundColor: "#0D9488",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  scenariosSection: {
    marginTop: 14
  },
  scenariosTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 8
  },
  chipScroll: {
    flexDirection: "row"
  },
  scenarioChip: {
    backgroundColor: "#E6FFFA",
    borderWidth: 1,
    borderColor: "#99F6E4",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8
  },
  scenarioChipRefusal: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA"
  },
  chipText: {
    fontSize: 11.5,
    color: "#0D9488",
    fontWeight: "600"
  },
  chipTextRefusal: {
    color: "#DC2626"
  },
  resultsArea: {
    marginTop: 8
  },
  emergencyBanner: {
    backgroundColor: "#DC2626",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 4
  },
  emergencyBannerText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    flex: 1
  },
  ambiguousCard: {
    backgroundColor: "#FFFBEB",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#FCD34D",
    marginVertical: 12
  },
  ambiguousHeaderRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start"
  },
  ambiguousTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#B45309"
  },
  ambiguousSubtitle: {
    fontSize: 12,
    color: "#92400E",
    marginTop: 3,
    lineHeight: 17
  },
  ambiguousEscalateBtn: {
    backgroundColor: "#D97706",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 14
  },
  ambiguousBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  introContainer: {
    marginTop: 20
  },
  principleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#E2E8F0"
  },
  principleHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 8
  },
  principleTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A"
  },
  principleList: {
    gap: 10
  },
  principleItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8
  },
  principleText: {
    fontSize: 12.5,
    color: "#334155",
    flex: 1,
    lineHeight: 18
  },
  boldText: {
    fontWeight: "700",
    color: "#0F172A"
  }
});
