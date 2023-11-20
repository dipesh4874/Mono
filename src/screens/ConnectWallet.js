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
import {createMaterialBottomTabNavigator} from 'react-native-paper/lib/typescript/react-navigation';

const ConnectWallet = ({route}) => {
  const [show, setshow] = useState('cards');
  const [card, setcard] = useState('');
  const [number, setnumber] = useState('');
  const [date, setdate] = useState('');
  const [cvc, setcvc] = useState('');
  const [zip, setzip] = useState('');
  const [routedata, setroutedata] = useState(route?.params);

  const navigation = useNavigation();

  const dip = {
    name: card,
    number: number,
    cvcnumber: cvc,
    zipnumber: zip,
    dateshow: date,
  };

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
            <View style={styles.cardvew}>
              <View style={styles.cardview}>
                <Image
                  source={images.visa}
                  resizeMode="contain"
                  style={styles.visa}
                />

                <Image
                  source={images.Cards}
                  resizeMode="contain"
                  style={styles.cardimage}
                />
              </View>
              <View style={styles.addview}>
                <View style={styles.detailcontainer}>
                  <View style={styles.detail}>
                    <Text style={styles.adddebittext}>Add your debit Card</Text>
                    <Text style={styles.adddebittext2}>
                      This card must be connected to a bank account
                    </Text>
                    <Text style={styles.adddebittext2}>under your name</Text>
                  </View>
                </View>
              </View>
              <View style={styles.detail}>
                <TextInput
                  onChangeText={card => setcard(card)}
                  mode="outlined"
                  value={card}
                  label="NAME ON CARD"
                  placeholder="IRVAN MOSES"
                  activeOutlineColor="grey"
                  outlineColor="grey"
                  outlineStyle={{borderRadius: 8, width: wp(364)}}
                  style={styles.texgtinput1}
                />
                <View style={styles.miniinput}>
                  <TextInput
                    onChangeText={number => setnumber(number)}
                    value={number}
                    mode="outlined"
                    label="DEBIT CARD NUMBER"
                    activeOutlineColor="grey"
                    outlineColor="grey"
                    keyboardType="number-pad"
                    outlineStyle={{borderRadius: 8, width: wp(220)}}
                    style={styles.inputstyle}
                  />
                  <TextInput
                    onChangeText={cvc => setcvc(cvc)}
                    value={cvc}
                    mode="outlined"
                    label="CVC"
                    activeOutlineColor="grey"
                    outlineColor="grey"
                    keyboardType="decimal-pad"
                    outlineStyle={{borderRadius: 8, width: wp(133)}}
                    style={styles.inputstyle2}
                  />
                </View>
                <View style={styles.miniinput}>
                  <TextInput
                    onChangeText={date => setdate(date)}
                    value={date}
                    mode="outlined"
                    label="EXPIRATION MM/YY"
                    activeOutlineColor="grey"
                    outlineColor="grey"
                    outlineStyle={{borderRadius: 8, width: wp(220)}}
                    style={styles.inputstyle}
                  />
                  <TextInput
                    onChangeText={zip => setzip(zip)}
                    value={zip}
                    mode="outlined"
                    label="ZIP"
                    activeOutlineColor="grey"
                    outlineColor="grey"
                    outlineStyle={{borderRadius: 8, width: wp(133)}}
                    style={styles.inputstyle2}
                  />
                </View>
              </View>
              {/* <TouchableOpacity style={styles.cardview}>
                <Text style={{fontSize: 20}}>ok</Text>
              </TouchableOpacity> */}
            </View>
          ) : (
            <Account navigations={'Detailbill'} route={routedata} />
          )}
        </View>
      </ImageBackground>
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
    backgroundColor: 'red',
  },
  view1: {
    width: '100%',
    height: hp(771),
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: hp(67),
  },
  view4: {
    flexDirection: 'row',
    marginVertical: hp(10),
    backgroundColor: '#F4F6F6',
    borderRadius: 40,
    paddingVertical: hp(4),
    paddingHorizontal: wp(4),
    marginTop: hp(22),
  },
  paytext: {
    fontWeight: '600',
    color: '#666',
    marginHorizontal: wp(20),
    fontSize: fs(14),
  },
  touchstyle: {
    paddingHorizontal: wp(40),
    borderRadius: 20,
    paddingVertical: hp(12),
  },
  cardview: {
    alignItems: 'center',
    marginTop: hp(25),
  },
  visa: {
    width: wp(284),
    height: hp(185),
  },
  Cards: {
    alignItems: 'center',
  },
  cardimage: {
    width: wp(324),
    height: hp(209),
    position: 'absolute',
    top: hp(15),
  },
  detailcontainer: {
    marginTop: hp(30),
  },
  detail: {
    // marginTop: hp(20),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  texgtinput1: {
    height: hp(54),
    width: wp(330),
    backgroundColor: 'transparent',
    fontSize: fs(14),
    marginTop: hp(30),
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
    flexDirection: 'row',
    gap: 30,
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
  cardvew: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewcard: {
    width: '100%',
    justifyContent: 'center',
  },
  addview: {
    marginTop: hp(20),
  },
});
export default ConnectWallet;
