// frontend/AuthService.js or inside context/AuthContext.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './src/services/firebaseConfig';

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};
