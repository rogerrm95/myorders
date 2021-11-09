const express = require('express')
const cors = require('cors')
const app = express()
var orders = require('./routes/oders')
var foods = require('./routes/foods')
var users = require('./routes/users')

app.use(cors());

app.get('/', (req, res) => {
   res.send('Hello World')
});

app.use('/foods', foods);

// app.get('/foods', (req, res) => {
//    res.json([
//       {
//          "id": 1,
//          "name": "Lasanha ao Fugo - Frango",
//          "description": "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
//          "price": "34,90",
//          "category": "Prato Principal",
//          "isActive": true
//       },
//       {
//          "id": 2,
//          "name": "Suco Del Vale - Uva - 500ml",
//          "description": "Suco de Lata",
//          "price": "8,90",
//          "category": "Bebidas",
//          "isActive": true
//       },
//       {
//          "id": 3,
//          "name": "Sundae de Ovomaltine - Pequeno",
//          "description": "Sundae Artesanal",
//          "price": "12,50",
//          "category": "Sobremesas",
//          "isActive": true
//       },
//       {
//          "id": 4,
//          "name": "Founde de Chocolate - c/ Morangos ",
//          "description": "Fondue",
//          "price": "50,50",
//          "category": "Sobremesas",
//          "isActive": true
//       },
//       {
//          "id": 5,
//          "name": "Macarronada Italiana",
//          "description": "Macarronada feita com toda tradição Italiana",
//          "price": "25,80",
//          "category": "Prato Principal",
//          "isActive": false
//       }
//    ]);
// });

app.use('/orders', orders);

// app.route('/orders')
// .get((req, res) => {
//    res.json(
//       {
//          "id": 3000,
//          "waiter": "José de Alencar",
//          "client": "Roger Marques",
//          "desk": 5,
//          "people": 1,
//          "status": "waiting",
//          "createdAt": "2021-11-02T16:33:11.069Z",
//          "finishedAt": null,
//          "items": [
//             {
//                "food": "Sorvete de Pote - Laranja",
//                "anotation": "",
//                "amount": 2,
//                "price": "96,00"
//             },
//             {
//                "food": "Sorvete de ameixa",
//                "anotation": "",
//                "amount": 1,
//                "price": "35,00"
//             }
//          ]
//       },
//       {
//          "items": [
//             {
//                "food": "Arroz doce",
//                "anotation": "",
//                "amount": 1,
//                "price": "20,00"
//             }
//          ],
//          "waiter": "José de Alencar",
//          "client": "Tulio Soares",
//          "desk": "5",
//          "people": "1",
//          "status": "waiting",
//          "createdAt": "2021-11-02T17:07:02.964Z",
//          "id": 3001
//       },
//       {
//          "items": [
//             {
//                "food": "Torta de Frango c/ Catupiry",
//                "anotation": "",
//                "amount": 1,
//                "price": "79,00"
//             }
//          ],
//          "waiter": "José de Alencar",
//          "client": "Roger",
//          "desk": "13",
//          "people": "2",
//          "status": "finished",
//          "createdAt": "2021-11-02T17:17:14.259Z",
//          "id": 3002,
//          "finishedAt": "2021-11-02T19:45:22.171Z"
//       },
//       {
//          "items": [
//             {
//                "food": "Lasanha de Peixe - Média",
//                "anotation": "",
//                "amount": 2,
//                "price": "89"
//             },
//             {
//                "food": "Suco de Beterraba",
//                "anotation": "sem açucar",
//                "amount": 1,
//                "price": "40"
//             },
//             {
//                "food": "Suco de maçã",
//                "anotation": "",
//                "amount": 1,
//                "price": "89"
//             },
//             {
//                "food": "Bolo de Pote - Brigadeiro",
//                "anotation": "",
//                "amount": 2,
//                "price": "15"
//             }
//          ],
//          "waiter": "Roger Marques",
//          "client": "Ester Meireles",
//          "desk": "02",
//          "people": "02",
//          "status": "done",
//          "createdAt": "2021-11-05T00:52:24.654Z",
//          "id": 3003
//       },
//       {
//          "items": [
//             {
//                "food": "Lasanha ao Fugo - Frango",
//                "anotation": "",
//                "amount": 2,
//                "price": "34,90"
//             },
//             {
//                "food": "Suco Del Vale - Uva - 500ml",
//                "anotation": "",
//                "amount": 2,
//                "price": "8,90"
//             }
//          ],
//          "waiter": "Samanta Fernandes",
//          "client": "Rogerio Marques",
//          "desk": "01",
//          "people": "2",
//          "status": "preparing",
//          "createdAt": "2021-11-07T19:55:16.594Z",
//          "id": 3004
//       },
//       {
//          "items": [
//             {
//                "food": "Lasanha ao Fugo - Frango",
//                "anotation": "",
//                "amount": 1,
//                "price": "34,90"
//             },
//             {
//                "food": "Suco Del Vale - Uva - 500ml",
//                "anotation": "sem açucar",
//                "amount": 3,
//                "price": "8,90"
//             },
//             {
//                "food": "Sundae de Ovomaltine - Pequeno",
//                "anotation": "",
//                "amount": 2,
//                "price": "12,50"
//             }
//          ],
//          "waiter": "José de Alencar Freitas",
//          "client": "Sarah",
//          "desk": "02",
//          "people": "3",
//          "status": "waiting",
//          "createdAt": "2021-11-07T20:17:58.970Z",
//          "id": 3005
//       },
//       {
//          "items": [
//             {
//                "food": "Macarronada Italiana",
//                "anotation": "",
//                "amount": 2,
//                "price": "25,80"
//             },
//             {
//                "food": "Founde de Chocolate - c/ Morangos ",
//                "anotation": "",
//                "amount": 1,
//                "price": "50,50"
//             }
//          ],
//          "waiter": "Samanta Fernandes",
//          "client": "Sergio Moralles",
//          "desk": "6",
//          "people": "2",
//          "status": "done",
//          "createdAt": "2021-11-07T23:23:49.720Z",
//          "id": 3006
//       }
//    );
// })
// .post((req, res) => {
//    console.log(req);
//    res.status(200);
//    res.send('OK');
// });

app.use('/users', users);

// app.get('/users', (req, res) => {
//    res.json(
//       [
//          {
//             "id": 1,
//             "name": "Roger",
//             "lastname": "Marques",
//             "birthday": "01/01/1995",
//             "phone": "44 99115-9900",
//             "email": "rogerrm@test.com.br",
//             "job": "Cozinheiro Jr",
//             "genre": "M",
//             "amountSales": 0
//          },
//          {
//             "id": 2,
//             "name": "Samanta",
//             "lastname": "Fernandes",
//             "birthday": "25/11/2002",
//             "phone": "11 92587-9910",
//             "email": "samanta@test.com.br",
//             "job": "Cozinheira Pl",
//             "genre": "F",
//             "amountSales": 0
//          },
//          {
//             "id": 3,
//             "name": "José",
//             "lastname": "de Alencar Freitas",
//             "birthday": "25/11/1990",
//             "phone": "11 99787-5910",
//             "email": "jose@test.com.br",
//             "job": "Garçon",
//             "genre": "G",
//             "amountSales": 120
//          }
//       ]
//    )
// });

app.listen(3001, () => {
   console.log('Aplicação ouvindo na porta 3001');
});
