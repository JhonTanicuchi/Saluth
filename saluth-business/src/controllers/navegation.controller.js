const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const navegation = {};

Handlebars.registerHelper("tipos_modulos", function (tipo, tipo_modulo, nombre_catalogo) {
  return nombre_catalogo == "categoria_modulo" && tipo == tipo_modulo;
});

navegation.nav = async (req, res, next) => {
  const app = "Saluth Business";
  const app_modules = await sql.query(
    "SELECT * FROM aplicacions a join modulos m on a.id_aplicacion = m.aplicacionIdAplicacion join modulo_catalogo mc on mc.moduloIdModulo = m.id_modulo join catalogos c on mc.catalogoIdCatalogo = c.id_catalogo WHERE a.nombre_aplicacion =?",
    [app]
  );

  const categoria_modulos = await sql.query(
    "SELECT * FROM catalogos WHERE nombre_catalogo = 'categoria_modulo'"
  );

  res.locals.app_modules = app_modules;
  res.locals.categoria_modulos = categoria_modulos;

  next();
};

module.exports = navegation;
