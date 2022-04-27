const empleado_business = (sequelize, type) => {
  return sequelize.define(
    "empleado_business",
    {
      id_empleado_business: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_empleado_business: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionEmpleado_business: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEmpleado_business: {
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

module.exports = empleado_business;
