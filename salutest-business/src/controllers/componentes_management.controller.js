const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql")
const componentes_management = {}

componentes_management.list = async (req, res) => {

    const componentes_management = await sql.query(
        "select * from management m join managemetapp m on m.managementappIdManagementapp = m.id_management WHERE m.nombre_managemetapp = 'Salutest Management'"
    );
    console.log (componentes_management)

    res.render('modules/componentes_management', {
        componentes_management,
    });
}

componentes_management.list_default = async (req, res) => {

    const componentes_management = await sql.query(
        "select * from management m join managemetapp m on m.managementappIdManagementapp = m.id_management WHERE m.nombre_managemetapp = 'Salutest Management' and m.default_management = 1"
    );
    console.log (componentes_management)

    res.render('modules/componentes_management', {
        componentes_management,
    });
}

module.exports = componentes_management
