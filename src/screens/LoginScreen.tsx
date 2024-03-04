import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import ItemComponent from '../components/ItemComponent'
import { Vector, apple, fb, google } from '../assets/images'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
    const renderTextInput = (placeholder, props = {}) => {
        return <TextInputComponent placeholder={placeholder} {...props} />;
    };

    const images = [
        fb, google, apple
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightgrey }}>
            <HeaderComponent
                imageStyle={{ width: WIDTH * 0.03, height: HEIGHT * 0.02 }}
                backArrow={Vector}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1, justifyContent: 'space-between', marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.1 }}>
                <View style={{ marginTop: HEIGHT * 0.0 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.lightblack, marginBottom: HEIGHT * 0.05 }}>Welcome back! Glad to see you, Again!</Text>
                    {renderTextInput("Enter your email")}
                    <View style={{ marginBottom: HEIGHT * 0.025 }} />
                    {renderTextInput("Enter your password", { password: true })}
                    <Text style={{ color: colors.grey, textAlign: "right", fontSize: 14, fontWeight: "600", lineHeight: HEIGHT * 0.05 }}>Forgot Password?</Text>
                    <ButtonComponent
                        label="Login"
                        labelStyle={{ colors: colors.white, fontWeight: 700 }}
                        containerStyle={{ width: WIDTH * 0.9, backgroundColor: colors.black, borderRadius: WIDTH * 0.02, marginTop: HEIGHT * 0.04 }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                        <View style={{ flex: 1, height: HEIGHT * 0.0015, backgroundColor: colors.lightgrey }} />
                        <Text style={{ color: colors.grey, marginHorizontal: 10 }}>Or Login With</Text>
                        <View style={{ flex: 1, height: HEIGHT * 0.0015, backgroundColor: colors.lightgrey }} />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.04 }}>
                        {images.map((image, index) => (
                            <ItemComponent key={index} image={image} />
                        ))}
                    </View>

                </View>
                <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.05 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: colors.black, fontSize: 15, fontWeight: '500' }}>Don't have an account ?</Text>
                        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={{ color: colors.black, fontWeight: '700', fontSize: 15 }}> Register Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;

