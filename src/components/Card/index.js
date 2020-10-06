import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";

export const Card = ({ image, label, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Individual Event", {image, label, navigation})}>
        <ImageBackground
          style={styles.cardBackgroundImage}
          imageStyle={{ borderRadius: 15 }}
          source={require("../../../images/Oval.jpg")}
        />
        <View style={styles.eventLabelContainer}>
          <Text style={styles.eventLabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
