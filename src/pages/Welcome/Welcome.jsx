import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Image 
                    style={styles.image} 
                    source={require('../../assets/pictures/toc-logo.png')} 
                />
                <Text style={styles.title}>Welcome To Taste of Caribbean</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.button, styles.signupButton]}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate('HomeScreen')} // Using replace instead of navigate
                >
                    <Text style={styles.guestText}>Continue as Guest</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    centerContent: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },
    image: {
        width: width*0.8,
        height: height*0.2,
        resizeMode: 'contain',
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        padding: 15,
        borderRadius: 25,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#FF6B00',
    },
    signupButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FF6B00',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    signupButtonText: {
        color: '#FF6B00',
    },
    guestText: {
        color: '#FF6B00',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default WelcomeScreen;