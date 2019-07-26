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
  insertOne : async function(burgerString) {
    const connection = await require('./connection')();
    const queryString = `INSERT INTO burgers (name) VALUE ("${burgerString}")`;
    
    try {
      let res = await connection.query(queryString);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  updateOne : async function(updateString, id) {
    const connection = await require('./connection')();
    const queryString = 'UPDATE burgers SET name = ? WHERE id = ?';

    try {
      let res = await connection.query(
        queryString,
        [updateString, id]
      );
      console.log(res)
    } catch (error) {
      console.log(error);
    }   
  }
}

module.exports = orm;