const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");

const solicitud = {};

solicitud.mostrar = (req, res) => {
  res.render("modules/solicitudes");
};


Handlebars.registerHelper("formatDate", function (date) {
  return date.toLocaleDateString();
});

solicitud.list = async (req, res) => {
  const solicitudes = await sql.query("SELECT * FROM solicituds");
  console.log(solicitudes);
  res.render("modules/solicitudes", { solicitudes });
};

solicitud.check = async (req, res) => {
  const id_solicitud = req.params.id;
  const solicitud_check = await sql.query(
    "SELECT * FROM solicituds WHERE id_solicitud = ?",
    [id_solicitud]
  );
  const updateSolicitud = {
    estado: "aprobado",
  };

  await orm.solicitud.findOne({ where: { id_solicitud: id_solicitud } }).then((solicitudes) => {
      solicitudes.update(updateSolicitud);
    });

  const { nombre, descripcion } = req.body;
  const nuevaInstitucionMedica = {
    nombre: nombre,
    descripcion: descripcion,
    estado: true,
  };

  await orm.institucion_medica.create(nuevaInstitucionMedica);
  res.redirect("/solicitud");
};


module.exports = solicitud;
