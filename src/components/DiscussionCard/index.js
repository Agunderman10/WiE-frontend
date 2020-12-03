import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const DiscussionCard = ({ name, timePosted, message}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.discussionContainer} onPress={() => navigation.navigate("Discussion")}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.timePosted}>{timePosted}</Text>
        <Text style={styles.message}>{message}</Text>
    </TouchableOpacity>
  );
};
