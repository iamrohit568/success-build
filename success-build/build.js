
const fs = require('fs');
const path = require('path');

console.log('Compiling modules...');
setTimeout(() => {
    console.log('Bundling...');

    const buildDir = path.join(__dirname, 'build');
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir);
    }

    // Create dummy artifacts
    fs.writeFileSync(path.join(buildDir, 'main.js'), '/* main.js content */');
    fs.writeFileSync(path.join(buildDir, 'vendor.js'), '/* vendor.js content */'.repeat(50000)); // Make it largeish
    fs.writeFileSync(path.join(buildDir, 'styles.css'), '/* styles.css content */');

    console.log('Chunk sizes:');
    console.log('  main.js (512 KB)');
    console.log('  vendor.js (1.1 MB)');
    console.log('Build completed in 4.21s');

    console.log('\n Running additional build checks...');
    console.log('[WARN] Large bundle detected: vendor.js > 1MB');
    console.log('[INFO] Continuing...');

    console.log('\n Uploading artifacts...');
    console.log('✔ build/main.js');
    console.log('✔ build/vendor.js');
    console.log('✔ build/styles.css');

}, 1000);
