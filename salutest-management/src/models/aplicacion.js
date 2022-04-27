const aplicacion = (sequelize, type) => {
  return sequelize.define(
    "aplicacion",
    {
      id_aplicacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_aplicacion: type.STRING,
      descripcion_aplicacion: type.STRING,
      estado_aplicacion: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionAplicacion: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionAplicacion: {
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

module.exports = aplicacion;
