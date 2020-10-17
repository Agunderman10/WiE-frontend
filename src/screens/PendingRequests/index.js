import React, { useEffect, useRef } from "react";
import { Button, Text, View } from "react-native";
import {
  FlatList,
  RotationGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { styles } from "./styles";

export const PendingRequests = ({ route }) => {
  const { pendingRequests } = route.params;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{"Name: " + item.label}</Text>
        <Text style={styles.itemText}>{"Link: " + item.link}</Text>
        <Text style={styles.itemText}>{"Date: " + item.date}</Text>
        <Text style={styles.itemText}>
          {"Time: " + item.time + item.timeIsAmOrPm}
        </Text>
        <Text style={styles.itemText}>{"Class: " + item.class}</Text>
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
        data={pendingRequests}
        extraData={pendingRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
};
