import React, { useState } from "react";
import { 
  Modal, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  Linking, 
  Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { saveReferralLog } from "../utils/storage";

export default function EscalationModal({ 
  visible, 
  onClose, 
  protocol, 
  refusalData, 
  anmContact, 
  language,
  onReferralSaved 
}) {
  const isHindi = language === "hi";
  const [patientId, setPatientId] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [vitalsNotes, setVitalsNotes] = useState("");
  const [preReferralAction, setPreReferralAction] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const conditionTitle = protocol 
    ? (isHindi && protocol.hindiTitle ? protocol.hindiTitle : protocol.title) 
    : (isHindi 
        ? (refusalData?.reasonHi || refusalData?.reason || "आपातकालीन क्लिनिकल परामर्श / स्कोप रेफरल") 
        : (refusalData?.reason || "Urgent Clinical Escalation / Scope Refusal"));

  const anmDisplayName = isHindi && anmContact?.name 
    ? anmContact.name 
    : (anmContact?.nameEn || anmContact?.name || "Sunita Devi (ANM)");

  const handleCallANM = () => {
    const phoneNumber = anmContact?.phone || "+919876543210";
    Linking.openURL(`tel:${phoneNumber}`).catch(() => {
      Alert.alert(
        isHindi ? "कॉल विफल" : "Call Failed",
        isHindi ? `कृपया सीधे नंबर डायल करें: ${phoneNumber}` : `Please dial manually: ${phoneNumber}`
      );
    });
  };

  const handleCall108 = () => {
    Linking.openURL("tel:108").catch(() => {
      Alert.alert(
        isHindi ? "एम्बुलेंस" : "Ambulance", 
        isHindi ? "कृपया 108 सीधे डायल करें" : "Please dial 108 manually."
      );
    });
  };

  const generateSMSText = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (isHindi) {
      return `[आपातकालीन रेफरल पर्ची - प्रोटोकॉल साथी]
समय: ${time}
मरीज़: ${patientId || "आपातकालीन केस"} (उम्र: ${patientAge || "निर्दिष्ट नहीं"})
रोग/अवस्था: ${conditionTitle}
प्रोटोकॉल कोड: ${protocol?.code || "स्कोप_अस्वीकृति"}
पहचाने गए खतरे के लक्षण: ${vitalsNotes || (refusalData?.reasonHi || "खतरे के लक्षण मौजूद")}
दिया गया पूर्व-रेफरल उपचार: ${preReferralAction || "गर्माहट/ओआरएस/प्राथमिक उपचार"}
पर्यवेक्षक एएनएम: ${anmDisplayName}
प्रेषक: आशा कार्यकर्ता
अनुरोध: प्राथमिक स्वास्थ्य केंद्र पर तत्काल तैयारी रखें।`;
    }

    return `[URGENT REFERRAL SLIP - PROTOCOL SAATHI]
Time: ${time}
Patient: ${patientId || "Emergency Case"} (Age: ${patientAge || "N/A"})
Condition: ${conditionTitle}
Protocol Code: ${protocol?.code || "UNRESOLVED_SCOPE_REFUSAL"}
Vitals/Signs: ${vitalsNotes || (refusalData?.reason || "Danger signs present")}
Pre-referral care given: ${preReferralAction || "ORS/Warmth/First Aid"}
Supervising ANM: ${anmDisplayName}
From: ASHA Worker
Requesting immediate review / PHC reception.`;
  };

  const handleSendSMS = () => {
    const phone = anmContact?.phone || "";
    const body = encodeURIComponent(generateSMSText());
    Linking.openURL(`sms:${phone}?body=${body}`).catch(() => {
      Alert.alert(
        isHindi ? "एसएमएस त्रुटि" : "SMS Error", 
        isHindi ? "मैसेज एप खोलने में असमर्थ" : "Could not open SMS client."
      );
    });
  };

  const handleSaveReferral = async () => {
    const entry = {
      patientId: patientId || (isHindi ? "केस-" : "Case-") + Math.floor(1000 + Math.random() * 9000),
      age: patientAge || (isHindi ? "निर्दिष्ट नहीं" : "Not Specified"),
      condition: conditionTitle,
      protocolCode: protocol?.code || (isHindi ? "स्कोप_रेफरल" : "OUT_OF_SCOPE_REFUSAL"),
      triageLevel: protocol?.triageLevel || "RED",
      vitalsNotes: vitalsNotes,
      preReferralAction: preReferralAction,
      anmContacted: anmDisplayName,
      savedAt: new Date().toLocaleTimeString()
    };

    await saveReferralLog(entry);
    setIsSaved(true);
    if (onReferralSaved) onReferralSaved();
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View style={styles.headerTitleRow}>
              <View style={styles.nurseIconCircle}>
                <Ionicons name="medical" size={20} color="#FFFFFF" />
              </View>
              <View>
                <Text style={styles.modalTitle}>
                  {isHindi ? "एएनएम रेफरल एवं एस्केलेशन पर्ची" : "ANM Referral & Escalation Slip"}
                </Text>
                <Text style={styles.modalSubtitle}>
                  {isHindi ? "पर्यवेक्षक नर्स को तत्काल मरीज हस्तांतरण" : "Official Supervised Clinical Escalation"}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={22} color="#64748B" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.formScroll} showsVerticalScrollIndicator={false}>
            {/* Supervising Nurse Information Card */}
            <View style={styles.anmCard}>
              <View style={styles.anmTopRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.anmRoleBadge}>
                    {isHindi ? "पर्यवेक्षक स्वास्थ्य कार्यकर्ता (एएनएम दीदी)" : "SUPERVISING NURSE (ANM)"}
                  </Text>
                  <Text style={styles.anmName}>{anmDisplayName}</Text>
                  <Text style={styles.anmLocation}>
                    {anmContact?.subCenter || "Kalyanpur Sub-Center"} • {anmContact?.phcCenter || "Rampur 24x7 PHC"}
                  </Text>
                </View>
                <TouchableOpacity style={styles.quickCallCircle} onPress={handleCallANM}>
                  <Ionicons name="call" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Quick Action Dialers */}
            <View style={styles.dialerRow}>
              <TouchableOpacity style={styles.callAnmBtn} onPress={handleCallANM}>
                <Ionicons name="call" size={16} color="#FFFFFF" />
                <Text style={styles.callAnmText}>
                  {isHindi ? "एएनएम को फोन करें" : "Call ANM Directly"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.call108Btn} onPress={handleCall108}>
                <Ionicons name="car-sport" size={16} color="#FFFFFF" />
                <Text style={styles.call108Text}>
                  {isHindi ? "108 एम्बुलेंस" : "108 Ambulance"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Referral Form Details */}
            <View style={styles.formSection}>
              <Text style={styles.sectionHeaderTitle}>
                {isHindi ? "ऑफ़लाइन रेफरल पर्ची विवरण भरें:" : "Offline Referral Slip Details:"}
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>
                  {isHindi ? "मरीज़ का नाम / पहचान (ID)" : "Patient ID / Identifier"}
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={isHindi ? "उदा. सुनीता का बच्चा / राधा देवी" : "e.g. Ramesh / Baby of Radha"}
                  value={patientId}
                  onChangeText={setPatientId}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>
                  {isHindi ? "उम्र व लिंग" : "Age & Gender"}
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={isHindi ? "उदा. 8 माह (लड़का) / 24 वर्ष (गर्भवती)" : "e.g. 14 months, Female"}
                  value={patientAge}
                  onChangeText={setPatientAge}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>
                  {isHindi ? "पहचाने गए खतरे के निशान / बीमारी" : "Observed Danger Signs / Symptoms"}
                </Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  multiline
                  numberOfLines={2}
                  placeholder={conditionTitle}
                  value={vitalsNotes}
                  onChangeText={setVitalsNotes}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>
                  {isHindi ? "दिया गया प्राथमिक उपचार (पूर्व-रेफरल)" : "Pre-Referral First-Aid / Stabilization"}
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={isHindi ? "उदा. केएमसी गर्माहट, ओआरएस घूंट, पेरासिटामोल" : "e.g. KMC warmth given, ORS sips, 1st dose Amox"}
                  value={preReferralAction}
                  onChangeText={setPreReferralAction}
                />
              </View>
            </View>

            {/* SMS Dispatcher Button */}
            <TouchableOpacity style={styles.smsBtn} onPress={handleSendSMS}>
              <Ionicons name="chatbubble-ellipses" size={18} color="#0D9488" />
              <Text style={styles.smsBtnText}>
                {isHindi ? "एएनएम दीदी को एसएमएस सारांश भेजें" : "Dispatch Structured SMS to ANM"}
              </Text>
            </TouchableOpacity>

            {/* Save Log Button */}
            <TouchableOpacity 
              style={[styles.saveBtn, isSaved && styles.saveBtnSuccess]} 
              onPress={handleSaveReferral}
              disabled={isSaved}
            >
              <Ionicons 
                name={isSaved ? "checkmark-circle" : "document-text"} 
                size={18} 
                color="#FFFFFF" 
              />
              <Text style={styles.saveBtnText}>
                {isSaved 
                  ? (isHindi ? "रेफरल पर्ची सहेजी गई!" : "Referral Slip Saved Offline!") 
                  : (isHindi ? "ऑफ़लाइन रेफरल पर्ची सहेजें" : "Save Referral Slip Offline")}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.65)",
    justifyContent: "flex-end"
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    maxHeight: "88%"
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9"
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  nurseIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#0D9488",
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A"
  },
  modalSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2
  },
  closeBtn: {
    padding: 6
  },
  formScroll: {
    marginTop: 12
  },
  anmCard: {
    backgroundColor: "#F0FDFA",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#99F6E4",
    marginBottom: 12
  },
  anmTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  anmRoleBadge: {
    fontSize: 9.5,
    fontWeight: "800",
    color: "#0D9488",
    letterSpacing: 0.5
  },
  anmName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#134E4A",
    marginTop: 2
  },
  anmLocation: {
    fontSize: 11.5,
    color: "#0F766E",
    marginTop: 2
  },
  quickCallCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0D9488",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#0D9488",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4
  },
  dialerRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16
  },
  callAnmBtn: {
    flex: 1.3,
    backgroundColor: "#0D9488",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10
  },
  callAnmText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  call108Btn: {
    flex: 1,
    backgroundColor: "#DC2626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10
  },
  call108Text: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700"
  },
  formSection: {
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 14
  },
  sectionHeaderTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 10
  },
  inputGroup: {
    marginBottom: 10
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 4
  },
  textInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 13,
    color: "#1E293B"
  },
  textArea: {
    minHeight: 50,
    textAlignVertical: "top"
  },
  smsBtn: {
    backgroundColor: "#CCFBF1",
    borderWidth: 1.5,
    borderColor: "#2DD4BF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  smsBtnText: {
    color: "#0F766E",
    fontSize: 13,
    fontWeight: "700"
  },
  saveBtn: {
    backgroundColor: "#1E293B",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    borderRadius: 10,
    marginBottom: 20
  },
  saveBtnSuccess: {
    backgroundColor: "#059669"
  },
  saveBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700"
  }
});
