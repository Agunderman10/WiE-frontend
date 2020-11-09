import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    discussionContainer: {
        marginTop: 5,
        borderWidth: 2,
        borderColor: "lightgrey",
    },
    userName: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    timePosted: {
        position: "absolute",
        right: 0,
        top: 0,
        marginRight: 5,
        marginTop: 5,
        fontSize: 12,
    },
    message: {
        color: "black",
        margin: 10,
    },
});