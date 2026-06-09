const fs = require('fs');
const path = require('path');

const fileToUpdate = path.resolve(__dirname, '../app.js');
let content = fs.readFileSync(fileToUpdate, 'utf8');

const corrections = {
  4: { lat: 37.9683, lng: 23.7411 },
  14: { lat: 37.9692, lng: 23.7208 },
  17: { lat: 37.97639, lng: 23.72862 }, // Church of Panagia Kapnikarea
  18: { lat: 37.9715, lng: 23.7363 },
  19: { lat: 37.9733, lng: 23.7436 },
  26: { lat: 37.9630, lng: 23.7383 },
  29: { lat: 37.9790, lng: 23.7417 },
  31: { lat: 37.97515, lng: 23.73020 }, // Little Metropolis Church
  32: { lat: 37.97529, lng: 23.73007 }, // Metropolitan Cathedral of Athens
  34: { lat: 37.9778, lng: 23.7169 },   // Kerameikos Archaeological Museum
  36: { lat: 38.0420, lng: 23.5392 },   // Sanctuary of Demeter (Eleusis)
  38: { lat: 38.1175, lng: 23.9737 },
  40: { lat: 37.7381, lng: 24.0538 },   // Thorikos Ancient Theater
  41: { lat: 37.7088, lng: 24.0205 },   // Lavrion Silver Mines
  42: { lat: 37.9607, lng: 23.7985 },   // Kaisariani Monastery
  43: { lat: 37.9696, lng: 23.8112 },
  44: { lat: 38.1733, lng: 23.7175 },   // Mount Parnitha National Park
  47: { lat: 37.97153, lng: 23.72574 }, // Pedestal of Agrippa
  48: { lat: 37.9752, lng: 23.7321 },
  59: { lat: 37.9757, lng: 23.7423 },
  60: { lat: 37.9754, lng: 23.7390 },
  61: { lat: 37.9630, lng: 23.7253 },
  62: { lat: 37.9724, lng: 23.7281 }
};

// Match the POIs array text block
const match = content.match(/const POIs = (\[([\s\S]*?)\]);/);
if (!match) {
  console.error("Could not find POIs array in app.js");
  process.exit(1);
}

const originalArrayText = match[1];
const POIs = JSON.parse(originalArrayText);

// Apply corrections
for (const poi of POIs) {
  if (corrections[poi.id]) {
    console.log(`Updating ${poi.name} (ID: ${poi.id}): lat ${poi.lat} -> ${corrections[poi.id].lat}, lng ${poi.lng} -> ${corrections[poi.id].lng}`);
    poi.lat = corrections[poi.id].lat;
    poi.lng = corrections[poi.id].lng;
  }
}

// Convert the updated POIs array back to pretty formatted JS array text
const updatedArrayText = JSON.stringify(POIs, null, 4);

// Replace the original array with the new one in the file content
// We wrap it back into "const POIs = ...;" format
const newPOIsStatement = `const POIs = ${updatedArrayText};`;
const updatedContent = content.replace(/const POIs = \[[\s\S]*?\];/, newPOIsStatement);

fs.writeFileSync(fileToUpdate, updatedContent, 'utf8');
console.log("Successfully updated app.js with corrected coordinates.");
