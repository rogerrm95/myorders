var express = require('express');
var orders = express.Router();

orders.get('/', (req, res) => {
    res.json(
        [
            {
                "id": 3000,
                "waiter": "José de Alencar",
                "client": "Roger Marques",
                "desk": 5,
                "people": 1,
                "status": "waiting",
                "createdAt": "2021-11-02T16:33:11.069Z",
                "finishedAt": null,
                "items": [
                    {
                        "food": "Sorvete de Pote - Laranja",
                        "anotation": "",
                        "amount": 2,
                        "price": "96,00"
                    },
                    {
                        "food": "Sorvete de ameixa",
                        "anotation": "",
                        "amount": 1,
                        "price": "35,00"
                    }
                ]
            },
            {
                "items": [
                    {
                        "food": "Arroz doce",
                        "anotation": "",
                        "amount": 1,
                        "price": "20,00"
                    }
                ],
                "waiter": "José de Alencar",
                "client": "Tulio Soares",
                "desk": "5",
                "people": "1",
                "status": "waiting",
                "createdAt": "2021-11-02T17:07:02.964Z",
                "id": 3001
            },
            {
                "items": [
                    {
                        "food": "Torta de Frango c/ Catupiry",
                        "anotation": "",
                        "amount": 1,
                        "price": "79,00"
                    }
                ],
                "waiter": "José de Alencar",
                "client": "Roger",
                "desk": "13",
                "people": "2",
                "status": "finished",
                "createdAt": "2021-11-02T17:17:14.259Z",
                "id": 3002,
                "finishedAt": "2021-11-02T19:45:22.171Z"
            },
            {
                "items": [
                    {
                        "food": "Lasanha de Peixe - Média",
                        "anotation": "",
                        "amount": 2,
                        "price": "89"
                    },
                    {
                        "food": "Suco de Beterraba",
                        "anotation": "sem açucar",
                        "amount": 1,
                        "price": "40"
                    },
                    {
                        "food": "Suco de maçã",
                        "anotation": "",
                        "amount": 1,
                        "price": "89"
                    },
                    {
                        "food": "Bolo de Pote - Brigadeiro",
                        "anotation": "",
                        "amount": 2,
                        "price": "15"
                    }
                ],
                "waiter": "Roger Marques",
                "client": "Ester Meireles",
                "desk": "02",
                "people": "02",
                "status": "done",
                "createdAt": "2021-11-05T00:52:24.654Z",
                "id": 3003
            },
            {
                "items": [
                    {
                        "food": "Lasanha ao Fugo - Frango",
                        "anotation": "",
                        "amount": 2,
                        "price": "34,90"
                    },
                    {
                        "food": "Suco Del Vale - Uva - 500ml",
                        "anotation": "",
                        "amount": 2,
                        "price": "8,90"
                    }
                ],
                "waiter": "Samanta Fernandes",
                "client": "Rogerio Marques",
                "desk": "01",
                "people": "2",
                "status": "preparing",
                "createdAt": "2021-11-07T19:55:16.594Z",
                "id": 3004
            },
            {
                "items": [
                    {
                        "food": "Lasanha ao Fugo - Frango",
                        "anotation": "",
                        "amount": 1,
                        "price": "34,90"
                    },
                    {
                        "food": "Suco Del Vale - Uva - 500ml",
                        "anotation": "sem açucar",
                        "amount": 3,
                        "price": "8,90"
                    },
                    {
                        "food": "Sundae de Ovomaltine - Pequeno",
                        "anotation": "",
                        "amount": 2,
                        "price": "12,50"
                    }
                ],
                "waiter": "José de Alencar Freitas",
                "client": "Sarah",
                "desk": "02",
                "people": "3",
                "status": "waiting",
                "createdAt": "2021-11-07T20:17:58.970Z",
                "id": 3005
            },
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
        ]
    );
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
    res.send('About birds');
});

module.exports = orders;