import { View, Text, TextInput } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { WIDTH } from '../constants/Dimension'

const TextInputComponent = () => {
    return (
        <View style={{ borderWidth: 1, borderColor: colors.lightblack }}>
            <TextInput
                placeholder='Enter your email'
                placeholderTextColor={colors.lightblack}
                style={{ marginHorizontal: WIDTH * 0.05 }}
            />
        </View>
    )
}

export default TextInputComponent