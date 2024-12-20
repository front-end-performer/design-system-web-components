// packages/button-base/copy-assets.js
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'styles');
const destDir = path.resolve('dist/styles');

// Ensure the destination directory exists
fs.mkdirSync(destDir, { recursive: true });

// Copy all CSS files from src/styles to dist/styles
fs.readdirSync(srcDir).forEach((file) => {
  if (file.endsWith('.css')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    console.log(`Copied ${file} to dist/styles`);
  }
});
