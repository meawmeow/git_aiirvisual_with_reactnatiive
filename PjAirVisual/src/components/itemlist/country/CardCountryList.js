import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import CardCountryItem from '../../../components/itemlist/country/CardCountryItem';
const { width, height } = Dimensions.get('window')

const CarsCountryList = ({datas,country,onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country}</Text>
      <FlatList
        data={datas}
        renderItem={({item}) => <CardCountryItem data={item} onPress={onPress}/>}
        keyExtractor={(item) => item.state.toString()}
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

export default CarsCountryList;
