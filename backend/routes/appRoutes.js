import express from 'express';
import authRoutes from './authRoutes.js';  // <-- use import, not require

const router = express.Router();

router.use('/', authRoutes);  // <-- pass the imported router here

export default router;
