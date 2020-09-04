import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import { Screens } from '../index'; // will remove this later

const signIn = () => {
  // sign in logic
  return (
    <Screens />
  )
};

export const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <TextInput placeholder="OSU Email..." style={styles.textInput}/>
      <TextInput placeholder="Password..." style={styles.textInput}/>
      <TouchableOpacity onPress={signIn} style={styles.loginButton}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signUpLabel}>
        <Text>Don't have an account? Sign up</Text>
      </View>
    </View>
  );
};
