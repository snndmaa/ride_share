import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import Classic from '../components/buttons/Classic'

const AuthLanding = () => {
  const navigation = useNavigation()


  return (
    <SafeAreaView style={[styles.Container]}>
      <View style={styles.HeaderWrap}>
        <Text style={styles.HeaderText1}>Mauxi</Text>
      </View>

      <View style={styles.Divider}/>

      <View style={styles.SloganWrap}>
        <Text style={styles.SloganText1}>Ride with Mauxi.</Text>
        <Text style={styles.SloganText2}>Experience Convenience.</Text>
      </View>

      <Classic text='Log in' width={273} height={42} margint={200} color='#4169E1' textcolor='#FFFFFF' handleOnPress={() => navigation.navigate('Login')}/>
      <Classic text='Sign up' width={273} height={42} margint={20} color='#DCDFE4' textcolor='black' handleOnPress={() => navigation.navigate('Signup')}/>

    </SafeAreaView>
  )
}

export default AuthLanding

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    HeaderWrap:{
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'center',
      marginTop: '53%',
    },
    HeaderText1: {
      fontSize: 51,
      fontWeight: '900',
      color: '#4169E1'
    },
    HeaderText2: {
      fontSize: 51,
      fontWeight: '900',
      marginLeft: 10,
    },
    Divider: {
      marginTop: '7%',
      borderColor: '#DCDFE4',
      borderWidth: 1.5,
      width: '20%',
    },
    SloganWrap: {
      marginTop: '7%',
    },
    SloganText1: {
      fontSize: 20,
      textAlign: 'center',
    },
    SloganText2: {
      fontSize: 20,
      textAlign: 'center',
    },
})