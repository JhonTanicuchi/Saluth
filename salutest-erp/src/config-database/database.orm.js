const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const dbName = process.env.DB_SCHEMAS || "database_salutest";

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

const persona_Modelo = require("../models/persona");
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
const medicamento_Modelo = require("../models/medicamentos");
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
const tipo_examenes_Modelo = require("../models/tipo_examen");
const receta_medica_Modelo = require("../models/receta_medica");
const chat_Modelo = require("../models/chat");
const empleado_cargo_Modelo = require("../models/empleado_cargo");
const especialidad_empleado_Modelo = require("../models/especialidad_empleado");
const subArea_empleado_Modelo = require("../models/subArea_empleado");
const area_citaMedica_Modelo = require("../models/area_citaMedica");
const historia_clinica_Modelo = require("../models/historia_clinica");

const sequelize = new Sequelize("database_salutest", "root", "", {
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

const persona = persona_Modelo(sequelize, Sequelize);
const empleado = empleado_Modelo(sequelize, Sequelize);
const paciente = paciente_Modelo(sequelize, Sequelize);
const usuario_empleado = usuarioEmpleado_Modelo(sequelize, Sequelize);
const usuario_paciente = usuarioPaciente_Modelo(sequelize, Sequelize);
const enfermedad = enfermedad_Modelo(sequelize, Sequelize);
const cita_medica = cita_medica_Modelo(sequelize, Sequelize);
const area_empleado = area_empleado_Modelo(sequelize, Sequelize);
const atencionMedica_citaMedica = atencionMedica_citaMedica_Modelo(
  sequelize,
  Sequelize
);
const diagnostico = diagnostico_Modelo(sequelize, Sequelize);
const diagnostico_enfermedad = diagnostico_enfermedad_Modelo(
  sequelize,
  Sequelize
);
const area = area_Modelo(sequelize, Sequelize);
const tipo_examen = tipo_examenes_Modelo(sequelize, Sequelize);
const examen = examen_Modelo(sequelize, Sequelize);
const mensaje = mensaje_Modelo(sequelize, Sequelize);
const medicamento = medicamento_Modelo(sequelize, Sequelize);
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

//relaciones

persona.hasMany(empleado);
empleado.belongsTo(persona);

persona.hasMany(paciente);
paciente.belongsTo(persona);

empleado.hasMany(usuario_empleado);
usuario_empleado.belongsTo(empleado);

paciente.hasMany(usuario_paciente);
usuario_paciente.belongsTo(paciente);

module.exports = {
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
  tipo_examen,
  examen,
  mensaje,
  medicamento,
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
};
