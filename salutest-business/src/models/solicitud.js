const solicitud = (sequelize, type) => {
  return sequelize.define(
    "solicitud",
    {
      id_solicitud: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_institucion_medica: type.STRING,
      tipo_institucion: type.STRING,
      categoria_institucion: type.STRING,
      sucursales: type.BOOLEAN,
      n_sucursales: type.INTEGER,
      nombre_contacto: type.STRING,
      email_contacto: type.STRING,
      tel_contacto: type.STRING,
      estado: {
        type: type.STRING,
        defaultValue: "pendiente",
      },
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
