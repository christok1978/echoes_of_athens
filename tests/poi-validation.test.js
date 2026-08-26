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
