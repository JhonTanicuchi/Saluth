const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const dbName = process.env.DB_SCHEMAS || "database_salutest";

mysql
  .createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  })
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
      console.info("Base de datos creada o comprobada correctamente");
    });
  });

const solicitud_Modelo = require("../models/solicitud");
const catalogo_Modelo = require("../models/catalogo");

const sequelize = new Sequelize("database_salutest", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log("No se conecto");
  });

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

const solicitud = solicitud_Modelo(sequelize, Sequelize);
const catalogo = catalogo_Modelo(sequelize, Sequelize);

module.exports = {
  solicitud,
  catalogo,
};
