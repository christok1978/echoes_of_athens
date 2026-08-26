// Comprehensive POI coordinate validator
// Checks all 250 POIs against known locations and geographic constraints

const fs = require('fs');
const path = require('path');

// Extract POIs from app.js
function extractPOIs() {
    const appJs = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    const poisMatch = appJs.match(/const POIs = (\[[\s\S]*?\n\];)/);
    if (!poisMatch) throw new Error('Could not extract POIs');
    return eval(poisMatch[1]);
}

const POIs = extractPOIs();

console.log('🔍 Analyzing 250 POI coordinates...\n');

// Check 1: Athens/Attica region bounds
console.log('📍 CHECK 1: Geographic Bounds');
const issues = [];
const validBounds = {
    lat: { min: 37.0, max: 39.0 },
    lng: { min: 23.0, max: 24.5 }
};

POIs.forEach(poi => {
    if (poi.lat < validBounds.lat.min || poi.lat > validBounds.lat.max) {
        issues.push({
            id: poi.id,
            name: poi.name,
            issue: `Latitude ${poi.lat} outside Athens/Attica range (${validBounds.lat.min}-${validBounds.lat.max})`,
            coords: [poi.lat, poi.lng]
        });
    }
    if (poi.lng < validBounds.lng.min || poi.lng > validBounds.lng.max) {
        issues.push({
            id: poi.id,
            name: poi.name,
            issue: `Longitude ${poi.lng} outside Athens/Attica range (${validBounds.lng.min}-${validBounds.lng.max})`,
            coords: [poi.lat, poi.lng]
        });
    }
});

if (issues.length === 0) {
    console.log('✅ All POIs within Athens/Attica region\n');
} else {
    console.log(`❌ Found ${issues.length} POIs outside region:\n`);
    issues.forEach(i => console.log(`   POI ${i.id} (${i.name}): ${i.issue}`));
    console.log('');
}

// Check 2: Coordinate duplicates
console.log('📍 CHECK 2: Coordinate Duplicates');
const coordMap = {};
POIs.forEach(poi => {
    const key = `${poi.lat.toFixed(4)},${poi.lng.toFixed(4)}`;
    if (!coordMap[key]) coordMap[key] = [];
    coordMap[key].push({ id: poi.id, name: poi.name });
});

const duplicates = Object.entries(coordMap)
    .filter(([_, pois]) => pois.length > 1)
    .sort((a, b) => b[1].length - a[1].length);

if (duplicates.length === 0) {
    console.log('✅ No duplicate coordinates\n');
} else {
    console.log(`⚠️  Found ${duplicates.length} sets of duplicate coordinates:\n`);
    duplicates.slice(0, 10).forEach(([coords, pois]) => {
        console.log(`   ${coords}: ${pois.length} POIs`);
        pois.forEach(p => console.log(`      - POI ${p.id}: ${p.name}`));
    });
    if (duplicates.length > 10) {
        console.log(`   ... and ${duplicates.length - 10} more\n`);
    } else {
        console.log('');
    }
}

// Check 3: Suspicious patterns
console.log('📍 CHECK 3: Suspicious Coordinate Patterns');
const suspiciousPatterns = [];

// Check for rounded coordinates (might indicate approximations)
POIs.forEach(poi => {
    const latStr = poi.lat.toString();
    const lngStr = poi.lng.toString();
    
    // Check if coordinates are too round (e.g., 37.5, 23.0)
    if ((latStr.split('.')[1] || '').length <= 1 || (lngStr.split('.')[1] || '').length <= 1) {
        suspiciousPatterns.push({
            id: poi.id,
            name: poi.name,
            issue: 'Very rounded coordinates (possible approximation)',
            coords: [poi.lat, poi.lng]
        });
    }
});

if (suspiciousPatterns.length === 0) {
    console.log('✅ No suspicious coordinate patterns\n');
} else {
    console.log(`⚠️  Found ${suspiciousPatterns.length} POIs with suspicious patterns:\n`);
    suspiciousPatterns.slice(0, 5).forEach(p => {
        console.log(`   POI ${p.id} (${p.name}): ${p.coords.join(', ')}`);
    });
    if (suspiciousPatterns.length > 5) {
        console.log(`   ... and ${suspiciousPatterns.length - 5} more\n`);
    } else {
        console.log('');
    }
}

// Check 4: Known location verification for famous sites
console.log('📍 CHECK 4: Famous Sites Verification');
const knownLocations = {
    'The Parthenon': { lat: 37.9715, lng: 23.7267, tolerance: 0.001 },
    'Temple of Olympian Zeus': { lat: 37.9693, lng: 23.7331, tolerance: 0.001 },
    'Acropolis Museum': { lat: 37.9685, lng: 23.7285, tolerance: 0.001 },
    'Panathenaic Stadium': { lat: 37.9684, lng: 23.7409, tolerance: 0.001 },
    'Syntagma Square & Parliament': { lat: 37.9755, lng: 23.7348, tolerance: 0.001 },
    'National Archaeological Museum': { lat: 37.9890, lng: 23.7328, tolerance: 0.001 }
};

const locationErrors = [];
POIs.forEach(poi => {
    if (knownLocations[poi.name]) {
        const known = knownLocations[poi.name];
        const latDiff = Math.abs(poi.lat - known.lat);
        const lngDiff = Math.abs(poi.lng - known.lng);
        
        if (latDiff > known.tolerance || lngDiff > known.tolerance) {
            locationErrors.push({
                id: poi.id,
                name: poi.name,
                current: [poi.lat, poi.lng],
                expected: [known.lat, known.lng],
                difference: Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111000 // rough meters
            });
        }
    }
});

if (locationErrors.length === 0) {
    console.log('✅ All famous sites at correct locations\n');
} else {
    console.log(`❌ Found ${locationErrors.length} location errors:\n`);
    locationErrors.forEach(e => {
        console.log(`   POI ${e.id} (${e.name}):`);
        console.log(`      Current: ${e.current.join(', ')}`);
        console.log(`      Expected: ${e.expected.join(', ')}`);
        console.log(`      Difference: ~${Math.round(e.difference)}m\n`);
    });
}

// Summary
console.log('═══════════════════════════════════════');
console.log('📊 SUMMARY');
console.log('═══════════════════════════════════════');
console.log(`Total POIs analyzed: ${POIs.length}`);
console.log(`Out of bounds: ${issues.length}`);
console.log(`Duplicate coordinate sets: ${duplicates.length}`);
console.log(`Suspicious patterns: ${suspiciousPatterns.length}`);
console.log(`Famous site errors: ${locationErrors.length}`);
console.log('═══════════════════════════════════════\n');

if (issues.length === 0 && locationErrors.length === 0) {
    console.log('✨ All POI coordinates appear valid!');
} else {
    console.log('⚠️  Issues found that may need review.');
}

// Export detailed report
const report = {
    timestamp: new Date().toISOString(),
    totalPOIs: POIs.length,
    outOfBounds: issues,
    duplicates: duplicates.map(([coords, pois]) => ({ coords, count: pois.length, pois })),
    suspiciousPatterns,
    locationErrors,
    summary: {
        outOfBoundsCount: issues.length,
        duplicatesCount: duplicates.length,
        suspiciousPatternsCount: suspiciousPatterns.length,
        locationErrorsCount: locationErrors.length
    }
};

fs.writeFileSync(
    path.join(__dirname, '../poi_validation_report.json'),
    JSON.stringify(report, null, 2)
);

console.log('\n📄 Detailed report saved to: poi_validation_report.json');
