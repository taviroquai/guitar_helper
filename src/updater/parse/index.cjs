const csvjson = require('csvjson');
const fs = require('fs');

function parse(filename, cb) {
  var data = fs.readFileSync(filename, { encoding: 'utf8' });

  var options = {
    delimiter: ',', // optional
    quote: '"' // optional
  };

  let songs = csvjson.toObject(data, options);
  songs = songs.filter(i => !!i.Song).sort((a, b) => Number(a.Ordem) > Number(b.Ordem) ? 1 : -1);
  songs = songs.map(cb);
  console.log('Songs:', songs.length);
  return songs;
}

module.exports = parse;
