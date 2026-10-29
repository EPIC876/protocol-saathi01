import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Linking, 
  Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HEALTHCARE_FACILITIES, FACILITY_CATEGORIES } from "../data/healthcareFacilities";

export default function FacilitiesScreen({ language }) {
  const isHindi = language === "hi";
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCall = (phoneNumber, facilityName) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() => {
      Alert.alert(
        isHindi ? "कॉल विफल" : "Call Failed",
        isHindi ? `कृपया सीधे नंबर डायल करें: ${phoneNumber}` : `Please dial manually: ${phoneNumber}`
      );
    });
  };

  const handleShareFacility = (facility) => {
    const name = isHindi ? facility.nameHi : facility.nameEn;
    const address = isHindi ? facility.addressHi : facility.addressEn;
    const body = encodeURIComponent(`[GOVERNMENT HEALTHCARE FACILITY]
Name: ${name}
Phone: ${facility.phone}
Address: ${address}
24x7 Available: ${facility.is24x7 ? "YES" : "Daytime"}
Shared via Protocol Saathi`);
    Linking.openURL(`sms:?body=${body}`).catch(() => {
      Alert.alert("SMS", "Could not open messaging app");
    });
  };

  const filteredFacilities = HEALTHCARE_FACILITIES.filter(item => {
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    const nameEn = item.nameEn.toLowerCase();
    const nameHi = item.nameHi.toLowerCase();
    const phone = item.phone.toLowerCase();
    const address = (item.addressEn + " " + item.addressHi).toLowerCase();
    const services = [...item.servicesEn, ...item.servicesHi].join(" ").toLowerCase();

    return nameEn.includes(q) || nameHi.includes(q) || phone.includes(q) || address.includes(q) || services.includes(q);
  });

  return (
    <View style={styles.container}>
      {/* Top Banner */}
      <View style={styles.topBanner}>
        <View style={styles.topBannerRow}>
          <View style={styles.bannerIconBox}>
            <Ionicons name="business" size={22} color="#FFFFFF" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>
              {isHindi ? "निकटवर्ती सरकारी स्वास्थ्य केंद्र व हेल्पलाइन" : "Govt Healthcare Facilities & Helplines"}
            </Text>
            <Text style={styles.bannerSubtitle}>
              {isHindi ? "अस्पताल, एम्बुलेंस, एसएनसीयू व 24x7 आपातकालीन नंबर" : "Hospitals, Ambulance, SNCU & Emergency Contacts"}
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#0D9488" />
          <TextInput
            style={styles.searchInput}
            placeholder={
              isHindi 
                ? "अस्पताल, सेवा (जैसे SNCU, प्रसव) या फोन नंबर खोजें..." 
                : "Search facility, service (e.g. SNCU, delivery) or phone..."
            }
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={16} color="#94A3B8" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category Filter Chips */}
      <View style={styles.filterBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FACILITY_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.filterChip, isSelected && styles.filterChipActive]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <Text style={[styles.filterChipText, isSelected && styles.filterChipTextActive]}>
                  {isHindi ? cat.nameHi : cat.nameEn}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Facility Cards List */}
      <ScrollView style={styles.cardsScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.countRow}>
          <Text style={styles.countText}>
            {filteredFacilities.length} {isHindi ? "केंद्र उपलब्ध (100% ऑफ़लाइन)" : "facilities listed (100% offline)"}
          </Text>
        </View>

        {filteredFacilities.map(fac => {
          const name = isHindi ? fac.nameHi : fac.nameEn;
          const facilityType = isHindi ? fac.facilityTypeHi : fac.facilityTypeEn;
          const address = isHindi ? fac.addressHi : fac.addressEn;
          const distance = isHindi ? fac.distanceKmHi : fac.distanceKm;
          const services = isHindi ? fac.servicesHi : fac.servicesEn;
          const isEmergency = fac.category === "EMERGENCY";

          return (
            <View key={fac.id} style={[styles.card, isEmergency && styles.emergencyCard]}>
              {/* Header */}
              <View style={styles.cardHeaderRow}>
                <View style={styles.headerTitleCol}>
                  <View style={styles.typeRow}>
                    <View style={[styles.typeBadge, isEmergency && styles.emergencyTypeBadge]}>
                      <Text style={[styles.typeBadgeText, isEmergency && styles.emergencyTypeBadgeText]}>
                        {facilityType}
                      </Text>
                    </View>
                    {fac.is24x7 && (
                      <View style={styles.badge24x7}>
                        <View style={styles.greenDot} />
                        <Text style={styles.text24x7}>24x7</Text>
                      </View>
                    )}
                  </View>

                  <Text style={styles.facilityName}>{name}</Text>
                  {!isHindi && fac.nameHi && (
                    <Text style={styles.subFacilityName}>{fac.nameHi}</Text>
                  )}
                </View>
              </View>

              {/* Address & Distance */}
              <View style={styles.addressBox}>
                <View style={styles.addressRow}>
                  <Ionicons name="location-sharp" size={16} color="#0D9488" style={{ marginTop: 2 }} />
                  <Text style={styles.addressText}>{address}</Text>
                </View>
                <View style={styles.distanceRow}>
                  <Ionicons name="navigate-circle-outline" size={14} color="#64748B" />
                  <Text style={styles.distanceText}>{distance}</Text>
                </View>
              </View>

              {/* Services List */}
              <View style={styles.servicesBox}>
                <Text style={styles.servicesHeader}>
                  {isHindi ? "उपलब्ध मुख्य सेवाएं:" : "Key Available Services:"}
                </Text>
                {services.map((svc, sIdx) => (
                  <View key={sIdx} style={styles.serviceItem}>
                    <Ionicons name="checkmark-circle" size={13} color="#0D9488" />
                    <Text style={styles.serviceText}>{svc}</Text>
                  </View>
                ))}
              </View>

              {/* Action Buttons: Big Call Button & Share */}
              <View style={styles.cardActionsRow}>
                <TouchableOpacity 
                  style={[styles.callBtn, isEmergency && styles.emergencyCallBtn]}
                  onPress={() => handleCall(fac.phone, name)}
                  activeOpacity={0.8}
                >
                  <Ionicons name="call" size={18} color="#FFFFFF" />
                  <Text style={styles.callBtnText}>
                    {isHindi ? "कॉल करें: " : "Call: "}
                    <Text style={styles.callBtnNumber}>{fac.phone}</Text>
                  </Text>
                </TouchableOpacity>

                {fac.altPhone && (
                  <TouchableOpacity 
                    style={styles.altCallBtn}
                    onPress={() => handleCall(fac.altPhone, name)}
                  >
                    <Ionicons name="call-outline" size={15} color="#0D9488" />
                    <Text style={styles.altCallText}>{fac.altPhone}</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity 
                  style={styles.shareBtn}
                  onPress={() => handleShareFacility(fac)}
                >
                  <Ionicons name="share-social-outline" size={18} color="#475569" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC"
  },
  topBanner: {
    backgroundColor: "#042F2E",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#134E4A"
  },
  topBannerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10
  },
  bannerIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#0D9488",
    justifyContent: "center",
    alignItems: "center"
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFFFFF"
  },
  bannerSubtitle: {
    fontSize: 11,
    color: "#99F6E4",
    marginTop: 2
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8
  },
  searchInput: {
    flex: 1,
    fontSize: 12.5,
    color: "#0F172A"
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
  filterChipText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600"
  },
  filterChipTextActive: {
    color: "#FFFFFF"
  },
  cardsScroll: {
    paddingHorizontal: 16,
    paddingTop: 10
  },
  countRow: {
    marginBottom: 8
  },
  countText: {
    fontSize: 11.5,
    color: "#64748B",
    fontWeight: "600"
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  emergencyCard: {
    borderColor: "#FECACA",
    backgroundColor: "#FFFBFB"
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8
  },
  headerTitleCol: {
    flex: 1
  },
  typeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4
  },
  typeBadge: {
    backgroundColor: "#F0FDFA",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#CCFBF1"
  },
  emergencyTypeBadge: {
    backgroundColor: "#FEE2E2",
    borderColor: "#FCA5A5"
  },
  typeBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#0F766E"
  },
  emergencyTypeBadgeText: {
    color: "#DC2626"
  },
  badge24x7: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(16, 185, 129, 0.12)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    gap: 4
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#10B981"
  },
  text24x7: {
    fontSize: 9.5,
    fontWeight: "800",
    color: "#059669"
  },
  facilityName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 2
  },
  subFacilityName: {
    fontSize: 11.5,
    color: "#64748B",
    marginTop: 2
  },
  addressBox: {
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
    marginBottom: 8
  },
  addressRow: {
    flexDirection: "row",
    gap: 6
  },
  addressText: {
    fontSize: 12,
    color: "#334155",
    flex: 1,
    lineHeight: 17
  },
  distanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
    marginLeft: 2
  },
  distanceText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B"
  },
  servicesBox: {
    marginBottom: 10,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9"
  },
  servicesHeader: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 4
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 3
  },
  serviceText: {
    fontSize: 11.5,
    color: "#334155",
    flex: 1,
    lineHeight: 16
  },
  cardActionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9"
  },
  callBtn: {
    flex: 1.6,
    backgroundColor: "#0D9488",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8
  },
  emergencyCallBtn: {
    backgroundColor: "#DC2626"
  },
  callBtnText: {
    color: "#FFFFFF",
    fontSize: 12.5,
    fontWeight: "700"
  },
  callBtnNumber: {
    fontWeight: "800"
  },
  altCallBtn: {
    backgroundColor: "#F0FDFA",
    borderWidth: 1,
    borderColor: "#99F6E4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 8,
    gap: 4
  },
  altCallText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#0F766E"
  },
  shareBtn: {
    backgroundColor: "#F1F5F9",
    padding: 10,
    borderRadius: 8
  }
});
