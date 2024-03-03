import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/Colors'
import { WIDTH } from '../constants/Dimension'
import TextInputComponent from '../components/TextInputComponent'

const LoginScreen = () => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <HeaderComponent />
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.lightblack }}>Welcome back! Glad to see you, Again!</Text>
                <TextInputComponent />
            </View>
        </View>
    )
}

export default LoginScreen