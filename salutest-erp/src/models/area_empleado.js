const area_empleado = (sequelize, type) => {
  return sequelize.define(
    "area_empleado",
    {
      id_area_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: type.STRING,
      creacionArea_empleados: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionArea_empleados: {
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

module.exports = area_empleado;
