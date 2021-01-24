import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {format, compareAsc} from 'date-fns';

export const HeaderTitle = ({ts}) => {
  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.textTitleName}>Weather</Text>
      <Text style={{fontSize: 23, color: '#fff', alignSelf:"center"}}>
        {format(new Date(ts), 'dd/MM/yyyy')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#006a71',
    marginHorizontal:10,
    padding:10,
    borderRadius: 5,
    marginTop: 20,
  },
  textTitleName: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf:"center"
  }
});
//008891
//00587a
//045762
//2d6187
//0d7377
//0e9aa7