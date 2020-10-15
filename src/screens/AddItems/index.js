import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit Item</Text>
      </TouchableOpacity>
    </View>
  );
};
