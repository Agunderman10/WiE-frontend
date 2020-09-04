import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  OpaqueColorValue,
  ImageBackground,
} from "react-native";

import { styles } from "./styles";

import { Screens } from "../index"; // will remove this later

export const Landing = () => {
  const signIn = () => {
    // sign in logic
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal visible={modalVisible} animationType="slide">
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../images/Oval.jpg")}
      >
        <View style={styles.container}>
          <Image
            style={styles.frontImage}
            source={{ uri: "../../../images/Oval.jpg" }}
          />
          <TextInput placeholder="OSU Email..." style={styles.textInput} />
          <TextInput placeholder="Password..." style={styles.textInput} />
          <TouchableOpacity onPress={signIn} style={styles.loginButton}>
            <Text>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signUpLabel}>
            <Text>Don't have an account? Sign up</Text>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};
