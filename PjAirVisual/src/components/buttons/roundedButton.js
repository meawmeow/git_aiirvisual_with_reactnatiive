import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const RoundedButton = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle,styles.buttonStyle]}>
      <Text style={[textStyle,styles.textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({
    buttonStyle:{
        height:40,
        margin:5,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.5,
    },
    textStyle:{
        fontSize:16,
    }
})

export default RoundedButton