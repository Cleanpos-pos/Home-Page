const express = require('express');
const next = require('next');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9002;

app.prepare().then(() => {
  const server = express();

  // Let Next.js handle all requests, including serving its own static files.
  // This is the simplest and most reliable setup for a custom server.
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port} in ${dev ? 'development' : 'production'} mode`);
  });
});
