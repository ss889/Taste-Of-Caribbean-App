import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';

import AuthStack from './navigation/AuthStack';
import HomeScreen from './components/home/Home';
import LoginScreen from './pages/Login/Login';
import RegisterScreen from './pages/Register/Register';
import { AuthProvider } from './context/AuthContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

function LoadingScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); // Navigate to Home after 2 seconds
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/pictures/toc-logo.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Taste of Caribbean</Text>
      <Text style={styles.subtitle}>Your Caribbean Food Adventure Starts Here!</Text>
      <LottieView 
        source={require('./assets/animations/loading.json')} 
        autoPlay 
        loop 
        style={styles.lottie} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: 'gray' },
  lottie: { width: 100, height: 100, marginTop: 20 },
});

export default App;
