const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const email = require("./email.controller");
const Handlebars = require("handlebars");

const solicitudes_componentes = {};

solicitudes_componentes.mostrar = (req, res) => {
  res.render("modules/solicitudes_componentes");
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

solicitudes_componentes.list = async (req, res) => {
  const solicitudes = await sql.query("SELECT * FROM solicitudes_componentes");
  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'pendiente'"
  );
  const solicitudes_in_process = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'en proceso'"
  );
  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'aprobado'"
  );
  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'cancelado'"
  );
  res.render("modules/solicitudes_componentes", {
    solicitudes,
    solicitudes_awaiting,
    solicitudes_in_process,
    solicitudes_approved,
    solicitudes_canceled,
  });
};

solicitudes_componentes.approve = async (req, res) => {
  /*const name = "Jhon Tanicuchi";
  const username = "Jhon.Iess";
  const password = "1111";*/

  email.create(req, res, name,username, password);

  const id_solicitudes_componentes = req.params.id;

  sql.query(
    "SELECT * FROM solicitudes_componentes WHERE id_solicitud = ?",
    [id_solicitudes_componentes],
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

  await orm.solicitudes_componentes
    .findOne({ where: { id_solicitud: id_solicitudes_componentes } })
    .then((solicitudes_componentes) => {
      solicitudes_componentes.update(updateSolicitud);
    });

  res.redirect("/solicitudes_componentes");
};



solicitudes_componentes.cancel = async (req, res) => {
  const id_solicitudes_componentes = req.params.id;
  const updateSolicitud = {
    estado: "cancelado",
  };

  await orm.solicitudes_componentes
    .findOne({ where: { id_solicitud: id_solicitudes_componentes } })
    .then((solicitudes_componentes) => {
      solicitudes_componentes.update(updateSolicitud);
    });
  res.redirect("/solicitudes");
};

solicitudes_componentes.read = async (req, res) => {
  const id_solicitudes_componentes = req.params.id;
  console.log(id_solicitudes_componentes);

  const solicitud_info = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE id_solicitud = ?",
    [id_solicitudes_componentes]
  );

  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'pendiente'"
  );
  const solicitudes_in_process = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'en proceso'"
  );
  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'aprobado'"
  );
  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicitudes_componentes WHERE estado = 'cancelado'"
  );


  res.render("modules/solicitudes_componentes", {
    solicitud_info,
    solicitudes_awaiting,
    solicitudes_in_process,
    solicitudes_approved,
    solicitudes_canceled,
  });
};

module.exports = solicitudes_componentes;
