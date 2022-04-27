const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const roles = {}

roles.mostrar = (req, res) => {
    res.render('modules/roles')
}

module.exports = roles

roles.save = async(req, res) => {
    const { id, nom, ape, edad } =
    req.body;
    const nuevosRoles = {
        id,
        nom,
        ape,
        edad,
    };
    await orm.rol.create(nuevosRoles);
    res.redidect('/home');
}
roles.list = async(req, res) => {
    const roles = await sql.query("SELECT * FROM rols");
    console.log(roles)
    res.render('modules/roles', { roles });
}

module.exports = roles;