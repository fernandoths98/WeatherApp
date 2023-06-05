import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './src/StartScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StartScreen />
    </NavigationContainer>
  )
}

export default App