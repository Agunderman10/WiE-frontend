import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
} from "react-native";

import { styles } from "./../styles";

import { Screens } from "../../index"; // will remove this later

export const SignUp = ({ setSignUpModalVisible, signUpModalVisible, setSignInModalVisible }) => {
  const signUp = () => {
    // sign up logic
    setSignUpModalVisible(false);
    setSignInModalVisible(false);
  };

  const openSignIn = () => {
    setSignInModalVisible(true);
    setSignUpModalVisible(false);
  };

  return (
    <View>
      <Modal visible={signUpModalVisible} animationType="fade">
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../../../images/Oval.jpg")}
        >
          <View style={styles.container}>
            <Image
              style={styles.frontImage}
              source={require("../../../../images/ohiostatelogo.jpg")}
            />
            <TextInput
              placeholder="OSU Email..."
              style={styles.signUpTextInput}
            />
            <TextInput
              placeholder="Full Name..."
              style={styles.signUpTextInput}
            />
            <TextInput
              placeholder="Password..."
              secureTextEntry={true}
              style={styles.signUpTextInput}
            />
            <TextInput
              placeholder="Confirm Password..."
              secureTextEntry={true}
              style={styles.signUpTextInput}
            />
            <TouchableOpacity onPress={signUp} style={styles.loginButton}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signUpLabel}>
              <Text onPress={openSignIn} style={styles.signUpText}>
                Already have an account? Sign in
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};
