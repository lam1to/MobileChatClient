import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import MainIndex from "./index";
import MainStack from "./navigate";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/Fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/Fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const store = setupStore();
  if (!isLoading)
    return (
      <Provider store={store}>
        <MainIndex />
        {/* <MainStack /> */}
      </Provider>
    );
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
