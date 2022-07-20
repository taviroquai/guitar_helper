const fs = require('fs');
const slugify = require('slugify')
const Handlebars = require("handlebars");

function render(songs) {
  let templateHtml = fs.readFileSync('src/template.html', { encoding : 'utf8'});
  
  Handlebars.registerHelper('slug', function (aString) {
    return slugify(aString.toLowerCase())
  });

  let template = Handlebars.compile(templateHtml);
  var context = { title: "Song List", songs: songs };
  
  var html = template(context);
  fs.writeFileSync("public_html/index.html", html);
  console.log('HTML:', Math.round(html.length / 1024), 'kb');
  return html;
}

module.exports = render