// initMongoDB.js
const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Database Connection is ready...');
    } catch (error) {
        console.error('Database Connection Failed:', error);
        throw error;
    }
};

module.exports = connectToMongoDB;
