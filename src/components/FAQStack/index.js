import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
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
    </Stack.Navigator>
  );
};
