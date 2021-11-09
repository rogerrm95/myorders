var express = require('express');
var users = express.Router();

users.get('/', (req, res) => {
    res.json(
        [
            {
                "id": 1,
                "name": "Roger",
                "lastname": "Marques",
                "birthday": "01/01/1995",
                "phone": "44 99115-9900",
                "email": "rogerrm@test.com.br",
                "job": "Cozinheiro Jr",
                "genre": "M",
                "amountSales": 0
            },
            {
                "id": 2,
                "name": "Samanta",
                "lastname": "Fernandes",
                "birthday": "25/11/2002",
                "phone": "11 92587-9910",
                "email": "samanta@test.com.br",
                "job": "Cozinheira Pl",
                "genre": "F",
                "amountSales": 0
            },
            {
                "id": 3,
                "name": "José",
                "lastname": "de Alencar Freitas",
                "birthday": "25/11/1990",
                "phone": "11 99787-5910",
                "email": "jose@test.com.br",
                "job": "Garçon",
                "genre": "G",
                "amountSales": 120
            }
        ]
    )
});
users.post('/', (req, res) => {
    res.send('About birds');
});

module.exports = users;