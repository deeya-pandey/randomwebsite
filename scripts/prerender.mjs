// Prerenders every route to static HTML so crawlers and first paint get real content.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const site = (process.env.SITE_URL || 'https://www.your-domain.com').replace(/\/$/, '')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const ssrDir = path.join(root, 'dist-ssr')
const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server.*\.js$/.test(f))
const { render, routes, jsonLd, copy } = await import(pathToFileURL(path.join(ssrDir, entry)).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const faqLd = (lang = 'en') => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: lang,
  mainEntity: copy[lang].faq.items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
})

const alt = (p) => (p.startsWith('/ne/') ? p.slice(3) : '/ne' + p)

function head(meta) {
  const url = site + meta.path
  const enPath = meta.lang === 'ne' ? alt(meta.path) : meta.path
  const nePath = meta.lang === 'ne' ? meta.path : alt(meta.path)
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${site}${enPath}" />`,
    `<link rel="alternate" hreflang="ne" href="${site}${nePath}" />`,
    `<link rel="alternate" hreflang="x-default" href="${site}${enPath}" />`,
    `<meta property="og:locale" content="${meta.lang === 'ne' ? 'ne_NP' : 'en_US'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Nova Dental Care" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${site}/og-image.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify({ ...jsonLd, url: site + '/' })}</script>`,
    ...(meta.path === '/' || meta.path === '/ne/' ? [`<script type="application/ld+json">${JSON.stringify(faqLd(meta.lang))}</script>`] : []),
  ].join('\n    ')
}

for (const meta of routes) {
  const html = template
    .replace('<html lang="en">', `<html lang="${meta.lang || 'en'}">`)
    .replace('<!--head-tags-->', head(meta))
    .replace('<!--app-html-->', render(meta.path))
  const out = meta.path === '/' ? path.join(dist, 'index.html') : path.join(dist, meta.path, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log('prerendered', meta.path)
}

// 404 page (noindex)
const nf = template
  .replace('<!--head-tags-->', '<title>Page not found | Nova Dental Care</title>\n    <meta name="robots" content="noindex" />')
  .replace('<!--app-html-->', render('/404-not-found'))
fs.writeFileSync(path.join(dist, '404.html'), nf)

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${routes
    .map((r) => `  <url><loc>${site}${r.path}</loc><lastmod>${today}</lastmod><xhtml:link rel="alternate" hreflang="${r.lang === 'ne' ? 'en' : 'ne'}" href="${site}${alt(r.path)}"/></url>`)
    .join('\n')}\n</urlset>\n`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
fs.rmSync(ssrDir, { recursive: true, force: true })
