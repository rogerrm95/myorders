const express = require('express')
const cors = require('cors')
const app = express()

const header = '<h1>Hello World</h1>';

var orders = require('./routes/orders/oders.controller');
var foods = require('./routes/foods/foods.controller');
var users = require('./routes/users/users.controller');

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
   res.send(header);
});

app.use('/foods', foods);

app.use('/orders', orders);

app.use('/users', users);

app.listen(3001, () => {
   console.log('Aplicação ouvindo na porta 3001');
});
