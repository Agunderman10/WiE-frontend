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
import { SignUp } from "./SignUp";

export const Landing = () => {
  const [signInModalVisible, setSignInModalVisible] = useState(true);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);

  const signIn = () => {
    // sign in logic
    setSignInModalVisible(false);
    setSignUpModalVisible(false);
  };

  const openSignUp = () => {
    setSignUpModalVisible(true);
    //setSignInModalVisible(false);
  };

  return (
    <View>
      <Modal visible={signInModalVisible} animationType="fade">
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../../images/Oval.jpg")}
        >
          <View style={styles.container}>
            <Image
              style={styles.frontImage}
              source={require("../../../images/ohiostatelogo.jpg")}
            />
            <TextInput placeholder="OSU Email..." style={styles.textInput} />
            <TextInput placeholder="Password..." secureTextEntry={true} style={styles.textInput} />
            <TouchableOpacity onPress={signIn} style={styles.loginButton}>
              <Text>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signUpLabel}>
              <Text onPress={openSignUp} style={styles.signUpText}>
                Don't have an account? Sign up
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Modal>
      <SignUp
        setSignUpModalVisible={setSignUpModalVisible}
        signUpModalVisible={signUpModalVisible}
        setSignInModalVisible={setSignInModalVisible}
      />
    </View>
  );
};
