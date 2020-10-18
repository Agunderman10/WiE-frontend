import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { AsyncStorage } from "@react-native-community/async-storage";

import { styles } from "./styles";

import { checkLoginCredentials } from "./../../api/UsersAPI";
import { SignUp } from "./SignUp";
import { Loader } from "./../../components/Loader/index";

export const Landing = () => {
  const [signInModalVisible, setSignInModalVisible] = useState(true);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      var isSuccess = await checkLoginCredentials(email, password);

      if (isSuccess) {
        setSignUpModalVisible(false);
        setSignInModalVisible(false);
      } else {
        Alert.alert(
          "Error",
          "There was an issue with your sign in. Please try again."
        );
      }
    }, 2000);
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
          <Loader isLoading={loading} />
          <View style={styles.container}>
            <Image
              style={styles.frontImage}
              source={require("../../../images/ohiostatelogo.jpg")}
            />
            <TextInput
              placeholder="OSU Email..."
              maxLength={45}
              onChangeText={(userEmail) => setEmail(userEmail)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password..."
              maxLength={45}
              onChangeText={(userPassword) => setPassword(userPassword)}
              secureTextEntry={true}
              style={styles.textInput}
            />
            <TouchableOpacity onPress={signIn} style={styles.loginButton}>
              <Text>Sign In</Text>
            </TouchableOpacity>
            {/*<View style={styles.signUpLabel}>
              <Text onPress={openSignUp} style={styles.signUpText}>
                Don't have an account? Sign up
              </Text>
  </View>*/}
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
