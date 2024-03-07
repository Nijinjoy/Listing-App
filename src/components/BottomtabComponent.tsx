import React from 'react';
import {
    Alert,
    Animated,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';
import { location, cart, heart, profile, plus, home, profileicon } from '../assets/images'; // Assuming you have these images
import colors from '../constants/Colors';

const Screen1 = () => {
    return <View style={styles.screen1} />;
};

const Screen2 = () => {
    return <View style={styles.screen2} />;
};

const Screen3 = () => {
    return <View style={styles.screen3} />;
};

const Screen4 = () => {
    return <View style={styles.screen4} />;
};

export default function App() {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';

        switch (routeName) {
            case 'title1':
                icon = home;
                break;
            case 'title2':
                icon = cart;
                break;
            case 'title3':
                icon = heart;
                break;
            case 'title4':
                icon = profileicon;
                break;
        }

        return (
            <Image source={icon} style={styles.icon} />
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBarExpo.Navigator
            type="DOWN"
            style={styles.bottomBar}
            shadowStyle={styles.shadow}
            height={55}
            circleWidth={50}
            bgColor={colors.black}
            initialRouteName="title1"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircleUp}>
                    <Image source={plus} style={styles.icon} />
                </Animated.View>
            )}
            tabBar={renderTabBar}
        >
            <CurvedBottomBarExpo.Screen
                name="title1"
                position="LEFT"
                component={Screen1}
            />
            <CurvedBottomBarExpo.Screen
                name="title2"
                position="LEFT"
                component={Screen2}
            />
            <CurvedBottomBarExpo.Screen
                name="title3"
                position="RIGHT"
                component={Screen3}
            />
            <CurvedBottomBarExpo.Screen
                name="title4"
                position="RIGHT"
                component={Screen4}
            />
        </CurvedBottomBarExpo.Navigator>

    );
}

const styles = StyleSheet.create({
    bottomBar: {},
    shadow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    }
});




