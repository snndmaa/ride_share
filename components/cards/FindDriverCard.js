import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { BlurView } from 'expo-blur';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setRide } from '../../slices/rideSlice';
import { useNavigation } from '@react-navigation/native'

import loader2 from '../../assets/loader2.gif';
import { selectDestination, selectOrigin, setTravelTimeInformation, selectTravelTimeInformation } from '../../slices/navSlice';
import { BASE_URL } from '../../util'


const FindDriverCard = ({ route }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { price } = route.params
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const details = useSelector(selectTravelTimeInformation)
  const ws = useRef(null)

  useEffect(() => {
    const connectWebSocket = async () => {
      try {
        const user = await AsyncStorage.getItem('userID')
        if (user) {
          ws.current = new WebSocket(`ws://${BASE_URL}/user`)

          ws.current.onopen = () => {
            console.log('ride socket connected')
            const requestMessage = {
              type: 'request',
              user,
              origin,
              destination,
              details,
              price
            };
            ws.current.send(JSON.stringify(requestMessage))
          };

          ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            if (message.type === 'accepted' && message.user === user) {
              dispatch(setRide({
                user,
                driver: message.driver,
                origin,
                destination,
                details,
                price,
              }))
              navigation.navigate('EnRouteCard')
            } else if (message.type === 'declined') {

            }
          };

          ws.current.onerror = (error) => {
            console.error('WebSocket error:', error.message)
            // Additional error handling logic
          };

          ws.current.onclose = (event) => {
            console.log('WebSocket connection closed:', event.code, event.reason);
            // Additional logic on connection close
          };
        } else {
          console.error('User ID not found in AsyncStorage.')
        }
      } catch (error) {
        console.error('Error retrieving user ID:', error)
      }

      return () => {
        // Cleanup the WebSocket connection when the component unmounts
        if (ws.current) {
          ws.current.close()
        }
      }
    }

    connectWebSocket();
  }, [origin, destination, details])

  return (
    <BlurView intensity={100} tint="light" style={styles.container}>
      <Text style={styles.title}>Finding Drivers</Text>
      <Image style={styles.loader2} source={loader2} />
    </BlurView>
  );
};

export default FindDriverCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    zIndex: 50,
  },
  loader2: {
    flex: 1,
    zIndex: -1,
  },
})
