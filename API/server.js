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

app.use('/orders', orders);

app.use('/users', users);

app.listen(3001, () => {
   console.log('Aplicação ouvindo na porta 3001');
});
