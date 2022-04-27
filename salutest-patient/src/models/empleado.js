const empleado = (sequelize, type) => {
  return sequelize.define(
    "empleado",
    {
      id_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado: type.STRING,
      creacionEmpleados: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEmpleados: {
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
