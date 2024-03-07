import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { fb } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const ItemComponent = (props) => {
    const { image } = props
    return (
        <View style={{ borderWidth: 1, borderColor: `${colors.grey}25`, width: WIDTH * 0.28, alignItems: 'center', justifyContent: "center", padding: HEIGHT * 0.02, borderRadius: WIDTH * 0.02 }}>
            <Image source={image} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.03 }} resizeMode='contain' />
        </View>
    )
}

export default ItemComponent