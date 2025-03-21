import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import Map from '../components/Map'
import NavigateCard from '../components/cards/NavigateCard'
import RideOptionsCard from '../components/cards/RideOptionsCard'
import FindDriverCard from '../components/cards/FindDriverCard'
import EnRouteCard from '../components/cards/EnRouteCard'


const MapScreen = () => {

  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()


  return (
    <View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={ tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg` }
      >

      </TouchableOpacity>

      <View style={ tw`h-1/2` }>
        <Map/>
      </View>

      <View style={ tw`h-1/2` }>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='FindDriverCard'
            component={FindDriverCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='EnRouteCard'
            component={EnRouteCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})