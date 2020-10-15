import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { styles } from "./styles";

export const AddItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event or Study Group Name:</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} />
      </View>
      <Text style={styles.text}>Zoom Link:</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} />
      </View>
      <Text style={styles.text}>Date:</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} />
      </View>
      <Text style={styles.text}>Time:</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} />
      </View>
      <Text style={styles.text}>Category:</Text>
    </View>
  );
};
