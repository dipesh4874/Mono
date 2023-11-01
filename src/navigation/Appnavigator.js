import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from '../screens/Homepage';
import TabNavigation from './TabNavigation';
import Onbording from '../screens/Onbording';
import Stastic from '../screens/Stastic';
import AddExpense from '../screens/AddExpense';
import ConnectWallet from '../screens/ConnectWallet';
import Wallet from '../screens/Wallet';

import Detailbill from '../screens/Detailbill';
import Paybill from '../screens/Paybill';
import Succesfull from '../screens/Succesfull';

const Stack = createNativeStackNavigator();

const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="<"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="Stastic" component={Stastic} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Detailbill" component={Detailbill} />
        <Stack.Screen name="Paybill" component={Paybill} />
        <Stack.Screen name="Succesfull" component={Succesfull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const TwoScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Wallets" component={Wallet} />
      <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
      <Stack.Screen name="Detailbill" component={Detailbill} />
      <Stack.Screen name="Paybill" component={Paybill} />
      <Stack.Screen name="Succesfull" component={Succesfull} />
    </Stack.Navigator>
  );
};

export default Appnavigator;
