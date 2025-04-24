// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running and connected to the database.' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
