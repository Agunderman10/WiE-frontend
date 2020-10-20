import * as React from "react";
import { Landing } from "./Landing";
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
