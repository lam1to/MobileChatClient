import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthParamList, RootStackParamList } from "./types/TNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListUsersScreen from "./screen/screenAuth/ListUsers";
import ChatScreen from "./screen/screenAuth/Chat";
import ProfileScreen from "./screen/screenAuth/Profile";
import LoginScreen from "./screen/auth/Login";
import RegistrationScreen from "./screen/auth/Registration";

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthParamList>();
export default function Navigate() {
  const isAuth: boolean = false;
  return (
    <NavigationContainer>
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
            options={{ headerShown: false }}
            name="login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="registration"
            component={RegistrationScreen}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
