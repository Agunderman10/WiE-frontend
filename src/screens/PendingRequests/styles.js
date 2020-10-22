import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    itemContainer: {
        width: "100%",
        borderWidth: 2,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        marginTop: 3,
    },
    itemText: {
        fontSize: 15,
        color: "black",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },
    accept: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        height: 25,
        width: 70,
    },
    decline: {
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        height: 25,
        width: 70,
    }
});