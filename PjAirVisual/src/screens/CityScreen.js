import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {
  useFocusEffect,
} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {onFetchCityApi} from '../redux';
import Header from '../components/headers/header';
import baseStyles from '../styles/baseStyles';
import CardCityList from '../components/itemlist/city/CardCityList';
import { KEY_IS_RELOAD,app_ui_color } from '../util'

export const CityScreen = ({route, navigation}) => {
  const {country, state} = route.params;

  const dispatch = useDispatch();
  const {city, isFetchApi} = useSelector((state) => state.airReducer);

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    return unsubscribe;
  }, [navigation]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(KEY_IS_RELOAD, value);
    } catch (e) {}
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY_IS_RELOAD);
      if (value !== null) {
        if (value === '1') {
          onFetchCityState();
        }
      }
    } catch (e) {
      
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();
      // Do something when the screen is focused
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  const onFetchCityState = () => {
    dispatch(onFetchCityApi({country: country, state: state}));
  };
  const onItemSeletedCity = (data) => {
    storeData('0');
    navigation.navigate('AirDetail', {
      country: country,
      state: state,
      city: data,
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Header
          title={country}
          isIconBack={true}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={[baseStyles.container,baseStyles.background, styles.container]}>
          {city !== null && isFetchApi === false ? (
            <View style={{}}>
              <CardCityList
                datas={city.data}
                state={state}
                onPress={onItemSeletedCity}
              />
            </View>
          ) : (
            isFetchApi === true && (
              <ActivityIndicator style={{marginTop:20}} size="large" color={app_ui_color.activityIndicatorColor} />
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  buttonStyle1: {
    width: 80,
    backgroundColor: '#e27802',
    borderRadius: 5,
    marginTop: 15,
  },
  textBtnStyle1: {
    color: '#fff',
  },
});
