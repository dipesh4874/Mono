import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fs, hp, wp} from '../helper/Globel';

const Fee = ({style}) => {
  return (
    <View>
      <View style={[styles.viewprice]}>
        <Text style={styles.textprice}>Price</Text>
        <Text style={styles.prizetext}>$ 11.99</Text>
      </View>
      <View style={styles.viewprice2}>
        <Text style={styles.textprice}>Fee</Text>
        <Text style={styles.prizetext}>$ 1.99</Text>
      </View>
      <View style={styles.viewtotal}>
        <Text style={styles.totaltext}>Total</Text>
        <Text style={styles.totalprize}>$ 13.98</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(10),
  },
  viewprice2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: hp(10),
    borderBottomWidth: 0.5,
  },
  viewtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(20),
  },
  textprice: {
    fontSize: fs(16),
    color: '#666',
    fontWeight: '500',
  },
  prizetext: {
    fontSize: fs(16),
    fontWeight: '500',
    color: '#000',
  },
  totaltext: {
    fontSize: fs(16),
    fontWeight: '600',
    color: '#666',
  },
  totalprize: {
    fontSize: fs(16),
    fontWeight: '700',
    color: '#000',
  },
});

export default Fee;
