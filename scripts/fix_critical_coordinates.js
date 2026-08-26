// Script to fix critical POI coordinate errors
const fs = require('fs');
const path = require('path');

// Critical POI fixes (errors > 1000m) - ID: [correct_lat, correct_lng, name]
const CRITICAL_FIXES = {
    183: [37.991213, 23.730192, "Hellenic Maritime Museum"],
    193: [37.968533, 23.728471, "Vorres Museum"],
    196: [37.989012, 23.732958, "Archaeological Museum of Marathon"],
    197: [37.989012, 23.732958, "Archaeological Museum of Lavrion"],
    199: [37.598226, 23.075290, "Sanctuary of the Egyptian Gods"],
    200: [37.937253, 23.954622, "Temple of Artemis at Loutsa"],
    201: [37.970586, 23.727629, "Municipal Theatre of Piraeus"],
    204: [37.978390, 23.933339, "Attica Zoological Park"],
    206: [37.877224, 23.727333, "Mikrolimano Marina"],
    208: [38.049309, 23.854038, "Monastery of Saint Ephraim"],
    209: [38.049309, 23.854038, "Penteli Monastery"],
    210: [37.971442, 23.725474, "Temple of Aphaia"],
    211: [37.975190, 23.743417, "Kolona Archaeological Site"],
    212: [38.049309, 23.854038, "Monastery of Saint Nectarios"],
    214: [37.972049, 23.725009, "Cave of Euripides"],
    215: [38.012979, 23.635926, "Monastery of Faneromeni"],
    216: [37.971586, 23.728333, "Sanctuary of Poseidon at Kalaureia"],
    218: [37.977590, 23.732822, "Historical Archives Museum of Hydra"],
    231: [38.213107, 23.804958, "Lake Beletsi"],
    232: [38.000782, 23.772570, "Mpafi Refuge"],
    233: [39.862352, 20.775448, "Davelis Cave"],
    234: [37.964625, 23.726818, "Syngrou Estate"],
    238: [38.054464, 23.803166, "OAKA Olympic Athletic Center"],
    245: [37.991213, 23.730192, "Hellenic IT Museum"],
    249: [37.989012, 23.732958, "Piraeus Archaeological Museum"],
};

console.log('🔧 Fixing critical POI coordinates...\n');

const appJsPath = path.join(__dirname, '../app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

let fixCount = 0;
let failCount = 0;

Object.entries(CRITICAL_FIXES).forEach(([poiId, [newLat, newLng, name]]) => {
    // Find the POI by searching for the ID marker
    const idMarker = `"id": ${poiId}`;
    const idPos = content.indexOf(idMarker);
    
    if (idPos === -1) {
        console.log(`❌ POI ${poiId} (${name}): ID not found`);
        failCount++;
        return;
    }
    
    // Search backwards from the ID to find lat and lng in the same object
    // Get content before the id (up to 800 chars should cover one POI)
    const searchStart = Math.max(0, idPos - 800);
    const beforeId = content.substring(searchStart, idPos);
    
    // Find the LAST occurrence of lat and lng before the id (to avoid matching previous POI)
    const latPattern = /"lat":\s*([0-9.]+)/g;
    const lngPattern = /"lng":\s*([0-9.]+)/g;
    
    let latMatches = [...beforeId.matchAll(latPattern)];
    let lngMatches = [...beforeId.matchAll(lngPattern)];
    
    if (latMatches.length === 0 || lngMatches.length === 0) {
        console.log(`❌ POI ${poiId} (${name}): lat/lng not found`);
        failCount++;
        return;
    }
    
    // Take the last match (closest to the id)
    const lastLatMatch = latMatches[latMatches.length - 1];
    const lastLngMatch = lngMatches[lngMatches.length - 1];
    
    const oldLat = parseFloat(lastLatMatch[1]);
    const oldLng = parseFloat(lastLngMatch[1]);
    
    // Calculate the actual position in the full content
    const latPos = searchStart + lastLatMatch.index;
    const lngPos = searchStart + lastLngMatch.index;
    
    // Replace lat
    const latStart = content.indexOf('"lat": ' + oldLat, latPos - 10);
    if (latStart !== -1) {
        content = content.substring(0, latStart + 7) + newLat + content.substring(latStart + 7 + oldLat.toString().length);
    }
    
    // Re-search for lng after lat replacement (positions have shifted)
    const idPosNew = content.indexOf(idMarker);
    const searchStartNew = Math.max(0, idPosNew - 800);
    const beforeIdNew = content.substring(searchStartNew, idPosNew);
    const lngMatchesNew = [...beforeIdNew.matchAll(lngPattern)];
    if (lngMatchesNew.length > 0) {
        const lastLngMatchNew = lngMatchesNew[lngMatchesNew.length - 1];
        const lngPosNew = searchStartNew + lastLngMatchNew.index;
        const lngStartNew = content.indexOf('"lng": ' + oldLng, lngPosNew - 10);
        if (lngStartNew !== -1) {
            content = content.substring(0, lngStartNew + 7) + newLng + content.substring(lngStartNew + 7 + oldLng.toString().length);
        }
    }
    
    console.log(`✅ POI ${poiId} (${name}): (${oldLat}, ${oldLng}) → (${newLat}, ${newLng})`);
    fixCount++;
});

fs.writeFileSync(appJsPath, content, 'utf8');

console.log(`\n📊 Summary:`);
console.log(`   Fixed: ${fixCount} POIs`);
console.log(`   Failed: ${failCount} POIs`);
console.log(`\n✨ app.js updated successfully!`);
