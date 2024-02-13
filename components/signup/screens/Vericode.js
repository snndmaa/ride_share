import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, {createRef, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import { vericodeStyles as styles } from '../../../styles/signup/vericodeScreenStyles'
import CodeInput from '../CodeInput'
import BackendService from '../../../Services/Backend'

const Vericode = () => {

  const navigation = useNavigation()

  const { phoneNumber } = useSelector(state => state.signup) 

  codeInput1Ref = createRef(null)
  codeInput2Ref = createRef(null)
  codeInput3Ref = createRef(null)
  codeInput4Ref = createRef(null)
  codeInput5Ref = createRef(null)
  codeInput6Ref = createRef(null)

  const [ code1, setCode1 ] = useState('')
  const [ code2, setCode2 ] = useState('')
  const [ code3, setCode3 ] = useState('')
  const [ code4, setCode4 ] = useState('')
  const [ code5, setCode5 ] = useState('')
  const [ code6, setCode6 ] = useState('')

  const code = (code1 && code2 && code3 && code4 && code5 && code6) ? code1 + code2 + code3 + code4 + code5 + code6 : ''

  const handleCodeChange = (value, position) => {
    switch (position) {
      case 1:
        setCode1(value)
        if (value !== '') codeInput2Ref.current.focus()
        handleFocus(2)
        break
      case 2:
        setCode2(value)
        if (value !== '') codeInput3Ref.current.focus()
        break
      case 3:
        setCode3(value)
        if (value !== '') codeInput4Ref.current.focus()
        break
      case 4:
        setCode4(value)
        if (value !== '') codeInput5Ref.current.focus()
        break
      case 5:
        setCode5(value)
        if (value !== '') codeInput6Ref.current.focus()
        break
      case 6:
        setCode6(value)
        break
    }
  }

  const handleFocus = (position) => {
    switch (position) {
      case 1:
        codeInput1Ref.current.focus()
        break
      case 2:
        codeInput2Ref.current.focus()
        break
      case 3:
        codeInput3Ref.current.focus()
        break
      case 4:
        codeInput4Ref.current.focus()
        break
      case 5:
        codeInput5Ref.current.focus()
        break
      case 6:
        codeInput6Ref.current.focus()
        break
      default:
        break
    }
  }

  if (code) {
    Keyboard.dismiss()
    //Submit Func
    const payload = {
      phoneNumber,
      code,
    } 

    BackendService.verify(payload)
    .then(response => {
      if (response.status === 'success') {
        navigation.navigate('passwordScreen')
      }
      else {
        Toast.show({
          type: 'error',
          text1: 'Verification Failed!',
          position: 'top',
          topOffset: 10
        })
      }
    })
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Toast/>
      <Text style={styles.HeadText1}>Enter the 6-digit code sent to you at:</Text>
      
      <Text style={styles.HeadText2}>{phoneNumber}</Text>
      
      <KeyboardAvoidingView style={styles.CodeWrap}>
        <CodeInput
         ref={codeInput1Ref}
         value={code1}
         onChangeText={value => handleCodeChange(value, 1)}
         onFocus={() => handleFocus(1)}
         maxLength={1}
        />
        <CodeInput
         ref={codeInput2Ref}
         value={code2}
         onChangeText={value => handleCodeChange(value, 2)}
         onFocus={() => handleFocus(2)}
         maxLength={2}
        />
        <CodeInput
         ref={codeInput3Ref}
         value={code3}
         onChangeText={value => handleCodeChange(value, 3)}
         onFocus={() => handleFocus(3)}
         maxLength={3}
        />
        <CodeInput
         ref={codeInput4Ref}
         value={code4}
         onChangeText={value => handleCodeChange(value, 4)}
         onFocus={() => handleFocus(4)}
         maxLength={4}
        />
        <CodeInput
         ref={codeInput5Ref}
         value={code5}
         onChangeText={value => handleCodeChange(value, 5)}
         onFocus={() => handleFocus(5)}
         maxLength={5}
        />
        <CodeInput
         ref={codeInput6Ref}
         value={code6}
         onChangeText={value => handleCodeChange(value, 6)}
         onFocus={() => handleFocus(6)}
         maxLength={6}
        />
      </KeyboardAvoidingView>

      <Text style={styles.TipText}>
        Tip: Make sure you check your inbox and spam folders
      </Text>

      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>Resend in</Text>
        <Text style={styles.ButtonText}>0:05</Text>
      </TouchableOpacity>

      <View style={styles.ArrowWrap}>

      </View>
    </SafeAreaView>

  )
}

export default Vericode