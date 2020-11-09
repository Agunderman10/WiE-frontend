import React from "react";
import { Text, View } from "react-native";
import { DiscussionCard } from "../../components/DiscussionCard";

export const Discussions = () => {
  return (
    <View>
      <DiscussionCard
        name="Andrew Gunderman"
        timePosted="23 minutes ago"
        message="Does anyone know where I can find a cheaper version of our Physics 1250 book?"
      />
      <DiscussionCard
        name="James Silver"
        timePosted="34 minutes ago"
        message="Is version 5 of the textbook for Physics 1251 okay even though we're supposed to have version 3?"
      />
      <DiscussionCard
        name="Jimmy Latter"
        timePosted="56 minutes ago"
        message="Can I use notes on the upcoming exam in Math 1172?"
      />
      <DiscussionCard
        name="Henry Wilson"
        timePosted="2h ago"
        message="Could I get notes from lecture today in Physics 1250? I missed class."
      />
    </View>
  );
};
