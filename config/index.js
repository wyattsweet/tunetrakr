var express = require('express'),
    app     = express(),
    path    = require('path');

app.use(express.static(path.join(__dirname, '/../app/assets')));
app.use(express.static(path.join(__dirname, 'bower_components')));

var views = path.join(__dirname, '../app/views')

app.get('/', function (req, res) {
  res.sendFile(path.join(views, 'index.html'));
})

var port = 3000;

app.listen(port);

console.log('Listening on port ' + port);
