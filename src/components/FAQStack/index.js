import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { DiscussionReplies } from "../../screens/DiscussionReplies";
import { Discussions } from "../../screens/Discussions";
import { FAQ } from "../../screens/FAQ";

const Stack = createStackNavigator();

export const FAQStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FAQ"
        children={() => <FAQ />}
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
        name="Discussions"
        component={Discussions}
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
        name="Discussion"
        component={DiscussionReplies}
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
};
