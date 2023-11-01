import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {images} from '../helper/images';

const Bll = () => {
  return (
    <View style={styles.imageview}>
      <View style={styles.viewimage2}>
        <Image source={images.roungyoutbe} />
        <View>
          <Text style={styles.textyoutube}>Youtube Premium</Text>
          <Text style={styles.datetext}>Feb 28, 2022</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageview: {
    width: wp(378),
    height: hp(771),
    padding: 30,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 30,
    top: hp(170),
  },
  viewimage2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textyoutube: {
    fontSize: fs(18),
    fontWeight: '400',
    color: 'black',
  },
  datetext: {
    fontSize: fs(14),
    fontWeight: '400',
    color: '#666',
    margin: hp(5),
  },
});
export default Bll;
