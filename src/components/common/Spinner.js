import React from 'react';
import {View, ActivityIndicator, Modal, Text} from 'react-native';

const Spinner = ({size, text}) => {

    const {spinnerStyles, textStyles} = style

    return (
          <View>
              <Modal animationType="slide" transparent={false}>
                  <View style={spinnerStyles}>
                      <View>
                          <ActivityIndicator size={size || 'large'}/>
                      </View>
                      <View style={textStyles}>
                          <Text>{text}</Text>
                      </View>
                  </View>
              </Modal>
          </View>
    );
};

const style = {
    spinnerStyles: {
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
    },

    textStyles: {
        marginTop: 10
    }
}

export {Spinner};
