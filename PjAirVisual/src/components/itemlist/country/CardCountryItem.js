import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {imageApp} from '../../../util';

const CardCountryItem = ({data, onPress}) => {
  const {state} = data;

  return (
    <View style={styles.carContainer}>
      <Image style={[styles.image]} source={imageApp["1"].image} />
      <Text style={styles.textState}>{state}</Text>
      <TouchableOpacity onPress={()=>onPress(state)}>
        <Image style={[styles.image]} source={imageApp["5"].image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    backgroundColor: '#0e9aa7',
    flexDirection: 'row',
    margin: 2,
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  image: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginRight:10
  },
  textState: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CardCountryItem;
