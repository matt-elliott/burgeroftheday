const express = require('express');
const app = express();
const port = process.env.PORT || 9924;
require('./config/connection');
require('./controllers/burger_controller').router(express, app);

app.listen(port, function(){
  console.log('App Live On Port: ', port);
})