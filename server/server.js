const path = require('path');
const express = require('express');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, './public')));

server.get('/hi', (req, res) => {
  res.send('hi');
});

server.post('/', (req, res) => {
  console.log(req);
  res.json('hello');
});

module.exports = server;
