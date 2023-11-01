import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import Heder from '../components/Heder';
import Upwork from '../components/Upwork';
import {useState} from 'react';

const Wallet = ({navigation}) => {
  const [show, setshow] = useState('Transaction');
  const data = [
    {
      name: 'Upwork',
      date: 'Today',
      price: '+ $ 850.00',
      image: require('../assets/images/upwork.png'),
      color: '#438883',
    },
    {
      name: 'Transfer',
      date: 'Yesterday',
      price: '- $ 85.00',
      image: require('../assets/images/Transfer.png'),
      color: 'red',
    },
    {
      name: 'Paypal',
      date: 'Jan 30, 2022',
      price: '+ $ 1406.00',
      image: require('../assets/images/paypal.png'),
      color: '#438883',
    },
    {
      name: 'Youtube',
      date: 'jan 16, 2022',
      price: '- $ 11.99',
      image: require('../assets/images/youtube.png'),
      color: 'red',
    },
  ];

  const data2 = [
    {
      name: 'Youtube',
      date: 'jan 16, 2022',
      containe: 'Pay',
      image: require('../assets/images/youtube1.png'),
    },
    {
      name: 'Electricity',
      date: 'Mar 28, 2022',
      containe: 'Pay',
      image: require('../assets/images/flash.png'),
    },
    {
      name: 'House Rent',
      date: 'Mar 31, 2022',
      containe: 'Pay',
      image: require('../assets/images/home1.png'),
    },
    {
      name: 'Spotify',
      date: 'Feb 28, 2022',
      containe: 'Pay',
      image: require('../assets/images/spotifiy.png'),
    },
  ];

  const Upworks = item => {
    return (
      <TouchableOpacity>
        <Upwork
          platform={item.name}
          image={item.image}
          date={item.date}
          price={item.price}
          color={item.color}
          txtcolor={item.color}
          datecolor={item.color}
          dolcolor={item.color}
        />
      </TouchableOpacity>
    );
  };

  const Wallets = item => {
    return (
      <Upwork
        platform={item.name}
        image={item.image}
        date={item.date}
        price={item.price}
        color={item.color}
        txtcolor={item.color}
        datecolor={item.color}
        dolcolor={item.color}
        containe={
          <TouchableOpacity
            onPress={() => navigation.navigate('ConnectWallet')}
            style={styles.paystyle}>
            <Text style={styles.textpay}>Pay</Text>
          </TouchableOpacity>
        }
      />
    );
  };

  return (
    <View style={styles.mainview}>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Wallet'}
          item={() => navigation.navigate('Stastic')}
          imagess={images.belll}
          color={'white'}
          imagecolor={'white'}
        />
      </ImageBackground>
      <View style={styles.view1}>
        <Text style={styles.textbalnce}>Total Balance</Text>
        <Text style={styles.dolertext}>$ 2,548.00</Text>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity>
          <Image source={images.add} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.pay} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.send} />
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <Text style={styles.imagetext}>Add</Text>
        <Text style={styles.imagetext}>Pay</Text>
        <Text style={styles.imagetext}>Send</Text>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity
          onPress={() => setshow('Transaction')}
          style={[
            styles.touchstyle,
            {backgroundColor: 'Upcoming_Bills' !== show ? 'white' : null},
          ]}>
          <Text style={styles.paytext}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setshow('Upcoming_Bills')}
          style={[
            styles.touchstyle,
            {backgroundColor: 'Upcoming_Bills' === show ? 'white' : null},
          ]}>
          <Text style={styles.paytext}>Upcoming Bills</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={show === 'Upcoming_Bills' ? data2 : data}
        bounces={false}
        renderItem={({item}) => {
          return show === 'Transaction' ? Upworks(item) : Wallets(item);
        }}
      />
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
  },
  textbalnce: {
    fontSize: fs(16),
    color: '#222',
  },
  dolertext: {
    fontSize: fs(30),
    fontWeight: '700',
    color: '#222',
  },
  view1: {
    width: wp(378),
    height: hp(771),
    padding: 30,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 30,
    top: hp(170),
    alignItems: 'center',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(85),
    paddingVertical: hp(1),
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(91),
    padding: 10,
  },
  imagetext: {
    textAlign: 'center',
    color: '#222',
  },
  view4: {
    flexDirection: 'row',
    paddingHorizontal: wp(6),
    paddingVertical: hp(5),
    justifyContent: 'space-between',
    marginHorizontal: wp(20),
    // marginVertical: hp(10),
    backgroundColor: '#F4F6F6',
    marginTop: hp(50),
    borderRadius: 40,
  },
  paytext: {
    fontWeight: '600',
    color: '#666',
  },
  touchstyle: {
    paddingHorizontal: wp(35),
    borderRadius: 40,
    paddingVertical: hp(12),
  },
  touchstyleShow: {
    paddingHorizontal: wp(40),
    borderRadius: 40,
    paddingVertical: hp(12),
  },
  paystyle: {
    borderRadius: 40,
    backgroundColor: '#ECF9F8',
    paddingHorizontal: wp(35),
    paddingVertical: hp(10),
    alignSelf: 'center',
  },
  textpay: {
    color: '#438883',
    fontWeight: '500',
    fontSize: fs(16),
  },
});

export default Wallet;
