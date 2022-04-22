//const { solicitudes_componentes } = require("../config-database/database.orm");

const solicitudes_componentes = (sequelize, type) => {
  return sequelize.define(
    "solicitudes_componentes",
    {
      id_solicitudes: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_solicitud: type.STRING,
      descripcion: type.STRING,
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

module.exports = solicitudes_componentes;
