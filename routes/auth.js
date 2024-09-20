const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db'); // Assuming you have a MySQL connection file
const { loginUser, logoutUser } = require('../controllers/authController');

// Check admin middleware
function checkAdmin(req, res, next) {
    if (req.session.user && req.session.user === 'admin') {
        return next(); // If logged in as admin, proceed
    }
    res.redirect('/login'); // If not, redirect to login
}

// Handle login form submission
router.post('/login', loginUser);

// Protected route for announcements (optional, for server-side validation)
router.post('/announcement', checkAdmin, (req, res) => {
    // Handle announcement logic here
    res.send('Announcement posted successfully.');
});

// Show login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login form submission
router.post('/login', loginUser);

// Handle logout
router.get('/logout', logoutUser);



module.exports = router;
