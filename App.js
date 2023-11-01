import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Appnavigator from './src/navigation/Appnavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Appnavigator />;
};

export default App;
