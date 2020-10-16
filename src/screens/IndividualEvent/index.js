import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from './styles';

export const IndividualEvent = ({ route, navigation }) => {
  const { image, label, location, date, time, timeIsAmOrPm } = route.params;
  return (
    <View>
    <Image style={styles.image} source={require("../../../images/Oval.jpg")}/>
      <Text style={styles.eventType}>{label}</Text>
      <Text style={styles.location}>{"Location: " + location}</Text>
      <Text style={styles.time}>{"Time: " + date + " " + time + timeIsAmOrPm}</Text>
    </View>
  );
};
