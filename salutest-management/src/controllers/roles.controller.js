const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const roles = {}

roles.mostrar = (req, res) => {
    res.render('modules/roles')
}

module.exports = roles

roles.save = async(req, res) => {
    const { rol, ced, name, ape, edad } =
    req.body;
    const nuevosRoles = {
        rol,
        ced,
        name,
        ape,
        edad,
    };
    await orm.rol.create(nuevosRoles);
    res.redidect('/home');
}
roles.list = async(req, res) => {
    const roles = await sql.query("SELECT * FROM rols");
    console.log(roles)
    res.render('modules/empleados', { roles });
}

module.exports = rol;