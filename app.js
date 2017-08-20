var express = require('express'),
  app = express(),
  path = require('path'),
  routes = require('./server/routes.js');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

var port = 3000;

app.listen(port);

console.log('Listening on port ' + port);
