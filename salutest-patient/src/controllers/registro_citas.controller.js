const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const registro_citas = {};

registro_citas.mostrar = (req, res) => {
  res.render("modules/cita_medica/record_citas");
};
registro_citas.list = async (req, res) => {
  const citas_medicas = await sql.query("SELECT * FROM cita_medicas");
  res.render("modules/cita_medica/record_citas", { citas_medicas });
};

module.exports = registro_citas;
