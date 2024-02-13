import { View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { emailScreenStyles as styles } from '../../../styles/signup/emailScreenStyles'
// import { setFirstName, setLastName } from '../../../slices/signupSlice'
import BottomNav from '../BottomNav'

import BackendService from '../../../Services/Backend'


const NameInput = () => {

  const navigation = useNavigation()
//   const dispatch   = useDispatch()

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const {email, phoneNumber, password } = useSelector(state => state.signup) 

  const onChangeText = (text) => {
    dispatch(setFirstName(text))
  }

  const handleLeftPress = () => {
    navigation.navigate('passwordScreen')
  }

  const handleRightPress = async () => {
    
    if (firstName && lastName) {
        const payload = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            numberVerified: true,
        }
        
        const response = await BackendService.register(payload)

        if (response.status === 'success') {
          Toast.show({
            type: 'success',
            text1: 'Account Created!',
            position: 'top',
            topOffset: 10
        })
        navigation.navigate('AuthLanding')
        }
    }
    else {
        Toast.show({
            type: 'error',
            text1: 'Missing Fields!',
            position: 'top',
            topOffset: 10
        })
    }
  }

  
  return (
      <SafeAreaView style={styles.Container}>
        
        <Toast/>
        <Text style={styles.HeadText}>Enter Full Name</Text>


        <View style={styles.emailWrap}>
          <TextInput
            style={styles.emailTextField}
            placeholder='Enter First Name'
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />

          <Icon
            name='person'
            type='fontawesome'
            size={24}
          />
        </View>

        <View style={styles.emailWrap}>
          <TextInput
            style={styles.emailTextField}
            placeholder='Enter Last Name'
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />

          <Icon
            name='person'
            type='fontawesome'
            style={{}}
            size={24}
          />
        </View>

        <BottomNav
            handleLeftPress={handleLeftPress}
            handleRightPress={handleRightPress}
        />
    </SafeAreaView>
  )
}

export default NameInput