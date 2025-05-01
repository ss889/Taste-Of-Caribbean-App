import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constant/Colors'; // Corrected path

const { width, height } = Dimensions.get('window');

const CIRCLE_SIZE = width * 1.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F0',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backgroundCircle: {
        position: 'absolute',
        top: -height * 0.25,
        left: -(CIRCLE_SIZE - width) / 2,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#FFE5D0',
        zIndex: 0,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: height * 0.1,
        zIndex: 1,
    },
    image: {
        width: width * 0.75,
        height: height * 0.28,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 28, // slightly larger
        textAlign: 'center',
        color: '#D9763F',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    appName: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 40,
        textAlign: 'center',
        color: '#FF6B00',
        marginTop: 8,
        letterSpacing: 1,
        textShadowColor: 'rgba(0,0,0,0.15)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
    },
    subtitle: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
        color: '#8E8E93',
        textAlign: 'center',
        marginTop: 12,
        textShadowColor: 'rgba(0,0,0,0.05)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 24,
        marginBottom: 32,
        zIndex: 1,
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 28,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6B00',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    loginButton: {
        backgroundColor: '#FF6B00',
    },
    signupButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#FF6B00',
    },
    buttonText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: 'white',
    },
    signupButtonText: {
        fontFamily: 'Nunito_700Bold',
        color: '#FF6B00',
    },
});

export default styles;