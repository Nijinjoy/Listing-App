import { View, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { WIDTH } from '../constants/Dimension'

const ButtonComponent = (props: any) => {
    const { label = "label", containerStyle = { backgroundColor: colors.green, width: WIDTH * 0.8, borderRadius: WIDTH * 0.06 }, onPress, labelStyle = { colors: colors.white } } = props
    return (
        <Pressable style={{ borderColor: colors.lightblack, padding: WIDTH * 0.04, justifyContent: "center", alignItems: "center", ...containerStyle }} onPress={onPress}>
            <Text style={{ ...labelStyle }}>{label}</Text>
        </Pressable>
    )
}

export default ButtonComponent
//325
//56