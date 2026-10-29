// Offline Storage utilities for Protocol Saathi
// Persists ANM contacts, offline referral slips, and health worker profiles.

import AsyncStorage from "@react-native-async-storage/async-storage";

const ANM_CONTACT_KEY = "@protocol_saathi_anm_contact";
const REFERRAL_LOGS_KEY = "@protocol_saathi_referral_logs";
const APP_SETTINGS_KEY = "@protocol_saathi_settings";

const DEFAULT_ANM_CONTACT = {
  name: "सुनीता देवी (एएनएम दीदी)",
  nameEn: "Sunita Devi (ANM)",
  phone: "+919876543210",
  subCenter: "कल्याणपुर उप-केंद्र (Kalyanpur Sub-Center)",
  phcCenter: "रामपुर 24x7 प्राथमिक स्वास्थ्य केंद्र",
  ambulancePhone: "108",
  sncuHelpline: "102"
};

export async function getANMContact() {
  try {
    const raw = await AsyncStorage.getItem(ANM_CONTACT_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
    return DEFAULT_ANM_CONTACT;
  } catch (e) {
    console.error("Failed to load ANM contact", e);
    return DEFAULT_ANM_CONTACT;
  }
}

export async function saveANMContact(contact) {
  try {
    await AsyncStorage.setItem(ANM_CONTACT_KEY, JSON.stringify(contact));
    return true;
  } catch (e) {
    console.error("Failed to save ANM contact", e);
    return false;
  }
}

export async function getReferralLogs() {
  try {
    const raw = await AsyncStorage.getItem(REFERRAL_LOGS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
    return [];
  } catch (e) {
    console.error("Failed to load referral logs", e);
    return [];
  }
}

export async function saveReferralLog(logEntry) {
  try {
    const existing = await getReferralLogs();
    const updated = [
      {
        id: "ref-" + Date.now(),
        timestamp: new Date().toISOString(),
        ...logEntry
      },
      ...existing
    ];
    await AsyncStorage.setItem(REFERRAL_LOGS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Failed to save referral log", e);
    return [];
  }
}

export async function clearAllReferralLogs() {
  try {
    await AsyncStorage.removeItem(REFERRAL_LOGS_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

// DEFAULT LANGUAGE IS HINDI ('hi') AS REQUIRED!
export async function getAppSettings() {
  try {
    const raw = await AsyncStorage.getItem(APP_SETTINGS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
    return {
      language: "hi", // Default first-time opening is Hindi
      ashaWorkerName: "अनिता शर्मा (आशा कार्यकर्ता)",
      ashaId: "ASHA-UP-4021",
      village: "कल्याणपुर"
    };
  } catch (e) {
    return { language: "hi", ashaWorkerName: "अनिता शर्मा (आशा कार्यकर्ता)" };
  }
}

export async function saveAppSettings(settings) {
  try {
    const current = await getAppSettings();
    const updated = { ...current, ...settings };
    await AsyncStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(updated));
    return true;
  } catch (e) {
    return false;
  }
}
