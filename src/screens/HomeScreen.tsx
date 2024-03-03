import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { location, menu, message, plus } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { useNavigation } from '@react-navigation/native'
import colors from '../constants/Colors'
import SearchComponent from '../components/SearchComponent'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <HeaderComponent
                backArrow={menu}
                headerImage={location}
                HeaderTitle="Bangalore"
                rightIcon={message}
                onPress={() => navigation.goBack()}
                imageStyle={{ width: WIDTH * 0.06, height: HEIGHT * 0.03 }}
            />
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <SearchComponent />
                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={{ borderWidth: 0.5, width: WIDTH * 0.15, height: WIDTH * 0.15, borderRadius: WIDTH * 0.15, justifyContent: "center", alignItems: 'center', backgroundColor: colors.green }}>
                        <Image source={plus} />
                    </Pressable>
                </View>
                <Text style={{ color: colors.black, fontWeight: 500, fontSize: 16 }}>Timeline</Text>
            </View>
        </View>
    )
}

export default HomeScreen