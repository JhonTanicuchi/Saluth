const parroquia = (sequelize, type) => {
  return sequelize.define(
    "parroquia",
    {
      id_parroquia: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numero_parroquia: type.INTEGER,
      nombre_parroquia: type.STRING,
      estado_parroquia: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionParroquia: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionParroquia: {
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

module.exports = parroquia;
