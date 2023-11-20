import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

import {fs, hp, wp} from '../helper/Globel';
import ExpenseIncome from '../components/ExpenseIncome';
import Tranjection from '../components/Tranjection';
import Upwork from '../components/Upwork';
import SendAgin from '../components/SendAgin';

import {images} from '../helper/images';
import {Dummydata} from '../helper/Dummy';
import {useFocusEffect, useRoute} from '@react-navigation/native';

const Homepage = ({navigation}) => {
  let route = useRoute();
  return (
    <View style={styles.safstyle}>
      <ImageBackground
        source={images.bac}
        resizeMode="stretch"
        style={styles.imagebac}>
        <View style={styles.Viewstyle}>
          <View>
            <Text style={styles.ftextstyle}>Good afternoon,</Text>
            <Text style={styles.ttextstyle}>Enjelin Morgeana</Text>
          </View>
          <TouchableOpacity>
            <Image source={images.belll} style={styles.imgstyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardview}>
          <View style={styles.viw}>
            <View>
              <Text style={styles.balstyle}>Total Balance ^</Text>
              <Text style={styles.dollerstyle}>$ 2,548.00</Text>
            </View>
            <TouchableOpacity>
              <Image source={images.dot} style={styles.dotstyle} />
            </TouchableOpacity>
          </View>
          <ExpenseIncome />
        </View>
      </ImageBackground>

      <Tranjection />

      <View style={styles.scrolviewa}>
        <FlatList
          data={route?.params ? route?.params : Dummydata}
          bounces={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={[styles.Touchstyle]}>
                <Upwork
                  platform={item.name}
                  image={item.image}
                  date={item.date}
                  price={item.price}
                  color={item.color}
                />
                {/* <Text>{item?.price}</Text>
                <Text>{item?.name}</Text> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <SendAgin />

      <View style={styles.style1}>
        <Image source={images.lady} style={styles.imagepeople} />
        <Image source={images.Men} style={styles.imagepeople} />
        <Image source={images.women} style={styles.imagepeople} />
        <Image source={images.bad} style={styles.imagepeople} />
        <Image source={images.girl} style={styles.imagepeople} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExpense', route?.params)}>
          <Image source={images.pluse} style={styles.style} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  safstyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  Viewstyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: wp(24),
    justifyContent: 'space-between',
    marginTop: hp(74),
  },
  imagebac: {
    width: '100%',
    height: hp(287),
  },
  ftextstyle: {
    color: 'white',
    fontSize: fs(14),
    margin: hp(2),
  },
  ttextstyle: {
    fontSize: fs(20),
    color: 'white',
    fontWeight: '600',
    margin: hp(2),
  },
  imgstyle: {
    alignSelf: 'center',
  },
  cardview: {
    width: wp(374),
    height: hp(202),
    padding: 20,
    backgroundColor: '#2F7E79',
    // position: 'absolute',
    borderRadius: 20,
    marginTop: hp(33),
    alignSelf: 'center',
  },
  viw: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(20),
  },
  balstyle: {
    fontSize: fs(16),
    fontWeight: '600',
    color: '#FFF',
    fontStyle: 'normal',
  },
  dollerstyle: {
    color: '#FFF',
    fontSize: fs(30),
    fontWeight: '700',
  },
  incomestyle: {
    color: '#D0E5E4',
    fontSize: fs(17),
    fontWeight: '500',
    fontStyle: 'normal',
    marginLeft: 5,
  },
  cardsssview: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(33),
  },
  prizestyle: {
    fontSize: fs(20),
    color: '#FFF',
    fontWeight: '600',
    fontStyle: 'normal',
    marginLeft: 5,
  },
  epensestyle: {
    fontSize: fs(18),
    fontWeight: '500',
    color: '#D0E5E4',
  },
  lowdollstyle: {
    fontSize: fs(20),
    fontWeight: '600',
    color: '#fff',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  dotstyle: {
    marginBottom: hp(30),
  },

  Trtext: {
    fontSize: fs(18),
    fontWeight: '600',
    color: '#222',
  },
  seatext: {
    fontSize: fs(14),
    fontWeight: '400',
    color: '#666',
  },
  style: {
    position: 'absolute',
    bottom: hp(-40),

    alignSelf: 'center',
    width: wp(100),
    height: hp(100),
  },
  style1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(20),
  },
  scrolviewa: {
    marginTop: hp(19),
    flex: 1,
  },
  imagepeople: {
    width: wp(62),
    height: wp(62),
  },
  Touchstyle: {
    marginHorizontal: wp(10),
    borderRadius: 12,
  },
});

export default Homepage;
