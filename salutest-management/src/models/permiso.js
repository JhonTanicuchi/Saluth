const permiso = (sequelize, type) => {
  return sequelize.define(
    "permiso",
    {
      id_permiso: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_permiso: type.STRING,
      estado_permiso: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionPermiso: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionPermiso: {
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

module.exports = permiso;
