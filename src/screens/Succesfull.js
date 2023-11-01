import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import Heder from '../components/Heder';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import {useNavigation} from '@react-navigation/native';
import Fee from '../components/Fee';
import Paybutton from '../components/Paybutton';

const Paybill = ({navigation}) => {
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
          <Text style={styles.youtube}>Youtube Premium</Text>
        </View>
        <View style={styles.semview}>
          <Text style={styles.tranhtext}>Transaction details</Text>
          <Image source={images.starrow} />
        </View>
        <View style={styles.semview}>
          <Text style={styles.textstyless}>Payment method</Text>
          <Text style={styles.text2}>Debit Card</Text>
        </View>
        <View style={styles.semview}>
          <Text style={styles.textstyless}>Status</Text>
          <Text style={styles.text2}>Completed</Text>
        </View>
        <View style={styles.semview}>
          <Text style={styles.textstyless}>Time</Text>
          <Text style={styles.text2}>08:15 AM</Text>
        </View>
        <View style={styles.semview}>
          <Text style={styles.textstyless}>Date</Text>
          <Text style={styles.text2}>Feb 28, 2022</Text>
        </View>
        <View style={styles.lastview}>
          <Text style={styles.textstyless}>Transaction ID</Text>
          <Text style={styles.text2}>2092913832472..</Text>
          <Image source={images.copy} />
        </View>
        <View style={styles.feestyle}>
          <Fee />
        </View>
        <View style={styles.buttonview}>
          <Paybutton tittle={'Share receipt'} />
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
  semview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
  },
  lastview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
  },
  feestyle: {
    padding: 30,
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
});
export default Paybill;
