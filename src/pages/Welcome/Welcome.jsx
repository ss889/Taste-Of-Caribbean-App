import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from "./Welcome.styles";

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Background Circle */}
            <View style={styles.backgroundCircle} />

            <Animatable.View 
                animation="fadeInDown"
                duration={1200}
                style={styles.centerContent}
            >
                <Image 
                    style={styles.image} 
                    source={require('../../assets/pictures/toc-logo.png')} 
                />
                <Text style={styles.title}>Welcome To</Text>
                <Text style={styles.appName}>Taste of Caribbean</Text>
                <Text style={styles.subtitle}>Your Caribbean Food Adventure Starts Here!</Text>
            </Animatable.View>

            <Animatable.View 
                animation="fadeInUp"
                duration={1500}
                style={styles.buttonContainer}
            >
                <TouchableOpacity 
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.button, styles.signupButton]}
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default WelcomeScreen;
