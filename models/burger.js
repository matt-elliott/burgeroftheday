const orm = require('../config/orm');
const selectAll = orm.selectAll;
const insert = orm.insert;
const update = orm.updateOne;

let Burgers = {
  getAll: async function(tableName) {
    let burgers = await selectAll(tableName);
    let burgersArray = [];
    let devouredArray = [];
    burgers.forEach(function(burger) {
      if(burger.devoured === 0) {
        burger.className = '';
        burgersArray.push(burger);
      } else {
        burger.className = 'devoured';
        devouredArray.push(burger);
      }
    });

    return {burgers: burgersArray, devoured:devouredArray};
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