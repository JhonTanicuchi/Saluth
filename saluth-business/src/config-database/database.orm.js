const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const dbName = process.env.DB_SCHEMAS || "Saluth";

mysql
  .createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  })
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
      console.info("Base de datos creada o comprobada correctamente");
    });
  });

const sequelize = new Sequelize("Saluth", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log("No se conecto");
  });

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

const catalogo_Modelo = require("../models/catalogo");
const shortcut_Modelo = require("../models/shortcut");
const persona_Modelo = require("../models/persona");
const empleado_business_Modelo = require("../models/empleado_business");
const usuario_business_Modelo = require("../models/usuario_business");
const empleado_Modelo = require("../models/empleado");
const paciente_Modelo = require("../models/paciente");
const usuarioEmpleado_Modelo = require("../models/usuario_empleado");
const usuarioPaciente_Modelo = require("../models/usuario_paciente");
const enfermedad_Modelo = require("../models/enfermedad");
const cita_medica_Modelo = require("../models/cita_medica");
const area_empleado_Modelo = require("../models/area_empleado");
const atencionMedica_citaMedica_Modelo = require("../models/atencionMedica_citaMedica");
const diagnostico_Modelo = require("../models/diagnostico");
const diagnostico_enfermedad_Modelo = require("../models/diagnostico_enfermedad");
const area_Modelo = require("../models/area");
const examen_Modelo = require("../models/examen");
const mensaje_Modelo = require("../models/mensaje");
const medicamento_Modelo = require("../models/medicamento");
const turno_Modelo = require("../models/turno");
const horario_Modelo = require("../models/horario");
const sala_Modelo = require("../models/sala");
const sintoma_Modelo = require("../models/sintoma");
const sub_area_Modelo = require("../models/sub_area");
const equipo_medico_Modelo = require("../models/equipo_medico");
const transmision_Modelo = require("../models/transmision");
const enfermedad_sintoma_Modelo = require("../models/enfermedad_sintoma");
const rol_Modelo = require("../models/rol");
const rol_permiso_Modelo = require("../models/rol_permiso");
const permiso_Modelo = require("../models/permiso");
const area_especialidade_Modelo = require("../models/area_especialidad");
const especialidad_Modelo = require("../models/especialidad");
const cargo_Modelo = require("../models/cargo");
const atencion_medica_Modelo = require("../models/atencion_medica");
const receta_medica_Modelo = require("../models/receta_medica");
const chat_Modelo = require("../models/chat");
const empleado_cargo_Modelo = require("../models/empleado_cargo");
const especialidad_empleado_Modelo = require("../models/especialidad_empleado");
const subArea_empleado_Modelo = require("../models/subArea_empleado");
const area_citaMedica_Modelo = require("../models/area_citaMedica");
const historia_clinica_Modelo = require("../models/historia_clinica");
const solicitud_Modelo = require("../models/solicitud");
const solicitudes_componentes_Modelo = require("../models/solicitud_componentes");
const institucion_medica_Modelo = require("../models/institucion_medica");
const modulo_Modelo = require("../models/modulo");
const aplicacion_Modelo = require("../models/aplicacion");
const sucursal_medica_Modelo = require("../models/sucursal_medica");
const contrato_Modelo = require("../models/contrato");
const provincia_Modelo = require("../models/provincia");
const canton_Modelo = require("../models/canton");
const parroquia_Modelo = require("../models/parroquia");
const image_Modelo = require("../models/image");

const catalogo = catalogo_Modelo(sequelize, Sequelize);
const shortcut = shortcut_Modelo(sequelize, Sequelize);
const persona = persona_Modelo(sequelize, Sequelize);
const empleado_business = empleado_business_Modelo(sequelize, Sequelize);
const usuario_business = usuario_business_Modelo(sequelize, Sequelize);
const empleado = empleado_Modelo(sequelize, Sequelize);
const paciente = paciente_Modelo(sequelize, Sequelize);
const usuario_empleado = usuarioEmpleado_Modelo(sequelize, Sequelize);
const usuario_paciente = usuarioPaciente_Modelo(sequelize, Sequelize);
const enfermedad = enfermedad_Modelo(sequelize, Sequelize);
const cita_medica = cita_medica_Modelo(sequelize, Sequelize);
const area_empleado = area_empleado_Modelo(sequelize, Sequelize);
const atencionMedica_citaMedica = atencionMedica_citaMedica_Modelo(sequelize, Sequelize);
const diagnostico = diagnostico_Modelo(sequelize, Sequelize);
const diagnostico_enfermedad = diagnostico_enfermedad_Modelo(sequelize, Sequelize);
const area = area_Modelo(sequelize, Sequelize);
const examen = examen_Modelo(sequelize, Sequelize);
const mensaje = mensaje_Modelo(sequelize, Sequelize);
const medicamento = medicamento_Modelo(sequelize, Sequelize);
const turno = turno_Modelo(sequelize, Sequelize);
const horario = horario_Modelo(sequelize, Sequelize);
const sala = sala_Modelo(sequelize, Sequelize);
const sintoma = sintoma_Modelo(sequelize, Sequelize);
const sub_area = sub_area_Modelo(sequelize, Sequelize);
const equipo_medico = equipo_medico_Modelo(sequelize, Sequelize);
const transmision = transmision_Modelo(sequelize, Sequelize);
const enfermedad_sintoma = enfermedad_sintoma_Modelo(sequelize, Sequelize);
const rol = rol_Modelo(sequelize, Sequelize);
const rol_permiso = rol_permiso_Modelo(sequelize, Sequelize);
const permiso = permiso_Modelo(sequelize, Sequelize);
const receta_medica = receta_medica_Modelo(sequelize, Sequelize);
const area_especialidad = area_especialidade_Modelo(sequelize, Sequelize);
const especialidad = especialidad_Modelo(sequelize, Sequelize);
const cargo = cargo_Modelo(sequelize, Sequelize);
const empleado_cargo = empleado_cargo_Modelo(sequelize, Sequelize);
const chat = chat_Modelo(sequelize, Sequelize);
const especialidad_empleado = especialidad_empleado_Modelo(sequelize, Sequelize);
const subArea_empleado = subArea_empleado_Modelo(sequelize, Sequelize);
const area_citaMedica = area_citaMedica_Modelo(sequelize, Sequelize);
const atencion_medica = atencion_medica_Modelo(sequelize, Sequelize);
const historia_clinica = historia_clinica_Modelo(sequelize, Sequelize);
const solicitud = solicitud_Modelo(sequelize, Sequelize);
const solicitudes_componentes = solicitudes_componentes_Modelo(sequelize, Sequelize);
const institucion_medica = institucion_medica_Modelo(sequelize, Sequelize);
const modulo = modulo_Modelo(sequelize, Sequelize);
const aplicacion = aplicacion_Modelo(sequelize, Sequelize);
const sucursal_medica = sucursal_medica_Modelo(sequelize, Sequelize);
const contrato = contrato_Modelo(sequelize, Sequelize);
const provincia = provincia_Modelo(sequelize, Sequelize);
const canton = canton_Modelo(sequelize, Sequelize);
const parroquia = parroquia_Modelo(sequelize, Sequelize);
const image = image_Modelo(sequelize, Sequelize);

//relaciones

persona.hasMany(empleado_business);
empleado_business.belongsTo(persona);

empleado_business.hasMany(usuario_business);
usuario_business.belongsTo(empleado_business);

rol.hasMany(usuario_business);
usuario_business.belongsTo(rol);

persona.hasMany(empleado);
empleado.belongsTo(persona);

empleado.hasMany(usuario_empleado);
usuario_empleado.belongsTo(empleado);

rol.hasMany(usuario_empleado);
usuario_empleado.belongsTo(rol);

persona.hasMany(paciente);
paciente.belongsTo(persona);

paciente.hasMany(usuario_paciente);
usuario_paciente.belongsTo(paciente);

rol.hasMany(usuario_paciente);
usuario_paciente.belongsTo(rol);

rol.belongsToMany(permiso, {
  through: rol_permiso,
});
permiso.belongsToMany(rol, {
  through: rol_permiso,
});

usuario_business.hasMany(shortcut);
shortcut.belongsTo(usuario_business);

image.hasMany(usuario_business);
usuario_business.belongsTo(image);

usuario_empleado.hasMany(shortcut);
shortcut.belongsTo(usuario_empleado);

institucion_medica.hasMany(solicitud);
solicitud.belongsTo(institucion_medica);

aplicacion.hasMany(modulo);
modulo.belongsTo(aplicacion);

institucion_medica.hasMany(sucursal_medica);
sucursal_medica.belongsTo(institucion_medica);

institucion_medica.hasMany(empleado);
empleado.belongsTo(institucion_medica);

catalogo.belongsToMany(institucion_medica, {
  through: "institucion_catalogo",
});
institucion_medica.belongsToMany(catalogo, {
  through: "institucion_catalogo",
});

catalogo.belongsToMany(modulo, {
  through: "modulo_catalogo",
});
modulo.belongsToMany(catalogo, {
  through: "modulo_catalogo",
});

provincia.hasMany(canton);
canton.belongsTo(provincia);

canton.hasMany(parroquia);
parroquia.belongsTo(canton);

module.exports = {
  catalogo,
  persona,
  empleado,
  paciente,
  usuario_empleado,
  usuario_paciente,
  enfermedad,
  cita_medica,
  area_empleado,
  atencionMedica_citaMedica,
  diagnostico,
  diagnostico_enfermedad,
  area,
  examen,
  mensaje,
  medicamento,
  turno,
  horario,
  sala,
  sintoma,
  sub_area,
  equipo_medico,
  transmision,
  enfermedad_sintoma,
  rol,
  rol_permiso,
  permiso,
  receta_medica,
  area_especialidad,
  especialidad,
  cargo,
  atencion_medica,
  empleado_business,
  usuario_business,
  empleado_cargo,
  chat,
  especialidad_empleado,
  subArea_empleado,
  area_citaMedica,
  historia_clinica,
  solicitud,
  solicitudes_componentes,
  institucion_medica,
  modulo,
  aplicacion,
  sucursal_medica,
  contrato,
  provincia,
  canton,
  parroquia,
  shortcut,
  image,
};
