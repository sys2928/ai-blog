import { getAllPosts } from '../../lib/posts'

export default function handler(req, res) {
  const posts = getAllPosts()
  const base = 'https://ai-blog-gold-ten.vercel.app'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  ${posts.map(p => `<url><loc>${base}/posts/${p.slug}</loc><lastmod>${p.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('\n  ')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(xml)
  res.end()
}
