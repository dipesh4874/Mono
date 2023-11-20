import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import LinearGradient from 'react-native-linear-gradient';

const Onbording = ({navigation}) => {
  return (
    <View style={styles.firstview}>
      <ImageBackground
        source={images.dipesh}
        resizeMode="stretch"
        style={styles.imageBacstyle}>
        <Image source={images.kid} style={styles.kidstyle} />
      </ImageBackground>
      <View style={styles.spendview}>
        <Text style={styles.textstyle}>Spend Smarter</Text>
        <Text style={styles.textstyle}>Save More </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tab')}
          style={styles.btnshadow}>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#69AEA9', '#3F8782']}
            style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
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
    // flex: 1,
    height: hp(600),
    width: '100%',
    justifyContent: 'flex-end',
  },
  kidstyle: {
    height: hp(462),
    width: wp(277),
    alignSelf: 'center',
  },
  textstyle: {
    color: '#438883',
    textAlign: 'center',
    fontSize: fs(36),
    fontWeight: '700',
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
    marginTop: hp(17),
    fontWeight: '500',
    fontSize: fs(14),
    lineHeight: 'normal',
  },
  button: {
    // width: wp(358),
    // height: hp(64),
    paddingVertical: hp(18),
    paddingHorizontal: wp(130),
    borderRadius: 40,
    // marginHorizontal: wp(28),
    marginTop: hp(26),
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: fs(18),
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
  btnshadow: {
    shadowColor: '#3E7C78',
    shadowOffset: {
      width: wp(5),
      height: hp(10),
    },
    shadowOpacity: 0.6,
    shadowRadius: 11,
    elevation: 2,
  },
  spendview: {
    alignItems: 'center',
    // marginVertical: hp(50),
    // marginBottom: Platform.OS === 'android' ? hp(20) : hp(110),
    marginTop: Platform.OS === 'ios' ? hp(50) : hp(20),
  },
});

export default Onbording;
