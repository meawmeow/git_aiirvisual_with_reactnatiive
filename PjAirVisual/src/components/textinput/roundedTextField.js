import React from 'react'
import { View, Text,StyleSheet,Dimensions, TextInput } from 'react-native'

const { width, height } = Dimensions.get('window')

const RoundedTextField = ({term,placeHolder,onTermChange,onTermSubmit})=>{
    return(
        <View>
            <Text style={styles.errorText}/>
            <View style={styles.textFieldView}>
                <TextInput
                autoCorrect={false}
                style={styles.textField}
                placeholder={placeHolder}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textField:{
        fontSize:14,
        flex:1,
        marginHorizontal:20,
    },
    textFieldView:{
        height: height * 0.05,
        width: width * 0.65,
        borderRadius: (height * 0.075) / 2,
        marginTop: 2,
        marginBottom: 2,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
    },
    errorText:{
        fontSize:12,
        color:'red',
        marginBottom:-5,
        marginHorizontal:20,
    }
})

export default RoundedTextField