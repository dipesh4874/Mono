import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {images} from '../helper/images';
import {RadioButton} from 'react-native-paper';
import Paybutton from './Paybutton';
import {useNavigation} from '@react-navigation/native';

const Account = ({navigations, route}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [show, setshow] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => {
          setSelectedValue('option1');
          setshow(true);
        }}
        style={
          selectedValue == 'option1'
            ? [styles.touchdebit, {backgroundColor: '#4388831a'}]
            : styles.touchdebit
        }>
        <View style={styles.debitimageview}>
          <Image
            source={images.bank}
            style={
              selectedValue == 'option1'
                ? {tintColor: '#438883'}
                : {tintColor: '#888888'}
            }
          />

          <View style={styles.viewradio}>
            <Text
              style={
                selectedValue == 'option1'
                  ? [styles.debittext, {color: '#438883'}]
                  : styles.debittext
              }>
              Bank Link
            </Text>
            <Text
              style={
                selectedValue == 'option1'
                  ? [styles.textstyle, {color: '#438883'}]
                  : styles.textstyle
              }>
              Connect your bank
            </Text>
            <Text
              style={
                selectedValue == 'option1'
                  ? [styles.textstyle, {color: '#438883'}]
                  : styles.textstyle
              }>
              account to deposit & fund
            </Text>
          </View>
        </View>
        <Image
          source={selectedValue == 'option1' ? images.chaked : undefined}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedValue('option2');
          setshow(true);
        }}
        style={
          selectedValue == 'option2'
            ? [styles.touchdebit, {backgroundColor: '#4388831a'}]
            : styles.touchdebit
        }>
        <View style={styles.debitimageview}>
          <Image
            source={images.currency}
            style={
              selectedValue == 'option2'
                ? {tintColor: '#438883'}
                : {tintColor: '#888888'}
            }
          />
          <View style={styles.viewradio}>
            <Text
              style={
                selectedValue == 'option2'
                  ? [styles.debittext, {color: '#438883'}]
                  : styles.debittext
              }>
              Microdeposits
            </Text>
            <Text
              style={
                selectedValue == 'option2'
                  ? [styles.textstyle, {color: '#438883'}]
                  : styles.textstyle
              }>
              Connect bank in 5-7 days
            </Text>
          </View>
        </View>

        <Image
          source={selectedValue == 'option2' ? images.chaked : undefined}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedValue('option3');
          setshow(true);
        }}
        style={
          selectedValue == 'option3'
            ? [styles.touchdebit, {backgroundColor: '#4388831a'}]
            : styles.touchdebit
        }>
        <View style={styles.debitimageview}>
          <Image
            source={images.pp}
            style={
              selectedValue == 'option3'
                ? {tintColor: '#438883'}
                : {tintColor: '#888888'}
            }
          />
          <View style={styles.viewradio}>
            <Text
              style={
                selectedValue == 'option3'
                  ? [styles.debittext, {color: '#438883'}]
                  : styles.debittext
              }>
              Paypal
            </Text>
            <Text
              style={
                selectedValue == 'option3'
                  ? [styles.textstyle, {color: '#438883'}]
                  : styles.textstyle
              }>
              Connect you paypal account
            </Text>
          </View>
        </View>

        <Image
          source={selectedValue == 'option3' ? images.chaked : undefined}
        />
      </TouchableOpacity>
      <View style={styles.buttonview}>
        <TouchableOpacity
          disabled={show == true ? false : true}
          style={show == true ? [styles.paynow] : styles.disablepaynow}
          onPress={() => {
            navigation.navigate(navigations, route);
          }}>
          <Text style={show == true ? styles.paytext : {color: 'grey'}}>
            Next
          </Text>
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

    borderRadius: 30,
  },
  viewimage2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textyoutube: {
    fontSize: fs(18),
    fontWeight: '400',
    color: 'black',
  },
  debitimageview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paypalview: {
    flexDirection: 'row',
    alignItems: 'center',
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

  paymtext: {
    fontSize: fs(18),
    fontWeight: '500',
    color: '#000',
  },
  touchdebit: {
    flexDirection: 'row',
    marginHorizontal: wp(45),
    alignItems: 'center',
    marginTop: hp(20),
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    width: wp(344),
    height: hp(100),
    padding: wp(20),
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
    color: 'black',
  },
  buttonview: {
    marginTop: hp(103),
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
  disablepaynow: {
    borderWidth: 1,
    borderColor: 'gray',
    height: hp(60),
    width: wp(350),
    paddingHorizontal: wp(142),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'center',
  },
  paytext: {
    fontSize: fs(18),
    color: '#438883',
    fontWeight: '600',
  },
  textstyle: {
    fontSize: fs(12),
  },
});

export default Account;
