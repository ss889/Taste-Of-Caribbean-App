import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image } from 'react-native';
import HomeScreen from './components/home/Home';
import LottieView from 'lottie-react-native';
import LoginScreen from './pages/Login/Login';
import RegisterScreen from './pages/Register/Register';
import { AuthProvider } from './context/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 150, // Fixed width for better consistency
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  lottie: {
    width: 120,
    height: 120,
  },
});

