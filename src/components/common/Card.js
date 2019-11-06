import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
      <View style={style.containerStyle}>
          {props.children}
      </View>
    );
};

const style = {
  containerStyle:{
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      elevation: 0.5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
  }
};

export {Card};
