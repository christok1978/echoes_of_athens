const fs = require('fs');
const path = require('path');
const https = require('https');

const reportFile = path.resolve(__dirname, '../poi_corrections_report.md');
const appFile = path.resolve(__dirname, '../app.js');

let report = fs.readFileSync(reportFile, 'utf8');
let appCode = fs.readFileSync(appFile, 'utf8');

// Parse the report table
const lines = report.split('\n');
const missingPOIs = [];

for (const line of lines) {
    if (line.includes('❓ No result')) {
        const parts = line.split('|').map(p => p.trim());
        const id = parseInt(parts[1], 10);
        let name = parts[2];
        missingPOIs.push({ id, name });
    }
}

async function fetchCoords(name) {
    return new Promise((resolve) => {
        // Enhance query with 'Athens' or 'Greece'
        let query = encodeURIComponent(name + ' Greece');
        
        const options = {
            hostname: 'nominatim.openstreetmap.org',
            path: `/search?q=${query}&format=json&limit=1`,
            method: 'GET',
            headers: {
                'User-Agent': 'NodeJS_POI_Updater/1.0'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.length > 0) {
                        resolve({ lat: parseFloat(json[0].lat), lng: parseFloat(json[0].lon) });
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        });

        req.on('error', () => resolve(null));
        req.end();
    });
}

async function main() {
    console.log(`Found ${missingPOIs.length} missing POIs. Searching...`);
    let updatedCount = 0;
    
    for (const poi of missingPOIs) {
        console.log(`Searching for: ${poi.name}...`);
        let coords = await fetchCoords(poi.name);
        
        // Try fallback with just main name without parenthesis
        if (!coords && poi.name.includes('(')) {
            const shortName = poi.name.replace(/\\(.*\\)/, '').trim();
            console.log(`Fallback searching for: ${shortName}...`);
            coords = await fetchCoords(shortName);
        }

        if (coords) {
            console.log(`Found: ${coords.lat}, ${coords.lng}`);
            const regex = new RegExp(`(\\{\\s*"id":\\s*${poi.id},[\\s\\S]*?"lat":\\s*)([-0-9.]+)(,[\\s\\S]*?"lng":\\s*)([-0-9.]+)`, 'g');
            appCode = appCode.replace(regex, (match, p1, p2, p3, p4) => {
                return `${p1}${coords.lat}${p3}${coords.lng}`;
            });
            updatedCount++;
        } else {
            console.log(`Failed to find coordinates for: ${poi.name}`);
        }
        
        // Rate limit: Nominatim requires 1 sec delay
        await new Promise(r => setTimeout(r, 1100));
    }

    if (updatedCount > 0) {
        fs.writeFileSync(appFile, appCode, 'utf8');
        console.log(`Updated ${updatedCount} POIs in app.js.`);
    } else {
        console.log('No new coordinates found.');
    }
}

main();
