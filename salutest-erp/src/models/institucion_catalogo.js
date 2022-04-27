const institucion_catalogo = (sequelize, type) => {
  return sequelize.define(
    "institucion_catalogo",
    {
      id_institucion_catalogo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionInstitucion_catalogo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionInstitucion_catalogo: {
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

module.exports = institucion_catalogo;