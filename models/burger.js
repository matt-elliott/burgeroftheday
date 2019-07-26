const orm = require('../config/orm');
const selectAll = orm.selectAll;
const insertOne = orm.insertOne;

let Burgers = {
  getAll: async function(tableName) {
    let burgers = await selectAll(tableName);
    
    burgers.forEach(function(burger) {
      if(burger.devoured === 0) {
        burger.className = 'not-devoured';
      } else {
        burger.className = 'devoured';
      }
    });

    return burgers;
  },
  
  addNew: async function(burger) {
    let newBurger = await insertOne(burger);
    if(newBurger[0].affectedRows > 0) {
      return {
        statusCode: 200
      };
    } else {
      return {
        statusCode: 500
      }
    }
  },

  devour: function() {

  }
}

module.exports = Burgers;