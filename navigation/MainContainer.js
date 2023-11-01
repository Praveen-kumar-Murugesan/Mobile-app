import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import MainCanteen from './screens/MainCanteen';
import ITCanteen from './screens/ITCanteen';
import MBACanteen from './screens/MBACanteen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names
const homeName = "Home";
const mainCanteenName = "Main Canteen";
const itCanteenName = "IT Canteen";
const mbaCanteenName = "MBA Canteen";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === mainCanteenName) {
                        iconName = focused ? 'restaurant' : 'restaurant-outline';
                    } else if (rn === itCanteenName) {
                        iconName = focused ? 'restaurant' : 'restaurant-outline';
                    } else if (rn === mbaCanteenName) {
                        iconName = focused ? 'restaurant' : 'restaurant-outline';
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { paddingBottom:10, fontSize: 10 },
                tabBarStyle: {
                    height: 60,  // Adjust the height as needed
                    backgroundColor: 'white',  // Change to your desired gradient color
                    borderTopLeftRadius: 20,  // Round the top corners
                    borderTopRightRadius: 20,
                },
            })}>

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={mainCanteenName} component={MainCanteen} />
            <Tab.Screen name={itCanteenName} component={ITCanteen} />
            <Tab.Screen name={mbaCanteenName} component={MBACanteen} />
            <Tab.Screen name={settingsName} component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default MainContainer;
