
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const ButtonComponent = (props: any) => {
    const navigation = useNavigation()
    const { label = "Label", icon, onPress, containerStyle = { backgroundColor: colors.darkViolet, width: WIDTH * 0.85, height: HEIGHT * 0.072, borderRadius: WIDTH * 0.02 }, labelStyle = { color: colors.white } } = props;

    return (
        <Pressable style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', ...containerStyle }} onPress={onPress}>
            <Text style={{ alignSelf: 'center', fontSize: 16, ...labelStyle }}>{label}</Text>
            <Image source={icon} style={{ width: WIDTH * 0.0325, height: HEIGHT * 0.016, marginHorizontal: WIDTH * 0.03 }} />
        </Pressable>
    )
}

export default ButtonComponent