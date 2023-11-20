import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Heder from '../components/Heder';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import Fee from '../components/Fee';
import {RadioButton} from 'react-native-paper';
import Paybutton from '../components/Paybutton';
import Bll from '../components/BIl';

const Detailbill = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [paymentmethod, setpaymentmethod] = useState('');
  const [routedata, setroutedata] = useState(route?.params);
  routedata['type'] = paymentmethod;

  return (
    <View>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Bill Details'}
          item={() => navigation.navigate('ConnectWallet')}
          imagess={images.dot}
          color={'white'}
          imagecolor={'white'}
        />
      </ImageBackground>
      <Bll route={routedata} />
      <View style={styles.feeview}>
        <Fee heder={'price'} routes={routedata} />
      </View>
      <View style={styles.paymentview}>
        <Text style={styles.paymtext}>Select payment method</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setSelectedValue('option1'), setpaymentmethod('Debit Card');
        }}
        style={
          selectedValue == 'option1'
            ? [styles.touchdebit, {backgroundColor: '#4388831a'}]
            : styles.touchdebit
        }>
        <View style={styles.debitimageview}>
          <Image
            source={images.debitcard}
            style={
              selectedValue == 'option1'
                ? [styles.debitcardimage]
                : {tintColor: '#888888'}
            }
          />
          <Text
            style={
              selectedValue == 'option1'
                ? [styles.debittext, {color: '#438883'}]
                : styles.debittext
            }>
            Debit Card
          </Text>
        </View>
        <RadioButton.Android
          value="option1"
          status={
            (backgroundColor =
              selectedValue === 'option1' ? 'checked' : 'unchecked')
          }
          color="#438883"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedValue('option2'), setpaymentmethod('Paypal');
        }}
        style={
          selectedValue == 'option2'
            ? [styles.touchdebit, {backgroundColor: '#4388831a'}]
            : styles.touchdebit
        }>
        <View style={styles.paypalview}>
          <Image
            source={images.pp}
            style={
              selectedValue == 'option2' ? [styles.pp] : {tintColor: '#888888'}
            }
          />
          <Text
            style={
              selectedValue == 'option2'
                ? [styles.debittext, {color: '#438883'}]
                : styles.debittext
            }>
            Paypal
          </Text>
        </View>
        <RadioButton.Android
          value="option3"
          status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
          color="#438883"
        />
      </TouchableOpacity>
      <View style={styles.buttonview}>
        <Paybutton
          disabled={selectedValue == null ? true : false}
          tittle={'Pay Now'}
          navigations={'Paybill'}
          route={routedata}
        />
      </View>
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
  feeview: {
    paddingHorizontal: wp(30),
    marginTop: hp(43),
  },
  textyoutube: {
    fontSize: fs(18),
    fontWeight: '400',
    color: 'black',
  },
  debitimageview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(10),
  },
  paypalview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(15),
  },
  paypaltext: {
    fontWeight: '600',
    fontSize: fs(16),
    padding: 25,
    color: 'black',
  },
  datetext: {
    fontSize: fs(14),
    fontWeight: '400',
    color: '#666',
  },
  paymentview: {
    marginTop: hp(35),
    marginHorizontal: wp(30),
  },
  paymtext: {
    fontSize: fs(18),
    fontWeight: '500',
    color: '#000',
  },
  touchdebit: {
    flexDirection: 'row',
    marginHorizontal: wp(35),
    alignItems: 'center',
    marginTop: hp(20),
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    width: wp(344),
    height: hp(90),
    padding: wp(10),
    justifyContent: 'space-between',
  },
  debittext: {
    fontWeight: '600',
    fontSize: fs(16),
    padding: 15,
    color: 'black',
  },
  buttonview: {
    marginTop: hp(25),
  },
  debitcardimage: {
    width: wp(34),
    height: wp(34),
    tintColor: '#438883',
  },
  pp: {
    width: wp(34),
    height: wp(34),
    tintColor: '#438883',
  },
});

export default Detailbill;
