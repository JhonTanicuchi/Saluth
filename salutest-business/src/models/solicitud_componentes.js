//const { solicitudes_componentes } = require("../config-database/database.orm");

const solicitud_componentes = (sequelize, type) => {
  return sequelize.define(
    "solicitud_componentes",
    {
      id_solicitudes: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_institucion_medica: type.STRING,
      tipo_institucion: type.STRING,
      detalle: type.STRING,
      motivo: type.STRING,
      estado: type.STRING,
      creacionSolicitud: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSolicitud: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP "),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = solicitud_componentes;
