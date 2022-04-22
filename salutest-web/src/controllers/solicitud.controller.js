const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const solicitud = {};

solicitud.mostrar = (req, res) => {
  res.render("modules/solicitud");
};

solicitud.save = async (req, res) => {
  const {
    nombre_institucion_medica,
    tipo_institucion,
    categoria_institucion,
    sucursales,
    n_sucursales,
    nombre_contacto,
    email_contacto,
    tel_contacto,
  } = req.body;
  const nuevaSolicitud = {
    nombre_institucion_medica,
    tipo_institucion,
    categoria_institucion,
    sucursales,
    n_sucursales,
    nombre_contacto,
    email_contacto,
    tel_contacto,
  };

  await orm.solicitud.create(nuevaSolicitud);

  res.redirect("/");
};

module.exports = solicitud;
