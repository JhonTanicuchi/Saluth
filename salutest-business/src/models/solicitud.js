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
      provincia_solicitud: type.STRING,
      canton_solicitud: type.STRING,
      parroquia_solicitud: type.STRING,
      direccion_solicitud: type.STRING,
      cedula_contacto: type.STRING,
      nombres_contacto: type.STRING,
      apellidos_contacto: type.STRING,
      email_contacto: type.STRING,
      tel_contacto: type.STRING,
      estado_solicitud: {
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
