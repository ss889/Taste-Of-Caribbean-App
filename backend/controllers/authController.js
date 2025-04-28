import admin from '../utils/firebaseAdmin.js';
import { insertUser } from '../utils/dbConnector.js';

// Controller function to register a user
export const registerUser = async (req, res) => {
  console.log('✅ Request received at /api/auth');
  console.log('Request body:', req.body);

  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error('❌ Missing or invalid token');
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
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
};

// Controller function to login user (token verification)
export const loginUser = async (req, res) => {
  console.log('✅ Login request received at /api/login');

  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log('✅ User authenticated:', decodedToken.email);

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('❌ Error verifying login token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};
