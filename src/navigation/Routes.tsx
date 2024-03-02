import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedScreen from '../screens/GetStartedScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='GetStartedScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='GetStartedScreen' component={GetStartedScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes