import React, { useState } from 'react';
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
import { auth } from '../../services/firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Authenticate with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      // Send token to backend for verification
      const response = await fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate with backend');
      }

      const data = await response.json();
      Alert.alert('Login Successful', `Welcome, ${data.message}`);
      navigation.replace('HomeScreen'); // Navigate to HomeScreen
    } catch (error) {
      Alert.alert('Login Failed', error.message);
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
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  registerLink: { marginTop: 20, alignSelf: 'center' },
  registerText: { color: '#007bff', fontSize: 16 },
});
