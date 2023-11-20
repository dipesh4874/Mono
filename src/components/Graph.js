// import {View, Text, Dimensions} from 'react-native';
// import React from 'react';

// import {CurveType, LineChart} from 'react-native-gifted-charts';
// import {bezierCommand} from 'react-native-gifted-charts/src/utils';
// import {hp, wp} from '../helper/Globel';

// const Graph = () => {
//   const lineData = [
//     {value: 0, dataPointText: '- $100'},
//     {value: 20, dataPointText: '- $200'},
//     {value: 18, dataPointText: '- $500'},
//     {value: 40, dataPointText: '- $700'},
//     {value: 36, dataPointText: '- $800'},
//     {value: 60, dataPointText: '- $1000'},
//     {value: 54, dataPointText: '- $1100'},
//     {value: 85, dataPointText: '- $1200'},
//   ];

//   return (
//     <View style={{width: '200%', height: 'auto'}}>
//       <LineChart
//         // areaChart1
//         width={'100%'}
//         height={hp(144)}
//         // isAnimated
//         thickness={3}
//         // initialSpacing={2}
//         data={lineData}
//         hideAxesAndRules
//         hideDataPoints1={true}
//         pointerConfig={{
//           pointerStripHeight: 50,
//           pointerStripColor: 'lightgray',
//           pointerStripWidth: 2,
//           pointerColor: '#438883',
//           radius: 6,
//           pointerLabelWidth: 100,
//           pointerLabelHeight: 90,
//           // activatePointersOnLongPress: true,
//           autoAdjustPointerLabelPosition: false,
//           pointerLabelComponent: item => {
//             return (
//               <View
//                 style={{
//                   height: 38,
//                   width: 80,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginTop: -30,

//                   backgroundColor: 'black',
//                   borderRadius: 10,
//                 }}>
//                 <Text style={{color: 'lightgray', fontSize: 12}}>
//                   {item.value}
//                 </Text>
//                 <Text
//                   style={{
//                     color: 'white',
//                     fontWeight: 'bold',
//                     alignSelf: 'center',
//                     // marginTop: 20,
//                     textAlign: 'center',
//                   }}>
//                   hello
//                 </Text>
//                 {/* <Text style={{color: 'black', fontSize: 12, marginTop: 12}}>
//                   {item.dataPointText}
//                 </Text> */}
//                 {/* <Text style={{color: 'red', fontWeight: 'bold'}}>{'hii'}</Text> */}
//               </View>
//             );
//           },
//         }}
//         // showPointerStrip={true}
//         // dataPointsColor="green"
//         // hideRules
//         // yAxisColor="#0BA5A4"
//         // verticalLinesColor="rgba(14,164,164,0.5)"
//         // xAxisColor="#0BA5A4"
//         color="#0BA5A4"
//         curved={LineChart}
//         areaChart
//         // hideDataPoints
//         startFillColor={'#438883'}
//         endFillColor={'#438883'}
//         // startOpacity={1}
//         endOpacity={0.05}
//         gradientDirection="curved"
//         // backgroundColor="#414141"
//         // rulesColor="gray"
//         strok
//       />
//     </View>
//   );
// };

// export default Graph;
import {Text, View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

const Graph = () => {
  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},
    {value: 145, date: '6 Apr 2022'},
    {value: 160, date: '7 Apr 2022'},
    {value: 200, date: '8 Apr 2022'},
    {value: 220, date: '9 Apr 2022'},

    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},

    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];

  return (
    <View>
      <LineChart
        areaChart
        data={ptData}
        hideDataPoints
        spacing={10}
        color="#0BA5A4"
        initialSpacing={0}
        noOfSections={6}
        maxValue={600}
        hideRules
        hideAxesAndRules
        gradientDirection="curved"
        dataPointsColor="green"
        yAxisColor="#0BA5A4"
        verticalLinesColor="rgba(14,164,164,0.5)"
        xAxisColor="#0BA5A4"
        curved={LineChart}
        startFillColor={'#438883'}
        endFillColor={'#438883'}
        endOpacity={0.05}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: '#438883',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 190,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -10,
                  marginLeft: -40,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    // marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].date}
                </Text>

                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: '#rgba(67, 136, 131, 0.60)',
                  }}>
                  <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};
export default Graph;
