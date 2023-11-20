import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {images} from '../helper/images';

const Bll = ({route, navigations}) => {
  return (
    <View style={styles.imageview}>
      <View style={styles.viewimage2}>
        <Image source={route.image} style={styles.iamgestyle} />
        <View>
          <Text style={styles.textyoutube}>{route.name}</Text>
          <Text style={styles.datetext}>{route.date}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageview: {
    width: '100%',
    height: hp(771),
    padding: 30,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 30,
    top: hp(170),
    alignSelf: 'center',
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
    marginLeft: 5,
  },
  datetext: {
    fontSize: fs(14),
    fontWeight: '400',
    color: '#666',
    margin: hp(5),
  },
  iamgestyle: {
    height: hp(80),
    width: hp(80),
    borderRadius: 40,
  },
});
export default Bll;
