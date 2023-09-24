import {
  useController,
  useFormContext,
  Controller,
  UseControllerProps,
  FieldErrors,
} from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import { gStyle } from "../../Style/mainStyle";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { authStyle } from "../../Style/authStyle";
import { IFormLogin } from "../../types/IForm";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export interface TextInputPropss
  extends UseControllerProps<IFormLogin>,
    TextInputProps {
  errors: FieldErrors<IFormLogin>;
  defaultValue: string;
  isPassword?: boolean;
}
export const ControlledInput = (props: TextInputPropss) => {
  const {
    name,
    rules,
    errors,
    control,
    isPassword,
    defaultValue,
    ...inputProps
  } = props;
  const { field } = useController({ name, rules, defaultValue, control });
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  return (
    <Controller
      control={control}
      defaultValue=""
      name={field.name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={[authStyle.block_input_error]}>
          {isPassword ? (
            <View style={[gStyle.flexB, authStyle.blockInput]}>
              <TextInput
                {...inputProps}
                style={[gStyle.flex1, authStyle.input]}
                secureTextEntry={viewPassword}
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
              {isPassword && (
                <Pressable
                  onPress={() => {
                    setViewPassword(!viewPassword);
                  }}
                  style={gStyle.flexCenterBlockNoWith}
                >
                  <AntDesign
                    style={authStyle.viewPassword}
                    name={viewPassword ? "eyeo" : "eye"}
                    size={24}
                    color="purple"
                  />
                </Pressable>
              )}
            </View>
          ) : (
            <TextInput
              {...inputProps}
              style={authStyle.input}
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          {errors[field.name] && (
            <Text style={[gStyle.redText, authStyle.error]}>
              {errors[field.name]?.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};
