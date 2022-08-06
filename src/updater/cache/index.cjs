const fs = require('fs');

function cache(songs, filename) {
  fs.writeFileSync(filename, JSON.stringify(songs, null, 2));
}

module.exports = cache;