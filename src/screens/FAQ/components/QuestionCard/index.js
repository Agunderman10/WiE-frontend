import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const QuestionCard = (props) => {
  return (
    <View>
      <Text style={styles.questionHeader}>{props.header}</Text>
      <Text style={styles.questionBody}>{props.questionBody}</Text>
    </View>
  );
};
