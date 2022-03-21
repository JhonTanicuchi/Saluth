const mysql = require("mysql");
const { promisify } = require("util");

const { database } = require("./keys");

const colors = require("colors");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Se cerró la conexión a la base de datos.".red);
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("La base de datos tiene muchas conexiones".red);
    }
    if (err.code === "ECONNREFUSED") {
      console.error("La conexión a la base de datos no realizada".red);
    }
  } else if (connection) {
    connection.release();
    console.log("Base de datos conectada");
  }

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
