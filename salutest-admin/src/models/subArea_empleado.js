const subArea_empleado = (sequelize, type) => {
    return sequelize.define(
      "subArea_empleado",
      {
        id_subArea_empleado: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fecha: type.STRING,
          creacionSubArea_empleado: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionSubArea_empleados: {
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
  
  module.exports = subArea_empleado;