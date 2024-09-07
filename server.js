// server.js
const app = require('./src/app');
require('dotenv/config');

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
