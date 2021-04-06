const fs = require('fs')

function generateSitemap(filename, lang) {
  const baseUrl = lang === "fr" ? 'https://fr.dog-academy.co/' : 'https://dog-academy.co/'
  const posts = []

  let content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl + "about/"}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`

  fs.readdir(`./src/posts/${lang}/`, (err, files) => {
    if (!err) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (file !== 'index.js') {
          posts.push(`${baseUrl}${file.replace('.js', '')}`)
        }
      }
  
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content += `
          <url>
            <loc>${post}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `
      }
      
      content += "</urlset>"
  
      fs.writeFile(`./public/${filename}`, content, (err) => {
        console.log(err)
      })
    }
  })
}

generateSitemap('sitemap.xml', 'en')
generateSitemap('fr-sitemap.xml', 'fr')
