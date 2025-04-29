import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Auth/Welcome/Welcome'; // Updated path
import LoginScreen from '../screens/Auth/Login/Login'; // Updated path
import RegisterScreen from '../screens/Auth/Register/Register'; // Updated path
import MyAccountScreen from '../screens/Home/MyAccount/MyAccount'; // Updated path
import SuccessfulLogin from '../screens/Home/successfulLogin/SuccessfulLogin'; // Updated path
import Logout from '../screens/Auth/Logout/logout'; // Updated path

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
      <Stack.Screen name="SuccessfulLogin" component={SuccessfulLogin} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export default AuthStack;