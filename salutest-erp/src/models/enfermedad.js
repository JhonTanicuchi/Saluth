const enfermedad = (sequelize, type) => {
  return sequelize.define(
    "enfermedad",
    {
      id_enfermedad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_enfermedad: type.STRING(99),
      descripcion_enfermedad: type.STRING,
      estado_enfermedad: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionEnfermedad: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEnfermedad: {
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
