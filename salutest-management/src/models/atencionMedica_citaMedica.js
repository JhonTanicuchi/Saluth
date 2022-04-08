const atencionMedica_citaMedica = (sequelize, type) => {
  return sequelize.define(
    "cita_medica",
    {
      id_atencionMedica_citaMedica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      creacionAtencionMedica_CitaMedica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionAtencionMedica_CitaMedica: {
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

module.exports = atencionMedica_citaMedica;
