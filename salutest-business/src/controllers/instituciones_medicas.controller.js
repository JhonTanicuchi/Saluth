const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const instituciones_medicas = {};

instituciones_medicas.mostrar = (req, res) => {
  res.render("modules/instituciones_medicas");
};

instituciones_medicas.list = async (req, res) => {
  const instituciones = await sql.query("SELECT * FROM institucion_medicas");
  res.render("modules/instituciones_medicas", { instituciones });
};

module.exports = instituciones_medicas;
