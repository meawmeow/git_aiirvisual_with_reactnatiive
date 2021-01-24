import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {onFetchCountryApi} from '../redux';
import Header from '../components/headers/header';
import baseStyles from '../styles/baseStyles';
import RoundedButton from '../components/buttons/roundedButton';
import RoundedTextField from '../components/textinput/roundedTextField';
import CardCountryList from '../components/itemlist/country/CardCountryList';
import {KEY_IS_RELOAD, app_ui_color} from '../util';

export const Home = ({navigation}) => {
  const [country, setCountry] = useState('Thailand');
  const dispatch = useDispatch();
  const {countryState, isFetchApi} = useSelector((state) => state.airReducer);

  const onFetchCountryState = () => {
    dispatch(onFetchCountryApi({country: country}));
  };
  const onItemSeletedState = (data) => {
    storeData('1');
    navigation.navigate('City', {state: data, country: country});
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(KEY_IS_RELOAD, value);
    } catch (e) {}
  };
  return (
    <SafeAreaView>
      <View>
        <Header title="AirVisual" />
        <View
          style={[
            baseStyles.container,
            baseStyles.background,
            styles.container,
          ]}>
          <Text style={styles.textTitle}>Search Country</Text>
          <View style={styles.containerSearch}>
            <RoundedTextField placeHolder="country" onTermChange={setCountry} />
            <RoundedButton
              title="Search"
              buttonStyle={styles.buttonStyle1}
              textStyle={styles.textBtnStyle1}
              onPress={() => onFetchCountryState()}
            />
          </View>

          {countryState !== null && isFetchApi === false ? (
            <View style={{}}>
              <CardCountryList
                datas={countryState.data}
                country={country}
                onPress={onItemSeletedState}
              />
              <Text style={{marginLeft:5}}>Create By : MeawMeowCreate.TH</Text>
              <Text style={{marginLeft:5,marginBottom:-5}}>Api data from : api.airvisual.com [www.iqair.com]</Text>
            </View>
          ) : (
            isFetchApi === true && (
              <ActivityIndicator
                style={{marginTop: 20}}
                size="large"
                color={app_ui_color.activityIndicatorColor}
              />
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
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    color: '#008891',
  },
  buttonStyle1: {
    width: 80,
    backgroundColor: '#008891',
    borderRadius: 5,
    marginTop: 15,
  },
  textBtnStyle1: {
    color: '#fff',
    fontSize: 16,
  },
});
