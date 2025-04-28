import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';
import * as Crypto from 'expo-crypto'; // Import expo-crypto for password hashing

export default function RegisterScreen({ navigation }) {
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localUsername)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(localPassword)) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 6 characters long and include:\n- At least one uppercase letter\n- At least one lowercase letter\n- At least one number\n- At least one special character (@, $, !, %, *, ?, &).'
      );
      return false;
    }

    if (!fullName.trim()) {
      Alert.alert('Invalid Name', 'Please enter your full name.');
      return false;
    }
    if (!phone.trim()) {
      Alert.alert('Invalid Phone', 'Please enter your phone number.');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    console.log('handleRegister function triggered');
    if (validateInputs()) {
      try {
        // Step 1: Hash the password using expo-crypto
        const passwordHash = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          localPassword
        );

        // Step 2: Create the user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, localUsername, localPassword);
        const user = userCredential.user;

        // Step 3: Get the Firebase ID token
        const idToken = await user.getIdToken();

        console.log('Sending data to backend:', {
          email: user.email,
          uid: user.uid,
          full_name: fullName,
          phone: phone,
          password_hash: passwordHash,
        });

        // Step 4: Send user data to backend with Authorization header
        const response = await fetch('http://192.168.0.13:5000/api/auth', { // <<-- your IP here
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`, // <<-- important
          },
          body: JSON.stringify({
            email: user.email,
            uid: user.uid,
            full_name: fullName,
            phone: phone,
            password_hash: passwordHash,
          }),
        });

        console.log('Backend response:', response);
        const data = await response.json();
        console.log('Backend response data:', data);

        if (response.ok) {
          Alert.alert('Registration Successful', `Welcome, ${user.email}!`);
          navigation.replace('WelcomeScreen');
        } else {
          Alert.alert('Error', data.error || 'Failed to store user information.');
        }
      } catch (error) {
        console.error('Registration error:', error);
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
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
