const usuario_empleado = (sequelize, type) => {
  return sequelize.define(
    "usuario_empleado",
    {
      id_usuario_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: type.STRING,
      password: type.STRING,
      correo: type.STRING,
      creacionUsuario_Empleado: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuario_Empleado: {
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

module.exports = usuario_empleado;
