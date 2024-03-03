import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Vector } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const HeaderComponent = (props) => {
    const { onPress, HeaderTitle, rightIcon } = props
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }}>
            <Pressable style={{ flex: 0.5 }} onPress={onPress}>
                <View style={{ borderColor: colors.lightgrey, borderWidth: 0.5, padding: WIDTH * 0.015, width: WIDTH * 0.08, borderRadius: WIDTH * 0.02, alignItems: 'center', justifyContent: "center" }}>
                    <Image source={Vector} style={{ width: WIDTH * 0.04 }} resizeMode='contain' />
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: colors.black }}>{HeaderTitle}</Text>
            </Pressable>
            <Pressable style={{ flex: 0.5, alignItems: "flex-end", justifyContent: "center" }}>
                <Image source={rightIcon} style={{ width: WIDTH * 0.03, height: HEIGHT * 0.03 }} resizeMode='contain' />
            </Pressable>
        </View>
    )
}

export default HeaderComponent;
