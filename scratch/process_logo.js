const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\Mugesh\\.gemini\\antigravity-ide\\brain\\d51da0bf-7dea-4934-981d-e10924c14618\\.user_uploaded\\media_1790921063920.jpg';
const destPublic = path.join(__dirname, '..', 'public');

if (!fs.existsSync(destPublic)) {
  fs.mkdirSync(destPublic, { recursive: true });
}

// Copy original logo
fs.copyFileSync(srcPath, path.join(destPublic, 'logo_original.jpg'));
fs.copyFileSync(srcPath, path.join(destPublic, 'logo.jpg'));
console.log('Original logo copied to public/logo_original.jpg and public/logo.jpg');
