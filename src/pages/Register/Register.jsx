import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const { setUser } = useContext(AuthContext); // Use setUser from context

  const handleRegister = () => {
    if (localUsername && localPassword) {
      setUser({ username: localUsername, password: localPassword }); // Set full user object
      Alert.alert('Registration Successful', `Welcome, ${localUsername}!`);
      navigation.replace('WelcomeScreen'); // Navigate to Welcome screen
    } else {
      Alert.alert('Error', 'Please fill in both fields to register.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
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
