import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../helper/Globel';

const Year = () => {
  const [index1, setIndex1] = useState(0);
  const data = [{name: 'Day'}, {name: 'Week'}, {name: 'Month'}, {name: 'Year'}];
  return (
    <View style={styles.viewstyle}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.Touchstyle,
                {backgroundColor: index === index1 ? '#438883' : null},
                {paddingHorizontal: index === index1 ? wp(32) : wp(15)},
              ]}
              onPress={() => setIndex1(index)}>
              <Text style={{color: index === index1 ? 'white' : 'black'}}>
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
    marginTop: hp(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(15),
    paddingVertical: hp(10),
    paddingHorizontal: wp(15),
    borderRadius: 10,
  },
});
export default Year;
