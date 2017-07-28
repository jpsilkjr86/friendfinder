// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// set up express app
const app = express();
const port = process.env.PORT || 3000;

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// grabs friendFinder from friends.js
const friendFinder = require('./app/data/friends.js');

// function extensions for routing. sends app, path, friendFinder as
// arguments so that only one instance of each of those modules 
// needs to be created.
require('./app/routing/htmlroutes.js')(app, path, friendFinder);
require('./app/routing/apiroutes.js')(app, path, friendFinder);

// listens to port
app.listen(port, () => {
  console.log('App listening on port ' + port);
});
