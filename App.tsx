import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './components/screens/HomeScreen'
import {SwrScreen} from "./components/screens/SwrScreen";

export type RootStackParamList = {
  Home: undefined;
  Swr: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen}/>
        <Stack.Screen name={'Swr'} component={SwrScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
