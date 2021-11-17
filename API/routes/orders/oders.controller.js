const fs = require('fs');
const ordersJson = require('./orders.json');
var express = require('express');
var orders = express.Router();

orders.get('/', (req, res) => {
    res.json(ordersJson);
});

orders.get('/:id', (req, res) => {
    res.json(
        {
            "items": [
                {
                    "food": "Macarronada Italiana",
                    "anotation": "",
                    "amount": 2,
                    "price": "25,80"
                },
                {
                    "food": "Founde de Chocolate - c/ Morangos ",
                    "anotation": "",
                    "amount": 1,
                    "price": "50,50"
                }
            ],
            "waiter": "Samanta Fernandes",
            "client": "Sergio Moralles",
            "desk": "6",
            "people": "2",
            "status": "done",
            "createdAt": "2021-11-07T23:23:49.720Z",
            "id": 3006
        }
    )
});

orders.post('/', (req, res) => {
    console.log(req.body);
    ordersJson.push(req.body);
    const jsonString = JSON.stringify(ordersJson);

    fs.writeFile('./routes/orders/orders.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
    res.status(200);
    res.json({"id": 3099});
});

module.exports = orders;