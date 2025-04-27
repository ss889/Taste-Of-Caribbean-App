import admin from 'firebase-admin';
import dotenv from 'dotenv';
import { readFileSync } from 'fs'; // <--- ADD THIS

dotenv.config(); // Load environment variables

// Load the service account manually using fs
const serviceAccount = JSON.parse(
  readFileSync(new URL('./taste-of-the-caribbean-app-firebase-adminsdk-fbsvc-73b987d161.json', import.meta.url))
);

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
