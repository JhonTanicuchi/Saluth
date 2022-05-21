const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const home = {};

Handlebars.registerHelper("calc-shortcut", function (list) {
  return -(list.length - 12);
});

Handlebars.registerHelper("for", function (n, block) {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block.fn(i);
  return accum;
});

home.mostrar = async (req, res) => {
  const aplications = await sql.query(
    "SELECT * FROM aplicacions WHERE nombre_aplicacion != 'Saluth Business'"
  );
  const shortcuts = await sql.query(
    "SELECT * FROM shortcuts WHERE estado_shortcut = 1"
  );
  res.render("home", { aplications, shortcuts });
};

module.exports = home;
