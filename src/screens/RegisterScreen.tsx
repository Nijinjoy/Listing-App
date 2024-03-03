import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../components/HeaderComponent'
import ButtonComponent from '../components/ButtonComponent'
import ItemComponent from '../components/ItemComponent'
import { apple, fb, google } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import TextInputComponent from '../components/TextInputComponent'

const RegisterScreen = () => {
    const navigation = useNavigation()
    const renderTextInput = (placeholder, props = {}) => {
        return <TextInputComponent placeholder={placeholder} {...props} />;
    };

    const images = [
        fb, google, apple
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent />
            <View style={{ flex: 1, justifyContent: 'space-between', marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.1 }}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.lightblack, marginBottom: HEIGHT * 0.03 }}>Hello! Register to get started</Text>
                    {renderTextInput("Username")}
                    <View style={{ marginBottom: HEIGHT * 0.025 }} />
                    {renderTextInput("Email")}
                    <View style={{ marginBottom: HEIGHT * 0.025 }} />
                    {renderTextInput("Password")}
                    <View style={{ marginBottom: HEIGHT * 0.025 }} />
                    {renderTextInput("Confirm Pasword")}
                    <ButtonComponent
                        label="Register"
                        labelStyle={{ colors: colors.white }}
                        containerStyle={{ width: WIDTH * 0.9, backgroundColor: colors.black, borderRadius: WIDTH * 0.02, marginTop: HEIGHT * 0.04 }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                        <View style={{ flex: 1, height: HEIGHT * 0.002, backgroundColor: colors.lightgrey }} />
                        <Text style={{ color: colors.grey, marginHorizontal: 10 }}>Or Register With</Text>
                        <View style={{ flex: 1, height: HEIGHT * 0.002, backgroundColor: colors.lightgrey }} />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.04 }}>
                        {images.map((image, index) => (
                            <ItemComponent key={index} image={image} />
                        ))}
                    </View>

                </View>
                <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.05 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: colors.black, fontSize: 15, fontWeight: '500' }}>Already have an account ?</Text>
                        <Pressable>
                            <Text style={{ color: colors.black, fontWeight: '700', fontSize: 15 }}> Login Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen