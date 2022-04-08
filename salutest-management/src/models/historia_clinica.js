const historia_clinica = (sequelize, type) => {
  return sequelize.define(
    "historia_clinicae",
    {
      id_historia_clinica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_creacion: type.STRING,
      campo: type.STRING,
      creacionHistoria_clinicas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionHistoria_clinicas: {
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
