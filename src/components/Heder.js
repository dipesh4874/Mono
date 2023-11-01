import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';

const Heder = ({item, hedername, imagess, color, imagecolor, style}) => {
  return (
    <SafeAreaView style={[styles.safview, style]}>
      <TouchableOpacity onPress={item}>
        <Image source={images.left} style={{tintColor: imagecolor}} />
      </TouchableOpacity>
      <Text style={[styles.text, {color: color}]}>{hedername}</Text>
      <Image source={imagess} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(20),
    marginTop: hp(70),
  },
  text: {
    fontWeight: '600',
    fontSize: fs(18),
  },
});

export default Heder;
