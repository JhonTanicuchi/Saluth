const usuario_paciente = (sequelize, type) => {
  return sequelize.define(
    "usuario_paciente",
    {
      id_usuario_paciente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: type.STRING,
      password: type.STRING,
      correo: type.STRING,
      creacionUsuario_Paciente: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuario_Paciente: {
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

module.exports = usuario_paciente;
