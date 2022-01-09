const express = require('express')
const cors = require('cors')
const app = express()

var orders = require('./routes/orders/oders.controller');
var foods = require('./routes/foods/foods.controller');
var users = require('./routes/users/users.controller');

app.use(cors());

app.use(express.json());

app.use('/foods', foods);

app.use('/orders', orders);

app.use('/users', users);

app.listen(3001, () => {
   console.log('Aplicação ouvindo na porta 3001');
});
