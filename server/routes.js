const express          = require('express'),
      app              = express(),
      pg               = require('pg'),
      connectionString = 'postgres://localhost:5432/tunetrakr',
      bodyParser       = require('body-parser'),
      path             = require('path'),
      Tunes            = require('./pg.js');
    
var views = path.join(__dirname, '/../client/views');

// Middleware
app.use(bodyParser.json()); // allow middleware to accept json
//app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(path.join(views, 'index.html'));
})

app.post('/api/v1/tunes', (req, res) => {
  console.log(req.body);
  res.send('done');
//  const data = {artist: req.body.artist,
//                title: req.body.title,
//                instrument: req.body.instrument}
//
//  Tunes.post(data).then(function(data) {
//    console.log(data);
//  })
})

app.get('/api/v1/tunes', (req, res) => {
  Tunes.getAll().then((data) => {
    res.send(data);
  })
})

module.exports = app;
