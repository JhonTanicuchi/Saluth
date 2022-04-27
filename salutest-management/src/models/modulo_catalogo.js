const modulo_catalogo = (sequelize, type) => {
  return sequelize.define(
    "modulo_catalogo",
    {
      id_modulo_catalogo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionModulo_catalogo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionModulo_catalogo: {
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

module.exports = modulo_catalogo;