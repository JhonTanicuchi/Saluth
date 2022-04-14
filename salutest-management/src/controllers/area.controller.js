const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const area = {}

area.mostrar = (req,res) => {
    res.render ('modules/area')
}
area.save = async(req,res) => {
    const {nombre} = req.body;
    const nuevaArea = {nombre, estado: true};
    await orm.area.create(nuevaArea);
    res.redirect("/area")
}

area.list = async (req, res) => {
    const areas = await sql.query("SELECT * FROM areas")
    res.render ("modules/area", {areas})
}

module.exports = area