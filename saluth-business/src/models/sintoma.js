const sintoma = (sequelize, type) => {
  return sequelize.define(
    "sintoma",
    {
      id_sintoma: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_sintoma: type.STRING,
      descripcion_sintoma: type.STRING,
      estado_sintoma: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionSintoma: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSintoma: {
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

module.exports = sintoma;
