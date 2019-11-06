import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {

    const {buttonStyle, buttonTextStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {

    buttonTextStyle:{
        alignSelf: 'center',
        color:'#1d1d1d',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fdfffd',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#0a77bd',
    }
}

export {Button};
