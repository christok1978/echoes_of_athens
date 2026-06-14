const fs = require('fs');
const path = require('path');

const reportFile = path.resolve(__dirname, '../poi_corrections_report.md');
const appFile = path.resolve(__dirname, '../app.js');

let report = fs.readFileSync(reportFile, 'utf8');
let appCode = fs.readFileSync(appFile, 'utf8');

const lines = report.split('\n');

// Build a map of name -> coords for all ✅ OK and successfully found POIs
const knownCoords = {};
const missingPOIs = [];

for (const line of lines) {
    if (line.includes('|')) {
        const parts = line.split('|').map(p => p.trim());
        const id = parseInt(parts[1], 10);
        const name = parts[2];
        const official = parts[4];
        
        if (official && official !== 'N/A' && official !== '') {
            const [lat, lng] = official.split(',').map(s => parseFloat(s.trim()));
            knownCoords[name] = { lat, lng };
            // also store by lowercase for easier matching
            knownCoords[name.toLowerCase()] = { lat, lng };
        } else if (line.includes('❓ No result')) {
            missingPOIs.push({ id, name });
        }
    }
}

// Hand-picked fallbacks or string matching
const fallbacks = [
    { match: 'Kerameikos', target: 'Kerameikos Archaeological Site' },
    { match: 'Technopolis', target: 'Technopolis (Gazi)' },
    { match: 'Agora', target: 'Ancient Agora of Athens' }, // default to Ancient Agora
    { match: 'Roman Agora', target: 'Roman Agora of Athens' },
    { match: 'Stoa of Attalos', target: 'Stoa of Attalos' },
    { match: 'Olympian Zeus', target: 'Temple of Olympian Zeus' },
    { match: 'National Museum', target: 'National Archaeological Museum' },
    { match: 'Mycenaean Golden', target: 'National Archaeological Museum' },
    { match: 'Antikythera Mechanism', target: 'National Archaeological Museum' },
    { match: 'First Cemetery', target: 'First Cemetery of Athens' },
    { match: 'Tomb of Andreas Papandreou', target: 'First Cemetery of Athens' },
    { match: 'Tomb of Constantine Kanaris', target: 'First Cemetery of Athens' },
    { match: 'Syntagma Metro', target: 'Syntagma Square & Parliament' },
    { match: 'Cape Sounion', target: 'Temple of Poseidon at Sounion' },
    { match: 'National Garden', target: 'National Garden' }, // if we have it, else Syntagma
    { match: 'Areopagus Hill', target: 'Areopagus Hill (Mars Hill)' },
    { match: 'Pnyx Hill', target: 'Pnyx Hill' },
    { match: 'Metropolitan Cathedral', target: 'Metropolitan Cathedral of Athens' },
    { match: 'Philopappos', target: 'Philopappos Monument' },
    { match: 'Hadrian’s Aqueduct', target: "Hadrian's Reservoir (Dexameni)" },
    { match: 'Sanctuary of Demeter (Eleusis)', coords: { lat: 38.0416, lng: 23.5383 } },
    { match: 'Lavrion Silver Mines', coords: { lat: 37.712, lng: 24.015 } },
    { match: 'Agrileza Silver Workshops', coords: { lat: 37.6744, lng: 24.015 } },
    { match: 'Mount Penteli Ancient Quarries', coords: { lat: 38.0494, lng: 23.8824 } },
    { match: 'Piraeus Archaeological Museum', coords: { lat: 37.9367, lng: 23.6442 } },
    { match: 'Agia Irene Church', coords: { lat: 37.9769, lng: 23.7289 } },
    { match: 'Panagia Grigoroussa', coords: { lat: 37.9751, lng: 23.7275 } },
    { match: 'Agios Nikolaos Ragavas', coords: { lat: 37.9729, lng: 23.7291 } },
    { match: 'Phaleron Captives Grave Site', coords: { lat: 37.9408, lng: 23.6885 } },
    { match: 'Church of Panagia Kapnikarea', coords: { lat: 37.9763, lng: 23.7286 } },
    { match: 'Nymphs Hill', coords: { lat: 37.9737, lng: 23.7185 } }
];

let updatedCount = 0;

for (const poi of missingPOIs) {
    let coordsToApply = null;
    
    // Check fallbacks
    for (const fb of fallbacks) {
        if (poi.name.includes(fb.match)) {
            if (fb.coords) {
                coordsToApply = fb.coords;
            } else if (knownCoords[fb.target]) {
                coordsToApply = knownCoords[fb.target];
            } else if (fb.target === 'National Garden') {
                 coordsToApply = knownCoords['Syntagma Square & Parliament'];
            } else if (fb.match === 'Roman Agora') {
                 coordsToApply = knownCoords['Roman Agora of Athens'];
            }
            break;
        }
    }
    
    // If fallback didn't catch it and it's missing coords
    if (!coordsToApply) {
         console.log(`Still no coords for ${poi.name}. Using Syntagma Square as default.`);
         coordsToApply = knownCoords['Syntagma Square & Parliament'];
    }
    
    if (coordsToApply) {
        console.log(`Updating ${poi.name} to fallback coords: ${coordsToApply.lat}, ${coordsToApply.lng}`);
        const regex = new RegExp(`(\\{\\s*"id":\\s*${poi.id},[\\s\\S]*?"lat":\\s*)([-0-9.]+)(,[\\s\\S]*?"lng":\\s*)([-0-9.]+)`, 'g');
        appCode = appCode.replace(regex, (match, p1, p2, p3, p4) => {
            return `${p1}${coordsToApply.lat}${p3}${coordsToApply.lng}`;
        });
        updatedCount++;
    }
}

fs.writeFileSync(appFile, appCode, 'utf8');
console.log(`Applied fallback coordinates to ${updatedCount} POIs.`);
