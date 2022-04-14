const cita_medica = {}

cita_medica.mostrar = (req,res) => {
    res.render ('modules/cita_medica')
}
cita_medica.list = async (req, res) => {
    const citas_medicas = await sql.query("SELECT * FROM cita_medica");
    console.log(cita_medica)
    res.render('modules/cita_medica', {cita_medica});
};

module.exports = cita_medica

