var express = require ("express");
var bodyParser = require("body-parser");
var path = require("path");
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.get(bodyParser.urlencoded({extended: true}));
app.get(bodyParser.json());


//ROUTER
require('./routing/apiRoutes.js')(app); 
require('./routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});