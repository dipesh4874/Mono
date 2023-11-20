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
import {dummyy3} from '../helper/Dummy';

const Stastic = ({navigation, route}) => {
  const [index1, setIndex1] = useState(0);
  return (
    <View style={styles.mainview}>
      <Heder
        item={() => navigation.navigate('Home', route?.params)}
        hedername={'Statistics'}
        imagess={images.downlod}
        color={'black'}
      />
      <Year />
      <View style={styles.viewstyle}>
        <Text>Expense</Text>
        <TouchableOpacity>
          <Image source={images.starrow} style={styles.stararrimage} />
        </TouchableOpacity>
      </View>
      <View style={styles.graph}>
        <Graph />
      </View>
      <Month />
      <TopSpanding />

      <FlatList
        data={dummyy3}
        bounces={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.Touchstyle,
                {backgroundColor: index === index1 ? '#438883' : '#fbfbfb'},
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
                fontSize={{fontSize: fs(16)}}
                datefont={{fontSize: fs(13)}}
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
    backgroundColor: '#fff',
  },
  viewstyle: {
    flexDirection: 'row',
    marginTop: hp(38),
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
    marginHorizontal: wp(20),
    borderRadius: 12,
    marginTop: hp(20),
    width: wp(374),
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
  stararrimage: {
    marginLeft: wp(5),
  },
  graph: {
    width: '100%',
  },
});

export default Stastic;
