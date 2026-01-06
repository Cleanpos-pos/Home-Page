const express = require('express');
const next = require('next');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9002;

app.prepare().then(() => {
  const server = express();

  server.use(express.static('public'));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port} | Mode: ${dev ? 'Development' : 'Production'}`);
  });
});
