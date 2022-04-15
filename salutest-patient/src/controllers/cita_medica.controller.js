const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const cita_medica = {};

cita_medica.mostrar = (req, res) => {
  res.render("modules/cita_medica");
};
cita_medica.list = async (req, res) => {
  const citas_medicas = await sql.query("SELECT * FROM cita_medicas");
  res.render("modules/cita_medica", { citas_medicas });
};

module.exports = cita_medica;
