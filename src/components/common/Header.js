//Import Libraries
import React from 'react';
import {Text,View} from 'react-native';

//Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle:{
        backgroundColor: '#ebebeb',
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 8,
        position: 'relative'
    },
    textStyle:{
        fontSize:25,
        color: '#0a77bd'
    }
}

//Make it available to other parts
export {Header};
