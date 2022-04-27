const diagnostico = (sequelize, type) => {
  return sequelize.define(
    "diagnostico",
    {
      id_diagnostico: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      observacion_diagnostico: type.STRING,
      estado_diagnostico: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionDiagnostico: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDiagnostico: {
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

module.exports = diagnostico;
