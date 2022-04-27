const turno = (sequelize, type) => {
  return sequelize.define(
    "turno",
    {
      id_turno: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_agendada_turno: type.STRING,
      estado_turno: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionTurno: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionTurno: {
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
