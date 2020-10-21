import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Resources } from "./../../screens/Resources/index";
import { StudyGroups } from "./../../screens/StudyGroups/index";
import { FAQ } from "./../../screens/FAQ";
import { HomeStack } from "./../HomeStack/index";

const Tab = createBottomTabNavigator();


export function Navigator({ eventsData, studyGroupsData }) {
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
