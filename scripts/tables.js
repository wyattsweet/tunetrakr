// run this file to create Postgres database tables

const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  database: 'tunetrakr',
  port: '5432'
});

pool.connect((err, client, release) => {
  if (err) {
    console.error(err);
  }
  const queryText = "CREATE TABLE tunes(id SERIAL PRIMARY KEY, \
                                        created_at timestamp default current_timestamp, \
                                        updated_at timestamp default current_timestamp,\
                                        artist VARCHAR(40) NOT NULL, \
                                        title VARCHAR(40) NOT NULL, \
                                        key VARCHAR(3), \
                                        tonality VARCHAR(6), \
                                        style VARCHAR(20), \
                                        instrument VARCHAR(40) \
                                       )";
  client.query(queryText, (err, results) => {
    release();
  });
})
