import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  resourceContainer: {
      borderRadius: 25,
  },
  resourceImage: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  resourceImageBottom: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginBottom: 70,
  },
  resourceTypeHeader: {
    position: "absolute",
    left: 0,
    bottom: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: "4%",
    marginTop: "3%",
    marginBottom: "1%",
  },
});
