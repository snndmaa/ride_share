import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from '@env'
import webSocketService from '../Services/Websocket'

import { selectDestination, selectOrigin, setTravelTimeInformation, setDestination, selectTravelTimeInformation } from '../slices/navSlice'
import carMarker from '../assets/markers/red_car.png'


const Map = () => {
  useDispatch(setDestination(null))
  const [drivers, setDrivers] = useState([]);
  console.log(drivers)
    useEffect(() => {
    if (true) {
      webSocketService.connect();
  
      webSocketService.receiveMessage(handleMessage);
        
      return () => {
        webSocketService.close()
      };

    }
  }, [])
  if (useSelector(selectDestination) && webSocketService.status) {
    webSocketService.close()
  }

  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  console.log(origin)
const tti = useSelector(selectTravelTimeInformation)
  const mapRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {

    if(!origin || !destination) return

    // Zoom & Fit page to Markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{    // From google sdk
      edgePadding: {top:50, right: 50, bottom:50, left: 50}
    })
  }, [origin, destination])

  useEffect(() => {
    
    if(!origin || !destination) return
    
    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=
      ${destination.description}&key=${GOOGLE_MAPS_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      })
      .catch(e => console.log('error: ', e))

    }
    getTravelTime()

  }, [origin, destination, GOOGLE_MAPS_API_KEY])

  const handleMessage = (message) => {
    // console.log(message)
    if (message.type === 'location') {
      const updatedDrivers = [...drivers]
        const existingDriverIndex = updatedDrivers.findIndex((driver) => driver.id === message.driver)

          if (existingDriverIndex !== -1) {
            // Update existing driver
            updatedDrivers[existingDriverIndex] = {
              id: message.driver,
              coords: message.coords,
            }
          } else {
            // Add new driver
            updatedDrivers.push({
              id: message.driver,
              coords: message.coords,
            })
          }

          // Update state with the modified array
          setDrivers(updatedDrivers)
      }
  }

  return (
    <MapView
      ref={mapRef}
      style={ tw`flex-1` }
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
        { origin && destination && (
            <MapViewDirections
              origin={origin.description}
              destination={destination.description}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeWidth={3}
              strokeColor='black'
              />
        )}

        { origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng
              }}
              title='Origin'
              description={origin.description}
              identifier='origin'
            />
        )}

        { destination?.location && (
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng
              }}
              title='Origin'
              description={destination.description}
              identifier='destination'
            />
        )}

        { drivers.map((driver, i) => {
          return (
          <Marker
            key={i}
            coordinate={{
              latitude: driver.coords.latitude,
              longitude: driver.coords.longitude,
            }}
            title="Your Location"
          >
            {/* <Text>You</Text> */}
            <Image
              source={carMarker}
            />
          </Marker>
          )
        })}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})