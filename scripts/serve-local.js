import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const PORT = 3390;

const server = http.createServer((req, res) => {
  if (req.url === '/apk' || req.url === '/Prompt-Shorthand-Analyzer-v3.9-release.apk') {
    const apkPath = path.join(projectRoot, 'Prompt-Shorthand-Analyzer-v3.9-release.apk');
    if (fs.existsSync(apkPath)) {
      res.writeHead(200, {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="Prompt-Shorthand-Analyzer-v3.9-release.apk"'
      });
      fs.createReadStream(apkPath).pipe(res);
      return;
    }
  }

  const htmlPath = path.join(projectRoot, 'prompt-shorthand-analyzer-v3.9-standalone.html');
  if (fs.existsSync(htmlPath)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(htmlPath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`V3.9 Server running at http://localhost:${PORT}`);
  console.log(`APK Download available at http://localhost:${PORT}/apk`);
});
