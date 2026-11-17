import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const v39Dir = path.join(distDir, 'v3.9');
const v38Dir = path.join(distDir, 'v3.8');
const v37Dir = path.join(distDir, 'v3.7');

if (!fs.existsSync(v39Dir)) {
  fs.mkdirSync(v39Dir, { recursive: true });
}

// 1. Copy v3.9 assets and index.html into dist/v3.9/
if (fs.existsSync(path.join(distDir, 'assets'))) {
  fs.cpSync(path.join(distDir, 'assets'), path.join(v39Dir, 'assets'), { recursive: true });
}
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(v39Dir, 'index.html'));
}
if (fs.existsSync(path.join(distDir, 'prompt-shorthand-analyzer-v3.9-standalone.html'))) {
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.9-standalone.html'),
    path.join(v39Dir, 'prompt-shorthand-analyzer-v3.9-standalone.html')
  );
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.9-standalone.html'),
    path.join(v39Dir, 'standalone.html')
  );
}

// 2. Preserve v3.8 folder if available from baseline
const v38SourceCandidates = [
  path.resolve(projectRoot, '../25. prompt-shorthand-analyzer-3.8/dist/v3.8'),
  path.resolve(projectRoot, '../12. Nanda Gadget 2 (nandagadget02@gmail.com)/( nandagadget2 ) prompt-shorthand-analyzer-v3.8/dist/v3.8')
];

for (const candidate of v38SourceCandidates) {
  if (fs.existsSync(candidate) && !fs.existsSync(v38Dir)) {
    fs.cpSync(candidate, v38Dir, { recursive: true });
    break;
  }
}

// Copy v3.8 standalone HTML into dist/ if not present
const v38HtmlCandidates = [
  path.resolve(projectRoot, '../25. prompt-shorthand-analyzer-3.8/prompt-shorthand-analyzer-v3.8-standalone.html'),
  path.resolve(projectRoot, '../12. Nanda Gadget 2 (nandagadget02@gmail.com)/( nandagadget2 ) prompt-shorthand-analyzer-v3.8/prompt-shorthand-analyzer-v3.8-standalone.html')
];
for (const cand of v38HtmlCandidates) {
  if (fs.existsSync(cand) && !fs.existsSync(path.join(distDir, 'prompt-shorthand-analyzer-v3.8-standalone.html'))) {
    fs.copyFileSync(cand, path.join(distDir, 'prompt-shorthand-analyzer-v3.8-standalone.html'));
    break;
  }
}

// 3. Preserve v3.7 folder if available
const v37SourceCandidates = [
  path.resolve(projectRoot, '../( nandagadget2 ) prompt-shorthand-analyzer-v3.7/dist/v3.7'),
  path.resolve(projectRoot, '../12. Nanda Gadget 2 (nandagadget02@gmail.com)/( nandagadget2 ) prompt-shorthand-analyzer-v3.8/dist/v3.7')
];
for (const candidate of v37SourceCandidates) {
  if (fs.existsSync(candidate) && !fs.existsSync(v37Dir)) {
    fs.cpSync(candidate, v37Dir, { recursive: true });
    break;
  }
}

// 4. Ensure .nojekyll in all folders so GitHub Pages doesn't ignore anything
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
fs.writeFileSync(path.join(v39Dir, '.nojekyll'), '');
if (fs.existsSync(v38Dir)) {
  fs.writeFileSync(path.join(v38Dir, '.nojekyll'), '');
}
if (fs.existsSync(v37Dir)) {
  fs.writeFileSync(path.join(v37Dir, '.nojekyll'), '');
}

console.log('Multi-version dist structure prepared successfully:');
console.log(' - / (root) has latest V3.9');
console.log(' - /v3.9/ exists with assets and index.html');
if (fs.existsSync(v38Dir)) {
  console.log(' - /v3.8/ exists with assets and index.html');
}
if (fs.existsSync(v37Dir)) {
  console.log(' - /v3.7/ exists with assets and index.html');
}
