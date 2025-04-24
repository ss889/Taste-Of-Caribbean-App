// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUp6Cu0BDHWfcqRhVSBD52zTWw-GIF8io",
  authDomain: "taste-of-the-caribbean-app.firebaseapp.com",
  projectId: "taste-of-the-caribbean-app",
  storageBucket: "taste-of-the-caribbean-app.firebasestorage.app",
  messagingSenderId: "113679678200",
  appId: "1:113679678200:web:7ba2c3005dc0237553590d",
  measurementId: "G-1V52Q24NCT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
