import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';

const ExpenseIncome = () => {
  return (
    <View style={styles.cardsssview}>
      <View>
        <View style={styles.downimageview}>
          <Image source={images.down} />
          <Text style={styles.incomestyle}>Income</Text>
        </View>
        <Text style={styles.prizestyle}>$ 1,840.00</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image source={images.up} style={{marginRight: 4}} />
          <Text style={styles.epensestyle}>Expenses</Text>
        </View>
        <Text style={styles.lowdollstyle}>$ 284.00</Text>
      </View>
    </View>
  );
};

export default ExpenseIncome;

const styles = StyleSheet.create({
  cardsssview: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F7E79',
  },
  prizestyle: {
    fontSize: fs(20),
    color: '#FFF',
    fontWeight: '600',
    fontStyle: 'normal',
    marginLeft: wp(5),
  },
  epensestyle: {
    fontSize: fs(18),
    fontWeight: '500',
    color: '#D0E5E4',
  },
  lowdollstyle: {
    fontSize: fs(20),
    fontWeight: '600',
    color: '#fff',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  incomestyle: {
    color: '#D0E5E4',
    fontSize: fs(17),
    fontWeight: '500',
    fontStyle: 'normal',
    marginLeft: wp(5),
  },
  downimageview: {
    flexDirection: 'row',
  },
});
