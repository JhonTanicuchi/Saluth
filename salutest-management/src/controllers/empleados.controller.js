const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const empleados = {}

empleados.mostrar = (req,res) => {
    res.render ('modules/empleados')
}

empleados.save = async (req, res) => {
    const {nombre_1} = 
    req.body;
    const nuevosEmpleados = {
        estado:nombre_1,
    };
    await orm.empleado.create(nuevosEmpleados);
    console.log("guardado");
    res.redirect("/empleados");
}

empleados.list = async (req, res) => {
    const eEmpleados = await sql.query(
      "SELECT * FROM usuario_empleados u join empleados e on u.empleadoIdEmpleado = e.id_empleado join personas p on e.personaIdPersona = p.id_persona join rols r on r.id_rol = u.rolIdRol"
    );
    console.log(eEmpleados)
    res.render('modules/empleados', { eEmpleados });
}
module.exports = empleados;