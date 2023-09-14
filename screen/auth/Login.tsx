import React from "react";
import { View, Text } from "react-native";
import { gStyle } from "../../Style/mainStyle";
import I18n from "../../i18n/index";

const LoginScreen = () => {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.centerContainer}>
        <View>
          <View>
            <Text>{I18n.t("auth_login1")}</Text>
            <Text>{I18n.t("auth_registration")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
