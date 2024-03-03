import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { location, menu, message } from '../assets/images'
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
                <Text style={{ color: colors.black, fontWeight: 500, fontSize: 16 }}>Timeline</Text>
            </View>
        </View>
    )
}

export default HomeScreen