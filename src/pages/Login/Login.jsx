import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.styles';
import BackButton from '../../components/Button/BackButton';
import { FontAwesome } from '@expo/vector-icons'; // Facebook Icon
import { AntDesign } from '@expo/vector-icons'; // Google Icon

export default function LoginScreen({ navigation }) {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const { username, password, setUser } = useContext(AuthContext);

  const handleLogin = () => {
    if (username === inputUsername && password === inputPassword) {
      setUser({ username: inputUsername });
    } else {
      Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Future Implementation', 'Forgot Password feature coming soon!');
  };

  const handleGoogleSignUp = () => {
    Alert.alert('Future Implementation', 'Google Sign Up coming soon!');
  };

  const handleFacebookSignUp = () => {
    Alert.alert('Future Implementation', 'Facebook Sign Up coming soon!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Welcome Back</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={inputUsername}
          onChangeText={setInputUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={inputPassword}
          onChangeText={setInputPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.dividerWrapper}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Icons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIconButton} onPress={handleGoogleSignUp}>
            <AntDesign name="google" size={28} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIconButton} onPress={handleFacebookSignUp}>
            <FontAwesome name="facebook" size={28} color="#1877F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpWrapper}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
