const provincia = (sequelize, type) => {
  return sequelize.define(
    "provincia",
    {
      id_provincia: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numero_provincia: type.INTEGER,
      nombre_provincia: type.STRING,
      estado_provincia: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionProvincia: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionProvincia: {
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

module.exports = provincia;
