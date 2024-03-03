import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Vector } from '../assets/images'
// import { backarrow } from '../assets/images'

const HeaderComponent = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Pressable>
                <Image source={Vector} />
            </Pressable>
        </View>
    )
}

export default HeaderComponent