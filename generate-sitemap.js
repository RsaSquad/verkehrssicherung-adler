const fs = require('fs');
const path = require('path');

const cities = require('./city-data.json');
const BASE_URL = 'https://www.verkehrssicherung.de';
const today = new Date().toISOString().split('T')[0];

const urls = [];

// ── Main pages ──
urls.push({ loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'weekly' });

// ── Service hub pages ──
urls.push({ loc: `${BASE_URL}/halteverbotszone/`, priority: '0.9', changefreq: 'weekly' });
urls.push({ loc: `${BASE_URL}/verkehrsabsicherung/`, priority: '0.9', changefreq: 'weekly' });
urls.push({ loc: `${BASE_URL}/baustellenabsicherung/`, priority: '0.9', changefreq: 'weekly' });

// ── Legal pages ──
urls.push({ loc: `${BASE_URL}/impressum/`, priority: '0.3', changefreq: 'yearly' });
urls.push({ loc: `${BASE_URL}/datenschutz/`, priority: '0.3', changefreq: 'yearly' });

// ── Hamburg special page ──
urls.push({ loc: `${BASE_URL}/halteverbotszone-hamburg/`, priority: '0.8', changefreq: 'monthly' });

// ── City pages (Halteverbotszone, Verkehrsabsicherung, Baustellenabsicherung) ──
cities.forEach(city => {
    urls.push({ loc: `${BASE_URL}/halteverbotszone-${city.slug}/`, priority: '0.7', changefreq: 'monthly' });
    urls.push({ loc: `${BASE_URL}/verkehrsabsicherung-${city.slug}/`, priority: '0.7', changefreq: 'monthly' });
    urls.push({ loc: `${BASE_URL}/baustellenabsicherung-${city.slug}/`, priority: '0.7', changefreq: 'monthly' });
});

// ── Build XML ──
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(u => {
    xml += `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>
`;
});

xml += `</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log(`✅ sitemap.xml erstellt mit ${urls.length} URLs`);
