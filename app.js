var express = require('express');
var port = process.env.PORT || 3000;
var auth = require('http-auth');
var basic = auth.basic({
  realm: "Clever Devil Games",
  file: __dirname + '/.htpasswd'
})

var app = express();
var fs = require('fs');
var ejs = require('ejs');

app.use(express.static('static'));
app.use(auth.connect(basic));

app.set("view engine", "ejs");
app.set("views", __dirname + "/ejs");
app.set("view options", { layout: false } );

app.get('/', function(req, res) {
  res.render('index', {page: 'Home'});
  console.log('Fetching Home page');
});

app.get('/about', function(req, res) {
  res.render('about', {page: 'About'});
  console.log('Fetching About page');
})

app.get('/contact', function(req, res) {
  res.render('contact', {page: 'Contact Us'});
  console.log('Fetching Contact Us page');

})
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
});

console.log('Running on port ' + port);
