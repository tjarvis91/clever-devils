var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var fs = require('fs');
var index = fs.readFileSync('templates/index.html');

app.use(express.static('static'));

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/templates/' + 'index.html');
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
});
