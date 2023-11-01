import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {images} from '../helper/images';

const Upwork = ({
  image,
  platform,
  date,
  price,
  color,
  txtcolor,
  datecolor,
  dolcolor,
  containe,
}) => {
  return (
    <View style={styles.transjectionview}>
      <View style={styles.view}>
        <Image source={image} style={styles.upworkstyle} />
        <View style={{marginLeft: 5}}>
          <Text style={[styles.Symbolname, txtcolor]}>{platform}</Text>
          <Text style={[styles.date, datecolor]}>{date}</Text>
        </View>
      </View>
      <View>
        <View>{containe}</View>
        <Text style={[styles.updollr, {color: color}, dolcolor]}>{price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  transjectionview: {
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: hp(8),
  },
  upworkstyle: {
    height: wp(50),
    width: wp(50),
  },
  updollr: {
    alignSelf: 'flex-end',
    fontSize: fs(18),
    fontWeight: '600',
  },
  Symbolname: {
    color: 'black',
    padding: 5,
  },
  date: {
    marginLeft: wp(5),
    color: '#666666',
  },
});

export default Upwork;
