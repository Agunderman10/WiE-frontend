import React, { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import {
  FlatList,
  RotationGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { postAcceptRequest } from "./../../api/RequestsAPI";

import { styles } from "./styles";

export const PendingRequests = ({ route }) => {
  const { pendingRequests } = route.params;
  const [pendingRequestsData, setPendingRequestsData] = useState(pendingRequests);

  const acceptRequest = (label, link, date, time, timeIsAmOrPm, className) => {
      postAcceptRequest(label, link, date, time, timeIsAmOrPm, className);

      // remove accepted request from pending list
      const filteredData = pendingRequestsData.filter(item => item.link !== link);
      setPendingRequestsData(filteredData);
  };

  const declineRequest = (link) => {
    const filteredData = pendingRequestsData.filter(item => item.link !== link);
    setPendingRequestsData(filteredData);
  }

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
          <TouchableOpacity
            style={styles.accept}
            onPress={() => acceptRequest(item.label, item.link, item.date, item.time, item.timeIsAmOrPm, item.class)}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decline} onPress={() => declineRequest(item.link)}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={pendingRequestsData}
        extraData={pendingRequestsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
};
