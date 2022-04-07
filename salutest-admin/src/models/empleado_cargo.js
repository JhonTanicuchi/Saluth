const empleado_cargo = (sequelize, type) => {
    return sequelize.define(
      "empleado_cargo",
      {
        id_empleado_cargo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fecha: type.STRING(99),
        creacionEmpleado_cargo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionEmpleado_cargo: {
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
  
  module.exports = empleado_cargo;