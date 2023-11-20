import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../helper/Globel';

export const monthData = [
  {name: 'Mar'},
  {name: 'Apr'},
  {name: 'May'},
  {name: 'Jun'},
  {name: 'Jul'},
  {name: 'Aug'},
  {name: 'Sep'},
];
const Month = () => {
  const [index1, setIndex1] = useState(0);
  return (
    <View style={styles.viewstyle}>
      <FlatList
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        s
        data={monthData}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[styles.Touchstyle]}
              onPress={() => setIndex1(index)}>
              <Text style={{color: index === index1 ? '#438883' : 'black'}}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(10),
    // backgroundColor: 'yellow',
  },
  Touchstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(18),
  },
});

export default Month;
