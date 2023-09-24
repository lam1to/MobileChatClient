import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  useWindowDimensions,
} from "react-native";
import { gStyle } from "../../Style/mainStyle";
import I18n from "../../i18n/index";
import { authStyle } from "../../Style/authStyle";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthParamList } from "../../types/TNavigation";
import { IuserForState, IuserLogin } from "../../types/IUser";
import { login } from "../../http/user.services";
import { UserSlice } from "../../store/Reducers/UserSlice";
import { IError } from "../../types/IError";
import { useAppDispatch } from "../../Hooks/redux";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAnimatedAuth } from "../../Hooks/useAnimatedAuth";
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { IFormAuth } from "../../types/IForm";
import { ControlledInput } from "./ControlledInput";

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthParamList>>();
  const [user, setUser] = useState<IuserLogin>({
    email: "",
    password: "",
  } as IuserLogin);
  const { SetUser } = UserSlice.actions;
  const dispatch = useAppDispatch();
  const [error, setError] = useState<IError>({} as IError);

  const animationAuth = useAnimatedAuth(true);

  const {
    control,
    formState: { errors },
    formState,
    handleSubmit,
  } = useForm<IFormAuth>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit: SubmitHandler<IFormAuth> = async (data) => {
    setUser(data);
    const getUser: IuserForState = await login(user, setError);
    if (getUser) {
      dispatch(SetUser(getUser));
    }
    console.log({ data });
  };
  const loginF = async (e: GestureResponderEvent) => {
    e.preventDefault();

    const getUser: IuserForState = await login(user, setError);
    if (getUser) {
      dispatch(SetUser(getUser));
    }
  };

  return (
    <Animated.View
      sharedTransitionTag="auth"
      style={[gStyle.main, animationAuth.style]}
    >
      <View style={gStyle.centerContainer}>
        <View style={authStyle.container_auth}>
          <View style={[gStyle.flexB, authStyle.blockAuthSelect]}>
            <Text
              style={[
                gStyle.text,
                authStyle.authSelect,
                authStyle.authSelectActive,
                gStyle.marginRight5,
              ]}
            >
              {I18n.t("auth_login1")}
            </Text>
            <Text
              onPress={() => navigation.navigate("registration")}
              style={[gStyle.text, authStyle.authSelect]}
            >
              {I18n.t("auth_registration")}
            </Text>
          </View>

          <View style={authStyle.containerInput}>
            <ControlledInput
              defaultValue=""
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

export default LoginScreen;

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
