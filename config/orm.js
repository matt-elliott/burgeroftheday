let orm = {
  selectAll : async function(tableName) {
    const connection = await require('./connection')();
    const queryString = `SELECT * FROM ${tableName}`;

    try {
      let [rows, fields] = await connection.execute(queryString);
      return rows;
    } catch (error) {
      console.log(error);
    }
  },
  insert : async function(burgerString) {
    const connection = await require('./connection')();
    const queryString = `INSERT INTO burgers (name) VALUE ("${burgerString}")`;
    
    try {
      let res = await connection.query(queryString);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  updateOne : async function(id) {
    const connection = await require('./connection')();
    const queryString = `UPDATE burgers SET devoured = 1 WHERE id = ${id}`;

    try {
      let res = await connection.query(
        queryString
      );
      return res;
    } catch (error) {
      console.log(error);
    }   
  }
}

module.exports = orm;