const enfermedad_sintoma = (sequelize, type) => {
  return sequelize.define(
    "enfermedad_sintoma",
    {
      id_enfermedad_sintoma: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      creacionEnfermedad_sintomas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEnfermedad_sintomas: {
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
