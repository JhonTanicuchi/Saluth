const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql")

const componente_erp = {}

componente_erp.list = async (req,res) => {
    
    const componentes_erp = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest ERP'"
    );

    res.render ('modules/componentes_erp', {
        componentes_erp
    });

}

componente_erp.list_default = async (req, res) => {

    const componentes_erp = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest ERP' and c.default_componente = 1"
    );

    res.render('modules/componentes_erp', {
        componentes_erp,
    });


}

module.exports = componente_erp
