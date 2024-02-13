import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

import Field from '../components/login/Field'
import Classic from '../components/buttons/Classic'

import { setEmail, setPhoneNumber, setPassword } from '../slices/loginSlice'

import BackendService from '../Services/Backend'

const Login = () => {

  const [ authMethod, setAuthMethod ]     = useState('email')
  const [ inputStage, setInputStage ]     = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)

  const dispatch    = useDispatch()
  const email       = useSelector((state) => state.login.email)
  const phoneNumber = useSelector((state) => state.login.phoneNumber)
  const password    = useSelector((state) => state.login.password)

  const navigation = useNavigation()

  const handleEmailChange = emailText => {
    dispatch(setEmail(emailText))
  }

  const handlePasswordChange = passwordText => {
    dispatch(setPassword(passwordText))
  }

  const onContinue = () => {
    setInputStage(true)
  }

  const onLogin = async () => {
    if (email && password) {
      const payload ={
        email,
        password
      }
      const response = await BackendService.login(payload)

      if (response.token) {
        try{
          await AsyncStorage.setItem('authToken', response.token)
          await AsyncStorage.setItem('userID', response.user)
          navigation.navigate('HomeScreen')
        }
        catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Token not Saved',
            position: 'top',
            topOffset: 10
        })
        }
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Missing Fields!',
        position: 'top',
        topOffset: 10
    })
    }
  }

  const onClearText = () => {
    dispatch(setEmail(''))
  }

  const onPasswordToggle = () => {
    setShowPassword(old => !old)
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Toast/>
      <View style={styles.HeadWrap}>
        <Icon
          name='arrow-back'
          type='ionicon'
          style={styles.HeadIcon}
          size={30}
          onPress={() => navigation.navigate('AuthLanding')}
        />

        <Text style={styles.HeadText}>Login</Text>
        
        <View style={styles.HeadBlank}/>
      </View>

      <View style={styles.SelectWrap}>
        <TouchableOpacity
         style={[ styles.SelectButton, authMethod === 'email' ? {backgroundColor: 'white'} : '' ]}
        >
          <Text>Email or Username</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={[ styles.SelectButton, authMethod === 'number' ? {backgroundColor: 'white'} : '' ]}
        >
          <Text>Phone Number</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
       style={styles.ContentWrap}
      >
        { !inputStage && (
          <Field
           label='Email or Username'
           showPassword={true}
           type='text'
           placeholder='Email or Username'
           marginTop={0}
           iconName='x'
           iconType='feather'
           handleTextChange={handleEmailChange}
           onIconClick={onClearText}
           textStateValue={email}
          />
        )}

        { inputStage && (
          <View style={styles.PasswordWrap}>
            <View style={styles.emailWrap}>
              <Text style={styles.emailTitle}>Your email or username</Text>
              <Text style={styles.emailText}>byron_40</Text>
            </View>
  
            <Field
             label='Password'
             showPassword={showPassword}
             placeholder='Password'
             marginTop={25}
             iconName={ showPassword ? 'eye-off' : 'eye' }
             iconType='material-community'
             handleTextChange={handlePasswordChange}
             onIconClick={onPasswordToggle}
             textStateValue={password}
            />
          </View>
        )}
        
        <Classic
         text={inputStage ? 'Log in' : 'Continue'}
         width={273} 
         height={42} margint={70} 
         color='#4169E1' 
         textcolor='#FFFFFF' 
         handleOnPress={inputStage ? onLogin : onContinue}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    HeadWrap: {
        // borderColor: 'green',
        // borderWidth: 2,
        width: '90%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    HeadIcon:{
    },
    HeadText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    HeadBlank: {
        width: '8%'
    },
    SelectWrap: {
        borderRadius: 8,
        width: '90%',
        height: '4%',
        backgroundColor: '#DCDFE4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectButton: {
        borderRadius: 8,
        height: '85%',
        width: '49%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContentWrap: {
        // borderColor: 'pink',
        // borderWidth: 1.5,
        marginTop: 20,
        width: '90%',
        height: 200,
        alignItems: 'center'
    },
    PasswordWrap: {
        // borderColor: 'pink',
        // borderWidth: 1.5,
        alignContent: 'center',
        width: '100%',
    },
    emailWrap: {
        // borderColor: 'red',
        // borderWidth: 1.5,
        alignItems: 'center'
    },
    emailTitle: {
        color: 'grey',
        fontSize: 17,
        fontWeight: '600',
    },
    emailText: {
        fontSize: 16,
        fontWeight: '800',
    },
})