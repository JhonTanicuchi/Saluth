const empleado = (sequelize, type) => {
  return sequelize.define(
    "empleado",
    {
      id_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_empleado: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionEmpleado: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEmpleado: {
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
