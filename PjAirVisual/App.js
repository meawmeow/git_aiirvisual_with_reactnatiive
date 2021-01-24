import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {store} from './src/redux';
import {Home, CityScreen, AirDetail} from './src/screens';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="City" component={CityScreen} />
          <Stack.Screen name="AirDetail" component={AirDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
