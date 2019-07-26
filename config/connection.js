require('dotenv').config();
const mysql = require('mysql2/promise');

if(process.env.JAWSDB_URL) {
  let connection = async function() {
    return await mysql.createConnection(process.env.JAWSDB_URL);
  }
  module.exports = connection;
} else {
  let connection = async function() {
    return await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
      port: process.env.DB_PORT
    });
  }
  module.exports = connection;
}