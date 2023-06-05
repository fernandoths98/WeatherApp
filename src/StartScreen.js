import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './home/HomeScreen';
import DetailScreen from './home/DetailScreen';


const Stack = createNativeStackNavigator();

const StartScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default StartScreen