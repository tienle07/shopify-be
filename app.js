// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Import the MongoDB connection function
const connectToMongoDB = require('./src/dbs/init.mongodb');

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Start the server after connecting to MongoDB
connectToMongoDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
}).catch((err) => {
    console.log('Failed to start server:', err);
});
