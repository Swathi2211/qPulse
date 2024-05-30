import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import AppButton from './AppButton';
import { colors } from './palette';
import BoxCss from './boxCss';

function Box({ data }) {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDataIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Adjust the interval time as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [data.length]);

  return (
    <View style={BoxCss.parent}>
      <View
        style={{
          backgroundColor: data[currentDataIndex].bg,
          width: 200,
          height: 220,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={BoxCss.img} source={data[currentDataIndex].img} />
      </View>
      <View style={BoxCss.cont}>
        <Text style={BoxCss.h1}>{data[currentDataIndex].title}</Text>
        <Text style={BoxCss.p}>{data[currentDataIndex].cont}</Text>
        <AppButton title={data[currentDataIndex].btn}></AppButton>
      </View>
    </View>
  );
}

export default Box;
