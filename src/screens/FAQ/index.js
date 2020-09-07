import React from "react";
import { View, Text } from "react-native";

import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { QuestionCard } from "./components/QuestionCard/index";
import { styles } from "./styles";

export function FAQ() {
  return (
    <View>
    <Header title={"FAQ"}/>
      <ListCard>
        <Text>Discussion Board</Text>
        </ListCard>
      <ListCard>
        <Text style={styles.questionHeader}>Question 1</Text>
      </ListCard>

      <ListCard>
        <Text>Question 1</Text>
      </ListCard>

      <ListCard>
        <Text>Question 1</Text>
      </ListCard>
    </View>
  );
}
