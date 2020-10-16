import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";

export const Loader = ({ isLoading }) => {

  return (
    <View>
      <ActivityIndicator animating={isLoading} size="large" color="red" />
    </View>
  );
};
