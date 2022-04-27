const atencion_medica = (sequelize, type) => {
  return sequelize.define(
    "atencion_medica",
    {
      id_atencion_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_atencion_medica: type.STRING(99),
      hora_llegada: type.STRING,
      hora_salida: type.STRING,
      estado_atencion_medica: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionAtencion_medica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionAtencion_medica: {
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

module.exports = atencion_medica;
