const examen = (sequelize, type) => {
  return sequelize.define(
    "examen",
    {
      id_examen: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_examen: type.STRING,
      estado_examen: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionExamen: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionExamen: {
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

module.exports = examen;
