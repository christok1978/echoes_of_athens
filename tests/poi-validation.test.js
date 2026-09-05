// POI Data Validation Tests
// Run with: node --test tests/poi-validation.test.js

const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

// Load POIs from app.js
function extractPOIs() {
    const appJs = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
    const poisMatch = appJs.match(/const POIs = (\[[\s\S]*?\n\];)/);
    if (!poisMatch) throw new Error('Could not extract POIs from app.js');
    
    // Safely evaluate the POIs array
    const pois = eval(poisMatch[1]);
    return pois;
}

const POIs = extractPOIs();

describe('POI Data Validation', () => {
    test('should have POIs loaded', () => {
        assert.ok(POIs, 'POIs array should exist');
        assert.ok(POIs.length > 0, 'POIs array should not be empty');
        console.log(`   ℹ Loaded ${POIs.length} POIs`);
    });

    test('all POIs should have required fields', () => {
        const requiredFields = ['id', 'name', 'lat', 'lng', 'description', 'audioText'];
        
        POIs.forEach((poi, index) => {
            requiredFields.forEach(field => {
                assert.ok(
                    poi.hasOwnProperty(field),
                    `POI at index ${index} (${poi.name || 'unnamed'}) missing ${field}`
                );
            });
        });
    });

    test('all POIs should have valid coordinates (Athens/Attica region)', () => {
        const failures = [];
        
        POIs.forEach(poi => {
            // Athens/Attica region bounds (approximate)
            const validLatRange = [37.0, 39.0];  // Latitude: 37°N to 39°N
            const validLngRange = [23.0, 24.5];   // Longitude: 23°E to 24.5°E
            
            if (poi.lat < validLatRange[0] || poi.lat > validLatRange[1]) {
                failures.push(`POI ${poi.id} (${poi.name}): lat ${poi.lat} outside valid range ${validLatRange}`);
            }
            
            if (poi.lng < validLngRange[0] || poi.lng > validLngRange[1]) {
                failures.push(`POI ${poi.id} (${poi.name}): lng ${poi.lng} outside valid range ${validLngRange}`);
            }
        });
        
        if (failures.length > 0) {
            console.log('\n   ⚠️  Coordinate validation failures:');
            failures.forEach(f => console.log(`      ${f}`));
        }
        
        assert.strictEqual(failures.length, 0, `${failures.length} POIs have invalid coordinates`);
    });

    test('all POI IDs should be unique', () => {
        const ids = POIs.map(poi => poi.id);
        const uniqueIds = [...new Set(ids)];
        
        assert.strictEqual(
            ids.length,
            uniqueIds.length,
            `Found ${ids.length - uniqueIds.length} duplicate IDs`
        );
    });

    test('POI names should be unique (case-insensitive)', () => {
        const nameMap = {};
        POIs.forEach((poi) => {
            const key = poi.name.trim().toLowerCase();
            if (!nameMap[key]) nameMap[key] = [];
            nameMap[key].push(`${poi.id}:${poi.name}`);
        });
        const duplicates = Object.entries(nameMap).filter(([, list]) => list.length > 1);
        assert.deepStrictEqual(
            duplicates,
            [],
            duplicates.map(([name, list]) => `"${name}" → ${list.join(', ')}`).join('\n')
        );
    });

    test('known same-place aliases should not both exist', () => {
        const names = new Set(POIs.map((poi) => poi.name.trim().toLowerCase()));
        const aliasGroups = [
            ['sanctuary of artemis (vravrona)', 'sanctuary of artemis at brauron', 'brauron sanctuary of artemis'],
            ['temple of aphaia', 'sanctuary of aphaia'],
            ['kolona archaeological site', 'archaeological site of kolona'],
            ['plato\'s academy archaeological site', 'plato\'s academy archaeological park', 'plato\'s academy - first university'],
            ['national gallery – alexandros soutsos museum', 'national gallery – alexandros soutzos museum'],
            ['metropolitan cathedral of athens', 'metropolitan cathedral of athens (mitropoli)'],
            ['little metropolis church', 'little metropolis (agios eleftherios)'],
            ['theatre of thorikos', 'thorikos ancient theater', 'theatre of thorikos - world\'s oldest'],
            ['marathon soros (burial mound)', 'tumulus of marathon'],
            ['eleusis - sanctuary of the mysteries', 'sanctuary of demeter (eleusis)'],
            ['amphiareion of oropos', 'amphiaraion of oropos'],
            ['mount lycabettus', 'lycabettus hill'],
            ['mount pentelikon marble quarries', 'mount penteli ancient quarries', 'ancient penteli marble quarries'],
            ['aegosthena - fortress with tallest towers', 'aigosthena fortress'],
            ['eleutherae (goura castle)', 'eleutherae ancient fortress'],
            ['zappeion megaron', 'zappeion hall'],
            ['lake vouliagmeni (thermal lake)', 'lake vouliagmeni'],
            ['koutouki cave, paiania', 'koutouki cave'],
            ['davelis cave (penteli cave)', 'davelis cave'],
            ['bafi mountain refuge, parnitha', 'mpafi refuge'],
            ['tatoi forest & former royal estate', 'tatoi royal palace'],
            ['lake beletsi, mount parnitha', 'lake beletsi'],
            ['parnitha national park', 'mount parnitha national park'],
            ['schinias beach & national park', 'schinias national park', 'schinias national park (pine forest)'],
            ['valanaris waterfall, drafi', 'valanaris waterfall'],
            ['marathon lake & dam', 'marathon dam'],
            ['rhamnous fortress and temple', 'rhamnous archaeological site'],
            ['ancient silver mines of laurion', 'lavrion silver mines'],
            ['aristotle\'s lyceum - peripatetic school', 'aristotle\'s lyceum'],
            ['phyle fortress - birthplace of democracy\'s restoration', 'phyle fortress'],
            ['monastery of kleiston, mount parnitha', 'monastery of kleiston'],
            ['monastery of saint ephraim, nea makri', 'monastery of saint ephraim'],
            ['monastery of faneromeni, salamis', 'monastery of faneromeni']
        ];

        const collisions = [];
        aliasGroups.forEach((group) => {
            const present = group.filter((name) => names.has(name));
            if (present.length > 1) {
                collisions.push(present.join(' + '));
            }
        });
        assert.deepStrictEqual(collisions, [], `Same-place aliases still present:\n${collisions.join('\n')}`);
    });

    test('POI IDs should be sequential starting from 0', () => {
        POIs.forEach((poi, index) => {
            assert.strictEqual(
                poi.id,
                index,
                `POI at index ${index} has id ${poi.id}, expected ${index}`
            );
        });
    });

    test('all POIs should have non-empty names', () => {
        POIs.forEach(poi => {
            assert.ok(poi.name, `POI ${poi.id} has empty name`);
            assert.ok(poi.name.trim().length > 0, `POI ${poi.id} name is whitespace only`);
        });
    });

    test('all POIs should have descriptions of reasonable length', () => {
        const failures = [];
        
        POIs.forEach(poi => {
            if (!poi.description || poi.description.trim().length < 20) {
                failures.push(`POI ${poi.id} (${poi.name}): description too short`);
            }
            if (poi.description && poi.description.length > 500) {
                failures.push(`POI ${poi.id} (${poi.name}): description very long (${poi.description.length} chars)`);
            }
        });
        
        assert.strictEqual(failures.length, 0, failures.join('\n'));
    });

    test('all POIs with quizzes should have valid quiz structure', () => {
        const failures = [];
        
        POIs.forEach(poi => {
            if (!poi.quiz) return; // Quiz is optional
            
            if (!poi.quiz.question || poi.quiz.question.trim().length === 0) {
                failures.push(`POI ${poi.id}: invalid quiz question`);
            }
            
            if (!Array.isArray(poi.quiz.options) || poi.quiz.options.length < 2) {
                failures.push(`POI ${poi.id}: quiz needs at least 2 options`);
            }
            
            if (typeof poi.quiz.answer !== 'number' || poi.quiz.answer < 0 || poi.quiz.answer >= poi.quiz.options.length) {
                failures.push(`POI ${poi.id}: invalid quiz answer index`);
            }
            
            if (!poi.quiz.feedback) {
                failures.push(`POI ${poi.id}: missing quiz feedback`);
            }
        });
        
        assert.strictEqual(failures.length, 0, failures.join('\n'));
    });

    test('coordinates should not have too many duplicates', () => {
        const coordMap = {};
        
        POIs.forEach(poi => {
            const key = `${poi.lat.toFixed(4)},${poi.lng.toFixed(4)}`;
            if (!coordMap[key]) coordMap[key] = [];
            coordMap[key].push(`${poi.id}:${poi.name}`);
        });
        
        const duplicates = Object.entries(coordMap)
            .filter(([_, pois]) => pois.length > 1)
            .sort((a, b) => b[1].length - a[1].length);
        
        if (duplicates.length > 0) {
            console.log('\n   ⚠️  POIs sharing coordinates:');
            duplicates.slice(0, 10).forEach(([coords, pois]) => {
                console.log(`      ${coords}: ${pois.length} POIs - ${pois.slice(0, 3).join(', ')}${pois.length > 3 ? '...' : ''}`);
            });
        }
        
        // Warn but don't fail - some legitimate duplicates (e.g., museum wings)
        assert.ok(duplicates.length < POIs.length / 4, 'Too many coordinate duplicates (>25% of POIs)');
    });

    test('reward codes should be SHA-256 hashes (64 hex chars)', () => {
        const failures = [];
        
        POIs.forEach(poi => {
            if (!poi.reward) return; // Reward is optional
            
            if (poi.reward.codeHash) {
                const isValidHash = /^[a-f0-9]{64}$/i.test(poi.reward.codeHash);
                if (!isValidHash) {
                    failures.push(`POI ${poi.id}: invalid codeHash format (expected 64-char SHA-256 hex)`);
                }
            }
        });
        
        assert.strictEqual(failures.length, 0, failures.join('\n'));
    });
});

console.log('\n✨ POI validation tests complete\n');
