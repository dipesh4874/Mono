import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import {images} from '../helper/images';
import {hp, wp} from '../helper/Globel';
import Heder from '../components/Heder';

const Profile = ({navigation}) => {
  return (
    <View style={styles.view}>
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
      </ImageBackground>
      <View style={styles.view2}>
        <Image source={images.girlkid} />
        <Text style={styles.text1}>Enjelin Morgeana</Text>
        <Text style={styles.text2}>@enjelin_morgeana</Text>
      </View>
      <View style={styles.view3}>
        <Image source={images.dimoand} />
        <Text style={styles.text3}>Invite Friends</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.view4}>
          <Image source={images.userpr} />
          <Text style={styles.text4}>Account info</Text>
        </View>
        <View style={styles.view4}>
          <Image source={images.dualuser} />
          <Text style={styles.text4}>Personal profile</Text>
        </View>
        <View style={styles.view4}>
          <Image source={images.email} />
          <Text style={styles.text4}>Message center</Text>
        </View>
        <View style={styles.view4}>
          <Image source={images.chek} />
          <Text style={styles.text4}>Login and security</Text>
        </View>
        <View style={styles.view4}>
          <Image source={images.lock} />
          <Text style={styles.text4}>Data and privacy</Text>
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
  view: {
    flex: 1,
  },
  view2: {
    alignItems: 'center',
    bottom: 75,
  },
  text1: {
    fontSize: 20,
    fontWeight: '600',
  },
  text2: {
    fontSize: 14,
    color: '#438883',
    fontWeight: '600',
    padding: 5,
  },
  view3: {
    flexDirection: 'row',
    paddingHorizontal: wp(40),
    alignItems: 'center',
    bottom: hp(50),
    borderBottomWidth: wp(2),
    borderBottomColor: '#EEE',
  },
  text3: {
    marginLeft: wp(15),
    fontWeight: '500',
  },
  container: {
    marginLeft: wp(10),
  },
  text4: {
    marginLeft: wp(23),
    fontWeight: '500',
  },
  view4: {
    flexDirection: 'row',
    paddingHorizontal: wp(40),
    alignItems: 'center',
    bottom: hp(20),
    marginBottom: hp(20),
  },
});

export default Profile;
