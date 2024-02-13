import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Classic = ({ text, width, height, radiusBorder, margint, color, textcolor, handleOnPress }) => {
    return (
        <TouchableOpacity
        onPress={handleOnPress}
        style={{
                marginTop: margint,
                width: width,
                height: height,
                borderRadius: radiusBorder ? radiusBorder : 15,
                backgroundColor: color,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Text
                    style={{
                        color: textcolor,
                        fontWeight: '700',
                        fontSize: 15
                    }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
      )
    }
    

export default Classic