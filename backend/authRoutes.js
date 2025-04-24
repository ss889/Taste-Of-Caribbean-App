import express from 'express';
import admin from './firebaseAdmin.js'; // Use centralized Firebase Admin
import { insertUser } from './dbConnector.js';

const router = express.Router();

// Endpoint to verify Firebase token and store user data
router.post('/auth', async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, name, email } = decodedToken;

    const user = { id: uid, name, email };
    insertUser(user, (err) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'User authenticated and stored' });
    });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

export default router;
