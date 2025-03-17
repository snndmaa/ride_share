import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux' 
import { Icon } from 'react-native-elements'

import BackendService from '../../Services/Backend'
import { selectRide } from '../../slices/rideSlice'
import { arrayBufferToBase64 } from '../../util'
import profilePic from '../../assets/profile/user.png'
import Classic from '../buttons/Classic'

const EnRouteCard = () => {
  const navigation = useNavigation()
  const [driverProfile, setDriverProfile] = useState({})
  const ride = useSelector(selectRide)

  
  useEffect(() => {
    const getDriver = async() => {
      const token = await AsyncStorage.getItem('authToken')
      const response = await BackendService.getProfile(ride.driver, token)
      setDriverProfile(response)
    }

    getDriver()
  }, [driverProfile.id])

  return (
    <View style={styles.container}>
     <Text style={styles.titleText}>YOUR DRIVER IS EN ROUTE...</Text>
     <Image
       style={styles.profilePic}
       source={driverProfile.id ? {uri: `data:image/jpeg;base64,${arrayBufferToBase64(driverProfile.picture.data)}`} : profilePic}
      />
      <View style={styles.detailView}>
        <View style={styles.topDeetView}>
          <View style={styles.topleftDeetView}>
            <View style={styles.topLeftLeftDeetView}>
              <Text style={styles.nameText}>John Walker</Text>
              <Text style={styles.carText}>Tesla X</Text>
            </View>
            <View style={styles.topLeftRightDeetView}>
              <Icon
                name='star'
                type='antdesign'
                size={18}
                color={'blue'}
              />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <View style={styles.topRightDeetView}>
            <Text style={styles.licenceText}>NVXAFSD</Text>
          </View>
        </View>
        <View style={styles.bottomDeetView}>
          <View style={styles.bottomDirDeetView}>
            <Text style={styles.bottomDeetTitle}>COST</Text>
            <Text style={styles.bottomDeetText}>200.19Rs</Text>
          </View>
          <View style={styles.bottomDirDeetView}>
            <Text style={styles.bottomDeetTitle}>TRAVEL TIME</Text>
            <Text style={styles.bottomDeetText}>17 MINS</Text>
          </View>
        </View>
      </View>
      <Classic
        text='Cancel Ride'
        width='100%'
        height={45}
        margint={0}
        color='black'
        textcolor='white'
      />
    </View>
  )
}

export default EnRouteCard

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'black',
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 40,
    },
    profilePic: {
      // borderWidth: 4,
      // borderColor: 'green',
      borderRadius: 80,
      width: 160,
      height: 160,
      marginTop: 10,
    },
    detailView: {
      // borderWidth: 2,
      // borderColor: 'red',
      marginTop: 10,
      width: '80%',
      height: 150,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    topDeetView: {
      // borderWidth: 2,
      // borderColor: 'pink',
      height: '50%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topleftDeetView: {
      // borderWidth: 2,
      // borderColor: 'red',
      width: '70%',
      flexDirection: 'row',
    },
    topLeftLeftDeetView: {

    },
    nameText: {
      fontSize: 20,
      fontWeight: '600',
    },
    carText: {
      color: 'grey',
      fontSize: 17,
      fontWeight: '600',
    },
    topLeftRightDeetView: {
      // borderWidth: 2,
      // borderColor: 'pink',
      height: '50%',
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ratingText: {
      color: 'blue',
      fontSize: 17,
      fontWeight: '400',
    },
    topRightDeetView: {
      borderWidth: 2,
      borderColor: 'grey',
      justifyContent: 'center',
      alignContent: 'center',
      padding: 5,
    },
    licenceText: {
      fontSize: 15,
      fontWeight: '600',
    },
    bottomDeetView: {
      // borderWidth: 2,
      // borderColor: 'grey',
      flexDirection: 'row',
      // width: '80%',
      justifyContent: 'space-between',
    },
    bottomDirDeetView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomDeetTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    bottomDeetText: {
      marginLeft: 10,
      fontSize: 15,
      fontWeight: '500',
      color: 'grey',
    },
})