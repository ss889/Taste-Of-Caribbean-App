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
import { AuthContext } from '../../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const { username, password, setUser } = useContext(AuthContext); // get setUser too

  const handleLogin = () => {
    if (username === inputUsername && password === inputPassword) {
      // Simulate successful login
      setUser({ username: inputUsername }); // triggers switch to HomeStack
    } else {
      Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={inputUsername}
        onChangeText={setInputUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={inputPassword}
        onChangeText={setInputPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}
      >
        <Text style={styles.goBackText}>← Go Back</Text>
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
  goBackButton: { marginTop: 20, alignSelf: 'center' },
  goBackText: { color: '#007bff', fontSize: 16 },
});
