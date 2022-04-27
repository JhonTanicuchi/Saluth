const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const credentials = {};

credentials.create = async (
  req,
  res,
  cedula,
  nombres,
  apellidos,
  username,
  passwordEncrypt,
  correo,
  institucion_medica
) => {
  console.log(
    cedula,
    nombres,
    apellidos,
    username,
    passwordEncrypt,
    correo,
    institucion_medica
  );
  //Creacion del usuario admin de contrato
  await sql.query(
    "INSERT INTO personas (cedula_persona,nombres_persona,apellidos_persona) VALUES(?,?,?)",
    [cedula, nombres, apellidos]
  );
  await sql.query(
    "INSERT INTO empleados (personaIdPersona,institucionMedicaIdInstitucionMedica) VALUES ((SELECT id_persona FROM personas where cedula_persona = ?),?)",
    [cedula, institucion_medica[0].id_institucion_medica]
  );
  await sql.query(
    "INSERT INTO usuario_empleados (username,password,correo,empleadoIdEmpleado,rolIdRol)VALUES(?,?,?,(SELECT e.id_empleado FROM empleados e JOIN personas p ON p.id_persona = e.personaIdPersona where p.cedula_persona = ?),(SELECT id_rol FROM rols WHERE nombre_rol = 'Administrador'))",
    [username, passwordEncrypt, correo, cedula]
  );

  res.end();
};

module.exports = credentials;
