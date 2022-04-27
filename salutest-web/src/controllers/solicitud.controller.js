const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const solicitud = {};

solicitud.mostrar = async (req, res) => {
  const tipo_instituciones_medicas = await sql.query(
    "SELECT * FROM catalogos WHERE nombre_catalogo = 'tipo_institucion'"
  );
  const categoria_instituciones_medicas = await sql.query(
    "SELECT * FROM catalogos WHERE nombre_catalogo = 'categoria_institucion'"
  );
 /*    const provincias = await sql.query(
      "SELECT * FROM provincia"
    );
    const cantones = await sql.query(
      "SELECT * FROM cantons"
    );
  const parroquias = await sql.query(
      "SELECT * FROM parroquia"
    ); */

  console.log(tipo_instituciones_medicas);
  console.log(categoria_instituciones_medicas);

  res.render("modules/solicitud", {
    tipo_instituciones_medicas,
    categoria_instituciones_medicas,
   /*  provincias,
    cantones,
    parroquias, */
  });
};

solicitud.save = async (req, res) => {
  const {
    nombre_institucion_medica,
    tipo_institucion,
    cedula_contacto,
    nombres_contacto,
    apellidos_contacto,
    email_contacto,
    tel_contacto,
  } = req.body;

  const categoria_tipo_institucion_valor = await sql.query(
    "SELECT * FROM catalogos WHERE id_catalogo = ?",
    [tipo_institucion]
  );

  const nuevaSolicitud = {
    nombre_institucion_medica,
    tipo_institucion: categoria_tipo_institucion_valor[0].valor_catalogo,
    cedula_contacto,
    nombres_contacto,
    apellidos_contacto,
    email_contacto,
    tel_contacto,
  };

  await orm.solicitud.create(nuevaSolicitud);

  res.redirect("/");
};

module.exports = solicitud;
