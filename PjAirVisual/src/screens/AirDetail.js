import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {onFetchAirDetailApi} from '../redux';
import Header from '../components/headers/header';
import baseStyles from '../styles/baseStyles';
import {CardView} from '../components/carddetail/cardview';
import {app_ui_color} from '../util';

export const AirDetail = ({route, navigation}) => {
  const {country, state, city} = route.params;

  const dispatch = useDispatch();
  const {airDetail, isFetchApi} = useSelector((state) => state.airReducer);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onFetchAirDetailState();
    });
    return unsubscribe;
  }, [navigation]);

  const onFetchAirDetailState = () => {
    dispatch(onFetchAirDetailApi({country: country, state: state, city: city}));
  };

  return (
    <SafeAreaView>
      <View>
        <Header
          title="AirVisual Detail"
          isIconBack={true}
          onPress={() => navigation.goBack()}
        />
        <View
          style={[
            baseStyles.container,
            baseStyles.background,
            styles.container,
          ]}>
          {airDetail !== null && isFetchApi === false ? (
              <CardView data={airDetail} />
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
});
