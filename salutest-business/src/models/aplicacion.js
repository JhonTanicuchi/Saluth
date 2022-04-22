const aplicacion = (sequelize, type) => {
    return sequelize.define(
      "aplicacion",
      {
        id_aplicacion: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING,

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