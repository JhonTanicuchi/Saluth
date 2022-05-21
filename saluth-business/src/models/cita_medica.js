const cita_medica = (sequelize, type) => {
  return sequelize.define(
    "cita_medica",
    {
      id_cita_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_asignada: type.STRING(99),
      hora_inicio: type.STRING,
      hora_fin: type.STRING,
      estado_cita_medica: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionCita_medica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionCita_medica: {
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

module.exports = cita_medica;
