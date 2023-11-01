import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';

const TopSpanding = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Top Spending</Text>
      <Image source={images.updn} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    marginTop: hp(25),
    paddingBottom: hp(10),
  },
  text: {
    fontSize: fs(18),
    fontWeight: '600',
    color: 'black',
  },
});

export default TopSpanding;
