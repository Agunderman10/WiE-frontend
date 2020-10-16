import React, { useState } from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { styles } from "./styles";

export const Loader = ({ isLoading }) => {
  return (
    <Modal visible={isLoading} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            style={styles.loader}
            animating={isLoading}
            size="large"
            color="red"
          />
        </View>
      </View>
    </Modal>
  );
};
