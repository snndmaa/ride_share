import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'


const Social = ({ text, marginTop, image, iconName }) => {
    return (
        <View
          style={{
            alignItems: 'center',
            marginTop,
          }}
        >
            <TouchableOpacity
            onPress={()=>{}}
            style={{
                width: 273,
                height: 42,
                borderRadius: 8,
                backgroundColor: '#F8F9F9',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                border: '1px solid #F2F0FF'
            }}
            >
                {image ? (
                    <Image
                      source={image}
                      style={{
                        width: 21,
                        height: 21,
                        marginRight: 10,
                      }}
                    />
                ) :
                (
                    <Icon
                      name={iconName}
                      type='font-awesome'
                      size={21}
                      color='#3A3075'
                      style={{
                        marginRight: 10,
                      }}
                    />
                )}
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 15
                    }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
      )
}

export default Social