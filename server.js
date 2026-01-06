const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Use PORT from env, fallback only for local dev
const port = process.env.PORT || 3000;

app.prepare().then(() => {
 const server = express();

 server.use('/_next/static', express.static(path.join(__dirname, '.next/static')));
 server.use(express.static(path.join(__dirname, 'public')));

 server.all('*', (req, res) => handle(req, res));

 server.listen(port, (err) => {
 if (err) throw err;
 console.log(`> Ready on port ${port}`);
 console.log(`> Environment: ${dev ? 'Development' : 'Production'}`);
 });
});
