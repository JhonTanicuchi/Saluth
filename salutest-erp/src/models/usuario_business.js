const usuario_business = (sequelize, type) => {
  return sequelize.define(
    "usuario_business",
    {
      id_usuario_business: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: type.STRING,
      password: type.STRING,
      correo: type.STRING,
      creacionUsuario_business: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuario_business: {
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

module.exports = usuario_business;
