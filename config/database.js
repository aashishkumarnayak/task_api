const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Connect to Task Database
        await mongoose.connect('mongodb://127.0.0.1:27017/Database', {
        });
        console.log('Connected to the Database');
   
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = connectDB;
