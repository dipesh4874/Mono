import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fs, hp, wp} from '../helper/Globel';

const Tranjection = () => {
  return (
    <View style={styles.TarnjView}>
      <Text style={styles.text}>Transactions History</Text>
      <Text style={styles.secondtext}>See all</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  TarnjView: {
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    flexDirection: 'row',
    marginTop: hp(80),
  },
  text: {
    fontSize: fs(18),
    fontWeight: '600',
    color: 'black',
  },
  secondtext: {
    color: '#666',
  },
});

export default Tranjection;
