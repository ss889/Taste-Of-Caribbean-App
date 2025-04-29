import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';
import { AuthContext } from '../../../context/AuthContext';

export default function Logout({ navigation }) {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const performLogout = async () => {
      try {
        await signOut(auth); // 1. Sign out from Firebase
        setUser(null);       // 2. Clear user from context
        navigation.replace('WelcomeScreen'); // 3. Navigate to WelcomeScreen
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    performLogout();
  }, [navigation, setUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Logged Out Successfully</Text>
      <Text style={styles.subtitle}>See you next time!</Text>
      <ActivityIndicator size="large" color="#FF5733" style={styles.loader} />
      <Text style={styles.loadingText}>Redirecting to Welcome Screen...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d9534f',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  loader: {
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
});
