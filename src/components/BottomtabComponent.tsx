import { View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { cart, heart, home, homefocussed, profilefocussed, search } from '../assets/images';
import LoginScreen from '../screens/LoginScreen';
import WishlistScreen from './WishlistScreen';
import ProfileScreen from '../screens/ProfileScreen'; // Import ProfileScreen
import colors from '../constants/Colors';
import { HEIGHT, WIDTH } from '../constants/Dimension';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const onPressTab = (routeName) => {
        navigation.navigate(routeName);
    };

    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'black', width: WIDTH, height: HEIGHT * 0.02, flex: 1 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        onPressTab(route.name); // Call onPressTab to navigate
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName;
                if (route.name === 'Home') {
                    iconName = isFocused ? homefocussed : home;
                } else if (route.name === 'Cart') {
                    iconName = isFocused ? cart : cart;
                } else if (route.name === 'Heart') {
                    iconName = isFocused ? heart : heart;
                } else if (route.name === 'Profile') {
                    iconName = isFocused ? profilefocussed : profilefocussed;
                }

                return (
                    <Pressable
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Image source={iconName} style={{ width: 24, height: 24 }} tintColor={colors.white} />
                    </Pressable>
                );
            })}
        </View>
    );
};

const BottomtabComponent = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={WishlistScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={WishlistScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Heart" component={WishlistScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomtabComponent;

