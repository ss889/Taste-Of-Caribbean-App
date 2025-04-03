import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../pages/Welcome/Welcome';
import LoginScreen from '../pages/Login/Login';
import RegisterScreen from '../pages/Register/Register';
import HomeScreen from '../pages/Home/Home';
import MyAccountScreen from '../pages/MyAccount/MyAccount';
import SuccessfulLogin from '../pages/successfulLogin/SuccessfulLogin';
import Logout from '../pages/Logout/logout';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
      <Stack.Screen name="SuccessfulLogin" component={SuccessfulLogin} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export default AuthStack;