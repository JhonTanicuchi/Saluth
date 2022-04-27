const canton = (sequelize, type) => {
  return sequelize.define(
    "canton",
    {
      id_canton: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numero_canton: type.INTEGER,
      nombre_canton: type.STRING,
      estado_canton: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionCanton: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionCanton: {
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

module.exports = canton;
