import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import { imageApp} from '../../util'

const Header = ({title,isIconBack, onPress}) => {
  return (
    <View style={styles.container}>
        {isIconBack ? (
            <TouchableOpacity onPress={onPress}>
            <Image
              style={[styles.logo]}
              source={imageApp["1"].image}
            />
            <Image
              style={[styles.logoBack]}
              source={imageApp["2"].image}
            />
          </TouchableOpacity>
        ):(
          <View>
              <Image
              style={[styles.logo]}
              source={imageApp["1"].image}
            />
            <Image
              style={[styles.logoBack]}
              source={imageApp["3"].image}
            />
          </View>
        )}
      

      <Text style={styles.textTitle}>{title}</Text>
      <Image
        style={styles.menu}
        source={imageApp["4"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    paddingHorizontal: 1,
    backgroundColor: '#008891',
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 20,
    resizeMode: 'contain',
    marginTop: 0,
  },
  logoBack: {
    width: 35,
    height: 40,
    resizeMode: 'contain',
    marginTop: -50,
    marginLeft:13,
  },
  textTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'bold'
  },
  menu: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Header;
