const sucursalMedica_sala = (sequelize, type) => {
  return sequelize.define(
    "sucursalMedica_sala",
    {
      id_sucursalMedica_sala: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionSucursalMedica_sala: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSucursalMedica_sala: {
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

module.exports = sucursalMedica_sala;
