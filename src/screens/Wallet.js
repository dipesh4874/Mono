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
import {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Dummydata, Dumyy2} from '../helper/Dummy';

const Wallet = ({navigation}) => {
  let route = useRoute();
  const [show, setshow] = useState('Transaction');
  const [FlatListData, setFlatListData] = useState([]);

  useEffect(() => {
    if (route?.params) {
      setFlatListData(prev => [...prev, route?.params]);
    } else {
      setFlatListData(Dummydata);
    }
  }, [route?.params]);

  const Upworks = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Downlod', item);
        }}>
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
        // price={item.price}
        color={item.color}
        txtcolor={item.color}
        datecolor={item.color}
        dolcolor={item.color}
        containe={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ConnectWallet', item);
            }}
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
          item={() => navigation.navigate('Home', FlatListData)}
          imagess={images.belll}
          color={'white'}
          imagecolor={'white'}
        />
        <View style={styles.view1}>
          <Text style={styles.textbalnce}>Total Balance</Text>
          <Text style={styles.dolertext}>$ 2,548.00</Text>
        </View>
      </ImageBackground>
      <View style={styles.view2}>
        <View style={styles.gap}>
          <TouchableOpacity>
            <Image source={images.add} style={styles.imagestyle} />
          </TouchableOpacity>
          <Text style={styles.imagetext}>Add</Text>
        </View>
        <View style={styles.gap}>
          <TouchableOpacity>
            <Image source={images.pay} style={styles.imagestyle} />
          </TouchableOpacity>
          <Text style={styles.imagetext}>Pay</Text>
        </View>
        <View style={styles.gap}>
          <TouchableOpacity>
            <Image source={images.send} style={styles.imagestyle} />
          </TouchableOpacity>
          <Text style={styles.imagetext}>Send</Text>
        </View>
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
      <View style={styles.flatview}>
        <FlatList
          data={show === 'Upcoming_Bills' ? Dumyy2 : FlatListData}
          bounces={false}
          renderItem={({item}) => {
            return show === 'Transaction' ? Upworks(item) : Wallets(item);
          }}
        />
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
  },
  textbalnce: {
    fontSize: fs(16),
    color: '#222',
    marginTop: hp(12),
  },
  dolertext: {
    fontSize: fs(30),
    fontWeight: '700',
    color: '#222',
    marginTop: hp(12),
  },
  view1: {
    width: '100%',
    height: hp(771),
    padding: 20,
    backgroundColor: 'white',

    borderRadius: 30,
    marginTop: hp(59),
    alignItems: 'center',
  },
  view2: {
    flexDirection: 'row',
    marginHorizontal: wp(87),
    gap: 30,
    justifyContent: 'center',
    marginTop: hp(40),
  },

  imagetext: {
    textAlign: 'center',
    color: '#222',
    fontSize: fs(14),
  },
  view4: {
    flexDirection: 'row',
    height: hp(48),
    justifyContent: 'space-between',
    marginHorizontal: wp(20),
    paddingHorizontal: wp(4),
    paddingVertical: hp(4),
    backgroundColor: '#f2f2f2',
    marginTop: hp(60),
    borderRadius: 40,
    alignItems: 'center',
  },
  paytext: {
    fontWeight: '600',
    color: '#666',
    fontSize: fs(14),
    textAlign: 'center',
  },
  touchstyle: {
    borderRadius: 40,
    height: hp(40),
    width: wp(180),
    justifyContent: 'center',
  },
  paystyle: {
    borderRadius: 40,
    backgroundColor: '#ECF9F8',
    paddingHorizontal: wp(35),
    paddingVertical: hp(7),
    alignSelf: 'center',
  },
  textpay: {
    color: '#438883',
    fontWeight: '500',
    fontSize: fs(16),
  },
  imagestyle: {
    height: hp(60),
    width: hp(60),
  },
  gap: {
    gap: 8,
  },
  flatview: {
    marginTop: hp(10),
    flex: 1,
  },
});

export default Wallet;
