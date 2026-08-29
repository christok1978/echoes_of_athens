const fs = require('fs');

console.log('🔍 COMPREHENSIVE POI VALIDATION - NEW POIs (250-259)\n');

// Read and parse app.js to extract POIs
const appContent = fs.readFileSync('app.js', 'utf8');
const match = appContent.match(/const POIs = \[(.*?)\];/s);

if (!match) {
    console.error('❌ Could not find POIs array in app.js');
    process.exit(1);
}

const poisStr = '[' + match[1] + ']';
const POIs = eval('(' + poisStr + ')');

console.log(`✅ Total POIs found: ${POIs.length}\n`);

// Filter to only new POIs (250-259)
const newPOIs = POIs.filter(poi => poi.id >= 250 && poi.id <= 259);

console.log(`🆕 New POIs to validate: ${newPOIs.length}\n`);

let issues = [];
let warnings = [];

// Validation tests
newPOIs.forEach((poi, index) => {
    console.log(`\n📍 POI ${poi.id}: ${poi.name}`);
    console.log(`   Coordinates: ${poi.lat}, ${poi.lng}`);
    
    // 1. Check photo exists
    const imagePath = poi.image.replace('images/', 'images/');
    if (fs.existsSync(imagePath)) {
        const stats = fs.statSync(imagePath);
        console.log(`   ✅ Photo: ${imagePath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    } else {
        console.log(`   ❌ Photo: Missing ${imagePath}`);
        issues.push(`POI ${poi.id}: Missing image ${imagePath}`);
    }
    
    // 2. Check description exists and is reasonable length
    if (poi.description && poi.description.length > 50 && poi.description.length < 500) {
        console.log(`   ✅ Description: ${poi.description.length} characters`);
    } else {
        console.log(`   ⚠️  Description: ${poi.description?.length || 0} characters (expected 50-500)`);
        warnings.push(`POI ${poi.id}: Description length ${poi.description?.length || 0}`);
    }
    
    // 3. Check audio text exists and is substantial
    if (poi.audioText && poi.audioText.length > 200 && poi.audioText.length < 2000) {
        console.log(`   ✅ Audio text: ${poi.audioText.length} characters`);
        
        // Check for very long sentences (potential TTS issues)
        const sentences = poi.audioText.split(/[.!?]+/);
        const longSentences = sentences.filter(s => s.length > 200);
        if (longSentences.length > 0) {
            console.log(`   ⚠️  Audio: ${longSentences.length} sentences over 200 chars`);
            warnings.push(`POI ${poi.id}: Has ${longSentences.length} very long sentences in audio`);
        }
    } else {
        console.log(`   ❌ Audio text: ${poi.audioText?.length || 0} characters (expected 200-2000)`);
        issues.push(`POI ${poi.id}: Audio text length ${poi.audioText?.length || 0}`);
    }
    
    // 4. Check location is in Greece (rough bounds check)
    const inGreece = poi.lat >= 34 && poi.lat <= 42 && poi.lng >= 19 && poi.lng <= 29;
    if (inGreece) {
        console.log(`   ✅ Location: Within Greece bounds`);
    } else {
        console.log(`   ❌ Location: Outside Greece (${poi.lat}, ${poi.lng})`);
        issues.push(`POI ${poi.id}: Coordinates outside Greece`);
    }
    
    // 5. Check location is in Attica region (more specific)
    const inAttica = poi.lat >= 37.5 && poi.lat <= 38.5 && poi.lng >= 23.3 && poi.lng <= 24.3;
    if (inAttica) {
        console.log(`   ✅ Location: Within Attica bounds`);
    } else {
        console.log(`   ⚠️  Location: Outside typical Attica bounds`);
        warnings.push(`POI ${poi.id}: Outside typical Attica region bounds`);
    }
    
    // 6. Check quiz structure
    if (poi.quiz && poi.quiz.question && poi.quiz.options && 
        Array.isArray(poi.quiz.options) && poi.quiz.options.length === 4 &&
        typeof poi.quiz.answer === 'number' && poi.quiz.answer >= 0 && poi.quiz.answer < 4 &&
        poi.quiz.feedback) {
        console.log(`   ✅ Quiz: Complete and valid`);
    } else {
        console.log(`   ❌ Quiz: Invalid structure`);
        issues.push(`POI ${poi.id}: Invalid quiz structure`);
    }
    
    // 7. Check reward structure
    if (poi.reward && poi.reward.title && poi.reward.provider && poi.reward.codeHash) {
        console.log(`   ✅ Reward: "${poi.reward.title}"`);
    } else {
        console.log(`   ❌ Reward: Invalid structure`);
        issues.push(`POI ${poi.id}: Invalid reward structure`);
    }
});

// Summary
console.log('\n' + '='.repeat(70));
console.log('📊 VALIDATION SUMMARY');
console.log('='.repeat(70));
console.log(`Total new POIs validated: ${newPOIs.length}`);
console.log(`Critical issues: ${issues.length}`);
console.log(`Warnings: ${warnings.length}`);

if (issues.length > 0) {
    console.log('\n❌ CRITICAL ISSUES:');
    issues.forEach(issue => console.log(`   - ${issue}`));
}

if (warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    warnings.forEach(warning => console.log(`   - ${warning}`));
}

if (issues.length === 0 && warnings.length === 0) {
    console.log('\n✅ ALL VALIDATION TESTS PASSED!');
    console.log('🎉 The new POIs are ready for production deployment.');
} else if (issues.length === 0) {
    console.log('\n✅ NO CRITICAL ISSUES FOUND');
    console.log('⚠️  Some warnings exist but deployment can proceed.');
} else {
    console.log('\n❌ VALIDATION FAILED');
    console.log('Please fix critical issues before deployment.');
    process.exit(1);
}
