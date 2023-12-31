import { StyleSheet } from "react-native";
export const authStyle = StyleSheet.create({
  authSelect: {
    fontSize: 20,
    color: "#AA76D2",
    fontFamily: "mt-bold",
    marginBottom: 10,
  },
  authSelectActive: {
    borderBottomWidth: 1,
    borderBottomColor: "#AA76D2",
    paddingBottom: 5,
    color: "#6EFFB1",
  },
  blockAuthSelect: {
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  container_auth: {
    height: "50%",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 0,
    color: "#6EFFB1",
    height: 40,
    underlineColorAndroid: "none",
    borderBottomColor: "#AA76D2",
    borderBottomWidth: 1,
    backgroundColor: "#0E0B1D",
    paddingLeft: 5,
    marginBottom: 10,
    justifyContent: "flex-start",
    position: "relative",
  },
  containerInput: {
    maxWidth: "80%",
    width: "100%",
    justifyContent: "center",
  },
  submitButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#AA76D2",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#6EFFB1",
  },
  inputMin: {
    width: "40%",
  },
  icon: {
    marginLeft: 10,
  },

  block_input_error: {
    height: 80,
    justifyContent: "flex-start",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  viewPassword: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "stretch",
  },
  blockInput: {
    borderWidth: 0,
    color: "#6EFFB1",
    height: 40,
    borderBottomColor: "#AA76D2",
    borderBottomWidth: 1,
    backgroundColor: "#0E0B1D",
    marginBottom: 10,
    justifyContent: "flex-end",
    position: "relative",
  },
  isHighlighted: {
    borderWidth: 0,
    borderColor: "black",
    outline: "none",
  },
});
