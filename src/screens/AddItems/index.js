import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";
import { postEvent } from "./../../api/EventsAPI";
import { postStudyGroup } from "./../../api/StudyGroupsAPI";
import { Loader } from "./../../components/Loader/index";

import { styles } from "./styles";

export const AddItems = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timeIsAmOrPm, setTimeIsAmOrPm] = useState("am");
  const [selectedCategory, setSelectedCategory] = useState("MEP PREFACE");
  const [loading, setLoading] = useState(false);

  const submitItem = () => {
    setLoading(true);

    // if selectedCategory is a study group or event
    if (
      selectedCategory === "MEP PREFACE" ||
      selectedCategory === "WiE LC Events" ||
      selectedCategory === "DOI Events"
    ) {
      setTimeout(() => {
        postEvent(name, link, date, time, timeIsAmOrPm, selectedCategory);
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        postStudyGroup(name, link, date, time, timeIsAmOrPm, selectedCategory);
        setLoading(false);
      }, 2000);
    }
    console.log(name, link, date, time, timeIsAmOrPm, selectedCategory);
  };

  return (
    <View style={styles.container}>
      <Loader isLoading={loading} />
      <Text style={styles.text}>Event or Study Group Name:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(newValue) => {
            setName(newValue);
          }}
        />
      </View>
      <Text style={styles.text}>Zoom Link:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(newValue) => {
            setLink(newValue);
          }}
        />
      </View>
      <Text style={styles.text}>Date:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(newValue) => {
            setDate(newValue);
          }}
        />
      </View>
      <Text style={styles.text}>Time:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(newValue) => {
            setTime(newValue);
          }}
        />
        <Picker
          style={styles.timePicker}
          selectedValue={timeIsAmOrPm}
          onValueChange={(itemValue, itemIndex) => setTimeIsAmOrPm(itemValue)}
        >
          <Picker.Item label="am" value="am" />
          <Picker.Item label="pm" value="pm" />
        </Picker>
      </View>
      <Text style={styles.text}>Category:</Text>
      <View style={styles.textInputContainer}>
        <Picker
          style={styles.categoryPicker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }
        >
          <Picker.Item label="MEP PREFACE" value="MEP PREFACE" />
          <Picker.Item label="WiE LC Events" value="WiE LC Events" />
          <Picker.Item label="DOI Events" value="DOI Events" />
          <Picker.Item label="FE 1181" value="FE 1181" />
          <Picker.Item label="FEH" value="FEH" />
          <Picker.Item label="Physics 1250" value="Physics 1250" />
          <Picker.Item label="Physics 1251" value="Physics 1251" />
          <Picker.Item label="Chem 1210" value="Chem 1210" />
          <Picker.Item label="Math 1172" value="Math 1172" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => submitItem()}>
        <Text style={styles.buttonText}>Submit Item</Text>
      </TouchableOpacity>
    </View>
  );
};
