import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import {CurveType, LineChart} from 'react-native-gifted-charts';
import {bezierCommand} from 'react-native-gifted-charts/src/utils';
import {hp, wp} from '../helper/Globel';

const Graph = () => {
  const lineData = [
    {value: 0, dataPointText: '- $100'},
    {value: 20, dataPointText: '- $200'},
    {value: 18, dataPointText: '- $500'},
    {value: 40, dataPointText: '- $700'},
    {value: 36, dataPointText: '- $800'},
    {value: 60, dataPointText: '- $1000'},
    {value: 54, dataPointText: '- $1100'},
    {value: 85, dataPointText: '- $1200'},
  ];

  return (
    <View style={{width: '100%'}}>
      <LineChart
        width={wp(392)}
        height={hp(145)}
        isAnimated
        thickness={3}
        initialSpacing={1}
        data={lineData}
        hideAxesAndRules
        hideDataPoints1
        pointerConfig={LineChart}
        dataPointsColor="green"
        hideRules
        yAxisColor="#0BA5A4"
        verticalLinesColor="rgba(14,164,164,0.5)"
        xAxisColor="#0BA5A4"
        color="#0BA5A4"
        curved={bezierCommand}
        areaChart
        hideDataPoints
        startFillColor={'#438883'}
        endFillColor={'#438883'}
        startOpacity={0.4}
        endOpacity={0.1}
        gradientDirection="curved"
        backgroundColor="#414141"
        rulesColor="gray"
        strok
      />
    </View>
  );
};

export default Graph;
