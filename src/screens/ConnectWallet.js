import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {images} from '../helper/images';
import Heder from '../components/Heder';
import {TextInput} from 'react-native-paper';
import Account from '../components/Account';
import {useNavigation} from '@react-navigation/native';

const ConnectWallet = () => {
  const [show, setshow] = useState('cards');
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <ImageBackground source={images.bac} style={styles.imagbac}>
        <Heder
          hedername={'Connect Wallet'}
          item={() => navigation.navigate('Wallets')}
          imagess={images.belll}
          color={'white'}
          imagecolor={'white'}
        />
      </ImageBackground>
      <View style={styles.view1}>
        <View style={styles.view4}>
          <TouchableOpacity
            onPress={() => setshow('cards')}
            style={[
              styles.touchstyle,
              {backgroundColor: 'Accounts' !== show ? 'white' : null},
            ]}>
            <Text style={styles.paytext}>Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setshow('Accounts')}
            style={[
              styles.touchstyle,
              {backgroundColor: 'Accounts' === show ? 'white' : null},
            ]}>
            <Text style={styles.paytext}>Accounts</Text>
          </TouchableOpacity>
        </View>
        {show === 'cards' ? (
          <View style={{justifyContent: 'center'}}>
            <View style={{justifyContent: 'center'}}>
              <View style={styles.cardview}>
                <Image
                  source={images.visa}
                  resizeMode="contain"
                  style={styles.visa}
                />
              </View>
              <View style={styles.Cards}>
                <Image
                  source={images.Cards}
                  resizeMode="contain"
                  style={styles.cardimage}
                />
              </View>
            </View>
            <View style={styles.detailcontainer}>
              <View style={styles.detail}>
                <Text style={styles.adddebittext}>Add your debit Card</Text>
                <Text style={styles.adddebittext2}>
                  This card must be connected to a bank account under your name
                </Text>
              </View>
            </View>
            <View style={styles.detail}>
              <TextInput
                mode="outlined"
                label="NAME ON CARD"
                placeholder="IRVAN MOSES"
                activeOutlineColor="grey"
                outlineColor="grey"
                outlineStyle={{borderRadius: 10}}
                style={styles.texgtinput1}
              />
            </View>
            <View style={styles.miniinput}>
              <TextInput
                mode="outlined"
                label="DEBIT CARD NUMBER"
                activeOutlineColor="grey"
                outlineColor="grey"
                keyboardType="number-pad"
                outlineStyle={{borderRadius: 8}}
                style={styles.inputstyle}
              />
              <TextInput
                mode="outlined"
                label="CVC"
                activeOutlineColor="grey"
                outlineColor="grey"
                keyboardType="decimal-pad"
                outlineStyle={{borderRadius: 8}}
                style={styles.inputstyle2}
              />
            </View>
            <View style={styles.miniinput}>
              <TextInput
                mode="outlined"
                label="EXPIRATION MM/YY"
                activeOutlineColor="grey"
                outlineColor="grey"
                outlineStyle={{borderRadius: 8}}
                style={styles.inputstyle}
              />
              <TextInput
                mode="outlined"
                label="ZIP"
                activeOutlineColor="grey"
                outlineColor="grey"
                outlineStyle={{borderRadius: 8}}
                style={styles.inputstyle2}
              />
            </View>
          </View>
        ) : (
          <Account />
        )}
      </View>
      <View style={styles.inputview}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  imagbac: {
    width: '100%',
    height: hp(287),
  },
  view1: {
    width: '100%',
    // height: hp(720),
    padding: hp(20),
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 30,
    top: hp(170),
    alignItems: 'center',
  },
  view4: {
    flexDirection: 'row',
    // padding: 15,
    paddingHorizontal: wp(10),
    paddingVertical: hp(5),
    // justifyContent: 'space-between',
    // marginHorizontal: wp(30),
    marginVertical: hp(10),
    backgroundColor: '#F4F6F6',
    borderRadius: 40,
    bottom: hp(15),
    width: hp(350),
  },
  paytext: {
    fontWeight: '600',
    color: '#666',
    marginHorizontal: wp(20),
    fontSize: fs(14),
  },
  touchstyle: {
    paddingHorizontal: wp(36),
    borderRadius: 20,
    paddingVertical: hp(12),
  },
  cardview: {
    alignItems: 'center',
    bottom: hp(15),
  },
  visa: {
    width: wp(284),
    height: hp(185),
    marginTop: hp(10),
  },
  Cards: {
    position: 'absolute',
    top: hp(10),
    alignItems: 'center',
  },
  cardimage: {
    width: wp(324),
    height: hp(209),
  },
  detailcontainer: {
    marginTop: hp(30),
  },
  detail: {
    marginTop: hp(5),
  },
  texgtinput1: {
    height: hp(54),
    width: wp(330),
    backgroundColor: 'transparent',
    fontSize: fs(14),
  },
  inputview: {
    marginTop: hp(5),
    flexDirection: 'row',
    gap: wp(11),
  },
  inputstyle: {
    height: hp(54),
    width: wp(200),
    fontSize: fs(12),
    fontWeight: '400',
    backgroundColor: 'transparent',
  },
  inputstyle2: {
    height: hp(54),
    width: wp(120),
    fontSize: fs(12),
    backgroundColor: 'transparent',
  },
  miniinput: {
    marginTop: hp(5),
    flexDirection: 'row',
    gap: wp(11),
  },
  adddebittext: {
    color: '#000',
    fontWeight: '500',
    fontSize: fs(16),
  },
  adddebittext2: {
    color: '#666',
    fontSize: fs(13),
  },
});
export default ConnectWallet;
