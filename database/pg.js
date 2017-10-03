const { Pool } = require('pg');
// const connectionString = 'postgres://localhost:5432/tunetrakr';

var Tunes = (function() {
  const pool = new Pool({
    host: 'localhost',
    database: 'tunetrakr',
    port: '5432'
  });
let results = [];
//###################### 
// Post to tunes table 
// #####################

  var post = function(data) {
    return new Promise((res, rej) => {
      pool.connect(connectionString, (err, client, done) => {
        // check errors
        if (err) {
          done();
          rej(JSON.stringify({success: false, data: err}));
        }
   
        const queryText = 'INSERT INTO tunes(artist, title, instrument) values($1, $2, $3) RETURNING *';
        const query = client.query(queryText, [data.artist, data.title, data.instrument]);
        console.log(query);
      });
    });
  }

//###################### 
// Get all the tunes 
// #####################

  var getAll = function() {
    return new Promise((res, rej) => {
      pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error aquiring client ', err.stack);
        }
        client.query('SELECT * FROM tunes ORDER BY id ASC', (err, results) => {
          release();
          if (err) {
            return console.log('Error executing query', err.stack);
          }
          res(JSON.stringify(results.rows));
        });

        //        query.on('row', (row) => {
        //          results.push(row);
        //        });
        //
        //        query.on('end', () => {
        //          done();
        //          res(JSON.stringify(results));
        //        })
      })
    })
  }

//###################### 
// Get one tune 
// #####################

  var getTune = (id) => {
    return new Promise((res, rej) => {
      let tune;
      pg.connect(connectionString, (err, client, done) => {
        const query = client.query(`SELECT * FROM tunes WHERE id = ${id}`)

        query.on('row', (row) => {
          tune = row;
        })

        query.on('end', () => {
          done();
          res(JSON.stringify(tune));
        })
      })
    })
  }

//###################### 
// Delete 
// #####################
  var deleteTune = function(id) {
    id = parseInt(id);
    results = [];

    return new Promise((res, rej) => {
      pg.connect(connectionString, (err, client, done) => {
        const queryText = 'DELETE FROM tunes WHERE id=($1)';
        const query = client.query(queryText, [id]);
        var getAllQuery = client.query('SELECT * FROM tunes ORDER BY id ASC');
        getAllQuery.on('row', (row) => {
          results.push(row);
        });
        getAllQuery.on('end', () => {
          done();
          res(JSON.stringify(results));
        })
      })
    })
  }

  return {
    post: post,
    getAll: getAll,
    getTune: getTune,
    deleteTune: deleteTune
  };
}());

module.exports = Tunes;
