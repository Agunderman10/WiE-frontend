import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

export const SplashScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("./../../../images/Oval.jpg")} />
    </View>
  );
};
