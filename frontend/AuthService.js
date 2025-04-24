import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './src/services/firebaseConfig'; // Correct import path

/**
 * Logs in a user using Firebase authentication and sends the token to the backend.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    const response = await fetch('http://localhost:5000/api/auth', { // Update URL if needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to authenticate with backend');
    }

    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
