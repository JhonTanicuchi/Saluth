const atencion_medica = (sequelize, type) => {
  return sequelize.define(
    "atencion_medica",
    {
      id_atencion_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: type.STRING(99),
      hora_llegada: type.STRING,
      hora_salida: type.STRING,
      virtual: type.BOOLEAN,

      creacionAtencion_medicas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionatencion_medicas: {
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
