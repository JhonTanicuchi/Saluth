const diagnostico = (sequelize, type) => {
  return sequelize.define(
    "diagnostico",
    {
      id_diagnostico: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      observacion: type.STRING,
      

      creacionDiagnosticos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDiagnosticos: {
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
