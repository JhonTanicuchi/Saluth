const paciente = (sequelize, type) => {
  return sequelize.define(
    "paciente",
    {
      id_paciente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_paciente: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionPaciente: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionPaciente: {
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
