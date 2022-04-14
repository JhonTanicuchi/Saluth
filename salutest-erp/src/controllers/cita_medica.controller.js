const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const cita_medica = {}

cita_medica.mostrar = (req,res) => {
    res.render ('modules/cita_medica')
};

cita_medica.save =async (req, res) => {
    const{ ID, Cedula, Nombre, Correo, Ciudad } =
        req.body;
    const nuevaCita ={
        ID,
        Cedula,
        Nombre,
        Correo,
        Ciudad,
    };

    await orm.cita_medica.create(nuevaCita);
    res.redirect("/");
};

module.exports = cita_medica;

cita_medica.list = async (req, res) => {
    const citas_medicas = await sql.query("SELECT * FROM cita medicas");
    console.log(cita_medica)
    res.render('modules/cita_medica', {citas_medicas});
};