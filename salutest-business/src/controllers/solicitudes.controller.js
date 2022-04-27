const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const email = require("./email.controller");
const user_generator = require("./user_generator.controller");
const Handlebars = require("handlebars");
const helpers = require("../lib/helpers");

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

  let date = new Date();
  var numberOfMlSeconds = date.getTime();
  var addMlSeconds = 300000;
  var date_5min = new Date(numberOfMlSeconds - addMlSeconds);
  var date_5mas = new Date(numberOfMlSeconds + addMlSeconds);
  console.log(date);
  console.log(date_5min + " / " + date_5mas);
  const solicitudes_new = await sql.query(
    "SELECT * FROM solicituds WHERE  creacionSolicitud >= ? AND creacionSolicitud  <= ? AND estado_solicitud = 'pendiente'",
    [date_5min, date_5mas]
  );

  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicituds WHERE estado_solicitud = 'pendiente'"
  );

  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicituds WHERE estado_solicitud = 'aprobado'"
  );

  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicituds WHERE estado_solicitud = 'cancelado'"
  );

  res.render("modules/solicitudes", {
    solicitudes,
    solicitudes_new,
    solicitudes_awaiting,
    solicitudes_approved,
    solicitudes_canceled,
  });
};

solicitud.approve = async (req, res) => {
  const id_solicitud = req.params.id;

  const solicitud = await sql.query(
    "SELECT * FROM solicituds WHERE id_solicitud = ?",
    [id_solicitud]
  );

  await sql.query(
    "INSERT INTO institucion_medicas (nombre_institucion_medica) VALUES (?)",
    [solicitud[0].nombre_institucion_medica]
  );
  const solicitud_institucion = await sql.query(
    "select * from solicituds s join institucion_medicas i on s.nombre_institucion_medica = i.nombre_institucion_medica WHERE s.id_solicitud = ?",
    [id_solicitud]
  );

  await sql.query(
    "INSERT INTO institucion_catalogo (catalogoIdCatalogo,institucionMedicaIdInstitucionMedica) VALUES ((SELECT id_catalogo FROM catalogos WHERE nombre_catalogo = 'tipo_institucion' AND valor_catalogo = ?),?)",
    [
      solicitud_institucion[0].tipo_institucion,
      solicitud_institucion[0].id_institucion_medica,
    ]
  ); 

    const institucion_medica = await sql.query(
      "SELECT id_institucion_medica FROM institucion_medicas WHERE nombre_institucion_medica = ?",
      [solicitud_institucion[0].nombre_institucion_medica]
    );
 

  console.log(solicitud_institucion[0]);
  console.log(institucion_medica[0].id_institucion_medica);
 

  const updateSolicitud = {
    estado_solicitud: "aprobado",
    institucionMedicaIdInstitucionMedica:
      solicitud_institucion[0].id_institucion_medica,
  };

  await orm.solicitud
    .findOne({ where: { id_solicitud: id_solicitud } })
    .then((solicitudes) => {
      solicitudes.update(updateSolicitud);
    });

  const username = solicitud[0].cedula_contacto;
  const password =
    "Sm#" +
    solicitud[0].nombres_contacto[0].toUpperCase() +
    solicitud[0].nombres_contacto[3].toLowerCase() +
    solicitud[0].tel_contacto[2] +
    solicitud[0].tel_contacto[1] +
    solicitud[0].tel_contacto[0] +
    solicitud[0].cedula_contacto[0] +
    solicitud[0].cedula_contacto[1];
  console.log(password);
  const passwordEncrypt = await helpers.encryptPassword(password);

  const correo = solicitud[0].email_contacto;
  const cedula = solicitud[0].cedula_contacto;
  const nombres = solicitud[0].nombres_contacto;
  const apellidos = solicitud[0].apellidos_contacto;
  const name =
    solicitud[0].nombres_contacto;

  email.create(req, res, name, username, password, correo);
  user_generator.create(
    req,
    res,
    cedula,
    nombres,
    apellidos,
    username,
    passwordEncrypt,
    correo,
    institucion_medica
  );

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
  const solicitudes = await sql.query("SELECT * FROM solicituds");

  let date = new Date();
  var numberOfMlSeconds = date.getTime();
  var addMlSeconds = 300000;
  var date_5min = new Date(numberOfMlSeconds - addMlSeconds);
  var date_5mas = new Date(numberOfMlSeconds + addMlSeconds);
  console.log(date);
  console.log(date_5min + " / " + date_5mas);
  const solicitudes_new = await sql.query(
    "SELECT * FROM solicituds WHERE  creacionSolicitud >= ? AND creacionSolicitud  <= ? AND estado_solicitud = 'pendiente'",
    [date_5min, date_5mas]
  );

  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicituds WHERE estado_solicitud = 'pendiente'"
  );

  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicituds WHERE estado_solicitud = 'aprobado'"
  );

  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicituds WHERE estado_solicitud = 'cancelado'"
  );

  res.render("modules/solicitud", {
    solicitudes,
    solicitud_info,
    solicitudes_new,
    solicitudes_awaiting,
    solicitudes_approved,
    solicitudes_canceled,
  });
};

module.exports = solicitud;
