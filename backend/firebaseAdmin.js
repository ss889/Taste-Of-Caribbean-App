import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

export default admin;
