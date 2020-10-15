import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CURRENT_APP_VERSION } from "./../../constants/app";

import { styles } from "./styles";
export const Settings = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemText}>Add Additional Items</Text>
      </TouchableOpacity>
      <Text style={styles.versionNumber}>Version: {CURRENT_APP_VERSION}</Text>
    </View>
  );
};
