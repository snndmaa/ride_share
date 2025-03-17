import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import 'intl'
import 'intl/locale-data/jsonp/en'    //Remove Incase of Parenthesis Error

import { selectTravelTimeInformation } from '../../slices/navSlice'

const data = [
  {
    id: '123',
    title: 'MauxiX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn'
  },
  {
    id: '456',
    title: 'MauxiXL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8'
  },
  {
    id: '789',
    title: 'Mauxi Lux',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf'
  }
]

//This goes up when we have surge pricing
const SURGE_CHARGE_RATE = 1.2

const RideOptionsCard = () => {

  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const [price, setPrice] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  // console.log(travelTimeInformation)

  return (
    <SafeAreaView style={ tw`bg-white flex-grow` }>
      <View>
        <TouchableOpacity   //Touchable Opacity acts weird with display:absolute style on Android
          onPress={() => navigation.navigate('NavigateCard')}
          style={[ tw`absolute top-3 left-5 z-50 p-3 rounded-full`]}>
            <Icon name='chevron-left' type='fontawesome'/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>   
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (     //!!!!!!!!!
          <TouchableOpacity
            onPress={() => {
              setSelected(item)
              setPrice(parseFloat((travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier / 100) * 43).toFixed(2))
            }}
            style={ tw`flex-row justify-between items-center px-10
            ${id  === selected?.id && 'bg-gray-200'}` }
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'
              }}
              source={{ uri: image }}
            />
            <View style={ tw`ml-6` }>
              <Text style={ tw`text-xl font-semibold` }>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={ tw`text-xl text-green-800` }>

              {/* {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP'
              }).format(travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
              } */}
              {parseFloat((travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier / 100) * 43).toFixed(2)}Rs

            </Text>
          </TouchableOpacity>
        )}
      />  

      <View style={ tw`mt-auto border-t border-gray-200` }>
          <TouchableOpacity 
          disabled={!selected} 
          onPress={() => {navigation.navigate('FindDriverCard', {price})}}
          style={ tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}` }>
            <Text style={ tw`text-center text-white text-xl` }>Choose {selected?.title}</Text>
          </TouchableOpacity>
      </View>    
    </SafeAreaView>
  )
}

export default RideOptionsCard