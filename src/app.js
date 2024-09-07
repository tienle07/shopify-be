// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Import the MongoDB connection function
const connectToMongoDB = require('./dbs/init.mongodb');

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());

//Routes
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');

app.use("/api/user", userRoutes);
app.use(`/api/category`, categoryRoutes);
app.use(`/api/products`, productRoutes);

connectToMongoDB().catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
});

module.exports = app;