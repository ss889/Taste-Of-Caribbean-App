import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const CIRCLE_SIZE = width * 1.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F0', // Soft warm background
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backgroundCircle: {
        position: 'absolute',
        top: -height * 0.25, // push it a little higher
        left: -(CIRCLE_SIZE - width) / 2,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#FFE5D0', // Very soft light orange-pink
        zIndex: 0,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // better horizontal balance
        paddingTop: height * 0.1, // push content slightly down
        zIndex: 1,
    },
    image: {
        width: width * 0.75,
        height: height * 0.28,
        resizeMode: 'contain',
        marginBottom: 20, // slightly bigger gap after image
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FF8140', // Softer orange for "Welcome To"
    },
    appName: {
        fontSize: 32,
        fontWeight: '800',
        textAlign: 'center',
        color: '#FF6B00', // Main orange for "Taste of Caribbean"
        marginTop: 6,
    },
    subtitle: {
        fontSize: 16,
        color: '#6D6A75',
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 24,
        marginBottom: 32, // slightly more breathing space at bottom
        zIndex: 1,
    },
    button: {
        paddingVertical: 16, // more touchable padding
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
        backgroundColor: '#FF6B00', // Keep main color for login
    },
    signupButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#FF6B00',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    signupButtonText: {
        color: '#FF6B00',
    },
});

export default styles;
