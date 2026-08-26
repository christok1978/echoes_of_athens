const fs = require('fs');

// Read app.js
const appJs = fs.readFileSync('./app.js', 'utf8');

// Extract all POIs with their images
const poisMatch = appJs.match(/const POIs = \[([\s\S]*?)\n\];/);
if (!poisMatch) {
    console.error('Could not find POIs array');
    process.exit(1);
}

// Parse POI data more carefully
const poiRegex = /\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
const pois = [];
let match;

while ((match = poiRegex.exec(appJs)) !== null) {
    pois.push({
        id: parseInt(match[1]),
        name: match[2],
        image: match[3]
    });
}

console.log(`\n=== CHECKING ALL ${pois.length} POIs FOR IMAGE ACCURACY ===\n`);

// Check for obvious mismatches
const issues = [];
const imageUsage = {};

pois.forEach(poi => {
    const imageName = poi.image.replace('images/', '').replace(/\.(png|jpg|jpeg)/, '');
    const poiName = poi.name.toLowerCase();
    
    // Track usage
    if (!imageUsage[poi.image]) {
        imageUsage[poi.image] = [];
    }
    imageUsage[poi.image].push({ id: poi.id, name: poi.name });
    
    // Check for obvious mismatches
    const suspiciousKeywords = {
        'parthenon': ['parthenon'],
        'hephaestus': ['hephaestus'],
        'erechtheion': ['erechtheion', 'caryatid'],
        'olympian_zeus': ['zeus', 'olympian'],
        'tower_winds': ['tower', 'wind'],
        'theatre_dionysus': ['theatre', 'theater', 'dionysus'],
        'panathenaic_stadium': ['stadium', 'panathenaic'],
        'acropolis': ['acropolis'],
        'agora': ['agora'],
        'monastery': ['monastery'],
        'church': ['church'],
        'museum': ['museum'],
        'cemetery': ['cemetery', 'tomb']
    };
    
    // Check if image name suggests specific location
    for (const [imgKey, keywords] of Object.entries(suspiciousKeywords)) {
        if (imageName.includes(imgKey)) {
            // Check if POI name matches
            const nameMatches = keywords.some(kw => poiName.includes(kw));
            if (!nameMatches) {
                issues.push({
                    id: poi.id,
                    name: poi.name,
                    image: poi.image,
                    reason: `Image suggests "${imgKey}" but POI is "${poi.name}"`
                });
            }
        }
    }
});

// Report duplicates
console.log('=== DUPLICATE IMAGE ASSIGNMENTS ===\n');
const duplicates = Object.entries(imageUsage)
    .filter(([img, pois]) => pois.length > 1)
    .sort((a, b) => b[1].length - a[1].length);

duplicates.forEach(([image, poiList]) => {
    console.log(`\n${image} (${poiList.length} POIs):`);
    poiList.forEach((poi, idx) => {
        console.log(`  ${idx + 1}. POI ${poi.id}: ${poi.name}`);
    });
});

// Report suspicious mismatches
console.log('\n\n=== SUSPICIOUS IMAGE MISMATCHES ===\n');
if (issues.length === 0) {
    console.log('✅ No obvious mismatches detected by keyword analysis');
} else {
    console.log(`⚠️  Found ${issues.length} potentially incorrect assignments:\n`);
    issues.forEach(issue => {
        console.log(`POI ${issue.id}: ${issue.name}`);
        console.log(`  Image: ${issue.image}`);
        console.log(`  Issue: ${issue.reason}\n`);
    });
}

// Save detailed report
const report = {
    timestamp: new Date().toISOString(),
    totalPOIs: pois.length,
    uniqueImages: Object.keys(imageUsage).length,
    duplicates: duplicates.length,
    suspiciousMismatches: issues.length,
    fullData: {
        allPOIs: pois,
        imageUsage: Object.entries(imageUsage).map(([img, pois]) => ({
            image: img,
            usageCount: pois.length,
            pois: pois
        })),
        suspiciousMatches: issues
    }
};

fs.writeFileSync('complete_image_audit.json', JSON.stringify(report, null, 2));
console.log('\n✅ Complete audit saved to: complete_image_audit.json');
console.log(`\nSummary: ${pois.length} POIs, ${Object.keys(imageUsage).length} unique images, ${duplicates.length} duplicates, ${issues.length} suspicious`);
