/***
	Copyright Divy Srivastava 2019
	under the MIT liscense
	
	@file server.js
**/

// Get all the dependencies listed
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Create a new express instance
const app = express();
// Installize the routers
const apiRouter = require('./routes/api.js')

app.use(logger('dev')); // Only for development purpose

app.use(bodyParser.json()); // HTML Form handling using express-body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Get the routes listed
app.use("/results", apiRouter);
// Serve static files from `client` folder
app.use(express.static(path.join(__dirname, './client')));


/**
 * Create HTTP server.
 */

// Get the HTTP server linked with our express app
const server = http.createServer(app);

// Get the about page listening 
app.get('/about',function(req, res, next) {
	res.sendFile(path,join(__dirname,'./client/about.html'));
})

/**
 * Get port from environment and store in Express.
 */
const port = '8080';
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on http:/localhost:${port}`));