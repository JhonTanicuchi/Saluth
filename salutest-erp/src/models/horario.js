const horario = (sequelize, type) => {
  return sequelize.define(
    "horario",
    {
      id_horario: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hora_ingreso: type.STRING,
      hora_salida: type.STRING,
      estado_horario: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionHorario: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionHorario: {
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

module.exports = horario;
