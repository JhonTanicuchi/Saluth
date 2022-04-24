const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql")
const componente_patient = {}

componente_patient.list = async (req, res) => {
    const lista = true;
    const componentes_patient = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Patient'"
    );
    console.log (componentes_patient)

    res.render('modules/componentes_patient', {
        componentes_patient,
        lista,
    });
}

componente_patient.list_default = async (req, res) => {

    const componentes_patient = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Patient' and c.default_componente = 1"
    );
    console.log (componentes_patient)

    res.render('modules/componentes_patient', {
        componentes_patient,
    });
}

module.exports = componente_patient
