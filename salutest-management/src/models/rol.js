const rol = (sequelize, type) => {
  return sequelize.define(
    "rol",
    {
      id_rol: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_rol: type.STRING,
      estado_rol: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionRol: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionRol: {
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

module.exports = rol;
