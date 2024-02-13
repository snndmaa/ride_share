import { View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Icon } from 'react-native-elements'
import PhoneInput from 'react-native-phone-input'
import Toast from 'react-native-toast-message'

import { emailScreenStyles as styles } from '../../../styles/signup/emailScreenStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setPhoneNumber } from '../../../slices/signupSlice'
import Classic from '../../buttons/Classic'
import BottomNav from '../BottomNav'

import BackendService from '../../../Services/Backend'

const NumberInput = () => {

    const navigation = useNavigation()
    const dispatch   = useDispatch()
    const phoneRef = React.useRef(null)
    
    const { phoneNumber } = useSelector(state => state.signup) 

    const handleNumberChange = (text) => {
        dispatch(setPhoneNumber(text))
    }

    const handleLeftPress = () => {
        navigation.navigate('emailScreen')
    }

    const handleRightPress = () => {
        // navigation.navigate('Vericode')
    }

    const onVerify = async () => {
        if (phoneNumber) {
            const payload = {
                phoneNumber
            }
            console.log(phoneNumber)
            const response = await BackendService.sendSMS(payload)
            console.log(response)
            if (response.status === 'success') {
                navigation.navigate('Vericode')
            }
            else {
                Toast.show({
                    type: 'error',
                    text1: 'SMS Failed!',
                    position: 'top',
                    topOffset: 10
                })
                navigation.navigate('Vericode')
            }
        }
        else {
            Toast.show({
                type: 'error',
                text1: 'Enter a valid number',
                position: 'top',
                topOffset: 10
            })
        }
        navigation.navigate('Vericode')
    }

    return (
        <SafeAreaView style={styles.Container}>
            <Toast/>
            <Text style={styles.HeadText}>Enter your phone number</Text>
    
    
            <View style={styles.emailWrap}>
              <PhoneInput
                ref={phoneRef}
                initialCountry={'MU'}
                initialValue='+230'
                allowZeroAfterCountryCode={true}
                offset={15}
                onChangePhoneNumber={handleNumberChange}
                textProps={{ placeholder: 'Enter a phone number...' }}
                style={{
                    height: 38,
                    borderRadius: 4,
                    width: '90%',
                }}
                flagStyle={{
                    
                    }} 
                textStyle={{
                    height: 38,
                    fontSize: 17,
                    color: '#708090',
                    }}
              />
    
              <Icon
                name='phone'
                type='entypo'
                style={{}}
                size={24}
                onPress={() => {}}
              />
            </View>

            <Classic
                text='Verify Number'
                width={'90%'} 
                height={52}
                radiusBorder={8}
                margint={20} 
                color='#4169E1' 
                textcolor='#FFFFFF' 
                handleOnPress={onVerify}
            />

            <BottomNav
             handleLeftPress={handleLeftPress}
             handleRightPress={handleRightPress}
            />
        </SafeAreaView>
    )

}

export default NumberInput