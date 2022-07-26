const fs = require('fs');
const https = require('https');

// Download the file
function download(url, target, filename) {
  return new Promise((resolve, reject) => {
    const normalized = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    https.get(normalized, (res) => {

      // Open file in local filesystem
      const file = fs.createWriteStream(target + filename);
    
      // Write data into local file
      res.pipe(file);
    
      // Close the file
      file.on('finish', () => {
          file.close();
          console.log(`File downloaded!`);
          resolve();
      });
    
    }).on("error", (err) => {
      console.log("Error: ", err.message);
      reject();
    });
  })
}

module.exports = download;