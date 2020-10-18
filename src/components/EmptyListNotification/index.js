import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const EmptyListNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fillerText}>
        Looks like we have no data to show...
      </Text>
    </View>
  );
};
