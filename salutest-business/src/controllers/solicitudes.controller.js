const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const email = require("./email.controller");
const Handlebars = require("handlebars");

const solicitud = {};

solicitud.mostrar = (req, res) => {
  res.render("modules/solicitudes");
};

Handlebars.registerHelper("formatDate", function (date) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

Handlebars.registerHelper("conditional_solicitudes_awaiting", function (list) {
  return list.length == 0;
});

solicitud.list = async (req, res) => {
  const solicitudes = await sql.query("SELECT * FROM solicituds");
  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'pendiente'"
  );
  const solicitudes_in_process = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'en proceso'"
  );
  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'aprobado'"
  );
  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'cancelado'"
  );
  res.render("modules/solicitudes", {
    solicitudes,
    solicitudes_awaiting,
    solicitudes_in_process,
    solicitudes_approved,
    solicitudes_canceled,
  });
};

solicitud.approve = async (req, res) => {
  const name = "Jhon Tanicuchi";
  const username = "Jhon.Iess";
  const password = "1111";

  email.create(req, res, name,username, password);

  const id_solicitud = req.params.id;

  sql.query(
    "SELECT * FROM solicituds WHERE id_solicitud = ?",
    [id_solicitud],
    function (error, results, fields) {
      if (error) throw error;
      const nuevaInstitucionMedica = {
        nombre: results[0].nombre_institucion_medica,
        descripcion: results[0].detalle,
        estado: true,
      };

      orm.institucion_medica.create(nuevaInstitucionMedica);
    }
  );

  //Creacion del usuario admin de contrato
 /*  await sql.query(
    "INSERT INTO empleado_businesses (personaIdPersona) VALUES ((SELECT id_persona FROM personas where cedula = '0110000100'))"
  );
  await sql.query(
    "INSERT INTO usuario_businesses (username,password,correo,empleadoBusinessIdEmpleadoBusiness)VALUES('admin_salutest','$2a$10$bLoPMbtf5TYXPQPMFiXajus1VK18vk2Ll1O.js1.ZyO6Iw9glE0fe','NA',(SELECT e.id_empleado_business FROM empleado_businesses e JOIN personas p ON p.id_persona = e.personaIdPersona where cedula = '0110000100'))"
  ); */

  const updateSolicitud = {
    estado: "aprobado",
  };

  await orm.solicitud
    .findOne({ where: { id_solicitud: id_solicitud } })
    .then((solicitudes) => {
      solicitudes.update(updateSolicitud);
    });

  res.redirect("/solicitudes");
};



solicitud.cancel = async (req, res) => {
  const id_solicitud = req.params.id;
  const updateSolicitud = {
    estado: "cancelado",
  };

  await orm.solicitud
    .findOne({ where: { id_solicitud: id_solicitud } })
    .then((solicitudes) => {
      solicitudes.update(updateSolicitud);
    });
  res.redirect("/solicitudes");
};

solicitud.read = async (req, res) => {
  const id_solicitud = req.params.id;
  console.log(id_solicitud);

  const solicitud_info = await sql.query(
    "SELECT * FROM solicituds WHERE id_solicitud = ?",
    [id_solicitud]
  );

  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'pendiente'"
  );
  const solicitudes_in_process = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'en proceso'"
  );
  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'aprobado'"
  );
  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'cancelado'"
  );


  res.render("modules/solicitud", {
    solicitud_info,
    solicitudes_awaiting,
    solicitudes_in_process,
    solicitudes_approved,
    solicitudes_canceled,
  });
};

module.exports = solicitud;
