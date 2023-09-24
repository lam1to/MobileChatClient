import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useAnimatedAuth = (isLogin: boolean) => {
  const { width, height } = useWindowDimensions();
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(isLogin ? -width : width);
  const styleAuthSharedValue = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateX: translateX.value, translateY: height },
        { scale: opacity.value },
      ],
    };
  });
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      opacity.value = withTiming(1, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
    } else {
      opacity.value = 0;
      translateX.value = isLogin ? -width : width;
    }
  }, [isFocused]);

  return { style: styleAuthSharedValue };
};
