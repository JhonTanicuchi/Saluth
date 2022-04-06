const especialidad_empleado = (sequelize, type) => {
    return sequelize.define(
      "especialidad_empleado",
      {
        id_especialidad_empleado: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        creacionEspecialidad_empleado: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionEspecialidad_empleado: {
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
  
  module.exports = especialidad_empleado;