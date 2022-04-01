const paciente = (sequelize, type) => {
  return sequelize.define(
    "paciente",
    {
      id_paciente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      donador: type.BOOLEAN,
      estado: type.STRING,
      creacionUsuarios: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuarios: {
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

module.exports = paciente;
