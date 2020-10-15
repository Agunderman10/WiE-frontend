import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

import { styles } from "./styles";

export const AddItems = () => {
  const [timeIsAmOrPm, setTimeIsAmOrPm] = useState("am");
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
        <Picker style={styles.timePicker} selectedValue={timeIsAmOrPm}>
          <Picker.Item label="am" value="am" />
          <Picker.Item label="pm" value="pm" />
        </Picker>
      </View>
      <Text style={styles.text}>Category:</Text>
      <View style={styles.textInputContainer}>
        <Picker style={styles.categoryPicker} selectedValue={timeIsAmOrPm}>
          <Picker.Item label="MEP PREFACE" value="MEP PREFACE" />
          <Picker.Item label="DOI Events" value="DOI Events" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit Item</Text>
      </TouchableOpacity>
    </View>
  );
};
