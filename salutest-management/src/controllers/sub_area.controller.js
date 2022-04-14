const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const sub_area = {}

sub_area.mostrar = (req,res) => {
    res.render ('modules/sub_area')
}

sub_area.save = async(req,res) => {
    const {nombre} = req.body;
    const nuevaArea = {nombre, estado: true};
    await orm.area.create(nuevaArea);
    res.redirect("/sub_area")
}

sub_area.list = async (req, res) => {
    const areas = await sql.query("SELECT * FROM sub_areas")
    res.render ("modules/sub_area", {sub_areas})
}


module.exports = sub_area