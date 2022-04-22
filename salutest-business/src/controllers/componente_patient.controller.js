const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql")
const componente_patient = {}

componente_patient.list = async (req,res) => {

    const componentes_patient = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre = 'Salutest Patient'"
        );

        res.render ('modules/componente_patient' , {
            componentes_patient,
        });

    
}

module.exports = componente_patient