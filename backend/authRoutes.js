import express from 'express';
import admin from './firebaseAdmin.js'; // Use centralized Firebase Admin
import { insertUser } from './dbConnector.js';

const router = express.Router();

// Endpoint to verify Firebase token and store user data
router.post('/auth', async (req, res) => {
  console.log('✅ Request received at /api/auth'); // Log to confirm request reached the endpoint
  console.log('Request body:', req.body); // Log the request body for debugging

  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error('❌ Missing or invalid token');
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token
  try {
    const decodedToken = await admin.auth().verifyIdToken(token); // Verify the token
    console.log('Decoded Firebase Token:', decodedToken);

    const { uid, email } = decodedToken;
    const { full_name, phone, password_hash } = req.body;

    const user = {
      id: uid,
      name: full_name,
      email,
      phone,
      passwordHash: password_hash,
      loyaltyPoints: 0,
    };

    // Insert user into the database
    insertUser(user, (err) => {
      if (err) {
        console.error('❌ Error inserting user:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      console.log(`✅ User registered successfully: ${user.email}`);
      res.status(200).json({ message: 'User authenticated and stored' });
    });
  } catch (error) {
    console.error('❌ Error verifying token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

export default router;
