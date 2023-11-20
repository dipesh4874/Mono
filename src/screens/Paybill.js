import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Heder from '../components/Heder';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fee from '../components/Fee';
import Paybutton from '../components/Paybutton';

const Paybill = ({route}) => {
  const navigation = useNavigation();
  const [routedata, setroutedata] = useState(route?.params);
  return (
    <View style={styles.mainview}>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Bill Payment'}
          item={() => navigation.navigate('Detailbill')}
          imagess={images.dot}
          color={'white'}
          imagecolor={'white'}
        />
      </ImageBackground>
      <View style={styles.view1}>
        <View style={styles.imageview}>
          <Image
            source={routedata?.image}
            style={{width: wp(80), height: wp(80), borderRadius: 50}}
          />
          <View style={styles.viewtext}>
            <Text style={styles.textstyle}>You will pay</Text>
            <Text style={styles.youtubeprimetext}>
              {routedata?.name} Premium
            </Text>
          </View>

          <Text style={styles.textstyle}>for one month with BCA OneKlik</Text>
          <View style={styles.Feeview}>
            <Fee routes={routedata} heder={'price'} />
          </View>
        </View>
        <View style={styles.buttonview}>
          <Paybutton
            navigations={'Succesfull'}
            route={routedata}
            tittle={'Confirm and Pay'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  imagbac: {
    width: '100%',
    height: hp(287),
    position: 'absolute',
  },
  view1: {
    paddingTop: hp(20),
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: hp(165),
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  viewtext: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    gap: 5,
  },
  textstyle: {
    fontSize: fs(20),
    fontWeight: '400',
    color: '#000',
  },
  imageview: {
    width: '100%',
    alignItems: 'center',
  },
  Feeview: {
    width: '100%',
    paddingHorizontal: wp(30),
    marginTop: hp(53),
  },
  buttonview: {
    marginBottom: hp(20),
  },
  youtubeprimetext: {
    fontSize: fs(20),
    fontWeight: '600',
    color: '#438883',
  },
});
export default Paybill;
