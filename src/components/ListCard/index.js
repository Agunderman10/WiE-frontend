import React, { Children } from "react";
import { View } from "react-native";

import { styles } from "./styles";

export const ListCard = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};
