const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const module_management = {};

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

Handlebars.registerHelper("formatDate", function (date) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});


Handlebars.registerHelper("public", function (valor_catalogo) {
  return valor_catalogo == "Público";
});

module_management.mostrar = (req, res) => {
  res.render("modules/modules_management");
};

module_management.list = async (req, res) => {
  const type_module = req.params.id;
  let modules_management = null;
  const modules_management_totals = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogos mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest Management'"
  );

  const modules_management_private = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogos mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest Management' and c.valor_catalogo = 'Privado'"
  );

  const modules_management_public = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogos mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = 'Salutest Management' and c.valor_catalogo = 'Público'"
  );

  if (type_module == "private") {
    modules_management = modules_management_private;
  } else if (type_module == "public") {
    modules_management = modules_management_public;
  } else if (type_module == null) {
    modules_management = modules_management_totals;
  }

  res.render("modules/modules_management", {
    modules_management,
    modules_management_totals,
    modules_management_private,
    modules_management_public,
  });
};

module_management.unlock = async (req, res) => {
  const id_module_management = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogos SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Público') WHERE moduloIdModulo = ?",
    [id_module_management]
  );
  
  res.redirect(req.get("referer"));
};

module_management.lock = async (req, res) => {
  const id_module_management = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogos SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Privado') WHERE moduloIdModulo = ?",
    [id_module_management]
  );
    
  res.redirect(req.get("referer"));
};

module.exports = module_management;






