import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fs, hp, wp} from '../helper/Globel';

const SendAgin = () => {
  return (
    <View style={styles.sendaginview}>
      <Text style={styles.text}>Send Again</Text>
      <Text style={styles.secondtext}>See all</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sendaginview: {
    justifyContent: 'space-between',
    paddingHorizontal: wp(17),
    flexDirection: 'row',
    marginTop: hp(15),
    // paddingTop: hp(15),
  },
  text: {
    fontSize: fs(18),
    fontWeight: '600',
    color: '#222',
  },

  secondtext: {
    fontSize: fs(14),
    fontWeight: '400',
    color: '#666',
  },
});

export default SendAgin;
