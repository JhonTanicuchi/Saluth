const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const solicitud = {};

solicitud.mostrar = (req, res) => {
  res.render("modules/solicitudes");
};

solicitud.list = async (req, res) => {
  const solicitudes = await sql.query("SELECT * FROM solicituds");
  const total_solicitudes = 
  console.log(solicitudes)
  res.render("modules/solicitudes", { solicitudes });
};

module.exports = solicitud;
