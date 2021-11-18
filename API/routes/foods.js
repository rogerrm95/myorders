var express = require('express');
var foods = express.Router();

foods.get('/', (req, res) => {
    res.json(
    [
      {
         "id": 1,
         "name": "Lasanha ao Fugo - Frango",
         "description": "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
         "price": "34,90",
         "category": "Prato Principal",
         "isActive": true
      },
      {
         "id": 2,
         "name": "Suco Del Vale - Uva - 500ml",
         "description": "Suco de Lata",
         "price": "8,90",
         "category": "Bebidas",
         "isActive": true
      },
      {
         "id": 3,
         "name": "Sundae de Ovomaltine - Pequeno",
         "description": "Sundae Artesanal",
         "price": "12,50",
         "category": "Sobremesas",
         "isActive": true
      },
      {
         "id": 4,
         "name": "Founde de Chocolate - c/ Morangos ",
         "description": "Fondue",
         "price": "50,50",
         "category": "Sobremesas",
         "isActive": true
      },
      {
         "id": 5,
         "name": "Macarronada Italiana",
         "description": "Macarronada feita com toda tradição Italiana",
         "price": "25,80",
         "category": "Prato Principal",
         "isActive": false
      }
   ]);
});

// foods.post('/', (req, res) => {
//   res.send('About birds');
// });

module.exports = foods;