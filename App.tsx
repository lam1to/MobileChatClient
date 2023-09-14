import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { gStyle } from "./Style/mainStyle";
import MainStack from "./navigate";
import Navbar from "./components/Navbar/Navbar";
import I18n from "react-native-i18n";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/Fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/Fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  if (!isLoading)
    // return (
    //   <View style={gStyle.main}>
    //     <Navbar></Navbar>
    //     <MainStack />
    //   </View>
    // );
    return <MainStack />;
  else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsLoading(false)}
        onError={() => console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
