const empleado = (sequelize, type) => {
  return sequelize.define(
    "empleado",
    {
      id_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_ingreso: type.STRING(99),
      fecha_salida: type.STRING,
      motivo_salida: type.STRING,
      estado: type.STRING,
      creacionUsuarios: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuarios: {
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

module.exports = empleado;
