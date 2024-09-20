// const express = require('express');
// const router = express.Router();
// const { createNotification, getNotifications } = require('../controllers/notificationController');
// const db = require('../config/db');

// // Route to create a notification
// router.post('/notifications', createNotification);

// // Route to get notifications for a specific user
// router.get('/notifications/:toUser', getNotifications);

// // POST route to save a notification
// router.post('/notifications', (req, res) => {
//     const { from_user, to_user, announcement } = req.body;
  
//     // Check if all fields are provided
//     if (!from_user || !to_user || !announcement) {
//       return res.status(400).json({ error: "All fields are required" });
//     }
  
//     // Insert the announcement into the database
//     const sql = `INSERT INTO notifications (from_user, to_user, announcement) VALUES (?, ?, ?)`;
//     db.query(sql, [from_user, to_user, announcement], (err, result) => {
//       if (err) {
//         console.error("Error inserting data:", err);
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.status(201).json({ message: "Notification saved successfully!" });
//     });
//   });
  

// module.exports = router;


const express = require('express');
const router = express.Router();
const db = require('../config/db');  // Import the database connection

// POST route to handle notifications
router.post('/notifications', (req, res) => {
  const { from, to, message } = req.body;

  // Check if all fields are present
  if (!from || !to || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Insert the notification data into the database
  const sql = `INSERT INTO notifications (from_user, to_user, announcement) VALUES (?, ?, ?)`;
  db.query(sql, [from, to, message], (err, result) => {
    if (err) {
      console.error("Error inserting notification:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Notification sent successfully!!!" });
  });
});

module.exports = router;
