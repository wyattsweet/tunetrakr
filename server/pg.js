const pg               = require('pg'),
      connectionString = 'postgres://localhost:5432/tunetrakr';

var Tunes = (function() {

//###################### Post to tunes table ######################//
  var post = function(data) {
    return new Promise(function(res, rej) {
      var results = [];
    
      pg.connect(connectionString, (err, client, done) => {
        // check errors
        if (err) {
          done();
          rej(JSON.stringify({success: false, data: err}));
        }
    
        client.query('INSERT INTO tunes(artist, title, instrument) values($1, $2, $3)', [data.artist, data.title, data.instrument]);
    
        // select all Tunes 
        const query = client.query('SELECT * FROM tunes ORDER BY id ASC');
    
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

  return {
    post: post
  };
}());

module.exports = Tunes;
