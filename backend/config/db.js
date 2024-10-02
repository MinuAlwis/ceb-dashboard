// const mysql = require('mysql');
// require('dotenv').config(); // To load environment variables


// // Log the database configuration for debugging
// console.log('Database Configuration:', {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   });

// // Create a connection to the database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

  
// // Function to connect to the database
// function connectToDatabase() {
//     return new Promise((resolve, reject) => {
//         connection.connect((err) => {
//             if (err) {
//                 console.error('Error connecting to the database:', err);
//                 reject(err);
//             } else {
//                 console.log('Connected to the database');
//                 resolve();
//             }
//         });
//     });
// }

// module.exports = { connection, connectToDatabase };


// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Log the MongoDB configuration for debugging
console.log('MongoDB Configuration:', {
    uri: process.env.MONGO_URI
});

// Function to connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

module.exports = { connectToDatabase };
