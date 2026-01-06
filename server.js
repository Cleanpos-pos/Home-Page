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

  // 1. Force Clean Static File Serving (Fixes the 400 Bad Request on chunks)
  // We explicitly tell Express where the .next/static folder is.
  server.use('/_next/static', express.static(path.join(__dirname, '.next/static')));

  // 2. Force Public Folder Serving (Fixes the icon 404s)
  server.use(express.static(path.join(__dirname, 'public')));

  // 3. Default Handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
  });
});
