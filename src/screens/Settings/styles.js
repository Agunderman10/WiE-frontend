import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    itemContainer: {
        width: "100%",
        height: 60,
        borderWidth: 2,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        marginTop: 2,
    },
    itemText: {
        fontSize: 15,
        color: "black",
    },
    versionNumber: {
        alignSelf: "center",
        position: "absolute",
        bottom: 5,
    }
});