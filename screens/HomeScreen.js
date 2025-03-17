import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'

import NavOptions from '../components/NavOptions'
import logo from '../assets/logo1.png'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'
import Logo from '../components/shared/Logo'

const HomeScreen = () => {

  const dispatch = useDispatch()
  try {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Logo fontSize={40}/>
  
          <GooglePlacesAutocomplete
            placeholder='Where From?'
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            onPress={(data, details = null) => {
              console.log(data)
              dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
              }))
  
              dispatch(setDestination(null))
  
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en'
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}  // Only after you stop typing for 0.4ms does action occur
          />
  
          <NavOptions/>
          <NavFavourites/>
        </View>
      </SafeAreaView>
    )
  } catch (error) {
    console.log(error)
  }

}

export default HomeScreen