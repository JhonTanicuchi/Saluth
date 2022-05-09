const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");

const medical_institutions = {};

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

Handlebars.registerHelper("farmacia", function (categoria) {
  return categoria == "Farmacia";
});

Handlebars.registerHelper("centro_medico", function (categoria) {
  return categoria == "Centro Médico";
});

Handlebars.registerHelper("clinica", function (categoria) {
  return categoria == "Clínica";
});

Handlebars.registerHelper("hospital", function (categoria) {
  return categoria == "Hospital";
});

medical_institutions.mostrar = (req, res) => {
  res.render("modules/medical_institutions/medical_institutions");
};

medical_institutions.list = async (req, res) => {
  const instituciones_private = await sql.query(
    "SELECT * FROM institucion_medicas i join institucion_catalogo ic on i.id_institucion_medica = ic.institucionMedicaIdInstitucionMedica join catalogos c on c.id_catalogo = ic.catalogoIdCatalogo WHERE c.valor_catalogo = 'Privada'"
  );

  const instituciones_public = await sql.query(
    "SELECT * FROM institucion_medicas i join institucion_catalogo ic on i.id_institucion_medica = ic.institucionMedicaIdInstitucionMedica join catalogos c on c.id_catalogo = ic.catalogoIdCatalogo WHERE c.valor_catalogo = 'Pública'"
  );

  const filtro = req.params.parametro;
  let instituciones = await sql.query("SELECT * FROM institucion_medicas");

  if (filtro) {
    instituciones = await sql.query(
      "SELECT * FROM institucion_medicas i join institucion_catalogo ic on i.id_institucion_medica = ic.institucionMedicaIdInstitucionMedica join catalogos c on c.id_catalogo = ic.catalogoIdCatalogo WHERE c.valor_catalogo = ?",
      [filtro]
    );
  } else {
    instituciones = await sql.query("SELECT * FROM institucion_medicas");
  }

  console.log(instituciones);
  res.render("modules/medical_institutions/medical_institutions", {
    instituciones,
    instituciones_private,
    instituciones_public,
  });
};

module.exports = medical_institutions;
