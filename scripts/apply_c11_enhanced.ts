import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(process.cwd(), 'src/data');
const enhancedMap: Record<string, string> = JSON.parse(
  fs.readFileSync('./scripts/enhanced_c11_map.json', 'utf8')
);

// Map question ID to file
const idToFile: Record<string, string> = {};
const allFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

for (const file of allFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const matches = [...content.matchAll(/["']?id["']?\s*:\s*["']([^"']+)["']/g)];
  for (const m of matches) {
    idToFile[m[1]] = file;
  }
}

// Group by file
const fileToUpdates: Record<string, { id: string; newExp: string }[]> = {};
for (const [id, newExp] of Object.entries(enhancedMap)) {
  const file = idToFile[id];
  if (!file) {
    console.warn(`[WARN] File not found for ID: ${id}`);
    continue;
  }
  if (!fileToUpdates[file]) fileToUpdates[file] = [];
  fileToUpdates[file].push({ id, newExp });
}

console.log(`Updating ${Object.keys(fileToUpdates).length} files for ${Object.keys(enhancedMap).length} questions...`);

let totalApplied = 0;
let totalFailed = 0;

for (const [file, updates] of Object.entries(fileToUpdates)) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  for (const { id, newExp } of updates) {
    // Exact matching for id and explanation
    const regex = new RegExp(
      `(["']?id["']?\\s*:\\s*["']${id}["'][\\s\\S]*?["']?explanation["']?\\s*:\\s*)(['"\`])((?:\\\\.|(?!\\2)[\\s\\S])*?)\\2`
    );

    let replaced = false;
    content = content.replace(regex, (match, prefix, quote) => {
      replaced = true;
      let safeExp = newExp;
      if (quote === "'") {
        safeExp = safeExp.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      } else if (quote === '"') {
        safeExp = safeExp.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      }
      return `${prefix}${quote}${safeExp}${quote}`;
    });

    if (replaced) {
      totalApplied++;
    } else {
      console.warn(`[FAIL] Could not match explanation for ${id} in ${file}`);
      totalFailed++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`Finished: Applied ${totalApplied}, Failed ${totalFailed}`);
