require('dotenv').config()
const path = require('path');
const slugify = require('slugify');
const download = require('./download/index.cjs');
const parse = require('./parse/index.cjs');
const cache = require('./cache/index.cjs');

const slugifyOptions = {
  replacement: '-',   // replace spaces with replacement character, defaults to `-`
  remove: "'",        // remove characters that match regex, defaults to `undefined`
  lower: true,        // convert to lower case, defaults to `false`
  strict: true,       // strip special characters except replacement, defaults to `false`
  locale: 'en',       // language code of the locale to use
  trim: true          // trim leading and trailing replacement chars, defaults to `true`
}

function parseItem(item) {
  const lyricsMatches = item.Chords.match(/::(.*)::/g)
  let Lyrics = ''
  if (lyricsMatches) {
    Lyrics = lyricsMatches[0].replace(/::(.*)::/g, '$1').replace(/,\s+/g, ' <br />')
  }
  item.Chords = item.Chords.replace(/::(.*)::/g, '').replace(/::::/g, '')
  const Chords = item.Chords.replace(/,\s+/g, ' <br />')
  return {
    ID: slugify(item.Song, slugifyOptions),
    Song: item.Song,
    Chords,
    Lyrics,
    Tipo: item.Tipo,
  }
}

async function build() {
  await download(process.env.CSV_FILE_URL, process.env.DATA_FOLDER, 'index.csv');
  const songs = parse(process.env.DATA_FOLDER + 'index.csv', parseItem);
  cache(songs, path.join('src', 'data.json'));
}

(async function () {
  await build();
})();