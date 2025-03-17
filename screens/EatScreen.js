import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import resPic from './../assets/restaurant/sample.jpg'

const EatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>

      <View style={styles.resItem}>
        {/* <View style={styles.resItemTopWrap}>

        </View> */}
        <Image
          style={styles.resImage}
          source={resPic}
        />
        <View style={styles.resItemBotWrap}>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default EatScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        
    },
    resItem: {
        borderWidth: 2,
        borderColor: 'blue',
        width: '90%',
        height: '26%',
    },
    resImage: {

    },
})