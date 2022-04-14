const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const empleados = {}

empleados.mostrar = (req,res) => {
    res.render ('modules/empleados')
}

empleados.save = async (req, res) => {
    const {nombre_1, nombre_2} = 
    req.body;
    const nuevosEmpleados = {
        estado:nombre_1,
    };
    await orm.empleado.create(nuevosEmpleados);
    console.log("guardado");
    res.redidect('/home');
}
empleados.list = async (req, res) => {
    const eEmpleados = await sql.query("SELECT * FROM empleados");
    console.log(eEmpleados)
    res.render('modules/empleados', { eEmpleados });
}
module.exports = empleados;