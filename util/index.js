import { Dimensions } from "react-native"
import { encode } from 'base-64'
import * as Location from "expo-location"


export const EMULATOR_URL = '10.0.2.2:5000/v1'

export const BASE_URL = '192.168.100.212:5000/v1'

export const deviceSafeHeight = Dimensions.get('window').height

export const deviceSafeWidth = Dimensions.get('window').width

export function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return encode(binary)
}

export function getCurrentLocation() {
    const timeout = 10000;
    return new Promise(async (resolve, reject) => {
      setTimeout(() => { reject(new Error(`Error getting gps location after ${(timeout * 2) / 1000} s`)) }, timeout * 2);
      setTimeout(async () => { resolve(await Location.getLastKnownPositionAsync()) }, timeout);
      resolve(await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000}));
    });
}
