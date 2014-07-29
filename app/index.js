'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req,res){
  res.render('home.ejs');
});

app.get('/checkers.ejs', function(req,res){
  res.render('checkers.ejs');
});

app.listen(process.env.PORT, function(){
  console.log('App is running on Port', process.env.PORT);
});
