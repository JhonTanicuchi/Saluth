const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const sub_area = {}

sub_area.mostrar = (req,res) => {
    res.render ('modules/sub_areas')
}

sub_area.save = async (req,res) => {
    const {nombre} = req.body;
    const nuevaSubarea = {nombre, estado: true};
    await orm.sub_area.create(nuevaSubarea);
    res.redirect("/sub_areas")
}

sub_area.list = async (req, res) => {
    const sub_areas = await sql.query("SELECT * FROM sub_areas");
    console.log(sub_area);
    res.render ("modules/sub_areas", {sub_areas})
}


module.exports = sub_area