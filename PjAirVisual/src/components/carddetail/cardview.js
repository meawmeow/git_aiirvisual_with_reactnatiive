import React from 'react';
import { View, StyleSheet} from 'react-native';

import { WeatherItem } from './weatherItem'
import {AqiItem} from './aqiItem';
import { HeaderTitle } from "./headerTitle";

export const CardView = ({data}) => {
  const {country, current, city, state} = data.data;
  return (
    <View style={styles.detailContainer}>
      <HeaderTitle ts={current.weather.ts}/>
      <WeatherItem weather={current.weather} city={city} state={state} country={country}/>
      <AqiItem pollution={current.pollution} />
    </View>
  );
};
const styles = StyleSheet.create({
  detailContainer: {
  flex:1,
  width: '100%',
  },
});
