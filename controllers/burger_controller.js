module.exports.router = function(express, app) {
  // const express = require('express');
  // const app = express();
  const bodyParser = require('body-parser');
  const handlebars = require('express-handlebars');
  const orm = require('../config/orm');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.engine('handlebars', handlebars({extended: true}));
  app.set('view engine', 'handlebars');

  app.get('/', function(req, res) {
    res.render(index);
  });

  app.post('/', function(req, res) {
    console.log('a post been made');
    res.redirect('/');
  })
};