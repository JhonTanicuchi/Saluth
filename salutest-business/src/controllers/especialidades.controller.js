const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const especialidades = {};

especialidades.mostrar = (req, res) => {
  res.render("modules/especialidades");
};

especialidades.save = async (req, res) => {
  const { nombre, descripcion, estado } = req.body;
  const nuevaEspecialidad = {
    nombre,
    descripcion,
    estado,
  };
  await orm.especialidad.create(nuevaEspecialidad);
  res.redirect("/especialidades");
};

especialidades.list = async (req, res) => {
  const especialidades = await sql.query("SELECT * FROM especialidades");
  console.log(especialidades);
  res.render("modules/especialidades", { especialidades });
};

module.exports = especialidades;