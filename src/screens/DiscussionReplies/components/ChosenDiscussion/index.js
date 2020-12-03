import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export const ChosenDiscussion = ({ name, timePosted, message }) => {
  return (
    <View>
      <View style={styles.discussionContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.timePosted}>{timePosted}</Text>
        <Text style={styles.message}>{message}</Text>
        <MaterialCommunityIcons style={styles.reply} name="android-messages" size={26} color="black" />
      </View>
    </View>
  );
};
