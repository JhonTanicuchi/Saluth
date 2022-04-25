const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const componente = {}

componente.mostrar = async(req,res) => {
    const aplicaciones = await sql.query(
        "SELECT * FROM aplicacions"
      );
    res.render ('modules/componente', {aplicaciones})
}
componente.save = async(req,res) => {
    const {nombre_componente, default_componente, id_aplicacion} = req.body;
    const nuevoComponente = {nombre_componente, default_componente, aplicacionIdAplicacion: id_aplicacion};
    await orm.componente.create(nuevoComponente);
    res.redirect("/componente")
}

module.exports = componente