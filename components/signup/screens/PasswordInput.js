import { View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import Toast from 'react-native-toast-message'

import { emailScreenStyles as styles } from '../../../styles/signup/emailScreenStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setPassword } from '../../../slices/signupSlice'
import BottomNav from '../BottomNav'

const PasswordInput = () => {

  const navigation = useNavigation()
  const dispatch   = useDispatch()

  const [ password1, setPassword1 ] = useState('')
  const [ password2, setPassword2 ] = useState('')

  const handleLeftPress = () => {
    navigation.navigate('numberScreen')
  }

  const handleRightPress = () => {

    if (password1 === password2 && password1.length > 5) {
        dispatch(setPassword(password1))
        navigation.navigate('nameScreen')
    } else {
        Toast.show({
            type: 'error',
            text1: 'Ensure passwords match and are over 6 characters',
            position: 'top',
            topOffset: 10
        })
    }
  }

  return (
    <SafeAreaView style={styles.Container}>
        <Toast/>
        <Text style={styles.HeadText}>Enter and confirm password</Text>


        <View style={styles.emailWrap}>
          <TextInput
            style={styles.emailTextField}
            placeholder='Enter password'
            onChangeText={(text) => setPassword1(text)}
            value={password1}
            secureTextEntry={true}
          />

          <Icon
            name='unlock'
            type='octicon'
            style={{}}
            size={24}
            onPress={() => {}}
          />
        </View>

        <View style={styles.emailWrap}>
          <TextInput
            style={styles.emailTextField}
            placeholder='Confirm password'
            onChangeText={(text) => setPassword2(text)}
            value={password2}
            secureTextEntry={true}
          />

          <Icon
            name='lock'
            type='octicon'
            style={{}}
            size={24}
            onPress={() => {}}
          />
        </View>

        <BottomNav
            handleLeftPress={handleLeftPress}
            handleRightPress={handleRightPress}
        />
    </SafeAreaView>
    )
}

export default PasswordInput