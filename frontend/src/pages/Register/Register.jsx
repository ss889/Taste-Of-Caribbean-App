import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig'; // Import Firebase auth

export default function RegisterScreen({ navigation }) {
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  const validateInputs = () => {
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localUsername)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    // Check if password meets minimum requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(localPassword)) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 6 characters long and include:\n- At least one uppercase letter\n- At least one lowercase letter\n- At least one number\n- At least one special character (@, $, !, %, *, ?, &).'
      );
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (validateInputs()) {
      try {
        // Use Firebase to create a new user
        const userCredential = await createUserWithEmailAndPassword(auth, localUsername, localPassword);
        const user = userCredential.user;

        // Send user data to the backend to store in MySQL
        const response = await fetch('http://localhost:5000/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            uid: user.uid, // Firebase UID
          }),
        });

        const data = await response.json();

        if (response.ok) {
          Alert.alert('Registration Successful', `Welcome, ${user.email}!`);
          navigation.replace('WelcomeScreen'); // Navigate to Welcome screen
        } else {
          Alert.alert('Error', data.error || 'Failed to store user information.');
        }
      } catch (error) {
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={localUsername}
        onChangeText={setLocalUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={localPassword}
        onChangeText={setLocalPassword}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});