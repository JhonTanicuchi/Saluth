const credentials = {};

credentials.create = (req, res) => {
  //Creacion del usuario admin de contrato
  /*  await sql.query(
    "INSERT INTO empleado_businesses (personaIdPersona) VALUES ((SELECT id_persona FROM personas where cedula = '0110000100'))"
  );
  await sql.query(
    "INSERT INTO usuario_businesses (username,password,correo,empleadoBusinessIdEmpleadoBusiness)VALUES('admin_salutest','$2a$10$bLoPMbtf5TYXPQPMFiXajus1VK18vk2Ll1O.js1.ZyO6Iw9glE0fe','NA',(SELECT e.id_empleado_business FROM empleado_businesses e JOIN personas p ON p.id_persona = e.personaIdPersona where cedula = '0110000100'))"
  ); */
  
  const usuarioemail= "Salutest.usuario"
};

module.exports = credentials;
