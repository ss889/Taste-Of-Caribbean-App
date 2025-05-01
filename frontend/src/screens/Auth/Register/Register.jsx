import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../../src/services/firebaseConfig';
import * as Crypto from 'expo-crypto';
import Constants from 'expo-constants';
import styles from './Register.styles';
import BackButton from '../../../components/Button/BackButton';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; // For check/cross icons
import { MaterialIcons } from '@expo/vector-icons'; // For eye icon

export default function RegisterScreen({ navigation }) {
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localUsername)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    if (localPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return false;
    }

    if (!isPasswordValid()) {
      Alert.alert('Error', 'Password does not meet all requirements.');
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
        const passwordHash = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          localPassword
        );

        const userCredential = await createUserWithEmailAndPassword(auth, localUsername, localPassword);
        const user = userCredential.user;

        const idToken = await user.getIdToken();

        const response = await fetch(`${Constants.expoConfig.extra.API_URL}/api/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            email: user.email,
            uid: user.uid,
            full_name: fullName,
            phone: phone,
            password_hash: passwordHash,
          }),
        });

        const data = await response.json();
        console.log('Backend response data:', data);

        if (response.ok) {
          Alert.alert('Registration Successful', `Welcome, ${user.email}!`);
          await signOut(auth);
          navigation.replace('WelcomeScreen');
        } else {
          await signOut(auth);
          Alert.alert('Error', data.error || 'Failed to store user information.');
        }
      } catch (error) {
        console.error('Registration error:', error);
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    }
  };

  const handleGoogleSignUp = () => {
    Alert.alert('Future Implementation', 'Google Sign Up coming soon!');
  };

  const handleFacebookSignUp = () => {
    Alert.alert('Future Implementation', 'Facebook Sign Up coming soon!');
  };

  // Password validation checks
  const isLengthValid = localPassword.length >= 6;
  const hasNumber = /\d/.test(localPassword);
  const hasLetter = /[a-zA-Z]/.test(localPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(localPassword);

  const isPasswordValid = () => {
    return isLengthValid && hasNumber && hasLetter && hasSpecialChar;
  };

  const renderValidationItem = (isValid, label) => (
    <View style={styles.validationItem}>
      <Ionicons
        name={isValid ? 'checkmark-circle' : 'close-circle'}
        size={18}
        color={isValid ? 'green' : 'red'}
        style={{ marginRight: 6 }}
      />
      <Text style={styles.validationText}>{label}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Create Account</Text>
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
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={localPassword}
              onChangeText={setLocalPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <MaterialIcons
                name={passwordVisible ? 'visibility' : 'visibility-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.validationContainer}>
            {renderValidationItem(isLengthValid, 'At least 6 characters')}
            {renderValidationItem(hasLetter, 'Contains a letter (A-Z or a-z)')}
            {renderValidationItem(hasNumber, 'Contains a number (0-9)')}
            {renderValidationItem(hasSpecialChar, 'Contains a special character')}
          </View>
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <MaterialIcons
                name={confirmPasswordVisible ? 'visibility' : 'visibility-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister} activeOpacity={0.7}>
            <Text style={styles.registerButtonText}>Sign Up</Text>
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
          <View style={styles.signUpWrapper}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.signUpLink}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}