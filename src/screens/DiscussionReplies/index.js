import React from "react";
import { View, Text } from "react-native";
import { DiscussionCard } from "../../components/DiscussionCard";
import { ChosenDiscussion } from "./components/ChosenDiscussion";

export const DiscussionReplies = () => {
  return (
    <View>
      <ChosenDiscussion />
      <DiscussionCard
        name="Andrew Gunderman"
        timePosted="23 minutes ago"
        message="Does anyone know where I can find a cheaper version of our Physics 1250 book?"
      />
      <DiscussionCard
        name="Andrew Gunderman"
        timePosted="23 minutes ago"
        message="Does anyone know where I can find a cheaper version of our Physics 1250 book?"
      />
    </View>
  );
};
