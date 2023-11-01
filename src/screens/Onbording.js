import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';

const Onbording = ({navigation}) => {
  return (
    <View style={styles.firstview}>
      <ImageBackground
        source={images.dipesh}
        resizeMode="stretch"
        style={styles.imageBacstyle}>
        <Image source={images.kid} style={styles.kidstyle} />
      </ImageBackground>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.textstyle}>Spend Smarter</Text>
        <Text style={styles.textstyle}>Save More </Text>
        <TouchableOpacity
          style={styles.touchstyle}
          onPress={() => navigation.navigate('Tab')}>
          <Text style={styles.styles}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.loginview}>
          <Text style={styles.laststyle}>Already Have Account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginsyle}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  firstview: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  imageBacstyle: {
    width: wp(400),
    height: hp(600),
    justifyContent: 'flex-end',
  },
  kidstyle: {
    height: hp(461),
    width: wp(278),
    alignSelf: 'center',
    // top: hp(10),
  },
  textstyle: {
    width: wp(301),
    color: '#438883',
    textAlign: 'center',
    fontSize: fs(36),
    fontStyle: 'normal',
    fontWeight: '700',
  },
  touchstyle: {
    padding: hp(20),
    borderRadius: 40,
    width: wp(358),
    height: hp(64),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#438883',
    marginTop: hp(15),
    shadowColor: '#3E7C78',

    shadowOffset: {
      width: wp(-5),
      height: hp(12),
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  styles: {
    alignSelf: 'center',
    fontSize: fs(18),
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'white',
  },
  laststyle: {
    fontWeight: '400',
    fontSize: fs(14),
    color: 'black',
  },
  loginsyle: {
    color: '#438883',
    fontSize: fs(14),
    fontStyle: 'normal',
    fontWeight: '500',
  },
  loginview: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(18),
    fontWeight: '500',
    fontSize: fs(14),
    lineHeight: 'normal',
  },
});

export default Onbording;
