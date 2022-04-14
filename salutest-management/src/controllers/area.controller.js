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

module.exports = area