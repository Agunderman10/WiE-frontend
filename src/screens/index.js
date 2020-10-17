import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Home } from "./Home/index";
import { Resources } from "./Resources/index";
import { StudyGroups } from "./StudyGroups/index";
import { FAQ } from "./FAQ/index";
import { IndividualEvent } from "./IndividualEvent";
import { Settings } from "./Settings/index";
import { Button, View } from "react-native";
import { AddItems } from "./AddItems";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddRequest } from "./AddRequest";
import { PendingRequests } from "./PendingRequests";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
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

export function Screens() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home"
        children={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Study Groups"
        component={StudyGroups}
        options={({ navigation }) => ({
          tabBarLabel: "Study Groups",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarLabel: "FAQ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
