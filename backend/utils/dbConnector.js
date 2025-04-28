// db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load env vars from .env file

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err.message);
    process.exit(1); // Exit if connection fails
  }
  console.log('✅ Connected to MySQL database.');
});

/**
 * Inserts a new user into the database.
 * @param {Object} user - The user object containing id, name, email, passwordHash, phone, and loyaltyPoints.
 * @param {Function} callback - Callback function to handle the result.
 */
export const insertUser = (user, callback) => {
  const query = `
    INSERT INTO users (user_id, email, password_hash, full_name, phone, loyalty_points, created_at)
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;

  // Log the query and parameters for debugging
  console.log('Executing query:', query);
  console.log('With parameters:', [
    user.id,
    user.email,
    user.passwordHash,
    user.name,
    user.phone,
    user.loyaltyPoints || 0,
  ]);

  db.query(
    query,
    [user.id, user.email, user.passwordHash, user.name, user.phone, user.loyaltyPoints || 0],
    (err, results) => {
      if (err) {
        console.error('❌ Error executing query:', err.message);
      } else {
        console.log('✅ Query executed successfully:', results);
      }
      callback(err, results);
    }
  );
};

export default db;
