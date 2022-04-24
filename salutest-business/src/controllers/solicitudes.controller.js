const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const email = require("./email.controller");
const user_generator = require("./user_generator.controller");
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

  let date = new Date();
  var numberOfMlSeconds = date.getTime();
  var addMlSeconds = 300000;
  var date_5min = new Date(numberOfMlSeconds - addMlSeconds);
  var date_5mas = new Date(numberOfMlSeconds + addMlSeconds);
  console.log(date);
  console.log(date_5min + " / " + date_5mas);
  const solicitudes_new = await sql.query(
    "SELECT * FROM solicituds WHERE  creacionSolicitud >= ? AND creacionSolicitud  <= ? AND estado = 'pendiente'",
    [date_5min, date_5mas]
  );

  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'pendiente'"
  );

  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'aprobado'"
  );

  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'cancelado'"
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
  const username = user_generator.create.usuarioemail;
  const password = "1111";

  const id_solicitud = req.params.id;

  const solicitud = await sql.query(
    "SELECT * FROM solicituds WHERE id_solicitud = ?",
    [id_solicitud]
  );
  await sql.query("INSERT INTO institucion_medicas (nombre) VALUES (?)", [
    solicitud[0].nombre_institucion_medica,
  ]);
  const solicitud_institucion = await sql.query(
    "select * from solicituds s join institucion_medicas i on s.nombre_institucion_medica = i.nombre WHERE s.id_solicitud = ?",
    [id_solicitud]
  );

   await sql.query(
     "INSERT INTO institucion_catalogo (catalogoIdCatalogo,institucionMedicaIdInstitucionMedica) VALUES (?,?)",
     [
       solicitud_institucion[0].tipo_institucion ,
       solicitud_institucion[0].id_institucion_medica,
     ]
   );
   await sql.query(
     "INSERT INTO institucion_catalogo (catalogoIdCatalogo,institucionMedicaIdInstitucionMedica) VALUES (?,?)",
     [
       solicitud_institucion[0].categoria_institucion,
       solicitud_institucion[0].id_institucion_medica,
     ]
   );



  console.log(solicitud_institucion[0]);

  const updateSolicitud = {
    estado: "aprobado",
    institucionMedicaIdInstitucionMedica:
      solicitud_institucion[0].id_institucion_medica,
  };

  await orm.solicitud
    .findOne({ where: { id_solicitud: id_solicitud } })
    .then((solicitudes) => {
      solicitudes.update(updateSolicitud);
    });

  email.create(
    req,
    res,
    solicitud[0].nombre_contacto,
    solicitud[0].email_contacto,
    username,
    password
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
    "SELECT * FROM solicituds WHERE  creacionSolicitud >= ? AND creacionSolicitud  <= ? AND estado = 'pendiente'",
    [date_5min, date_5mas]
  );

  const solicitudes_awaiting = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'pendiente'"
  );

  const solicitudes_approved = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'aprobado'"
  );

  const solicitudes_canceled = await sql.query(
    "SELECT * FROM solicituds WHERE estado = 'cancelado'"
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
