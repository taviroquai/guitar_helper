require('dotenv').config()
const download = require('./utils/download');
const render = require('./utils/render');
const parse = require('./utils/parse');

function parseItem(item) {
  return {
    Song: item.Song,
    Chords: item.Chords.replace(/,\s+/g, ' <br />')
  }
}

async function build() {
  await download(process.env.CSV_FILE_URL, process.env.INDEX_FILE);
  const songs = parse(process.env.INDEX_FILE, parseItem);
  render(songs);
}

(async function() {
  await build();
})();