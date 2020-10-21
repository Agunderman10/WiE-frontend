import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getRequests } from "./../../api/RequestsAPI";
import { CURRENT_APP_VERSION } from "./../../constants/app";

import { styles } from "./styles";
export const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate("Add Items");
        }}
      >
        <Text style={styles.itemText}>Add Additional Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate("Add Request");
        }}
      >
        <Text style={styles.itemText}>Make Study Group Request</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemContainer}
        onPress={async () => {
          await getRequests().then((pendingRequests) => {
            navigation.navigate("Pending Requests", { pendingRequests });
          });
        }}
      >
        <Text style={styles.itemText}>Pending Study Group Requests</Text>
      </TouchableOpacity>

      <Text style={styles.versionNumber}>Version: {CURRENT_APP_VERSION}</Text>
    </View>
  );
};
