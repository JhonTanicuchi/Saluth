const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const sub_area = {}

sub_area.mostrar = (req,res) => {
    res.render ('modules/sub_area')
}

sub_area.save = async(req,res) => {
    const {nombre} = req.body;
    const nuevaSubarea = {nombre, estado: true};
    await orm.Subarea.create(nuevaSubArea);
    res.redirect("/sub_area")
}

sub_area.list = async (req, res) => {
    const sub_area = await sql.query("SELECT * FROM sub_areas")
    res.render ("modules/sub_area", {sub_area})
}


module.exports = sub_area