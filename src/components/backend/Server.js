// src/components/backend/Server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Cors allows different domains (ports) to communicate e.g. React app on localhost:3001 
// to communicate with Server.js on localhost:5000. By default the Webserver (express) will
// block communication from not same origin unless cors is included
const cors = require('cors');

const app = express();
const port = 5001;

const SECRET_KEY = "___YOUR_SECRET_KEY1!___";

app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  host: '127.0.0.1',
  user: 'admin',
  password: 'Password1!',
  database: 'agnisamoohdb',
};

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// if browsing to this file from a browser then display welcome message e.g;
// node Server.js
// http://localhost:5001/
app.get('/', (req, res) => {
  res.send('Welcome to the login server. Use the /login endpoint to log in.');
});

// Listens for LoginForm.js
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username, userId: user.userID }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Listens for SignUpForm.js
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [existingUser] = await connection.execute('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

    if (existingUser.length > 0) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.execute('INSERT INTO users (username, email, password, subscriptions, notes) VALUES (?, ?, ?, ?, ?)', [username, email, hashedPassword, '', '']);

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Listens for AccountForm.js
app.post('/update-account', authenticateToken, async (req, res) => {
  const { username, email, password } = req.body;
  const userId = req.user.userId;

  try {
    const connection = await mysql.createConnection(dbConfig);
    let updateQuery = 'UPDATE users SET ';
    const updateData = [];

    if (username) {
      updateQuery += 'username = ?, ';
      updateData.push(username);
    }

    if (email) {
      updateQuery += 'email = ?, ';
      updateData.push(email);
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateQuery += 'password = ?, ';
      updateData.push(hashedPassword);
    }

    updateQuery = updateQuery.slice(0, -2); // Remove trailing comma
    updateQuery += ' WHERE userID = ?';
    updateData.push(userId);

    await connection.execute(updateQuery, updateData);

    res.json({ message: 'Account details updated successfully' });
  } catch (error) {
    console.error('Error during account update:', error);
    res.status(500).json({ error: 'Failed to update account data' });
  }
});

// Listens for AccountForm.js
app.get('/get-account-details', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT username, email, onMailingList FROM users WHERE userID = ?', [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userDetails = rows[0];
    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching account details:', error);
    res.status(500).json({ error: 'Failed to fetch account details' });
  }
});

// Listens for SubscribeMailingListButton.js
app.put('/subscribe-mailing-list', authenticateToken, async (req, res) => {
  const userId = req.user.userId; // Ensure correct casing here (userId instead of userID)

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('UPDATE users SET onMailingList = 1 WHERE userID = ?', [userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found or already subscribed' });
    }

    return res.status(200).json({ message: 'Successfully subscribed to mailing list' });
  } catch (error) {
    console.error('Subscribe mailing list error:', error);
    return res.status(500).json({ error: 'Failed to subscribe to mailing list' });
  }
});

// Listens for UnsubscribeMailingList.js
app.put('/unsubscribe-mailing-list', authenticateToken, async (req, res) => {
  const userId = req.user.userId; // Ensure correct casing here (userId instead of userID)

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('UPDATE users SET onMailingList = 0 WHERE userID = ?', [userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found or already unsubscribed' });
    }

    return res.status(200).json({ message: 'Successfully unsubscribed from mailing list' });
  } catch (error) {
    console.error('Unsubscribe mailing list error:', error);
    return res.status(500).json({ error: 'Failed to unsubscribe from mailing list' });
  }
});

// Listens for DeleteAccountButton.js
app.delete('/delete-account', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('DELETE FROM users WHERE userID = ?', [userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Delete account error:', error);
    res.status(500).json({ error: 'Failed to delete account' });
  }
});

// Listens for LogoutButton.js
app.delete('/logout', authenticateToken, async (req, res) => {
  // No need to access any specific user information since it's handled by JWT
  try {
    // Implement any necessary cleanup logic here (if needed)
    // Typically, clearing any server-side session or cache
    // For JWT, logging out is simply ensuring the client discards the token
    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ error: 'Failed to logout' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
