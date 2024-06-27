// src/components/backend/HashPassword.js
// Used for hasing a password to insert in MySQL for first time user creation
// You can also use this in your SignUpForm backend to create the hashed password
// for DB insertion
const bcrypt = require('bcryptjs');

const password = 'Password1!';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});
