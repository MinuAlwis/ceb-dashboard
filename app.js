const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const { connectToDatabase } = require('./config/db');
const notificationRoutes = require('./routes/notification');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Make sure you have 'index.html' in the 'public' folder
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use(authRoutes);
app.use(notificationRoutes);

// Wait for DB connection before starting the server
connectToDatabase()
    .then(() => {
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1); // Exit if DB connection fails
    });