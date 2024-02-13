import { Text, View } from 'react-native'
import React from 'react'

const Dividor = ({ text, marginTop }) => {
    return (
        <View
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            height: 16,
            marginTop,
          }}
        >
          <View
            style={{
              borderColor: '#C0C0C0',
              borderWidth: 0.5,
              width: '90%',
            }}
          >
          </View>
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              fontSize: 13,
              fontWeight: '400',
              color: '#575656',
            }}
          >
            &nbsp;&nbsp;{text}&nbsp;&nbsp;
          </Text>
        </View>
      )
}

export default Dividor
