import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { gStyle } from "./Style/mainStyle";
import MainStack from "./navigate";
import Navbar from "./components/Navbar/Navbar";
import I18n from "react-native-i18n";
import AsyncStorage from "@react-native-community/async-storage";
import { useAppDispatch, useAppSelector } from "./Hooks/redux";
import { UserSlice, selectIsAuth } from "./store/Reducers/UserSlice";
import { check } from "./http/user.services";
import Loader from "./components/Loading/Loader";
import LoaderScreen from "./components/Loading/LoaderScreen";

export default function MainIndex() {
  const dispatch = useAppDispatch();
  const { SetUser, SetIsAuth } = UserSlice.actions;
  const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   getData();
  // }, []);
  // const getData = async () => {
  //   try {
  //     if (await AsyncStorage.getItem("token")) {
  //       check()
  //         .then((data) => {
  //           dispatch(SetUser(data));
  //         })
  //         .catch(() => {
  //           console.log("прошло не успешно");
  //         })
  //         .finally(() => {
  //           setLoading(false);
  //           console.log("Прошло успешно");
  //         });
  //     } else {
  //       setLoading(false);
  //       // console.log("токена нет");
  //     }
  //   } catch (e) {
  //     console.error((e as Error).message);
  //   }
  // };
  // if (loading) {
  //   return <LoaderScreen width={100} height={100} />;
  // }

  return <MainStack />;
}
