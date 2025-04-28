import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home/Home";
import MyAccountScreen from '../screens/Home/MyAccount/MyAccount';
import RewardScreen from "../screens/Home/Reward/Reward";


const Stack = createNativeStackNavigator();

export default function HomeStack () {
    return ( 
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
            <Stack.Screen name="RewardScreen" component={RewardScreen} />
        </Stack.Navigator>
    );
}
