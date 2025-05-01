import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../src/services/firebaseConfig';
import { AuthContext } from '../../../context/AuthContext';
import Constants from 'expo-constants';
import styles from './Login.styles';
import BackButton from '../../../components/Button/BackButton';
import { FontAwesome } from '@expo/vector-icons'; // Facebook Icon
import { AntDesign } from '@expo/vector-icons'; // Google Icon

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      const response = await fetch(`${Constants.expoConfig.extra.API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
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
      setUser(userCredential.user);

      Alert.alert('Login Successful', 'Welcome back!');
    } catch (error) {
      console.error('Login error:', error);

      let displayMessage = 'An error occurred during login.';
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
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <BackButton onPress={() => navigation.goBack()} />
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
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.7}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.dividerWrapper}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialIconButton} onPress={handleGoogleSignUp}>
              <AntDesign name="google" size={28} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconButton} onPress={handleFacebookSignUp}>
              <FontAwesome name="facebook" size={28} color="#1877F2" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.signUpWrapper}
          >
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}