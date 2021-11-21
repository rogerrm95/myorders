const fs = require('fs');
const ordersJson = require('./orders.json');
var express = require('express');
var orders = express.Router();

function generateID(valueMax, listID) {
    const data = new Date()
    const month = data.getMonth() + 1
    const value = Math.random() * valueMax
    const id = `${month}${value.toFixed(0)}`.padEnd(5, "0")

    const isExists = listID.lenght > 0 ? listID.every(item => item.id === id && true) : false

    if (isExists) {
        generateID(valueMax, listID)
        return
    }

    return parseInt(id)
}

orders.get('/', (req, res) => {
    res.json(ordersJson);
});

orders.get('/:id', (req, res) => {
    const resp = fs.readFileSync('./routes/orders/orders.json', 'utf-8', err => {
        if (err) {
            console.log('Error reading file', err)
        } else {
            console.log('Successfully read file')
        }
    });

    const response = JSON.parse(resp);
    const result = response.find((item, i) => {
        if (item.id === Number(req.params.id)) {
            return item;
        }
    });

    res.status(200).json(result);
});

orders.post('/', (req, res) => {

    const id = generateID(500, ordersJson);

    const data = {
        ...req.body,
        id
    }

    ordersJson.push(data);
    const jsonString = JSON.stringify(ordersJson, null, 2);

    fs.writeFile('./routes/orders/orders.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });

    res.status(200).json({ "id": id });
});

orders.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    
    try {
        const isExist = ordersJson.find(order => order.id === id && true)

        if (!isExist) {
            return res.status(404).send('Usuário não encontrado')
        }

        const data = req.body

        const newList = ordersJson.map(order => {
            if (order.id === id) {
                return data
            } else {
                return order
            }
        })

        const jsonString = JSON.stringify(newList, null, 2);
        fs.writeFile('./routes/orders/orders.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        });

        res.status(200).send(data);

    } catch {
        res.status(500).send('Erro durante o processamento!')
    }
})

module.exports = orders;