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
import {useNavigation, useRoute} from '@react-navigation/native';
import Fee from '../components/Fee';
import Paybutton from '../components/Paybutton';

const Downlod = ({navigation, route, color}) => {
  const [show, setshow] = useState(false);
  const [routedata, setroutedata] = useState(route?.params);

  return (
    <View style={styles.mainview}>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Transaction Details'}
          item={() => navigation.navigate('Wallets')}
          imagess={images.dot}
          color={'white'}
          imagecolor={'white'}
        />
      </ImageBackground>
      <View style={styles.view1}>
        <View style={styles.imageview}>
          <Image source={routedata.image} style={styles.imagestyle} />
          <View
            style={[
              styles.income,
              {
                backgroundColor:
                  routedata.status === 'Expense'
                    ? 'rgba(249, 91, 81, 0.10)'
                    : '#4388831A',
              },
            ]}>
            <Text
              style={[
                styles.incometext,
                {color: routedata.status === 'Expense' ? 'red' : '#438883'},
              ]}>
              {routedata.status}
            </Text>
          </View>
          <View style={styles.vieww}>
            <Text style={styles.dolartext}>{routedata.price}</Text>
          </View>
        </View>
        <View style={styles.semviews}>
          <Text style={styles.tranhtext}>Transaction details</Text>
          <TouchableOpacity onPress={() => setshow(!show)}>
            <Image source={images.starrow} />
          </TouchableOpacity>
        </View>
        {show == true ? (
          <View>
            <View style={styles.semview}>
              <Text style={styles.textstyless}>Status</Text>
              <Text
                style={[
                  styles.text2,
                  {
                    color: routedata.status === 'Expense' ? 'red' : '#438883',
                  },
                ]}>
                {routedata.status}
              </Text>
            </View>
            <View style={styles.semviews}>
              <Text style={styles.textstyless}>From</Text>
              <Text style={styles.textstyless}>{routedata.name}</Text>
            </View>
            <View style={styles.semview}>
              <Text style={styles.textstyless}>Time</Text>
              <Text style={styles.text2}>10:00 AM</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.textstyless}>Date</Text>
              <Text style={styles.text2}>{routedata?.date}</Text>
            </View>
          </View>
        ) : null}
        <View style={styles.feestyle}>
          <Fee heder={'Earnings'} routes={routedata} />
        </View>
      </View>
      <View style={styles.buttonview}>
        <TouchableOpacity style={styles.paynow}>
          <Text style={styles.paytext}>Download Receipt</Text>
        </TouchableOpacity>
      </View>

      {/* <Paybutton
          tittle={'Download Receipt'}
          navigations={'Wallets'}
          route={routedata}
        /> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  imageview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    height: wp(80),
    width: wp(80),
    borderRadius: 50,
  },
  viewtext: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    gap: 5,
  },
  textstyle: {
    fontSize: fs(22),
    fontWeight: '600',
    color: '#438883',
  },
  imageview: {
    width: '100%',
    alignItems: 'center',
  },
  buttonview: {
    marginBottom: hp(20),
  },
  textstyless: {
    fontSize: fs(16),
    color: '#666666',
  },
  text2: {
    fontSize: fs(16),
    fontWeight: '500',
    // color: '#438883',
  },
  semviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    marginTop: hp(42),
  },
  semview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    // backgroundColor: 'red',
    marginTop: hp(12),
  },
  income: {
    marginTop: 10,

    borderRadius: 40,
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(25),
  },
  vieww: {
    marginTop: hp(8),
  },
  feestyle: {
    padding: hp(30),
  },
  incometext: {
    fontSize: fs(14),
    fontWeight: '500',
    color: '#438883',
  },
  tranhtext: {
    fontSize: fs(18),
    fontWeight: '500',
    color: 'black',
  },
  dolartext: {
    fontSize: fs(24),
    fontWeight: '600',
    color: 'black',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    // backgroundColor: 'red',
    marginTop: hp(12),
    borderBottomWidth: 0.5,
    paddingBottom: hp(10),
  },
  paytext: {
    fontSize: fs(18),
    color: '#438883',
    fontWeight: '600',
  },
  paynow: {
    borderWidth: 1,
    borderColor: '#438883',
    height: hp(60),
    width: wp(350),
    // paddingHorizontal: wp(142),
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
export default Downlod;
