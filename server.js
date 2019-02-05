const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, './client')));

const server = http.createServer(app);

/**
 * Get port from environment and store in Express.
 */
const port = '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on http:/localhost:${port}`));