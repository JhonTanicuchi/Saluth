const solicitud = (sequelize, type) => {
  return sequelize.define(
    "solicitud",
    {
      id_solicitud: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      institucion_medica: type.STRING,
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

module.exports = solicitud;
