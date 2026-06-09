// scripts/check_poi_coords.js
// This script checks each POI's stored latitude/longitude against the coordinates
// returned by the OpenStreetMap Nominatim geocoding service and generates a report.

const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Helper: haversine distance in meters
function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371000; // earth radius in meters
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Query Photon for a place name. Returns { lat, lon } or null.
function geocode(name) {
  const query = encodeURIComponent(name + ', Athens, Greece');
  const url = `https://photon.komoot.io/api/?q=${query}&limit=1`;
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AntigravityPOI/1.1' } }, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP status ${res.statusCode}: ${data.substring(0, 200)}`));
            return;
          }
          try {
            const json = JSON.parse(data);
            if (json.features && json.features.length > 0) {
              const coords = json.features[0].geometry.coordinates;
              // Photon returns coordinates as [lng, lat]
              resolve({ lat: coords[1], lon: coords[0] });
            } else {
              resolve(null);
            }
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e.message}. Data: ${data.substring(0, 200)}`));
          }
        });
      })
      .on('error', reject);
  });
}

async function loadPOIs() {
  const appPath = path.resolve(__dirname, '../app.js');
  const content = await readFileAsync(appPath, 'utf8');
  const match = content.match(/const POIs = (\[([\s\S]*?)\]);/);
  if (!match) throw new Error('Unable to locate POIs array in app.js');
  // Parse the array safely using JSON.parse().
  const arrayText = match[1];
  const POIs = JSON.parse(arrayText);
  return POIs;
}

async function main() {
  const toleranceMeters = 100; // default tolerance
  const POIs = await loadPOIs();
  const reportLines = [];
  reportLines.push('# POI Coordinate Verification Report');
  reportLines.push('');
  reportLines.push(`Generated on ${new Date().toISOString()}`);
  reportLines.push('');
  reportLines.push('| ID | Name | Stored (lat,lng) | Official (lat,lng) | Distance (m) | Status |');
  reportLines.push('|---|------|-------------------|--------------------|--------------|--------|');

  for (const poi of POIs) {
    const official = await geocode(poi.name);
    if (!official) {
      reportLines.push(`| ${poi.id} | ${poi.name} | ${poi.lat}, ${poi.lng} | N/A | N/A | ❓ No result |`);
      continue;
    }
    const dist = haversine(poi.lat, poi.lng, official.lat, official.lon);
    const status = dist <= toleranceMeters ? '✅ OK' : '⚠️ Needs Update';
    reportLines.push(
      `| ${poi.id} | ${poi.name} | ${poi.lat.toFixed(6)}, ${poi.lng.toFixed(6)} | ${official.lat.toFixed(6)}, ${official.lon.toFixed(6)} | ${Math.round(dist)} | ${status} |`
    );
    // Respect API rate limit (200ms delay for Photon is highly conservative)
    await new Promise((r) => setTimeout(r, 200));
  }

  const reportPath = path.resolve(__dirname, '../poi_corrections_report.md');
  await writeFileAsync(reportPath, reportLines.join('\n'), 'utf8');
  console.log('Report written to', reportPath);
}

main().catch((e) => {
  console.error('Error during POI verification:', e);
  process.exit(1);
});
