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
const rol_Modelo = require("../models/rol");
const rol_permiso_Modelo = require("../models/rol_permiso");
const permiso_Modelo = require("../models/permiso");
const cita_medica_Modelo = require("../models/cita_medica");
const area_empleado_Modelo = require("../models/area_empleado");
const atencionMedica_citaMedica_Modelo = require("../models/atencionMedica_citaMedica");
const diagnostico_Modelo = require("../models/diagnostico");
const diagnostico_enfermedad_Modelo = require("../models/diagnostico_enfermedad");
const area_Modelo = require("../models/area");
const area_especialidade_Modelo = require("../models/area_especialidad");
const especialidad_Modelo = require("../models/especialidad");
const cargo_Modelo = require("../models/cargo");
const atencion_medica_Modelo = require("../models/atencion_medica");

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
const atencionMedica_citaMedica = atencionMedica_citaMedica_Modelo(sequelize, Sequelize);
const diagnostico = diagnostico_Modelo(sequelize, Sequelize);
const diagnostico_enfermedad = diagnostico_enfermedad_Modelo(sequelize, Sequelize); 
const area = area_Modelo(sequelize, Sequelize);
const rol = rol_Modelo(sequelize, Sequelize);
const rol_permiso = rol_permiso_Modelo(sequelize, Sequelize);
const permiso = permiso_Modelo(sequelize, Sequelize);
const tipo_examene = tipo_examene_Modelo(sequelize, Sequelize);
const examen = examen_Modelo(sequelize, Sequelize);
const mensaje = mensaje_Modelo(sequelize, Sequelize);
const medicamento = medicamento_Modelo(sequelize, Sequelize);
const turno = turno_Modelo(sequelize, Sequelize);
const area_especialidade = area_especialidade_Modelo(sequelize, Sequelize);
const especialidad = especialidad_Modelo(sequelize, Sequelize);
const cargo = cargo_Modelo(sequelize, Sequelize);
const atencion_medica = atencion_medica_Modelo(sequelize, Sequelize);

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
};