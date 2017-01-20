// run this file to create Postgres database tables

var pg               = require('pg'),
    connectionString = 'postgres://localhost:5432/tunetrakr',
    client           = new pg.Client(connectionString);

client.connect();
var query = client.query("CREATE TABLE tunes(id SERIAL PRIMARY KEY, \
                                             created_at timestamp default current_timestamp, \
                                             updated_at timestamp default current_timestamp,\
                                             artist VARCHAR(40) NOT NULL, \
                                             title VARCHAR(40) NOT NULL, \
                                             key VARCHAR(3), \
                                             tonality VARCHAR(6), \
                                             style VARCHAR(20) \
                                             )");
query.on('end', () => { client.end(); });
