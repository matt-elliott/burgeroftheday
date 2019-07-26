module.exports.router = function(express, app) {
  const bodyParser = require('body-parser');
  const handlebars = require('express-handlebars');
  const Burgers = require('../models/burger');

  app.use('/assets', express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.engine('handlebars', handlebars({extended: true}));
  app.set('view engine', 'handlebars');

  app.get('/', async function(req, res) {
    let burgers = await Burgers.getAll('burgers');
    // console.log(burgers);
    res.render('index', {burgers: burgers});
  });

  app.post('/', function(req, res) {
    console.log('a post been made');
    res.redirect('/');
  })
};