const diagnostico_enfermedad = (sequelize, type) => {
  return sequelize.define(
    "diagnostico_enfermedad",
    {
      id_diagnostico_enfermedad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      

      creacionDiagnosticos_enfermedades: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDiagnosticos_enfermedades: {
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
