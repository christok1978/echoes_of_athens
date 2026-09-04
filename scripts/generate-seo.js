#!/usr/bin/env node
/**
 * Builds sitemap.xml, the public sites directory, and per-POI landing pages.
 * Run from the repo root or via npm run build.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const BASE = "https://echoes-of-athens.vercel.app";
const TODAY = new Date().toISOString().slice(0, 10);

function extractPOIs() {
    const appJs = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
    const poisMatch = appJs.match(/const POIs = (\[[\s\S]*?\n\];)/);
    if (!poisMatch) throw new Error("Could not extract POIs from app.js");
    return eval(poisMatch[1]);
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function slugify(name, id) {
    const base = String(name)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80);
    return base || `site-${id}`;
}

function uniqueSlugs(pois) {
    const used = new Set();
    return pois.map((poi) => {
        let slug = slugify(poi.name, poi.id);
        if (used.has(slug)) slug = `${slug}-${poi.id}`;
        used.add(slug);
        return { poi, slug };
    });
}

function marketingNav(active, prefix) {
    const links = [
        ["index.html", "Open app", false],
        ["about.html", "About", true],
        ["sites/index.html", "355 sites", true],
        ["blog/index.html", "Guide", true],
        ["press.html", "Press", true]
    ];
    return links
        .map(([href, label]) => {
            const rel = prefix + href;
            const current = href === active ? ' aria-current="page"' : "";
            return `<a href="${rel}"${current}>${label}</a>`;
        })
        .join("");
}

function pageShell({ title, description, canonical, active, prefix, extraHead, body, hero }) {
    const heroHtml = hero
        ? `<section class="hero" style="${hero.image ? `background-image:linear-gradient(180deg,rgba(13,47,100,.5),rgba(18,24,36,.82)),url('${hero.image}')` : ""}">
        <div class="wrap hero-inner">
            <h1>${hero.title}</h1>
            <p class="lede">${hero.lede || ""}</p>
            ${hero.cta || ""}
        </div>
    </section>`
        : "";
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${BASE}/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" type="image/png" href="${prefix}icon-192.png">
    <link rel="stylesheet" href="${prefix}fonts/fonts.css">
    <link rel="stylesheet" href="${prefix}marketing.css">
    ${extraHead || ""}
</head>
<body>
    <header class="site-header">
        <div class="site-header-inner">
            <a class="brand" href="${prefix}index.html">
                <span class="brand-kicker">ECHOES</span>
                <span class="brand-sub">of Athens</span>
            </a>
            <nav class="nav">${marketingNav(active, prefix)}</nav>
        </div>
    </header>
    ${heroHtml}
    ${body}
    <footer class="site-footer">
        <div class="site-footer-inner">
            <p>Echoes of Athens is a free, privacy-first audio guide to 355 places in Attica.</p>
            <p><a href="${prefix}index.html">Open the app</a> · <a href="${prefix}about.html">About</a> · <a href="${prefix}press.html">Press kit</a></p>
        </div>
    </footer>
</body>
</html>
`;
}

function writeFile(filePath, contents) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
}

function poiPage({ poi, slug }) {
    const prefix = "../";
    const canonical = `${BASE}/sites/${slug}.html`;
    const desc = (poi.description || "").slice(0, 160);
    const image = poi.image ? `${prefix}${poi.image}` : `${prefix}og-image.jpg`;
    const schema = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: poi.name,
        description: poi.description,
        url: canonical,
        image: poi.image ? `${BASE}/${poi.image}` : `${BASE}/og-image.jpg`,
        geo: {
            "@type": "GeoCoordinates",
            latitude: String(poi.lat),
            longitude: String(poi.lng)
        },
        isAccessibleForFree: true,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Attica",
            addressCountry: "GR"
        }
    };
    const body = `<main class="section">
        <article class="wrap prose">
            <p class="meta"><a href="../sites/index.html">All sites</a> · POI ${poi.id + 1} of 355</p>
            <h1 class="page-title">${escapeHtml(poi.name)}</h1>
            <img src="${escapeHtml(image)}" alt="${escapeHtml(poi.name)}" width="1200" height="800">
            <p>${escapeHtml(poi.description || "")}</p>
            <p><strong>Coordinates:</strong> ${poi.lat}, ${poi.lng}</p>
            <p class="btn-row">
                <a class="btn btn-primary" href="../index.html?poi=${poi.id}">Listen in the free audio guide</a>
            </p>
            <h2>Why visit</h2>
            <p>${escapeHtml((poi.audioText || poi.description || "").slice(0, 700))}${(poi.audioText || "").length > 700 ? "…" : ""}</p>
            <p>The full narration, quiz, and map pin live in the <a href="../index.html?poi=${poi.id}">Echoes of Athens app</a> — no download required.</p>
        </article>
    </main>`;
    return pageShell({
        title: `${poi.name} | Echoes of Athens audio guide`,
        description: desc,
        canonical,
        active: "sites/index.html",
        prefix,
        extraHead: `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
        body
    });
}

function directoryPage(entries) {
    const cards = entries
        .slice()
        .sort((a, b) => a.poi.name.localeCompare(b.poi.name))
        .map(
            ({ poi, slug }) => `<a class="site-card" href="${slug}.html">
                <h3>${escapeHtml(poi.name)}</h3>
                <p class="muted">${escapeHtml((poi.description || "").slice(0, 110))}…</p>
            </a>`
        )
        .join("\n");
    const body = `<main class="section">
        <div class="wrap">
            <h1 class="page-title">355 sites across Athens and Attica</h1>
            <p class="muted">Ancient temples, Byzantine monasteries, caves, beaches, forests, and neighborhood landmarks. Tap any card for the story, or open it inside the live map.</p>
            <input class="search" id="site-filter" type="search" placeholder="Search temples, beaches, monasteries…" aria-label="Search sites">
            <div class="site-grid" id="site-grid">${cards}</div>
        </div>
    </main>
    <script>
    document.getElementById("site-filter").addEventListener("input", function (e) {
        var q = e.target.value.toLowerCase();
        document.querySelectorAll("#site-grid .site-card").forEach(function (card) {
            card.style.display = card.textContent.toLowerCase().indexOf(q) === -1 ? "none" : "";
        });
    });
    </script>`;
    return pageShell({
        title: "355 historical sites in Attica | Echoes of Athens",
        description: "Directory of 355 temples, ruins, monasteries, beaches, and natural sites in Athens and Attica, each with a free GPS audio guide.",
        canonical: `${BASE}/sites/index.html`,
        active: "sites/index.html",
        prefix: "../",
        body
    });
}

function buildSitemap(entries) {
    const staticUrls = [
        ["/", "1.0", "weekly"],
        ["/about.html", "0.9", "monthly"],
        ["/press.html", "0.7", "monthly"],
        ["/blog/index.html", "0.8", "weekly"],
        ["/blog/free-athens-audio-guide.html", "0.8", "monthly"],
        ["/blog/hidden-gems-athens.html", "0.8", "monthly"],
        ["/blog/beyond-the-acropolis.html", "0.8", "monthly"],
        ["/sites/index.html", "0.8", "weekly"]
    ];
    const urls = staticUrls
        .map(
            ([loc, priority, freq]) => `    <url>
        <loc>${BASE}${loc}</loc>
        <lastmod>${TODAY}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${priority}</priority>
    </url>`
        )
        .concat(
            entries.map(
                ({ slug }) => `    <url>
        <loc>${BASE}/sites/${slug}.html</loc>
        <lastmod>${TODAY}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>`
            )
        )
        .join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function main() {
    const pois = extractPOIs();
    const entries = uniqueSlugs(pois);
    const sitemap = buildSitemap(entries);
    writeFile(path.join(ROOT, "sitemap.xml"), sitemap);
    writeFile(path.join(ROOT, "sites", "index.html"), directoryPage(entries));

    if (fs.existsSync(DIST)) {
        writeFile(path.join(DIST, "sitemap.xml"), sitemap);
        writeFile(path.join(DIST, "sites", "index.html"), directoryPage(entries));
        entries.forEach((entry) => {
            writeFile(path.join(DIST, "sites", `${entry.slug}.html`), poiPage(entry));
        });
        console.log(`SEO: wrote sitemap + ${entries.length} site pages to dist/sites`);
    } else {
        console.log(`SEO: wrote sitemap and sites/index.html (${entries.length} POIs). Run the production build to emit per-site pages.`);
    }
}

main();
