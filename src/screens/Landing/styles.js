import { Stylesheet, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        width: 250,
        height: 40,
        marginBottom: 30,
    },
    loginButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        width: 160,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
    },
    signUpLabel: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 25,
    }
});