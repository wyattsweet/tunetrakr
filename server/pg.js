const pg               = require('pg'),
      connectionString = 'postgres://localhost:5432/tunetrakr';

var Tunes = (function() {

var results = [];
//###################### 
// Post to tunes table 
// ###################//

  var post = function(data) {
    return new Promise(function(res, rej) {
    
      pg.connect(connectionString, (err, client, done) => {
        // check errors
        if (err) {
          done();
          rej(JSON.stringify({success: false, data: err}));
        }
   
        var queryText = 'INSERT INTO tunes(artist, title, instrument) values($1, $2, $3) RETURNING *';
        client.query(queryText, [data.artist, data.title, data.instrument], function(err, result) {
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
// ###################//

  var getAll = function() {
    return new Promise(function(res, rej) {
      pg.connect(connectionString, (err, client, done) => {
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

  return {
    post: post,
    getAll: getAll
  };
}());

module.exports = Tunes;
