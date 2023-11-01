import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

import {fs, hp, wp} from '../helper/Globel';
import ExpenseIncome from '../components/ExpenseIncome';
import Tranjection from '../components/Tranjection';
import Upwork from '../components/Upwork';
import SendAgin from '../components/SendAgin';

import {images} from '../helper/images';

const Homepage = ({navigation}) => {
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

      <ScrollView>
        <Upwork
          image={images.upwork}
          platform={'UpWork'}
          date={'Today'}
          price={'+ $ 850.00'}
          color={'#25A969'}
        />
        <Upwork
          image={images.Transfer}
          platform={'Transfer'}
          date={'Yesterday'}
          price={'- $ 85.00'}
          color={'red'}
        />
        <Upwork
          image={images.paypal}
          platform={'Paypal'}
          date={'Jan 30, 2022'}
          price={'+ $ 1,406.00'}
          color={'#25A969'}
        />
        <Upwork
          image={images.youtube}
          platform={'Youtube'}
          date={'Jan 16, 2022'}
          price={'- $ 11.99'}
          color={'red'}
        />
      </ScrollView>
      <SendAgin />

      <View style={styles.style1}>
        <Image source={images.lady} />
        <Image source={images.Men} />
        <Image source={images.women} />
        <Image source={images.bad} />
        <Image source={images.girl} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('AddExpense')}>
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
    width: wp(354),
    height: hp(201),
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
    zIndex: 1,
    alignSelf: 'center',
    width: wp(100),
    height: hp(100),
  },
  style1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Homepage;
