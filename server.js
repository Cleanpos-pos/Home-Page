
const express = require('express');
const next = require('next');
const path = require('path');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9002;

app.prepare().then(() => {
  const server = express();

  // Serve static files from the .next/static directory
  server.use('/_next/static', express.static(path.join(__dirname, '.next/static')));
  
  // Explicitly serve the public folder for assets like favicon
  server.use(express.static(path.join(__dirname, 'public')));

  // Handle all other requests with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> Environment: ${dev ? 'Development' : 'Production'}`);
  });
});
