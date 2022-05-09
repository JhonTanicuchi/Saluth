const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");

const specialties = {};


Handlebars.registerHelper("formatDate", function (date) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

specialties.mostrar = (req, res) => {
  res.render("modules/specialties");
};

specialties.save = async (req, res) => {
  const { nombre_especialidad, descripcion_especialidad } = req.body;
  const nuevaEspecialidad = {
    nombre_especialidad,
    descripcion_especialidad,
  };
  await orm.especialidad.create(nuevaEspecialidad);
  res.redirect("/specialties");
};

specialties.list = async (req, res) => {
  const specialties = await sql.query("SELECT * FROM especialidads");
  console.log(specialties);
  res.render("modules/control_panel/links/specialties", { specialties });
};

module.exports = specialties;
