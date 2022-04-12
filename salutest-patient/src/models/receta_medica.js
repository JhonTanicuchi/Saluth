const receta_medica = (sequelize, type) => {
  return sequelize.define(
    "receta_medica",
    {
      id_receta_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      indicaciones: type.STRING,
      creacionReceta_Medicas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionReceta_Medicas: {
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

module.exports = receta_medica;
