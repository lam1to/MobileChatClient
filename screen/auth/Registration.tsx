import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { gStyle } from "../../Style/mainStyle";
import I18n from "../../i18n/index";
import { Formik } from "formik";
import { authStyle } from "../../Style/authStyle";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthParamList } from "../../types/TNavigation";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useAnimatedAuth } from "../../Hooks/useAnimatedAuth";
import { ControlledInput } from "./ControlledInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormLogin } from "../../types/IForm";
import { Iuser, IuserReg } from "../../types/IUser";
import { registration } from "../../http/user.services";
import { useAppDispatch } from "../../Hooks/redux";
import { IError } from "../../types/IError";
import { UserSlice } from "../../store/Reducers/UserSlice";

const RegistrationScreen = () => {
  const { width, height } = useWindowDimensions();
  const [user, setUser] = useState<IuserReg>({
    name: "",
    lastName: "",
    email: "",
    password: "",
  } as IuserReg);
  const navigation = useNavigation<NativeStackNavigationProp<AuthParamList>>();
  const authAnimation = useAnimatedAuth(false);
  const {
    control,
    formState: { errors },
    formState,
    handleSubmit,
  } = useForm<IFormLogin>({
    mode: "onChange",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState<IError>({} as IError);

  const { SetUser } = UserSlice.actions;
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    if (data.name && data.lastName) {
      setUser({
        email: data.email,
        password: data.password,
        name: data.name,
        lastName: data.lastName,
      });
      const getUser = await registration(user, setError);
      if (getUser) {
        dispatch(SetUser(getUser));
      }
    }

    console.log({ data });
  };
  return (
    <Animated.View
      sharedTransitionTag="auth"
      style={[gStyle.main, authAnimation.style]}
    >
      <View style={gStyle.centerContainer}>
        <View style={authStyle.container_auth}>
          <View style={[gStyle.flexB, authStyle.blockAuthSelect]}>
            <Text
              onPress={() => navigation.navigate("login")}
              style={[gStyle.text, authStyle.authSelect]}
            >
              {I18n.t("auth_login1")}
            </Text>
            <Text
              style={[
                gStyle.text,
                authStyle.authSelect,
                authStyle.authSelectActive,
                gStyle.marginRight5,
              ]}
            >
              {I18n.t("auth_registration")}
            </Text>
          </View>
          <View style={authStyle.containerInput}>
            <View style={[gStyle.flexBSpaceBetween]}>
              <ControlledInput
                defaultValue=""
                placeholder={I18n.t("auth_name")}
                errors={errors}
                name="name"
                control={control}
                rules={{
                  required: "Name is required!",
                }}
              />
              <ControlledInput
                defaultValue=""
                placeholder={I18n.t("auth_lastName")}
                errors={errors}
                name="lastName"
                control={control}
                rules={{
                  required: "lastName is required!",
                }}
              />
            </View>
            {/* <View style={[gStyle.flexBSpaceBetween]}>
              <TextInput
                placeholder={I18n.t("auth_name")}
                style={[
                  authStyle.input,
                  authStyle.inputMin,
                  gStyle.marginRight5,
                ]}
              />
              <TextInput
                placeholder={I18n.t("auth_lastName")}
                style={[authStyle.input, authStyle.inputMin]}
              />
            </View> */}

            <ControlledInput
              defaultValue=""
              placeholder={I18n.t("auth_email")}
              errors={errors}
              name="email"
              control={control}
              rules={{
                required: "Email is required!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
            />
            <ControlledInput
              isPassword={true}
              defaultValue=""
              placeholder={I18n.t("auth_password")}
              errors={errors}
              name="password"
              control={control}
              secureTextEntry={true}
              rules={{
                required: "password is required!",
              }}
            />

            <Pressable
              style={authStyle.submitButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={authStyle.buttonText}>{I18n.t("auth_login2")}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default RegistrationScreen;

// <Formik
// initialValues={{ email: "", password: "" }}
// validate={(values) => {
//   const errors = {} as { email: string };
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// }}
// onSubmit={(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// }}
// >
// {({
//   values,
//   errors,
//   touched,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   isSubmitting,
//   /* and other goodies */
// }) => (
//   <form onSubmit={handleSubmit}>
//     <View style={{}}>
//       <TextInput
//         //type="email"
//         //name="email"
//         placeholder={I18n.t("auth_email")}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.email}
//         style={authStyle.input}
//       />
//       {/* <input
//         type="email"
//         name="email"
//         placeholder={I18n.t("auth_email")}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.email}
//         style={{
//           borderWidth: 0,
//           color: "#6EFFB1",
//           height: 40,
//           borderBottomColor: "#AA76D2",
//           borderBottomWidth: 1,
//           backgroundColor: "#0E0B1D",
//           paddingLeft: 5,
//           marginBottom: 10,
//         }}
//       /> */}
//       {errors.email && touched.email && errors.email}
//       <input
//         type="password"
//         name="password"
//         placeholder={I18n.t("auth_password")}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.password}
//       />
//       {errors.password && touched.password && errors.password}
//       <button type="submit" disabled={isSubmitting}>
//         {I18n.t("auth_login2")}
//       </button>
//     </View>
//   </form>
// )}
// </Formik>
