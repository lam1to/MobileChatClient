import React from "react";

// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { AuthParamList, RootStackParamList } from "./types/TNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListUsersScreen from "./screen/screenAuth/ListUsers";
import ChatScreen from "./screen/screenAuth/Chat";
import ProfileScreen from "./screen/screenAuth/Profile";
import LoginScreen from "./screen/auth/Login";
import RegistrationScreen from "./screen/auth/Registration";
import { useAppSelector } from "./Hooks/redux";
import { selectIsAuth } from "./store/Reducers/UserSlice";

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthParamList>();
export default function Navigate() {
  // const isAuth: boolean = false;
  const isAuth = useAppSelector(selectIsAuth);
  console.log("isAuth = ", isAuth);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#0E0B1D",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      {isAuth ? (
        <Stack.Navigator
          sceneContainerStyle={{ borderWidth: 0 }}
          initialRouteName="listUsers"
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="listUsers"
            component={ListUsersScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="chat"
            component={ChatScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="profile"
            component={ProfileScreen}
          />
        </Stack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="login">
          <AuthStack.Screen
            options={{
              headerShown: false,
              gestureDirection: "horizontal",
            }}
            name="login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{
              headerShown: false,
              gestureDirection: "horizontal",
            }}
            name="registration"
            component={RegistrationScreen}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
