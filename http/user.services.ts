import { error } from "console";
import { $authHost, $host } from ".";
import {
  IUpdateAvatar,
  Iuser,
  IuserChat,
  IuserForState,
  IuserLogin,
  IuserReg,
} from "../types/IUser";
import { AxiosError } from "axios";
import { IError } from "../types/IError";
import { Dispatch, SetStateAction } from "react";
import AsyncStorage from "@react-native-community/async-storage";
// import { IFi } from "../components/Modal/ModalUserInfo";

export const registration = async (
  user: IuserReg,
  setError: Dispatch<SetStateAction<IError>>
) => {
  const res = await $host
    .post("api/auth/registration", user)
    .catch((error: AxiosError) => {
      console.log("error = ", error.response?.data);
      console.log("type error = ", error);
      if (error.response?.data)
        setError({ ...error.response?.data, isError: true });
    });

  if (res) {
    const data = res.data;
    try {
      await AsyncStorage.setItem("token", data.refreshToken);
    } catch (e) {
      console.error((e as Error).message);
    }
    // localStorage.setItem("token", data.refreshToken);
    return data;
  }
};

export const login = async (
  user: IuserLogin,
  setError: Dispatch<SetStateAction<IError>>
) => {
  const res = await $host
    .post("api/auth/login", user)
    .catch((error: AxiosError) => {
      console.log("error = ", error.response?.data);
      console.log("type error = ", error);
      if (error.response?.data)
        setError({ ...error.response?.data, isError: true });
    });
  if (res) {
    const data = res.data;
    try {
      await AsyncStorage.setItem("token", data.refreshToken);
    } catch (e) {
      console.error((e as Error).message);
    }
    // localStorage.setItem("token", data.refreshToken);
    return data;
  }
};

export const check = async () => {
  const res = await $authHost.post("api/auth/login/token");

  if (res) {
    const data = res.data;
    try {
      await AsyncStorage.setItem("token", data.refreshToken);
    } catch (e) {
      console.error((e as Error).message);
    }
    // localStorage.setItem("token", data.refreshToken);
    return data;
  }
  // localStorage.setItem("token", data.refreshToken);
  // return data;
};

export const getAllUsers = async () => {
  const { data } = await $authHost.get("api/user/allUsers");
  const users: IuserChat[] = data.users;
  return users;
};

export const updateUserAvatar = async (dto: IUpdateAvatar) => {
  const { data } = await $authHost.post("api/user/updateAvatar", dto);
};

// export const updateUserFi = async (newFi: IFi) => {
//   const { data } = await $authHost.post("api/user/updateFi", newFi);
// };
