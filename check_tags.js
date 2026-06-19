const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('lib').filter(f => f.startsWith('unit-') && f.endsWith('-data.ts'));
let hasError = false;
files.forEach(f => {
  const file = path.join('lib', f);
  const content = fs.readFileSync(file, 'utf-8');
  if (content.match(/<\/\s+strong>/) || content.match(/<strong\s+>/) || content.match(/<stron>/) || content.match(/<stong>/)) {
    console.log(`Error in ${file}: broken strong tag`);
    hasError = true;
  }
  // check for unclosed strong tags (number of <strong doesn't match </strong>)
  const openCount = (content.match(/<strong>/g) || []).length;
  const closeCount = (content.match(/<\/strong>/g) || []).length;
  if (openCount !== closeCount) {
    console.log(`Error in ${file}: mismatched strong tags (${openCount} open, ${closeCount} close)`);
    hasError = true;
  }
});
if (!hasError) console.log('Tag check perfectly clear.');
