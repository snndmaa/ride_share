import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'

import { emailScreenStyles as styles } from '../../../styles/signup/emailScreenStyles'
import Classic from '../../buttons/Classic'
import Social from '../../buttons/Social'
import Dividor from '../Dividor'

import google from '../../../assets/social/google48.png'
import apple from '../../../assets/social/apple60.png'
import facebook from '../../../assets/social/facebook64.png'

import { setEmail } from '../../../slices/signupSlice'

const EmailInput = () => {
  const navigation = useNavigation()
  const dispatch   = useDispatch()
  
  const { email } = useSelector(state => state.signup) 

  const handleEmailChange = (text) => {
    dispatch(setEmail(text))
  }

  const onContinue = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      navigation.navigate('numberScreen')
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid email!',
        position: 'top',
        topOffset: 20,
      })
    }
  }

  return (
    <SafeAreaView style={styles.Container}>
        <Toast/>
        <Text style={styles.HeadText}>What's your email address?</Text>


        <View style={styles.emailWrap}>
          <TextInput
            style={styles.emailTextField}
            placeholder='Enter email address'
            onChangeText={(text) => handleEmailChange(text)}
            value={email}
          />

          <Icon
            name='user-tag'
            type='font-awesome-5'
            style={{}}
            size={24}
            onPress={() => {}}
          />
        </View>

        <Classic
         text='Continue'
         width={'90%'} 
         height={52}
         radiusBorder={8}
         margint={20} 
         color='#4169E1' 
         textcolor='#FFFFFF' 
         handleOnPress={onContinue}
        />

        <Dividor
         text='or' 
         marginTop={16}
        />

        <Social
         text={'Continue with Google'} 
         marginTop={13} image={ google } 
         handleOnPress={ () => {} }
        />

        <Social
         text={'Continue with Apple'} 
         marginTop={13} image={ apple } 
         handleOnPress={ () => {} }
        />

        <Social
         text={'Continue with Facebook'} 
         marginTop={13} image={ facebook } 
         handleOnPress={ () => {} }
        />
    </SafeAreaView>
  )
}

export default EmailInput