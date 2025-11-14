const fs = require('fs');
const path = require('path');

const files = [
  'app/mentions-legal/page.tsx',
  'app/mentions-legales/page.tsx',
  'app/confidentialite/page.tsx',
  'app/cgu-cgv/page.tsx',
  'app/cookies/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remplacer les apostrophes dans le texte JSX
    content = content.replace(/l'/g, 'l&apos;');
    content = content.replace(/d'/g, 'd&apos;');
    content = content.replace(/qu'/g, 'qu&apos;');
    content = content.replace(/n'/g, 'n&apos;');
    content = content.replace(/s'/g, 's&apos;');
    content = content.replace(/c'/g, 'c&apos;');
    content = content.replace(/m'/g, 'm&apos;');
    content = content.replace(/j'/g, 'j&apos;');
    
    fs.writeFileSync(file, content);
    console.log(`✅ Fixed: ${file}`);
  }
});