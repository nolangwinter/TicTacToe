import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LeaderBoard from './screens/LeaderBoard';
import SettingsScreen from './screens/SettingsScreen';
import UserSelect from './screens/UserSelect';
import AboutScreen from './screens/AboutScreen';
import AddUser from './screens/AddUser';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Leader" component={LeaderBoard} options={{ headerShown: false }} />
              <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="User" component={UserSelect} options={{ headerShown: false }} />
              <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Add" component={AddUser} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  export default StackNavigator

const styles = StyleSheet.create({})
