const sucursalMedica_empleado = (sequelize, type) => {
  return sequelize.define(
    "sucursalMedica_empleado",
    {
      id_sucursalMedica_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_ingreso: type.STRING,
      fecha_salida: type.STRING,
      motivo_salida: type.STRING,
      creacionSucursalMedica_empleado: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSucursalMedica_empleado: {
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

module.exports = sucursalMedica_empleado;
