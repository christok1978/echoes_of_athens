const fs = require('fs');

// Read the current POI data
const appJs = fs.readFileSync('./app.js', 'utf8');

// Available images
const availableImages = [
    'academy_athens.png',
    'acropolis_museum.png',
    'aigosthena.png',
    'anafiotika.png',
    'ancient_agora_of_athens.jpg',
    'aphaia.png',
    'areopagus_hill.jpg',
    'aristotle_s_lyceum.jpg',
    'benaki_museum.png',
    'byzantine_museum.png',
    'choragic_monument_of_lysicrates.jpg',
    'church_of_panagia_kapnikarea.jpg',
    'cycladic_art.png',
    'eleutherae.png',
    'emst.png',
    'erechtheion.png',
    'first_cemetery_of_athens.jpg',
    'hadrian_library.png',
    'hadrians_arch.png',
    'hephaestus.png',
    'holy_apostles.png',
    'kerameikos_archaeological_site.jpg',
    'koutouki_cave.png',
    'lake_vouliagmeni.png',
    'little_metropolis.png',
    'lycabettus_hill.png',
    'marathon_dam.png',
    'metropolitan_cathedral.png',
    'monastiraki_square.png',
    'motor_museum.png',
    'national_archaeological_museum.jpg',
    'national_gallery.png',
    'national_library_of_greece.jpg',
    'numismatic_museum.png',
    'odeon_herodes.png',
    'olympian_zeus.png',
    'panathenaic_stadium.png',
    'parthenon.png',
    'penteli_quarries.png',
    'philopappos_monument.png',
    'phyle.png',
    'piraeus_museum.png',
    'placeholder.png',
    'pnyx_hill.jpg',
    'rhamnous.png',
    'roman_agora.png',
    'schinias.png',
    'socrates_prison.png',
    'st_john_hunter.png',
    'syntagma_square.png',
    'theatre_dionysus.png',
    'tower_winds.png',
    'university_of_athens_propylaea.jpg',
    'war_museum.png',
    'zappeion_hall.jpg'
];

// Smart mapping rules
const mappingRules = {
    // Specific sites (exact matches)
    'The Parthenon': 'parthenon.png',
    'Erechtheion': 'erechtheion.png',
    'Temple of Olympian Zeus': 'olympian_zeus.png',
    'Temple of Hephaestus': 'hephaestus.png',
    'Panathenaic Stadium': 'panathenaic_stadium.png',
    'Tower of the Winds': 'tower_winds.png',
    'Theatre of Dionysus': 'theatre_dionysus.png',
    'Ancient Agora of Athens': 'ancient_agora_of_athens.jpg',
    'Acropolis Museum': 'acropolis_museum.png',
    'National Archaeological Museum': 'national_archaeological_museum.jpg',
    'Byzantine and Christian Museum': 'byzantine_museum.png',
    
    // Pattern-based mappings (keywords)
    patterns: [
        { keywords: ['monastery', 'monaster'], image: 'byzantine_museum.png' },
        { keywords: ['church', 'chapel'], image: 'church_of_panagia_kapnikarea.jpg' },
        { keywords: ['byzantine'], image: 'byzantine_museum.png' },
        { keywords: ['museum'], image: 'benaki_museum.png' },
        { keywords: ['cemetery', 'tomb'], image: 'first_cemetery_of_athens.jpg' },
        { keywords: ['cave'], image: 'koutouki_cave.png' },
        { keywords: ['lake', 'water'], image: 'lake_vouliagmeni.png' },
        { keywords: ['wall', 'fortification'], image: 'phyle.png' },
        { keywords: ['quarry', 'quarries'], image: 'penteli_quarries.png' },
        { keywords: ['hill', 'mount'], image: 'lycabettus_hill.png' },
        { keywords: ['agora'], image: 'ancient_agora_of_athens.jpg' },
        { keywords: ['stoa'], image: 'ancient_agora_of_athens.jpg' },
        { keywords: ['roman'], image: 'roman_agora.png' },
        { keywords: ['theatre', 'theater', 'odeon'], image: 'theatre_dionysus.png' },
        { keywords: ['stadium'], image: 'panathenaic_stadium.png' },
        { keywords: ['library'], image: 'hadrian_library.png' },
        { keywords: ['academy', 'plato'], image: 'academy_athens.png' },
        { keywords: ['temple'], image: 'hephaestus.png' }, // generic temple fallback
        { keywords: ['archaeological'], image: 'ancient_agora_of_athens.jpg' },
        { keywords: ['sanctuary'], image: 'eleutherae.png' },
        { keywords: ['gate'], image: 'hadrians_arch.png' },
        { keywords: ['arch'], image: 'hadrians_arch.png' },
        { keywords: ['choragic', 'monument'], image: 'choragic_monument_of_lysicrates.jpg' },
        { keywords: ['prison'], image: 'socrates_prison.png' },
        { keywords: ['square'], image: 'syntagma_square.png' },
        { keywords: ['lyceum'], image: 'aristotle_s_lyceum.jpg' }
    ]
};

// Extract all POIs
const poiRegex = /\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)"[\s\S]*?"lat":\s*([\d.]+),\s*"lng":\s*([\d.]+),\s*"image":\s*"([^"]+)"/g;
const pois = [];
let match;

while ((match = poiRegex.exec(appJs)) !== null) {
    pois.push({
        id: parseInt(match[1]),
        name: match[2],
        lat: parseFloat(match[3]),
        lng: parseFloat(match[4]),
        currentImage: match[5]
    });
}

console.log(`Found ${pois.length} POIs with images assigned\n`);

// Generate smart mappings
const fixes = [];
pois.forEach(poi => {
    const nameLower = poi.name.toLowerCase();
    let suggestedImage = poi.currentImage;
    let reason = 'Keep current';
    let confidence = 'low';
    
    // Check exact matches first
    if (mappingRules[poi.name]) {
        suggestedImage = `images/${mappingRules[poi.name]}`;
        reason = 'Exact match';
        confidence = 'high';
    } else {
        // Check patterns
        for (const pattern of mappingRules.patterns) {
            if (pattern.keywords.some(kw => nameLower.includes(kw))) {
                suggestedImage = `images/${pattern.image}`;
                reason = `Matched keyword: ${pattern.keywords[0]}`;
                confidence = 'medium';
                break;
            }
        }
    }
    
    // Check if change is needed
    if (suggestedImage !== poi.currentImage) {
        fixes.push({
            id: poi.id,
            name: poi.name,
            currentImage: poi.currentImage,
            suggestedImage: suggestedImage,
            reason: reason,
            confidence: confidence
        });
    }
});

console.log(`\n=== PROPOSED FIXES: ${fixes.length} POIs ===\n`);

// Group by confidence
const high = fixes.filter(f => f.confidence === 'high');
const medium = fixes.filter(f => f.confidence === 'medium');
const low = fixes.filter(f => f.confidence === 'low');

console.log(`High confidence: ${high.length}`);
console.log(`Medium confidence: ${medium.length}`);
console.log(`Low confidence: ${low.length}\n`);

console.log('=== HIGH CONFIDENCE FIXES ===\n');
high.forEach(fix => {
    console.log(`POI ${fix.id}: ${fix.name}`);
    console.log(`  Current: ${fix.currentImage}`);
    console.log(`  Suggested: ${fix.suggestedImage}`);
    console.log(`  Reason: ${fix.reason}\n`);
});

console.log('\n=== MEDIUM CONFIDENCE FIXES (Sample) ===\n');
medium.slice(0, 10).forEach(fix => {
    console.log(`POI ${fix.id}: ${fix.name}`);
    console.log(`  ${fix.currentImage} → ${fix.suggestedImage}`);
    console.log(`  Reason: ${fix.reason}\n`);
});

if (medium.length > 10) {
    console.log(`... and ${medium.length - 10} more medium confidence fixes\n`);
}

// Save full report
const report = {
    timestamp: new Date().toISOString(),
    totalPOIs: pois.length,
    proposedFixes: fixes.length,
    byConfidence: {
        high: high.length,
        medium: medium.length,
        low: low.length
    },
    fixes: fixes
};

fs.writeFileSync('image_fix_plan.json', JSON.stringify(report, null, 2));
console.log('\n✅ Full fix plan saved to: image_fix_plan.json');
console.log(`\nReady to apply ${fixes.length} fixes automatically.`);
