import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/loader/Loader'
import AuthLanding from './screens/AuthLanding'
import Login from './screens/Login'
import Signup from './screens/Signup'

import { store } from './store'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const Stack = createNativeStackNavigator()
  
  const checkLoginToken = async () => {
    const token = await AsyncStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  };

  checkLoginToken();

  

  return (

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            style={{ flex:1 }}
            keyboardVerticalOffset={ Platform.OS === 'ios' ? -64 : 0 }
          >
            <Stack.Navigator initialRouteName={isAuthenticated ? 'HomeScreen' : 'AuthLanding'}>
              <Stack.Screen
                name='AuthLanding'
                component={AuthLanding}
                options={{headerShown: false}}
              />
              <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name='MapScreen' 
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name='Signup' 
                component={Signup}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name='Login' 
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
