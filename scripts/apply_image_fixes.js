const fs = require('fs');

// Read app.js
let appJs = fs.readFileSync('./app.js', 'utf8');

// Critical fixes based on audit - only fix POIs with WRONG images
const fixes = [
    // Category 1: Monasteries wrongly showing Erechtheion temple
    { id: 42, find: '"id": 42,', findImage: 'erechtheion.png', newImage: 'byzantine_museum.png', reason: 'Kaisariani Monastery should show Byzantine architecture' },
    { id: 43, find: '"id": 43,', findImage: 'erechtheion.png', newImage: 'byzantine_museum.png', reason: 'Asteriou Monastery should show Byzantine architecture' },
    { id: 98, find: '"id": 98,', findImage: 'erechtheion.png', newImage: 'byzantine_museum.png', reason: 'Monastery of Kleiston should show Byzantine architecture' },
    
    // Category 2: Churches wrongly showing temples
    { id: 49, find: '"id": 49,', findImage: 'hephaestus.png', newImage: 'church_of_panagia_kapnikarea.jpg', reason: 'St. Demetrius church should not show temple' },
    { id: 48, find: '"id": 48,', findImage: 'tower_winds.png', newImage: 'church_of_panagia_kapnikarea.jpg', reason: 'Agia Dynami Church should show church' },
    
    // Category 3: Natural sites wrongly showing temples
    { id: 44, find: '"id": 44,', findImage: 'parthenon.png', newImage: 'lycabettus_hill.png', reason: 'Mount Parnitha should show natural landscape' },
    
    // Category 4: Walls wrongly showing temples
    { id: 51, find: '"id": 51,', findImage: 'parthenon.png', newImage: 'phyle.png', reason: 'Pelasgian Wall should show fortification' },
    { id: 87, find: '"id": 87,', findImage: 'parthenon.png', newImage: 'phyle.png', reason: 'Dema Wall should show fortification' },
    { id: 89, find: '"id": 89,', findImage: 'parthenon.png', newImage: 'phyle.png', reason: 'Diateichisma Wall should show fortification' },
    
    // Category 5: Mines/workshops wrongly showing temples
    { id: 41, find: '"id": 41,', findImage: 'olympian_zeus.png', newImage: 'penteli_quarries.png', reason: 'Lavrion Silver Mines should show quarry/mine' },
    { id: 88, find: '"id": 88,', findImage: 'olympian_zeus.png', newImage: 'penteli_quarries.png', reason: 'Agrileza Workshops should show quarry/industrial site' },
    
    // Category 6: Reservoirs/water features wrongly showing temples
    { id: 29, find: '"id": 29,', findImage: 'olympian_zeus.png', newImage: 'lake_vouliagmeni.png', reason: 'Hadrian Reservoir should show water feature' },
    
    // Category 7: Tumulus wrongly showing stadium
    { id: 38, find: '"id": 38,', findImage: 'panathenaic_stadium.png', newImage: 'phyle.png', reason: 'Tumulus of Marathon should show ancient mound/fortification' },
    
    // Category 8: Wrong temples - use generic temple or better match
    { id: 45, find: '"id": 45,', findImage: 'olympian_zeus.png', newImage: 'aphaia.png', reason: 'Temple of Poseidon at Sounion - different temple' },
    { id: 37, find: '"id": 37,', findImage: 'hephaestus.png', newImage: 'eleutherae.png', reason: 'Amphiaraion of Oropos - sanctuary site' },
    { id: 39, find: '"id": 39,', findImage: 'hephaestus.png', newImage: 'rhamnous.png', reason: 'Sanctuary of Artemis - different sanctuary' },
    
    // Category 9: Agora buildings wrongly showing Hephaestus
    { id: 53, find: '"id": 53,', findImage: 'hephaestus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'The Metroum - Agora building' },
    { id: 54, find: '"id": 54,', findImage: 'hephaestus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'Ancient Bouleuterion - Agora building' },
    { id: 55, find: '"id": 55,', findImage: 'hephaestus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'The Tholos - Agora building' },
    { id: 56, find: '"id": 56,', findImage: 'hephaestus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'Altar of Twelve Gods - Agora site' },
    { id: 57, find: '"id": 57,', findImage: 'hephaestus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'South Stoa I - Agora building' },
    
    // Category 10: Theatre-related wrongly showing main theatre
    { id: 46, find: '"id": 46,', findImage: 'theatre_dionysus.png', newImage: 'choragic_monument_of_lysicrates.jpg', reason: 'Choragic Monument - monument not theatre' },
    { id: 50, find: '"id": 50,', findImage: 'theatre_dionysus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'Stoa of Eumenes - colonnade not theatre' },
    { id: 52, find: '"id": 52,', findImage: 'theatre_dionysus.png', newImage: 'ancient_agora_of_athens.jpg', reason: 'Asclepieion - healing sanctuary not theatre' },
    { id: 95, find: '"id": 95,', findImage: 'theatre_dionysus.png', newImage: 'choragic_monument_of_lysicrates.jpg', reason: 'Choragic Monument of Nikias - monument not theatre' },
    
    // Category 11: Other Apollo/Artemis temples wrongly using Hephaestus
    { id: 83, find: '"id": 83,', findImage: 'hephaestus.png', newImage: 'aphaia.png', reason: 'Temple of Apollo Zoster - different temple' },
    { id: 84, find: '"id": 84,', findImage: 'hephaestus.png', newImage: 'aphaia.png', reason: 'Archaeological Site of Kolona - different temple' },
    { id: 94, find: '"id": 94,', findImage: 'hephaestus.png', newImage: 'rhamnous.png', reason: 'Temple of Artemis Agrotera - different temple' },
    { id: 96, find: '"id": 96,', findImage: 'hephaestus.png', newImage: 'aphaia.png', reason: 'Temple of Apollo Erithaseos - different temple' },
    
    // Category 12: Tower mismatches
    { id: 99, find: '"id": 99,', findImage: 'tower_winds.png', newImage: 'phyle.png', reason: 'Tower of Markellos - different tower/fortification' }
];

console.log(`\n=== APPLYING ${fixes.length} TARGETED FIXES ===\n`);

let appliedCount = 0;
let failedFixes = [];

fixes.forEach(fix => {
    console.log(`Fixing POI ${fix.id}: ${fix.reason}`);
    console.log(`  ${fix.findImage} → ${fix.newImage}`);
    
    // Find the POI entry and replace its image
    const poiPattern = new RegExp(
        `("id":\\s*${fix.id},\\s*"name":[^}]*?"image":\\s*)"images/${fix.findImage}"`,
        'g'
    );
    
    const newAppJs = appJs.replace(poiPattern, `$1"images/${fix.newImage}"`);
    
    if (newAppJs !== appJs) {
        appJs = newAppJs;
        appliedCount++;
        console.log(`  ✅ Applied\n`);
    } else {
        failedFixes.push(fix);
        console.log(`  ❌ Failed - pattern not found\n`);
    }
});

// Write back
fs.writeFileSync('./app.js', appJs);

console.log(`\n=== SUMMARY ===`);
console.log(`Successfully applied: ${appliedCount}/${fixes.length} fixes`);
if (failedFixes.length > 0) {
    console.log(`\nFailed fixes (may already be correct):`);
    failedFixes.forEach(f => console.log(`  POI ${f.id}`));
}

console.log('\n✅ app.js updated with image fixes');
console.log('Run npm run build and deploy to see changes');
