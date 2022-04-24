const managementapp = (sequelize, type) => {
    return sequelize.define(
      "managementapp",
      {
        id_managementapp: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre_managementapp: type.STRING,
        descripcion_managementapp: type.STRING,

        creacionManagementapp: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionManagementapp: {
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
  
  module.exports = managementapp;