import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPD9aOi7WH6ZjB7nRQzU5u7FNzlIqLHE0",
  projectId: "toc-menu-data",
  storageBucket: "toc-menu-data.firebasestorage.app",
  messagingSenderId: "1034732460799",
  appId: "1:1034732460799:android:27f2c5c35e75e163614aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with region
const db = getFirestore(app);

export { db };