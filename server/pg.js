const pg               = require('pg'),
      connectionString = 'postgres://localhost:5432/tunetrakr';

var Tunes = (function() {

var results = [];
//###################### 
// Post to tunes table 
// #####################

  var post = function(data) {
    return new Promise((res, rej) => {
    
      pg.connect(connectionString, (err, client, done) => {
        // check errors
        if (err) {
          done();
          rej(JSON.stringify({success: false, data: err}));
        }
   
        const queryText = 'INSERT INTO tunes(artist, title, instrument) values($1, $2, $3) RETURNING *';
        client.query(queryText, [data.artist, data.title, data.instrument], (err, result) => {
          if (err) {
            done();
            rej(JSON.stringify({success: false, data: err}));
          } else {
            done();
            res(JSON.stringify(result.rows[0]));
          }
        });
      });
    });
  }

//###################### 
// Get all the tunes 
// #####################

  var getAll = function() {
    return new Promise((res, rej) => {
      pg.connect(connectionString, (err, client, done) => {
        results = [];
        const query = client.query('SELECT * FROM tunes ORDER BY id ASC');

        query.on('row', (row) => {
          results.push(row);
        });

        query.on('end', () => {
          done();
          res(JSON.stringify(results));
        })
      })
    })
  }

//###################### 
// Get one tune 
// #####################

  var getTune = (id) => {
    return new Promise((res, rej) => {
      results = [];
      pg.connect(connectionString, (err, client, done) => {
        const query = client.query(`SELECT * FROM tunes WHERE id = ${id}`)
        query.on('row', (row) => {
          results.push(row);
        })

        query.on('end', () => {
          done();
          res(JSON.stringify(results));
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
