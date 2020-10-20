import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home } from "./../../screens/Home/index";
import { IndividualEvent } from "./../../screens/IndividualEvent/index";
import { Settings } from "./../../screens/Settings/index";
import { AddItems } from "./../../screens/AddItems/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddRequest } from "./../../screens/AddRequest/index";
import { PendingRequests } from "./../../screens/PendingRequests/index";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 23,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("pressed here");
                navigation.navigate("Settings", { navigation });
              }}
            >
              <MaterialCommunityIcons
                style={{ marginRight: 10 }}
                name="settings"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="Add Items"
        component={AddItems}
        options={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 23 },
        }}
      />
      <Stack.Screen
        name="Add Request"
        component={AddRequest}
        options={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 23 },
        }}
      />
      <Stack.Screen
        name="Pending Requests"
        component={PendingRequests}
        options={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 23 },
        }}
      />
      <Stack.Screen
        name="Individual Event"
        component={IndividualEvent}
        options={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 23,
          },
        }}
      />
    </Stack.Navigator>
  );
}
