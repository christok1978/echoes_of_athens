const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('app.js', 'utf8');
const match = content.match(/const POIs = (\[([\s\S]*?)\]);/);
if (match) {
  const POIs = new Function('return ' + match[1])();
  console.log(JSON.stringify(POIs.map(p => ({ id: p.id, name: p.name, lat: p.lat, lng: p.lng })), null, 2));
} else {
  console.log("No POIs found");
}
