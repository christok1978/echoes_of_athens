const fs = require('fs');

// Read app.js
const appJs = fs.readFileSync('./app.js', 'utf8');

// Find specific POIs mentioned by user
const poisToCheck = [
    'Stoa of Attalos',
    'Kerameikos Archaeological Museum',
    'Monastery of Daphni',
    'Sanctuary of Demeter'
];

console.log('=== CHECKING SPECIFIC POIs ===\n');

poisToCheck.forEach(name => {
    const regex = new RegExp(`"name":\\s*"${name}"[\\s\\S]*?"image":\\s*"([^"]+)"`, 'g');
    const match = regex.exec(appJs);
    if (match) {
        console.log(`${name}:`);
        console.log(`  Image: ${match[1]}\n`);
    }
});

// Now check all duplicates in detail
const imageMatches = appJs.matchAll(/"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g);
const imageUsage = {};

for (const match of imageMatches) {
    const [, name, image] = match;
    if (!imageUsage[image]) {
        imageUsage[image] = [];
    }
    imageUsage[image].push(name);
}

console.log('\n=== ALL DUPLICATE IMAGE ASSIGNMENTS ===\n');

Object.entries(imageUsage)
    .filter(([img, names]) => names.length > 1)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([image, names]) => {
        console.log(`\n${image} (${names.length} times):`);
        names.forEach((name, idx) => {
            console.log(`  ${idx + 1}. ${name}`);
        });
    });
