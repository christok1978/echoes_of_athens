const fs = require('fs');
const path = require('path');

// Read app.js to extract POI data
const appJs = fs.readFileSync('./app.js', 'utf8');

// Extract POIs array
const poisMatch = appJs.match(/const POIs = \[([\s\S]*?)\n\];/);
if (!poisMatch) {
    console.error('Could not find POIs array');
    process.exit(1);
}

// Parse POIs (simplified - just extract image paths)
const imageMatches = appJs.matchAll(/"image":\s*"([^"]+)"/g);
const poisImages = Array.from(imageMatches).map(m => m[1]);

// Get actual image files
const imagesDir = './images';
const actualImages = fs.readdirSync(imagesDir).filter(f => 
    f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.webp')
);

console.log('\n=== IMAGE VALIDATION REPORT ===\n');
console.log(`Total POIs: 250`);
console.log(`POI images referenced: ${poisImages.length}`);
console.log(`Actual image files: ${actualImages.length}\n`);

// Check for missing images
const missingImages = [];
const imageCount = {};

poisImages.forEach((img, idx) => {
    const filename = img.replace('images/', '');
    
    // Count duplicates
    imageCount[img] = (imageCount[img] || 0) + 1;
    
    // Check if exists
    if (!actualImages.includes(filename)) {
        missingImages.push({ poi: idx, image: img });
    }
});

console.log('=== MISSING IMAGES ===');
if (missingImages.length === 0) {
    console.log('✅ No missing images');
} else {
    console.log(`❌ ${missingImages.length} missing images:\n`);
    missingImages.slice(0, 20).forEach(m => {
        console.log(`POI ${m.poi}: ${m.image}`);
    });
    if (missingImages.length > 20) {
        console.log(`... and ${missingImages.length - 20} more`);
    }
}

console.log('\n=== DUPLICATE IMAGES ===');
const duplicates = Object.entries(imageCount).filter(([img, count]) => count > 1);
if (duplicates.length === 0) {
    console.log('✅ No duplicate images');
} else {
    console.log(`⚠️  ${duplicates.length} images used multiple times:\n`);
    duplicates.slice(0, 20).forEach(([img, count]) => {
        console.log(`${img}: used ${count} times`);
    });
    if (duplicates.length > 20) {
        console.log(`... and ${duplicates.length - 20} more`);
    }
}

console.log('\n=== UNUSED IMAGES ===');
const usedFilenames = poisImages.map(img => img.replace('images/', ''));
const unusedImages = actualImages.filter(img => !usedFilenames.includes(img));
if (unusedImages.length === 0) {
    console.log('✅ All images are used');
} else {
    console.log(`📁 ${unusedImages.length} unused image files:\n`);
    unusedImages.slice(0, 20).forEach(img => {
        console.log(`  ${img}`);
    });
    if (unusedImages.length > 20) {
        console.log(`... and ${unusedImages.length - 20} more`);
    }
}

// Generate detailed report
const report = {
    timestamp: new Date().toISOString(),
    summary: {
        totalPOIs: 250,
        referencedImages: poisImages.length,
        actualImageFiles: actualImages.length,
        missingImages: missingImages.length,
        duplicateImages: duplicates.length,
        unusedImages: unusedImages.length
    },
    missingImages,
    duplicates: duplicates.map(([img, count]) => ({ image: img, count })),
    unusedImages
};

fs.writeFileSync('image_validation_report.json', JSON.stringify(report, null, 2));
console.log('\n✅ Full report saved to: image_validation_report.json');
