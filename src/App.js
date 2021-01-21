import React from 'react'
import { View, Text, LogBox } from 'react-native'
import AppNavigator from './navigation/app-navigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import Loading from './components/main/loading';
import store from './redux/store'

LogBox.ignoreAllLogs(true)
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Loading />
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  )
}