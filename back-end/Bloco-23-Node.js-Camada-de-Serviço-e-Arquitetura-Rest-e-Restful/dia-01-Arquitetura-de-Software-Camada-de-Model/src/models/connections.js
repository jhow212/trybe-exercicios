const mysql = require('mysql2/promise');

const db = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'model_example',
});

module.exports = db;
