import { StyleSheet } from "react-native";
export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0E0B1D",
    overflow: "hidden",
  },
  flexB: {
    flexDirection: "row",
  },
  text: {
    color: "#6EFFB1",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontFamily: "mt-bold",
  },
  marginRight5: {
    marginRight: 5,
  },
  marginBotton10: {
    marginBottom: 30,
  },
  flexBSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexItemCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
});
