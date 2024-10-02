// const { connection } = require('../config/db');

// // Create a notification
// exports.createNotification = (req, res) => {
//     const { fromUser, toUser, message } = req.body;

//     if (!fromUser || !toUser || !message) {
//         return res.status(400).json({ success: false, message: 'All fields are required.' });
//     }

//     // Insert the notification into the database
//     db.query(
//         'INSERT INTO notifications (from_user, to_user, message) VALUES (?, ?, ?)',
//         [fromUser, toUser, message],
//         (err, result) => {
//             if (err) {
//                 console.error('Error inserting notification:', err);
//                 return res.status(500).json({ success: false, message: 'Database error' });
//             }
//             res.status(200).json({ success: true, message: 'Notification created successfully' });
//         }
//     );
// };

// // Get all notifications for a user
// exports.getNotifications = (req, res) => {
//     const toUser = req.params.toUser;

//     db.query(
//         'SELECT * FROM notifications WHERE to_user = ? ORDER BY created_at DESC',
//         [toUser],
//         (err, results) => {
//             if (err) {
//                 console.error('Error fetching notifications:', err);
//                 return res.status(500).json({ success: false, message: 'Database error' });
//             }
//             res.status(200).json({ success: true, notifications: results });
//         }
//     );
// };

// const { connection } = require('../config/db'); // Import the connection from db.js

// // Get all notifications for a user
// exports.getNotifications = (req, res) => {
//     const toUser = req.params.toUser;

//     connection.query(
//         'SELECT * FROM notifications WHERE to_user = ? ORDER BY created_at DESC',
//         [toUser],
//         (err, results) => {
//             if (err) {
//                 console.error('Error fetching notifications:', err);
//                 return res.status(500).json({ success: false, message: 'Database error' });
//             }
//             res.status(200).json({ success: true, notifications: results });
//         }
//     );
// };

const Notification = require('../models/Notification'); // Import the Notification model

// Get all notifications for a user
exports.getNotifications = async (req, res) => {
    const toUser = req.params.toUser;

    try {
        const notifications = await Notification.find({ to_user: toUser }).sort({ created_at: -1 });
        res.status(200).json({ success: true, notifications });
    } catch (err) {
        console.error('Error fetching notifications:', err);
        return res.status(500).json({ success: false, message: 'Database error' });
    }
};

// POST route to handle notifications
exports.createNotification = async (req, res) => {
    const { from, to, message } = req.body;

    if (!from || !to || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const notification = new Notification({ from_user: from, to_user: to, announcement: message });

    try {
        await notification.save();
        res.status(201).json({ message: "Notification sent successfully!" });
    } catch (err) {
        console.error("Error inserting notification:", err);
        return res.status(500).json({ error: "Database error" });
    }
};
