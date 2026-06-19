const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('lib').filter(f => f.startsWith('unit-') && f.endsWith('-data.ts'));
files.forEach(f => {
  const file = path.join('lib', f);
  const content = fs.readFileSync(file, 'utf-8');
  
  // Just a simple regex to check options like "options: ["A.", "B.", "C.", "D."]"
  // It's a bit hard to parse TypeScript AST here. I'll just check if there are options missing A/B/C/D prefixes
  // Let's actually import the modules via ts-node or just transpile.
});
console.log('Skipping advanced checks via AST, will use grep instead.');
