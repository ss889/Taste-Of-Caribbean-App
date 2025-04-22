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
import styles from './Register.styles';
import BackButton from '../../components/Button/BackButton';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; // For check/cross icons

export default function RegisterScreen({ navigation }) {
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setUser } = useContext(AuthContext);

  const handleRegister = () => {
    if (!localUsername || !localPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (localPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (!isPasswordValid()) {
      Alert.alert('Error', 'Password does not meet all requirements.');
      return;
    }

    setUser({ username: localUsername, password: localPassword });
    Alert.alert('Registration Successful', `Welcome, ${localUsername}!`);
    navigation.replace('WelcomeScreen');
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={localUsername}
          onChangeText={setLocalUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={localPassword}
          onChangeText={setLocalPassword}
        />

        {/* Password Validation Checklist */}
        <View style={styles.validationContainer}>
          {renderValidationItem(isLengthValid, 'At least 6 characters')}
          {renderValidationItem(hasLetter, 'Contains a letter (A-Z or a-z)')}
          {renderValidationItem(hasNumber, 'Contains a number (0-9)')}
          {renderValidationItem(hasSpecialChar, 'Contains a special character')}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerWrapper}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Row */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIconButton} onPress={handleGoogleSignUp}>
            <AntDesign name="google" size={28} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIconButton} onPress={handleFacebookSignUp}>
            <FontAwesome name="facebook" size={28} color="#1877F2" />
          </TouchableOpacity>
        </View>

        {/* Login Redirect */}
        <View style={styles.signUpWrapper}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.signUpLink}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
