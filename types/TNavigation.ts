import { NavigatorScreenParams } from "@react-navigation/native";
import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthParamList>;
  chat: undefined;
  listUsers: undefined;
  profile: undefined;
};

export type AuthParamList = {
  login: undefined;
  registration: undefined;
};

// export type Props = StackScreenProps<RootStackParamList, >;

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "auth",
  "chat"
>;

export type PropsNavigation = {
  navigation: ProfileScreenNavigationProp;
};
// export interface PropsOneNews extends PropsNavigation {
//   item: INews;
// }
