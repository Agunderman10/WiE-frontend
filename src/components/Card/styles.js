import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        width: 170,
        height: 100,
        marginLeft: 7,
        marginBottom: '5%',
    },
    cardBackgroundImage: {
        width: '100%',
        height: '100%',
    },
    eventLabelContainer: {
        position: "absolute",
        bottom: -1,
        width: "100%",
    },
    eventLabel: {
        color: "black",
        backgroundColor: "white",
        textAlign: 'center',
    }
});