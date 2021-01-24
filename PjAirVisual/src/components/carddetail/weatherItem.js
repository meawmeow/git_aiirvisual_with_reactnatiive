import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {URL_AIR_VISUAL_ICON} from '../../util';

export const WeatherItem = ({weather, city, state, country}) => {
  const {tp, ts, hu, ws, ic} = weather;

  const TitleViewH1 = ({name, value}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.textName}>{name}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textValue}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TitleViewH1 name={'City:'} value={city} />
        <TitleViewH1 name={'State:'} value={state} />
        <TitleViewH1 name={'Country:'} value={country} />
      </View>
      <View style={styles.contentContainer}>
        <TitleViewH1 name={'Temperature'} value={tp + ' Celsius'} />
        <TitleViewH1 name={'Humidity'} value={hu + ' %'} />
        <TitleViewH1 name={'Wind speed'} value={ws + ' (m/s)'} />
        <View style={styles.airvisualContainer}>
          <Image
            style={[styles.icon]}
            source={{
              uri: URL_AIR_VISUAL_ICON + ic + '.png',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008891',
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 4,
  },
  headerContainer: {
    marginHorizontal: 20,
    marginTop:10
  },

  contentContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  itemRowContainer: {},
  textName: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  textValue: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'flex-end',
    color: '#ffe227',
  },
  airvisualContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 20,
    resizeMode: 'contain',
    marginTop: 0,
  },
});
