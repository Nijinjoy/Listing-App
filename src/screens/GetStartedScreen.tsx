import { View, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'

const GetStartedScreen = () => {
    const navigation = useNavigation()
    console.log("widthh==>", WIDTH * 0.75);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', marginHorizontal: WIDTH * 0.05 }}>
            <Text style={{ color: colors.lightblack, fontWeight: "700", fontSize: 35, width: WIDTH * 0.6, textAlign: "center" }}>Find Your Best Matches</Text>
            <Text style={{ color: colors.lightblack, fontSize: 14, fontWeight: "500", textAlign: "center", letterSpacing: 0.02, lineHeight: HEIGHT * 0.03, width: WIDTH * 0.7, marginTop: HEIGHT * 0.01 }}>Enjoy together, happy to share and save your time with transactions at home</Text>
            <View style={{ position: 'absolute', bottom: HEIGHT * 0.07, alignItems: "center" }}>
                <ButtonComponent
                    label="Get Started"
                    labelStyle={{ color: colors.black, fontWeight: 500, fontSize: 16 }}
                    onPress={() => navigation.navigate("LoginScreen")}
                />
                <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.01 }}>
                    <Text style={{ color: colors.grey, fontSize: 14, fontWeight: 500 }}>Dont have an account ?</Text>
                    <Pressable style={{}} onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={{ color: colors.lightblack, fontSize: 14, fontWeight: 500, marginHorizontal: WIDTH * 0.01 }}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GetStartedScreen

// font-family: Urbanist;
// font-size: 14px;
// font-weight: 500;
// line-height: 26px;
// letter-spacing: 0.02em;
// text-align: center;
