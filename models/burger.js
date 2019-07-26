const orm = require('../config/orm');
const selectAll = orm.selectAll;
const insert = orm.insert;
const update = orm.updateOne;

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
    let res = await insert(burger);
    if(res[0].affectedRows > 0) {
      return {
        statusCode: 200
      };
    } else {
      return {
        statusCode: 500
      }
    }
  },

  devour: async function(burgerId) {
    let res = await update(burgerId);
    if(res[0].serverStatus === 2) {
      return 200;
    }
  }
}

module.exports = Burgers;