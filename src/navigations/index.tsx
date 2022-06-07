import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PokeDetails from '../screens/PokeDetails';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false, orientation: 'portrait'}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PokeDetails" component={PokeDetails} />
    <Stack.Screen name="Favorites" component={Favorites} />
  </Stack.Navigator>
);

export default MainStack;
