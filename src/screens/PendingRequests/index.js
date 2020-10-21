import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { EmptyListNotification } from "../../components/EmptyListNotification";
import {
  postAcceptRequest,
  deleteDeclinedRequest,
} from "./../../api/RequestsAPI";

import { styles } from "./styles";

export const PendingRequests = ({ route }) => {
  const { pendingRequests } = route.params;
  const [pendingRequestsData, setPendingRequestsData] = useState(
    pendingRequests
  );

  const acceptRequest = async (
    label,
    link,
    date,
    time,
    timeIsAmOrPm,
    className
  ) => {
    let isSuccess = await postAcceptRequest(
      label,
      link,
      date,
      time,
      timeIsAmOrPm,
      className
    );

    if (isSuccess.success) {
      // remove accepted request from pending list
      const filteredData = pendingRequestsData.filter(
        (item) => item.link !== link
      );
      setPendingRequestsData(filteredData);
    }
    else {
      Alert.alert("Error", "There was an issue accepting this request. Please try again later.");
    }
  };

  const declineRequest = (link) => {
    deleteDeclinedRequest(link);

    // remove declined request from pending list
    const filteredData = pendingRequestsData.filter(
      (item) => item.link !== link
    );
    setPendingRequestsData(filteredData);
  };

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
            onPress={() =>
              acceptRequest(
                item.label,
                item.link,
                item.date,
                item.time,
                item.timeIsAmOrPm,
                item.class
              )
            }
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.decline}
            onPress={() => declineRequest(item.link)}
          >
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
        ListEmptyComponent={EmptyListNotification}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
};
