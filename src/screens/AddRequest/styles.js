import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "85%",
    height: 40,
  },
  text: {
    marginTop: 8,
    marginLeft: 20,
    marginBottom: 7,
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  timePicker: {
    marginTop: 5,
    height: 40,
    width: 100,
  },
  categoryPicker: {
    marginBottom: 5,
    height: 40,
    width: 175,
  },
  button: {
    marginTop: 5,
    backgroundColor: "red",
    width: 110,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
