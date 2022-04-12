const enfermedad = (sequelize, type) => {
  return sequelize.define(
    "enfermedad",
    {
      id_enfermedad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING(99),
      descripcion: type.STRING,
      vacuna: type.STRING,
      creacionEnfermedades: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEnfermedades: {
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

module.exports = enfermedad;
