import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  useWindowDimensions, 
  Platform,
  AccessibilityInfo 
} from "react-native";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  interpolate, 
  Extrapolation, 
  withTiming, 
  Easing, 
  runOnJS,
  cancelAnimation 
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import { NAV_SECTIONS, HOME_CONFIG, NAV_THEME } from "../constants/navConfig";

export default function AnimatedNav({ 
  activeTab, 
  onSelectTab, 
  language = "hi",
  progress, // Reanimated SharedValue(0 = Home, 1 = Docked)
  bodyLayout = null, // { x, y, width, height }
  onTriggerHomeRef = null // optional ref hook for hardware back button
}) {
  const isHindi = language === "hi";
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [reduceMotion, setReduceMotion] = useState(false);

  // Check accessibility reduce-motion setting
  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion).catch(() => {});
    const sub = AccessibilityInfo.addEventListener("reduceMotionChanged", setReduceMotion);
    return () => sub?.remove?.();
  }, []);

  // Home button press spring scale
  const homePressScale = useSharedValue(1);

  // Gesture navigation safe-area bottom offset
  const bottomInset = Platform.OS === "ios" ? 22 : (windowHeight > 780 ? 10 : 4);
  const bottomBarHeight = 58;
  const bottomBarY = windowHeight - bottomBarHeight - bottomInset;

  // Header & Body Geometry
  const headerEstimatedHeight = bodyLayout?.y || 116;
  const availableBodyHeight = bodyLayout?.height || (windowHeight - headerEstimatedHeight - bottomBarHeight - bottomInset);

  // 1. Dynamic Grid coordinates (Home state)
  const paddingH = 16;
  const gapX = 12;
  const gapY = 12;
  const cardWidth = (windowWidth - (paddingH * 2) - gapX) / 2;
  const cardHeight = Math.min(Math.max(availableBodyHeight * 0.22, 120), 146);
  const totalGridHeight = 3 * cardHeight + 2 * gapY;
  const freeSpace = availableBodyHeight - totalGridHeight - 34; // leave space for bottom tagline
  const gridStartY = headerEstimatedHeight + Math.max(freeSpace / 2, 8);

  // 2. Dynamic Dock coordinates (Bottom Bar state)
  const slotWidth = windowWidth / 7;
  const dockWidth = Math.min(slotWidth - 2, 48);
  const dockHeight = 46;
  const dockY = bottomBarY + (bottomBarHeight - dockHeight) / 2;

  // Trigger Light Haptic Feedback
  const triggerHaptic = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (e) {
      // Graceful fallback
    }
  };

  // Animate from Dock back to Home (1 -> 0)
  const animateToHome = () => {
    triggerHaptic();
    if (activeTab === "HOME" && progress.value === 0) return;

    cancelAnimation(progress);

    if (reduceMotion) {
      progress.value = 0;
      onSelectTab("HOME");
      return;
    }

    // Dynamic duration based on current progress (handles rapid taps seamlessly)
    const currentProg = progress.value;
    const duration = Math.max(120, Math.round(450 * currentProg));

    progress.value = withTiming(0, {
      duration,
      easing: Easing.out(Easing.cubic)
    }, (finished) => {
      if (finished) {
        runOnJS(onSelectTab)("HOME");
      }
    });
  };

  // Animate from Home to Dock (0 -> 1) or switch tabs while docked
  const handleSectionPress = (sectionId) => {
    triggerHaptic();

    if (activeTab === "HOME" || progress.value < 0.5) {
      onSelectTab(sectionId);
      cancelAnimation(progress);

      if (reduceMotion) {
        progress.value = 1;
        return;
      }

      // Dynamic duration based on current progress
      const remainingProg = 1 - progress.value;
      const duration = Math.max(120, Math.round(450 * remainingProg));

      progress.value = withTiming(1, {
        duration,
        easing: Easing.out(Easing.cubic)
      });
    } else {
      // Already docked: instant section switch with active highlight change (no dock/undock)
      onSelectTab(sectionId);
    }
  };

  // Expose animateToHome for Android hardware back button
  if (onTriggerHomeRef) {
    onTriggerHomeRef.current = animateToHome;
  }

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
      {/* Static Bottom Bar Shell (Stationary with 3D Center Home Button) */}
      <View 
        style={[
          styles.bottomBarContainer, 
          { top: bottomBarY, height: bottomBarHeight + bottomInset, paddingBottom: bottomInset }
        ]} 
        pointerEvents="box-none"
      >
        <View style={styles.bottomBarBackground} />
        
        {/* Center Slot: 3D Elevated HOME Button */}
        <View style={[styles.homeSlotContainer, { left: 3 * slotWidth, width: slotWidth }]}>
          <TouchableOpacity
            onPressIn={() => { 
              homePressScale.value = withTiming(0.94, { duration: 100 }); 
            }}
            onPressOut={() => { 
              homePressScale.value = withTiming(1.0, { duration: 150 }); 
            }}
            onPress={animateToHome}
            activeOpacity={0.9}
            style={styles.homeTouchable}
            accessibilityRole="button"
            accessibilityLabel={isHindi ? "होम स्क्रीन" : "Home Screen"}
            accessibilityState={{ selected: activeTab === "HOME" }}
          >
            <LinearGradient
              colors={["#14B8A6", "#0D9488", "#0F766E"]}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 0.8, y: 1 }}
              style={styles.homeGradient}
            >
              <View style={styles.homeHighlight} />
              <Ionicons 
                name={activeTab === "HOME" ? "home" : "home-outline"} 
                size={23} 
                color="#FFFFFF" 
              />
            </LinearGradient>
          </TouchableOpacity>
          <Text 
            style={[
              styles.homeLabel, 
              activeTab === "HOME" && styles.homeLabelActive
            ]} 
            numberOfLines={1}
          >
            {isHindi ? HOME_CONFIG.hindiLabel : HOME_CONFIG.englishLabel}
          </Text>
        </View>
      </View>

      {/* 6 Morphing Section Buttons (Sync'd with single `progress` shared value) */}
      {NAV_SECTIONS.map((section, index) => {
        return (
          <MorphingNavButton
            key={section.id}
            index={index}
            section={section}
            activeTab={activeTab}
            progress={progress}
            isHindi={isHindi}
            onPress={() => handleSectionPress(section.id)}
            // Grid Position
            gx={paddingH + section.col * (cardWidth + gapX)}
            gy={gridStartY + section.row * (cardHeight + gapY)}
            gw={cardWidth}
            gh={cardHeight}
            // Dock Position
            dx={section.slotIndex * slotWidth + (slotWidth - dockWidth) / 2}
            dy={dockY}
            dw={dockWidth}
            dh={dockHeight}
          />
        );
      })}
    </View>
  );
}

// Single Button Morphing Component
function MorphingNavButton({
  index,
  section,
  activeTab,
  progress,
  isHindi,
  onPress,
  gx, gy, gw, gh,
  dx, dy, dw, dh
}) {
  const isDanger = section.id === "DANGER";
  const isActive = activeTab === section.id;
  const mainLabel = isHindi ? section.hindiLabel : section.englishLabel;
  const subLabel = isHindi ? section.englishLabel : section.hindiLabel;

  // Stagger intervals (~35ms per button)
  const span = 0.62;
  const start = index * (1 - span) / 5;
  const end = start + span;

  const animatedContainerStyle = useAnimatedStyle(() => {
    const p = progress.value;
    const x = interpolate(p, [start, end], [gx, dx], Extrapolation.CLAMP);
    const y = interpolate(p, [start, end], [gy, dy], Extrapolation.CLAMP);
    const w = interpolate(p, [start, end], [gw, dw], Extrapolation.CLAMP);
    const h = interpolate(p, [start, end], [gh, dh], Extrapolation.CLAMP);
    const r = interpolate(p, [start, end], [18, 8], Extrapolation.CLAMP);
    const elev = interpolate(p, [start, end], [4, 0], Extrapolation.CLAMP);

    return {
      transform: [{ translateX: x }, { translateY: y }],
      width: w,
      height: h,
      borderRadius: r,
      elevation: elev,
    };
  });

  // Card Content Opacity
  const cardOpacityStyle = useAnimatedStyle(() => {
    const p = progress.value;
    const op = interpolate(p, [start, start + 0.28], [1, 0], Extrapolation.CLAMP);
    return {
      opacity: op,
    };
  });

  // Dock Content Opacity
  const dockOpacityStyle = useAnimatedStyle(() => {
    const p = progress.value;
    const op = interpolate(p, [end - 0.28, end], [0, 1], Extrapolation.CLAMP);
    return {
      opacity: op,
    };
  });

  return (
    <Animated.View
      style={[
        styles.morphingButton,
        isDanger ? styles.borderDanger : styles.borderTeal,
        isActive && styles.activeDockedBackground,
        animatedContainerStyle
      ]}
      pointerEvents="box-none"
    >
      <TouchableOpacity
        style={styles.touchableFill}
        onPress={onPress}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={`${mainLabel}, ${subLabel}`}
        accessibilityState={{ selected: isActive }}
      >
        {/* State A: Expanded Grid Card Content */}
        <Animated.View style={[StyleSheet.absoluteFillObject, styles.cardInner, cardOpacityStyle]} pointerEvents="none">
          <View 
            style={[
              styles.gridIconCircle, 
              { backgroundColor: isDanger ? "#FEE2E2" : "#CCFBF1" }
            ]}
          >
            <Ionicons name={section.icon} size={28} color={section.accentColor} />
          </View>
          <Text 
            style={[
              styles.gridTitle, 
              { color: isDanger ? "#DC2626" : "#0F172A" }
            ]} 
            numberOfLines={1}
          >
            {mainLabel}
          </Text>
          <Text style={styles.gridSubtitle} numberOfLines={1}>
            {subLabel}
          </Text>
          <View style={styles.gridFooter}>
            <Text 
              style={[
                styles.gridDetailText, 
                { color: isDanger ? "#DC2626" : "#0D9488" }
              ]} 
              numberOfLines={1}
            >
              {isHindi ? section.hindiSubtitle : section.englishSubtitle}
            </Text>
            <Ionicons name="chevron-forward" size={13} color={isDanger ? "#EF4444" : "#0D9488"} />
          </View>
        </Animated.View>

        {/* State B: Compact Docked Tab Content (Auto-fits long labels on ~360px phones) */}
        <Animated.View style={[StyleSheet.absoluteFillObject, styles.dockInner, dockOpacityStyle]} pointerEvents="none">
          <Ionicons
            name={isActive ? section.icon : section.iconOutline}
            size={18}
            color={
              isActive 
                ? (isDanger ? NAV_THEME.danger : NAV_THEME.primary) 
                : NAV_THEME.inactiveIcon
            }
          />
          <Text
            style={[
              styles.dockLabel,
              isActive && (isDanger ? styles.dockLabelActiveRed : styles.dockLabelActiveTeal)
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.82}
          >
            {mainLabel}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
  },
  bottomBarBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: NAV_THEME.barBg,
    borderTopWidth: 1,
    borderTopColor: NAV_THEME.barBorder,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 8,
  },
  homeSlotContainer: {
    position: "absolute",
    top: -16,
    alignItems: "center",
    justifyContent: "center",
  },
  homeTouchable: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#0F766E",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 8,
  },
  homeGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 0.45)",
    borderBottomWidth: 3,
    borderBottomColor: "#042F2E",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255, 0.15)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  },
  homeHighlight: {
    position: "absolute",
    top: 0,
    left: 8,
    right: 8,
    height: 11,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  homeLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: NAV_THEME.inactiveIcon,
    marginTop: 2,
    textAlign: "center",
  },
  homeLabelActive: {
    color: NAV_THEME.primary,
    fontWeight: "800",
  },
  morphingButton: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: NAV_THEME.cardBg,
    overflow: "hidden",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },
  borderTeal: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  borderDanger: {
    borderWidth: 1.5,
    borderColor: "#FECACA",
    backgroundColor: "#FFFDFD",
  },
  activeDockedBackground: {
    backgroundColor: "rgba(13, 148, 136, 0.08)",
  },
  touchableFill: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cardInner: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  gridIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 2,
  },
  gridSubtitle: {
    fontSize: 11.5,
    fontWeight: "600",
    color: NAV_THEME.textMuted,
    textAlign: "center",
    marginBottom: 6,
  },
  gridFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    width: "100%",
  },
  gridDetailText: {
    fontSize: 10,
    fontWeight: "700",
    marginRight: 2,
  },
  dockInner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 3,
    paddingHorizontal: 1,
  },
  dockLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: NAV_THEME.inactiveIcon,
    marginTop: 2,
    textAlign: "center",
    maxWidth: "100%",
  },
  dockLabelActiveTeal: {
    color: NAV_THEME.primary,
    fontWeight: "800",
  },
  dockLabelActiveRed: {
    color: NAV_THEME.danger,
    fontWeight: "800",
  },
});
