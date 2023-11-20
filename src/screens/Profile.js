import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import Heder from '../components/Heder';

const Profile = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Profile'}
          item={() => navigation.navigate('Wallet')}
          imagess={images.belll}
          color={'white'}
          imagecolor={'white'}
        />
        <View style={styles.view2}>
          <Image source={images.girlkid} style={styles.girlimage} />
          <Text style={styles.text1}>Enjelin Morgeana</Text>
          <Text style={styles.text2}>@enjelin_morgeana</Text>
        </View>
      </ImageBackground>
      <View>
        <View style={styles.view3}>
          <Image source={images.dimoand} style={styles.dimaondimage} />
          <Text style={styles.text3}>Invite Friends</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.view4}>
            <Image source={images.userpr} style={styles.useimage} />
            <Text style={styles.text4}>Account info</Text>
          </View>
          <View style={styles.view4}>
            <Image source={images.dualuser} style={styles.useimage} />
            <Text style={styles.text4}>Personal profile</Text>
          </View>
          <View style={styles.view4}>
            <Image source={images.email} style={styles.useimage} />
            <Text style={styles.text4}>Message center</Text>
          </View>
          <View style={styles.view4}>
            <Image source={images.chek} style={styles.useimage} />
            <Text style={styles.text4}>Login and security</Text>
          </View>
          <View style={styles.view4}>
            <Image source={images.lock} style={styles.useimage} />
            <Text style={styles.text4}>Data and privacy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imagbac: {
    width: '100%',
    height: hp(287),
  },

  view2: {
    alignItems: 'center',
    marginTop: hp(105),
  },
  text1: {
    fontSize: fs(20),
    fontWeight: '600',
  },
  text2: {
    fontSize: fs(14),
    color: '#438883',
    fontWeight: '600',
    padding: 5,
  },
  view3: {
    flexDirection: 'row',
    paddingHorizontal: wp(30),
    alignItems: 'center',
    gap: wp(5),
    marginTop: hp(144),
    borderBottomWidth: wp(2),
    borderBottomColor: '#EEE',
    marginHorizontal: wp(5),
  },
  text3: {
    marginLeft: wp(15),
    fontWeight: '500',
    fontSize: fs(16),
  },
  container: {
    // marginTop: hp(31),
    marginHorizontal: wp(34),
  },
  text4: {
    fontWeight: '500',
    fontSize: fs(16),
  },
  view4: {
    flexDirection: 'row',
    paddingHorizontal: wp(10),
    alignItems: 'center',
    gap: wp(30),
    marginTop: hp(31),
  },
  girlimage: {
    height: hp(120),
    width: hp(120),
  },
  useimage: {
    height: hp(30),
    width: wp(30),
  },
  dimaondimage: {
    height: hp(50),
    width: wp(50),
  },
});

export default Profile;
