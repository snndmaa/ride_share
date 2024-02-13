import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import EmailInput from '../components/signup/screens/EmailInput'
import NumberInput from '../components/signup/screens/NumberInput'
import Vericode from '../components/signup/screens/Vericode'
import PasswordInput from '../components/signup/screens/PasswordInput'
import NameInput from '../components/signup/screens/NameInput'

const Stack = createStackNavigator()

const Signup = () => {

  return (
    // <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen 
         name='emailScreen' 
         component={EmailInput}
         options={{
          headerShown: false,
         }}
        />

        <Stack.Screen 
         name='numberScreen' 
         component={NumberInput}
         options={{
          headerShown: false,
         }}
        />
        
        <Stack.Screen 
         name='Vericode' 
         component={Vericode}
         options={{
          headerShown: false,
         }}
        />

        <Stack.Screen 
         name='passwordScreen' 
         component={PasswordInput}
         options={{
          headerShown: false,
         }}
        />

        <Stack.Screen 
         name='nameScreen' 
         component={NameInput}
         options={{
          headerShown: false,
         }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default Signup