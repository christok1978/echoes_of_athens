const { test, describe } = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function extractPOIs() {
    const appJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
    const poisMatch = appJs.match(/const POIs = (\[[\s\S]*?\n\];)/);
    if (!poisMatch) throw new Error("Could not extract POIs from app.js");
    return eval(poisMatch[1]);
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

describe("Public SEO and marketing pages", () => {
    test("robots.txt points crawlers at the production sitemap", () => {
        const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
        assert.match(robots, /Sitemap: https:\/\/echoes-of-athens\.vercel\.app\/sitemap\.xml/);
        assert.match(robots, /Allow: \//);
    });

    test("homepage social tags use the live Vercel origin and OG image", () => {
        const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
        assert.doesNotMatch(html, /yourdomain\.com/);
        assert.match(html, /rel="canonical" href="https:\/\/echoes-of-athens\.vercel\.app\/"/);
        assert.match(html, /og:image" content="https:\/\/echoes-of-athens\.vercel\.app\/og-image\.jpg"/);
        assert.match(html, /seo-schema\.js/);
        assert.match(html, /share-poi-btn/);
        assert.match(html, /href="about.html"/);
    });

    test("marketing pages and launch assets exist", () => {
        const required = [
            "about.html",
            "press.html",
            "og-image.jpg",
            "marketing.css",
            "seo-schema.js",
            "blog/index.html",
            "blog/free-athens-audio-guide.html",
            "blog/hidden-gems-athens.html",
            "blog/beyond-the-acropolis.html",
            "marketing/SOCIAL_KIT.md",
            "marketing/PRESS_RELEASE.md",
            "marketing/qr-code.png",
            "marketing/promo-square.jpg",
            "scripts/generate-seo.js"
        ];
        required.forEach((file) => {
            assert.ok(fs.existsSync(path.join(root, file)), `missing ${file}`);
        });
    });

    test("POI slugs are unique for public site pages", () => {
        const used = new Set();
        extractPOIs().forEach((poi) => {
            let slug = slugify(poi.name, poi.id);
            if (used.has(slug)) slug = `${slug}-${poi.id}`;
            assert.equal(used.has(slug), false, `duplicate slug ${slug}`);
            used.add(slug);
        });
        assert.equal(used.size, extractPOIs().length);
    });

    test("app.js can open a shared ?poi= deep link", () => {
        const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
        assert.match(app, /function openSharedPOI/);
        assert.match(app, /function shareCurrentPOI/);
        assert.match(app, /params\.has\("poi"\)/);
    });
});
