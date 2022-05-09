const especialidad = (sequelize, type) => {
  return sequelize.define(
    "especialidad",
    {
      id_especialidad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_especialidad: type.STRING,
      descripcion_especialidad: type.STRING,
      estado_especialidad: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionEspecialidad: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEspecialidad: {
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

module.exports = especialidad;
