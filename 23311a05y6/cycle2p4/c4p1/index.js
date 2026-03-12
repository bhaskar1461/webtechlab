const express = require('express');
const app = express();

const router = require('./router');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use router for API routes
app.use('/api', router);

// Start server
app.listen(3001, () => {
    console.log("Server started on port 3001");
});