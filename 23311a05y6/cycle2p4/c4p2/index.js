const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

const router = require('./route/bookRoute');

// All routes start with /books
app.use('/books', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});