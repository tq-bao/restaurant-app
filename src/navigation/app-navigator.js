import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Next11</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
        name="Home" component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}