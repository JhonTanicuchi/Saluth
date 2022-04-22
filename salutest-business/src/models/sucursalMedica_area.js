const sucursalMedica_area = (sequelize, type) => {
  return sequelize.define(
    "sucursalMedica_area",
    {
      id_sucursalMedica_area: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionSucursalMedica_area: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSucursalMedica_area: {
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

module.exports = sucursalMedica_area;
