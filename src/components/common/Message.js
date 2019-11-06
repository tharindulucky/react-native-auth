import React from 'react';
import {View, Text} from 'react-native';

const Message = ({type, message}) => {

    const styles = style;

    return(
        <View style={type == 'error' ? styles.viewErrorStyles : styles.viewSuccessStyles}>
            <Text style={type == 'error' ? styles.textErrorStyles : styles.textSuccessStyles}>{message}</Text>
        </View>
    );
}

const style = {
    viewErrorStyles: {
        borderColor: '#a81014',
        //borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignSelf:  'stretch',
        flex: 1,
        marginBottom:10
    },

    textErrorStyles: {
        color: '#a81014',
        alignSelf: 'center'
    },

    viewSuccessStyles: {
        borderColor: '#30a83d',
        //borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignSelf:  'stretch',
        flex: 1,
        marginBottom:10
    },

    textSuccessStyles: {
        color: '#30a83d',
        alignSelf: 'center'
    }
}

export {Message};
