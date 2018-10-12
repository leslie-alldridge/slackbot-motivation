const path = require('path');
const express = require('express');
const apiRoutes = require('./routes/api');
const server = express();
const dbFunctions = require('./db/functions');
const jsFunctions = require('./db/jsfunction');

server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use('/api/v1', apiRoutes);

server.post('/', (req, res) => {
  dbFunctions.getMotivation().then(data => {
    let randomQuote = jsFunctions.random_item(data);
    res.json(randomQuote.quote);
  });
});

server.post('/motivate', (req, res) => {
  if (req.body.text == 'team') {
    dbFunctions.getTeamMotivation().then(data => {
      let randomQuote = jsFunctions.random_item(data);
      res.json(randomQuote.quote);
    });
  } else if (req.body.text == 'wellbeing') {
    dbFunctions.getWellbeingMotivation().then(data => {
      let randomQuote = jsFunctions.random_item(data);
      res.json(randomQuote.quote);
    });
  } else if (req.body.text == 'image') {
    dbFunctions.getImageMotivation().then(data => {
      let randomQuote = jsFunctions.random_item(data);
      res.json(randomQuote.quote);
    });
  } else {
    res.json('Please enter "team" or "wellbeing" for now, more coming soon!');
  }
});

server.post('/help', (req, res) => {
  let helpInfo =
    'Please enter /motivateme to get a motivational quote. This is private and no one else can see who uses this app, or the response it sends. This is currently in development. Please contact leslie.alldridge@xero.com with any feedback, questions or quotes.';
  res.json(helpInfo);
});

module.exports = server;
