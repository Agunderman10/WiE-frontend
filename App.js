import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Screens } from './src/screens/index';
import { Landing } from './src/screens/Landing/index';

export default function App() {
  const loggedin = false;

  if(loggedin === true) {
    return (
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    );
  }
  else {
    return (
      <Landing />
    );
  }
}
