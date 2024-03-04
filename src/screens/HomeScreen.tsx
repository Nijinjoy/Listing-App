import React from 'react';
import { View, Image, Pressable, FlatList, Text } from 'react-native';
import { location, menu, message, more, plus, profileicon } from '../assets/images';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/Colors';
import SearchComponent from '../components/SearchComponent';
import HeaderComponent from '../components/HeaderComponent';

const HomeScreen = () => {
    const navigation = useNavigation();

    const users = [
        { id: 1, name: 'User 1', imageUrl: profileicon },
        { id: 2, name: 'User 2', imageUrl: profileicon },
        { id: 3, name: 'User 3', imageUrl: profileicon },
        { id: 4, name: 'User 4', imageUrl: profileicon },
        { id: 4, name: 'User 4', imageUrl: profileicon },
        { id: 4, name: 'User 4', imageUrl: profileicon },
    ];

    const renderUserItem = ({ item }) => (
        <View style={{ marginHorizontal: WIDTH * 0.015 }}>
            <Image source={item.imageUrl} style={{ width: WIDTH * 0.15, height: WIDTH * 0.15, borderRadius: WIDTH * 0.15 }} />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent
                backArrow={menu}
                headerImage={location}
                HeaderTitle="Bangalore"
                rightIcon={message}
                onPress={() => navigation.goBack()}
                imageStyle={{ width: WIDTH * 0.06, height: HEIGHT * 0.03 }}
            />
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <View style={{ marginTop: HEIGHT * 0.05 }}>
                    <SearchComponent />
                </View>
                <FlatList
                    data={[{ id: 'plus', imageUrl: plus }, ...users]} // Added plus icon at the beginning of the list
                    horizontal
                    contentContainerStyle={{ marginTop: HEIGHT * 0.04 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        if (item.id === 'plus') {
                            return (
                                <Pressable style={{ marginHorizontal: WIDTH * 0.02, width: WIDTH * 0.15, height: WIDTH * 0.15, borderRadius: WIDTH * 0.15, justifyContent: "center", alignItems: 'center', backgroundColor: colors.green }}>
                                    <Image source={item.imageUrl} style={{ width: WIDTH * 0.05, height: 20 }} resizeMode='contain' />
                                </Pressable>
                            );
                        } else {
                            return renderUserItem({ item });
                        }
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <Text style={{ color: colors.black, marginHorizontal: WIDTH * 0.0, fontSize: 16, fontWeight: 500, marginTop: HEIGHT * 0.03 }}>Timeline</Text>
                <View style={{ borderWidth: 1, borderRadius: WIDTH * 0.02, marginTop: HEIGHT * 0.03 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Image source={profileicon} />
                        <View style={{ marginHorizontal: WIDTH * 0.03, flex: 0.9 }}>
                            <Text style={{ color: colors.black }}>Sharath Mathew</Text>
                            <Text style={{ color: colors.black }}>Bangalore,Karnataka</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Image source={more} style={{ width: WIDTH * 0.07, height: HEIGHT * 0.04 }} />
                        </View>
                    </View>
                    <View style={{ height: HEIGHT * 0.25, backgroundColor: colors.green }}>

                    </View>
                </View>
            </View>
        </View >
    );
}

export default HomeScreen;

