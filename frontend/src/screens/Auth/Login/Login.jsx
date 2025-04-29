import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../src/services/firebaseConfig';
import { AuthContext } from '../../../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      // 1. Authenticate with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      // 2. Send token to backend for verification
      const response = await fetch('http://192.168.0.13:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        // Try to extract error message from backend
        let errorMessage = 'Failed to authenticate with backend';
        try {
          const errorData = await response.json();
          if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          console.error('Error parsing backend error response:', parseError);
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      // 3. Update Auth Context
      setUser(userCredential.user);

      Alert.alert('Login Successful', 'Welcome back!');
      // AppNav will handle redirection to HomeStack automatically
    } catch (error) {
      console.error('Login error:', error);

      let displayMessage = 'An error occurred during login.';

      // Show specific Firebase errors if available
      if (error.code === 'auth/user-not-found') {
        displayMessage = 'No user found with that email.';
      } else if (error.code === 'auth/wrong-password') {
        displayMessage = 'Incorrect password. Please try again.';
      } else if (error.code === 'auth/invalid-email') {
        displayMessage = 'Invalid email address format.';
      } else if (error.message) {
        displayMessage = error.message;
      }

      Alert.alert('Login Failed', displayMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
        style={styles.registerLink}
      >
        <Text style={styles.registerText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  registerLink: {
    marginTop: 20,
    alignSelf: 'center',
  },
  registerText: {
    color: '#007bff',
    fontSize: 16,
  },
});
