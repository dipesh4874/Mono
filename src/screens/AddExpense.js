// import React, {useState} from 'react';
// import {StyleSheet} from 'react-native';
// import {SelectCountry} from 'react-native-element-dropdown';
// import {Expense} from '../helper/Dummy';

// const AddExpense = _props => {
//   const [country, setCountry] = useState('1');

//   return (
//     <SelectCountry
//       style={styles.dropdown}
//       selectedTextStyle={styles.selectedTextStyle}
//       placeholderStyle={styles.placeholderStyle}
//       imageStyle={styles.imageStyle}
//       inputSearchStyle={styles.inputSearchStyle}
//       iconStyle={styles.iconStyle}
//       search
//       maxHeight={200}
//       value={country}
//       data={Expense}
//       valueField="value"
//       labelField="lable"
//       imageField="image"
//       placeholder="Select country"
//       searchPlaceholder="Search..."
//       onChange={e => {
//         setCountry(e.value);
//       }}
//     />
//   );
// };

// export default AddExpense;

// const styles = StyleSheet.create({
//   dropdown: {
//     margin: 16,
//     height: 50,
//     borderBottomColor: 'gray',
//     borderBottomWidth: 0.5,
//   },
//   imageStyle: {
//     width: 24,
//     height: 24,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../helper/images';
import {fs, hp, wp} from '../helper/Globel';
import Heder from '../components/Heder';
import CalendarPicker from 'react-native-calendar-picker';
import {Dropdown, SelectCountry} from 'react-native-element-dropdown';
import {Expense} from '../helper/Dummy';
import {useRoute} from '@react-navigation/native';

const AddExpense = ({navigation}) => {
  const route = useRoute();
  // console.log('::::::', route?.params);
  const [Model, showModel] = useState(false);
  const [date, setdate] = useState(null);
  const [selected, setSelected] = useState('');
  const [price, setPrice] = useState('');

  let newDate = new Date(date).toLocaleDateString('en-us', {
    day: '2-digit',
  });

  let newMonth = new Date(date).toLocaleDateString('en-us', {
    month: 'short',
  });

  let newyear = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
  });
  let day = new Date(date).toLocaleString('en-us', {weekday: 'short'});
  day = day.split(',')[0];

  let Dates = [day, newDate, newMonth, newyear];
  Dates = Dates.join(' ');

  return (
    <View style={styles.mainview}>
      <ImageBackground
        source={images.bac}
        style={styles.imagbac}
        resizeMode="stretch">
        <Heder
          hedername={'Add Expense'}
          item={() => navigation.goBack('')}
          imagess={images.dot}
          color={'white'}
          imagecolor={'white'}
        />
        <View style={styles.secondview}>
          <Text style={styles.name}>NAME</Text>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            imageStyle={styles.imageStyle}
            data={Expense}
            value={selected}
            labelField="name"
            valueField={'name'}
            imageField="image"
            onChange={e => {
              setSelected(e.name);
              setPrice(e.price);
            }}
          />
          <Text style={styles.amounttext}>AMOUNT</Text>
          <View style={styles.textinpuview}>
            <TextInput
              // placeholder="Price"
              keyboardType={'numbers-and-punctuation'}
              style={styles.textinput}
              value={price}
              editable={false}
            />
            <TouchableOpacity onPress={() => setPrice('')}>
              <Text style={styles.cleartext}>Clear</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.datetext}>DATE</Text>
          <View style={styles.textinpuview}>
            <TextInput
              placeholder="Date"
              value={Dates}
              keyboardType={'numbers-and-punctuation'}
            />
            <TouchableOpacity onPress={() => showModel(true)}>
              <Image source={images.calendar} />
            </TouchableOpacity>
            <Modal visible={Model} animationType="fade">
              <SafeAreaView>
                <CalendarPicker
                  startFromMonday={true}
                  onDateChange={d => {
                    setdate(d.toString());
                    showModel(false);
                  }}
                  todayBackgroundColor="#f2e6ff"
                  selectedDayColor="#7300e6"
                  selectedDayTextColor="#FFFFFF"
                />
              </SafeAreaView>
            </Modal>
          </View>
          <Text style={styles.invoictext}>INVOICE</Text>
          <View style={styles.invoicestyle}>
            <TouchableOpacity style={styles.plusebutton}>
              <Image source={images.addpluse} />
              <Text>Add Invoice</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    fontSize: fs(12),
    fontWeight: '500',
  },
  imagbac: {
    width: '100%',
    height: hp(287),
  },
  firstview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(30),
    justifyContent: 'space-between',
    marginTop: hp(60),
  },
  secondview: {
    width: wp(358),
    height: hp(500),
    padding: hp(20),
    backgroundColor: 'white',
    marginTop: hp(59),
    borderRadius: 20,
    alignSelf: 'center',
    shadowOffset: {
      width: wp(4),
      height: hp(12),
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
    opacity: 2,
  },
  thirdview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    borderWidth: 0.5,
    paddingHorizontal: wp(10),
    borderRadius: 8,
    justifyContent: 'space-between',
    borderColor: 'grey',
  },
  netview: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(50),
    width: wp(318),
  },
  textinpuview: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 0.5,
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: Platform.OS == 'ios' ? wp(17) : wp(5),
    paddingVertical: Platform.OS == 'ios' ? hp(17) : hp(0),
    marginTop: hp(10),
    alignItems: 'center',
  },
  invoicestyle: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
    marginTop: hp(10),
    alignItems: 'center',
  },
  netfilxtext: {
    marginLeft: wp(10),
  },
  amounttext: {
    marginTop: hp(15),
    fontSize: fs(12),
  },
  cleartext: {
    color: '#438883',
  },
  datetext: {
    marginTop: hp(20),
    fontSize: fs(12),
  },
  invoictext: {
    marginTop: hp(20),
    fontSize: fs(12),
  },
  plusebutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(5),
  },
  stararrowstyle: {
    right: wp(40),
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  imageStyle: {
    width: wp(24),
    height: wp(24),
    resizeMode: 'contain',
  },
  dropdown: {
    marginTop: hp(10),
    height: hp(50),
    width: wp(318),
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
    borderColor: 'grey',
  },
  textinput: {
    color: '#438883',
    fontSize: fs(14),
    fontWeight: '600',
  },
});

export default AddExpense;
