import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './Welcome.styles'; // Import styles from Welcome.styles.jsx

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundCircle} />
            <View style={styles.centerContent}>
                <Image 
                    style={styles.image} 
                    source={require('../../../assets/pictures/toc-logo.png')} 
                />
                <Text style={styles.title}>Welcome To</Text>
                <Text style={styles.appName}>Taste of Caribbean</Text>
                <Text style={styles.subtitle}>Your Caribbean Food Adventure Starts Here!</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('LoginScreen')} // Navigate to Login
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.button, styles.signupButton]}
                    onPress={() => navigation.navigate('RegisterScreen')} // Navigate to Register
                >
                    <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomeScreen;