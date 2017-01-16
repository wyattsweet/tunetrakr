var express = require('express'),
    app     = express(),
    path    = require('path');
    
var views = path.join(__dirname, '/../client/views');

app.get('/', function (req, res) {
  res.sendFile(path.join(views, 'index.html'));
})

module.exports = app;
