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
const {width, height} = Dimensions.get('window');
const CardCityItem = ({data, onPress}) => {
  const {city} = data;
  return (
    <View style={styles.container}>
      <Image style={[styles.image]} source={imageApp['6'].image} />
      <View style={styles.carContainer}>
        <Text style={styles.textState}>{city}</Text>
        <TouchableOpacity onPress={() => onPress(city)}>
          <Image style={[styles.imageArrow]} source={imageApp['5'].image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flexDirection: 'row',
  },
  carContainer: {
    backgroundColor: '#0e9aa7',
    flexDirection: 'row',
    margin: 5,
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginLeft: 20,
  },
  image: {
    width: 55,
    height: 55,
    marginLeft: 0,
    position: 'absolute',
    left: 0,
    zIndex: 100,
  },
  imageArrow: {
    width: 35,
    height: 35,
    marginLeft: 0,
    position: 'relative',
    left: -25,
    zIndex: 111,
  },
  textState: {
    fontSize: 16,
    color: '#fff',
    position: 'relative',
    left: 50,
  },
});

export default CardCityItem;
//008891
//00587a
//045762
//2d6187
//0d7377
//0e9aa7
