import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Homepage';
import Stastic from '../screens/Stastic';
import Profile from '../screens/Profile';
import Wallet from '../screens/Wallet';
import {hp, wp} from '../helper/Globel';
import ConnectWallet from '../screens/ConnectWallet';
import {TwoScreen} from './Appnavigator';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          zIndex: 0,
          // position: 'absolute',
          // bottom: 0,
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/images/HhomeFill.png')
              : require('../assets/images/Hhome.png');
            color = focused ? '#438883' : 'grey';
          } else if (route.name === 'Stastic') {
            iconName = focused
              ? require('../assets/images/barchart.png')
              : require('../assets/images/Stastic.png');
            color = focused ? '#438883' : 'grey';
          } else if (route.name === 'Wallet') {
            iconName = focused
              ? require('../assets/images/wallete.png')
              : require('../assets/images/wallet.png');
            color = focused ? '#438883' : 'grey';
          } else if (route.name === 'Profile') {
            color = focused ? '#438883' : 'grey';
            iconName = focused
              ? require('../assets/images/profile.png')
              : require('../assets/images/user.png');
          }

          return (
            <Image
              source={iconName}
              style={{height: hp(25), width: hp(25)}}
              tintColor={color}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Stastic" component={Stastic} />
      <Tab.Screen name="Wallet" component={TwoScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
