const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    from_user: { type: String, required: true },
    to_user: { type: String, required: true },
    announcement: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification', notificationSchema);
