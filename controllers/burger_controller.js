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
    res.render('index', {burgers: burgers});
  });

  app.post('/', async function({body}, res) {
    let status = await Burgers.addNew(body.burger);
    res.end();
  });
  
  app.post('/api/update/:id', async function({params}, res) {
    let status = await Burgers.devour(params.id);
    res.sendStatus(status);
  });
};