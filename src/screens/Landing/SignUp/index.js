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
import { Loader } from "./../../../components/Loader/index";

import { styles } from "./../styles";

import { Screens } from "../../index"; // will remove this later

export const SignUp = ({
  setSignUpModalVisible,
  signUpModalVisible,
  setSignInModalVisible,
}) => {
  const [loading, setLoading] = useState(false);

  const signUp = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      /*var isSuccess = await checkLoginCredentials(email, password);

      if (isSuccess) {
        setSignUpModalVisible(false);
        setSignInModalVisible(false);
      } else {
        Alert.alert(
          "Error",
          "There was an issue with your sign up. Please try again."
        );
      }*/
    }, 2000);
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
          <Loader isLoading={loading} />
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
