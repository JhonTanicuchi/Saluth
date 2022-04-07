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
      estado: type.STRING,
      creacionHorarios: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionHorarios: {
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
