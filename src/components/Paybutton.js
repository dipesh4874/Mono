import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {useNavigation} from '@react-navigation/native';

const Paybutton = ({tittle, navigations, color}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.paynow}
        onPress={() => navigation.navigate(navigations)}>
        <Text style={styles.paytext}>{tittle}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  paynow: {
    backgroundColor: '#438883',
    height: hp(60),
    width: wp(320),
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
});
export default Paybutton;
