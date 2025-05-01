import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constant/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 32,
    color: Colors.primary,
    marginBottom: 32,
    textAlign: 'center',
    letterSpacing: 0.8,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    color: Colors.black,
    marginBottom: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  loginButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: Colors.white,
    fontSize: 18,
    letterSpacing: 0.5,
  },
  forgotPasswordButton: {
    marginTop: 16,
  },
  forgotPasswordText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    color: Colors.primaryLight,
    textAlign: 'center',
  },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    width: '100%',
  },
  dividerLine: {
    flex:1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 8,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    color: '#999',
  },
  // NEW
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    gap: 20, // If gap not supported, add marginHorizontal in button
  },
  socialIconButton: {
    width: 64, // Fixed width
    height: 64, // Fixed height
    backgroundColor: Colors.white,
    borderRadius: 32, // half of width/height to make it perfectly round
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 8, // safe fallback if gap doesn't work
  },  
  signUpWrapper: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    color: '#555',
  },
  signUpLink: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 15,
    color: Colors.primary,
  },
});

export default styles;