const shortcut = (sequelize, type) => {
    return sequelize.define(
      "shortcut",
      {
        id_shortcut: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: type.STRING,
        ruta: type.STRING,
        estado: type.STRING,

        creacionshortcut: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionshortcut: {
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
  
  module.exports = shortcut;