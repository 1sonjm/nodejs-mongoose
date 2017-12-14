/**
 * node.js with mongoDB
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});
//when connect to server need parameter then follow this code
//mongoose.connect('mongodb://username:password@host:port/database?options...');
mongoose.connect('mongodb://localhost/mongodb_tutorial');

/** bodyParser config */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/** server port config */
var port = process.env.PORT || 8080;

/** router config */
var router = require('./routers')(app);

/** server run notification */
var server = app.listen(port, function() {
  console.log("Express server has started on port " + port)
});