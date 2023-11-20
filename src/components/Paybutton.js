import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Paybutton = ({tittle, navigations, color, disabled, route}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => navigation.navigate(navigations, route)}
        style={styles.btnshadow}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#69AEA9', '#3F8782']}
          style={styles.button}>
          <Text style={styles.buttonText}>{tittle}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  paynow: {
    // backgroundColor: '#438883',
    height: hp(60),
    width: wp(358),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'center',
    shadowColor: '#3E7C78',
    shadowOffset: {
      width: wp(-5),
      height: hp(12),
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  paytext: {
    fontSize: fs(18),
    color: 'white',
    fontWeight: '600',
  },
  btnshadow: {
    shadowColor: '#3E7C78',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 11,
  },
  button: {
    width: wp(358),
    height: hp(64),
    borderRadius: 40,

    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: fs(18),
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
export default Paybutton;
