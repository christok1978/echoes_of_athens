#!/usr/bin/env node
/*
 * Fetch freely-licensed images from Wikimedia Commons for POIs.
 *
 * Usage: node scripts/fetch_commons_images.js <jobsFile.json> [outDir]
 *   jobsFile.json: [{ "id": 241, "slug": "zappeion_megaron", "query": "Zappeion Athens" }, ...]
 *   outDir: directory to write chosen images into (default: images)
 *
 * Writes a manifest to /tmp/commons_manifest.json capturing the chosen image,
 * its license/author/source (for attribution), plus alternate candidates so a
 * wrong pick can be swapped without re-querying.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const UA = 'EchoesOfAthens-ImageBot/1.0 (https://echoes-of-athens.vercel.app; contact: maintainer) node-fetch';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function getJson(url) {
  const buf = await get(url);
  return JSON.parse(buf.toString('utf8'));
}

function commonsSearchUrl(query, width) {
  const base = 'https://commons.wikimedia.org/w/api.php';
  const params = new URLSearchParams({
    action: 'query', format: 'json',
    generator: 'search',
    gsrsearch: query, gsrnamespace: '6', gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|mime|size',
    iiurlwidth: String(width || 1200)
  });
  return base + '?' + params.toString();
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function scoreCandidate(c) {
  // Prefer real photos: landscape-ish, decent size, jpg, not SVG/diagram/map/logo/plan.
  let s = 0;
  const t = (c.title || '').toLowerCase();
  if (/\.(svg|pdf|tif|tiff)$/.test(t)) s -= 100;
  if (/(map|plan|diagram|logo|coat of arms|drawing|engraving|icon|seal|flag)/.test(t)) s -= 30;
  if (c.mime && c.mime.startsWith('image/')) s += 5;
  if (c.width && c.height) {
    if (c.width >= c.height) s += 5;       // landscape preferred for cards
    if (c.width >= 1000) s += 3;
  }
  return s;
}

async function processJob(job, outDir) {
  const width = 1200;
  const data = await getJson(commonsSearchUrl(job.query, width));
  const pages = (data.query && data.query.pages) ? Object.values(data.query.pages) : [];
  const cands = pages.map((p) => {
    const ii = (p.imageinfo && p.imageinfo[0]) || {};
    const em = ii.extmetadata || {};
    return {
      title: p.title,
      index: p.index,
      thumburl: ii.thumburl,
      width: ii.thumbwidth || ii.width,
      height: ii.thumbheight || ii.height,
      mime: ii.mime,
      license: (em.LicenseShortName && em.LicenseShortName.value) || '',
      artist: (em.Artist && em.Artist.value ? em.Artist.value.replace(/<[^>]+>/g, '').trim() : ''),
      descriptionurl: ii.descriptionurl
    };
  }).filter((c) => c.thumburl)
    // Hard-reject non-photographic media (book/PDF/DjVu scans, SVG diagrams, TIFFs).
    .filter((c) => {
      const okMime = c.mime === 'image/jpeg' || c.mime === 'image/png' || c.mime === 'image/webp';
      const badExt = /\.(pdf|djvu|svg|tif|tiff|ogv|webm)$/i.test(c.title || '');
      return okMime && !badExt;
    });

  cands.sort((a, b) => (scoreCandidate(b) - scoreCandidate(a)) || ((a.index || 99) - (b.index || 99)));

  const result = { id: job.id, slug: job.slug, query: job.query, chosen: null, alternates: [] };
  if (!cands.length) return result;

  const chosen = cands[0];
  const ext = (chosen.mime === 'image/png') ? 'png' : 'jpg';
  const filename = job.slug + '.' + ext;
  const dest = path.join(outDir, filename);
  const img = await get(chosen.thumburl);
  fs.writeFileSync(dest, img);

  result.chosen = {
    file: 'images/' + filename,
    bytes: img.length,
    title: chosen.title,
    license: chosen.license,
    artist: chosen.artist,
    source: chosen.descriptionurl,
    thumburl: chosen.thumburl
  };
  result.alternates = cands.slice(1, 5).map((c) => ({
    title: c.title, license: c.license, thumburl: c.thumburl, source: c.descriptionurl,
    width: c.width, height: c.height
  }));
  return result;
}

async function main() {
  const jobsFile = process.argv[2];
  const outDir = process.argv[3] || 'images';
  if (!jobsFile) { console.error('Usage: node scripts/fetch_commons_images.js <jobs.json> [outDir]'); process.exit(1); }
  const jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
  fs.mkdirSync(outDir, { recursive: true });
  const manifest = [];
  for (const job of jobs) {
    try {
      const r = await processJob(job, outDir);
      manifest.push(r);
      const status = r.chosen ? (r.chosen.license + ' | ' + r.chosen.title) : 'NO RESULT';
      console.log(`#${job.id} ${job.slug} -> ${status}`);
    } catch (e) {
      console.error(`#${job.id} ${job.slug} ERROR: ${e.message}`);
      manifest.push({ id: job.id, slug: job.slug, query: job.query, error: e.message });
    }
    await sleep(300);
  }
  fs.writeFileSync('/tmp/commons_manifest.json', JSON.stringify(manifest, null, 2));
  const ok = manifest.filter((m) => m.chosen).length;
  console.log(`\nDone. ${ok}/${jobs.length} images fetched. Manifest: /tmp/commons_manifest.json`);
}

main();
