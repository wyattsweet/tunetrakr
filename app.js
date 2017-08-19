var express = require('express'),
    app     = express(),
    path    = require('path'),
    routes  = require('./server/routes.js');

app.use(express.static(path.join(__dirname, '/app/assets')));

var views = path.join(__dirname, '/app/views')

app.use('/', routes);

var port = 3000;

app.listen(port);

console.log('Listening on port ' + port);
