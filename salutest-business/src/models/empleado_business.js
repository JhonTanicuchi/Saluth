const empleado_business = (sequelize, type) => {
  return sequelize.define(
    "empleado_business",
    {
      id_empleado_business: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado: type.STRING,
      creacionEmpleados_business: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEmpleados_business: {
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
