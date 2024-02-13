import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import loader from '../../assets/loader/water.gif'

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={loader}
      />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
      width: 400,
      height: 400,
    },
})