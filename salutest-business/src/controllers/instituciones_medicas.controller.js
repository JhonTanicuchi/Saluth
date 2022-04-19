const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");

const instituciones_medicas = {};

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

instituciones_medicas.mostrar = (req, res) => {
  res.render("modules/instituciones_medicas");
};

instituciones_medicas.list = async (req, res) => {
  const instituciones = await sql.query("SELECT * FROM institucion_medicas");
  res.render("modules/instituciones_medicas", { instituciones });
};

module.exports = instituciones_medicas;
