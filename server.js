/////////////////////////////////   REQUIRE   //////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/projects');
// mongoose.connect('mongodb://localhost/users');

var uploadProj = require('./routes/uploadProj');
var homeProj = require('./routes/home');
var login = require('./routes/login');
var register = require('./routes/register');
var gitlog = require('./routes/gitlog');
var user = require('./routes/login');


//////////////////////////////   APP USE   /////////////////////////////////////s

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/dashboard', uploadProj);
app.use('/home', homeProj);
app.use('/gitlog', gitlog);
app.use('/login', user);

app.get('/', function(req, res, next){
  res.sendFile('index.html');
});

// app.post('/register', function(req, res, next){
//   next("helloooooo handsome");
// });




var port = process.env.PORT || '4008';

app.listen(port);
