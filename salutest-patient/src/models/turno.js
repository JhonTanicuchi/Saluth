const turno = (sequelize, type) => {
  return sequelize.define(
    "turno",
    {
      id_turno_laboratorio: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_agendada: type.STRING,
      estado: type.STRING,
      creacionTurnos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionTurnos: {
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

module.exports = turno;
