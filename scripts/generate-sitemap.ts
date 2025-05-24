import { writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import prettier from 'prettier';
import { siteConfig } from '../src/config/site';

function getPages(dir: string, pages: string[] = []): string[] {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip API routes and dynamic routes
      if (file === 'api' || file.startsWith('[')) continue;
      getPages(filePath, pages);
    } else if (file === 'page.tsx') {
      pages.push(filePath);
    }
  }
  
  return pages;
}

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  
  // Fetch all routes based on filesystem
  const pages = getPages('src/app');

  const routes = pages
    .map((page: string) => {
      // Remove src/app and page.tsx
      const path = page
        .replace('src/app/', '')
        .replace('/page.tsx', '')
        .replace('page.tsx', '');
      return path === '' ? '/' : `/${path}`;
    })
    .sort();

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
          .map((route: string) => {
            return `
              <url>
                  <loc>${siteConfig.url}${route}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
                  <priority>${route === '/' ? '1.0' : '0.7'}</priority>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);

  // Also generate robots.txt
  const robotsTxt = `
# *
User-agent: *
Allow: /

# Host
Host: ${siteConfig.url}

# Sitemaps
Sitemap: ${siteConfig.url}/sitemap.xml
`;

  writeFileSync('public/robots.txt', robotsTxt.trim());
}

generate();
