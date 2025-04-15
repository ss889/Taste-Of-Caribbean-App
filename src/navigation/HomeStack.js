import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../pages/Home/Home";
import MyAccountScreen from '../pages/MyAccount/MyAccount';


const Stack = createNativeStackNavigator();

export default function HomeStack () {
    return ( 
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
        </Stack.Navigator>
    );
}
