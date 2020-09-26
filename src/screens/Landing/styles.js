import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        zIndex: 100,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        zIndex: -1000,
        width: '100%',
        height: '100%',
    },
    frontImage: {
        height: '20.5%',
        width: '25.5%',
        marginTop: 60,
        marginBottom: 60,
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        width: '65%',
        height: 40,
        marginBottom: 30,
        backgroundColor: "white",
    },
    signUpTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        width: '65%',
        height: 40,
        marginBottom: 20,
        backgroundColor: "white",
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
    },
    signUpText: {
        color: "white",
        fontWeight: "bold",
    }
});