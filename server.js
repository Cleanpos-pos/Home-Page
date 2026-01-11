const express = require('express');
const next = require('next');
const path = require('path');
require('dotenv').config();

const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9002;

console.log(`> Starting server in ${dev ? 'development' : 'production'} mode...`);
console.log(`> NODE_ENV is: ${process.env.NODE_ENV}`);

app.prepare().then(() => {
  const server = express();

  // Explicitly serve the Next.js static assets (like JS and CSS chunks)
  // This is often helpful on Hostinger to ensure assets are found
  server.use('/_next/static', express.static(path.join(__dirname, '.next/static')));

  // Explicitly serve the public folder (for icons, manifest.json, etc.)
  server.use(express.static(path.join(__dirname, 'public')));

  // Let Next.js handle all other requests (pages, etc.)
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server listening on port ${port}`);
    console.log(`> Check the app at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error during app preparation:', err);
  process.exit(1);
});
