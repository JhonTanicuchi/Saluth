const equipo_medico = (sequelize, type) => {
  return sequelize.define(
    "equipo_medico",
    {
      id_equipo_medico: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_equipo_medico: type.STRING,
      estado_equipo_medico: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionEquipo_medico: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEquipo_medico: {
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

module.exports = equipo_medico;
