const csvjson = require('csvjson');
const fs = require('fs');

function parse(filename, cb) {
  var data = fs.readFileSync(process.env.DATA_FOLDER + filename, { encoding : 'utf8'});

  var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };
   
  let songs = csvjson.toObject(data, options);
  songs = songs.filter(i => !!i.Song).sort((a, b) => a.Song > b.Song ? 1 : -1);
  songs = songs.map(cb);
  console.log('Songs:', songs.length);
  return songs;
}

module.exports = parse;