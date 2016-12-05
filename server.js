var express = require('express');
var config = require('./server-config.js');
var routes = require('./routes');
var path = require('path');
require('node-jsx').install({extension: 'jsx'});

var app = express();
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}.`);
});
