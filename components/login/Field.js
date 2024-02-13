import { StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'


const Field = ({ label, showPassword, placeholder, marginTop, iconName, iconType, handleTextChange, onIconClick, textStateValue }) => {

  return (  
    <View
     style={[ styles.Container,  ]}
    >
      <Text style={[ styles.Label,  ]}>
        {label}
      </Text>
      <View style={styles.Aligner}>
      <TextInput
        style={styles.TextField}
        onChangeText={ text => handleTextChange(text)}
        placeholder={placeholder}
        value={textStateValue}
        secureTextEntry={false}
      />
      {textStateValue && (
        <Icon
          name={iconName}
          type={iconType}
          size={24}
          onPress={onIconClick}
        />
      )}
      </View>
    </View>
  )
}

export default Field

const styles = StyleSheet.create({
  Container: {
    borderColor: '#4169E1',
    borderWidth: 1.5,
    borderRadius: 8,
    height: 60,
    width: '100%',
  },
  Label: {
    marginLeft: 15,
  },
  Aligner: {
    // borderColor: 'yellow',
    // borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '97%',
    height: '60%',
  },
  TextField: {
    // borderColor: 'red',
    // borderWidth: 1.5,
    marginLeft: 15,
    flex: 1,
    height: '100%',
  },
})