const usersJson = require('./users.json');
var express = require('express');
var users = express.Router();

users.get('/', (req, res) => {
    res.json(usersJson);
});
users.post('/', (req, res) => {
    res.send('About birds');
});

module.exports = users;