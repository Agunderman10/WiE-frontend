import React from "react";
import { Button, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

export const PendingRequests = () => {
  const DATA = [
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Empowherment Session",
      time: "2:00",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Mental Health Session",
      time: "3:00",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Mental Session",
      time: "4:00",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Session",
      time: "1:00",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{"Name: " + item.label}</Text>
        <Text style={styles.itemText}>{"Time: " + item.time}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.accept}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decline}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        extraData={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
};
