import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://aioneshot.com';

function getPostSlugs() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace('.md', ''));
}

function getPostDate(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  const dateMatch = content.match(/date:\s*"(.+?)"/);
  return dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
}

function generateSitemap() {
  const slugs = getPostSlugs();

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/posts', priority: '0.9', changefreq: 'daily' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  ];

  const postPages = slugs.map((slug) => ({
    url: `/posts/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: getPostDate(slug),
  }));

  const allPages = [...staticPages, ...postPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
