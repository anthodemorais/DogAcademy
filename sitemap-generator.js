const fs = require('fs')
const fetch = require('node-fetch');

let content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

let urlsDone = []

function crawlUrl(url) {
  urlsDone.push(url)
  fetch(url)
  .then(res => res.status === 200 && res.text())
  .then(text => {
    var matches = [];
    text.replace(/[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/g, function () {
        matches.push(Array.prototype.slice.call(arguments, 1, 4));
    });
    for (let i = 0; i < matches.length; i++) {
      const url = matches[i];
      if (!urlsDone.includes(url)) {
        crawlUrl(url)
      }
    }
    console.log(urlsDone)
  })
}


crawlUrl('https://dog-academy.co')