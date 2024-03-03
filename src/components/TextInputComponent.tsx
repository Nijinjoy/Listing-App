import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { eye } from '../assets/images'

const TextInputComponent = (props) => {
    const { placeholder, password } = props
    return (
        <View style={{ borderWidth: 1, borderColor: colors.lightgrey, flexDirection: 'row', alignItems: 'center', borderRadius: WIDTH * 0.02 }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.grey}
                style={{ flex: 1, marginHorizontal: WIDTH * 0.05 }}
                secureTextEntry={password}
            />
            {password && <Image source={eye} style={{ marginHorizontal: WIDTH * 0.05, width: WIDTH * 0.03, height: HEIGHT * 0.02 }} resizeMode='contain' />}
        </View>
    )
}

export default TextInputComponent;

