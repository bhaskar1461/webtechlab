const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).send("Hello, World! In GET");
});

route.post('/', (req, res) => {
    res.status(201).send("Hello, World! In POST");
});

module.exports = route;