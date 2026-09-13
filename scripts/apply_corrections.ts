import * as fs from 'fs';
import * as path from 'path';
import { EXPLANATION_CORRECTIONS } from './corrections_data';

const dataDir = path.join(process.cwd(), 'src/data');
const issues = JSON.parse(fs.readFileSync('./scripts/issues_to_fix.json', 'utf8'));

// Map question ID to file name from issues
const idToFile: Record<string, string> = {};
issues.forEach((i: any) => {
  if (i.id && i.file) {
    idToFile[i.id] = i.file;
  }
});

// Also scan files if needed
const allFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));
for (const file of allFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const matches = [...content.matchAll(/["']?id["']?\s*:\s*["']([^"']+)["']/g)];
  for (const m of matches) {
    idToFile[m[1]] = file;
  }
}

let appliedCount = 0;
let missingFileCount = 0;
let replacementFailedCount = 0;

for (const [id, newExp] of Object.entries(EXPLANATION_CORRECTIONS)) {
  const file = idToFile[id];
  if (!file) {
    console.warn(`[WARN] File not found for ID: ${id}`);
    missingFileCount++;
    continue;
  }

  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Regex to find the question block starting at id and replace its explanation
  // Handles single quote, double quote, backtick, and escaped quotes inside strings
  const regex = new RegExp(
    `(["']?id["']?\\s*:\\s*["']${id}["'][\\s\\S]*?["']?explanation["']?\\s*:\\s*)(['"\`])((?:\\\\.|(?!\\2)[\\s\\S])*?)\\2`,
    'g'
  );

  let matchFound = false;
  const newContent = content.replace(regex, (match, prefix, quote, oldExp) => {
    matchFound = true;
    // Escape quotes matching the delimiter in newExp
    let safeExp = newExp;
    if (quote === "'") {
      safeExp = safeExp.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    } else if (quote === '"') {
      safeExp = safeExp.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    }
    return `${prefix}${quote}${safeExp}${quote}`;
  });

  if (matchFound) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    appliedCount++;
  } else {
    console.warn(`[FAIL] Could not match explanation for ${id} in ${file}`);
    replacementFailedCount++;
  }
}

console.log(`Applied corrections: ${appliedCount} / ${Object.keys(EXPLANATION_CORRECTIONS).length}`);
console.log(`Missing file: ${missingFileCount}, Replacement failed: ${replacementFailedCount}`);
