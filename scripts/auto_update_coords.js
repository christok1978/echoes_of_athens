const fs = require('fs');
const path = require('path');

const reportFile = path.resolve(__dirname, '../poi_corrections_report.md');
const appFile = path.resolve(__dirname, '../app.js');

let report = fs.readFileSync(reportFile, 'utf8');
let appCode = fs.readFileSync(appFile, 'utf8');

// Parse the report table
const lines = report.split('\n');
const updates = {};

for (const line of lines) {
    if (line.includes('⚠️ Needs Update')) {
        const parts = line.split('|').map(p => p.trim());
        const id = parseInt(parts[1], 10);
        const officialCoords = parts[4]; // The 'Official (lat,lng)' column
        
        if (officialCoords && officialCoords !== 'N/A') {
            const [lat, lng] = officialCoords.split(',').map(s => parseFloat(s.trim()));
            updates[id] = { lat, lng };
        }
    }
}

// Update appCode
for (const [id, coords] of Object.entries(updates)) {
    console.log(`Updating ID ${id} to lat: ${coords.lat}, lng: ${coords.lng}`);
    const regex = new RegExp(`(\\{\\s*"id":\\s*${id},[\\s\\S]*?"lat":\\s*)([-0-9.]+)(,[\\s\\S]*?"lng":\\s*)([-0-9.]+)`, 'g');
    appCode = appCode.replace(regex, (match, p1, p2, p3, p4) => {
        return `${p1}${coords.lat}${p3}${coords.lng}`;
    });
}

fs.writeFileSync(appFile, appCode, 'utf8');
console.log('Finished updating app.js');
