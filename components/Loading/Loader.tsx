import { FC, useEffect, useState } from "react";
import { loaderStyle } from "../../Style/loaderStyle";
import { View, Text } from "react-native";
import { gStyle } from "../../Style/mainStyle";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export interface ILoaderProps {
  width: number;
  height: number;
}

const Loader: FC<ILoaderProps> = ({ width, height }) => {
  const rotate = useSharedValue(0);
  const borderRadius = useSharedValue(0.3);
  const scale = useSharedValue(0.2);
  const opacity = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: (borderRadius.value * width) / 2,
      transform: [{ rotate: `${rotate.value}deg` }, { scale: scale.value }],
    };
  });
  const dotsReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    rotate.value = withRepeat(withTiming(360, { duration: 3000 }), -1, true);
    scale.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
    borderRadius.value = withRepeat(
      withSpring(0.7, { duration: 1400 }),
      -1,
      true
    );
    opacity.value = withRepeat(withTiming(0, { duration: 1000 }), -1, true);
  }, []);
  return (
    <View>
      <Animated.View
        style={[
          { width: width, height: height },
          loaderStyle.block,
          reanimatedStyle,
        ]}
      ></Animated.View>

      <Text style={[gStyle.text, loaderStyle.textLoading]}>
        Loading <Animated.Text style={dotsReanimatedStyle}>...</Animated.Text>
      </Text>
      {/* </View> */}
    </View>
  );
};

export default Loader;
