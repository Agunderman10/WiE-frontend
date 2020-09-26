import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Screens } from "./src/screens/index";
import { Landing } from "./src/screens/Landing/index";
import { SignUp } from "./src/screens/Landing/SignUp/index";

export default function App() {
  return (
    <NavigationContainer>
      <Landing />
      <Screens />
    </NavigationContainer>
  );
}
