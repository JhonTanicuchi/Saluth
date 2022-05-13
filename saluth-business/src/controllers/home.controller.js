const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const control_panel = {}

Handlebars.registerHelper("calc-shortcut", function (length) {
    return -(length - 12);
    
});

Handlebars.registerHelper("for", function (n, block) {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block.fn(i);
  return accum;
});

control_panel.mostrar = async(req, res) => {
    const aplications = await sql.query("SELECT * FROM aplicacions");
    const num = 5;
    res.render("home", { aplications, num });
}

module.exports = control_panel
