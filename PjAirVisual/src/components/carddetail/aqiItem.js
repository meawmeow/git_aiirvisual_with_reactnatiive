import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {GET_ICON_PM,units,icon_pm} from '../../util';

export const AqiItem = ({pollution}) => {
  const {aqius, mainus} = pollution;
  return (
    <View style={styles.container}>
      <View style={{margin: 10,alignSelf:'center'}}>
        <View
          style={styles.itemRowContainer}>
          <Text style={styles.textAqiName}>Aqius</Text>
          <Text style={[styles.textAqiValue, {color: GET_ICON_PM(aqius).textColor}]}>
            {aqius}
          </Text>
        </View>
        <View
          style={styles.itemRowContainer}>
          <Text style={styles.textPollName}>Pollutant</Text>
          <Text style={styles.textPollutant}>{units(mainus)}</Text>
        </View>
      </View>
      <View style={{backgroundColor: GET_ICON_PM(aqius).background}}>
        <Image style={styles.iconAqi} source={GET_ICON_PM(aqius).image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28abb9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop:4
  },
  itemRowContainer:{
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
  },
  iconAqi: {
    width: 150,
    height: 150,
    marginTop: 20,
    resizeMode: 'contain',
    marginTop: 0,
  },
  textAqiName: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  textAqiValue: {
    fontSize: 30,
    fontWeight: 'bold',
  
  },
  textPollName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  textPollutant: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  }
});
