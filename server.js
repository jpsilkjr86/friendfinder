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

// function extensions for routing
require('./app/routing/htmlroutes.js')(app, path);
require('./app/routing/apiroutes.js')(app, path);

// listens to port
app.listen(port, () => {
  console.log('App listening on port ' + port);
});
