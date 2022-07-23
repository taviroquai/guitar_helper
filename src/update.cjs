require('dotenv').config()
const slugify = require('slugify');
const download = require('./utils/download/index.cjs');
const parse = require('./utils/parse/index.cjs');
const cache = require('./utils/cache/index.cjs');

const slugifyOptions = {
  replacement: '-',   // replace spaces with replacement character, defaults to `-`
  remove: "'",        // remove characters that match regex, defaults to `undefined`
  lower: true,        // convert to lower case, defaults to `false`
  strict: true,       // strip special characters except replacement, defaults to `false`
  locale: 'en',       // language code of the locale to use
  trim: true          // trim leading and trailing replacement chars, defaults to `true`
}

function parseItem(item) {
  return {
    ID: slugify(item.Song, slugifyOptions),
    Song: item.Song,
    Chords: item.Chords.replace(/,\s+/g, ' <br />')
  }
}

async function build() {
  await download(process.env.CSV_FILE_URL, process.env.DATA_FOLDER, 'index.csv');
  const songs = parse(process.env.DATA_FOLDER + 'index.csv', parseItem);
  cache(songs, 'src/data.json');
}

(async function() {
  await build();
})();