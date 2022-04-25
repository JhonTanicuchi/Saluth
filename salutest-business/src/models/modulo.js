const modulo = (sequelize, type) => {
    return sequelize.define(
      "modulo",
      {
        id_modulo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre_modulo: type.STRING,
        descripcion_modulo: type.STRING,
        
        estado_modulo: type.BOOLEAN,

        creacionModulo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionModulo: {
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
  
  module.exports = modulo;