const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");

const modules = {};

/* Defines the length of a list */
Handlebars.registerHelper("length", function (list) {
  return list.length;
});
/* defines if the data type is Public and returns true */
Handlebars.registerHelper("public", function (valor_catalogo) {
  return valor_catalogo == "Público";
});

Handlebars.registerHelper("name_app", function (view) {
  return view[0].nombre_aplicacion;
});

/* Allows you to see the crud of modules, with the respective applications and types */
modules.form = async (req, res) => {
  const aplications = await sql.query("SELECT * FROM aplicacions");
  const types_modules = await sql.query(
    "SELECT * FROM catalogos WHERE nombre_catalogo = 'tipo_modulo'"
  );
  res.render("modules/modules/modules_form", { aplications, types_modules });
};

/* Allows you to save the created module in the database, with the parameters of the view inputs. */
modules.save = async (req, res) => {
  const { nombre_modulo, tipo_modulo, id_aplicacion } = req.body;
  await sql.query(
    "INSERT INTO modulos (nombre_modulo,aplicacionIdAplicacion) VALUES (?,?)",
    [nombre_modulo, id_aplicacion]
  );

  const id_module = await sql.query(
    "SELECT id_modulo FROM modulos WHERE nombre_modulo = ?",
    [nombre_modulo]
  );

  await sql.query(
    "INSERT INTO modulo_catalogos (catalogoIdCatalogo,moduloIdModulo) VALUES (?,?)",
    [tipo_modulo, id_module[0].id_modulo]
  );
  res.redirect("/modules");
};

/* Allows you to filter the modules and display them in the view.*/
modules.list = async (req, res) => {
  const filter = req.params.filter;
  const type = req.params.type;

  let list_types = [];

  const aplications = await sql.query("SELECT * FROM aplicacions");
  const types = await sql.query(
    "SELECT * FROM catalogos WHERE nombre_catalogo = 'tipo_modulo'"
  );

  types.forEach(async (element) => {
    let modules_type = await sql.query(
      "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogos mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = ? and c.valor_catalogo = ?",
      [filter, element.valor_catalogo]
    );
    list_types.push({
      tipo: element.valor_catalogo,
      cantidad: modules_type.length,
    });
  });

  const modules_apps = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a ON m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogos mc ON mc.moduloIdModulo = m.id_modulo JOIN catalogos c ON c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = ?",
    [filter]
  );

  const modules_type = await sql.query(
    "SELECT * FROM modulos m JOIN aplicacions a on m.aplicacionIdAplicacion = a.id_aplicacion JOIN modulo_catalogos mc on mc.moduloIdModulo = m.id_modulo join catalogos c on c.id_catalogo = mc.catalogoIdCatalogo WHERE a.nombre_aplicacion = ? and c.valor_catalogo = ?",
    [filter, type]
  );

  let view_modules = modules_type;

  if (filter && type == null) {
    view_modules = modules_apps;
  }

  function SortArray(x, y) {
    if (x.tipo > y.tipo) {
      return -1;
    }
    if (x.tipo < y.tipo) {
      return 1;
    }
    return 0;
  }
  list_types.sort(SortArray);

  res.render("modules/modules/modules", {
    filter,
    aplications,
    list_types,
    modules_apps,
    view_modules,
  });
};

/* Allows you to unlock a module and make it public */
modules.unlock = async (req, res) => {
  const id_module_patient = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogos SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Público') WHERE moduloIdModulo = ?",
    [id_module_patient]
  );

  res.redirect(req.get("referer"));
};

/* Allows you to lock a module and make it private */
modules.lock = async (req, res) => {
  const id_module_patient = req.params.id;
  await sql.query(
    "UPDATE modulo_catalogos SET catalogoIdCatalogo = (SELECT id_catalogo FROM catalogos WHERE valor_catalogo = 'Privado') WHERE moduloIdModulo = ?",
    [id_module_patient]
  );

  res.redirect(req.get("referer"));
};

module.exports = modules;
