const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const sala = {}

sala.mostrar = (req,res) => {
    res.render ('modules/salas')
}
sala.save = async(req,res) => {
    const {nombre} = req.body;
    const nuevaSala = {nombre, estado: true};
    await orm.sala.create(nuevaSala);
    res.redirect("/salas")
}

sala.list = async (req, res) => {
    const sala = await sql.query("SELECT * FROM salas")
    res.render ("modules/salas", {sala})
}

module.exports = sala