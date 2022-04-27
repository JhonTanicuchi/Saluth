const enfermedad_sintoma = (sequelize, type) => {
  return sequelize.define(
    "enfermedad_sintoma",
    {
      id_enfermedad_sintoma: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionEnfermedad_sintoma: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEnfermedad_sintoma: {
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

module.exports = enfermedad_sintoma;
