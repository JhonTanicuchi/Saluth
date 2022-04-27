const shortcut = (sequelize, type) => {
  return sequelize.define(
    "shortcut",
    {
      id_shortcut: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_shortcut: type.STRING,
      ruta_shortcut: type.STRING,
      estado_shortcut: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionShortcut: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionShortcut: {
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
