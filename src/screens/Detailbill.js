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

const Detailbill = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(null);

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
      <Bll />
      <View style={styles.feeview}>
        <Fee />
      </View>
      <View style={styles.paymentview}>
        <Text style={styles.paymtext}>Select payment method</Text>
      </View>
      <TouchableOpacity
        onPress={() => setSelectedValue('option1')}
        style={styles.touchdebit}>
        <View style={styles.debitimageview}>
          <Image source={images.debitcard} />
          <Text style={styles.debittext}>Debit Card</Text>
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
        onPress={() => setSelectedValue('option2')}
        style={styles.touchdebit}>
        <View style={styles.paypalview}>
          <Image source={images.pp} style={{height: hp(34)}} />
          <Text style={styles.paypaltext}>Paypal</Text>
        </View>
        <RadioButton.Android
          value="option3"
          status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
          color="#438883"
        />
      </TouchableOpacity>
      <View style={styles.buttonview}>
        <Paybutton tittle={'Pay Now'} navigations={'Paybill'} />
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
    marginTop: hp(15),
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    height: hp(90),
    padding: 20,
    justifyContent: 'space-between',
  },
  debittext: {
    fontWeight: '600',
    fontSize: fs(16),
    padding: 15,
    color: 'black',
  },
  buttonview: {
    marginTop: hp(20),
  },
});

export default Detailbill;
