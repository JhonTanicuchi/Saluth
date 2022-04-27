const area_empleado = (sequelize, type) => {
  return sequelize.define(
    "area_empleado",
    {
      id_area_empleado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_area_empleado: type.STRING,
      creacionArea_empleado: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionArea_empleado: {
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
