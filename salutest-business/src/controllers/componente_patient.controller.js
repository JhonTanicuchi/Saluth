const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql")
const componente_patient = {}

componente_patient.list = async (req,res) => {

    const componente_patient = await sql.query(
        "SELECT * FROM componente_patient WHERE estado = 'patient'"
        );

        res.render ('modules/componente_patient' , {
            componente_patient,
        });

    
}

module.exports = componente_patient