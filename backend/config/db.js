const mysql = require('mysql');
require('dotenv').config(); // To load environment variables


// Log the database configuration for debugging
console.log('Database Configuration:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

  
// Function to connect to the database
function connectToDatabase() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err);
                reject(err);
            } else {
                console.log('Connected to the database');
                resolve();
            }
        });
    });
}

module.exports = { connection, connectToDatabase };
