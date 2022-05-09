const catalogo = (sequelize, type) => {
  return sequelize.define(
    "catalogo",
    {
      id_catalogo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_catalogo: type.STRING,
      valor_catalogo: type.STRING,
      estado_catalogo: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionCatalogo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionCatalogo: {
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

module.exports = catalogo;
