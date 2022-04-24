const management = (sequelize, type) => {
    return sequelize.define(
      "management",
      {
        id_management: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre_management: type.STRING,
        descripcion_management: type.STRING,
        estado_management: type.BOOLEAN,
        default_management: type.BOOLEAN,


        creacionManagement: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionManagement: {
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
  
  module.exports = management;