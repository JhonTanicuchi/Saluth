const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const sala = {}

sala.mostrar = (req,res) => {
    res.render ('modules/sala')
}
sala.save = async(req,res) => {
    const {nombre} = req.body;
    const nuevaSala = {nombre, estado: true};
    await orm.sala.create(nuevaSala);
    res.redirect("/sala")
}

sala.list = async (req, res) => {
    const sala = await sql.query("SELECT * FROM sala")
    res.render ("modules/sala", {sala})
}

module.exports = sala