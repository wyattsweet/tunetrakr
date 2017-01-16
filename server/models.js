// run this file to create Postgres database tables

var pg               = require('pg'),
    connectionString = 'postgres://localhost:5432/tunetrakr',
    client           = new pg.Client(connectionString);

client.connect();
var query = client.query("CREATE TABLE tunes(id init NOT NULL, artist VARCHAR(40) NOT NULL, title VARCHAR(40) NOT NULL)")
