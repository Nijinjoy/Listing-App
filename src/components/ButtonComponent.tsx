import { View, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { WIDTH } from '../constants/Dimension'

const ButtonComponent = (props: any) => {
    const { label = "label", containerStyle = { backgroundColor: colors.green, width: WIDTH * 0.8, borderRadius: WIDTH * 0.06 }, onPress } = props
    return (
        <Pressable style={{ borderColor: colors.lightblack, padding: WIDTH * 0.03, justifyContent: "center", alignItems: "center", ...containerStyle }} onPress={onPress}>
            <Text style={{ color: colors.lightblack }}>{label}</Text>
        </Pressable>
    )
}

export default ButtonComponent
//325
//56