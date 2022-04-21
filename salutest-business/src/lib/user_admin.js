const sql = require("../config-database/database.sql");
const orm = require("../config-database/database.orm");

const user_admin = {};

user_admin.new_user = () => {
  sql.query(
    "select * from usuario_businesses u join empleado_businesses e on u.id_usuario_business = e.id_empleado_business join personas p on e.personaIdPersona = p.id_persona WHERE p.cedula = '0110000100'",
    async function (error, results, fields) {
      if (error) throw error;
      if (results.length != 0) {
        console.log("Ya existe usuario admin");
        console.log(results);
      } else {
        sql.query(
          "INSERT INTO rols (nombre) VALUES ('Administrador')"
        );
        sql.query(
          "INSERT INTO personas (cedula,nombres,fecha_nacimiento,direccion)VALUES('0110000100','Salutest','01/07/2019','Salutest')"
        );
        sql.query(
          "INSERT INTO empleado_businesses (personaIdPersona) VALUES ((SELECT id_persona FROM personas where cedula = '0110000100'))"
        );
        sql.query(
          "INSERT INTO usuario_businesses (username,password,correo,empleadoBusinessIdEmpleadoBusiness,rolIdRol)VALUES('admin_salutest','$2a$10$bLoPMbtf5TYXPQPMFiXajus1VK18vk2Ll1O.js1.ZyO6Iw9glE0fe','empresasalutest@gmail.com',(SELECT e.id_empleado_business FROM empleado_businesses e JOIN personas p ON p.id_persona = e.personaIdPersona where p.cedula = '0110000100'),(SELECT id_rol FROM rols WHERE nombre = 'Administrador'))"
        );
        console.log("Se creo correctamente el usuario admin");
      }
    }
  );
};

module.exports = user_admin;
