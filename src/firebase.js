import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.REACT_APP_FIREBASE_API_KEY,
  projectId: Constants.expoConfig.extra.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };