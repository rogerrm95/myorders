const fs = require('fs');
const ordersJson = require('./orders.json');
let _id_const = 1;
var express = require('express');
var orders = express.Router();

orders.get('/', (req, res) => {
    res.json(ordersJson);
});

orders.get('/:id', (req, res) => {
    var resp = fs.readFileSync('./routes/orders/orders.json', 'utf-8', err => {
        if (err) {
            console.log('Error reading file', err)
        } else {
            console.log('Successfully read file')
        }
    });
    var response = JSON.parse(resp);
    var result = response.find(function (item, i) {
        if (item.id === Number(req.params.id)) {
            index = i;
            return i;
        }
    });
    console.log(result);
    res.status(200);
    res.json(result);
});

orders.post('/', (req, res) => {
    req.body.id = _id_const;
    _id_const += 1;
    console.log(req.body);
    ordersJson.push(req.body);
    const jsonString = JSON.stringify(ordersJson, null, 2);

    fs.writeFile('./routes/orders/orders.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
    res.status(200);
    res.json({ "id": req.body.id });
});

module.exports = orders;