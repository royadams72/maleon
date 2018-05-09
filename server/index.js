var express = require('express');
var bodyParser = require('body-parser');
//var cors = require('cors');
var http = require('http');
var path = require('path');
//var twit = require('twitter');
var app = express();
var port = process.env.PORT || 3000;
var twitterRoute = require('./routes/twitter');
var contactRoutes = require('./routes/contact');
//require('dotenv').config()
app.set('port', (port));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});



app.use(bodyParser.urlencoded({extended: true}));

app.use('/twitter', twitterRoute);
app.use('/contact', contactRoutes);
var server = http.createServer(app).listen(port, function() {
  console.log('Server listening on port ' + port);
});

module.exports = app;
