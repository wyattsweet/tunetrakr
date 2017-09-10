const express = require('express'),
  app = express(),
  pg = require('pg'),
  connectionString = 'postgres://localhost:5432/tunetrakr',
  bodyParser = require('body-parser'),
  path = require('path'),
  Tunes = require('./pg.js');

var views = path.join(__dirname, '/..');

// Middleware
app.use(bodyParser.json()); // allow middleware to accept json
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
})

app.get('/', function(req, res) {
  res.sendFile(path.join(views, 'index.html'));
});

// Get all tunes
app.get('/api/v1/tunes', (req, res) => {
  Tunes.getAll().then(data => {
    res.send(data);
  });
});

// Post a tune
app.post('/api/v1/tunes', (req, res) => {
  const data = {
    artist: req.body.artist,
    title: req.body.title,
    instrument: req.body.instrument
  };

  Tunes.post(data).then(function(data) {
    res.send(data);
  });
});

// Delete a tune
app.delete('/api/v1/tunes/:id', (req, res) => {
  debugger;
  const tuneId = req.params.id;
  Tunes.deleteTune(tuneId).then(function(data) {
    console.log(data);
    res.send(data);
  });
});

module.exports = app;
