const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9002;
const hostname = process.env.HOSTNAME || '0.0.0.0';

console.log(`> [Posso] Starting server in ${dev ? 'development' : 'production'} mode...`);
console.log(`> [Posso] NODE_ENV: ${process.env.NODE_ENV || 'not set (defaulting to production in next.js)'}`);
console.log(`> [Posso] Local Port: ${port}`);

// Verify .next directory existence in production
if (!dev) {
  const nextDir = path.join(__dirname, '.next');
  if (!fs.existsSync(nextDir)) {
    console.warn(`> [Posso] WARNING: .next directory not found at ${nextDir}. Build may be missing!`);
  } else {
    console.log(`> [Posso] .next directory found.`);
  }
}

app.prepare().then(() => {
  const server = express();

  // Serve static assets from .next/static
  const staticPath = path.join(__dirname, '.next/static');
  if (fs.existsSync(staticPath)) {
    console.log(`> [Posso] Serving static assets from ${staticPath}`);
    server.use('/_next/static', express.static(staticPath));
  }

  // Serve the public folder
  const publicPath = path.join(__dirname, 'public');
  if (fs.existsSync(publicPath)) {
    console.log(`> [Posso] Serving public assets from ${publicPath}`);
    server.use(express.static(publicPath));
  }

  // Next.js request handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> [Posso] Server ready on http://${hostname}:${port}`);
  });
}).catch((err) => {
  console.error('> [Posso] CRITICAL: Error during app preparation:', err);
  process.exit(1);
});
