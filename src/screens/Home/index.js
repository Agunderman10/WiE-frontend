import React from 'react';
import { View, Text } from 'react-native';

import { Card } from '../../components/Card/index'

export function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Card image={"./../../../images/Oval.jpg"} label={"WiE Empowherment Session"}></Card>
      </View>
    );
  }