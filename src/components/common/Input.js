import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry, autoCorrect}) => {

    const {inputStyles, labelStyles, containerStyles} = styles;

    return(
        <View style={containerStyles}>
            <Text style={labelStyles}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={inputStyles}
                value={value}
                autoCorrect={autoCorrect}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyles:{
        color: '#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:20,
        flex:4,
    },
    labelStyles:{
        fontSize: 18,
        paddingLeft:20,
        flex: 2,
        color:'rgba(26,26,26,0.6)'
    },
    containerStyles:{
        height: 60,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export {Input};
