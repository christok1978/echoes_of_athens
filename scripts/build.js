const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

console.log('🚀 Starting build process for production...');

// 1. Copy static assets
console.log('📁 Copying static assets...');
const filesToCopy = [
    'index.html',
    'sw.js',
    'manifest.json',
    'icon-192.png',
    'icon-512.png',
    'og-image.jpg',
    'robots.txt',
    'about.html',
    'press.html',
    'marketing.css',
    'seo-schema.js'
];

filesToCopy.forEach(file => {
    fs.copyFileSync(path.join(__dirname, '..', file), path.join(distDir, file));
});

// Copy directories
const dirsToCopy = ['fonts', 'images', 'blog', 'marketing'];
dirsToCopy.forEach(dir => {
    const srcDir = path.join(__dirname, '..', dir);
    const destDir = path.join(distDir, dir);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    
    if (fs.existsSync(srcDir)) {
        fs.readdirSync(srcDir).forEach(file => {
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        });
    }
});

// 2. Minify JS using npx terser
console.log('🗜️ Minifying app.js (this may take a few seconds)...');
try {
    execSync(`npx terser ../app.js -o ../dist/app.js --compress --mangle`, { stdio: 'inherit', cwd: __dirname });
    console.log('✅ app.js minified successfully!');
} catch (error) {
    console.error('❌ Failed to minify JS. Using original file instead.');
    fs.copyFileSync(path.join(__dirname, '../app.js'), path.join(distDir, 'app.js'));
}

// 3. Minify CSS using npx clean-css-cli
console.log('🗜️ Minifying style.css...');
try {
    execSync(`npx clean-css-cli ../style.css -o ../dist/style.css`, { stdio: 'inherit', cwd: __dirname });
    console.log('✅ style.css minified successfully!');
} catch (error) {
    console.error('❌ Failed to minify CSS. Using original file instead.');
    fs.copyFileSync(path.join(__dirname, '../style.css'), path.join(distDir, 'style.css'));
}

console.log('\n🗺️ Generating sitemap and public site pages...');
require('./generate-seo.js');

console.log('\n🎉 Build complete! Your production-ready files are in the /dist folder.');
console.log('You can test it locally by running: npx serve dist');
