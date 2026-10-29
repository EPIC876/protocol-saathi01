import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Animated, 
  TouchableOpacity,
  StatusBar
} from "react-native";
import Svg, { 
  Path, 
  Circle, 
  Defs, 
  LinearGradient, 
  Stop, 
  Rect 
} from "react-native-svg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function SplashScreen({ onFinish, language = "hi" }) {
  const isHindi = language === "hi";
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(
    isHindi ? "संसाधन लोड हो रहे हैं..." : "Loading resources..."
  );

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Smooth progress simulation that ticks smoothly and pauses briefly around ~68%
    let current = 0;
    const interval = setInterval(() => {
      let increment = 1;
      if (current < 30) {
        increment = Math.floor(Math.random() * 3) + 2; // 2-4%
      } else if (current >= 30 && current < 65) {
        increment = Math.floor(Math.random() * 3) + 1; // 1-3%
      } else if (current >= 65 && current < 72) {
        // subtle linger around ~68%
        increment = Math.random() > 0.45 ? 1 : 0;
      } else if (current >= 72 && current < 95) {
        increment = Math.floor(Math.random() * 4) + 2; // 2-5%
      } else {
        increment = 2;
      }

      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current < 35) {
        setStatusText(isHindi ? "संसाधन लोड हो रहे हैं..." : "Loading resources...");
      } else if (current < 70) {
        setStatusText(isHindi ? "MoHFW आधिकारिक दिशा-निर्देश लोड हो रहे हैं..." : "Loading MoHFW verified protocols...");
      } else if (current < 92) {
        setStatusText(isHindi ? "ऑफलाइन आपातकालीन सुविधाएं तैयार की जा रही हैं..." : "Verifying offline emergency facilities...");
      } else {
        setStatusText(isHindi ? "फील्ड कार्य हेतु तैयार!" : "Ready for field operation!");
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start(() => {
            if (onFinish) onFinish();
          });
        }, 500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (onFinish) onFinish();
    });
  };

  // 70% of screen width, bounded cleanly between 240px and 290px
  const barTrackWidth = Math.min(Math.max(SCREEN_WIDTH * 0.70, 240), 290);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F8FC" translucent={false} />

      {/* 1. BACKGROUND LAYER (Absolute - never interferes with flex content) */}
      <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
          {/* Top-Left Soft Blue Wave */}
          <Path
            d="M0 0 L150 0 C120 50 65 90 0 105 Z"
            fill="#E5F0FA"
          />

          {/* Top-Left Medical Cross */}
          <Rect x="26" y="58" width="9" height="24" rx="3" fill="#BBD7F0" />
          <Rect x="18" y="65" width="24" height="9" rx="3" fill="#BBD7F0" />

          {/* Top-Right Medical Cross */}
          <Rect x={SCREEN_WIDTH - 42} y="75" width="8.5" height="22" rx="3" fill="#BBD7F0" />
          <Rect x={SCREEN_WIDTH - 49} y="82" width="22" height="8.5" rx="3" fill="#BBD7F0" />

          {/* Bottom Soft Wave */}
          <Path
            d={`M0 ${SCREEN_HEIGHT - 85} Q${SCREEN_WIDTH * 0.35} ${SCREEN_HEIGHT - 120} ${SCREEN_WIDTH * 0.7} ${SCREEN_HEIGHT - 65} T${SCREEN_WIDTH} ${SCREEN_HEIGHT - 85} L${SCREEN_WIDTH} ${SCREEN_HEIGHT} L0 ${SCREEN_HEIGHT} Z`}
            fill="#E8F3FB"
          />

          {/* Bottom-Right Stethoscope Outline Watermark */}
          <Path
            d={`M${SCREEN_WIDTH - 45} ${SCREEN_HEIGHT - 145} 
                C${SCREEN_WIDTH - 25} ${SCREEN_HEIGHT - 130} ${SCREEN_WIDTH - 20} ${SCREEN_HEIGHT - 95} ${SCREEN_WIDTH - 45} ${SCREEN_HEIGHT - 72}
                C${SCREEN_WIDTH - 65} ${SCREEN_HEIGHT - 52} ${SCREEN_WIDTH - 102} ${SCREEN_HEIGHT - 68} ${SCREEN_WIDTH - 98} ${SCREEN_HEIGHT - 100}
                C${SCREEN_WIDTH - 96} ${SCREEN_HEIGHT - 120} ${SCREEN_WIDTH - 82} ${SCREEN_HEIGHT - 136} ${SCREEN_WIDTH - 68} ${SCREEN_HEIGHT - 142}`}
            fill="none"
            stroke="#9ACBF0"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <Circle cx={SCREEN_WIDTH - 43} cy={SCREEN_HEIGHT - 147} r="4.5" fill="#9ACBF0" />
          <Circle cx={SCREEN_WIDTH - 68} cy={SCREEN_HEIGHT - 142} r="4.5" fill="#9ACBF0" />
          <Path
            d={`M${SCREEN_WIDTH - 98} ${SCREEN_HEIGHT - 98} C${SCREEN_WIDTH - 98} ${SCREEN_HEIGHT - 80} ${SCREEN_WIDTH - 114} ${SCREEN_HEIGHT - 76} ${SCREEN_WIDTH - 114} ${SCREEN_HEIGHT - 82}`}
            fill="none"
            stroke="#9ACBF0"
            strokeWidth="3.5"
          />
          <Circle cx={SCREEN_WIDTH - 114} cy={SCREEN_HEIGHT - 82} r="8" fill="none" stroke="#9ACBF0" strokeWidth="3" />
        </Svg>
      </View>

      {/* 2. SKIP BUTTON (Top Right Corner) */}
      <TouchableOpacity 
        style={styles.skipButton} 
        onPress={handleSkip}
        activeOpacity={0.7}
      >
        <Text style={styles.skipButtonText}>
          {isHindi ? "छोड़ें ✕" : "Skip ✕"}
        </Text>
      </TouchableOpacity>

      {/* 3. FOREGROUND CONTENT LAYER (Absolute Full Overlay - Guaranteed 100% Visibility) */}
      <View style={styles.contentOverlay}>
        {/* 1. Logo Emblem: Heart + 3 Community Figures + Stethoscope */}
        <View style={styles.logoContainer}>
          <Svg width="120" height="120" viewBox="0 0 135 135">
            <Defs>
              <LinearGradient id="logoHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#00A878" />
                <Stop offset="45%" stopColor="#0D76B8" />
                <Stop offset="100%" stopColor="#0A3C7B" />
              </LinearGradient>
            </Defs>

            {/* Heart Outline with Stethoscope loop at bottom right */}
            <Path
              d="M67.5 116 
                 C38 92 16 72 16 46 
                 C16 28 30 16 48 16 
                 C59 16 67.5 23 67.5 23 
                 C67.5 23 76 16 87 16 
                 C105 16 119 28 119 46 
                 C119 64 107 80 92 95"
              fill="none"
              stroke="url(#logoHeartGradient)"
              strokeWidth="7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Stethoscope loop extending from bottom right of the heart */}
            <Path
              d="M92 95 
                 C95 99 101 104 107 103 
                 C114 102 117 95 116 89 
                 C115 84 111 82 107 82"
              fill="none"
              stroke="#0D5CA8"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Stethoscope Chest Piece Bell */}
            <Circle cx="107" cy="82" r="7" fill="#0D5CA8" />
            <Circle cx="107" cy="82" r="3.5" fill="#FFFFFF" />

            {/* Inner Community Figures: Center Figure (Taller) */}
            <Circle cx="67.5" cy="50" r="7.5" fill="#0C4F8D" />
            <Path
              d="M59.5 65 C59.5 60 62.5 59 67.5 59 C72.5 59 75.5 60 75.5 65 L75.5 88 L59.5 88 Z"
              fill="#0C4F8D"
            />

            {/* Left Figure */}
            <Circle cx="53" cy="56" r="6" fill="#0C4F8D" />
            <Path
              d="M46 68 C46 64 49 63 53 63 C57 63 60 64 60 68 L60 86 L46 86 Z"
              fill="#0C4F8D"
            />

            {/* Right Figure */}
            <Circle cx="82" cy="56" r="6" fill="#0C4F8D" />
            <Path
              d="M75 68 C75 64 78 63 82 63 C86 63 89 64 89 68 L89 86 L75 86 Z"
              fill="#0C4F8D"
            />
          </Svg>
        </View>

        {/* 2. Brand Title: "Protocol Saathi" Positioned A Little Above Screen Center */}
        <Text style={styles.titleText}>
          <Text style={styles.titleProtocol}>Protocol</Text>
          <Text style={styles.titleSaathi}> Saathi</Text>
        </Text>

        {/* 3. Guiding Track Principle Motto */}
        <Text style={styles.mottoText}>
          Strengthen the system;{"\n"}protect the people in it.
        </Text>

        {/* 4. Fake Loading Slidebar Section */}
        <View style={styles.loadingSection}>
          {/* Rounded Slidebar Track & Gradient Fill */}
          <View style={[styles.progressBarBackground, { width: barTrackWidth }]}>
            <View 
              style={[
                styles.progressBarFillContainer, 
                { width: `${Math.max(progress, 3)}%` }
              ]}
            >
              <Svg width={barTrackWidth} height="12">
                <Defs>
                  <LinearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="#00A878" />
                    <Stop offset="70%" stopColor="#0D72B8" />
                    <Stop offset="100%" stopColor="#0A3C7B" />
                  </LinearGradient>
                </Defs>
                <Rect 
                  x="0" 
                  y="0" 
                  width={barTrackWidth} 
                  height="12" 
                  rx="6" 
                  fill="url(#barGradient)" 
                />
              </Svg>
            </View>
          </View>

          {/* Real-time Percentage (e.g. 68%) */}
          <Text style={styles.percentageText}>{progress}%</Text>

          {/* Cycling Status Text */}
          <Text style={styles.statusText} numberOfLines={2}>
            {statusText}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FC",
    position: "relative",
  },
  contentOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    // Calculated so Protocol Saathi is right above center (~38% of screen)
    paddingTop: Math.max(SCREEN_HEIGHT * 0.17, 115),
    paddingHorizontal: 24,
    zIndex: 10,
    elevation: 10,
  },
  logoContainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  titleText: {
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  titleProtocol: {
    fontSize: 35,
    fontWeight: "900",
    color: "#082B66",
    letterSpacing: -0.5,
  },
  titleSaathi: {
    fontSize: 35,
    fontWeight: "900",
    color: "#00A878",
    letterSpacing: -0.5,
  },
  mottoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#304B70",
    textAlign: "center",
    alignSelf: "center",
    lineHeight: 24,
    marginBottom: 44,
  },
  loadingSection: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
  },
  progressBarBackground: {
    height: 11,
    backgroundColor: "#D9E8F5",
    borderRadius: 6,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: 14,
  },
  progressBarFillContainer: {
    height: "100%",
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#00A878", // Safe solid fallback
  },
  percentageText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#082B66",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B86AC",
    textAlign: "center",
    alignSelf: "center",
    maxWidth: 290,
    minHeight: 40,
  },
  skipButton: {
    position: "absolute",
    top: 48,
    right: 20,
    zIndex: 50,
    elevation: 50,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 14,
    backgroundColor: "rgba(11, 43, 102, 0.08)",
  },
  skipButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#082B66",
  },
});
