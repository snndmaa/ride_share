import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = ({ fontSize }) => {
  return (
    <Text style={[styles.mauxi, {fontSize: fontSize ? fontSize : 51}]}>MauTrans</Text>
  )
}

export default Logo

const styles = StyleSheet.create({
    mauxi: {
        fontWeight: '900',
        color: '#4169E1'
    }
})