const bcrypt = require('bcryptjs');
const db = require('../config/db'); // MySQL connection
const User = require('../models/User');

// Handle user login
exports.loginUser = (req, res) => {
    const { username, password } = req.body;

    // Hardcoded credentials for the admin
    const adminUsername = 'admin';
    const adminPassword = '1234';

    // Check if the entered username and password match the admin credentials
    if (username === adminUsername && password === adminPassword) {
        // Store the admin session (simplified for now)
        req.session.user = username;

        // Redirect back to index.html where the modals are handled with JavaScript
        return res.status(200).json({ success: true, message: "Login successful" });
    } else {
        return res.status(401).json({success: false, message: "Invalid credentials. Only admin can log in."});
    }

    // if (!username || !password) {
    //     return res.status(400).send('Please enter both username and password');
    // }

    // db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    //     if (err) throw err;

    //     if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
    //         return res.status(401).send('Invalid username or password');
    //     }

    //     // Save session (simplified)
    //     req.session.user = results[0];
    //     res.redirect('/dashboard'); // Redirect after successful login
    // });
};

// Handle logout
exports.logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};
