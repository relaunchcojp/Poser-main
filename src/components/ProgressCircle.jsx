import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default ProgressCircle = () => {
  const size = 258;
  const strokeWidth = 10;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressValue = 90;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            ref={progressRef}
            stroke="#b9c42f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            opacity="0.1"
            position="absolute"
          />
          <Circle
            stroke="#b9c42f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
            strokeDashoffset={
              circumference - (circumference * progressValue) / 100
            }
            opacity="0.9"
          />
        </G>
      </Svg>
      <View style={styles.progressValueStyle} activeOpacity={0.6}>
        <Text style={styles.progressValueText}>{progressValue}</Text>
        <Text style={styles.progressValuePercent}>%</Text>
        <Text style={styles.progressMessage}>本日のトレーニング</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  progressValueStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    left: 8,
    right: 0,
    top: 0,
    bottom: 10,
    margin: 'auto',
  },
  progressValueText: {
    color: '#000000',
    fontSize: 100,
    marginRight: 0,
  },
  progressValuePercent: {
    fontSize: 30,
    bottom: -22,
  },
  progressMessage: {
    position: 'absolute',
    fontSize: 21,
    bottom: 52,
  },
});
