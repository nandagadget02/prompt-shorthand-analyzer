import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const v38Dir = path.join(distDir, 'v3.8');
const v37Dir = path.join(distDir, 'v3.7');

if (!fs.existsSync(v38Dir)) {
  fs.mkdirSync(v38Dir, { recursive: true });
}

// 1. Copy v3.8 assets and index.html into dist/v3.8/
if (fs.existsSync(path.join(distDir, 'assets'))) {
  fs.cpSync(path.join(distDir, 'assets'), path.join(v38Dir, 'assets'), { recursive: true });
}
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(v38Dir, 'index.html'));
}
if (fs.existsSync(path.join(distDir, 'prompt-shorthand-analyzer-v3.8-standalone.html'))) {
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.8-standalone.html'),
    path.join(v38Dir, 'prompt-shorthand-analyzer-v3.8-standalone.html')
  );
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.8-standalone.html'),
    path.join(v38Dir, 'standalone.html')
  );
}

// Copy release APK if present in apks/
const apk38Src = path.join(projectRoot, 'apks', 'Prompt-Shorthand-Analyzer-v3.8-release.apk');
if (fs.existsSync(apk38Src)) {
  fs.copyFileSync(apk38Src, path.join(distDir, 'Prompt-Shorthand-Analyzer-v3.8-release.apk'));
  fs.copyFileSync(apk38Src, path.join(v38Dir, 'Prompt-Shorthand-Analyzer-v3.8-release.apk'));
}

// 2. Preserve v3.7 folder if available
const v37Src = path.resolve(projectRoot, '../( nandagadget2 ) prompt-shorthand-analyzer-v3.7/dist/v3.7');
if (fs.existsSync(v37Src) && !fs.existsSync(v37Dir)) {
  fs.cpSync(v37Src, v37Dir, { recursive: true });
}

// 3. Ensure .nojekyll in all folders so GitHub Pages doesn't ignore anything
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
fs.writeFileSync(path.join(v38Dir, '.nojekyll'), '');
if (fs.existsSync(v37Dir)) {
  fs.writeFileSync(path.join(v37Dir, '.nojekyll'), '');
}

console.log('Multi-version dist structure prepared successfully:');
console.log(' - / (root) has latest V3.8');
console.log(' - /v3.8/ exists with assets and index.html');
if (fs.existsSync(v37Dir)) {
  console.log(' - /v3.7/ exists with assets and index.html');
}
