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

app.get('/checkers', function(req,res){
  res.render('checkers');
});

app.get('/add/:x/:y/:z/:a', function(req,res){
  req.params.x *=1;
  req.params.y *=1;
  req.params.z *=1;
  req.params.a *=1;

  console.log(req.params, req.query);
  req.params.fontsize =req.query.fontsize;
  req.params.color =req.query.color;
  req.params.borderwidth=req.query.borderwidth;

  res.render('sum', req.params);
});


app.get('/sumlist/:string', function(req,res){
  
  req.params.string;

  req.params.evenC= req.query.even;
  req.params.oddC = req.query.odd;
  
  res.render('sumlist', req.params);
});

app.get('/rolldice/:x', function(req,res){
  
  req.params.x
  res.render('rolldice', req.params);
});

app.listen(process.env.PORT, function(){
  console.log('App is running on Port', process.env.PORT);
});
