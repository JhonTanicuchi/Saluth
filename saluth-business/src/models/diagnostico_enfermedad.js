const diagnostico_enfermedad = (sequelize, type) => {
  return sequelize.define(
    "diagnostico_enfermedad",
    {
      id_diagnostico_enfermedad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionDiagnostico_enfermedad: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDiagnostico_enfermedad: {
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

module.exports = diagnostico_enfermedad;
