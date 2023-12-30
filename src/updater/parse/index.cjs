const csvjson = require('csvjson');
const Papa = require('papaparse');
const fs = require('fs');

function parse(filename, cb) {
  var data = fs.readFileSync(filename, { encoding: 'utf8' });

  var options = {
    header: true,
    delimiter: ',', // optional
    quote: '"' // optional
  };

  //let songs = csvjson.toObject(data, options);
  let songs = Papa.parse(data, options).data
  songs = songs.filter(i => !!i.Song).sort((a, b) => Number(a.Ordem) > Number(b.Ordem) ? 1 : -1);
  songs = songs.map(cb);
  console.log('Songs:', songs.length);
  console.log(songs[4])
  return songs;
}

module.exports = parse;
