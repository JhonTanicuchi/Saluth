const historia_clinica = (sequelize, type) => {
  return sequelize.define(
    "historia_clinicae",
    {
      id_historia_clinica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_historia_clinica: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionHistoria_clinica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionHistoria_clinica: {
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

module.exports = historia_clinica;
