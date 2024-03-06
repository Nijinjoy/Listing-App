import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { location, message, profileicon } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import BottomtabComponent from '../components/BottomtabComponent'
import LinearGradient from 'react-native-linear-gradient'
import ButtonComponent from '../components/ButtonComponent'

const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient colors={['#ffffff', '#E5FFE3']} style={{ flex: 1 }}>
            <HeaderComponent
                navigate={() => navigation.navigate('ProfileScreen')}
                rightIcon={message}
                onPress={() => navigation.goBack()}
                imageStyle={{ width: WIDTH * 0.06, height: HEIGHT * 0.03 }}
            />
            <View style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: WIDTH * 0.05 }}>
                <View>
                    <Image source={profileicon} style={{ width: WIDTH * 0.2, height: WIDTH * 0.2 }} resizeMode='contain' />
                </View>
                <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                    <Text style={{ color: colors.black, fontSize: 18, fontWeight: 500 }}>Sara Mathew</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={location} />
                        <Text style={{ color: colors.black, fontSize: 14, lineHeight: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.01 }}>Bangalore,India</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', borderColor: colors.black, marginHorizontal: WIDTH * 0.1, marginTop: HEIGHT * 0.03 }}>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ fontSize: 18, color: colors.black, fontWeight: 'bold' }}>1513 </Text>
                    <Text style={{ fontSize: 14, color: colors.black }}>Posts</Text>
                </View>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ fontSize: 18, color: colors.black, fontWeight: 'bold' }}>1513 </Text>
                    <Text style={{ fontSize: 14, color: colors.black }}>Followers</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, color: colors.black, fontWeight: 'bold' }}>1513 </Text>
                    <Text style={{ fontSize: 14, color: colors.black }}>Followers</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.05 }}>
                <ButtonComponent
                    label="Message"
                    labelStyle={{ color: colors.black }}
                    containerStyle={{ width: WIDTH * 0.5, backgroundColor: colors.green, borderRadius: WIDTH * 0.1 }}
                />
                <ButtonComponent
                    label="Message"
                    labelStyle={{ color: colors.black }}
                    containerStyle={{ width: WIDTH * 0.35, backgroundColor: colors.white, borderRadius: WIDTH * 0.1, borderColor: colors.lightgrey, borderWidth: 0.5, marginHorizontal: WIDTH * 0.02 }}
                />
            </View>

            <View style={{ position: "absolute", width: WIDTH, bottom: 0, height: HEIGHT * 0.1 }}>
                <BottomtabComponent />
            </View>
        </LinearGradient>
    )
}

export default ProfileScreen