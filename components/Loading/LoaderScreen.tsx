import { FC } from "react";
import { loaderStyle } from "../../Style/loaderStyle";
import { View, Text } from "react-native";
import { gStyle } from "../../Style/mainStyle";
import Loader from "./Loader";

export interface ILoaderProps {
  width: number;
  height: number;
}

const LoaderScreen: FC<ILoaderProps> = ({ width, height }) => {
  return (
    <View style={[loaderStyle.main, gStyle.flexItemCenter]}>
      <Loader width={width} height={height} />
    </View>
  );
};

export default LoaderScreen;
