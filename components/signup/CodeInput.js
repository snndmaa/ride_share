import { StyleSheet, TextInput, View } from 'react-native'
import React, {forwardRef} from 'react'

const CodeInput = forwardRef(({ value, onChangeText, onFocus }, ref) => {
  return (
    <TextInput
     ref={ref}
     value={value}
     onChangeText={onChangeText}
     onFocus={onFocus}
     style={styles.TextInput}
     maxLength={1}
    />
  )
})

export default CodeInput

const styles = StyleSheet.create({
  TextInput: {
    borderColor: '#4169E1',
    borderWidth: 2,
    borderRadius: 27.5,
    width: 55,
    height: 55,
    textAlign: 'center',
    fontSize: 25,
  }
})