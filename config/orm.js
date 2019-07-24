const connection = require('./connection');

module.exports.orm = {
  selectAll : async function(database) {
    const queryString = 'SELECT * FROM ?';

    try {
      let res = await connection.query(
        queryString,
        [database]
      );
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  },
  insertOne : async function(burgerString) {
    const queryString = 'INSERT INTO burgers (name) VALUE (?)';

    try {
      let res = await connection.query(
        queryString,
        [burgerString]
      );
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  },
  updateOne : async function(updateString, id) {
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