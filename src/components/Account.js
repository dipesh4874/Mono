import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {images} from '../helper/images';
import {RadioButton} from 'react-native-paper';
import Paybutton from './Paybutton';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => setSelectedValue('option1')}
        style={styles.touchdebit}>
        <View style={styles.debitimageview}>
          <Image source={images.bank} />
          {/* <Text style={styles.debittext}>Bank Link</Text>
          <Text>Connect your bank account to deposit & fund</Text> */}
          <View style={styles.viewradio}>
            <Text style={styles.debittext}>Bank Link</Text>
            <Text style={{fontSize: fs(12)}}>Connect your bank</Text>
            <Text style={{fontSize: fs(12)}}>account to deposit & fund</Text>
          </View>
        </View>

        <RadioButton.Android
          value="option1"
          status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
          color="#438883"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedValue('option2')}
        style={styles.touchdebit}>
        <View style={styles.debitimageview}>
          <Image source={images.currency} />
          {/* <Text style={styles.debittext}>Bank Link</Text>
          <Text>Connect your bank account to deposit & fund</Text> */}
          <View style={styles.viewradio}>
            <Text style={styles.debittext}>Microdeposits</Text>
            <Text style={{fontSize: fs(12)}}>Connect bank in 5-7 days</Text>
          </View>
        </View>

        <RadioButton.Android
          value="option2"
          status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
          color="#438883"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedValue('option3')}
        style={styles.touchdebit}>
        <View style={styles.debitimageview}>
          <Image source={images.pp} />
          <View style={styles.viewradio}>
            <Text style={styles.debittext}>Paypal</Text>
            <Text style={{fontSize: fs(12)}}>Connect you paypal account</Text>
          </View>
        </View>

        <RadioButton.Android
          value="option3"
          status={selectedValue === 'option3' ? 'checked' : 'unchecked'}
          color="#438883"
        />
      </TouchableOpacity>
      <View style={styles.buttonview}>
        <TouchableOpacity
          style={styles.paynow}
          onPress={() => navigation.navigate('Detailbill')}>
          <Text style={styles.paytext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  view: {
    height: hp(771),
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
  textyoutube: {
    fontSize: fs(18),
    fontWeight: '400',
    color: 'black',
  },
  debitimageview: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paypalview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(15),
  },
  paypaltext: {
    fontWeight: '600',
    fontSize: fs(16),
    padding: 15,
    color: 'black',
  },
  datetext: {
    fontSize: fs(14),
    fontWeight: '400',
    color: '#666',
  },
  paymentview: {
    marginTop: hp(40),
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
    height: hp(100),
    padding: 20,
    justifyContent: 'space-between',
  },
  viewradio: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: wp(20),
  },
  debittext: {
    fontWeight: '600',
    fontSize: fs(16),
    // paddingHorizontal: 5,
    color: 'black',
    // flexWrap: 'nowrap',
  },
  buttonview: {
    marginTop: hp(30),
  },
  currency: {
    height: hp(34),
  },
  paynow: {
    borderWidth: 1,
    borderColor: '#438883',
    height: hp(60),
    width: wp(350),
    paddingHorizontal: wp(142),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'center',
    shadowColor: '#3E7C78',
  },
  paytext: {
    fontSize: fs(18),
    color: '#438883',
    fontWeight: '600',
  },
});

export default Account;
