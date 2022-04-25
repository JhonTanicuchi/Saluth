const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const module_patient = {};

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

Handlebars.registerHelper("public", function (valor_catalogo) {
  return valor_catalogo == "Público";
});

module_patient.mostrar = (req, res) => {
  res.render("modules/modules_patient");
};

module_patient.list = async (req, res) => {
  const type_module = req.params.id;
  let modules_patient = null;
  const modules_patient_totals = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogo mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest Patient'"
  );

  const modules_patient_private = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogo mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest Patient' and c.valor_catalogo = 'Privado'"
  );

  const modules_patient_public = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a ON m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogo mc ON mc.moduloIdModulo = m.id_modulo JOIN catalogos c ON c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest Patient' and c.valor_catalogo = 'Público'"
  );

  if (type_module == "private") {
    modules_patient = modules_patient_private;
  } else if (type_module == "public") {
    modules_patient = modules_patient_public;
  } else if (type_module == null) {
    modules_patient = modules_patient_totals;
  }

  res.render("modules/modules_patient", {
    modules_patient,
    modules_patient_totals,
    modules_patient_private,
    modules_patient_public,
  });
};

module_patient.unlock = async (req, res) => {
  const id_module_patient = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogo SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Público') WHERE moduloIdModulo = ?",
    [id_module_patient]
  );

  res.redirect(req.get("referer"));
};

module_patient.lock = async (req, res) => {
  const id_module_patient = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogo SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Privado') WHERE moduloIdModulo = ?",
    [id_module_patient]
  );

  res.redirect(req.get("referer"));
};

module.exports = module_patient;