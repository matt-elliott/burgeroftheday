const orm = require('../config/orm');
const selectAll = orm.selectAll;

let Burgers = {
  getAll: function(tableName) {
    return selectAll(tableName);
  },
  
  addNew: function(data) {
    orm.insertOne(data);
  },

  devour: function() {

  }
}

module.exports = Burgers;