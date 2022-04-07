const equipo_medico = (sequelize, type) => {
  return sequelize.define(
    "equipo_medico",
    {
      id_equipo_medico: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      estado: type.STRING,
      
      creacionEquipo_medicos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEquipo_medicos: {
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
