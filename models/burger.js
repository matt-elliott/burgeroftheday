const orm = require('../config/orm');
const selectAll = orm.selectAll;

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
  
  addNew: function(data) {
    orm.insertOne(data);
  },

  devour: function() {

  }
}

module.exports = Burgers;