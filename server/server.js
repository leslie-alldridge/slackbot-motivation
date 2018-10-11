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

server.post('/motivate', (req, res) => {
  console.log(req);
  console.log(req.text);
});

server.post('/help', (req, res) => {
  let helpInfo =
    'Please enter /motivateme to get a motivational quote. This is private and no one else can see who uses this app, or the response it sends. This is currently in development. Please contact leslie.alldridge@xero.com with any feedback, questions or quotes.';
  res.json(helpInfo);
});

module.exports = server;
