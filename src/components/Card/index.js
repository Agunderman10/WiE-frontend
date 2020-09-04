import React from "react";
import { View, Text, ImageBackground } from "react-native";

import { styles } from "./styles";

export const Card = ({ image, label }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.cardBackgroundImage}
        imageStyle={{ borderRadius: 15 }}
        source={require("../../../images/Oval.jpg")}
      />
      <View style={styles.eventLabelContainer}>
        <Text style={styles.eventLabel}>{label}</Text>
      </View>
    </View>
  );
};
