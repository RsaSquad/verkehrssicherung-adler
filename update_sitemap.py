import os

sitemap_path = r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\sitemap.xml'

with open(sitemap_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_urls = """  <url>
    <loc>https://www.verkehrssicherung-adler.de/verkehrsabsicherung-hamburg/</loc>
    <lastmod>2026-09-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.verkehrssicherung-adler.de/baustellenabsicherung-hamburg/</loc>
    <lastmod>2026-09-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>"""

content = content.replace('</urlset>', new_urls)

with open(sitemap_path, 'w', encoding='utf-8') as f:
    f.write(content)
