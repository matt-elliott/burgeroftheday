module.exports.router = function(express, app) {
  const bodyParser = require('body-parser');
  const handlebars = require('express-handlebars');
  const Burgers = require('../models/burger');

  app.use('/assets', express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.engine('handlebars', handlebars({extended: true}));
  app.set('view engine', 'handlebars');

  app.get('/', async function (req, res) {
    try {
      let result = await Burgers.getAll('burgers');
      res.render('index', {
        burgers: result.burgers,
        devoured: result.devoured
      });
    } catch (error) {
      console.log(error);
    }
    
  });

  app.post('/', async function ({ body }, res) {
    try {
      let status = await Burgers.addNew(body.burger);
      res.end();  
    } catch (error) {
      console.log(error);
    }
    
  });
  
  app.post('/api/update/:id', async function ({ params }, res) {
    try {
      let status = await Burgers.devour(params.id);
      res.sendStatus(status);  
    } catch (error) {
      console.log(error);
    }
    
  });
};