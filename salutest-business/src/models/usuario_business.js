const usuario_business = (sequelize, type) => {
  return sequelize.define(
    "usuario_business",
    {
      id_usuario_business: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: type.STRING(99),
      password: type.STRING,
      correo: type.STRING,
      creacionUsuarios_business: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuarios_business: {
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
