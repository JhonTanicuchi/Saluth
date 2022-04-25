const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const module_erp = {};

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

module_erp.mostrar = (req, res) => {
  res.render("modules/modules_erp");
};

module_erp.list = async (req, res) => {
  const type_module = req.params.id;
  let modules_erp = null;
  const modules_erp_totals = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogo mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest ERP'"
  );

  const modules_erp_private = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogo mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest ERP' and c.valor_catalogo = 'Privado'"
  );

  const modules_erp_public = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogo mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest ERP' and c.valor_catalogo = 'Público'"
  );

  if (type_module == "private") {
    modules_erp = modules_erp_private;
  } else if (type_module == "public") {
    modules_erp = modules_erp_public;
  } else if (type_module == null) {
    modules_erp = modules_erp_totals;
  }

  res.render("modules/modules_erp", {
    modules_erp,
    modules_erp_totals,
    modules_erp_private,
    modules_erp_public,
  });
};

module_erp.unlock = async (req, res) => {
  const id_module_erp = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogo SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Público') WHERE moduloIdModulo = ?",
    [id_module_erp]
    );
    res.redirect(req.get("referer"));
};

module_erp.lock = async (req, res) => {
  const id_module_erp = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogo SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Privado') WHERE moduloIdModulo = ?",
    [id_module_erp]
  );

  res.redirect(req.get("referer"));
};

module.exports = module_erp;
