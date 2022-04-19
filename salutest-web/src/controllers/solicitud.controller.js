const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const solicitud = {};

solicitud.mostrar = (req, res) => {
  res.render("modules/solicitud");
};

solicitud.save = async (req, res) => {
  const { nombre_institucion_medica, detalle, tipo_institucion, motivo } =
    req.body;
  const nuevaSolicitud = {
    nombre_institucion_medica,
    detalle,
    tipo_institucion,
    motivo,
    estado: "pendiente",
  };

  await orm.solicitud.create(nuevaSolicitud);

   /* const { cedula, nombres, apellidos } = req.body;
   let nuevaPersona = {
     cedula,
     nombres,
     apellidos
   };

   await orm.persona.create(nuevaPersona); */
  res.redirect("/");
};



module.exports = solicitud;
