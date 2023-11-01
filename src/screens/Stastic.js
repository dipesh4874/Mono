import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import Heder from '../components/Heder';
import Year from '../components/Year';
import Month from '../components/Month';
import TopSpanding from '../components/TopSpanding';
import Upwork from '../components/Upwork';
import {BounceIn} from 'react-native-reanimated';
import Graph from '../components/Graph';

const Stastic = ({navigation}) => {
  const [index1, setIndex1] = useState(0);
  const data = [
    {
      name: 'Starbucks',
      date: 'Jan 12, 2022',
      price: '- $ 150.00',
      image: require('../assets/images/starbuks.png'),
      color: 'red',
    },
    {
      name: 'Transfer',
      date: 'Yesterday',
      price: '- $ 85.00',
      image: require('../assets/images/Transfer.png'),
      color: 'red',
    },
    {
      name: 'Youtube',
      date: 'jan 16, 2022',
      price: '- $ 11.99',
      image: require('../assets/images/youtube.png'),
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
      name: 'Upwork',
      date: 'Today',
      price: '+ $ 850.00',
      image: require('../assets/images/upwork.png'),
      color: '#438883',
    },
  ];
  return (
    <View style={styles.mainview}>
      <Heder
        item={() => navigation.goBack('')}
        hedername={'Statistics'}
        imagess={images.downlod}
        color={'black'}
      />
      <Year />
      <View style={styles.viewstyle}>
        <Text>Expense</Text>
        <TouchableOpacity>
          <Image source={images.starrow} style={{marginLeft: wp(5)}} />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%'}}>
        <Graph />
      </View>
      <Month />
      <TopSpanding />
      <FlatList
        data={data}
        bounces={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.Touchstyle,
                {backgroundColor: index === index1 ? '#438883' : null},
              ]}
              onPress={() => setIndex1(index)}>
              <Upwork
                platform={item.name}
                image={item.image}
                date={item.date}
                price={item.price}
                color={item.color}
                txtcolor={{color: index === index1 ? 'white' : 'black'}}
                datecolor={{color: index === index1 ? 'white' : null}}
                dolcolor={{color: index === index1 ? 'white' : 'red'}}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  viewstyle: {
    flexDirection: 'row',
    marginTop: hp(20),
    borderWidth: 0.5,
    paddingHorizontal: wp(12),
    paddingVertical: hp(10),
    alignSelf: 'flex-end',
    borderRadius: 10,
    justifyContent: 'space-between',
    borderColor: '#438883',
    marginRight: wp(24),
  },
  Touchstyle: {
    paddingTop: 0,
    marginHorizontal: wp(10),
    borderRadius: 12,
  },
  textcolor: {
    color: 'white',
    fontSize: fs(14),
  },
  datecolor: {
    color: 'white',
  },
  dolcolor: {
    color: 'white',
  },
});

export default Stastic;
