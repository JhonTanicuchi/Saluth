const rol_permiso = (sequelize, type) => {
  return sequelize.define(
    "rol_permiso",
    {
      id_rol_permiso: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionRol_permiso: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionRol_permiso: {
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

module.exports = rol_permiso;