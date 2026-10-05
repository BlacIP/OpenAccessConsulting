// Builds the site and pre-renders every page to static HTML so search engines,
// link previews and direct visits get real content (GitHub Pages can't render on the server).
//
// Usage: node scripts/build.mjs [--mode production|staging]
import { build } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const modeIndex = process.argv.indexOf('--mode');
const mode = modeIndex > -1 ? process.argv[modeIndex + 1] : 'production';
const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrOut = path.join(root, 'dist-ssr');

// 1. Client bundle
await build({ mode });

// 2. Server bundle used only for rendering HTML at build time
await build({
  mode,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: ssrOut, emptyOutDir: true, copyPublicDir: false },
  ssr: { noExternal: ['lucide-react'] },
});

const { render, pages, meta, siteUrl, fullTitle, base } = await import(pathToFileURL(path.join(ssrOut, 'entry-server.js')).href);
let template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

// Preload the main (Latin) font file so headings render in the brand font sooner
const fontFile = (await fs.readdir(path.join(dist, 'assets'))).find((f) => /plus-jakarta-sans-latin-wght-normal-.*\.woff2$/.test(f));
if (fontFile) {
  template = template.replace(
    '</head>',
    `    <link rel="preload" href="${base}assets/${fontFile}" as="font" type="font/woff2" crossorigin />\n  </head>`,
  );
}

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const canonicalFor = (pagePath) => `${siteUrl}${pagePath === '/' ? '/' : `${pagePath}/`}`;

const fillTemplate = (page, appHtml, { noindex = false } = {}) => {
  const title = escapeAttr(fullTitle(page));
  const description = escapeAttr(page.description);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalFor(page.path)}$2`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const extraHead = noindex
    ? '<meta name="robots" content="noindex" />'
    : `<link rel="canonical" href="${canonicalFor(page.path)}" />`;
  // Staging builds already carry a robots noindex tag from vite.config.ts
  if (!(noindex && html.includes('name="robots"'))) html = html.replace('</head>', `    ${extraHead}\n  </head>`);
  return html;
};

const writePage = async (relativeFile, html) => {
  const file = path.join(dist, relativeFile);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
};

// 3. One index.html per page
for (const page of pages) {
  const file = page.path === '/' ? 'index.html' : path.join(page.path, 'index.html');
  await writePage(file, fillTemplate(page, render(page.path)));
}

// 4. 404 page (GitHub Pages serves 404.html for unknown URLs)
await writePage('404.html', fillTemplate(meta.notFound, render('/this-page-does-not-exist'), { noindex: true }));

// 5. The old training URL redirects to the new one
const trainingUrl = `${base}training/`;
await writePage(
  'enroll-for-training/index.html',
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title>` +
    `<link rel="canonical" href="${canonicalFor('/training')}"><meta name="robots" content="noindex">` +
    `<meta http-equiv="refresh" content="0; url=${trainingUrl}"></head>` +
    `<body><script>location.replace(${JSON.stringify(trainingUrl)} + location.search + location.hash)</script>` +
    `<a href="${trainingUrl}">Continue to HR Training</a></body></html>`,
);

// 6. Sitemap and robots.txt for the live site only
if (mode === 'production') {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.map((p) => `  <url><loc>${canonicalFor(p.path)}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  await fs.writeFile(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nDisallow: /staging/\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
}

await fs.rm(ssrOut, { recursive: true, force: true });
console.log(`\nPre-rendered ${pages.length} pages + 404 (${mode}).`);
