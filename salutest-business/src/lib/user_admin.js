const sql = require("../config-database/database.sql");
const orm = require("../config-database/database.orm");

const user_admin = {};

user_admin.new_user = async () => {
  const usuario_Admin = await sql.query(
    "select * from usuario_businesses u join empleado_businesses e on u.id_usuario_business = e.id_empleado_business join personas p on e.personaIdPersona = p.id_persona WHERE p.cedula_persona = '0110000100'"
  );

  if (usuario_Admin.length != 0) {
    console.log("Ya existe usuario admin");
    console.log(usuario_Admin);
  } else {
    await sql.query("INSERT INTO rols (nombre_rol) VALUES ('Administrador')");
    await sql.query(
      "INSERT INTO personas (cedula_persona,nombres_persona,fecha_nacimiento_persona,direccion_persona)VALUES('0110000100','Salutest','01/07/2019','Salutest')"
    );
    await sql.query(
      "INSERT INTO empleado_businesses (personaIdPersona) VALUES ((SELECT id_persona FROM personas where cedula_persona = '0110000100'))"
    );
    await sql.query(
      "INSERT INTO usuario_businesses (username,password,correo,empleadoBusinessIdEmpleadoBusiness,rolIdRol)VALUES('admin_salutest','$2a$10$bLoPMbtf5TYXPQPMFiXajus1VK18vk2Ll1O.js1.ZyO6Iw9glE0fe','empresasalutest@gmail.com',(SELECT e.id_empleado_business FROM empleado_businesses e JOIN personas p ON p.id_persona = e.personaIdPersona where p.cedula_persona = '0110000100'),(SELECT id_rol FROM rols WHERE nombre_rol = 'Administrador'))"
    );
    console.log("Se creo correctamente el usuario admin");
  }
};

module.exports = user_admin;
