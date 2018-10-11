const path = require('path');
const express = require('express');
const server = express();
const dbFunctions = require('./db/functions');
const jsFunctions = require('./db/jsfunction');
server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));

server.get('/hi', (req, res) => {
  res.send('hi');
});

server.post('/', (req, res) => {
  dbFunctions.getMotivation().then(data => {
    let randomQuote = jsFunctions.random_item(data);
    console.log(randomQuote);
    res.json(randomQuote.quote);
  });
});

module.exports = server;
