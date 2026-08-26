// Fix critical POI coordinates with errors > 1000 meters
// Based on poi_corrections_report.md

const fs = require('fs');
const path = require('path');

// Map of POI ID to [correct_lat, correct_lng] from official coordinates
const FIXES = {
    // Critical fixes (>1000m errors)
    183: [37.9367, 23.6442],     // Hellenic Maritime Museum (was 9998m off)
    193: [37.954, 23.8643],      // Vorres Museum (was 12017m off)  
    196: [38.1213, 23.9482],     // Archaeological Museum of Marathon (was 23907m off)
    197: [37.7144, 24.056],      // Archaeological Museum of Lavrion (was 41676m off)
    199: [38.1182, 23.9782],     // Sanctuary of Egyptian Gods (was 98113m off!)
    200: [37.9644, 24.0041],     // Temple of Artemis at Loutsa (was 5285m off)
    201: [37.9431, 23.6473],     // Municipal Theatre of Piraeus (was 7677m off)
    204: [37.9818, 23.9103],     // Attica Zoological Park (was 2055m off)
    206: [37.9385, 23.6592],     // Mikrolimano Marina (was 9064m off)
    208: [38.0933, 23.9575],     // Monastery of Saint Ephraim (was 10293m off)
    209: [38.0568, 23.8824],     // Penteli Monastery (was 2619m off)
    210: [37.7547, 23.5325],     // Temple of Aphaia (was 29459m off!)
    211: [37.7478, 23.4246],     // Kolona Archaeological Site (was 37718m off!)
    212: [37.7475, 23.483],      // Monastery of Saint Nectarios (was 46756m off!)
    214: [37.8864, 23.4619],     // Cave of Euripides (was 24965m off!)
    215: [37.9866, 23.4281],     // Monastery of Faneromeni (was 18445m off!)
    216: [37.5255, 23.4735],     // Sanctuary of Poseidon at Kalaureia (was 54428m off!)
    218: [37.3503, 23.4665],     // Historical Archives Museum of Hydra (was 73585m off!)
    231: [38.2217, 23.7744],     // Lake Beletsi (was 2835m off)
    232: [38.1682, 23.7228],     // Mpafi Refuge (was 19119m off!)
    233: [38.0722, 23.8761],     // Davelis Cave (was 333854m off!) - already correct
    234: [38.0664, 23.8114],     // Syngrou Estate (was 13527m off)
    238: [38.0378, 23.7844],     // OAKA Olympic Athletic Center (was 2477m off)
    245: [37.9542, 23.6811],     // Hellenic IT Museum (was 5954m off)
    249: [37.9367, 23.6444],     // Piraeus Archaeological Museum (was 9701m off)
    
    // Medium priority fixes (>200m errors)
    74: [37.929251, 23.709598],  // Eleutherae Ancient Fortress (was 284m off)
    109: [37.972590, 23.724641], // Temple of Ares (was 273m off)
    180: [37.941042, 23.693306], // Stavros Niarchos Foundation (was 169m off)
    181: [37.940109, 23.696577], // Eugenides Foundation Planetarium (was 282m off)
    185: [37.979174, 23.720277], // Benaki Museum of Islamic Art (was 202m off)
    190: [38.074368, 23.814649], // Goulandris Natural History Museum (was 194m off)
    194: [37.716317, 24.051124], // Mineralogical Museum of Lavrion (was 320m off)
    198: [37.924606, 23.996985], // Archaeological Museum of Brauron (was 327m off)
    203: [38.010599, 23.642736], // Diomedes Botanical Garden (was 584m off)
    207: [37.932052, 23.681115], // Flisvos Marina (was 359m off)
    213: [37.747231, 23.429646], // Tower of Markellos (was 226m off)
    217: [37.499493, 23.452344], // Poros Clock Tower (was 181m off)
    220: [37.26762, 23.154344],  // Bouboulina's Museum (was 634m off)
    221: [37.998632, 23.343995], // Fountain of Theagenes (was 517m off)
    222: [37.991368, 23.708381], // Plato's Academy Archaeological Site (was 654m off)
    228: [37.976254, 23.738362], // B. & M. Theocharakis Foundation (was 131m off)
    229: [38.034803, 23.791091], // Athens Olympic Museum (was 625m off)
    235: [37.810009, 23.77373],  // Temple of Apollo Zoster (was 346m off)
    236: [38.1471, 23.228613],   // Aigosthena Fortress (was 114m off)
    239: [38.037187, 23.740932], // AEK OPAP Arena (was 435m off)
    240: [37.993755, 23.737995], // Pedion tou Areos (was 319m off)
    244: [37.97682, 23.722763],  // Museum of Illusions Athens (was 119m off)
    246: [37.975524, 23.730786], // Maria Callas Museum (was 111m off)
    247: [38.088257, 23.808172], // OTE Telecommunications Museum (was 587m off)
};

console.log('🔧 Fixing POI coordinates from poi_corrections_report.md...\n');

const appJsPath = path.join(__dirname, '../app.js');
let content = fs.readFileSync(appJsPath, 'utf8');
let fixCount = 0;

for (const [poiId, [newLat, newLng]] of Object.entries(FIXES)) {
    // Find the POI by ID
    const idMarker = `"id": ${poiId}`;
    const idPos = content.indexOf(idMarker);
    
    if (idPos === -1) {
        console.log(`⚠️  POI ${poiId}: Not found`);
        continue;
    }
    
    // Search backwards to find lat/lng
    const before = content.substring(Math.max(0, idPos - 800), idPos);
    const latMatches = [...before.matchAll(/"lat":\s*([0-9.]+)/g)];
    const lngMatches = [...before.matchAll(/"lng":\s*([0-9.]+)/g)];
    
    if (latMatches.length === 0 || lngMatches.length === 0) {
        console.log(`⚠️  POI ${poiId}: Could not find lat/lng`);
        continue;
    }
    
    const oldLat = latMatches[latMatches.length - 1][1];
    const oldLng = lngMatches[lngMatches.length - 1][1];
    
    // Replace using a more targeted approach
    const searchText = `"lat": ${oldLat}`;
    const replaceText = `"lat": ${newLat}`;
    const beforeReplace = content;
    content = content.replace(searchText, replaceText);
    
    if (content === beforeReplace) {
        console.log(`⚠️  POI ${poiId}: Lat replacement failed`);
        continue;
    }
    
    const searchText2 = `"lng": ${oldLng}`;
    const replaceText2 = `"lng": ${newLng}`;
    const beforeReplace2 = content;
    content = content.replace(searchText2, replaceText2);
    
    if (content === beforeReplace2) {
        console.log(`⚠️  POI ${poiId}: Lng replacement failed`);
        continue;
    }
    
    console.log(`✅ POI ${poiId}: (${oldLat}, ${oldLng}) → (${newLat}, ${newLng})`);
    fixCount++;
}

fs.writeFileSync(appJsPath, content, 'utf8');

console.log(`\n📊 Fixed ${fixCount}/${Object.keys(FIXES).length} POIs`);
console.log('✨ Done! Run tests to verify: npm test');
