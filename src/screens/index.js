import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Home } from "./Home/index";
import { Resources } from "./Resources/index";
import { StudyGroups } from "./StudyGroups/index";
import { FAQ } from "./FAQ/index";
import { Landing } from "./Landing";
import { HomeStack } from "../components/HomeStack";
import { Navigator } from "../components/Navigator";

export function Screens() {
  let isSignedIn = false;

  return (
    isSignedIn ? (
      <Navigator />
    ) : (
      <Landing />
    )
  );
}
