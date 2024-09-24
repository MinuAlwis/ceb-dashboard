const express = require('express');
const router = express.Router();

// Hardcoded admin credentials
const adminUsername = 'admin';
const adminPassword = '1234';

// POST route for login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match the admin credentials
  if (username === adminUsername && password === adminPassword) {
    // Login success - redirect to menu modal
    return res.status(200).json({ success: true, message: 'Login successful', isAdmin: true });
  } else {
    // Login failed - don't show menu modal
    return res.status(403).json({ success: false, message: 'Invalid credentials', isAdmin: false });
  }
});

module.exports = router;
