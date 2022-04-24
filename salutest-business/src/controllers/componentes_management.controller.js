const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql")
const componente_management = {}

componente_management.list = async (req, res) => {

    const componentes_management = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Management'"
    );
    console.log (componentes_management)

    res.render('modules/componentes_management', {
        componentes_management,
    });
}

componente_management.list_default = async (req, res) => {

    const componentes_management = await sql.query(
        "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Management' and c.default_componente = 1"
    );
    console.log (componentes_management)

    res.render('modules/componentes_management', {
        componentes_management,
    });
}

module.exports = componente_management
