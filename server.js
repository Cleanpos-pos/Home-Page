const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9002;
const hostname = process.env.HOSTNAME || '0.0.0.0';

console.log(`> [Posso] Starting server in ${dev ? 'development' : 'production'} mode...`);
console.log(`> [Posso] NODE_ENV: ${process.env.NODE_ENV || 'not set (defaulting to production in next.js)'}`);
console.log(`> [Posso] Local Port: ${port}`);
console.log(`> [Posso] SMTP User: ${process.env.SMTP_USER || 'info@posso.co.uk'}`);
console.log(`> [Posso] SMTP Password: ${process.env.SMTP_PASS ? 'CONFIGURED' : 'MISSING'}`);
console.log(`> [Posso] Recipient Email: ${process.env.RECIPIENT_EMAIL || 'info@posso.uk'}`);

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
  console.log(`> [Posso] Absolute Static Path: ${staticPath}`);
  if (fs.existsSync(staticPath)) {
    console.log(`> [Posso] Serving static assets from ${staticPath}`);
    server.use('/_next/static', express.static(staticPath));
  } else {
    console.warn(`> [Posso] WARNING: Static path NOT found: ${staticPath}`);
  }

  // Health Check
  server.get('/health', (req, res) => {
    const envStatus = {};
    // Check for common keys without revealing values
    ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'RECIPIENT_EMAIL', 'SENDER_EMAIL', 'NODE_ENV', 'PORT'].forEach(key => {
      envStatus[key] = process.env[key] ? `SET (${process.env[key].length} chars)` : 'MISSING';
    });

    res.status(200).json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      node_version: process.version,
      dir: __dirname,
      environment_variables: envStatus,
      all_non_secret_keys: Object.keys(process.env).filter(k =>
        !k.includes('SECRET') &&
        !k.includes('PASSWORD') &&
        !k.includes('KEY') &&
        !k.includes('AUTH')
      )
    });
  });

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
