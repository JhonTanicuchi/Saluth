const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const componente = {}

componente.mostrar = async(req,res) => {
    const aplicaciones = await sql.query(
        "SELECT * FROM aplicacions"
  );
  const types_modules = await sql.query("SELECT * FROM catalogos WHERE nombre_catalogo = 'tipo_modulo'");
    res.render("modules/module", { aplicaciones, types_modules });
}
componente.save = async(req,res) => {
    const { nombre_modulo, tipo_modulo, id_aplicacion } = req.body;
    await sql.query(
      "INSERT INTO modulos (nombre_modulo,aplicacionIdAplicacion) VALUES (?,?)",
      [nombre_modulo, id_aplicacion]
    );

    const id_module = await sql.query("SELECT id_modulo FROM modulos WHERE nombre_modulo = ?", [
      nombre_modulo,
    ]);

    await sql.query(
      "INSERT INTO modulo_catalogos (catalogoIdCatalogo,moduloIdModulo) VALUES (?,?)",[tipo_modulo, id_module[0].id_modulo]
    );
    res.redirect("/module");
}

module.exports = componente