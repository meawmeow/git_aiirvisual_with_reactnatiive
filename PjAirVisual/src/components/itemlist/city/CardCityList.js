import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import CardCityItem from '../../../components/itemlist/city/CardCityItem';

const CarsCityList = ({datas,state,onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{state}</Text>
      <FlatList
        data={datas}
        renderItem={({item}) => <CardCityItem data={item} onPress={onPress}/>}
        keyExtractor={(item) => item.city.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    height: '80%',
  },
  title:{
      fontSize:18,
      fontWeight:'bold',
      color:'#cc0e74'
  }
});

export default CarsCityList;
