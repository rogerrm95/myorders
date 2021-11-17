const foodsJson = require('./foods.json');
var express = require('express');
var foods = express.Router();

foods.get('/', (req, res) => {
   res.json(foodsJson);
});

module.exports = foods;