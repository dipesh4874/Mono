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

const Succesfull = ({navigation, route}) => {
  const [show, setshow] = useState(false);
  const [routedata, setroutedata] = useState(route?.params);

  return (
    <View style={styles.mainview}>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Bill Payment'}
          item={() => navigation.navigate('Paybill')}
          imagess={images.dot}
          color={'white'}
          imagecolor={'white'}
        />
      </ImageBackground>
      <View style={styles.view1}>
        <View style={styles.imageview}>
          <Image source={images.rights} />

          <View style={styles.viewtext}>
            <Text style={styles.textstyle}>Payment Successfully</Text>
          </View>
          <Text style={styles.youtube}>{routedata?.name} Premium</Text>
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
              <Text style={styles.textstyless}>Payment method</Text>
              <Text style={styles.text2}>{routedata?.type}</Text>
            </View>
            <View style={styles.semview}>
              <Text style={styles.textstyless}>Status</Text>
              <Text style={styles.text3}>Completed</Text>
            </View>
            <View style={styles.semview}>
              <Text style={styles.textstyless}>Time</Text>
              <Text style={styles.text2}>08:15 AM</Text>
            </View>
            <View style={styles.semview}>
              <Text style={styles.textstyless}>Date</Text>
              <Text style={styles.text2}>{routedata?.date}</Text>
            </View>
            <View style={styles.lastview}>
              <Text style={styles.textstyless}>Transaction ID</Text>
              <Text style={styles.text2}>2092913832472..</Text>
              <Image source={images.copy} />
            </View>
          </View>
        ) : null}
        <View style={styles.feestyle}>
          <Fee routes={routedata} heder={'price'} />
        </View>
      </View>
      <View style={styles.buttonview}>
        <TouchableOpacity
          style={styles.paynow}
          onPress={() => navigation.navigate('Wallets', route?.params)}>
          <Text style={styles.paytext}>Share Receipt</Text>
        </TouchableOpacity>
      </View>
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
    // justifyContent: 'space-between',
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
    color: 'black',
  },
  semviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    marginTop: hp(42),
    // backgroundColor: 'red',
  },
  semview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    // backgroundColor: 'red',
    marginTop: hp(12),
  },
  lastview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
    marginTop: hp(12),
  },
  feestyle: {
    padding: hp(30),
  },
  youtube: {
    color: '#666',
    fontSize: fs(16),
    fontWeight: '500',
  },
  tranhtext: {
    fontSize: fs(18),
    fontWeight: '500',
    color: 'black',
  },
  text3: {
    color: '#438883',
    fontSize: fs(16),
    fontWeight: '600',
  },
  paynow: {
    borderWidth: 1,
    borderColor: '#438883',
    height: hp(60),
    width: wp(350),
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
export default Succesfull;
